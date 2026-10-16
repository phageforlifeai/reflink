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
          "q": "Bacteriophages are best described as",
          "options": [
            "Viruses that specifically infect and replicate within bacteria",
            "Toxic proteins secreted by bacteria",
            "Bacteria that prey on other bacteria",
            "Viruses that infect human cells"
          ],
          "answer": 0
        },
        {
          "q": "The estimated number of phage particles on Earth is approximately",
          "options": [
            "10^15 (a quadrillion)",
            "10^21 (a sextillion)",
            "10^31 (ten nonillion)",
            "10^45"
          ],
          "answer": 2
        },
        {
          "q": "Which structure is NOT part of a typical tailed phage virion?",
          "options": [
            "Tail fibers",
            "Baseplate",
            "Ribosomes",
            "Icosahedral capsid"
          ],
          "answer": 2
        },
        {
          "q": "The phage component that primarily determines host specificity is the",
          "options": [
            "Genome terminus",
            "Portal vertex",
            "Capsid interior",
            "Receptor-binding protein / tail fiber"
          ],
          "answer": 3
        },
        {
          "q": "A phage that can ONLY replicate through the lytic cycle is termed",
          "options": [
            "Virulent",
            "Temperate",
            "Defective",
            "Filamentous"
          ],
          "answer": 0
        },
        {
          "q": "A clear zone formed on a confluent bacterial lawn is called a",
          "options": [
            "Plaque",
            "Biofilm patch",
            "Colony",
            "Halo"
          ],
          "answer": 0
        },
        {
          "q": "The typical diameter of a tailed phage capsid falls in the range",
          "options": [
            "500–900 nm",
            "1–5 µm",
            "5–10 µm",
            "20–200 nm (up to ~300 nm for jumbos)"
          ],
          "answer": 3
        },
        {
          "q": "Which statement about phages is TRUE?",
          "options": [
            "They can grow on cell-free agar",
            "They are obligate intracellular parasites of bacteria",
            "They always kill their host",
            "They carry their own ribosomes for translation"
          ],
          "answer": 1
        },
        {
          "q": "Which is generally SMALLER?",
          "audience": true,
          "options": [
            "A red blood cell",
            "A bacteriophage",
            "A yeast cell",
            "A bacterium"
          ],
          "answer": 1
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
          "q": "In which year did Félix d'Hérelle coin the term “bacteriophage”?",
          "options": [
            "1926",
            "1896",
            "1917",
            "1915"
          ],
          "answer": 2
        },
        {
          "q": "Ernest Hankin (1896) observed antibacterial activity against Vibrio cholerae in the waters of which rivers?",
          "options": [
            "The Ganges and the Yamuna",
            "The Nile and the Euphrates",
            "The Thames and the Seine",
            "The Amazon and the Orinoco"
          ],
          "answer": 0
        },
        {
          "q": "The 1943 fluctuation test, demonstrating that mutations arise spontaneously, used resistance to phage and was performed by",
          "options": [
            "Ellis and Delbrück",
            "Luria and Delbrück",
            "Hershey and Chase",
            "Zinder and Lederberg"
          ],
          "answer": 1
        },
        {
          "q": "The Hershey–Chase experiment (1952) labelled phage components with which isotopes?",
          "options": [
            "14C and 3H",
            "32P and 35S",
            "35S and 14C for DNA",
            "15N and 13C"
          ],
          "answer": 1
        },
        {
          "q": "The first complete genome ever sequenced (Sanger, 1977) belonged to which phage?",
          "options": [
            "Phage lambda",
            "Phage T4",
            "Phage ΦX174",
            "Phage M13"
          ],
          "answer": 2
        },
        {
          "q": "The Eliava Institute, a historic centre of phage therapy, is located in",
          "options": [
            "Tbilisi, Georgia",
            "Lyon, France",
            "Moscow, Russia",
            "Warsaw, Poland"
          ],
          "answer": 0
        },
        {
          "q": "Generalized transduction was discovered by Zinder and Lederberg (1952) using which phage–host system?",
          "options": [
            "Phage P22 in Salmonella",
            "Phage lambda in E. coli",
            "Phage T2 in E. coli",
            "Phage P1 in E. coli"
          ],
          "answer": 0
        },
        {
          "q": "Western interest in phage therapy collapsed after the 1940s mainly because of",
          "options": [
            "Loss of phage stocks in WWII",
            "A ban on virus research",
            "Patent disputes",
            "The discovery of antibiotics"
          ],
          "answer": 3
        },
        {
          "q": "The 2017 compassionate-use case that brought phage therapy to global headlines treated a patient with",
          "audience": true,
          "options": [
            "Candida auris sepsis",
            "XDR tuberculosis",
            "MRSA endocarditis",
            "Disseminated Acinetobacter baumannii infection"
          ],
          "answer": 3
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
          "q": "The double agar overlay method is primarily used for",
          "options": [
            "Plaque assay and phage enumeration",
            "Antibiotic susceptibility testing",
            "Genome assembly",
            "Protein purification"
          ],
          "answer": 0
        },
        {
          "q": "The soft (top) agar used in plaque assays typically has an agar concentration of",
          "options": [
            "3–4%",
            "1.5–2.0%",
            "0.3–0.7%",
            "8–10%"
          ],
          "answer": 2
        },
        {
          "q": "Ca2+ and Mg2+ are added to phage assay media mainly because",
          "options": [
            "Many phages need divalent cations for efficient adsorption",
            "They raise the agar melting point",
            "They prevent fungal contamination",
            "They stain the plaques"
          ],
          "answer": 0
        },
        {
          "q": "Which method counts ONLY infectious phage particles?",
          "options": [
            "Flow cytometry with SYBR Gold",
            "qPCR of phage DNA",
            "TEM particle counts",
            "Plaque assay"
          ],
          "answer": 3
        },
        {
          "q": "To enrich phages from an environmental sample, the first step is usually to",
          "options": [
            "Autoclave the sample",
            "Co-culture it with a log-phase host bacterium",
            "Freeze it at −80 °C for a week",
            "Add chloroform immediately"
          ],
          "answer": 1
        },
        {
          "q": "Chloroform is added to a phage lysate to",
          "options": [
            "Precipitate the phages",
            "Stain phage DNA",
            "Kill residual bacteria and prevent bacterial growth",
            "Lower the pH"
          ],
          "answer": 2
        },
        {
          "q": "Which of the following is NOT a phage concentration method?",
          "options": [
            "PEG precipitation",
            "Southern blotting",
            "Tangential flow filtration",
            "CsCl density-gradient ultracentrifugation"
          ],
          "answer": 1
        },
        {
          "q": "Efficiency of plating (EOP) compares plaque production on a test strain relative to",
          "options": [
            "The adsorption rate",
            "The primary host strain",
            "The burst size",
            "The qPCR genome count"
          ],
          "answer": 1
        },
        {
          "q": "In a spot test, a clear zone where phage suspension was dropped on a bacterial lawn indicates",
          "audience": true,
          "options": [
            "The strain is sensitive (lysis)",
            "A mutation arose",
            "Medium contamination",
            "The strain is resistant"
          ],
          "answer": 0
        },
        {
          "q": "In a plaque assay, each plaque originates from",
          "audience": true,
          "options": [
            "A single bacterial cell",
            "A free DNA fragment",
            "An antibiotic disc",
            "A single infectious phage particle"
          ],
          "answer": 3
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
          "q": "Which tool is dedicated to predicting prophage regions inside bacterial genomes?",
          "options": [
            "PHASTER",
            "tRNAscan-SE",
            "Clustal Omega",
            "SignalP"
          ],
          "answer": 0
        },
        {
          "q": "CheckV is used to",
          "options": [
            "Detect AMR genes in bacteria",
            "Design PCR primers",
            "Count plaques automatically",
            "Estimate completeness and quality of viral metagenome-assembled genomes"
          ],
          "answer": 3
        },
        {
          "q": "VIRIDIC calculates intergenomic similarity to demarcate viral",
          "options": [
            "Promoters",
            "tRNAs",
            "Codon usage",
            "Species and genera"
          ],
          "answer": 3
        },
        {
          "q": "vConTACT2 clusters viral genomes using",
          "options": [
            "Gene-sharing networks",
            "k-mer GC content",
            "16S rRNA alignment",
            "CRISPR spacers only"
          ],
          "answer": 0
        },
        {
          "q": "PHROGs are",
          "options": [
            "Phage orthologous groups used for functional annotation",
            "Plaque morphology classes",
            "Phage restriction enzymes",
            "A phage growth medium"
          ],
          "answer": 0
        },
        {
          "q": "crAssphage was originally discovered in 2014 by",
          "options": [
            "Plaque assay on E. coli",
            "Sequencing of seawater viromes",
            "Computational re-analysis of human gut metagenomes",
            "TEM of sewage"
          ],
          "answer": 2
        },
        {
          "q": "Which approach can predict the host of a novel phage from sequence data?",
          "options": [
            "MALDI-TOF of the capsid",
            "CRISPR spacer and prophage homology matching",
            "Gram staining of the virome",
            "PFGE"
          ],
          "answer": 1
        },
        {
          "q": "PhageTerm is used to identify",
          "options": [
            "Optimal cocktail composition",
            "Genome termini and the packaging mechanism (cos, pac, headful)",
            "Latent period",
            "Phage titer"
          ],
          "answer": 1
        },
        {
          "q": "The complete collection of viruses in a sample is called the",
          "audience": true,
          "options": [
            "Plasmidome",
            "Proteome",
            "Virome",
            "Microbiome"
          ],
          "answer": 2
        },
        {
          "q": "A prophage region whose GC content differs strongly from the rest of the bacterial chromosome suggests",
          "audience": true,
          "options": [
            "A smaller capsid",
            "Recently acquired foreign DNA",
            "An RNA genome",
            "A better plaque morphology"
          ],
          "answer": 1
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
          "q": "A phage with an icosahedral head and a long CONTRACTILE tail shows which morphotype?",
          "options": [
            "Siphovirus",
            "Inovirus",
            "Podovirus",
            "Myovirus"
          ],
          "answer": 3
        },
        {
          "q": "Filamentous phages such as M13, which are secreted without lysing the host, belong to which group?",
          "options": [
            "Tectiviruses",
            "Corticoviruses",
            "Myoviruses",
            "Inoviruses (filamentous)"
          ],
          "answer": 3
        },
        {
          "q": "Which phage is an ENVELOPED virus with a double-stranded RNA genome?",
          "options": [
            "Phage lambda",
            "Phage Φ6",
            "Phage T4",
            "Phage MS2"
          ],
          "answer": 1
        },
        {
          "q": "The genome of the levivirus MS2 is",
          "options": [
            "ssRNA(+)",
            "ssDNA",
            "dsRNA",
            "dsDNA"
          ],
          "answer": 0
        },
        {
          "q": "In siphoviruses, reversible host recognition is mediated mainly by",
          "options": [
            "Collar whiskers",
            "Distal tail fibers / tail-tip proteins",
            "The portal vertex",
            "The internal core"
          ],
          "answer": 1
        },
        {
          "q": "“Jumbo” phages are defined by",
          "options": [
            "Tails longer than 500 nm",
            "Genomes larger than ~200 kb",
            "RNA genomes",
            "Titers above 10^12 PFU/mL"
          ],
          "answer": 1
        },
        {
          "q": "Which phage-encoded tubulin homolog positions the capsids of jumbo phage ΦKZ inside the host?",
          "options": [
            "MreB",
            "FtsZ",
            "PhuZ",
            "ParM"
          ],
          "answer": 2
        },
        {
          "q": "During T4 infection, the structure that CONTRACTS to drive the tail tube across the envelope is the",
          "options": [
            "Tail sheath",
            "Whiskers",
            "Portal",
            "Collar"
          ],
          "answer": 0
        },
        {
          "q": "Under TEM, a tailed phage with a small head and a very SHORT non-contractile tail is a",
          "audience": true,
          "options": [
            "Podovirus",
            "Myovirus",
            "Siphovirus",
            "Filamentous phage"
          ],
          "answer": 0
        },
        {
          "q": "Turbid (cloudy) plaques usually suggest",
          "audience": true,
          "options": [
            "An RNA phage",
            "Medium contamination",
            "A temperate phage forming lysogens",
            "A strictly lytic phage"
          ],
          "answer": 2
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
          "q": "In this one-step growth curve, the arrowed flat phase BEFORE the rise represents the",
          "figure": "growth_curve",
          "options": [
            "Burst phase",
            "Latent (eclipse) period",
            "Lysis from without",
            "Adsorption phase"
          ],
          "answer": 1
        },
        {
          "q": "The clear HALO extending beyond the plaque edge in this plate is most likely due to",
          "figure": "plaque_halo",
          "options": [
            "Phage-resistant mutants",
            "Lysis from without",
            "Extracellular depolymerase degrading the capsule/EPS",
            "An antibiotic in the medium"
          ],
          "answer": 2
        },
        {
          "q": "The arrowed structure of this virion, responsible for reversible host recognition, is the",
          "figure": "t4_diagram",
          "options": [
            "Contractile sheath",
            "Long tail fiber",
            "Collar",
            "Baseplate"
          ],
          "answer": 1
        },
        {
          "q": "The infection state depicted in this diagram is",
          "figure": "lysogeny",
          "options": [
            "Lysogeny (prophage integrated in the chromosome)",
            "Lysis from without",
            "Chronic filamentous infection",
            "Pseudolysogeny"
          ],
          "answer": 0
        },
        {
          "q": "The technique depicted here is the",
          "figure": "overlay",
          "options": [
            "Spread-plate CFU count",
            "Streak-plate isolation",
            "Disc diffusion assay",
            "Double agar overlay plaque assay"
          ],
          "answer": 3
        },
        {
          "q": "After ultracentrifugation, the visible band in the middle of this CsCl tube contains",
          "figure": "cscl",
          "options": [
            "Purified phage particles at their buoyant density",
            "Lipopolysaccharide",
            "Host chromosomal DNA",
            "Ribosomal proteins"
          ],
          "answer": 0
        },
        {
          "q": "The MIDDLE virion of this trio (long, flexible, non-contractile tail) is a",
          "figure": "morphotypes",
          "options": [
            "Siphovirus morphotype",
            "Myovirus morphotype",
            "Podovirus morphotype",
            "Filamentous inovirus"
          ],
          "answer": 0
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
          "q": "The assay shown on this plate, used for quick host-range screening, is the",
          "figure": "spot_assay",
          "options": [
            "Coagulase test",
            "Disk diffusion test",
            "Spot test (spot assay)",
            "CAMP test"
          ],
          "answer": 2
        },
        {
          "q": "Plate A shows clear plaques, plate B turbid plaques. Which plate most likely contains a TEMPERATE phage?",
          "figure": "plaques_turbid",
          "options": [
            "Both plates",
            "Plate B",
            "Neither plate",
            "Plate A"
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
          "q": "In phage work, EOP stands for",
          "options": [
            "Endotoxin elimination process",
            "Efficiency of plating",
            "Effective optical power",
            "Enzyme oligomerization protocol"
          ],
          "answer": 1
        },
        {
          "q": "In phage genomics, AMGs are",
          "options": [
            "Auxiliary metabolic genes",
            "Adaptive mutation groups",
            "Amplified mobile genes",
            "Ancestral marker genes"
          ],
          "answer": 0
        },
        {
          "q": "Acr proteins, encoded by many phages, are",
          "options": [
            "Acidic capsid repeats",
            "Active replication complexes",
            "Anti-CRISPR proteins",
            "Adsorption cofactor receptors"
          ],
          "answer": 2
        },
        {
          "q": "In phage biology, RBPs are",
          "options": [
            "Receptor-binding proteins",
            "Repeat-binding polymers",
            "Restriction barrier proteins",
            "Ribosome-binding pockets"
          ],
          "answer": 0
        },
        {
          "q": "In phage–mucus research, the BAM model stands for",
          "options": [
            "Bacteriophage adherence to mucus",
            "Bacterial adhesion matrix",
            "Biofilm-associated microcolony",
            "Buffered agar medium"
          ],
          "answer": 0
        },
        {
          "q": "ICTV, the body that ratifies virus taxonomy, stands for",
          "options": [
            "International Council for Therapeutic Viruses",
            "Integrated Catalogue of Tested Viruses",
            "Institute of Clinical Trials in Virology",
            "International Committee on Taxonomy of Viruses"
          ],
          "answer": 3
        },
        {
          "q": "In phage formulation, LAL assay reagent is derived from",
          "options": [
            "Lysed adenovirus libraries",
            "Limulus (horseshoe crab) amebocyte lysate",
            "Lactic acid bacteria",
            "Lipid antigen liposomes"
          ],
          "answer": 1
        },
        {
          "q": "The phage cytoskeletal protein PhuZ belongs to which protein family?",
          "options": [
            "Keratin",
            "Myosin",
            "Actin",
            "Tubulin"
          ],
          "answer": 3
        },
        {
          "q": "In One-Health discussions, AMR stands for",
          "audience": true,
          "options": [
            "Adaptive mutation rate",
            "Antibiotic modifier region",
            "Antimicrobial resistance",
            "Acquired mobile resistance"
          ],
          "answer": 2
        },
        {
          "q": "In the phage morphology lab, TEM stands for",
          "audience": true,
          "options": [
            "Tunneling electron mapping",
            "Transmission electron microscopy",
            "Total evanescent measurement",
            "Thermal emission microscopy"
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
              "q": "Protein that builds the shell of the ΦKZ “phage nucleus”",
              "a": "Chimallin (ChmA)"
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
