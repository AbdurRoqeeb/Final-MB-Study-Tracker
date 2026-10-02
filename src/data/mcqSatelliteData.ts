import { Topic, SubjectType, StudyStatus } from '../types';

export interface McqSyllabusItem {
  id: string; // unique identifier
  dayNumber: number;
  specialty: SubjectType;
  subspecialty: string;
  syllabusMatchQuery: string; // keyword used to link to real syllabus topic
  fallbackTopicName: string;
  whyMcqFavorite: string; // The classic exam question stem
  singleBestAnswerFact: string; // The high-yield takeaway fact
  classicVignetteClue: string; // Key clinical buzzwords
}

export interface DayMcqPlan {
  dayNumber: number;
  satelliteTopics: {
    medicine: McqSyllabusItem;
    surgery: McqSyllabusItem;
    commMed: McqSyllabusItem;
  };
}

export const MCQ_SATELLITE_PLAN: Record<number, DayMcqPlan> = {
  1: {
    dayNumber: 1,
    satelliteTopics: {
      medicine: {
        id: "mcq-day-1-med",
        dayNumber: 1,
        specialty: SubjectType.MEDICINE,
        subspecialty: "Cardiology",
        syllabusMatchQuery: "electrocardiography",
        fallbackTopicName: "Introduction to electrocardiography (ECG)",
        whyMcqFavorite: "Examiners test short PR interval (<0.12s) + delta wave in WPW, 'reverse tick' ST sagging in digoxin toxicity, and tall peaked T waves in hyperkalemia.",
        singleBestAnswerFact: "Never give AV nodal blockers (Adenosine, Beta-blockers, Verapamil, Digoxin) in WPW with AF; use Procainamide or DC cardioversion.",
        classicVignetteClue: "Young athlete with palpitations, delta wave on ECG."
      },
      surgery: {
        id: "mcq-day-1-surg",
        dayNumber: 1,
        specialty: SubjectType.SURGERY,
        subspecialty: "Vascular Surgery",
        syllabusMatchQuery: "varicose veins",
        fallbackTopicName: "Varicose veins / DVT / thrombophlebitis",
        whyMcqFavorite: "Tested on Well's score cutoffs (>2 points = DVT likely, order compression Doppler US; ≤1 = D-dimer to rule out).",
        singleBestAnswerFact: "Unfractionated heparin is monitored with aPTT (1.5-2.5× control); LMWH does not require routine monitoring except in renal failure or pregnancy (anti-Xa level).",
        classicVignetteClue: "Unilateral calf swelling >3cm difference below tibial tuberosity following prolonged pelvic surgery."
      },
      commMed: {
        id: "mcq-day-1-cm",
        dayNumber: 1,
        specialty: SubjectType.COMMUNITY_MEDICINE,
        subspecialty: "Medical Statistics",
        syllabusMatchQuery: "central tendencies",
        fallbackTopicName: "Medical statistics: Data summary measures of central tendencies",
        whyMcqFavorite: "Calculation questions on 2x2 tables: Sensitivity = a/(a+c); Specificity = d/(b+d); Positive Predictive Value increases as disease prevalence increases.",
        singleBestAnswerFact: "Sensitivity is used to rule OUT disease (SnNOut - screening tests); Specificity is used to rule IN disease (SpPIn - confirmatory tests).",
        classicVignetteClue: "A new rapid diagnostic test applied to high-prevalence population vs low-prevalence population."
      }
    }
  },
  2: {
    dayNumber: 2,
    satelliteTopics: {
      medicine: {
        id: "mcq-day-2-med",
        dayNumber: 2,
        specialty: SubjectType.MEDICINE,
        subspecialty: "Dermatology",
        syllabusMatchQuery: "superficial fungal",
        fallbackTopicName: "Superficial fungal infection",
        whyMcqFavorite: "Tinea versicolor (Malassezia furfur: 'spaghetti and meatballs' on KOH mount, Wood's lamp yellow-orange fluorescence). Oral candidiasis wipes off leaving erythematous base; Oral hairy leukoplakia does NOT wipe off.",
        singleBestAnswerFact: "Topical selenium sulfide or ketoconazole shampoo for Tinea versicolor; Oral terbinafine or itraconazole for Tinea unguium (onychomycosis).",
        classicVignetteClue: "Young adult after beach trip with hypopigmented macules with fine scale on chest and upper back."
      },
      surgery: {
        id: "mcq-day-2-surg",
        dayNumber: 2,
        specialty: SubjectType.SURGERY,
        subspecialty: "Emergency Radiology",
        syllabusMatchQuery: "imaging in surgery",
        fallbackTopicName: "Imaging in Surgery I",
        whyMcqFavorite: "Coffee bean sign (Sigmoid volvulus - points to right upper quadrant), Rigler's double wall sign (pneumoperitoneum), String-of-pearls sign (small bowel obstruction).",
        singleBestAnswerFact: "Cecal volvulus points toward left upper quadrant; Sigmoid volvulus points toward right upper quadrant. Initial treatment for uncomplicated sigmoid volvulus is rigid sigmoidoscopy + flatus tube decompression.",
        classicVignetteClue: "Elderly psychiatric/nursing home patient with massive painless abdominal distension and inverted U-loop on AXR."
      },
      commMed: {
        id: "mcq-day-2-cm",
        dayNumber: 2,
        specialty: SubjectType.COMMUNITY_MEDICINE,
        subspecialty: "Epidemiology",
        syllabusMatchQuery: "triad, principles",
        fallbackTopicName: "Epidemiology: Triad, principles of disease control and eradication and levels of prevention",
        whyMcqFavorite: "Levels of prevention: Primordial (preventing risk factors), Primary (immunization, health education), Secondary (early diagnosis, Pap smear, screening), Tertiary (rehabilitation, disability limitation).",
        singleBestAnswerFact: "Wearing a seatbelt or giving measles vaccine is PRIMARY prevention; Mammography or sputum AFB screening is SECONDARY prevention.",
        classicVignetteClue: "Public health campaign advising against smoking initiation among adolescents."
      }
    }
  },
  3: {
    dayNumber: 3,
    satelliteTopics: {
      medicine: {
        id: "mcq-day-3-med",
        dayNumber: 3,
        specialty: SubjectType.MEDICINE,
        subspecialty: "Dermatology",
        syllabusMatchQuery: "dermatologic emergency",
        fallbackTopicName: "Dermatologic emergency/cutaneous drug reaction",
        whyMcqFavorite: "Stevens-Johnson syndrome (<10% BSA detachment) vs Toxic Epidermal Necrolysis (>30% BSA detachment). Positive Nikolsky sign. High-risk culprits: Allopurinol, Cotrimoxazole, Carbamazepine, Nevirapine.",
        singleBestAnswerFact: "Immediately discontinue the offending drug and manage in a specialized burn unit; avoid prophylactic systemic corticosteroids in established TEN due to sepsis risk.",
        classicVignetteClue: "Targetoid lesions with mucosal sloughing in a patient started on cotrimoxazole 10 days ago."
      },
      surgery: {
        id: "mcq-day-3-surg",
        dayNumber: 3,
        specialty: SubjectType.SURGERY,
        subspecialty: "ENT & Head and Neck",
        syllabusMatchQuery: "common ent problems",
        fallbackTopicName: "Salivary Gland Diseases / Common ENT Problems",
        whyMcqFavorite: "Little's area (Kiesselbach plexus: anterior ethmoidal, sphenopalatine, greater palatine, superior labial arteries). Foreign body inhalation lodges in Right main bronchus (wider, shorter, more vertical).",
        singleBestAnswerFact: "Pleomorphic adenoma is the most common benign salivary tumor (parotid); Adenoid cystic carcinoma has marked propensity for perineural invasion.",
        classicVignetteClue: "Painless, slow-growing, mobile swelling in the parotid region with intact facial nerve function."
      },
      commMed: {
        id: "mcq-day-3-cm",
        dayNumber: 3,
        specialty: SubjectType.COMMUNITY_MEDICINE,
        subspecialty: "Environmental Health",
        syllabusMatchQuery: "water sources",
        fallbackTopicName: "Environmental health: Introduction, components, water sources, uses, pollution & purification",
        whyMcqFavorite: "Slow sand vs Rapid sand filter: Vital layer (Schmutzdecke) in slow sand provides biological purification; rapid sand uses chemical coagulation with alum and backwashing.",
        singleBestAnswerFact: "Break-point chlorination satisfies chlorine demand, ensuring free residual chlorine (0.5 mg/L after 30 min contact time) to guarantee bacteriologic safety.",
        classicVignetteClue: "Water treatment station measuring residual chlorine 30 minutes post-treatment."
      }
    }
  },
  4: {
    dayNumber: 4,
    satelliteTopics: {
      medicine: {
        id: "mcq-day-4-med",
        dayNumber: 4,
        specialty: SubjectType.MEDICINE,
        subspecialty: "Endocrinology",
        syllabusMatchQuery: "calcium metabolism",
        fallbackTopicName: "Calcium metabolism and its disorders",
        whyMcqFavorite: "Primary hyperparathyroidism (high Ca, low PO4, high PTH - adenoma) vs Secondary (low/normal Ca, high PO4, high PTH - CKD). ECG: Short QT interval in hypercalcemia; Long QT in hypocalcemia.",
        singleBestAnswerFact: "Chvostek sign (facial nerve tap twitch) and Trousseau sign (carpal spasm on BP cuff inflation > systolic for 3 min) indicate latent tetany from hypocalcemia.",
        classicVignetteClue: "Post-thyroidectomy patient complaining of perioral numbness, tingling in fingertips, and carpopedal spasm."
      },
      surgery: {
        id: "mcq-day-4-surg",
        dayNumber: 4,
        specialty: SubjectType.SURGERY,
        subspecialty: "Urology",
        syllabusMatchQuery: "scrotal swellings",
        fallbackTopicName: "Scrotal Swellings, Urinary Calculi and Bladder Outlet Obstruction",
        whyMcqFavorite: "Differentiating scrotal masses: Hydrocele (transilluminates, can get above mass), Inguinal hernia (cannot get above, cough impulse), Testicular tumor (does not transilluminate, separate from epididymis).",
        singleBestAnswerFact: "Calcium oxalate stones are radiopaque and most common (80%); Uric acid stones are RADIOLUCENT on plain KUB radiographs.",
        classicVignetteClue: "Severe colicky flank pain radiating to the groin with microscopic hematuria, plain X-ray KUB shows no opacity."
      },
      commMed: {
        id: "mcq-day-4-cm",
        dayNumber: 4,
        specialty: SubjectType.COMMUNITY_MEDICINE,
        subspecialty: "Demography",
        syllabusMatchQuery: "census, ndhs",
        fallbackTopicName: "Demography: Sources of data: census, NDHS etc",
        whyMcqFavorite: "De facto census (counting persons where they are present on census night) vs De jure census (counting by usual place of residence).",
        singleBestAnswerFact: "Maternal Mortality Ratio uses LIVE BIRTHS in the denominator (per 100,000 live births), while Maternal Mortality Rate uses WOMEN OF REPRODUCTIVE AGE (per 1,000 women 15-49).",
        classicVignetteClue: "Selection of proper denominator for national maternal mortality assessment."
      }
    }
  },
  5: {
    dayNumber: 5,
    satelliteTopics: {
      medicine: {
        id: "mcq-day-5-med",
        dayNumber: 5,
        specialty: SubjectType.MEDICINE,
        subspecialty: "Dermatology",
        syllabusMatchQuery: "papulosquamous",
        fallbackTopicName: "Papulosquamous disorders",
        whyMcqFavorite: "Psoriasis hallmarks: Auspitz sign (pinpoint bleeding upon scraping silvery scale), Koebner phenomenon, oil drop nail sign. Lichen planus 6 Ps with Wickham striae.",
        singleBestAnswerFact: "Never treat severe psoriasis with systemic corticosteroids; abrupt withdrawal precipitates life-threatening generalized pustular psoriasis of von Zumbusch.",
        classicVignetteClue: "Well-demarcated silvery scaly plaques on extensor surfaces of elbows and knees with pitting on nails."
      },
      surgery: {
        id: "mcq-day-5-surg",
        dayNumber: 5,
        specialty: SubjectType.SURGERY,
        subspecialty: "Ophthalmology",
        syllabusMatchQuery: "common eye",
        fallbackTopicName: "Common eye problems",
        whyMcqFavorite: "Acute angle-closure glaucoma triad: Severe eye pain with halos around lights, mid-dilated non-reactive pupil, steamy cornea, stony hard globe.",
        singleBestAnswerFact: "Emergency treatment for acute closed-angle glaucoma: IV Acetazolamide, topical Pilocarpine 2% (miotic), and topical beta-blocker (Timolol); definitive cure is bilateral laser peripheral iridotomy.",
        classicVignetteClue: "Hyperopic patient entering a dim room who develops unilateral excruciating ocular pain and blurred vision with colored halos."
      },
      commMed: {
        id: "mcq-day-5-cm",
        dayNumber: 5,
        specialty: SubjectType.COMMUNITY_MEDICINE,
        subspecialty: "Occupational Health",
        syllabusMatchQuery: "occupational health: definition",
        fallbackTopicName: "Occupational health: definition, history, concept, component of the work environment",
        whyMcqFavorite: "Silicosis (sandblasting, quarries: upper lobes, eggshell calcification of hilar nodes, predisposes to TB). Asbestosis (lower lobes, pleural plaques, mesothelioma risk). Byssinosis (cotton mill worker Monday chest tightness).",
        singleBestAnswerFact: "Mesothelioma is strongly specific to asbestos exposure with a 30-40 year latency, but bronchogenic carcinoma is the most common asbestos-induced malignancy.",
        classicVignetteClue: "Quarry worker with progressive dyspnea and eggshell calcification of hilar lymph nodes on CXR."
      }
    }
  },
  6: {
    dayNumber: 6,
    satelliteTopics: {
      medicine: {
        id: "mcq-day-6-med",
        dayNumber: 6,
        specialty: SubjectType.MEDICINE,
        subspecialty: "Infectious Diseases",
        syllabusMatchQuery: "rabies",
        fallbackTopicName: "Rabies",
        whyMcqFavorite: "Post-exposure rabies prophylaxis (PEP) classification: Category I (touching/licking intact skin = no PEP), Category II (minor scratch/nibbling = vaccine only), Category III (transdermal bite/saliva in broken skin/mucosa = Vaccine + Rabies Immunoglobulin infiltrated into wound).",
        singleBestAnswerFact: "Never suture or cauterize an animal bite wound immediately; wash aggressively with soap and running water for 15 minutes.",
        classicVignetteClue: "Patient presenting 4 hours after unprovoked stray dog bite with bleeding wound on forearm."
      },
      surgery: {
        id: "mcq-day-6-surg",
        dayNumber: 6,
        specialty: SubjectType.SURGERY,
        subspecialty: "Paediatric Surgery",
        syllabusMatchQuery: "pediatric surgical",
        fallbackTopicName: "Common Pediatric Surgical Problems",
        whyMcqFavorite: "Pyloric stenosis: First-born male, 3-6 weeks old, non-bilious projectile vomiting, olive-shaped mass in RUQ, hypochloremic hypokalemic metabolic alkalosis with paradoxical aciduria.",
        singleBestAnswerFact: "Intussusception presents at 3-12 months with colicky paroxysms, redcurrant jelly stool, sausage-shaped mass with empty right iliac fossa (Dance sign); air/barium enema is diagnostic and therapeutic.",
        classicVignetteClue: "4-week-old infant who vomits aggressively after feeds, hungry afterwards, serum Cl- 82 mmol/L, K+ 3.1 mmol/L."
      },
      commMed: {
        id: "mcq-day-6-cm",
        dayNumber: 6,
        specialty: SubjectType.COMMUNITY_MEDICINE,
        subspecialty: "Forensic Medicine",
        syllabusMatchQuery: "medical ethics",
        fallbackTopicName: "Medical ethics: duties of doctors, professional negligence, code of conduct",
        whyMcqFavorite: "Four elements of medical negligence: Duty of care, Dereliction (breach of duty), Direct causation, Damage. Four bioethical principles: Autonomy, Beneficence, Non-maleficence, Justice.",
        singleBestAnswerFact: "Res ipsa loquitur ('the thing speaks for itself') shifts the burden of proof from plaintiff to defendant (e.g. surgical swab retained in abdomen).",
        classicVignetteClue: "Laparotomy swab left behind inside patient's peritoneal cavity requiring re-operation."
      }
    }
  },
  7: {
    dayNumber: 7,
    satelliteTopics: {
      medicine: {
        id: "mcq-day-7-med",
        dayNumber: 7,
        specialty: SubjectType.MEDICINE,
        subspecialty: "Rheumatology",
        syllabusMatchQuery: "connective tissue",
        fallbackTopicName: "Connective tissue disorders",
        whyMcqFavorite: "Antibody matching: Anti-dsDNA & Anti-Smith (highly specific for SLE), Anti-Ro/SSA (congenital heart block in neonatal lupus), Anti-Centromere (CREST syndrome), Anti-Scl-70/topoisomerase (diffuse systemic sclerosis), Anti-CCP (rheumatoid arthritis).",
        singleBestAnswerFact: "Anti-dsDNA titers correlate directly with SLE disease activity and active lupus nephritis; Anti-Smith antibodies remain stable regardless of disease flare.",
        classicVignetteClue: "Young woman with malar rash, proteinuria, leukopenia, and positive ANA at 1:1280 titer."
      },
      surgery: {
        id: "mcq-day-7-surg",
        dayNumber: 7,
        specialty: SubjectType.SURGERY,
        subspecialty: "Orthopaedics",
        syllabusMatchQuery: "talipes and genu",
        fallbackTopicName: "Talipes and Genu deformities/ Bone tumours",
        whyMcqFavorite: "Salter-Harris classification: Type I (Straight across physis), Type II (Above physis into Metaphysis - most common), Type III (Lower into Epiphysis), Type IV (Through all 3), Type V (cRush of growth plate with high arrest risk).",
        singleBestAnswerFact: "Clubfoot (CTEV) components: CAVE (Cavus, Adductus, Varus, Equinus); corrected by Ponseti serial casting (correct Cavus first, Equinus last with percutaneous Achilles tenotomy).",
        classicVignetteClue: "Newborn with bilateral inward turned feet that cannot be passively dorsiflexed or everted."
      },
      commMed: {
        id: "mcq-day-7-cm",
        dayNumber: 7,
        specialty: SubjectType.COMMUNITY_MEDICINE,
        subspecialty: "Reproductive Health",
        syllabusMatchQuery: "child survival",
        fallbackTopicName: "Reproductive health: child health: objectives, causes of child death, child survival strategies",
        whyMcqFavorite: "GOBI-FFF child survival strategies: Growth monitoring, Oral rehydration therapy, Breastfeeding, Immunization, Female education, Family spacing, Food supplementation.",
        singleBestAnswerFact: "Cold chain temperature range: +2°C to +8°C. Vaccine Vial Monitor (VVM) is discarded if inner square matches or is darker than outer reference ring.",
        classicVignetteClue: "Health clinic power outage inquiry on whether DTP and OPV vaccines remain viable."
      }
    }
  },
  8: {
    dayNumber: 8,
    satelliteTopics: {
      medicine: {
        id: "mcq-day-8-med",
        dayNumber: 8,
        specialty: SubjectType.MEDICINE,
        subspecialty: "Dermatology",
        syllabusMatchQuery: "pigmentary",
        fallbackTopicName: "Pigmentary skin disorders",
        whyMcqFavorite: "Vitiligo (autoimmune destruction of melanocytes, Wood's lamp bright blue-white). Melasma (mask of pregnancy, chloasma, sun-induced hyperpigmentation on face). Post-inflammatory hyperpigmentation.",
        singleBestAnswerFact: "First-line therapy for localized vitiligo is high-potency topical corticosteroids or calcineurin inhibitors (tacrolimus); extensive vitiligo is treated with narrowband UVB phototherapy.",
        classicVignetteClue: "Sharply demarcated depigmented chalk-white macules on dorsum of hands and around perioral area."
      },
      surgery: {
        id: "mcq-day-8-surg",
        dayNumber: 8,
        specialty: SubjectType.SURGERY,
        subspecialty: "Anaesthesia",
        syllabusMatchQuery: "anesthesia",
        fallbackTopicName: "Anesthesia Overview 1",
        whyMcqFavorite: "Malignant hyperthermia triad: Hyperthermia, muscle rigidity (masseter spasm after succinylcholine), hypercapnia. Caused by mutated RYR1 ryanodine receptor.",
        singleBestAnswerFact: "Immediate drug of choice for malignant hyperthermia is IV DANTROLENE (2.5 mg/kg push, repeated up to 10 mg/kg), discontinue volatile halogenated anesthetics and hyperventilate with 100% O2.",
        classicVignetteClue: "Intra-operative tachycardia, sudden spike in end-tidal CO2, and jaw rigidity following halothane and succinylcholine."
      },
      commMed: {
        id: "mcq-day-8-cm",
        dayNumber: 8,
        specialty: SubjectType.COMMUNITY_MEDICINE,
        subspecialty: "Environmental Health",
        syllabusMatchQuery: "solid and liquid waste",
        fallbackTopicName: "Environmental health: Solid and liquid waste management and treatment",
        whyMcqFavorite: "Healthcare waste color coding: Yellow (infectious/clinical waste - incinerated), Red (highly infectious/anatomical), Brown (pharmaceutical), Black (general domestic waste).",
        singleBestAnswerFact: "Sharps must always be placed directly into puncture-resistant safety boxes without recapping needles, filled only to 3/4 capacity before sealing.",
        classicVignetteClue: "Question asking which colored receptacle is mandatory for blood-stained surgical dressings and swabs."
      }
    }
  },
  9: {
    dayNumber: 9,
    satelliteTopics: {
      medicine: {
        id: "mcq-day-9-med",
        dayNumber: 9,
        specialty: SubjectType.MEDICINE,
        subspecialty: "Infectious Diseases",
        syllabusMatchQuery: "trematode",
        fallbackTopicName: "Trematode and nematode infection",
        whyMcqFavorite: "Schistosoma haematobium (terminal spine on ovum, painless terminal hematuria, squamous cell carcinoma of bladder). Schistosoma mansoni (prominent lateral spine, pipe-stem liver cirrhosis, portal hypertension).",
        singleBestAnswerFact: "Praziquantel (40 mg/kg single dose) is the drug of choice for all species of Schistosoma; Albendazole (400 mg single dose) for soil-transmitted helminths (Ascaris, Hookworm).",
        classicVignetteClue: "Schoolboy who swims in freshwater stream presenting with painless terminal hematuria and terminal-spined ova in urine deposit."
      },
      surgery: {
        id: "mcq-day-9-surg",
        dayNumber: 9,
        specialty: SubjectType.SURGERY,
        subspecialty: "Hand & Orthopaedics",
        syllabusMatchQuery: "hand infection",
        fallbackTopicName: "Hand infection",
        whyMcqFavorite: "Kanavel 4 cardinal signs of flexor tenosynovitis: Symmetrical sausage digit, Flexed posture, Tenderness along flexor tendon sheath, Severe pain on passive extension.",
        singleBestAnswerFact: "Severe pain on passive digital extension is the earliest and most sensitive Kanavel sign of acute suppurative flexor tenosynovitis; requires urgent surgical drainage and IV antibiotics.",
        classicVignetteClue: "Gardener presenting with throbbing finger swelling held in slight flexion, excruciating pain when examiner extends the distal phalanx."
      },
      commMed: {
        id: "mcq-day-9-cm",
        dayNumber: 9,
        specialty: SubjectType.COMMUNITY_MEDICINE,
        subspecialty: "Reproductive Health",
        syllabusMatchQuery: "family planning",
        fallbackTopicName: "Reproductive health: Family planning, information, counseling and services. Methods of FP, unmet needs of FP",
        whyMcqFavorite: "Pearl index (number of contraceptive failures per 100 woman-years of exposure; lower Pearl index = higher efficacy). Contraindications to combined oral contraceptives: Smoking age >35, history of DVT/PE, migraine with aura, uncontrolled HTN.",
        singleBestAnswerFact: "Copper intrauterine device (Cu-IUD) is the most effective post-coital emergency contraception when inserted within 5 days of unprotected intercourse (>99% efficacy).",
        classicVignetteClue: "36-year-old smoker with migraine with aura seeking reliable hormonal contraception."
      }
    }
  },
  10: {
    dayNumber: 10,
    satelliteTopics: {
      medicine: {
        id: "mcq-day-10-med",
        dayNumber: 10,
        specialty: SubjectType.MEDICINE,
        subspecialty: "Neurology",
        syllabusMatchQuery: "syncope",
        fallbackTopicName: "Syncope",
        whyMcqFavorite: "Vasovagal syncope (prodrome of warmth, nausea, diaphoresis; triggered by pain, blood, standing) vs Cardiac syncope (sudden drop without prodrome, during exertion, ECG abnormality).",
        singleBestAnswerFact: "Cardiac syncope carries a 1-year mortality of ~30% and warrants urgent inpatient admission and echocardiography; vasovagal syncope requires no pharmacotherapy beyond reassurance and physical counter-pressure maneuvers.",
        classicVignetteClue: "Young student fainting after venepuncture vs 68-year-old collapsing abruptly while climbing stairs."
      },
      surgery: {
        id: "mcq-day-10-surg",
        dayNumber: 10,
        specialty: SubjectType.SURGERY,
        subspecialty: "Colorectal Surgery",
        syllabusMatchQuery: "benign and malignant colorectal",
        fallbackTopicName: "Benign and Malignant Colorectal diseases",
        whyMcqFavorite: "Familial Adenomatous Polyposis (FAP: APC gene mutation on chromosome 5q, 100% risk of colorectal cancer by age 40; requires prophylactic total colectomy). Lynch syndrome (HNPCC: DNA mismatch repair genes MLH1, MSH2).",
        singleBestAnswerFact: "Right-sided (ascending) colon cancer presents with occult bleeding, iron deficiency anemia, and RLQ mass; Left-sided (sigmoid) presents with bowel obstruction and change in bowel habits ('pencil stool').",
        classicVignetteClue: "Elderly man presenting with profound fatigue, hemoglobin 6.8 g/dL, and microcytic hypochromic indices without obvious gastrointestinal symptoms."
      },
      commMed: {
        id: "mcq-day-10-cm",
        dayNumber: 10,
        specialty: SubjectType.COMMUNITY_MEDICINE,
        subspecialty: "Research Methods",
        syllabusMatchQuery: "study designs",
        fallbackTopicName: "Research methods: Study designs / sampling techniques",
        whyMcqFavorite: "Study designs: Case-control (calculate Odds Ratio; best for rare diseases), Cohort (calculate Relative Risk & Incidence; best for rare exposures), Cross-sectional (calculate Prevalence).",
        singleBestAnswerFact: "Randomized Controlled Trials (RCTs) are the gold standard for assessing therapeutic efficacy and inferring causality; double-blinding eliminates both observer and participant bias.",
        classicVignetteClue: "Investigating the risk factor for a newly discovered rare childhood cancer with only 25 cases nationwide."
      }
    }
  }
};

