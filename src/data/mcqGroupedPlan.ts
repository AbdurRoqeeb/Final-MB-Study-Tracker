import { Topic, SubjectType, StudyStatus } from '../types';

export interface SpecialtyMcqGroup {
  specialty: SubjectType;
  groupTitle: string;
  relatedEssayTopic: string;
  allocatedTimeMinutes: number;
  timePerTopicMinutes: number;
  themeKeywords: string[];
  highYieldPearl: string;
  mcqExamTips: string[];
}

export interface DayMcqGrouping {
  dayNumber: number;
  dayTheme: string;
  totalAllocatedMinutes: number;
  medicineGroup: SpecialtyMcqGroup;
  surgeryGroup: SpecialtyMcqGroup;
  commMedGroup: SpecialtyMcqGroup;
}

export const DAY_MCQ_GROUPINGS: Record<number, DayMcqGrouping> = {
  1: {
    dayNumber: 1,
    dayTheme: "Cardiology (Heart Failure & HTN) + Acute Abdomen & Appendicitis + PHC Alma-Ata",
    totalAllocatedMinutes: 135,
    medicineGroup: {
      specialty: SubjectType.MEDICINE,
      groupTitle: "Cardiovascular System Satellite Cluster",
      relatedEssayTopic: "Heart Failure (HFrEF/HFpEF), Hypertensive Crises & Valvular Disease",
      allocatedTimeMinutes: 60,
      timePerTopicMinutes: 15,
      themeKeywords: ["heart failure", "hypertension", "hypertensive heart", "infective endocarditis", "electrocardiography", "rheumatic fever", "pericarditis", "adult congenital", "brady- and tachyarrhythmias", "cardiomyopathies", "pregnancy and heart disease", "syncope", "ischaemic heart"],
      highYieldPearl: "HFrEF GDMT Quadruple Therapy: ARNI (Sacubitril/Valsartan) or ACEi + Beta-blocker (Bisoprolol/Carvedilol) + MRA (Spironolactone) + SGLT2i (Dapagliflozin). Reduces mortality by >60%!",
      mcqExamTips: [
        "Duke criteria for Infective Endocarditis: 2 Major (positive blood cultures for typical organisms, echo showing vegetation/abscess/dehiscence) OR 1 Major + 3 Minor.",
        "ECG: Short PR + Delta wave = WPW. Reverse tick ST sagging = Digoxin. Tall tented T waves = Hyperkalemia.",
        "Hypertensive emergencies require IV Labetalol or Nicardipine with target BP reduction of <=25% in the first hour to prevent ischemic stroke."
      ]
    },
    surgeryGroup: {
      specialty: SubjectType.SURGERY,
      groupTitle: "Acute Abdomen, Appendicitis & Peritoneal Emergency Cluster",
      relatedEssayTopic: "Acute Abdomen, Acute Appendicitis & Peritonitis",
      allocatedTimeMinutes: 45,
      timePerTopicMinutes: 15,
      themeKeywords: ["the acute abdomen", "appendicitis", "peritonitis", "typhoid enteritis", "fluid & electrolyte management", "sutures, drains", "surgical wound management", "surgical bleeding"],
      highYieldPearl: "Alvarado score >=7 strongly mandates operative intervention for appendicitis; score <=4 has high negative predictive value. In young women, rule out ectopic pregnancy and PID first.",
      mcqExamTips: [
        "Tetanus prone wounds: Dirt/soil contamination, puncture wounds, devitalized tissue >6 hours old (give Td booster + Tetanus Immunoglobulin 250-500 IU).",
        "Rovsing sign (pain in RIF on LIF palpation) and Psoas sign (pain on passive hip extension) indicate retrocecal appendicitis.",
        "Resuscitation prior to laparotomy: Two wide-bore IV cannulae, Ringer's lactate, Foley catheter (target urine output >0.5 mL/kg/h), and broad-spectrum IV antibiotics."
      ]
    },
    commMedGroup: {
      specialty: SubjectType.COMMUNITY_MEDICINE,
      groupTitle: "Primary Health Care & Health Systems Cluster",
      relatedEssayTopic: "Primary Health Care (PHC Alma-Ata & Bamako Initiative)",
      allocatedTimeMinutes: 30,
      timePerTopicMinutes: 15,
      themeKeywords: ["primary health care", "organization of services in phc", "health management", "history of public health", "central tendencies", "measures of dispersion"],
      highYieldPearl: "Alma-Ata Declaration (1978) established PHC with 8 essential components (ELEMENTS). Bamako Initiative (1987) introduced revolving drug funds and community co-financing.",
      mcqExamTips: [
        "Four Pillars of PHC: Community participation, Intersectoral coordination, Appropriate technology, Equitable distribution.",
        "Diagnostic 2x2 table math: Sensitivity = a/(a+c); Specificity = d/(b+d); Positive Predictive Value increases as prevalence increases.",
        "Median is the measure of central tendency least affected by extreme outliers in skewed distributions."
      ]
    }
  },

  2: {
    dayNumber: 2,
    dayTheme: "Psychiatry (Schizophrenia & Psychosis) + Breast Cancer & Mastectomy + Biostatistics",
    totalAllocatedMinutes: 135,
    medicineGroup: {
      specialty: SubjectType.MEDICINE,
      groupTitle: "Psychotic Disorders & Psychopharmacology Cluster",
      relatedEssayTopic: "Schizophrenia, Psychotic Disorders & Depot Antipsychotics",
      allocatedTimeMinutes: 60,
      timePerTopicMinutes: 15,
      themeKeywords: ["schizophrenia", "psychosis", "delusional", "organic mental", "approach to neurological examination", "sleep disorders", "substance use"],
      highYieldPearl: "Schneider's First-Rank Symptoms of Schizophrenia: Audible thoughts, Voices arguing or discussing, Voices commenting on one's actions, Thought withdrawal, Thought insertion, Thought broadcast, Passivity experiences.",
      mcqExamTips: [
        "Extrapyramidal side effects timeline: Acute dystonia (hours to days -> treat with procyclidine); Akathisia (days to weeks -> treat with propranolol); Parkinsonism (weeks to months); Tardive dyskinesia (months to years -> switch to Clozapine).",
        "Neuroleptic Malignant Syndrome (NMS): Hyperthermia, lead-pipe rigidity, autonomic instability, elevated CK. Stop antipsychotic immediately and give Bromocriptine/Dantrolene.",
        "Depot antipsychotics (Fluphenazine decanoate, Paliperidone palmitate) are indicated for clinic defaulters and poor medication insight."
      ]
    },
    surgeryGroup: {
      specialty: SubjectType.SURGERY,
      groupTitle: "Breast Pathology & Surgical Oncology Cluster",
      relatedEssayTopic: "Breast Cancer Evaluation, Triple Assessment & Modified Radical Mastectomy",
      allocatedTimeMinutes: 45,
      timePerTopicMinutes: 15,
      themeKeywords: ["the breast", "breast diseases", "general principle of cancer management", "cancer chemotherapy", "grafts and flaps", "skin tumor"],
      highYieldPearl: "Triple assessment is 99% sensitive: Clinical examination + Bilateral Imaging (Mammography in >=35y, Ultrasound in <35y/dense breast) + Core needle biopsy (FNA cannot distinguish in-situ from invasive carcinoma).",
      mcqExamTips: [
        "Modified Radical Mastectomy (Patey / Auchincloss): Preserves the Pectoralis major muscle while resecting the breast, nipple-areola complex, and Level I & II axillary nodes.",
        "Long thoracic nerve injury causes 'winged scapula' (paralysis of serratus anterior). Thoracodorsal nerve injury impairs shoulder adduction/internal rotation (latissimus dorsi).",
        "Hormonal therapy: Tamoxifen (SERM) for ER/PR positive premenopausal women; Aromatase inhibitors (Anastrozole/Letrozole) for postmenopausal women."
      ]
    },
    commMedGroup: {
      specialty: SubjectType.COMMUNITY_MEDICINE,
      groupTitle: "Biostatistics, Tests of Significance & Sampling Cluster",
      relatedEssayTopic: "Biostatistics (Hypothesis Testing, t-Test vs Chi-Square & CI)",
      allocatedTimeMinutes: 30,
      timePerTopicMinutes: 15,
      themeKeywords: ["biostatistics", "inferential statistics", "t-test", "chi-square", "scales of measurements", "sample size determination", "research methods"],
      highYieldPearl: "Student t-test compares means between two independent groups of continuous parametric data. Chi-square test compares proportions / categorical distributions.",
      mcqExamTips: [
        "Type I error (alpha): False positive (rejecting null hypothesis when true). Type II error (beta): False negative. Statistical power = 1 - beta.",
        "Standard Error of the Mean (SEM) = Standard Deviation / sqrt(n). 95% Confidence Interval = Mean +/- 1.96 * SEM.",
        "Nominal scale: unordered categories (blood groups); Ordinal scale: ordered categories (cancer stages); Interval/Ratio: quantifiable numerical values."
      ]
    }
  },

  3: {
    dayNumber: 3,
    dayTheme: "Endocrinology (Diabetes, DKA & HHS) + Prostate Cancer & Retention + Healthcare Financing",
    totalAllocatedMinutes: 135,
    medicineGroup: {
      specialty: SubjectType.MEDICINE,
      groupTitle: "Endocrinology, Diabetes & Metabolic Traps Cluster",
      relatedEssayTopic: "Diabetes Mellitus (Types 1 & 2), Diabetic Ketoacidosis (DKA) & HHS",
      allocatedTimeMinutes: 60,
      timePerTopicMinutes: 15,
      themeKeywords: ["diabetes mellitus", "diabetic", "insulin therapy", "endocrine", "calcium metabolism", "adrenal gland", "thyroid disorders", "obesity and medical nutrition", "hyperglycaemic"],
      highYieldPearl: "DKA diagnostic triad: Blood glucose >11 mmol/L, venous pH <7.30 or HCO3 <15 mmol/L, urine ketones >=2+ or blood beta-hydroxybutyrate >3.0 mmol/L. Normal Saline 1L in 1st hour; regular insulin 0.1 U/kg/h ONLY if K+ >3.3 mmol/L!",
      mcqExamTips: [
        "HHS vs DKA: HHS has blood glucose >33.3 mmol/L (>600 mg/dL), serum osmolality >320 mOsm/kg, absence of severe ketoacidosis (pH >7.30, HCO3 >18), and higher fluid deficit (8-10L).",
        "Wagner Diabetic Foot Ulcer Classification: Grade 0 (intact skin), Grade 1 (superficial ulcer), Grade 2 (deep ulcer to tendon), Grade 3 (abscess/osteomyelitis), Grade 4 (forefoot gangrene), Grade 5 (extensive foot gangrene).",
        "Somogyi effect (nocturnal hypoglycemia causing counter-regulatory morning hyperglycemia -> decrease bedtime insulin) vs Dawn phenomenon (early morning GH surge -> increase bedtime insulin)."
      ]
    },
    surgeryGroup: {
      specialty: SubjectType.SURGERY,
      groupTitle: "Urology, Prostate Pathology & Bladder Outlet Obstruction Cluster",
      relatedEssayTopic: "Benign Prostatic Hyperplasia (BPH), Prostate Cancer & Acute Urinary Retention",
      allocatedTimeMinutes: 45,
      timePerTopicMinutes: 15,
      themeKeywords: ["prostate gland", "prostate", "common urological emergency", "investigations in urology", "catheter", "bladder outlet", "urogenital", "urolithiasis", "tumors of the urinary tract", "hematuria"],
      highYieldPearl: "BPH arises in the TRANSITIONAL zone (causes early lower urinary tract obstructive symptoms); Prostate Adenocarcinoma arises in the PERIPHERAL zone (felt on DRE as a hard, craggy, non-tender nodule with loss of median sulcus).",
      mcqExamTips: [
        "Acute Urinary Retention initial step: Immediate urethral catheterization with 16-18 Fr Foley. If urethral catheterization fails due to stricture, perform emergency percutaneous suprapubic cystostomy.",
        "Medical therapy for BPH: Alpha-1 blockers (Tamsulosin) relax prostatic smooth muscle (onset days); 5-alpha-reductase inhibitors (Finasteride) reduce prostate volume by 20-25% (takes 3-6 months).",
        "Batson's prevertebral venous plexus explains osteoblastic bone metastases from prostate cancer to the lumbar spine and pelvis without pulmonary involvement."
      ]
    },
    commMedGroup: {
      specialty: SubjectType.COMMUNITY_MEDICINE,
      groupTitle: "Healthcare Financing, NHIA & Health Economics Cluster",
      relatedEssayTopic: "Healthcare Financing & National Health Insurance Scheme (NHIS / NHIA Act 2022)",
      allocatedTimeMinutes: 30,
      timePerTopicMinutes: 15,
      themeKeywords: ["health care financing", "health management", "health care sector in nigeria", "financing", "public health admin", "national health insurance", "utilization of health services", "economic evaluation"],
      highYieldPearl: "Three core functions of healthcare financing: Revenue collection (taxes, mandatory payroll contributions), Risk pooling (protecting households from catastrophic financial hardship), and Strategic purchasing (allocating resources to high-value care).",
      mcqExamTips: [
        "NHIA Act 2022 repealed the 1999 voluntary NHIS Act and made health insurance MANDATORY for all Nigerian citizens and legal residents, establishing the Vulnerable Group Fund.",
        "Basic Health Care Provision Fund (BHCPF) is funded by not less than 1% of the Federal Government's Consolidated Revenue Fund (CRF). 50% through NHIA, 45% NPHCDA, 5% emergency medical treatment.",
        "Economic evaluations: Cost-Effectiveness Analysis (natural health units e.g. life years saved); Cost-Utility Analysis (QALYs / DALYs); Cost-Benefit Analysis (monetary value)."
      ]
    }
  },

  4: {
    dayNumber: 4,
    dayTheme: "Nephrology (AKI vs CKD & Dialysis) + Intestinal Obstruction & Laparotomy + Maternal Mortality",
    totalAllocatedMinutes: 135,
    medicineGroup: {
      specialty: SubjectType.MEDICINE,
      groupTitle: "Nephrology, Renal Failure & Electrolyte Disorders Cluster",
      relatedEssayTopic: "Acute Kidney Injury (KDIGO), Chronic Kidney Disease & Glomerulonephritis",
      allocatedTimeMinutes: 60,
      timePerTopicMinutes: 15,
      themeKeywords: ["acute kidney injury", "chronic kidney disease", "kidney replacement therapy", "glomerular diseases", "fluid and electrolyte imbalance", "diabetic kidney disease"],
      highYieldPearl: "Indications for Urgent Hemodialysis (AEIOU mnemonic): A - Refractory metabolic Acidosis (pH <7.1), E - Refractory hyperkalemia with ECG changes (K+ >6.5), I - Toxic Ingestions (methanol, ethylene glycol, lithium), O - Refractory pulmonary Overload, U - Uremic encephalopathy/pericarditis.",
      mcqExamTips: [
        "Hyperkalemia emergency ECG progression: Tall peaked T waves -> prolonged PR -> loss of P wave -> widening QRS -> sine wave -> VF arrest. Membrane stabilizer: 10% IV Calcium Gluconate 10ml over 5-10 min.",
        "KDIGO AKI definition: Increase in serum creatinine by >=0.3 mg/dL within 48h, or >=1.5x baseline within 7 days, or urine output <0.5 mL/kg/h for 6 hours.",
        "Broad waxy casts on urinalysis are hallmark of end-stage chronic kidney disease due to tubular dilation."
      ]
    },
    surgeryGroup: {
      specialty: SubjectType.SURGERY,
      groupTitle: "Intestinal Obstruction, Volvulus & Hernia Surgery Cluster",
      relatedEssayTopic: "Intestinal Obstruction, Sigmoid Volvulus & Strangulated Hernias",
      allocatedTimeMinutes: 45,
      timePerTopicMinutes: 15,
      themeKeywords: ["intestinal obstruction", "the large intestine", "anorectal disease", "hernias", "management of acute abdomen", "neonatal intestinal obstruction", "hirschprung"],
      highYieldPearl: "Cardinal signs of mechanical bowel obstruction: Colicky abdominal pain, Vomiting (early in small bowel, late in large bowel), Abdominal distension, Absolute constipation. Strangulation signs: Continuous severe pain, fever, tachycardia, localized peritonism, leukocytosis.",
      mcqExamTips: [
        "Sigmoid volvulus: Coffee-bean sign with apex pointing to RUQ; treat first-line with rigid sigmoidoscopy and flatus tube decompression. Cecal volvulus: points to LUQ; requires emergency laparotomy/right hemicolectomy.",
        "Small bowel vs large bowel X-ray: Small bowel has valvulae conniventes traversing the full width of the lumen; large bowel has haustra traversing only partial width.",
        "Direct inguinal hernia passes through Hesselbach's triangle medial to the inferior epigastric vessels; indirect hernia passes through the deep inguinal ring lateral to inferior epigastrics."
      ]
    },
    commMedGroup: {
      specialty: SubjectType.COMMUNITY_MEDICINE,
      groupTitle: "Maternal Health, EmOC & Reproductive Epidemiology Cluster",
      relatedEssayTopic: "Maternal Mortality (Three Delays Model) & EmOC Services",
      allocatedTimeMinutes: 30,
      timePerTopicMinutes: 15,
      themeKeywords: ["reproductive health", "measurement of fertility and mortality", "focused anc", "post-natal care", "maternal depletion", "demographic process"],
      highYieldPearl: "Maternal Mortality Ratio (MMR): Deaths of women from pregnancy-related causes per 100,000 live births. The Three Delays Model: 1. Delay in decision to seek care; 2. Delay in reaching health facility; 3. Delay in receiving quality care at the facility.",
      mcqExamTips: [
        "Major direct causes of maternal mortality in Nigeria: Hemorrhage (primary PPH), Hypertensive disorders (eclampsia), Sepsis, Unsafe abortion, Obstructed labor.",
        "Basic Emergency Obstetric Care (BEmONC) has 7 signal functions; Comprehensive EmONC (CEmONC) adds 2 functions: Cesarean section and Blood transfusion.",
        "Total Fertility Rate (TFR): The average number of children a woman would bear if she survived through her reproductive years (15-49) conforming to current age-specific fertility rates."
      ]
    }
  },

  5: {
    dayNumber: 5,
    dayTheme: "Gastroenterology (Cirrhosis, SBP & Varices) + Head Injury & ATLS + Medical Ethics",
    totalAllocatedMinutes: 135,
    medicineGroup: {
      specialty: SubjectType.MEDICINE,
      groupTitle: "Hepatology, Cirrhosis & Portal Hypertension Cluster",
      relatedEssayTopic: "Cirrhosis, Portal Hypertension, Ascites, SBP & Variceal Bleeding",
      allocatedTimeMinutes: 60,
      timePerTopicMinutes: 15,
      themeKeywords: ["viral hepatitis", "gallstone disease", "acute liver failure", "gastrointestinal bleeding", "peptic ulcer disease", "gastroenteritis", "cirrhosis"],
      highYieldPearl: "Serum-Ascites Albumin Gradient (SAAG): >=1.1 g/dL indicates Portal Hypertension (Cirrhosis, Budd-Chiari, Cardiac ascites); <1.1 g/dL indicates peritoneal cause (Peritoneal TB, carcinomatosis, nephrotic syndrome).",
      mcqExamTips: [
        "Spontaneous Bacterial Peritonitis (SBP): Ascitic fluid absolute neutrophil count >=250 cells/mm3 (0.25 x 10^9/L); empiric treatment of choice is IV Ceftriaxone or Cefotaxime.",
        "Acute variceal hemorrhage protocol: Restrictive transfusion (target Hb 7-8 g/dL), IV Terlipressin/Octreotide, prophylactic IV Ceftriaxone, and urgent upper endoscopy with band ligation within 12 hours.",
        "Child-Pugh score parameters: Bilirubin, Albumin, INR/Prothrombin time, Ascites, Encephalopathy (Score 5-6: Class A, 7-9: Class B, 10-15: Class C)."
      ]
    },
    surgeryGroup: {
      specialty: SubjectType.SURGERY,
      groupTitle: "Trauma, ATLS Resuscitation & Head Injury Cluster",
      relatedEssayTopic: "Polytrauma, ATLS Protocol, Head Injury (GCS) & Epidural Hematoma",
      allocatedTimeMinutes: 45,
      timePerTopicMinutes: 15,
      themeKeywords: ["trauma management", "head injury", "clinical and investigative evaluation of neurosurgical", "evaluation of neurological patients", "surgical bleeding and hemostasis / shock", "cardiopulmonary resuscitation"],
      highYieldPearl: "ATLS Primary Survey: Airway with C-spine control, Breathing with ventilation, Circulation with hemorrhage control, Disability (GCS & pupils), Exposure/Environmental control. Treat immediate life threats before moving to next step.",
      mcqExamTips: [
        "Epidural hematoma: Rupture of Middle Meningeal Artery beneath the pterion; classic 'lucid interval' followed by rapid herniation; biconvex (lenticular) hyperdensity on non-contrast CT.",
        "Subdural hematoma: Tearing of bridging veins; crescentic shape crossing suture lines but limited by dural reflections.",
        "Cushing's triad of raised intracranial pressure: Hypertension (widened pulse pressure), Bradycardia, and Irregular respiration (Cheyne-Stokes)."
      ]
    },
    commMedGroup: {
      specialty: SubjectType.COMMUNITY_MEDICINE,
      groupTitle: "Medical Ethics, Jurisprudence & Professional Conduct Cluster",
      relatedEssayTopic: "Medical Ethics (4 Cardinal Principles) & Doctor-Patient Relationship",
      allocatedTimeMinutes: 30,
      timePerTopicMinutes: 15,
      themeKeywords: ["medical ethics", "duties of doctors", "doctor-patient relationship", "professional negligence", "code of conduct"],
      highYieldPearl: "The 4 Cardinal Principles of Biomedical Ethics: Autonomy (respect for patient decision-making), Beneficence (acting in patient's best interest), Non-maleficence (Primum non nocere / do no harm), and Justice (fair allocation of healthcare resources).",
      mcqExamTips: [
        "Four elements of medical negligence (4 Ds): Duty of care, Dereliction (breach of standard of care), Direct causation, and Damages.",
        "Informed consent requires: Adequate disclosure of risks/benefits, Decision-making capacity, and Voluntary agreement free of coercion.",
        "Res ipsa loquitur ('the thing speaks for itself') doctrine applies when injury could only result from negligence (e.g. retained surgical swab), shifting burden of proof to doctor."
      ]
    }
  },

  6: {
    dayNumber: 6,
    dayTheme: "Psychiatry (Mood Disorders: Bipolar & Depression) + Thyroid Surgery + Epidemiology",
    totalAllocatedMinutes: 135,
    medicineGroup: {
      specialty: SubjectType.MEDICINE,
      groupTitle: "Affective & Mood Disorders Cluster",
      relatedEssayTopic: "Mood Disorders, Bipolar Affective Disorder, Mania & Depression",
      allocatedTimeMinutes: 60,
      timePerTopicMinutes: 15,
      themeKeywords: ["major depressive disorder", "bipolar affective disorder", "suicide risk assessment", "anxiety disorders", "sleep disorders", "substance use"],
      highYieldPearl: "Diagnostic criteria for Major Depressive Episode: >=5 of 9 symptoms for at least 2 weeks, must include depressed mood or anhedonia (DIGS SPACE: Depressed mood, Interest loss, Guilt, Sleep disturbance, Suicidal thoughts, Psychomotor changes, Appetite change, Concentration deficit, Energy lack).",
      mcqExamTips: [
        "Lithium toxicity (therapeutic window 0.6 - 1.2 mmol/L): Tremor, ataxia, dysarthria, renal failure, seizures. Exacerbated by thiazide diuretics, ACE inhibitors, and NSAIDs.",
        "Mania diagnostic criteria: Abnormally elevated or irritable mood for at least 1 week with grandiosity, decreased need for sleep, pressured speech, and flight of ideas.",
        "Electroconvulsive Therapy (ECT) is first-line in severe depression with acute high suicide risk, catatonia, or severe food refusal causing life-threatening malnutrition."
      ]
    },
    surgeryGroup: {
      specialty: SubjectType.SURGERY,
      groupTitle: "Endocrine Surgery, Goitre & Thyroid Malignancy Cluster",
      relatedEssayTopic: "Thyroid Swellings, Goitre, Thyroid Malignancies & Post-Op Complications",
      allocatedTimeMinutes: 45,
      timePerTopicMinutes: 15,
      themeKeywords: ["thyroid gland disorders", "head and neck masses", "general principle of cancer management", "peri-operative care", "post-op"],
      highYieldPearl: "Thyroid swelling moves upward on swallowing because it is enclosed by the pretracheal layer of deep cervical fascia. Thyroglossal duct cyst moves upward on tongue protrusion.",
      mcqExamTips: [
        "Thyroid carcinoma types: Papillary (75-80%, ground-glass 'Orphan Annie' nuclei, psammoma bodies, lymphatic spread); Follicular (capsular/vascular invasion, hematogenous spread to bone); Medullary (from C-cells, secretes Calcitonin, MEN 2); Anaplastic (rapid elderly invasion, worst prognosis).",
        "Post-thyroidectomy respiratory distress causes: 1. Tension hematoma under strap muscles (open skin and deep fascia immediately at bedside); 2. Bilateral recurrent laryngeal nerve injury; 3. Laryngeal edema; 4. Tracheomalacia.",
        "Chvostek sign (facial twitch on tapping facial nerve) and Trousseau sign (carpopedal spasm on inflating BP cuff) signify acute hypocalcemia from inadvertent parathyroidectomy."
      ]
    },
    commMedGroup: {
      specialty: SubjectType.COMMUNITY_MEDICINE,
      groupTitle: "Epidemiological Study Designs & Association Measures Cluster",
      relatedEssayTopic: "Epidemiologic Study Designs (Case-Control vs Cohort Studies)",
      allocatedTimeMinutes: 30,
      timePerTopicMinutes: 15,
      themeKeywords: ["epidemiology: epidemiological methods", "epidemiology: definition", "study designs", "research methodology", "double burden of disease"],
      highYieldPearl: "Cohort study: Proceeds from exposure to outcome, calculates Relative Risk (RR) and Incidence, expensive, prone to loss to follow-up. Case-Control study: Proceeds from outcome to exposure, calculates Odds Ratio (OR), ideal for rare diseases, prone to recall bias.",
      mcqExamTips: [
        "Relative Risk (RR) = [a/(a+b)] / [c/(c+d)]. RR = 1 indicates no association; RR > 1 indicates increased risk; RR < 1 indicates protective factor.",
        "Odds Ratio (OR) in case-control = (a * d) / (b * c). Approximates Relative Risk when the disease is rare in the population.",
        "Confounding variable: Associated with both exposure and outcome, but not on the causal pathway between them; controlled by randomization, matching, or stratified analysis."
      ]
    }
  },

  7: {
    dayNumber: 7,
    dayTheme: "Pulmonology (Pneumonia, TB & Asthma) + Inguinal Hernias + EPI Immunization",
    totalAllocatedMinutes: 135,
    medicineGroup: {
      specialty: SubjectType.MEDICINE,
      groupTitle: "Respiratory Infections & Obstructive Lung Diseases Cluster",
      relatedEssayTopic: "Community-Acquired Pneumonia, Pulmonary TB & Acute Severe Asthma",
      allocatedTimeMinutes: 60,
      timePerTopicMinutes: 15,
      themeKeywords: ["pneumonias", "tuberculosis", "asthma", "pleural effusion", "chronic obstructive pulmonary", "carcinoma of the lungs", "respiratory failure"],
      highYieldPearl: "CURB-65 pneumonia severity score: Confusion, Urea >7 mmol/L, Respiratory rate >=30/min, Blood pressure <90 systolic or <=60 diastolic, Age >=65. Score >=3 indicates severe pneumonia requiring hospital/ICU admission.",
      mcqExamTips: [
        "Tuberculosis first-line 6-month regimen: 2 months of HRZE (Isoniazid, Rifampicin, Pyrazinamide, Ethambutol) followed by 4 months of HR. Monitor vision for Ethambutol optic neuritis.",
        "Acute severe asthma signs: PEFR 33-50% predicted, inability to complete sentences in one breath, RR >=25/min, pulse >=110 bpm. Life-threatening signs: Silent chest, cyanosis, PEFR <33%, exhaustion.",
        "Light's criteria for exudative pleural effusion: Pleural/serum protein ratio >0.5, Pleural/serum LDH ratio >0.6, or Pleural LDH >2/3 upper limit of normal serum LDH."
      ]
    },
    surgeryGroup: {
      specialty: SubjectType.SURGERY,
      groupTitle: "Abdominal Wall Hernias & Inguino-Scrotal Surgery Cluster",
      relatedEssayTopic: "Inguinal Hernias, Femoral Hernias, Scrotal Swellings & Lichtenstein Repair",
      allocatedTimeMinutes: 45,
      timePerTopicMinutes: 15,
      themeKeywords: ["hernias", "scrotal swellings", "benign and malignant diseases of the prostate", "paediatric urology", "common urological emergency"],
      highYieldPearl: "Femoral hernia passes through the femoral ring below and lateral to the pubic tubercle, medial to femoral vein. Highest risk of strangulation (up to 40%) due to rigid lacunar (Gimbernat's) ligament.",
      mcqExamTips: [
        "Internal ring occlusion test: Reduce hernia, occlude deep inguinal ring (midway between ASIS and pubic symphysis, 1.5 cm above inguinal ligament). If impulse is controlled = Indirect hernia.",
        "Lichtenstein tension-free hernioplasty uses polypropylene mesh to reconstruct the floor of the inguinal canal.",
        "Testicular torsion: Sudden scrotal pain, high-riding horizontal testis, absent cremasteric reflex, negative Prehn's sign; surgical exploration within 6 hours."
      ]
    },
    commMedGroup: {
      specialty: SubjectType.COMMUNITY_MEDICINE,
      groupTitle: "Immunization, EPI Schedule & Vaccine Cold Chain Cluster",
      relatedEssayTopic: "Expanded Programme on Immunization (EPI) & Cold Chain Management",
      allocatedTimeMinutes: 30,
      timePerTopicMinutes: 15,
      themeKeywords: ["cold chain", "expanded programme on immunization", "vaccine", "epi", "primary health care 1", "child health"],
      highYieldPearl: "Nigeria National Routine Immunization Schedule at birth: BCG (intradermal), OPV-0 (oral), and Hepatitis B birth dose (intramuscular) within 24 hours of delivery.",
      mcqExamTips: [
        "Vaccine storage temperature: Refrigerated vaccines (Pentavalent, PCV, IPV, HPV) must be stored at +2°C to +8°C and NEVER frozen. OPV and Yellow Fever can be stored at -20°C.",
        "Vaccine Vial Monitor (VVM): Discard if inner square matches or is darker than outer circle.",
        "Shake test: Performed to determine if a freeze-sensitive vaccine (Pentavalent, Td, Hepatitis B) has been damaged by accidental freezing."
      ]
    }
  },

  8: {
    dayNumber: 8,
    dayTheme: "Neurology (Acute Stroke & TIA) + Burns (Parkland Formula) + Environmental Health",
    totalAllocatedMinutes: 135,
    medicineGroup: {
      specialty: SubjectType.MEDICINE,
      groupTitle: "Cerebrovascular Accidents & Neuro-Emergencies Cluster",
      relatedEssayTopic: "Acute Ischemic & Hemorrhagic Stroke, TIA & Raised ICP",
      allocatedTimeMinutes: 60,
      timePerTopicMinutes: 15,
      themeKeywords: ["stroke", "coma", "approach to neurological examination", "headache syndromes", "spinal cord compression", "epilepsy", "parkinson's disease"],
      highYieldPearl: "Immediate non-contrast CT brain is mandatory to differentiate ischemic from hemorrhagic stroke before any antithrombotic therapy. IV rtPA (Alteplase) window is <=4.5 hours from symptom onset in eligible ischemic stroke.",
      mcqExamTips: [
        "Blood pressure management in acute stroke: In ischemic stroke, DO NOT lower BP unless >220/120 mmHg (or >185/110 if thrombolysis candidate). In intracerebral hemorrhage, target SBP 140 mmHg.",
        "Middle cerebral artery (MCA) occlusion: Contralateral hemiparesis and hemisensory loss (face and upper limb > lower limb), contralateral homonymous hemianopia, and aphasia (dominant hemisphere).",
        "Glasgow Coma Scale: Eye opening (4), Verbal response (5), Motor response (6). Maximum = 15; Minimum = 3; GCS <=8 defines severe coma requiring intubation."
      ]
    },
    surgeryGroup: {
      specialty: SubjectType.SURGERY,
      groupTitle: "Burns Resuscitation, Shock & Plastic Surgery Cluster",
      relatedEssayTopic: "Burns Resuscitation (Parkland Formula), Inhalational Injury & Escharotomy",
      allocatedTimeMinutes: 45,
      timePerTopicMinutes: 15,
      themeKeywords: ["burn / grafts and flaps", "burns", "surgical bleeding and hemostasis / shock", "fluid & electrolyte management", "surgical wound management"],
      highYieldPearl: "Parkland Formula: Total Ringer's Lactate in first 24h = 4 mL x weight (kg) x % TBSA (2nd & 3rd degree only). Give half in the first 8 hours FROM THE TIME OF BURN, and remaining half over the next 16 hours.",
      mcqExamTips: [
        "Wallace Rule of Nines in adults: Head & neck 9%, Each upper limb 9%, Anterior trunk 18%, Posterior trunk 18%, Each lower limb 18%, Perineum 1%. Patient's palm = 1% TBSA.",
        "Target adult urine output during burn resuscitation is 0.5 - 1.0 mL/kg/h (titrate fluids to urine output, not rigid formula).",
        "Circumferential full-thickness chest or limb burns cause compartment syndrome and ventilatory compromise; emergency escharotomy is indicated."
      ]
    },
    commMedGroup: {
      specialty: SubjectType.COMMUNITY_MEDICINE,
      groupTitle: "Environmental Health, Water Purification & Sanitation Cluster",
      relatedEssayTopic: "Environmental Health, Air Pollution & Water Purification",
      allocatedTimeMinutes: 30,
      timePerTopicMinutes: 15,
      themeKeywords: ["environmental health", "assessment of quality of water", "solid waste and liquid waste", "housing and health", "vector/pest control"],
      highYieldPearl: "Break-point chlorination is the addition of chlorine to water until the chlorine demand is satisfied and free residual chlorine (0.5 mg/L after 30 min contact time) remains for ongoing disinfection.",
      mcqExamTips: [
        "Slow sand filter (biological purification through vital layer / Schmutzdecke) vs Rapid sand filter (chemical coagulation with alum, backwash cleaning).",
        "Water-related diseases classification: Water-borne (Cholera, Typhoid); Water-washed (Scabies, Trachoma); Water-based (Schistosomiasis, Dracunculiasis); Water-related insect vectors (Malaria, Onchocerciasis).",
        "Biochemical Oxygen Demand (BOD): Amount of oxygen required by aerobic microorganisms to decompose organic matter in water; high BOD indicates heavy organic pollution."
      ]
    }
  },

  9: {
    dayNumber: 9,
    dayTheme: "Psychiatry (Acute Emergencies: Dystonia & NMS) + Colorectal Surgery + Occupational Health",
    totalAllocatedMinutes: 135,
    medicineGroup: {
      specialty: SubjectType.MEDICINE,
      groupTitle: "Psychiatric Emergencies & Adverse Drug Reactions Cluster",
      relatedEssayTopic: "Acute Psychiatric Emergencies, Drug Side Effects, NMS & Toxicities",
      allocatedTimeMinutes: 60,
      timePerTopicMinutes: 15,
      themeKeywords: ["acute drug poisoning and overdose", "schizophrenia", "anxiety disorders", "organic mental", "substance use"],
      highYieldPearl: "Acute dystonic reaction (oculogyric crisis, torticollis, trismus) is an emergency caused by D2 blockade; give IM/IV Benzotropine 1-2 mg or Procyclidine 5-10 mg immediately.",
      mcqExamTips: [
        "Serotonin Syndrome (SS) vs NMS: SS has hyperreflexia and clonus with rapid onset (24h); NMS has lead-pipe rigidity, hyporeflexia, and develops over days.",
        "Clozapine mandatory monitoring: Absolute Neutrophil Count (ANC) weekly for 18 weeks due to risk of agranulocytosis (stop if ANC <1.5 x 10^9/L).",
        "Delirium tremens: Starts 48-72h after alcohol cessation (hallucinations, tremor, autonomic hyperactivity, seizures); first-line treatment is high-dose IV Diazepam."
      ]
    },
    surgeryGroup: {
      specialty: SubjectType.SURGERY,
      groupTitle: "Colorectal Surgery & Lower GI Bleeding Cluster",
      relatedEssayTopic: "Colorectal Carcinoma, Dukes/TNM Staging & Lower GI Bleeding",
      allocatedTimeMinutes: 45,
      timePerTopicMinutes: 15,
      themeKeywords: ["the large intestine", "benign and malignant colorectal diseases", "anorectal disease", "general principle of cancer management", "imaging in surgery"],
      highYieldPearl: "Right-sided colon cancer presents with occult bleeding, iron deficiency anemia, and palpable mass; Left-sided presents with change in bowel habits, obstruction, and rectal bleeding.",
      mcqExamTips: [
        "Dukes Staging: Stage A (confined to bowel wall, not through muscularis propria), Stage B (penetrates through muscularis propria into serosa/pericolic fat), Stage C (regional lymph node metastasis), Stage D (distant metastasis).",
        "Carcinoembryonic Antigen (CEA) is not used for primary screening, but is the gold standard biomarker for post-operative recurrence monitoring.",
        "Lynch Syndrome (HNPCC): Autosomal dominant germline mutation in DNA mismatch repair genes (MLH1, MSH2); Amsterdam II criteria."
      ]
    },
    commMedGroup: {
      specialty: SubjectType.COMMUNITY_MEDICINE,
      groupTitle: "Occupational Health Services & Workplace Diseases Cluster",
      relatedEssayTopic: "Occupational Health Services, Workplace Hazards & Pneumoconiosis",
      allocatedTimeMinutes: 30,
      timePerTopicMinutes: 15,
      themeKeywords: ["occupational health", "occupational accidents", "small scale industries", "pneumoconiosis"],
      highYieldPearl: "Pneumoconioses: Silicosis (quarries/foundries, upper lobes, eggshell hilar calcification, predisposes to TB); Asbestosis (shipyards/construction, lower lobes, pleural plaques, causes mesothelioma and bronchogenic carcinoma).",
      mcqExamTips: [
        "Byssinosis ('Monday morning chest tightness') occurs in textile mill workers exposed to raw cotton, flax, or hemp dust.",
        "Ergonomic hazards: Repetitive strain injury, carpal tunnel syndrome, and lower back disorders in manual workers and computer operators.",
        "Workmen's Compensation / Employee's Compensation Act 2010 provides no-fault compensation for occupational injuries, diseases, or death."
      ]
    }
  },

  10: {
    dayNumber: 10,
    dayTheme: "Infectious Diseases (HIV/AIDS Opportunistic Infections) + Pediatric Surgery + Nutrition",
    totalAllocatedMinutes: 135,
    medicineGroup: {
      specialty: SubjectType.MEDICINE,
      groupTitle: "HIV Medicine, Sepsis & Immunocompromised States Cluster",
      relatedEssayTopic: "HIV/AIDS Clinical Staging, Opportunistic Infections, ART & Sepsis Bundle",
      allocatedTimeMinutes: 60,
      timePerTopicMinutes: 15,
      themeKeywords: ["hiv 1", "hiv and the skin", "hiv and respiratory", "hiv and digestive", "hiv and the nervous", "hiv and circulatory", "sepsis", "pyrexia of unknown origin"],
      highYieldPearl: "First-line preferred ART regimen in Nigeria: Dolutegravir (DTG) + Tenofovir Disoproxil Fumarate (TDF) + Lamivudine (3TC). High barrier to resistance, rapid viral load suppression.",
      mcqExamTips: [
        "Cryptococcal meningitis: India ink stain reveals encapsulated yeast; opening pressure elevated (>200 mmH2O); induction therapy is IV Amphotericin B + Flucytosine.",
        "Pneumocystis jirovecii Pneumonia (PCP): CD4 <200 cells/uL, exertional desaturation, bilateral perihilar ground-glass opacities; treatment of choice is high-dose IV Co-trimoxazole + Prednisolone if PaO2 <70 mmHg.",
        "Surviving Sepsis Hour-1 Bundle: Measure lactate, obtain blood cultures before antibiotics, administer broad-spectrum IV antibiotics, begin rapid 30 mL/kg crystalloid for hypotension/lactate >=4, apply vasopressors (Norepinephrine) if MAP <65."
      ]
    },
    surgeryGroup: {
      specialty: SubjectType.SURGERY,
      groupTitle: "Pediatric Surgery & Neonatal Emergencies Cluster",
      relatedEssayTopic: "Pediatric Surgical Emergencies: Intussusception, Hirschsprung & Pyloric Stenosis",
      allocatedTimeMinutes: 45,
      timePerTopicMinutes: 15,
      themeKeywords: ["congenital anomalies in paediatric", "pediatrics surgical emergency", "neonatal intestinal obstruction", "hirschprung", "anorectal malformation"],
      highYieldPearl: "Infantile Hypertrophic Pyloric Stenosis: Non-bilious projectile vomiting at 3-6 weeks of life, palpable 'olive-shaped' mass in RUQ, hypochloremic hypokalemic metabolic alkalosis. Resuscitate with normal saline + KCL before Ramstedt pyloromyotomy.",
      mcqExamTips: [
        "Intussusception triad: Colicky abdominal pain, vomiting, and 'red currant jelly' stool with sausage-shaped mass in RUQ and emptiness in RIF (Dance sign); ultrasound shows 'target' or 'doughnut' sign.",
        "Hirschsprung disease: Failure to pass meconium within 48h; rectal suction biopsy showing absence of ganglion cells in submucosal (Meissner) and myenteric (Auerbach) plexuses is gold standard.",
        "Congenital diaphragmatic hernia (Bochdalek postero-lateral): Scaphoid abdomen, respiratory distress, mediastinal shift; DO NOT bag-mask ventilate (distends stomach and compresses lung); intubate immediately."
      ]
    },
    commMedGroup: {
      specialty: SubjectType.COMMUNITY_MEDICINE,
      groupTitle: "Public Health Nutrition, PEM & Micronutrient Deficiencies Cluster",
      relatedEssayTopic: "Nutrition, Protein-Energy Malnutrition (PEM) & Food Fortification",
      allocatedTimeMinutes: 30,
      timePerTopicMinutes: 15,
      themeKeywords: ["public health nutrition", "nutritional problems", "epidemiology and control of common nutritional problems", "obesity"],
      highYieldPearl: "Kwashiorkor: Protein deficiency with adequate calories, bilateral pitting pedal edema, moon face, flag sign hair, flaky-paint dermatosis. Marasmus: Severe deficiency of all nutrients, severe wasting, 'old man' facies, no edema.",
      mcqExamTips: [
        "Wellcome Classification of PEM: Weight for age <60% without edema = Marasmus; Weight <60% with edema = Marasmic-Kwashiorkor; Weight 60-80% with edema = Kwashiorkor; Weight 60-80% without edema = Underweight.",
        "Vitamin A deficiency: Bitot's spots, night blindness, xerophthalmia, keratomalacia; routine mega-dose Vitamin A capsules given at 6, 12, 18 months.",
        "Iodine Deficiency Disorders (IDD): Goitre, cretinism (mental retardation, deaf-mutism, short stature); prevented by universal salt iodization with potassium iodate."
      ]
    }
  },

  11: {
    dayNumber: 11,
    dayTheme: "Gastroenterology (Peptic Ulcer Disease & GI Bleed) + Orthopaedics + Outbreaks",
    totalAllocatedMinutes: 135,
    medicineGroup: {
      specialty: SubjectType.MEDICINE,
      groupTitle: "Upper GI Bleeding & Acid Peptic Diseases Cluster",
      relatedEssayTopic: "Peptic Ulcer Disease, H. Pylori Eradication & Upper GI Hemorrhage",
      allocatedTimeMinutes: 60,
      timePerTopicMinutes: 15,
      themeKeywords: ["peptic ulcer disease", "gastrointestinal bleeding", "gastrointestinal reflux", "malabsorption", "gastrointestinal malignancies"],
      highYieldPearl: "H. pylori 14-day first-line quadruple therapy: PPI (e.g. Omeprazole 20mg BD) + Bismuth subsalicylate + Metronidazole + Tetracycline (or PPI + Clarithromycin + Amoxicillin + Metronidazole).",
      mcqExamTips: [
        "Duodenal ulcer vs Gastric ulcer: Duodenal ulcer pain relieved by food/antacids, awakens patient at 2 AM; Gastric ulcer pain exacerbated by food, higher association with gastric adenocarcinoma.",
        "Glasgow-Blatchford Score: Identifies low-risk upper GI bleed patients who can be safely managed as outpatients (score 0 = discharge).",
        "Rockall score: Post-endoscopic score predicting mortality and re-bleeding risk in upper GI hemorrhage."
      ]
    },
    surgeryGroup: {
      specialty: SubjectType.SURGERY,
      groupTitle: "Orthopaedic Trauma, Fractures & Bone Infections Cluster",
      relatedEssayTopic: "Orthopaedics: Open Fractures (Gustilo-Anderson), Compartment Syndrome & Osteomyelitis",
      allocatedTimeMinutes: 45,
      timePerTopicMinutes: 15,
      themeKeywords: ["principles of fracture management", "fractures and dislocations of lower", "bone tumours", "musculoskeletal infection", "compartment syndrome"],
      highYieldPearl: "Acute Compartment Syndrome: Pain out of proportion to injury, pain on passive muscle stretch (earliest and most sensitive sign). Tissue pressure >30 mmHg or delta pressure (Diastolic BP - Compartment pressure) <=30 mmHg mandates emergency decompressive fasciotomy.",
      mcqExamTips: [
        "Gustilo-Anderson Open Fracture Classification: Type I (<1 cm clean wound); Type II (1-10 cm without extensive soft tissue damage); Type IIIA (>10 cm, adequate soft tissue coverage); Type IIIB (extensive periosteal stripping, requires flap); Type IIIC (arterial injury requiring repair).",
        "Acute hematogenous osteomyelitis: Most common pathogen is Staphylococcus aureus (Salmonella species in sickle cell disease); X-ray changes (sequestrum, involucrum) lag 10-14 days behind clinical symptoms.",
        "Fat embolism syndrome triad: Respiratory distress (hypoxemia), Neurological dysfunction (confusion), and Petechial rash on axillae/chest 24-72h following long bone fracture."
      ]
    },
    commMedGroup: {
      specialty: SubjectType.COMMUNITY_MEDICINE,
      groupTitle: "Outbreak Investigation, IDSR & Epidemic Response Cluster",
      relatedEssayTopic: "Outbreak Investigation Steps & Integrated Disease Surveillance (IDSR)",
      allocatedTimeMinutes: 30,
      timePerTopicMinutes: 15,
      themeKeywords: ["epidemiology: types of epidemics", "concept of endemicity, epidemicity", "epidemic, and disaster management", "communicable diseases"],
      highYieldPearl: "10 Steps of Outbreak Investigation: 1. Confirm diagnosis; 2. Confirm existence of epidemic; 3. Define and identify cases (case definition); 4. Orient data in time, place, person; 5. Formulate hypotheses; 6. Evaluate hypotheses; 7. Refine hypotheses; 8. Implement control measures; 9. Communicate findings; 10. Maintain surveillance.",
      mcqExamTips: [
        "Epidemic Curve types: Point source (steep upslope, gradual downslope, clustered within one incubation period e.g. food poisoning); Propagated (successive peaks separated by incubation period e.g. measles/cholera).",
        "IDSR Priority Diseases: Immediately reportable within 24 hours (Lassa fever, Cholera, Yellow fever, Polio, Measles, Cerebrospinal meningitis).",
        "Basic reproduction number (R0): Average number of secondary cases produced by one infectious case in a fully susceptible population. If R0 > 1, epidemic spreads."
      ]
    }
  },

  12: {
    dayNumber: 12,
    dayTheme: "Psychiatry (Alcohol & Substance Dependence) + Urology (Hematuria) + Health Systems",
    totalAllocatedMinutes: 135,
    medicineGroup: {
      specialty: SubjectType.MEDICINE,
      groupTitle: "Addiction Psychiatry & Substance Use Disorders Cluster",
      relatedEssayTopic: "Alcohol & Substance Use Disorders, CAGE, Delirium Tremens & Rehabilitation",
      allocatedTimeMinutes: 60,
      timePerTopicMinutes: 15,
      themeKeywords: ["substance use disorders", "alcoholism", "organic mental", "acute drug poisoning", "sleep disorders"],
      highYieldPearl: "CAGE Questionnaire for alcohol dependence (>=2 positive is clinically significant): Have you ever felt you should Cut down? Have people Annoyed you by criticizing your drinking? Have you ever felt Guilty? Have you ever needed an Eye-opener in the morning?",
      mcqExamTips: [
        "Wernicke-Korsakoff syndrome: Wernicke encephalopathy (triad: ophthalmoplegia, ataxia, confusion; reversible with high-dose IV Thiamine); Korsakoff syndrome (anterograde/retrograde amnesia, confabulation; irreversible damage to mammillary bodies).",
        "Opioid overdose triad: Pinpoint pupils (miosis), respiratory depression, and coma. Antidote is IV Naloxone 0.4 - 2.0 mg titrated to respiratory rate.",
        "Alcohol withdrawal seizure treatment: IV Lorazepam/Diazepam. Maintenance anti-craving medications: Acamprosate, Naltrexone, Disulfiram (aldehyde dehydrogenase inhibitor causing nausea/flushing upon alcohol ingestion)."
      ]
    },
    surgeryGroup: {
      specialty: SubjectType.SURGERY,
      groupTitle: "Hematuria, Urolithiasis & Urological Oncology Cluster",
      relatedEssayTopic: "Urology: Hematuria Workup, Urolithiasis, Renal Cell Carcinoma & Bladder Tumors",
      allocatedTimeMinutes: 45,
      timePerTopicMinutes: 15,
      themeKeywords: ["hematuria", "urolithiasis", "tumors of the urinary tract", "investigations in urology", "common urological emergency"],
      highYieldPearl: "Painless gross hematuria in a patient over 40 years is CANCER (Bladder or Renal Cell Carcinoma) until proven otherwise; mandatory flexible cystoscopy and multiphasic CT urogram.",
      mcqExamTips: [
        "Renal Cell Carcinoma (RCC): Classic triad (10%): Flank pain, palpable flank mass, and hematuria. Originates from proximal convoluted tubule; clear cell is most common histology; paraneoplastic syndromes include erythrocytosis, hypercalcemia.",
        "Urinary calculi composition: Calcium oxalate (80%, radiopaque, envelope shaped); Struvite (staghorn calculi, Proteus mirabilis urease producers, alkaline urine); Uric acid (radiolucent on X-ray, radiopaque on CT).",
        "Bladder cancer: Transitional cell (urothelial) carcinoma is most common in Western world (smoking, aniline dyes); Squamous cell carcinoma is associated with chronic Schistosoma haematobium infection."
      ]
    },
    commMedGroup: {
      specialty: SubjectType.COMMUNITY_MEDICINE,
      groupTitle: "Health Systems Strengthening & WHO Building Blocks Cluster",
      relatedEssayTopic: "Health Systems Strengthening & WHO 6 Building Blocks",
      allocatedTimeMinutes: 30,
      timePerTopicMinutes: 15,
      themeKeywords: ["health management", "organization of services in phc", "public health admin", "health indicators"],
      highYieldPearl: "WHO 6 Health System Building Blocks: 1. Service Delivery; 2. Health Workforce; 3. Health Information Systems; 4. Access to Essential Medicines; 5. Financing; 6. Leadership / Governance.",
      mcqExamTips: [
        "Inverse Care Law (Julian Tudor Hart): The availability of good medical care tends to vary inversely with the need of the population served.",
        "Universal Health Coverage (UHC) cube dimensions: Breadth (who is covered?), Depth (which services are included?), Height (what proportion of direct costs are covered?).",
        "Levels of health care in Nigeria: Primary (Local Government Area); Secondary (State Ministry of Health / General Hospitals); Tertiary (Federal Government / Teaching Hospitals)."
      ]
    }
  },

  // Days 13-25 are fully mapped with their corresponding timetable sessions:
  13: {
    dayNumber: 13,
    dayTheme: "Hematology (Sickle Cell Anemia) + Dysphagia & Gastric Ca + Demography",
    totalAllocatedMinutes: 135,
    medicineGroup: {
      specialty: SubjectType.MEDICINE,
      groupTitle: "Hematology & Hemoglobinopathies Cluster",
      relatedEssayTopic: "Sickle Cell Disease Crises, Leukemias, Lymphomas & Coagulation Disorders",
      allocatedTimeMinutes: 60,
      timePerTopicMinutes: 15,
      themeKeywords: ["anaemias", "haemoglobinopathies", "lymphoproliferative", "myeloproliferative"],
      highYieldPearl: "Sickle Cell Acute Chest Syndrome: New pulmonary infiltrate on CXR accompanied by fever, chest pain, tachypnea, or hypoxemia. Leading cause of death; management includes analgesia, oxygen, empiric antibiotics, and blood transfusion / exchange transfusion.",
      mcqExamTips: [
        "Sickle cell crises: Vaso-occlusive (painful crisis); Aplastic crisis (Parvovirus B19, reticulocytopenia); Sequestration crisis (sudden splenomegaly, circulatory collapse); Hyperhemolytic.",
        "Chronic Myeloid Leukemia (CML): Philadelphia chromosome t(9;22) producing BCR-ABL tyrosine kinase; treated with Imatinib.",
        "Hemophilia A (Factor VIII deficiency) vs Hemophilia B (Factor IX deficiency): X-linked recessive, prolonged aPTT with normal PT and bleeding time; hemarthrosis is hallmark."
      ]
    },
    surgeryGroup: {
      specialty: SubjectType.SURGERY,
      groupTitle: "Upper GI Malignancies & Esophagogastric Surgery Cluster",
      relatedEssayTopic: "Upper GI Surgery: Progressive Dysphagia, Esophageal Ca & Gastric Adenocarcinoma",
      allocatedTimeMinutes: 45,
      timePerTopicMinutes: 15,
      themeKeywords: ["the stomach", "diseases of esophagus", "general principle of cancer management", "imaging in surgery"],
      highYieldPearl: "Progressive dysphagia (first for solids, then liquids) associated with weight loss indicates Esophageal Carcinoma until proven otherwise. Barium swallow shows 'bird's beak' in achalasia, 'apple-core' or irregular shelf in carcinoma.",
      mcqExamTips: [
        "Gastric cancer physical signs of inoperability / distant metastasis: Virchow's node (left supraclavicular), Sister Mary Joseph nodule (periumbilical), Krukenberg tumor (bilateral ovarian), Blumer shelf (rectovesical pouch).",
        "Mallory-Weiss syndrome: Longitudinal mucosal tear at the gastroesophageal junction secondary to severe vomiting; self-limiting arterial bleeding.",
        "Boerhaave syndrome: Transmural esophageal perforation due to violent retching (Mackler triad: vomiting, chest pain, subcutaneous emphysema); urgent surgical repair."
      ]
    },
    commMedGroup: {
      specialty: SubjectType.COMMUNITY_MEDICINE,
      groupTitle: "Demography, Population Dynamics & Census Methods Cluster",
      relatedEssayTopic: "Demography, Vital Statistics, Census & Population Pyramids",
      allocatedTimeMinutes: 30,
      timePerTopicMinutes: 15,
      themeKeywords: ["demography", "population dynamics", "census", "demographic process", "demographic transition"],
      highYieldPearl: "Population pyramid of developing countries like Nigeria: Expansive / broad base (high birth rate) with rapidly tapering apex (high mortality), indicating high child dependency ratio (>40% of population <15 years).",
      mcqExamTips: [
        "De facto census: Enumeration of individuals where they are found on census night. De jure census: Enumeration according to usual/permanent place of residence.",
        "Demographic Transition Theory: Stage 1 (High stationary: high birth, high death); Stage 2 (Early expanding: high birth, falling death -> population explosion); Stage 3 (Late expanding: falling birth, low death); Stage 4 (Low stationary).",
        "Dependency Ratio = [(Population aged 0-14 + Population aged 65+) / Population aged 15-64] x 100."
      ]
    }
  },

  14: {
    dayNumber: 14,
    dayTheme: "Infectious Diseases (Enteric Fever, Malaria & Tetanus) + Obstructive Jaundice + Disabilities",
    totalAllocatedMinutes: 135,
    medicineGroup: {
      specialty: SubjectType.MEDICINE,
      groupTitle: "Tropical Fevers, Malaria & Enteric Infections Cluster",
      relatedEssayTopic: "Enteric Fever (Typhoid), Severe Falciparum Malaria, Tetanus & Rabies",
      allocatedTimeMinutes: 60,
      timePerTopicMinutes: 15,
      themeKeywords: ["malaria", "typhoid", "tetanus", "rabies", "evaluation of the febrile patient", "salmonella", "clostridial"],
      highYieldPearl: "Severe malaria IV Artesunate dosing: 2.4 mg/kg IV at 0, 12, and 24 hours, then once daily until patient tolerates oral Artemisinin Combination Therapy (ACT). Always check capillary blood glucose to rule out hypoglycemia.",
      mcqExamTips: [
        "Typhoid fever timeline: Week 1 (step-ladder pyrexia, relative bradycardia - Faget sign, blood culture positive); Week 2 (rose spots, pea-soup diarrhea, Widal test positive); Week 3 (ileal perforation at Peyer patches).",
        "Tetanus management: Wound debridement, IV Metronidazole, Tetanus Immunoglobulin (3,000-6,000 IU), Diazepam/Magnesium sulfate for muscle spasms.",
        "Rabies hydrophobia: Encephalitic rabies; category III bites require immediate wound cleansing with soap/water, Rabies Vaccine (days 0, 3, 7, 14, 28) and Rabies Immunoglobulin infiltrated into wound."
      ]
    },
    surgeryGroup: {
      specialty: SubjectType.SURGERY,
      groupTitle: "Hepatobiliary Surgery, Gallstones & Jaundice Cluster",
      relatedEssayTopic: "Obstructive Jaundice, Choledocholithiasis & Periampullary Malignancies",
      allocatedTimeMinutes: 45,
      timePerTopicMinutes: 15,
      themeKeywords: ["the pancreas / obstructive jaundice", "the liver and biliary tracts", "gallstone disease", "pancreatitis"],
      highYieldPearl: "Courvoisier's Law: In the presence of painless jaundice, a palpably enlarged gallbladder is unlikely to be due to gallstones, but points to malignant obstruction of the common bile duct (e.g. Ca head of pancreas).",
      mcqExamTips: [
        "Charcot's triad of acute ascending cholangitis: Fever, Jaundice, and RUQ pain. Reynolds' pentad adds Hypotension and Altered mental status (emergency biliary decompression via ERCP).",
        "Biliary colic vs Acute cholecystitis: Acute cholecystitis has fever, leukocytosis, and Murphy's sign (arrest of inspiration on palpation of RUQ); ultrasound demonstrates thickened gallbladder wall (>3 mm) and pericholecystic fluid.",
        "Whipple procedure (Pancreaticoduodenectomy) is the resection of choice for resectable carcinoma of the head of pancreas and periampullary tumors."
      ]
    },
    commMedGroup: {
      specialty: SubjectType.COMMUNITY_MEDICINE,
      groupTitle: "Disability, Rehabilitation & Social Medicine Cluster",
      relatedEssayTopic: "Management of Handicapping Conditions & Community-Based Rehabilitation",
      allocatedTimeMinutes: 30,
      timePerTopicMinutes: 15,
      themeKeywords: ["impairment, disability and handicap", "social and rehab medicine", "social welfare service", "community mental health"],
      highYieldPearl: "WHO ICIDH framework: Impairment (loss of psychological, physiological or anatomical structure/function, e.g. amputated leg) -> Disability (restriction of ability to perform an activity within normal range) -> Handicap (social disadvantage preventing role fulfillment).",
      mcqExamTips: [
        "Community-Based Rehabilitation (CBR): Strategy within general community development for the rehabilitation, poverty reduction, and social inclusion of all people with disabilities.",
        "Levels of disability prevention: Primary (polio vaccination); Secondary (early correction of clubfoot); Tertiary (prosthetics and occupational retraining).",
        "Vulnerable populations in social welfare: Street children, motherless babies, internally displaced persons (IDPs), prison inmates."
      ]
    }
  },

  15: {
    dayNumber: 15,
    dayTheme: "Rheumatology (SLE, RA & Gout) + Anorectal Diseases + School Health",
    totalAllocatedMinutes: 135,
    medicineGroup: {
      specialty: SubjectType.MEDICINE,
      groupTitle: "Connective Tissue Diseases & Inflammatory Arthritides Cluster",
      relatedEssayTopic: "SLE, Lupus Nephritis, Rheumatoid Arthritis & Gouty Arthritis",
      allocatedTimeMinutes: 60,
      timePerTopicMinutes: 15,
      themeKeywords: ["connective tissue disorders", "mixed connective tissue disease", "the arthritides", "lupus"],
      highYieldPearl: "Systemic Lupus Erythematosus (SLE) serology: Antinuclear Antibodies (ANA) is most sensitive (>95%); Anti-dsDNA and Anti-Smith (Sm) are highly specific. Anti-dsDNA titers correlate with disease activity and lupus nephritis.",
      mcqExamTips: [
        "Rheumatoid Arthritis vs Osteoarthritis: RA involves MCP and PIP joints sparing DIPs, with symmetric morning stiffness >1 hour, positive Anti-CCP; OA involves DIP (Heberden nodes) and PIP (Bouchard nodes) with stiffness <30 mins.",
        "Acute gouty arthritis: Needle-shaped, negatively birefringent urate crystals under polarized light; treat acute attack with NSAIDs or Colchicine (DO NOT start Allopurinol during acute attack).",
        "Lupus nephritis: Class IV (diffuse proliferative) is most common and severe, characterized by 'wire-loop' lesions on renal biopsy."
      ]
    },
    surgeryGroup: {
      specialty: SubjectType.SURGERY,
      groupTitle: "Coloproctology, Hemorrhoids & Perianal Conditions Cluster",
      relatedEssayTopic: "Anorectal Diseases: Hemorrhoids, Anal Fissure, Fistula-in-Ano & Perianal Abscess",
      allocatedTimeMinutes: 45,
      timePerTopicMinutes: 15,
      themeKeywords: ["anorectal disease", "the large intestine", "sutures, drains"],
      highYieldPearl: "Goodsall's Rule for Fistula-in-Ano: Fistula with external opening anterior to the transverse anal line opens into the anal canal radially; fistula posterior opens into the posterior midline through a curved tract.",
      mcqExamTips: [
        "Internal hemorrhoids anatomical positions: 3, 7, and 11 o'clock in the lithotomy position (branches of the superior rectal artery).",
        "Anal fissure: Severe tearing pain during and after defecation with bright red blood on toilet paper; 90% occur in the posterior midline. Lateral internal sphincterotomy is definitive surgery for chronic fissure.",
        "Perianal abscess: Mandates immediate incision and drainage; do not wait for fluctuance due to risk of complex fistula formation and necrotizing fasciitis."
      ]
    },
    commMedGroup: {
      specialty: SubjectType.COMMUNITY_MEDICINE,
      groupTitle: "School Health Programme, Adolescent Health & Helminth Control Cluster",
      relatedEssayTopic: "School Health Services, Adolescent Health & Helminth Control",
      allocatedTimeMinutes: 30,
      timePerTopicMinutes: 15,
      themeKeywords: ["school health programme", "reproductive health: school", "child health", "health education"],
      highYieldPearl: "4 Components of School Health Programme: 1. Healthful school environment (adequate ventilation, safe water, sanitation); 2. School health services (screening, first aid, deworming); 3. School health education; 4. School-community-parent relationship.",
      mcqExamTips: [
        "Mass drug administration for soil-transmitted helminths (Ascaris, Hookworm, Trichuris): Albendazole 400mg or Mebendazole 500mg single dose every 6 months in endemic schools.",
        "Adolescent health challenges: Teenage pregnancy, unsafe abortion, sexually transmitted infections including HIV, substance abuse, mental health disorders.",
        "Classroom lighting & seating: Light should enter from the left side of right-handed pupils to prevent shadow cast on writing paper."
      ]
    }
  },

  16: {
    dayNumber: 16,
    dayTheme: "Psychiatry (Suicide & Toxicology) + Neck Masses + Family Planning",
    totalAllocatedMinutes: 135,
    medicineGroup: {
      specialty: SubjectType.MEDICINE,
      groupTitle: "Clinical Toxicology & Suicide Prevention Cluster",
      relatedEssayTopic: "Suicide Risk Assessment, Organophosphate Poisoning & Consultation-Liaison",
      allocatedTimeMinutes: 60,
      timePerTopicMinutes: 15,
      themeKeywords: ["suicide risk assessment", "acute drug poisoning and overdose", "substance use", "consultation-liaison"],
      highYieldPearl: "Organophosphate poisoning: Muscarinic overactivity (SLUDGEM: Salivation, Lacrimation, Urination, Defecation, GI cramping, Emesis, Miosis) and Nicotinic toxicity (muscle fasciculations, paralysis). Treatment: High-dose IV Atropine until pulmonary secretions clear, followed by Pralidoxime (oxime) to reactivate acetylcholinesterase.",
      mcqExamTips: [
        "SAD PERSONS suicide risk score: Sex (male), Age (<19 or >45), Depression, Previous attempt, Ethanol abuse, Rational thinking loss, Social supports lacking, Organized plan, No spouse, Sickness.",
        "Paracetamol (Acetaminophen) toxicity: Toxic metabolite NAPQI causes centrilobular hepatic necrosis; give N-acetylcysteine (NAC) within 8 hours of ingestion based on Rumack-Matthew nomogram.",
        "Carbon monoxide poisoning: Cherry-red skin color, headache, nausea; high-flow 100% oxygen or hyperbaric oxygen accelerates carboxyhemoglobin dissociation."
      ]
    },
    surgeryGroup: {
      specialty: SubjectType.SURGERY,
      groupTitle: "Head & Neck Surgery, Cystic Swellings & Salivary Glands Cluster",
      relatedEssayTopic: "Differential Diagnosis of Neck Masses, Branchial Cyst & Thyroglossal Duct Cyst",
      allocatedTimeMinutes: 45,
      timePerTopicMinutes: 15,
      themeKeywords: ["head and neck masses", "facial cleft", "salivary gland", "thyroid gland disorders"],
      highYieldPearl: "Thyroglossal duct cyst: Midline neck mass that moves upwards on protrusion of the tongue and swallowing; definitive surgery is the Sistrunk procedure (excision of cyst, tract, and central body of the hyoid bone).",
      mcqExamTips: [
        "Branchial cleft cyst: Lateral neck swelling located at the anterior border of the upper third of the sternocleidomastoid muscle (remnant of 2nd branchial cleft).",
        "Cystic hygroma (lymphangioma): Transilluminates brilliantly; soft fluctuant mass typically in the posterior triangle of the neck.",
        "Carotid body tumor (chemodectoma): Located at the carotid bifurcation; pulsatile mass that moves horizontally but NOT vertically (Fontaine's sign)."
      ]
    },
    commMedGroup: {
      specialty: SubjectType.COMMUNITY_MEDICINE,
      groupTitle: "Reproductive Health, Family Planning & Contraception Cluster",
      relatedEssayTopic: "Reproductive Health, Family Planning Methods & Contraceptive Counseling",
      allocatedTimeMinutes: 30,
      timePerTopicMinutes: 15,
      themeKeywords: ["family planning", "methods of fp", "unmet needs of fp", "reproductive health"],
      highYieldPearl: "Pearl Index: Number of unintended pregnancies per 100 woman-years of contraceptive use. Lower Pearl Index = higher contraceptive effectiveness (Implant / IUD < 1; Combined Oral Contraceptives ~7 typical use).",
      mcqExamTips: [
        "Emergency contraception options: Levonorgestrel 1.5 mg within 72 hours; Ulipristal acetate 30 mg within 120 hours; Copper IUD insertion within 5 days (most effective).",
        "Contraindications to Combined Oral Contraceptive Pills (COCP): Age >=35 and smoker (>=15 cigarettes/day), history of DVT/PE, migraine with aura, uncontrolled hypertension (>160/100).",
        "Unmet need for family planning: Proportion of fecund sexually active women who want to stop or delay childbearing but are not using any modern contraceptive method."
      ]
    }
  },

  17: {
    dayNumber: 17,
    dayTheme: "Cardiology (Infective Endocarditis & Arrhythmias) + Thoracic Trauma + Healthcare Waste",
    totalAllocatedMinutes: 135,
    medicineGroup: {
      specialty: SubjectType.MEDICINE,
      groupTitle: "Valvular Heart Disease, Endocarditis & Arrhythmias Cluster",
      relatedEssayTopic: "Infective Endocarditis, Rheumatic Fever & Cardiac Arrhythmias",
      allocatedTimeMinutes: 60,
      timePerTopicMinutes: 15,
      themeKeywords: ["infective endocarditis", "rheumatic fever", "brady- and tachyarrhythmias", "pericarditis", "electrocardiography"],
      highYieldPearl: "Jones Criteria for Acute Rheumatic Fever (Evidence of preceding GAS infection PLUS 2 Major OR 1 Major + 2 Minor): Major (JONES: Joints polyarthritis, Carditis, Nodules subcutaneous, Erythema marginatum, Sydenham chorea); Minor (Fever, Arthralgia, elevated ESR/CRP, prolonged PR interval).",
      mcqExamTips: [
        "Atrial Fibrillation management: Hemodynamically unstable requires immediate synchronized electrical cardioversion. Stable: Rate control (Beta-blocker/Diltiazem) and anticoagulation based on CHA2DS2-VASc score.",
        "Ventricular tachycardia / Ventricular fibrillation: Defibrillation / unsynchronized shock (200J biphasic), CPR, IV Epinephrine 1 mg every 3-5 min, IV Amiodarone 300 mg bolus.",
        "Osler nodes (painful nodules on pads of fingers/toes) vs Janeway lesions (painless erythematous macules on palms/soles) in Infective Endocarditis."
      ]
    },
    surgeryGroup: {
      specialty: SubjectType.SURGERY,
      groupTitle: "Thoracic Trauma, Chest Tube Insertion & Pneumothorax Cluster",
      relatedEssayTopic: "Thoracic Surgery: Pneumothorax, Hemothorax, Flail Chest & Chest Drain Insertion",
      allocatedTimeMinutes: 45,
      timePerTopicMinutes: 15,
      themeKeywords: ["management of chest injuries", "trauma management", "surgical bleeding and hemostasis", "cardiopulmonary resuscitation"],
      highYieldPearl: "Tension Pneumothorax is a clinical diagnosis: Immediate needle thoracostomy with 14G cannula at 5th intercostal space anterior axillary line (or 2nd ICS midclavicular line), followed immediately by chest tube (tube thoracostomy) insertion at the 'safe triangle'.",
      mcqExamTips: [
        "Safe Triangle for chest tube insertion: Anterior border of latissimus dorsi, lateral border of pectoralis major, apex below axilla, horizontal line level with 5th intercostal space.",
        "Flail chest: Fracture of >=3 consecutive ribs in >=2 places, producing a free-floating paradoxical segment that moves inward on inspiration and outward on expiration.",
        "Massive hemothorax definition: Immediate blood drainage >=1,500 mL upon chest tube insertion, or ongoing bleeding >=200 mL/hr for 2-4 consecutive hours; indication for urgent emergency thoracotomy."
      ]
    },
    commMedGroup: {
      specialty: SubjectType.COMMUNITY_MEDICINE,
      groupTitle: "Healthcare Waste Management & Hospital Infection Control Cluster",
      relatedEssayTopic: "Healthcare Waste Management & Municipal Solid Waste Disposal",
      allocatedTimeMinutes: 30,
      timePerTopicMinutes: 15,
      themeKeywords: ["solid waste and liquid waste", "environmental health", "chemical safety & poisoning"],
      highYieldPearl: "Healthcare Waste Color Coding (WHO standards): Yellow (infectious, pathological, anatomical waste for incineration); Red (highly infectious plastic/tubing); Brown (pharmaceutical/chemical waste); Black (non-hazardous domestic general waste).",
      mcqExamTips: [
        "Sharps disposal: Puncture-proof, leak-proof safety box filled to a maximum of 3/4 capacity, never recapped, incinerated at high temperatures (>1,000°C).",
        "Sanitary landfill method of solid waste disposal: Controlled tipping, compaction into layers 1-2 meters deep, covered daily with 20 cm of clean soil to prevent pest breeding.",
        "Hospital Acquired Infections (Nosocomial): Manifests >=48 hours after hospital admission; top types are Catheter-associated UTI (CAUTI), Surgical Site Infection (SSI), and Ventilator-associated Pneumonia (VAP)."
      ]
    }
  },

  18: {
    dayNumber: 18,
    dayTheme: "Neurology (Meningitis & Status Epilepticus) + Vascular Surgery + Screening Tests",
    totalAllocatedMinutes: 135,
    medicineGroup: {
      specialty: SubjectType.MEDICINE,
      groupTitle: "Central Nervous System Infections & Epilepsy Cluster",
      relatedEssayTopic: "Bacterial & Tuberculous Meningitis, Status Epilepticus & Epilepsy Syndromes",
      allocatedTimeMinutes: 60,
      timePerTopicMinutes: 15,
      themeKeywords: ["meningitis", "epilepsy", "approach to neurological examination", "headache syndromes", "spinal cord compression"],
      highYieldPearl: "CSF analysis in bacterial meningitis: Turbid, marked neutrophilic pleocytosis (>1,000 cells/uL), elevated protein (>1 g/L), marked reduction in glucose (<40% of blood glucose). Give IV Dexamethasone with or before initial dose of IV Ceftriaxone to reduce mortality and hearing loss.",
      mcqExamTips: [
        "Status Epilepticus management: 0-5 min (stabilize ABCDE, IV access); 5-10 min (IV Lorazepam 4 mg or Diazepam 10 mg); 10-30 min (IV Levetiracetam 60 mg/kg or IV Phenytoin 20 mg/kg); >30 min (ICU, general anesthesia with Propofol/Midazolam).",
        "Signs of meningeal irritation: Nuchal rigidity, Kernig sign (resistance to knee extension with hip flexed 90°), and Brudzinski sign (passive neck flexion causes involuntary flexion of hips and knees).",
        "Contraindications to immediate lumbar puncture: Signs of raised ICP (papilledema), focal neurological deficit, new seizures, GCS <12, bleeding diathesis, local infection at puncture site."
      ]
    },
    surgeryGroup: {
      specialty: SubjectType.SURGERY,
      groupTitle: "Peripheral Vascular Diseases & Thromboembolism Cluster",
      relatedEssayTopic: "Vascular Surgery: Deep Venous Thrombosis (DVT), Pulmonary Embolism & Diabetic Gangrene",
      allocatedTimeMinutes: 45,
      timePerTopicMinutes: 15,
      themeKeywords: ["varicose veins / dvt", "leg ulcers", "acute and chronic arterial disease", "amputation"],
      highYieldPearl: "Virchow's Triad for venous thromboembolism: Endothelial injury, Venous stasis, and Hypercoagulability. Wells score calculates DVT probability; compression Doppler ultrasonography is diagnostic modality of choice.",
      mcqExamTips: [
        "Acute arterial occlusion (The 6 Ps): Pain, Pallor, Pulselessness, Paresthesia, Paralysis, Perishingly cold. Irreversible nerve/muscle damage occurs if not revascularized within 6 hours (Fogarty catheter embolectomy).",
        "Venous ulcer (gaiter area around medial malleolus, shallow, sloping edges, hemosiderin pigmentation, painless) vs Arterial ulcer (punched out, deep, over bony prominences/toes, pale base, severely painful).",
        "Fontaine stages of peripheral artery disease: Stage I (asymptomatic), Stage II (intermittent claudication), Stage III (rest pain), Stage IV (ulceration/gangrene)."
      ]
    },
    commMedGroup: {
      specialty: SubjectType.COMMUNITY_MEDICINE,
      groupTitle: "Screening Programmes & Diagnostic Test Accuracy Cluster",
      relatedEssayTopic: "Screening for Disease: Sensitivity, Specificity & Predictive Values",
      allocatedTimeMinutes: 30,
      timePerTopicMinutes: 15,
      themeKeywords: ["research methods", "epidemiology", "biostatistics", "screening"],
      highYieldPearl: "Wilson and Jungner Criteria for Screening: The condition must be an important health problem, recognizable latent/early stage, natural history understood, suitable test available, acceptable treatment, agreed policy on whom to treat.",
      mcqExamTips: [
        "Sensitivity = TP / (TP + FN) -> Highly sensitive test rules OUT disease (SnNOut). Specificity = TN / (TN + FP) -> Highly specific test rules IN disease (SpPIn).",
        "Positive Predictive Value (PPV) = TP / (TP + FP). As disease prevalence increases in a population, PPV increases while sensitivity and specificity remain constant.",
        "Lead time bias: Apparent increase in survival time due to earlier diagnosis without actual prolongation of life. Length time bias: Over-detection of slowly progressive cases."
      ]
    }
  },

  19: {
    dayNumber: 19,
    dayTheme: "Psychiatry (Delirium vs Dementia MMSE) + Soft Tissue Sarcomas + National Health Policy",
    totalAllocatedMinutes: 135,
    medicineGroup: {
      specialty: SubjectType.MEDICINE,
      groupTitle: "Neurocognitive Disorders & Geriatric Psychiatry Cluster",
      relatedEssayTopic: "Delirium, Dementia, Cognitive Assessment (MMSE) & Neurocognitive Syndromes",
      allocatedTimeMinutes: 60,
      timePerTopicMinutes: 15,
      themeKeywords: ["organic mental disorders", "dementia", "evaluation of the elderly", "sleep disorders"],
      highYieldPearl: "Delirium vs Dementia: Delirium has acute onset (hours/days), fluctuating course, impaired consciousness and attention, reversible causes (infection, electrolytes, medications). Dementia has insidious onset (months/years), clear consciousness until late, progressive memory loss.",
      mcqExamTips: [
        "Mini-Mental State Examination (MMSE): Maximum score 30; score <24 indicates cognitive impairment. Assesses orientation, registration, attention/calculation, recall, and language.",
        "Alzheimer's Disease: Most common cause of dementia (60-70%); extracellular amyloid-beta plaques and intracellular hyperphosphorylated tau neurofibrillary tangles; first-line medications are Cholinesterase inhibitors (Donepezil, Rivastigmine).",
        "Normal Pressure Hydrocephalus (NPH) triad: Gait disturbance (magnetic/shuffling), Urinary incontinence, and Dementia ('wet, wacky, and wobbly'); therapeutic response to high-volume CSF tap test."
      ]
    },
    surgeryGroup: {
      specialty: SubjectType.SURGERY,
      groupTitle: "Surgical Oncology, Soft Tissue Tumors & Lumps Cluster",
      relatedEssayTopic: "Soft Tissue Tumors, Lipoma, Sebaceous Cyst & Soft Tissue Sarcoma Management",
      allocatedTimeMinutes: 45,
      timePerTopicMinutes: 15,
      themeKeywords: ["general principle of cancer management", "skin tumor", "grafts and flaps", "suture and drains"],
      highYieldPearl: "Soft tissue swellings >5 cm, deep to deep fascia, painful, or increasing in size are SARCOMAS until proven otherwise; mandatory MRI and core needle biopsy (never perform excisional biopsy on an undiagnosed sarcoma).",
      mcqExamTips: [
        "Lipoma: Most common benign soft tissue tumor; lobulated, soft, slippery edge; located in subcutaneous tissue.",
        "Sebaceous cyst (epidermoid cyst): Arises from hair follicle infundibulum; attached to overlying skin with a central punctum; definitive treatment is complete excision of the cyst wall.",
        "Soft tissue sarcoma staging depends on histological Grade, Size, and Depth; wide local excision with >=1-2 cm clear margins plus adjuvant radiotherapy."
      ]
    },
    commMedGroup: {
      specialty: SubjectType.COMMUNITY_MEDICINE,
      groupTitle: "Health Policy, Sustainable Development Goals & Health Reforms Cluster",
      relatedEssayTopic: "National Health Policy, Sustainable Development Goals (SDG 3) & PHC Reform",
      allocatedTimeMinutes: 30,
      timePerTopicMinutes: 15,
      themeKeywords: ["public health admin", "primary health care", "international health", "health management"],
      highYieldPearl: "Sustainable Development Goal 3 (SDG 3): 'Ensure healthy lives and promote well-being for all at all ages'. Key targets: Target 3.1: Reduce maternal mortality to <70 per 100,000 live births by 2030; Target 3.2: End preventable deaths of newborns and children under 5.",
      mcqExamTips: [
        "National Health Act 2014: Established the Basic Health Care Provision Fund (BHCPF) and legal framework for regulation, development, and management of the Nigerian health system.",
        "National Health Policy priorities: Strengthening PHC through 'Primary Health Care Under One Roof' (PHCUOR) to eliminate fragmentation.",
        "Target 3.8: Achieve Universal Health Coverage (UHC), including financial risk protection and access to safe, effective, quality essential medicines and vaccines."
      ]
    }
  },

  20: {
    dayNumber: 20,
    dayTheme: "Nephrology & Glomerular Diseases + Upper GI Bleeding Surgery + Vaccine Storage",
    totalAllocatedMinutes: 135,
    medicineGroup: {
      specialty: SubjectType.MEDICINE,
      groupTitle: "Glomerular Diseases & Nephrotic Syndrome Cluster",
      relatedEssayTopic: "Nephrotic Syndrome, Minimal Change Disease, FSGS & Lupus Nephritis",
      allocatedTimeMinutes: 60,
      timePerTopicMinutes: 15,
      themeKeywords: ["glomerular diseases", "evaluation of glomerular diseases", "introduction to chronic kidney disease", "kidney replacement"],
      highYieldPearl: "Nephrotic syndrome triad: Massive proteinuria (>3.5 g/24h or urine protein:creatinine ratio >300 mg/mmol), Hypoalbuminemia (<30 g/L), and Generalized pitting edema (anasarca); accompanied by hyperlipidemia and hypercoagulability (loss of antithrombin III).",
      mcqExamTips: [
        "Minimal Change Disease: Most common cause in children (85%); normal glomeruli on light microscopy, effacement of podocyte foot processes on electron microscopy; highly steroid-responsive.",
        "Focal Segmental Glomerulosclerosis (FSGS): Most common cause of nephrotic syndrome in black adults and HIV patients; poor response to steroids, high recurrence post-transplant.",
        "Nephritic syndrome: Hematuria (dysmorphic RBCs and RBC casts), oliguria, hypertension, mild-to-moderate proteinuria; prototype is Post-Streptococcal Glomerulonephritis (low C3 complement, high ASO titer)."
      ]
    },
    surgeryGroup: {
      specialty: SubjectType.SURGERY,
      groupTitle: "Emergency Upper GI Hemorrhage & Surgical Interventions Cluster",
      relatedEssayTopic: "Management of Acute Upper GI Bleeding: Peptic Ulcer vs Bleeding Gastric Varices",
      allocatedTimeMinutes: 45,
      timePerTopicMinutes: 15,
      themeKeywords: ["gastrointestinal bleeding", "the stomach", "surgical bleeding and hemostasis", "peri-operative care"],
      highYieldPearl: "Forrest classification of peptic ulcer bleeding: Ia (spurting hemorrhage) & Ib (oozing hemorrhage) have >80% rebleeding risk; mandate dual endoscopic hemostasis (epinephrine injection PLUS hemoclip or heater probe coaptation).",
      mcqExamTips: [
        "Sengstaken-Blakemore tube: Balloon tamponade used as temporary rescue measure for refractory variceal bleeding; gastric balloon inflated with 250 mL air, esophageal balloon inflated to 30-45 mmHg (deflate intermittently to prevent esophageal necrosis).",
        "Indications for surgery in bleeding peptic ulcer: Failed repeated endoscopic therapy, hemodynamic instability despite transfusion of >4-6 units PRBCs, persistent recurrent bleeding.",
        "Dieulafoy lesion: Large tortuous submucosal arteriole that erodes through gastric mucosa without an ulcer; causes sudden massive upper GI bleeding."
      ]
    },
    commMedGroup: {
      specialty: SubjectType.COMMUNITY_MEDICINE,
      groupTitle: "Vaccine Storage, Cold Chain Integrity & Injection Safety Cluster",
      relatedEssayTopic: "Cold Chain Maintenance, Vaccine Storage & Injection Safety",
      allocatedTimeMinutes: 30,
      timePerTopicMinutes: 15,
      themeKeywords: ["cold chain", "expanded programme on immunization", "vaccine", "epi"],
      highYieldPearl: "Top-opening ice-lined refrigerators (ILR): Cold air is denser and does not spill out when the lid is opened, maintaining +2°C to +8°C for up to 48 hours during power outages.",
      mcqExamTips: [
        "Conditional storage within the ILR: Freeze-sensitive vaccines (Pentavalent, PCV, Td) must NEVER touch the bottom or sides of the ILR where temperatures can drop below freezing.",
        "Auto-disable (AD) syringes are mandatory for all immunization sessions to completely prevent needle reuse and transmission of bloodborne pathogens (HIV, Hepatitis B/C).",
        "Adverse Events Following Immunization (AEFI): Minor common reactions (local pain, low-grade fever) vs Severe rare reactions (anaphylaxis, BCG osteitis)."
      ]
    }
  },

  21: {
    dayNumber: 21,
    dayTheme: "Psychiatry (Anxiety, OCD & PTSD) + Pediatric Hernias & Hydrocele + Morbidity Rates",
    totalAllocatedMinutes: 135,
    medicineGroup: {
      specialty: SubjectType.MEDICINE,
      groupTitle: "Neurotic, Stress-Related & Somatoform Disorders Cluster",
      relatedEssayTopic: "Generalized Anxiety, Panic Disorder, OCD, PTSD, Somatization & CBT",
      allocatedTimeMinutes: 60,
      timePerTopicMinutes: 15,
      themeKeywords: ["anxiety disorders", "major depressive disorder", "substance use", "psychosomatic"],
      highYieldPearl: "Panic attack: Sudden onset of intense fear accompanied by at least 4 autonomic symptoms (palpitations, sweating, trembling, dyspnea, chest pain, fear of dying) peaking within 10 minutes. First-line maintenance: SSRIs plus Cognitive Behavioral Therapy (CBT).",
      mcqExamTips: [
        "Obsessive-Compulsive Disorder (OCD): Recurrent intrusive obsessions (causing marked anxiety) neutralized by repetitive compulsions; first-line therapy is high-dose SSRIs (e.g. Fluoxetine) and Exposure and Response Prevention (ERP).",
        "Post-Traumatic Stress Disorder (PTSD): Symptoms persisting >1 month after life-threatening trauma: Intrusive re-experiencing (flashbacks, nightmares), Avoidance, Negative alterations in mood/cognition, Hyperarousal.",
        "Somatic Symptom Disorder: Persistent physical symptoms accompanied by disproportionate and persistent thoughts, feelings, and behaviors related to the symptoms."
      ]
    },
    surgeryGroup: {
      specialty: SubjectType.SURGERY,
      groupTitle: "Pediatric Inguino-Scrotal Conditions & Herniotomy Cluster",
      relatedEssayTopic: "Pediatric Surgery: Inguino-Scrotal Conditions (Hernia, Hydrocele & Undescended Testis)",
      allocatedTimeMinutes: 45,
      timePerTopicMinutes: 15,
      themeKeywords: ["hernias", "congenital anomalies in paediatric", "paediatric urology", "common urological emergency"],
      highYieldPearl: "All indirect inguinal hernias in children are due to a patent processus vaginalis (PPV). Operative treatment is HIGH HERNIOTOMY alone (no need to open the inguinal canal or repair the posterior wall).",
      mcqExamTips: [
        "Communicating hydrocele: Size fluctuates during the day (larger in evening, smaller in morning after lying flat); treat with herniotomy (ligation of PPV). Non-communicating hydrocele often resolves spontaneously by age 1-2 years.",
        "Cryptorchidism (undescended testis): Orchiopexy must be performed between 6 and 12-18 months of age to preserve fertility and facilitate testicular cancer surveillance.",
        "Complications of untreated undescended testis: Subfertility/infertility, 4-10x increased risk of testicular cancer (seminoma), testicular torsion, and trauma."
      ]
    },
    commMedGroup: {
      specialty: SubjectType.COMMUNITY_MEDICINE,
      groupTitle: "Morbidity, Mortality & Epidemiological Metrics Cluster",
      relatedEssayTopic: "Measurement of Health & Disease: Morbidity & Mortality Rates Calculation",
      allocatedTimeMinutes: 30,
      timePerTopicMinutes: 15,
      themeKeywords: ["research methods", "biostatistics", "demography", "epidemiology"],
      highYieldPearl: "Incidence Rate = Number of NEW cases occurring in a specified period / Population at risk during that period. Prevalence = Total (new + old) existing cases / Total population at a specified point in time. Prevalence = Incidence x Duration of disease (P = I x D).",
      mcqExamTips: [
        "Case Fatality Rate (CFR) = (Deaths from a specific disease / Total confirmed cases of that disease) x 100. Measures virulence of an infectious pathogen.",
        "Infant Mortality Rate (IMR) = (Deaths of infants <1 year of age / Total live births in same year) x 1,000.",
        "Under-Five Mortality Rate (U5MR) = Number of deaths of children <5 years per 1,000 live births (sensitive indicator of socio-economic development and child health)."
      ]
    }
  },

  22: {
    dayNumber: 22,
    dayTheme: "Phase 4 Rapid Drills: High-Frequency Medicine Long Cases + Acute Abdomen + Comm Med Blitz",
    totalAllocatedMinutes: 135,
    medicineGroup: {
      specialty: SubjectType.MEDICINE,
      groupTitle: "High-Frequency Long Case Synthesis & Viva Protocols",
      relatedEssayTopic: "High-Frequency Long Case Synthesis: Heart Failure, Stroke, DKA & CKD Review",
      allocatedTimeMinutes: 60,
      timePerTopicMinutes: 15,
      themeKeywords: ["heart failure", "stroke", "diabetes mellitus", "chronic kidney disease", "hypertension"],
      highYieldPearl: "Final MB Clinical Long Case Formula: Start with 30-second summary: 'This is Mr. X, a 54-year-old trader known hypertensive who presented with a 2-week history of worsening exertional dyspnea, orthopnea, and bilateral leg swelling, in NYHA Class IV heart failure secondary to hypertensive heart disease.'",
      mcqExamTips: [
        "Master differential generation: VINDICATE schema (Vascular, Infectious, Neoplastic, Degenerative, Iatrogenic, Congenital, Autoimmune, Trauma, Endocrine).",
        "Target organ damage in hypertension: Brain (stroke, encephalopathy), Heart (LVH, CAD, heart failure), Kidney (proteinuria, CKD), Eye (hypertensive retinopathy grades I-IV).",
        "DKA vs HHS fluid and insulin titration review."
      ]
    },
    surgeryGroup: {
      specialty: SubjectType.SURGERY,
      groupTitle: "High-Frequency Surgical Emergencies & Trauma Protocol Blitz",
      relatedEssayTopic: "High-Frequency Surgical Emergencies: Acute Abdomen, Peritonitis & ATLS Drill",
      allocatedTimeMinutes: 45,
      timePerTopicMinutes: 15,
      themeKeywords: ["the acute abdomen", "peritonitis", "trauma management", "surgical bleeding and hemostasis / shock"],
      highYieldPearl: "Signs of generalized peritonitis: Abdominal wall rigidity ('board-like' abdomen), severe tenderness with guarding, rebound tenderness, absent bowel sounds, and loss of liver dullness on percussion (pneumoperitoneum).",
      mcqExamTips: [
        "Subdiaphragmatic free air on erect chest X-ray confirms perforated hollow viscus (perforated peptic ulcer or typhoid enteric perforation); immediate resuscitation and emergency exploratory laparotomy.",
        "Damage Control Surgery (DCS): Abbreviated initial laparotomy for lethal triad (hypothermia, coagulopathy, acidosis) with packing and temporary abdominal closure, ICU resuscitation, followed by planned re-laparotomy.",
        "Alvarado score and appendiceal perforation risk review."
      ]
    },
    commMedGroup: {
      specialty: SubjectType.COMMUNITY_MEDICINE,
      groupTitle: "Ultra-High Frequency Public Health Blitz Cluster",
      relatedEssayTopic: "Ultra-High Frequency Past Question Drill: PHC, Biostatistics, EPI & Outbreak Review",
      allocatedTimeMinutes: 30,
      timePerTopicMinutes: 15,
      themeKeywords: ["primary health care", "biostatistics", "epidemiology", "health care financing"],
      highYieldPearl: "Community Medicine Final Exam Golden Rule: Always structure public health interventions using the levels of prevention: Primordial, Primary, Secondary, and Tertiary prevention with explicit examples.",
      mcqExamTips: [
        "Epidemiological triad: Agent, Host, Environment interconnected by vector.",
        "Vaccine cold chain temperature +2°C to +8°C.",
        "Three Delays Model in maternal mortality review."
      ]
    }
  },

  23: {
    dayNumber: 23,
    dayTheme: "Forensic Psychiatry & Mental Health Law + Surgical Oncology + Medical Negligence Blitz",
    totalAllocatedMinutes: 135,
    medicineGroup: {
      specialty: SubjectType.MEDICINE,
      groupTitle: "Forensic Psychiatry & Medical Jurisprudence Cluster",
      relatedEssayTopic: "Forensic Psychiatry, Testamentary Capacity, Criminal Responsibility & Mental Health Legislation",
      allocatedTimeMinutes: 60,
      timePerTopicMinutes: 15,
      themeKeywords: ["schizophrenia", "organic mental", "substance use", "ethics of clinical practice"],
      highYieldPearl: "Testamentary Capacity (Banks v Goodfellow criteria): The testator must understand the nature and effect of a will, understand the extent of property being disposed of, comprehend claims of potential beneficiaries, and be free of insane delusions affecting dispositions.",
      mcqExamTips: [
        "M'Naghten Rules for insanity defense: At the time of committing the act, the accused was laboring under such a defect of reason from disease of the mind as not to know the nature and quality of the act, or if he knew it, that he did not know it was wrong.",
        "Fitness to Plead: Ability to understand the charges, difference between guilty and not guilty pleas, challenge a juror, instruct legal counsel, and follow court proceedings.",
        "Nigeria National Mental Health Act 2021: Promotes and protects rights of persons with mental health conditions, regulates voluntary and involuntary admission, prohibits discrimination."
      ]
    },
    surgeryGroup: {
      specialty: SubjectType.SURGERY,
      groupTitle: "Surgical Oncology Principles & Reconstructive Surgery Cluster",
      relatedEssayTopic: "Surgical Oncology Principles, Biopsy Modalities & Reconstructive Flaps",
      allocatedTimeMinutes: 45,
      timePerTopicMinutes: 15,
      themeKeywords: ["general principle of cancer management", "grafts and flaps", "skin tumor", "surgical wound management"],
      highYieldPearl: "Reconstructive Ladder: Healing by secondary intention -> Primary closure -> Delayed primary closure -> Split-thickness skin graft -> Full-thickness skin graft -> Local tissue flap -> Regional pedicle flap -> Free microvascular tissue transfer.",
      mcqExamTips: [
        "Skin grafts: Split-thickness skin graft (epidermis and part of dermis; high take, donor site re-epithelializes) vs Full-thickness skin graft (epidermis and entire dermis; less contraction, superior cosmetic outcome, donor site requires primary suture).",
        "Biopsy principles: Tru-cut / core needle biopsy preferred for breast and soft tissue masses; incisional biopsy for large lesions >5 cm; excisional biopsy for small discrete lumps <2-3 cm.",
        "Stages of skin graft healing: Serum imbibition (first 24-48h), Inosculation (days 2-3, capillary alignment), Revascularization (days 4-7, neovascular ingrowth)."
      ]
    },
    commMedGroup: {
      specialty: SubjectType.COMMUNITY_MEDICINE,
      groupTitle: "Medical Negligence, MDCN Code & Ethical Dilemmas Cluster",
      relatedEssayTopic: "Medical Law, Ethics, Doctor-Patient Relationship & Negligence",
      allocatedTimeMinutes: 30,
      timePerTopicMinutes: 15,
      themeKeywords: ["medical ethics", "duties of doctors", "professional negligence", "code of conduct"],
      highYieldPearl: "Bolam Test modified by Bolitho: A doctor is not negligent if he acted in accordance with a practice accepted as proper by a responsible body of medical opinion, provided that opinion has a logical basis.",
      mcqExamTips: [
        "Medical and Dental Council of Nigeria (MDCN): Regulates medical education, registration, and disciplinary action for professional misconduct (Disciplinary Tribunal has status of a High Court).",
        "Exceptions to patient confidentiality: Patient consent, statutory notification of infectious diseases, court order / legal subpoena, protecting patient or third party from serious imminent harm.",
        "Doctrine of Double Effect: An action with both a good and bad effect (e.g. high-dose morphine relieving terminal pain but potentially shortening life) is ethically permissible if the intended effect is relief of pain and the bad effect is an unintended side consequence."
      ]
    }
  },

  24: {
    dayNumber: 24,
    dayTheme: "Rapid Recall: Medicine Top Pearls + Surgery Instruments/OSCE + Comm Med Spotters",
    totalAllocatedMinutes: 135,
    medicineGroup: {
      specialty: SubjectType.MEDICINE,
      groupTitle: "Internal Medicine Rapid Recall & High-Yield Cocktails",
      relatedEssayTopic: "Rapid Recall of All Top 24 Medical Conditions & Drug Cocktails",
      allocatedTimeMinutes: 60,
      timePerTopicMinutes: 15,
      themeKeywords: ["introduction to medicine", "multidisciplinary approach", "rational use of antibiotics", "sepsis", "malaria"],
      highYieldPearl: "Emergency Pharmacotherapy Rapid Recall: Anaphylaxis (IM Epinephrine 0.5 mg 1:1,000 into vastus lateralis); Severe Malaria (IV Artesunate 2.4 mg/kg at 0, 12, 24h); Status Epilepticus (IV Lorazepam 4 mg -> IV Phenytoin 20 mg/kg); DKA (Normal Saline 1L 1st hr, Regular insulin 0.1 U/kg/h once K+ >3.3).",
      mcqExamTips: [
        "Infectious endocarditis high-risk dental prophylaxis: Amoxicillin 2g PO 30-60 min prior to procedure.",
        "Hyperkalemia emergency membrane stabilization: 10% IV Calcium Gluconate 10 mL over 5-10 minutes.",
        "Acute pulmonary edema LMNOP protocol: Lasix (Furosemide), Morphine, Nitrates, Oxygen, Positioning (sitting upright)."
      ]
    },
    surgeryGroup: {
      specialty: SubjectType.SURGERY,
      groupTitle: "Surgical Instruments, Specimen Spotters & OSCE Stations",
      relatedEssayTopic: "Surgical Instruments, X-Rays, Specimen Identification & OSCE Stations",
      allocatedTimeMinutes: 45,
      timePerTopicMinutes: 15,
      themeKeywords: ["sutures, drains and catheter", "suture and drains/catheter/antisepsis", "operating room ethics", "imaging in surgery i"],
      highYieldPearl: "Suture materials classification: Absorbable natural (Catgut); Absorbable synthetic (Vicryl / Polyglactin 910, Monocryl, PDS); Non-absorbable natural (Silk); Non-absorbable synthetic (Prolene / Polypropylene, Nylon).",
      mcqExamTips: [
        "Surgical drains: Passive (corrugated rubber, Penrose) relies on gravity/capillary action; Active closed suction (Redivac, Jackson-Pratt) maintains negative pressure and reduces infection risk.",
        "Instrument identification: Kocher clamp (toothed, traumatic, holds tough fascial edges); Babcock clamp (non-traumatic, holds delicate tubular viscera e.g. appendix/fallopian tube); Allis clamp; Sponge-holding forceps (Rampley).",
        "X-Ray Spotters: Free air under diaphragm (perforated viscus); Coffee-bean sign (sigmoid volvulus); Multiple air-fluid levels with step-ladder pattern (small bowel obstruction)."
      ]
    },
    commMedGroup: {
      specialty: SubjectType.COMMUNITY_MEDICINE,
      groupTitle: "Public Health Spotters, Data Interpretation & Spotters Blitz",
      relatedEssayTopic: "Public Health Spotters, Data Interpretation & High-Yield Calculations",
      allocatedTimeMinutes: 30,
      timePerTopicMinutes: 15,
      themeKeywords: ["public health museum", "research methods: presentation of data", "research methods: scales", "vital statistics and health indicators"],
      highYieldPearl: "Public Health Museum & Spotter Identification: VVM stages, Vaccine carrier with conditioned ice packs, Mid-Upper Arm Circumference (MUAC) tape (Red <11.5 cm = Severe Acute Malnutrition, Yellow 11.5-12.5 cm = Moderate, Green >12.5 cm = Normal).",
      mcqExamTips: [
        "Water testing spotters: Chloroscope / Lovibond comparator (measures free residual chlorine); Turbidity tube.",
        "Entomology spotters: Anopheles mosquito (rests at 45° angle to surface, spotted wings); Aedes aegypti (black and white lyre-shaped markings on thorax, daytime biter, transmits Dengue, Yellow fever, Zika); Culex (rests parallel).",
        "Data charts: Histogram (continuous data without gaps between bars); Bar chart (categorical data with distinct gaps)."
      ]
    }
  },

  25: {
    dayNumber: 25,
    dayTheme: "Exam Eve (Oct 25): Calm Consolidation, Exam Logistics, Mindset & Peak Performance",
    totalAllocatedMinutes: 135,
    medicineGroup: {
      specialty: SubjectType.MEDICINE,
      groupTitle: "Internal Medicine & Psychiatry: Calm Final Review & Checklists",
      relatedEssayTopic: "Calm Final Review of High-Yield Personal Notes & Starred Topics",
      allocatedTimeMinutes: 60,
      timePerTopicMinutes: 15,
      themeKeywords: ["reflective practice", "ethics of clinical practice i", "multidisciplinary approach"],
      highYieldPearl: "Final Exam Day Mindset: Trust your 25 days of structured preparation. Read each essay prompt twice before writing. Spend the first 2 minutes structuring bulleted headings (Definition, Etiology, Clinical Presentation, Investigations, Management).",
      mcqExamTips: [
        "Time boxing: In 20-mark essay questions, allocate strictly 25 minutes per question; never overrun into the next question.",
        "Clinical viva composure: Listen carefully to the examiner's question; state your most likely clinical diagnosis first, backed by positive findings and pertinent negatives.",
        "Single Best Answer pacing: 60 seconds per question; eliminate obvious distractors; never leave an unanswered question in negative-free papers."
      ]
    },
    surgeryGroup: {
      specialty: SubjectType.SURGERY,
      groupTitle: "Surgical Operative Steps & Emergency Algorithms Mental Run-Through",
      relatedEssayTopic: "Operative Steps & Trauma Algorithm Mental Run-Through",
      allocatedTimeMinutes: 45,
      timePerTopicMinutes: 15,
      themeKeywords: ["peri-operative care", "operating room ethics", "medical problems in surgery"],
      highYieldPearl: "Operative Steps Structure in Surgery Essays: 1. Indications & Pre-operative preparation; 2. Anesthesia & Patient Positioning; 3. Antiseptic draping & Incision; 4. Operative findings & Main surgical procedure; 5. Hemostasis & Wound closure; 6. Post-operative orders.",
      mcqExamTips: [
        "Appendectomy operative steps mental checklist: McBurney / Gridiron incision, identification of cecum and taenia coli, ligation of mesoappendix, ligation and division of appendix base.",
        "Laparotomy for peritonitis: Midline incision, suction of peritoneal fluid for microscopy/culture, identification and source control, copious warm saline peritoneal lavage, closure in layers.",
        "Get adequate sleep on exam eve: Cognitive performance and recall are significantly impaired by overnight cramming."
      ]
    },
    commMedGroup: {
      specialty: SubjectType.COMMUNITY_MEDICINE,
      groupTitle: "Community Medicine & Final Prep: Verify Logistics & Rest",
      relatedEssayTopic: "Relax, Verify Exam Logistics & Rest",
      allocatedTimeMinutes: 30,
      timePerTopicMinutes: 15,
      themeKeywords: ["public health admin-principles", "health education"],
      highYieldPearl: "Exam logistics checklist: Confirm exam hall, table number, pens, pencils, non-programmable calculator, eraser, stethoscope, tendon hammer, measuring tape, pen torch. Arrive at the exam center 45 minutes before start time.",
      mcqExamTips: [
        "Final MB exam victory comes from consistent, disciplined execution of core fundamentals.",
        "Stay hydrated and maintain a calm, methodical, professional physician persona throughout both written papers and clinical exams.",
        "You are thoroughly prepared. Success is yours on Monday, October 26!"
      ]
    }
  }
};

