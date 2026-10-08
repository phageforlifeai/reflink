#!/usr/bin/env python3
"""
Panel-B style stacked bar figure with FOUR columns.

Columns (left -> right):
    PhaTYP temperate (n=77) | PhaTYP virulent (n=75) |
    PhaStyle temperate (n=80) | PhaStyle virulent (n=72)

Every column is one 100%-stacked bar with segments (bottom -> top):
    AMR (green) | Toxin (orange) | Stress (maroon)

Style is matched to Panel B of the reference figure: colour-matched stacked
segments with thin white separators, white bold % labels inside segments,
grey y gridlines with a "100%" top tick, bold two-line x labels, Fisher's
exact significance brackets per tool pair, grey tool headers, and a bottom
AMR/Toxin/Stress legend.

Usage:  python3 make_panel_b.py [--dpi 300] [--out STEM]
"""

from __future__ import annotations

import argparse
from pathlib import Path

import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
from matplotlib.patches import Patch
from scipy.stats import fisher_exact

HERE = Path(__file__).resolve().parent

# ------------------------------------------------- reference palette -------
COLORS = {
    "AMR": "#4A9D7C",    # green
    "Toxin": "#D9913F",  # orange
    "Stress": "#A84A66", # maroon / raspberry
}
ORDER = ["AMR", "Toxin", "Stress"]
SHORT = {"AMR-associated": "AMR", "Toxin-associated": "Toxin",
         "Stress-associated": "Stress"}

BG = "#F7F8FA"     # near-white figure background
GRID = "#E2E5E9"   # light horizontal gridlines
TEXT = "#141414"
GRAY = "#9B9B9B"   # tool header grey (as in reference panel A)

COLS = [  # (classifier, lifestyle) in plotting order
    ("PhaTYP", "temperate"),
    ("PhaTYP", "virulent"),
    ("PhaStyle", "temperate"),
    ("PhaStyle", "virulent"),
]

SUP = str.maketrans("0123456789-", "⁰¹²³⁴⁵⁶⁷⁸⁹⁻")


def sci(x: float) -> str:
    mant, exp = f"{x:.1e}".split("e")
    return f"{float(mant):g}\u00d710{str(int(exp)).translate(SUP)}"


def p_text(p: float) -> str:
    return "p < 1\u00d710\u207b\u00b3\u2070" if p < 1e-30 else f"p = {sci(p)}"


def load(data_file: Path):
    pct = pd.read_excel(data_file, sheet_name="Signature")
    cnt = pd.read_excel(data_file, sheet_name="counts")
    pct.columns = [str(c).strip() for c in pct.columns]
    cnt.columns = [str(c).strip() for c in cnt.columns]
    for col in ("Temperate", "Virulent"):
        pct[col] = (pct[col].astype(str).str.replace("%", "", regex=False)
                    .str.strip().astype(float))
    pct["Classifier"] = pct["Classifier"].astype(str).str.strip()
    return pct, cnt