export const getDayMcqSatellite = (dayNumber: number): DayMcqPlan => {
  if (MCQ_SATELLITE_PLAN[dayNumber]) {
    return MCQ_SATELLITE_PLAN[dayNumber];
  }
  // Circular fallback for remaining days (1-25)
  const fallbackIndex = ((dayNumber - 1) % 10) + 1;
  const base = MCQ_SATELLITE_PLAN[fallbackIndex] || MCQ_SATELLITE_PLAN[1];
  return {
    ...base,
    dayNumber
  };
};

/**
 * Helper to match an McqSyllabusItem to a real Topic in the curated syllabus topics array
 */
export const findMatchingSyllabusTopic = (item: McqSyllabusItem, allTopics: Topic[]): Topic | undefined => {
  const query = item.syllabusMatchQuery.toLowerCase();
  
  // 1. Try matching by subject and search query in topicName
  let match = allTopics.find(t => 
    t.subject === item.specialty && 
    t.topicName.toLowerCase().includes(query)
  );

  // 2. Try matching by query anywhere in topicName
  if (!match) {
    match = allTopics.find(t => t.topicName.toLowerCase().includes(query));
  }

  // 3. Try matching by subspecialty
  if (!match) {
    match = allTopics.find(t => 
      t.subject === item.specialty && 
      t.subspecialty.toLowerCase().includes(item.subspecialty.toLowerCase())
    );
  }

  return match;
};

/**
 * Fast lookup helper to identify if a syllabus topic is part of an MCQ Satellite day
 */
export const getTopicRevisionRole = (
  topicName: string,
  subject: SubjectType
): { role: 'MCQ' | 'CURRICULUM'; dayNumber?: number; label: string } => {
  const normName = topicName.toLowerCase();

  // Check if topic is in the MCQ Satellite Plan
  for (const dayPlan of Object.values(MCQ_SATELLITE_PLAN)) {
    const list = [
      dayPlan.satelliteTopics.medicine,
      dayPlan.satelliteTopics.surgery,
      dayPlan.satelliteTopics.commMed,
    ];
    for (const item of list) {
      if (item.specialty === subject && normName.includes(item.syllabusMatchQuery.toLowerCase())) {
        return {
          role: 'MCQ',
          dayNumber: item.dayNumber,
          label: `Day ${item.dayNumber} MCQ Satellite`,
        };
      }
    }
  }

  return {
    role: 'CURRICULUM',
    label: 'Curriculum Core',
  };
};

