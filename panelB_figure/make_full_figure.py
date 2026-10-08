#!/usr/bin/env python3
"""
High-resolution rebuild of the phage reconciliation figure:

  Panel A - Sankey / alluvial diagram of lifestyle calls
            PhaTYP (temperate n=77, virulent n=75)  vs
            PhaStyle (temperate n=80, virulent n=72),
            with the 3-genome discordant flow in red.
  Panel B - 100%-stacked AMR/Toxin/Stress bars per lifestyle,
            with Fisher's exact bracket.

Data extracted from the rendered figure; see extracted_data.csv files.
Usage:  python3 make_full_figure.py [--dpi 600]
"""

from __future__ import annotations

import argparse
from pathlib import Path

import matplotlib.pyplot as plt
import numpy as np
from matplotlib.patches import Patch, Rectangle
from scipy.stats import fisher_exact

HERE = Path(__file__).resolve().parent

# ------------------------------------------------------------- palette -----
BG = "#F7F8FA"
GRID = "#E2E5E9"
TEXT = "#141414"
GRAY = "#9B9B9B"

NODE_TEMP = "#2F6D93"   # dark steel blue node bars (temperate)
NODE_VIR = "#6B5B9E"    # purple node bars (virulent)
BAND_TEMP = "#6E94AF"   # blue-grey agreeing band
BAND_VIR = "#8B7EB2"    # muted purple agreeing band
RED = "#C0453E"         # discordant flow + annotation

AMR, TOXIN, STRESS = "#4A9D7C", "#D9913F", "#A84A66"

# ------------------------------------------------------------- data --------
N_TEMP_L, N_VIR_L = 77, 75      # PhaTYP
N_TEMP_R, N_VIR_R = 80, 72      # PhaStyle
DISCORD = 3                     # PhaTYP virulent -> PhaStyle temperate

PCT = {  # panel B: lifestyle -> signature percentages (as labelled)
    "temperate": {"AMR": 6.5, "Toxin": 92.2, "Stress": 1.3},
    "virulent": {"AMR": 97.3, "Toxin": 2.7, "Stress": 0.0},
}
CNT = {  # integer counts (rounded from % of n) used for Fisher test
    "temperate": {"AMR": 5, "Toxin": 71, "Stress": 1},
    "virulent": {"AMR": 73, "Toxin": 2, "Stress": 0},
}

TITLE = "Predicted Phage Lifestyle Tracks with Distinct AMR and Toxin Gene Signatures"
SUBTITLE = ("Two independent classifiers agree on lifestyle for 149/152 genomes (98.0%); "
            "the resulting call corresponds almost perfectly with AMR versus toxin gene carriage")


def smooth(t: np.ndarray) -> np.ndarray:
    return t * t * (3 - 2 * t)


def band(ax, xl, xr, l0, l1, r0, r1, color, zorder):
    t = np.linspace(0, 1, 240)
    x = xl + (xr - xl) * t
    s = smooth(t)
    ax.fill_between(x, l0 + (r0 - l0) * s, l1 + (r1 - l1) * s,
                    color=color, linewidth=0, zorder=zorder)


def node(ax, x0, x1, y0, y1, color):
    ax.add_patch(Rectangle((x0, y0), x1 - x0, y1 - y0, facecolor=color,
                           edgecolor="white", linewidth=1.6, zorder=4))


def draw_sankey(ax):
    ax.set_facecolor(BG)
    ax.axis("off")
    ax.set_xlim(-0.42, 1.42)
    ax.set_ylim(-0.34, 1.22)

    gap = 0.07
    s = (1 - gap) / (N_TEMP_L + N_VIR_L)
    LT1, LT0 = 1.0, 1.0 - N_TEMP_L * s          # left temperate top/bottom
    VT1, VT0 = LT0 - gap, 0.0                    # left virulent top/bottom
    RT1, RT0 = 1.0, 1.0 - N_TEMP_R * s          # right temperate
    RB1, RB0 = RT0 - gap, 0.0                    # right virulent

    xl, xr = 0.052, 0.948
    band(ax, xl, xr, LT0, LT1, RT0, RT1 - DISCORD * s, BAND_TEMP, 2)   # 77 agree
    band(ax, xl, xr, VT1 - (N_VIR_L - DISCORD) * s, VT1, RB0, RB1, BAND_VIR, 2)  # 72 agree
    band(ax, xl, xr, VT0, VT0 + DISCORD * s, RT1 - DISCORD * s, RT1, RED, 3)     # 3 discord

    node(ax, 0.0, 0.045, LT0, LT1, NODE_TEMP)
    node(ax, 0.0, 0.045, VT0, VT1, NODE_VIR)
    node(ax, 0.955, 1.0, RT0, RT1, NODE_TEMP)
    node(ax, 0.955, 1.0, RB0, RB1, NODE_VIR)

    kw = dict(fontweight="bold", color=TEXT, fontsize=12.5)
    ax.text(-0.03, (LT0 + LT1) / 2, f"temperate\n(n={N_TEMP_L})", ha="right", va="center", **kw)
    ax.text(-0.03, (VT0 + VT1) / 2, f"virulent\n(n={N_VIR_L})", ha="right", va="center", **kw)
    ax.text(1.03, (RT0 + RT1) / 2, f"temperate\n(n={N_TEMP_R})", ha="left", va="center", **kw)
    ax.text(1.03, (RB0 + RB1) / 2, f"virulent\n(n={N_VIR_R})", ha="left", va="center", **kw)

    ax.text(0.0, 1.13, "PhaTYP", ha="left", color=GRAY, fontsize=13.5, fontweight="bold")
    ax.text(0.955, 1.13, "PhaStyle", ha="left", color=GRAY, fontsize=13.5, fontweight="bold")
    ax.text(0.5, 1.19, "149/152 genomes (98.0%) agree", ha="center",
            fontsize=13, fontweight="bold", color=TEXT)

    ax.plot([0.5, 0.5], [-0.115, -0.015], color=RED, linewidth=1.1, zorder=5)
    ax.text(0.5, -0.15, "3 genomes:\nPhaTYP \u2192 virulent\nPhaStyle \u2192 temperate",
            ha="center", va="top", color=RED, fontsize=11, fontweight="bold")