def counts_for(pct: pd.DataFrame, cnt: pd.DataFrame, clf: str, life: str):
    """Integer signature counts for one column (rounded from %)."""
    n = int(cnt[(cnt.Classifier == clf) & (cnt.Lifestyle == life)].n.iloc[0])
    sub = pct[pct.Classifier == clf].set_index("Signature")
    col = "Temperate" if life == "temperate" else "Virulent"
    vals = {SHORT[s]: float(sub.loc[s, col]) for s in sub.index}
    amr = round(n * vals["AMR"] / 100)
    tox = round(n * vals["Toxin"] / 100)
    return n, {"AMR": amr, "Toxin": tox, "Stress": n - amr - tox}


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--data", type=Path, default=HERE / "panelB_signature_classifier.xlsx")
    ap.add_argument("--out", type=Path, default=HERE / "panelB_combined")
    ap.add_argument("--dpi", type=int, default=300)
    args = ap.parse_args()

    pct, cnt = load(args.data)

    fig, ax = plt.subplots(figsize=(11.5, 7.2), facecolor=BG)
    ax.set_facecolor(BG)
    fig.subplots_adjust(left=0.065, right=0.995, top=0.86, bottom=0.185)

    x = np.arange(len(COLS))
    width = 0.72
    bottoms = np.zeros(len(COLS))

    # stacked bars
    for sig in ORDER:
        heights = []
        for clf, life in COLS:
            sub = pct[pct.Classifier == clf].set_index("Signature")
            col = "Temperate" if life == "temperate" else "Virulent"
            heights.append(float(sub.loc[[s for s in sub.index if SHORT[s] == sig][0], col]))
        heights = np.array(heights)
        ax.bar(x, heights, width, bottom=bottoms, color=COLORS[sig],
               edgecolor="white", linewidth=1.6, zorder=3)
        for xi, (b, h) in enumerate(zip(bottoms, heights)):
            if h >= 5:  # white in-bar label for visible segments only
                ax.text(xi, b + h / 2, f"{h:.1f}%", ha="center", va="center",
                        color="white", fontsize=11.5, fontweight="bold", zorder=4)
        bottoms = bottoms + heights

    # axes chrome, exactly like reference panel B
    for s in ax.spines.values():
        s.set_visible(False)
    ax.set_ylim(0, 124)
    ax.set_yticks([0, 25, 50, 75, 100])
    ax.set_yticklabels(["0", "25", "50", "75", "100%"], color=TEXT, fontsize=11)
    ax.tick_params(axis="y", length=0)
    for yv in (25, 50, 75, 100):
        ax.axhline(yv, color=GRID, linewidth=1.0, zorder=0)
    ax.set_xticks(x)
    ax.set_xticklabels(
        [f"{life}\n(n={counts_for(pct, cnt, clf, life)[0]})" for clf, life in COLS],
        fontsize=12.5, fontweight="bold", color=TEXT)
    ax.tick_params(axis="x", length=0, pad=8)
    ax.set_xlim(-0.7, len(COLS) - 0.3)

    # grey tool headers over each pair (visual language of reference panel A)
    for xc, clf in [(0.5, "PhaTYP"), (2.5, "PhaStyle")]:
        ax.text(xc, 117, clf, ha="center", va="center",
                color=GRAY, fontsize=13.5, fontweight="bold")

    # Fisher's-exact significance bracket per tool pair
    for (x1, x2), clf in zip([(0, 1), (2, 3)], ["PhaTYP", "PhaStyle"]):
        _, ct = counts_for(pct, cnt, clf, "temperate")
        _, cv = counts_for(pct, cnt, clf, "virulent")
        _, p = fisher_exact([[ct["AMR"], ct["Toxin"]], [cv["AMR"], cv["Toxin"]]])
        yb = 105.5
        ax.plot([x1, x1, x2, x2], [yb - 2.2, yb, yb, yb - 2.2],
                color=TEXT, linewidth=1.1, zorder=5)
        ax.text((x1 + x2) / 2, yb + 2.2, f"Fisher's exact, {p_text(p)}",
                ha="center", va="bottom", fontsize=10.5, fontweight="bold",
                color=TEXT, zorder=5)

    # panel tag
    fig.text(0.025, 0.955, "B", fontsize=17, fontweight="bold", color=TEXT)

    # bottom legend
    handles = [Patch(facecolor=COLORS[s], label=s) for s in ORDER]
    fig.legend(handles=handles, loc="lower center", ncol=3, frameon=False,
               fontsize=12.5, bbox_to_anchor=(0.62, -0.005),
               handlelength=1.1, handleheight=1.1, columnspacing=2.2)

    png = args.out.with_suffix(".png")
    fig.savefig(png, dpi=args.dpi, facecolor=BG, bbox_inches="tight")
    fig.savefig(args.out.with_suffix(".pdf"), facecolor=BG, bbox_inches="tight")
    plt.close(fig)
    print(f"wrote {png} and {args.out.with_suffix('.pdf')}")


if __name__ == "__main__":
    main()