/**
 * Given a day number and the full curated syllabus topics array,
 * dynamically finds ALL related syllabus topics that belong to each specialty group!
 */
export const getDayGroupedSyllabusTopics = (dayNumber: number, allTopics: Topic[]) => {
  // Normalize day number (1 to 25)
  const safeDay = Math.max(1, Math.min(25, dayNumber));
  const grouping = DAY_MCQ_GROUPINGS[safeDay] || DAY_MCQ_GROUPINGS[1];

  const matchTopicsForGroup = (group: SpecialtyMcqGroup) => {
    const matched: Topic[] = [];
    const keywords = group.themeKeywords.map(k => k.toLowerCase().trim());

    allTopics.forEach(topic => {
      // Must match specialty
      if (topic.subject !== group.specialty) return;

      const normName = topic.topicName.toLowerCase();
      const normSub = topic.subspecialty.toLowerCase();

      // Check if any keyword matches
      const isMatch = keywords.some(kw => normName.includes(kw) || normSub.includes(kw));
      if (isMatch && !matched.some(m => m.id === topic.id)) {
        matched.push(topic);
      }
    });

    return matched;
  };

  const medicineTopics = matchTopicsForGroup(grouping.medicineGroup);
  const surgeryTopics = matchTopicsForGroup(grouping.surgeryGroup);
  const commMedTopics = matchTopicsForGroup(grouping.commMedGroup);

  return {
    grouping,
    medicineTopics,
    surgeryTopics,
    commMedTopics,
    totalTopicsCount: medicineTopics.length + surgeryTopics.length + commMedTopics.length
  };
};