def draw_bars(ax):
    ax.set_facecolor(BG)
    for sp in ax.spines.values():
        sp.set_visible(False)
    ax.set_ylim(0, 124)
    ax.set_yticks([0, 25, 50, 75, 100])
    ax.set_yticklabels(["0", "25", "50", "75", "100%"], color=TEXT, fontsize=11)
    ax.tick_params(axis="y", length=0)
    for yv in (25, 50, 75, 100):
        ax.axhline(yv, color=GRID, linewidth=1.0, zorder=0)

    xs = [0, 1]
    width = 0.74
    for xi, life in zip(xs, ("temperate", "virulent")):
        bottom = 0.0
        for sig, col in (("AMR", AMR), ("Toxin", TOXIN), ("Stress", STRESS)):
            h = PCT[life][sig]
            ax.bar(xi, h, width, bottom=bottom, color=col, edgecolor="white",
                   linewidth=1.6, zorder=3)
            if h >= 5:
                ax.text(xi, bottom + h / 2, f"{h:.1f}%", ha="center", va="center",
                        color="white", fontsize=12, fontweight="bold", zorder=4)
            bottom += h
    ax.set_xticks(xs)
    ax.set_xticklabels([f"temperate\n(n={N_TEMP_L})", f"virulent\n(n={N_VIR_L})"],
                       fontsize=12.5, fontweight="bold", color=TEXT)
    ax.tick_params(axis="x", length=0, pad=8)
    ax.set_xlim(-0.75, 1.9)

    _, p = fisher_exact([[CNT["temperate"]["AMR"], CNT["temperate"]["Toxin"]],
                         [CNT["virulent"]["AMR"], CNT["virulent"]["Toxin"]]])
    txt = "p < 1\u00d710\u207b\u00b3\u2070" if p < 1e-30 else f"p = {p:.1e}"
    yb = 105.5
    ax.plot([0, 0, 1, 1], [yb - 2.2, yb, yb, yb - 2.2], color=TEXT, linewidth=1.1, zorder=5)
    ax.text(0.5, yb + 2.2, f"Fisher's exact, {txt}", ha="center", va="bottom",
            fontsize=10.5, fontweight="bold", color=TEXT, zorder=5)


def main():
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--dpi", type=int, default=600)
    ap.add_argument("--out", type=Path, default=HERE / "phage_reconciliation_figure")
    args = ap.parse_args()

    fig = plt.figure(figsize=(16.7, 10), facecolor=BG)
    fig.text(0.5, 0.955, TITLE, ha="center", fontsize=17, fontweight="bold", color=TEXT)
    fig.text(0.5, 0.915, SUBTITLE, ha="center", fontsize=11.5, style="italic", color="#555555")
    fig.text(0.035, 0.865, "A", fontsize=16, fontweight="bold", color=TEXT)
    fig.text(0.53, 0.865, "B", fontsize=16, fontweight="bold", color=TEXT)

    draw_sankey(fig.add_axes([0.07, 0.12, 0.40, 0.68]))
    draw_bars(fig.add_axes([0.60, 0.12, 0.37, 0.68]))

    handles = [Patch(facecolor=c, label=n) for n, c in
               (("AMR", AMR), ("Toxin", TOXIN), ("Stress", STRESS))]
    fig.legend(handles=handles, loc="lower right", ncol=3, frameon=False, fontsize=12.5,
               bbox_to_anchor=(0.88, 0.015), handlelength=1.1, handleheight=1.1,
               columnspacing=2.2)

    png = args.out.with_suffix(".png")
    fig.savefig(png, dpi=args.dpi, facecolor=BG)
    fig.savefig(args.out.with_suffix(".pdf"), facecolor=BG)
    plt.close(fig)
    print(f"wrote {png} ({args.dpi} dpi) and {args.out.with_suffix('.pdf')}")


if __name__ == "__main__":
    main()
