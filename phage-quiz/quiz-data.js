/* =========================================================================
   PHAGE QUIZ — QUESTION DATA
   7th ICBRAR-style conference quiz (new edition)
   Structure mirrors the ICBRAR 2025 quiz: 4 teams, MCQ rounds with
   8 team questions + 2 audience questions, visual round, acronyms,
   rapid fire (8/team), tie-breaker and a comedy round.
   NEW topic rounds added: Phage Therapy & Clinical Frontiers,
   Phage Ecology & One Health, Bacterial Defenses & Phage Counter-Defense.
   ========================================================================= */
window.QUIZ = /*QUIZ_JSON_START*/{
  "meta": {
    "title": "PHAGE QUIZ",
    "subtitle": "7th International Conference on Bacteriophage Research and Antimicrobial Resistance",
    "tagline": "Lytic Legends Edition — 13 rounds of plaques, probes and punchlines",
    "organizers": [
      "Quiz Committee, PhageForLife"
    ]
  },
  "teams": [
    {
      "name": "Lytic Legends",
      "members": [
        "Dr. Ruma",
        "Ms. Priya",
        "Mr. Karan"
      ]
    },
    {
      "name": "Biofilm Breakers",
      "members": [
        "Dr. Rupali",
        "Dr. Prachi",
        "Mr. Prajasattak"
      ]
    },
    {
      "name": "Phage Pharmers",
      "members": [
        "Team member 1",
        "Team member 2",
        "Team member 3"
      ]
    },
    {
      "name": "Virion Architects",
      "members": [
        "Team member 1",
        "Team member 2",
        "Team member 3"
      ]
    }
  ],
  "rounds": [
    {
      "num": 1,
      "title": "GENERAL QUESTIONS",
      "type": "mcq",
      "scoring": {
        "correct": 10,
        "wrong": 0,
        "time": 30
      },
      "questions": [
        {
          "q": "Phage genomes are unusually compact, with overlapping genes and non-canonical start codons. The best explanation is",
          "options": [
            "Selection for genome compaction under capsid packaging constraints",
            "A high mutation rate that erases intergenic regions",
            "Limitation of host ribosomes during infection",
            "An artifact of automated annotation pipelines"
          ],
          "answer": 0
        },
        {
          "q": "The ~50–60 atm internal pressure that drives genome ejection from tailed phage capsids is generated mainly by",
          "options": [
            "The host proton-motive force pulling DNA inward",
            "Dense inverse-spool DNA packing with electrostatic self-repulsion",
            "ATP hydrolysis by the portal motor during ejection",
            "Osmotic water influx upon receptor binding"
          ],
          "answer": 1
        },
        {
          "q": "At an MOI of exactly 1, the fraction of host cells receiving at least one phage (Poisson distribution) is approximately",
          "options": [
            "37%",
            "50%",
            "63%",
            "90%"
          ],
          "answer": 2
        },
        {
          "q": "In the lambda lysis cassette (S, R, Rz, Rz1), the spanins Rz/Rz1 act by",
          "options": [
            "Degrading peptidoglycan from the periplasm",
            "Timing holin insertion into the inner membrane",
            "Recycling murein for the next infection cycle",
            "Fusing inner and outer membranes after endolysin action"
          ],
          "answer": 3
        },
        {
          "q": "Optimality models of lysis timing predict that the evolutionarily stable latent period balances",
          "options": [
            "Burst size against the number of lysis cycles completed per unit time",
            "Adsorption rate against the eclipse period",
            "Genome size against capsid interior volume",
            "Latent period against the multiplicity of infection"
          ],
          "answer": 0
        },
        {
          "q": "Botstein's “modular theory” of phage evolution proposes that",
          "options": [
            "Phage genes evolve strictly vertically with their hosts",
            "Functional modules (head, tail, lysis, lysogeny) recombine across phage lineages",
            "All tailed phages preserve a single ancestral gene order",
            "Phage genomes change only by point mutation"
          ],
          "answer": 1
        },
        {
          "q": "Jumbo phages such as ΦKZ protect their replicating DNA inside a compartment whose shell is built from",
          "options": [
            "Host-derived lipid bilayer",
            "Condensed RNA and polyamines",
            "The protein chimallin (a proteinaceous phage nucleus)",
            "Crystallized terminase"
          ],
          "answer": 2
        },
        {
          "q": "The kinetics of phage adsorption to susceptible hosts are best described as",
          "options": [
            "Zero-order until receptors saturate",
            "First-order in phage only, independent of host density",
            "Logistic, limited by burst size",
            "Second-order overall: first-order in both phage and host concentration"
          ],
          "answer": 3
        },
        {
          "q": "Which is generally SMALLER?",
          "audience": true,
          "options": [
            "A bacteriophage",
            "A bacterium",
            "A yeast cell",
            "A red blood cell"
          ],
          "answer": 0
        },
        {
          "q": "Phage contamination of starter cultures is a classic industrial problem in which fermentation?",
          "audience": true,
          "options": [
            "Bread baking",
            "Cheese and yogurt making",
            "Beer brewing",
            "Wine making"
          ],
          "answer": 1
        }
      ]
    },
    {
      "num": 2,
      "title": "HISTORY OF BACTERIOPHAGES",
      "type": "mcq",
      "scoring": {
        "correct": 10,
        "wrong": 0,
        "time": 30
      },
      "questions": [
        {
          "q": "In the Hershey–Chase experiment, what physically separated “phage ghosts” from infected bacteria?",
          "options": [
            "Shearing in a Waring blendor",
            "Differential centrifugation of isotopes",
            "Freeze–thaw lysis of the cells",
            "Ethanol precipitation of free phage"
          ],
          "answer": 0
        },
        {
          "q": "Benzer's rII recombination mapping was only possible because rII mutants fail to plaque on",
          "options": [
            "Escherichia coli B",
            "Salmonella Typhimurium LT2",
            "Escherichia coli K12(λ)",
            "Pseudomonas aeruginosa PAO1"
          ],
          "answer": 2
        },
        {
          "q": "Crick, Brenner and colleagues (1961) proved the triplet nature of the code using proflavin-induced frameshifts in",
          "options": [
            "The T4 rII gene",
            "Lambda cI",
            "MS2 coat protein",
            "T7 gene 10"
          ],
          "answer": 0
        },
        {
          "q": "Weigle reactivation (1960) showed that UV-damaged lambda is rescued by",
          "options": [
            "Recombination with co-infecting intact phage",
            "SOS-induced host repair functions",
            "Photoreactivation of phage RNA",
            "Mitomycin C induction of the prophage"
          ],
          "answer": 1
        },
        {
          "q": "“Host-controlled variation” of lambda grown on E. coli K-12 versus B directly led to the discovery of",
          "options": [
            "CRISPR-Cas immunity",
            "Abortive infection systems",
            "Restriction–modification systems",
            "Superinfection exclusion"
          ],
          "answer": 2
        },
        {
          "q": "The Luria–Delbrück fluctuation test established that phage-resistance mutations",
          "options": [
            "Are instructed by phage exposure",
            "Spread by transduction",
            "Require SOS induction",
            "Arise spontaneously before phage exposure"
          ],
          "answer": 3
        },
        {
          "q": "Frederick Twort's 1915 filterable agent was first observed lysing cultures of",
          "options": [
            "Shigella dysenteriae",
            "Vibrio cholerae",
            "Bacillus anthracis",
            "Staphylococcus"
          ],
          "answer": 3
        },
        {
          "q": "Which 1930s assessment most accelerated the decline of commercial phage therapy in the United States?",
          "options": [
            "The Flexner Report",
            "The Eaton & Bayne-Jones review of phage preparations",
            "The Nuremberg Code",
            "A Lister Institute ban"
          ],
          "answer": 1
        },
        {
          "q": "The 2017 compassionate-use case that brought phage therapy to global headlines treated a patient with",
          "audience": true,
          "options": [
            "Disseminated Acinetobacter baumannii infection",
            "MRSA endocarditis",
            "XDR tuberculosis",
            "Candida auris sepsis"
          ],
          "answer": 0
        },
        {
          "q": "The 1969 Nobel Prize (Delbrück, Hershey, Luria) honoured work on the replication and genetic structure of",
          "audience": true,
          "options": [
            "Influenza virus",
            "Bacteriophages",
            "Poliovirus",
            "Retroviruses"
          ],
          "answer": 1
        }
      ]
    },
    {
      "num": 3,
      "title": "PHAGE RELATED PROTOCOLS",
      "type": "mcq",
      "scoring": {
        "correct": 10,
        "wrong": 0,
        "time": 30
      },
      "questions": [
        {
          "q": "Top-agar concentrations above ~0.7% shrink plaque sizes mainly because they",
          "options": [
            "Melt at lower temperatures",
            "Select for resistant mutants",
            "Chelate Ca2+ and Mg2+",
            "Restrict phage diffusion through the matrix"
          ],
          "answer": 3
        },
        {
          "q": "The particle-to-PFU ratio of a lysate is obtained by combining",
          "options": [
            "qPCR with PFGE",
            "CsCl gradients with SYBR Gold",
            "Flow cytometry (particle counts) with plaque assay",
            "LAL with TEM"
          ],
          "answer": 2
        },
        {
          "q": "During phage DNA extraction, contaminating free bacterial DNA is removed selectively by",
          "options": [
            "DNase I treatment before capsid lysis (capsid DNA is protected)",
            "Proteinase K before lysis",
            "Ethanol precipitation alone",
            "RNase A after lysis"
          ],
          "answer": 0
        },
        {
          "q": "In a CsCl isopycnic gradient, phage bands at ~1.5 g/cm³. A lighter band at ~1.3 g/cm³ is most likely",
          "options": [
            "Protein and membrane vesicles",
            "Host chromosomal DNA",
            "Intact ribosomes",
            "Free exopolysaccharide"
          ],
          "answer": 0
        },
        {
          "q": "Chloroform clarification of a lysate must NOT be used for",
          "options": [
            "Microviruses",
            "Enveloped phages such as Φ6",
            "Filamentous inoviruses",
            "Tailed dsDNA phages"
          ],
          "answer": 1
        },
        {
          "q": "In the Ellis–Delbrück one-step growth experiment, unadsorbed phage is neutralized by",
          "options": [
            "Using stationary-phase hosts",
            "Anti-phage serum (or extreme dilution)",
            "Chilling to 4 °C",
            "Adding chloroform at time zero"
          ],
          "answer": 1
        },
        {
          "q": "A spot test giving confluent lysis that disappears on dilution, without plaques, indicates",
          "options": [
            "Lysis from without at high phage input",
            "A fully permissive host",
            "Lysogenic conversion",
            "Capsular blocking of adsorption"
          ],
          "answer": 0
        },
        {
          "q": "For phage stocks kept at 4 °C, which additive limits titer loss by adsorption to tube walls?",
          "options": [
            "100 mM EDTA",
            "50% glycerol",
            "Sodium azide",
            "Gelatin (or BSA)"
          ],
          "answer": 3
        },
        {
          "q": "In a spot test, a clear zone where phage suspension was dropped on a bacterial lawn indicates",
          "audience": true,
          "options": [
            "Medium contamination",
            "The strain is sensitive (lysis)",
            "The strain is resistant",
            "A mutation arose"
          ],
          "answer": 1
        },
        {
          "q": "In a plaque assay, each plaque originates from",
          "audience": true,
          "options": [
            "A free DNA fragment",
            "An antibiotic disc",
            "A single infectious phage particle",
            "A single bacterial cell"
          ],
          "answer": 2
        }
      ]
    },
    {
      "num": 4,
      "title": "PHAGE INFORMATICS",
      "type": "mcq",
      "scoring": {
        "correct": 10,
        "wrong": 0,
        "time": 30
      },
      "questions": [
        {
          "q": "Under MIMAG standards, a high-quality draft viral genome requires",
          "options": [
            "≥90% completeness, <5% contamination, plus tRNAs and identified termini",
            "Any contig >10 kb carrying a capsid gene",
            "100× coverage regardless of completeness",
            "Presence of an integrase gene"
          ],
          "answer": 0
        },
        {
          "q": "In read-mapping to a phage reference, terminal redundancy of the genome appears as",
          "options": [
            "A coverage gap at the cos site",
            "Elevated coverage across both genome ends",
            "Uniform coverage with spikes at tRNA genes",
            "Coverage falling to zero at the ends"
          ],
          "answer": 1
        },
        {
          "q": "Anti-CRISPR (acr) genes in prophages are typically found next to",
          "options": [
            "Host CRISPR arrays",
            "tRNA clusters",
            "aca genes encoding HTH-type transcriptional regulators",
            "Direct terminal repeats"
          ],
          "answer": 2
        },
        {
          "q": "“Viral tagging” (fluorescently labelled phage + flow sorting of single cells) is used to",
          "options": [
            "Measure buoyant density",
            "Cluster genomes by tetranucleotide frequency",
            "Sequence CRISPR spacers",
            "Link phages to their hosts at single-cell resolution"
          ],
          "answer": 3
        },
        {
          "q": "VIRIDIC demarcates viral species and genera using",
          "options": [
            "Intergenomic nucleotide similarity",
            "Shared tRNA counts",
            "Codon-usage distance",
            "Capsid morphology vectors"
          ],
          "answer": 0
        },
        {
          "q": "CheckV evaluates viral metagenome-assembled genomes for",
          "options": [
            "Host range prediction",
            "Completeness, contamination and provirus boundaries",
            "Plaque morphology class",
            "AMR gene content"
          ],
          "answer": 1
        },
        {
          "q": "PhageTerm determines",
          "options": [
            "Lysis timing from growth curves",
            "Taxonomic family from marker genes",
            "Genome termini and the packaging mechanism (cos, pac, headful)",
            "Optimal cocktail composition"
          ],
          "answer": 2
        },
        {
          "q": "Comparing phage codon adaptation to candidate hosts helps predict",
          "options": [
            "Burst size",
            "Capsid diameter",
            "Genome termini type",
            "The likely host / recent host adaptation"
          ],
          "answer": 3
        },
        {
          "q": "The complete collection of viruses in a sample is called the",
          "audience": true,
          "options": [
            "Microbiome",
            "Virome",
            "Proteome",
            "Plasmidome"
          ],
          "answer": 1
        },
        {
          "q": "A prophage region whose GC content differs strongly from the rest of the bacterial chromosome suggests",
          "audience": true,
          "options": [
            "Recently acquired foreign DNA",
            "A better plaque morphology",
            "A smaller capsid",
            "An RNA genome"
          ],
          "answer": 0
        }
      ]
    },
    {
      "num": 5,
      "title": "PHAGE IDENTIFICATION",
      "type": "mcq",
      "scoring": {
        "correct": 10,
        "wrong": 0,
        "time": 30
      },
      "questions": [
        {
          "q": "Under current ICTV taxonomy, phage T7 (formerly Podoviridae) is placed in the family",
          "options": [
            "Autographiviridae",
            "Ackermannviridae",
            "Drexlerviridae",
            "Herelleviridae"
          ],
          "answer": 0
        },
        {
          "q": "The lipid envelope of cystovirus Φ6 is",
          "options": [
            "Assembled from host-derived membrane lipids",
            "Acquired from outer-membrane vesicles of other species",
            "A protein-only pseudo-envelope",
            "Synthesized de novo with phage-made sterols"
          ],
          "answer": 0
        },
        {
          "q": "In levivirus MS2, the single-copy maturation (A) protein",
          "options": [
            "Triggers lysis",
            "Forms the icosahedral capsid",
            "Binds the F-pilus and escorts the RNA into the cell",
            "Acts as the replicase subunit"
          ],
          "answer": 2
        },
        {
          "q": "The portal vertex of tailed phages is typically a ring of",
          "options": [
            "5 subunits",
            "~12–13 portal subunits",
            "60 subunits matching T=1 symmetry",
            "1 subunit"
          ],
          "answer": 1
        },
        {
          "q": "Transcription of jumbo phage ΦKZ is independent of the host RNA polymerase because the phage",
          "options": [
            "Transcribes via a ribozyme",
            "Hijacks host Pol II",
            "Uses a phage-encoded sigma factor with host RNAP",
            "Encodes its own multisubunit RNA polymerase"
          ],
          "answer": 3
        },
        {
          "q": "Filamentous inoviruses leave the host without lysis by",
          "options": [
            "Low-frequency holin–endolysin lysis",
            "Spanin-mediated membrane fusion",
            "Budding with a lipid envelope",
            "Extrusion through the envelope (e.g., via the pIV secretin)"
          ],
          "answer": 3
        },
        {
          "q": "T4 whiskers (wac/fib3) function to",
          "options": [
            "Anchor the baseplate to the capsid",
            "Hold long tail fibers folded against the tail before adsorption",
            "Contract and pierce the outer membrane",
            "Package DNA into the procapsid"
          ],
          "answer": 1
        },
        {
          "q": "The collar of phage T4 forms",
          "options": [
            "The portal–terminase bridge",
            "The head–tail junction",
            "The sheath–tube interface",
            "The fiber–baseplate contact"
          ],
          "answer": 1
        },
        {
          "q": "Under TEM, a tailed phage with a small head and a very SHORT non-contractile tail is a",
          "audience": true,
          "options": [
            "Siphovirus",
            "Filamentous phage",
            "Podovirus",
            "Myovirus"
          ],
          "answer": 2
        },
        {
          "q": "Turbid (cloudy) plaques usually suggest",
          "audience": true,
          "options": [
            "A temperate phage forming lysogens",
            "A strictly lytic phage",
            "An RNA phage",
            "Medium contamination"
          ],
          "answer": 0
        }
      ]
    },
    {
      "num": 6,
      "title": "IDENTIFY THE FIGURE",
      "type": "visual",
      "scoring": {
        "correct": 10,
        "wrong": -5,
        "time": 30
      },
      "questions": [
        {
          "q": "In the arrowed interval of this one-step growth curve, no intracellular infectious virions can be recovered. This portion is the",
          "figure": "growth_curve",
          "options": [
            "Eclipse period",
            "Rise period",
            "Burst phase",
            "Adsorption plateau"
          ],
          "answer": 0
        },
        {
          "q": "The clear HALO extending beyond the plaque edge in this plate is most likely due to",
          "figure": "plaque_halo",
          "options": [
            "An antibiotic in the medium",
            "Extracellular depolymerase degrading the capsule/EPS",
            "Lysis from without",
            "Phage-resistant mutants"
          ],
          "answer": 1
        },
        {
          "q": "The arrowed long tail fibers bind reversibly. Irreversible adsorption of T4 is then mediated by",
          "figure": "t4_diagram",
          "options": [
            "Short tail fibers engaging the inner LPS core after baseplate triggering",
            "A second long-fiber receptor",
            "Teichoic acid bridging",
            "Pilus retraction"
          ],
          "answer": 0
        },
        {
          "q": "The integrated state depicted here is maintained by",
          "figure": "lysogeny",
          "options": [
            "Cro",
            "The cI repressor",
            "CII",
            "N antitermination"
          ],
          "answer": 1
        },
        {
          "q": "Top agar is cooled to ~45 °C before mixing because this",
          "figure": "overlay",
          "options": [
            "Increases plaque turbidity",
            "Speeds up lawn growth",
            "Prevents Ca2+ precipitation",
            "Keeps agar liquid while sparing phage and host from heat"
          ],
          "answer": 3
        },
        {
          "q": "The arrowed band at ~1.5 g/cm³ holds phage. A fainter band at ~1.3 g/cm³ in the same tube would be",
          "figure": "cscl",
          "options": [
            "Protein and membrane vesicles",
            "Host rRNA",
            "Intact progeny virions",
            "DNA–protein concatemers"
          ],
          "answer": 0
        },
        {
          "q": "Unlike virion 1, the MIDDLE virion injects its DNA by",
          "figure": "morphotypes",
          "options": [
            "Contracting its tail more slowly",
            "Injecting RNA instead of DNA",
            "Receptor-triggered conformational change without sheath contraction",
            "Consuming host ATP for contraction"
          ],
          "answer": 2
        },
        {
          "q": "To penetrate the matrix shown in this biofilm diagram, the most useful phage-encoded enzymes are",
          "figure": "biofilm",
          "options": [
            "DNA ligases",
            "Integrases",
            "RNA polymerases",
            "Depolymerases"
          ],
          "answer": 3
        },
        {
          "q": "On this spot-assay plate, a drop giving confluent clearing but no plaques on dilution indicates",
          "figure": "spot_assay",
          "options": [
            "A fully permissive host",
            "Lysogenic conversion",
            "Lysis from without / killing without productive infection",
            "Depolymerase secretion"
          ],
          "answer": 2
        },
        {
          "q": "Plate A shows clear plaques, plate B turbid plaques. The turbidity in plate B is caused by",
          "figure": "plaques_turbid",
          "options": [
            "Incomplete top-agar setting",
            "Growth of immune lysogens within the plaque",
            "Contaminating fungi",
            "A very small burst size"
          ],
          "answer": 1
        }
      ]
    },
    {
      "num": 7,
      "title": "PHAGE THERAPY & CLINICAL FRONTIERS",
      "type": "mcq",
      "badge": "NEW TOPIC",
      "scoring": {
        "correct": 10,
        "wrong": -5,
        "time": 30
      },
      "questions": [
        {
          "q": "The 2019 Nature Medicine report of an engineered three-phage cocktail successfully treated which infection in a cystic fibrosis patient?",
          "options": [
            "Staphylococcus aureus osteomyelitis",
            "Disseminated Mycobacterium abscessus infection",
            "Pseudomonas aeruginosa pneumonia",
            "Acinetobacter baumannii sepsis"
          ],
          "answer": 1
        },
        {
          "q": "Since 2018, Belgium delivers therapeutic phages to patients as",
          "options": [
            "Over-the-counter medicines",
            "Vaccines",
            "Medical devices",
            "Active pharmaceutical ingredients within magistral preparations"
          ],
          "answer": 3
        },
        {
          "q": "The PhagoBurn trial (Lancet ID, 2018) evaluated phage therapy against which pathogen in burn wounds?",
          "options": [
            "Escherichia coli",
            "Staphylococcus aureus",
            "Pseudomonas aeruginosa",
            "Klebsiella pneumoniae"
          ],
          "answer": 2
        },
        {
          "q": "LBP-EC01, the first engineered (CRISPR-Cas3-enhanced) phage tested in a randomized placebo-controlled trial, targets",
          "options": [
            "Escherichia coli in urinary tract infection",
            "Clostridioides difficile colitis",
            "Pseudomonas aeruginosa in CF",
            "Staphylococcus aureus bacteremia"
          ],
          "answer": 0
        },
        {
          "q": "“Phage steering” mitigates AMR by",
          "options": [
            "Increasing the MOI until resistance collapses",
            "Selecting phage-resistant mutants whose fitness cost re-sensitizes them to antibiotics",
            "Blocking phage receptors with antibodies",
            "Using phages to inactivate antibiotics"
          ],
          "answer": 1
        },
        {
          "q": "A key immunological limitation of repeated intravenous phage dosing is",
          "options": [
            "Permanent T-cell exhaustion",
            "Neutralizing antibodies that accelerate phage clearance",
            "Phages cannot enter the bloodstream",
            "Immediate IgE anaphylaxis in every patient"
          ],
          "answer": 1
        },
        {
          "q": "In the United States, compassionate-use phage therapy is typically authorized through",
          "options": [
            "An FDA emergency/expanded-access IND (eIND)",
            "EPA registration",
            "An OTC monograph",
            "A USDA rule"
          ],
          "answer": 0
        },
        {
          "q": "Before clinical use, a therapeutic phage genome must be screened to confirm",
          "options": [
            "Absence of toxin, AMR and virulence genes",
            "GC content above 60%",
            "Uracil instead of thymine",
            "Presence of an integrase gene"
          ],
          "answer": 0
        },
        {
          "q": "Commercial phage preparations sprayed on ready-to-eat food to control Listeria are an example of",
          "audience": true,
          "options": [
            "Pasteurization",
            "Vaccination",
            "Fermentation",
            "Biocontrol"
          ],
          "answer": 3
        },
        {
          "q": "Compared with antibiotics, a distinctive advantage of phages is that they",
          "audience": true,
          "options": [
            "Kill human cells selectively",
            "Never encounter resistance",
            "Self-amplify at the site of infection",
            "Work without any bacteria present"
          ],
          "answer": 2
        }
      ]
    },
    {
      "num": 8,
      "title": "PHAGE ACRONYMS",
      "type": "mcq",
      "scoring": {
        "correct": 10,
        "wrong": -5,
        "time": 30
      },
      "questions": [
        {
          "q": "In phage anti-CRISPR biology, Aca proteins are",
          "options": [
            "Acr-associated HTH transcriptional regulators of acr operons",
            "Accessory capsid antigens",
            "Acid-stable coat adapters",
            "attC-associated recombinases"
          ],
          "answer": 0
        },
        {
          "q": "In phage genomics, DTRs and ITRs refer to",
          "options": [
            "Degenerate tandem recombinases",
            "Direct and inverted terminal repeats",
            "Density-transfer ratios",
            "Double-stranded transcriptional regions"
          ],
          "answer": 1
        },
        {
          "q": "In the name vB_EcoM-VPAE1, the “vB” prefix denotes",
          "options": [
            "Virus of Bacteria (followed by host genus and morphotype)",
            "Verified bacteriophage",
            "Viral barcode",
            "Vector backbone"
          ],
          "answer": 0
        },
        {
          "q": "MIMAG stands for",
          "options": [
            "Metagenome Integration Map",
            "Minimum Information about Microbial Archaeal Genomes",
            "Minimum Information about a Metagenome-Assembled Genome",
            "Microbial Image Magnification"
          ],
          "answer": 2
        },
        {
          "q": "In phage genomics, AMGs are",
          "options": [
            "Auxiliary metabolic genes",
            "Amplified mobile genes",
            "Ancestral marker genes",
            "Adaptive mutation groups"
          ],
          "answer": 0
        },
        {
          "q": "PHROGs are",
          "options": [
            "Prophage host-range groups",
            "Phage restriction operon groups",
            "Plaque heterogeneity ratings",
            "Phage orthologous groups for functional annotation"
          ],
          "answer": 3
        },
        {
          "q": "In phage–mucus research, the BAM model stands for",
          "options": [
            "Bacterial adhesion matrix",
            "Bacteriophage adherence to mucus",
            "Biofilm-associated microcolony",
            "Buffered agar medium"
          ],
          "answer": 1
        },
        {
          "q": "The LAL assay reagent used in phage formulation is derived from",
          "options": [
            "Lactic acid bacteria",
            "Lysed adenovirus libraries",
            "Lipid antigen liposomes",
            "Limulus (horseshoe crab) amebocyte lysate"
          ],
          "answer": 3
        },
        {
          "q": "In One-Health discussions, AMR stands for",
          "audience": true,
          "options": [
            "Acquired mobile resistance",
            "Adaptive mutation rate",
            "Antimicrobial resistance",
            "Antibiotic modifier region"
          ],
          "answer": 2
        },
        {
          "q": "In the phage morphology lab, TEM stands for",
          "audience": true,
          "options": [
            "Thermal emission microscopy",
            "Transmission electron microscopy",
            "Total evanescent measurement",
            "Tunneling electron mapping"
          ],
          "answer": 1
        }
      ]
    },
    {
      "num": 9,
      "title": "PHAGE ECOLOGY & ONE HEALTH",
      "type": "mcq",
      "badge": "NEW TOPIC",
      "scoring": {
        "correct": 10,
        "wrong": -5,
        "time": 30
      },
      "questions": [
        {
          "q": "The “viral shunt” refers to",
          "options": [
            "Phage lysis redirecting microbial biomass into dissolved organic matter",
            "Aerosolization of virions",
            "Viral transport in the bloodstream",
            "Phage migration through soil"
          ],
          "answer": 0
        },
        {
          "q": "A millilitre of surface seawater typically contains about",
          "options": [
            "10^3 phages",
            "10^12 phages",
            "10^7 phages",
            "10^15 phages"
          ],
          "answer": 2
        },
        {
          "q": "Cyanophages infecting Prochlorococcus often carry which host-derived gene to sustain photosynthesis during infection?",
          "options": [
            "nifH",
            "psbA (photosystem II D1 protein)",
            "rpoB",
            "atpD"
          ],
          "answer": 1
        },
        {
          "q": "“Kill-the-winner” dynamics predicts that",
          "options": [
            "Rare bacterial species are lysed first",
            "The most abundant host is preferentially hit by lytic phages",
            "Phages prefer dormant hosts",
            "Lysogeny dominates in rich environments"
          ],
          "answer": 1
        },
        {
          "q": "Which phage is among the most prevalent human-associated viruses on Earth, carried in the gut of a large fraction of adults?",
          "options": [
            "Phage Φ6",
            "Phage lambda",
            "crAssphage",
            "Phage T4"
          ],
          "answer": 2
        },
        {
          "q": "The cholera toxin genes (ctxAB) are encoded by",
          "options": [
            "Phage P1",
            "Phage lambda",
            "Phage Mu",
            "Phage CTXφ"
          ],
          "answer": 3
        },
        {
          "q": "Diphtheria toxin is encoded by",
          "options": [
            "Phage CTXφ",
            "The β-prophage (corynephage β)",
            "Phage P22",
            "Phage ΦKZ"
          ],
          "answer": 1
        },
        {
          "q": "Shiga toxin genes (stx) carried by lambdoid prophages are central to the virulence of",
          "options": [
            "Shiga-toxigenic E. coli (STEC)",
            "Salmonella Typhi",
            "Listeria monocytogenes",
            "Campylobacter jejuni"
          ],
          "answer": 0
        },
        {
          "q": "Municipal sewage is extremely rich in phages mainly because",
          "audience": true,
          "options": [
            "High bacterial densities support massive phage replication",
            "Phages resist freezing",
            "UV light creates virions",
            "Chlorine selects for viruses"
          ],
          "answer": 0
        },
        {
          "q": "Phages are part of “One Health” thinking because they",
          "audience": true,
          "options": [
            "Replace all vaccines",
            "Chemically purify water",
            "Only infect humans",
            "Connect human, animal and environmental microbiomes, including AMR dynamics"
          ],
          "answer": 3
        }
      ]
    },
    {
      "num": 10,
      "title": "BACTERIAL DEFENSES & PHAGE COUNTER-DEFENSE",
      "type": "mcq",
      "badge": "NEW TOPIC",
      "scoring": {
        "correct": 10,
        "wrong": -5,
        "time": 30
      },
      "questions": [
        {
          "q": "CRISPR-Cas adaptive immunity stores phage-derived sequences in the bacterial genome as",
          "options": [
            "Telomeres",
            "Spacers",
            "Operators",
            "Introns"
          ],
          "answer": 1
        },
        {
          "q": "Anti-CRISPR (Acr) proteins protect phages by",
          "options": [
            "Blocking phage adsorption",
            "Degrading bacterial DNA",
            "Inducing host lysis early",
            "Inhibiting Cas proteins"
          ],
          "answer": 3
        },
        {
          "q": "Restriction–modification systems defend bacteria by",
          "options": [
            "Pumping phages out by efflux",
            "Methylating phage tail fibers",
            "Cleaving unmethylated foreign DNA",
            "Blocking bacterial ribosomes"
          ],
          "answer": 2
        },
        {
          "q": "Abortive infection (Abi) systems protect a bacterial population by",
          "options": [
            "Repairing damaged DNA",
            "Triggering death or dormancy of the infected cell",
            "Preventing phage adsorption",
            "Degrading extracellular phages"
          ],
          "answer": 1
        },
        {
          "q": "The arbitrium system lets temperate phages",
          "options": [
            "Repair their DNA after UV",
            "Sense a peptide cue of host density to choose lysis vs lysogeny",
            "Adsorb faster to pili",
            "Resist CRISPR targeting"
          ],
          "answer": 1
        },
        {
          "q": "Phage VP882 eavesdrops on which bacterial signal to time its lysis decision?",
          "options": [
            "Teichoic acid",
            "Lipopolysaccharide",
            "A quorum-sensing autoinducer",
            "Host ATP levels"
          ],
          "answer": 2
        },
        {
          "q": "Phage resistance via loss of a surface receptor often costs the bacterium",
          "options": [
            "Reduced fitness or virulence, sometimes restored antibiotic sensitivity",
            "Prophage induction",
            "Immediate lysis",
            "CRISPR array loss"
          ],
          "answer": 0
        },
        {
          "q": "A classic phage counter-defense against restriction systems is",
          "options": [
            "DNA modification, e.g. glucosylated 5-hydroxymethylcytosine in T4",
            "Faster adsorption kinetics",
            "A longer tail",
            "A larger capsid"
          ],
          "answer": 0
        },
        {
          "q": "Superinfection exclusion means that",
          "audience": true,
          "options": [
            "A resident prophage blocks secondary infection by related phages",
            "Two phages co-infect one cell",
            "Phages exclude antibiotics from the cell",
            "Bacteria pump phages out by efflux"
          ],
          "answer": 0
        },
        {
          "q": "BREX, DISARM, Thoeris and Gabija are examples of",
          "audience": true,
          "options": [
            "Plasmid incompatibility groups",
            "Staining methods",
            "Phage families",
            "Bacterial anti-phage defense systems"
          ],
          "answer": 3
        }
      ]
    },
    {
      "num": 0,
      "title": "BREAK TIME",
      "type": "break",
      "minutes": 5
    },
    {
      "num": 11,
      "title": "RAPID FIRE",
      "type": "rapid",
      "scoring": {
        "correct": 5,
        "wrong": 0,
        "time": 60
      },
      "note": "8 questions per team, one answer each, no passing. 60 seconds per team set.",
      "teams": [
        {
          "team": 0,
          "questions": [
            {
              "q": "Enzyme that degrades the peptidoglycan at the end of the lytic cycle",
              "a": "Endolysin (lysozyme)"
            },
            {
              "q": "Term for a phage genome integrated in the host chromosome",
              "a": "Prophage"
            },
            {
              "q": "UV light or mitomycin C triggers this event in a lysogen",
              "a": "Prophage induction"
            },
            {
              "q": "The protein shell that encloses the phage genome",
              "a": "Capsid"
            },
            {
              "q": "The myovirus structure that contracts during infection",
              "a": "Tail sheath"
            },
            {
              "q": "Number of progeny released per infected cell",
              "a": "Burst size"
            },
            {
              "q": "Filamentous phage widely used for phage display",
              "a": "M13 (f1/fd)"
            },
            {
              "q": "Ions added to media because many phages need them for adsorption",
              "a": "Divalent cations (Ca2+ / Mg2+)"
            }
          ]
        },
        {
          "team": 1,
          "questions": [
            {
              "q": "Matrix component degraded by phage depolymerases in a biofilm",
              "a": "Exopolysaccharide (EPS / capsule)"
            },
            {
              "q": "Phage-mediated transfer of bacterial DNA between cells",
              "a": "Transduction"
            },
            {
              "q": "Microscopy that images phages in a near-native frozen-hydrated state",
              "a": "Cryo-EM (cryo-TEM)"
            },
            {
              "q": "The phage life cycle that ends in host lysis",
              "a": "Lytic cycle"
            },
            {
              "q": "Extrachromosomal bacterial element that often carries AMR genes",
              "a": "Plasmid"
            },
            {
              "q": "A phage particle that lacks its genome",
              "a": "Empty capsid (ghost)"
            },
            {
              "q": "The workbench host bacterium of the T-phages",
              "a": "Escherichia coli"
            },
            {
              "q": "Ecological model: phages lyse the most abundant host (3 words, “kill the …”)",
              "a": "Kill-the-winner"
            }
          ]
        },
        {
          "team": 2,
          "questions": [
            {
              "q": "US regulatory route for compassionate phage use (3 letters + IND)",
              "a": "eIND (emergency/expanded-access IND)"
            },
            {
              "q": "Full name of PEG, used with NaCl to precipitate phages",
              "a": "Polyethylene glycol"
            },
            {
              "q": "Instrument that separates phages by buoyant density",
              "a": "(Ultra)centrifuge"
            },
            {
              "q": "Enzymes that cut DNA at specific sites, first studied in phage biology",
              "a": "Restriction endonucleases"
            },
            {
              "q": "Coat proteins used to display peptides on M13 (two names)",
              "a": "pIII / pVIII"
            },
            {
              "q": "Route used to deliver phages to CF lungs in the 2025 first-in-human randomized trial",
              "a": "Nebulized / inhaled"
            },
            {
              "q": "Chelator of divalent cations that can block phage adsorption",
              "a": "EDTA"
            },
            {
              "q": "Phages that kill the host and never lysogenize are called",
              "a": "Virulent (strictly lytic) phages"
            }
          ]
        },
        {
          "team": 3,
          "questions": [
            {
              "q": "Tubulin-like phage protein that forms the spindle of jumbo phages",
              "a": "PhuZ"
            },
            {
              "q": "Structural term for the elongated (non-spherical) head of T4",
              "a": "Prolate icosahedral head"
            },
            {
              "q": "Capsid vertex through which DNA enters during assembly",
              "a": "Portal vertex (portal protein)"
            },
            {
              "q": "ATP-driven enzyme that packs DNA into the procapsid",
              "a": "Terminase (large subunit)"
            },
            {
              "q": "Morphotype with a long, non-contractile tail",
              "a": "Siphovirus"
            },
            {
              "q": "Geometric term for a capsid with 20 triangular faces",
              "a": "Icosahedral"
            },
            {
              "q": "Hollow tube through which the genome crosses the envelope in tailed phages",
              "a": "Tail tube"
            },
            {
              "q": "The extra lipid layer present in Φ6 but absent in T4",
              "a": "Envelope (membrane)"
            }
          ]
        }
      ]
    },
    {
      "num": 12,
      "title": "TIE-BREAKER ROUND",
      "type": "mcq",
      "scoring": {
        "correct": 20,
        "wrong": -10,
        "time": 60,
        "pass": 5
      },
      "questions": [
        {
          "q": "The T4 genome is circularly permuted and terminally redundant. Which packaging strategy generates this architecture?",
          "options": [
            "Headful packaging from concatemers",
            "cos-site cleavage of concatemers",
            "Protein-primed replication",
            "Rolling-circle of monomers"
          ],
          "answer": 0
        },
        {
          "q": "DNA replication of phage Φ29 is primed by",
          "options": [
            "Host DnaA",
            "A primase (DnaG)",
            "A terminal protein",
            "A ribozyme"
          ],
          "answer": 2
        },
        {
          "q": "In the lambda decision circuit, high MOI together with a poor physiological host state favours",
          "options": [
            "Pseudolysogeny",
            "Lysis",
            "Superinfection",
            "Lysogeny (stabilized cII)"
          ],
          "answer": 3
        },
        {
          "q": "T4 glucosylates its 5-hydroxymethylcytosine DNA mainly to",
          "options": [
            "Protect the genome from host restriction endonucleases",
            "Aid adsorption",
            "Assist capsid assembly",
            "Speed up replication"
          ],
          "answer": 0
        },
        {
          "q": "Which anti-phage system signals through a cyclic oligonucleotide (cGAMP) to activate a nuclease effector?",
          "options": [
            "Retrons",
            "Septu",
            "Gabija",
            "CBASS"
          ],
          "answer": 3
        },
        {
          "q": "The lambda Red recombineering toolkit consists of the proteins",
          "options": [
            "EcoRI, EcoRV, ligase",
            "RecA, RecB, RecC",
            "Exo, Beta, Gam",
            "Int, Xis, Gam"
          ],
          "answer": 2
        },
        {
          "q": "In the 2025 first-in-human randomized trial (BX004-A), the phage cocktail reached the CF lung by",
          "options": [
            "Intravenous infusion",
            "Nebulization",
            "Topical gel",
            "Oral capsules"
          ],
          "answer": 1
        },
        {
          "q": "After a strong phage-driven selective sweep in a bacterial community, which metric is expected to DECREASE?",
          "options": [
            "Phage titer",
            "Shannon diversity index",
            "Burst size",
            "MOI"
          ],
          "answer": 1
        }
      ]
    },
    {
      "num": 13,
      "title": "EMOJI REBUS & PHAGE PERSONALS",
      "type": "mcq",
      "badge": "FUN ROUND",
      "scoring": {
        "correct": 10,
        "wrong": 0,
        "time": 30
      },
      "questions": [
        {
          "q": "🦠️🧬📖  — decode the rebus",
          "alt": "[virus][scissors][DNA][book]  — decode the rebus",
          "options": [
            "Restriction–modification",
            "CRISPR-Cas adaptive immunity",
            "Abortive infection",
            "Generalized transduction"
          ],
          "answer": 1
        },
        {
          "q": "😴☀️⚡🦠  — decode the rebus",
          "alt": "[sleeping][UV sun][lightning][virus]  — decode the rebus",
          "options": [
            "Prophage induction",
            "Lysogeny establishment",
            "Superinfection exclusion",
            "Pseudolysogeny"
          ],
          "answer": 0
        },
        {
          "q": "🧨🏙️🦠  — decode the rebus",
          "alt": "[dynamite][city][virus]  — decode the rebus",
          "options": [
            "Endolysin",
            "Spanin",
            "Depolymerase",
            "Integrase"
          ],
          "answer": 2
        },
        {
          "q": "📦🎈  — decode the rebus",
          "alt": "[box][DNA][balloon]  — decode the rebus",
          "options": [
            "cos-site packaging",
            "Protein-primed replication",
            "Rolling-circle replication",
            "Headful (pac) packaging"
          ],
          "answer": 3
        },
        {
          "q": "🕵️🦀  — decode the rebus",
          "alt": "[detective][crab][test tube]  — decode the rebus",
          "options": [
            "Plaque assay",
            "LAL endotoxin assay",
            "PFGE",
            "ELISA"
          ],
          "answer": 1
        },
        {
          "q": "❄️🦠  — decode the rebus",
          "alt": "[ice][microscope][virus]  — decode the rebus",
          "options": [
            "Cryo-EM",
            "Negative-stain TEM",
            "Atomic force microscopy",
            "Phase-contrast light microscopy"
          ],
          "answer": 0
        },
        {
          "q": "🎭️🧬  — decode the rebus",
          "alt": "[theatre masks][hand][DNA]  — decode the rebus",
          "options": [
            "Phage typing",
            "Viromics",
            "Phage display",
            "Reassortment"
          ],
          "answer": 2
        },
        {
          "q": "Phage personal ad: “Seeking F-pilus-positive partner; ssDNA exchange welcome; no lysis required — I prefer a long, chronic togetherness.” Who wrote it?",
          "alt": "Phage personal ad: “Seeking F-pilus-positive partner; ssDNA exchange welcome; no lysis required — I prefer a long, chronic togetherness.” Who wrote it?",
          "options": [
            "Phage T4",
            "Phage lambda",
            "Phage Φ6",
            "Phage M13"
          ],
          "answer": 3
        },
        {
          "q": "Which emoji set best describes a TEMPERATE phage?",
          "audience": true,
          "options": [
            "🛌🧬🤝",
            "💥🦠☠️",
            "🧨🔥💀",
            "🏃🦠⏱️"
          ],
          "alt": "Which set best describes a TEMPERATE phage?",
          "options_alt": [
            "[sleeping][DNA][handshake]",
            "[boom][virus][skull]",
            "[dynamite][fire][skull]",
            "[runner][virus][timer]"
          ],
          "answer": 0
        },
        {
          "q": "Personal ad: “High-pressure type (~50 atm). I contract on first contact and deliver my DNA fast. No commitment issues — strictly lytic.” Identify the advertiser.",
          "audience": true,
          "alt": "Personal ad: “High-pressure type (~50 atm). I contract on first contact and deliver my DNA fast. No commitment issues — strictly lytic.” Identify the advertiser.",
          "options": [
            "M13",
            "T4",
            "ΦX174",
            "MS2"
          ],
          "answer": 1
        }
      ]
    },
    {
      "num": 14,
      "title": "LYTIC LAUGHS",
      "type": "laughs",
      "scoring": {
        "correct": 10,
        "wrong": 0,
        "time": 30
      },
      "questions": [
        {
          "q": "Why did the phage break up with the pilus?",
          "options": [
            "“No chemistry in the periplasm.”",
            "“It was too contractile.”",
            "“Long-distance lysis never works.”",
            "“The relationship was only surface-level attachment.”"
          ],
          "answer": 3
        },
        {
          "q": "What is a bacteriophage's favourite genre of music?",
          "options": [
            "Ambient — like the eclipse period",
            "Smooth jazz for slow adsorption",
            "Opera, because it's always dramatic lysis",
            "Lytic metal — full of breakdowns"
          ],
          "answer": 3
        },
        {
          "q": "Why don't phages use dating apps?",
          "options": [
            "No signal inside the gut",
            "They only ever swipe right on one specific host",
            "Too many matches cause lysis from without",
            "Their profiles are only ~50 kb"
          ],
          "answer": 1
        },
        {
          "q": "Where does a phage see itself in 30 minutes?",
          "options": [
            "“In a preprint.”",
            "“At a plaquelytics retreat.”",
            "“As ~200 copies of myself inside one very surprised bacterium.”",
            "“Integrated, settled and dormant.”"
          ],
          "answer": 2
        },
        {
          "q": "Why was the temperate phage terrible at commitment?",
          "options": [
            "It kept integrating into relationships and going dormant",
            "It lysed every relationship too fast",
            "It had no receptors for feelings",
            "It was too virulent to care"
          ],
          "answer": 0
        },
        {
          "q": "What did the depolymerase say arriving at the biofilm party?",
          "options": [
            "“I brought capsules for the road.”",
            "“Relax — I'll break down the matrix and free everyone.”",
            "“More EPS for everyone!”",
            "“Who invited the antibiotics?”"
          ],
          "answer": 1
        },
        {
          "q": "Why do phages make bad stand-up comedians?",
          "options": [
            "Their delivery is always lytic — they kill the room",
            "They are too small for the microphone",
            "They only infect the hecklers",
            "They have no tail for timing"
          ],
          "answer": 0
        },
        {
          "q": "What is a jumbo phage's excuse at the gym?",
          "options": [
            "“I skip tail day.”",
            "“My sheath is already too tight.”",
            "“I carry a 500-kb genome — that's enough baggage.”",
            "“No capsid space left.”"
          ],
          "answer": 2
        }
      ]
    }
  ]
}/*QUIZ_JSON_END*/;
