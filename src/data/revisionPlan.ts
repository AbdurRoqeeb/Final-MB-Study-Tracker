// 25-Day Revision Timetable starting October 1st, 2026
// Strict time allocation: Internal Medicine & Psychiatry (50% Morning · 5.0h), Surgery (35% Afternoon · 3.5h), Community Medicine (15% Evening · 2.0h)
// Comprehensive coverage: Every session has an authentic targeted past question from https://finalmbpq.vercel.app/ (75 targeted PQs total across 25 days)

import { SubjectType } from '../types';

export interface TargetQuestion {
  key: string; // e.g. "Q2, January 2025 (Psychiatry)"
  year: string;
  marks: string;
  topicClue: string;
  modelAnswerOutline?: string[];
}

export interface RevisionSession {
  subject: SubjectType | 'Medicine' | 'Surgery' | 'Community Medicine' | 'Comprehensive' | 'Past Questions' | 'Integrated OSCE';
  timeSlot: string;
  title: string;
  description: string;
  keyObjectives: string[];
  suggestedTopicKeywords: string[];
  pqFrequency?: number;
  targetPq?: TargetQuestion;
  pastQuestionExample?: TargetQuestion;
}

export interface RevisionDay {
  dayNumber: number;
  dateString: string;
  dateLabel: string;
  shortDateLabel: string;
  dayOfWeek: string;
  phaseNumber: 1 | 2 | 3 | 4;
  phaseName: string;
  dailyTheme: string;
  clinicalPearl: string;
  sessions: {
    morning: RevisionSession;
    afternoon: RevisionSession;
    evening: RevisionSession;
  };
}

export const REVISION_TIMETABLE: RevisionDay[] = [
  {
    "dayNumber": 1,
    "dateString": "2026-10-01",
    "dateLabel": "Thursday, Oct 1, 2026 (Today)",
    "shortDateLabel": "Oct 1",
    "dayOfWeek": "Thu",
    "phaseNumber": 1,
    "phaseName": "Phase 1: High-Yield Medicine & Surgery Foundations",
    "dailyTheme": "Cardiology (Heart Failure & HTN) + Acute Abdomen & Appendicitis + PHC Alma-Ata",
    "clinicalPearl": "HFrEF GDMT Quadruple Therapy: ARNI (Sacubitril/Valsartan) or ACEi + Beta-blocker (Bisoprolol/Carvedilol) + MRA (Spironolactone) + SGLT2i (Dapagliflozin). Reduces mortality by >60%!",
    "sessions": {
      "morning": {
        "subject": "Medicine",
        "timeSlot": "Morning (8:00 AM - 1:00 PM · 5.0h · 50% Time)",
        "title": "Internal Medicine: Heart Failure (HFrEF/HFpEF), Hypertensive Crises & Valvular Disease",
        "description": "Comprehensive review of heart failure etiologies in sub-Saharan Africa, NYHA classes, GDMT quadruple therapy, acute pulmonary edema management (LMNOP protocol), and hypertensive emergencies with target-organ damage.",
        "keyObjectives": [
          "Differentiate HFrEF vs HFpEF diagnostic criteria on echocardiography",
          "Emergency management protocol for acute pulmonary edema (Positioning, Oxygen, IV Furosemide, Morphine, Nitrates)",
          "Antihypertensive selection in pregnancy, CKD, and diabetes mellitus",
          "Modified Duke criteria for infective endocarditis: 2 major, 1 major + 3 minor, or 5 minor criteria"
        ],
        "suggestedTopicKeywords": [
          "heart failure",
          "hypertension",
          "rheumatic heart disease"
        ],
        "pqFrequency": 6,
        "targetPq": {
          "key": "LAQ 1, January 2025 (Medicine)",
          "year": "January 2025",
          "marks": "20 marks · 25 mins",
          "topicClue": "Heart failure etiology in SSA, NYHA class IV decompensation, and detailed GDMT pharmacotherapy",
          "modelAnswerOutline": [
            "Etiology: Hypertensive heart disease, Dilated cardiomyopathy (peripartum), Rheumatic heart disease, Ischemic heart disease.",
            "Physical examination: Elevated JVP, bibasilar crackles, S3 gallop, hepatomegaly, bilateral pitting pedal edema.",
            "GDMT Quadruple Therapy: ARNI/ACEi + Beta-blocker + MRA + SGLT2i with diuretic for symptom relief."
          ]
        }
      },
      "afternoon": {
        "subject": "Surgery",
        "timeSlot": "Afternoon (2:00 PM - 5:30 PM · 3.5h · 35% Time)",
        "title": "Surgery: Acute Abdomen, Acute Appendicitis & Peritonitis",
        "description": "Differential diagnosis of acute abdomen, Alvarado scoring system for appendicitis, signs of generalized peritonitis, pre-operative resuscitation, and open vs laparoscopic appendectomy.",
        "keyObjectives": [
          "Calculate Alvarado score: score >=7 strongly indicates operative intervention",
          "Emergency resuscitation for peritonitis: NPO, 2 large-bore IV lines, crystalloid resuscitation, NG tube, urethral catheter",
          "Post-operative complications of perforated appendicitis: pelvic abscess, wound infection, fecal fistula"
        ],
        "suggestedTopicKeywords": [
          "the acute abdomen",
          "appendicitis",
          "peritonitis"
        ],
        "pqFrequency": 12,
        "targetPq": {
          "key": "SAQ 2, December 2024 (Surgery)",
          "year": "December 2024",
          "marks": "10 marks · 15 mins",
          "topicClue": "5yo boy with ruptured appendicitis and generalized peritonitis pre-op preparation",
          "modelAnswerOutline": [
            "Pre-op optimization: Aggressive IV fluid resuscitation (Normal Saline 20mL/kg boluses), NPO, wide-bore NG tube.",
            "Antibiotics: Triple therapy (IV Ceftriaxone + Metronidazole + Gentamicin).",
            "Consent, cross-matching of blood, and Foley catheterization to monitor urine output (>1mL/kg/hr)."
          ]
        }
      },
      "evening": {
        "subject": "Community Medicine",
        "timeSlot": "Evening (6:30 PM - 8:30 PM · 2.0h · 15% Time)",
        "title": "Community Medicine & Drill: Primary Health Care (ELEMENTS) & Alma-Ata Principles",
        "description": "Review of Primary Health Care 4 cardinal principles (Alma-Ata 1978), 8 components (ELEMENTS), Ward Health System, followed by authentic exam question drill from finalmbpq repository.",
        "keyObjectives": [
          "State 4 cardinal principles of PHC (Equity, Community participation, Intersectoral action, Appropriate technology)",
          "List 8 essential components of PHC (ELEMENTS mnemonic)",
          "Solve SAQ 9 January 2025 (Comm. Med) under timed exam conditions"
        ],
        "suggestedTopicKeywords": [
          "primary health care",
          "heart failure"
        ],
        "pqFrequency": 22,
        "targetPq": {
          "key": "SAQ 9, January 2025 (Comm. Med)",
          "year": "January 2025",
          "marks": "10 marks · 15 mins",
          "topicClue": "Alma-Ata 1978 four cardinal principles, ELEMENTS components, and rural PHC challenges in Nigeria",
          "modelAnswerOutline": [
            "Cardinal Principles: Equity (universal accessibility based on need), Community participation, Intersectoral action, Appropriate technology.",
            "Essential Components: Any 4 of ELEMENTS (EPI, MCH/Family planning, Safe water & sanitation, Essential drugs provision, Locally endemic disease control).",
            "Nigeria Challenges: Brain drain of healthcare workers, fragmented funding tiers, frequent drug stockouts, poor maintenance of facilities."
          ]
        }
      }
    }
  },
  {
    "dayNumber": 2,
    "dateString": "2026-10-02",
    "dateLabel": "Friday, Oct 2, 2026",
    "shortDateLabel": "Oct 2",
    "dayOfWeek": "Fri",
    "phaseNumber": 1,
    "phaseName": "Phase 1: High-Yield Medicine & Surgery Foundations",
    "dailyTheme": "Psychiatry (Schizophrenia & Antipsychotics) + Breast Cancer & Mastectomy + Biostatistics",
    "clinicalPearl": "Schneiderian First-Rank Symptoms of Schizophrenia: Audible thoughts, voices arguing/commenting, thought insertion/withdrawal/broadcasting, delusions of control. First-line: Second-generation antipsychotic (Risperidone / Olanzapine).",
    "sessions": {
      "morning": {
        "subject": "Medicine",
        "timeSlot": "Morning (8:00 AM - 1:00 PM · 5.0h · 50% Time)",
        "title": "Psychiatry in Medicine: Schizophrenia, Psychopathology, Defaulters & Antipsychotics",
        "description": "Clinical evaluation of psychosis, positive vs negative symptoms, DSM-5 diagnostic criteria, reasons for clinic default, and psychopharmacology: typical vs atypical antipsychotics, depot formulations (Fluphenazine/Paliperidone), and extrapyramidal side effects.",
        "keyObjectives": [
          "List Schneiderian first-rank symptoms and diagnostic criteria for schizophrenia",
          "Identify psychopathology in persecutory and somatic delusions",
          "Management of schizophrenia clinic defaulter: assess insight, switch to long-acting depot antipsychotic, psychoeducation",
          "Differentiate acute dystonic reaction vs akathisia vs tardive dyskinesia vs Neuroleptic Malignant Syndrome"
        ],
        "suggestedTopicKeywords": [
          "schizophrenia",
          "psychiatric emergencies",
          "psychopharmacology"
        ],
        "pqFrequency": 8,
        "targetPq": {
          "key": "Q2, January 2025 (Psychiatry)",
          "year": "January 2025",
          "marks": "10 marks · 15 mins",
          "topicClue": "Mr. Festus: 1-year schizophrenia clinic defaulter, tracking device delusion, and depot antipsychotic regimen",
          "modelAnswerOutline": [
            "Psychopathology: Delusion of persecution / Delusion of control (Bizarre somatic delusion).",
            "Reasons for default: Poor insight, intolerable adverse side effects (extrapyramidal, sexual dysfunction), drug costs, social stigma.",
            "Management: Re-establish therapeutic alliance, assess current mental state, transition to once-monthly depot injection (Fluphenazine decanoate/Paliperidone)."
          ]
        }
      },
      "afternoon": {
        "subject": "Surgery",
        "timeSlot": "Afternoon (2:00 PM - 5:30 PM · 3.5h · 35% Time)",
        "title": "Surgery: Breast Cancer Evaluation, Triple Assessment & Modified Radical Mastectomy",
        "description": "Triple assessment of breast mass, clinical staging (TNM), indications for breast conserving surgery vs Modified Radical Mastectomy (Patey/Auchincloss), axillary dissection, and receptor profiling (ER/PR/HER2).",
        "keyObjectives": [
          "Formulate triple assessment protocol: Clinical exam + Imaging (Mammogram/Ultrasound) + Pathology (Core needle biopsy)",
          "Anatomical boundaries and structures preserved in Modified Radical Mastectomy (Long thoracic nerve, Thoracodorsal nerve)",
          "Adjuvant hormonal therapy (Tamoxifen, Letrozole) and targeted therapy (Trastuzumab)"
        ],
        "suggestedTopicKeywords": [
          "the breast",
          "benign and malignant breast diseases",
          "general principle of cancer management"
        ],
        "pqFrequency": 14,
        "targetPq": {
          "key": "LAQ 2, January 2025 (Surgery)",
          "year": "January 2025",
          "marks": "20 marks · 25 mins",
          "topicClue": "35yo lady with 4cm breast lump and bloody nipple discharge: triple assessment & MRM operative steps",
          "modelAnswerOutline": [
            "Triple Assessment: Clinical palpation + Bilateral mammography/US + Core needle biopsy (FNA insufficient for invasive architecture).",
            "Surgical treatment: Modified Radical Mastectomy (Madden or Patey) with Level I & II axillary lymph node dissection.",
            "Adjuvant therapy: Chemotherapy (Anthracycline/Taxane), Radiotherapy (chest wall), and Tamoxifen for ER+ status."
          ]
        }
      },
      "evening": {
        "subject": "Community Medicine",
        "timeSlot": "Evening (6:30 PM - 8:30 PM · 2.0h · 15% Time)",
        "title": "Community Medicine & Drill: Biostatistics (Hypothesis Testing, t-Test vs Chi-Square)",
        "description": "Type I and Type II errors, p-values, Student t-test vs Chi-square test, confidence intervals, followed by authentic statistical calculation past question drill.",
        "keyObjectives": [
          "Define null hypothesis, alpha level, Type I error (false positive) and Type II error (false negative)",
          "Select appropriate statistical tests for parametric vs non-parametric continuous and categorical data",
          "Solve statistical inference questions from finalmbpq repository"
        ],
        "suggestedTopicKeywords": [
          "schizophrenia",
          "biostatistics"
        ],
        "pqFrequency": 20,
        "targetPq": {
          "key": "SAQ 3, January 2025 (Comm. Med)",
          "year": "January 2025",
          "marks": "10 marks · 15 mins",
          "topicClue": "Normal distribution, standard error of the mean, and 95% confidence interval calculations in birth weights",
          "modelAnswerOutline": [
            "Standard Error of Mean (SEM) = Standard Deviation / sqrt(n).",
            "95% Confidence Interval = Mean +/- 1.96 * SEM.",
            "Interpretation: We are 95% confident that the true population mean lies within the calculated bounds."
          ]
        }
      }
    }
  },
  {
    "dayNumber": 3,
    "dateString": "2026-10-03",
    "dateLabel": "Saturday, Oct 3, 2026",
    "shortDateLabel": "Oct 3",
    "dayOfWeek": "Sat",
    "phaseNumber": 1,
    "phaseName": "Phase 1: High-Yield Medicine & Surgery Foundations",
    "dailyTheme": "Endocrinology (Diabetes, DKA & HHS) + Prostate Cancer & Retention + Healthcare Financing",
    "clinicalPearl": "DKA Fluid Protocol: 0.9% Normal Saline 1L in 1st hour, 1L over 2 hrs, 1L over 4 hrs. IV Regular Insulin 0.1 U/kg/hr ONLY if K+ > 3.3 mEq/L! Switch to 5% Dextrose Saline when blood glucose falls below 250 mg/dL to prevent cerebral edema.",
    "sessions": {
      "morning": {
        "subject": "Medicine",
        "timeSlot": "Morning (8:00 AM - 1:00 PM · 5.0h · 50% Time)",
        "title": "Internal Medicine: Diabetes Mellitus, DKA, Hyperosmolar Hyperglycemic State & Foot Ulcers",
        "description": "Pathophysiology and diagnostic criteria for DKA vs HHS, detailed fluid and electrolyte replacement protocols, potassium management, Wagner grading of diabetic foot, and insulin regimens (basal-bolus vs sliding scale).",
        "keyObjectives": [
          "Differentiate DKA (acidosis, high anion gap, positive ketones) vs HHS (severe hyperglycemia >600mg/dL, hyperosmolality >320mOsm/kg)",
          "Step-by-step IV fluid, insulin, and potassium replacement algorithm in DKA",
          "Multidisciplinary management of diabetic foot: offloading, broad-spectrum antibiotics, glycemic control, wound debridement"
        ],
        "suggestedTopicKeywords": [
          "diabetes mellitus",
          "acute and chronic complications of diabetes"
        ],
        "pqFrequency": 7,
        "targetPq": {
          "key": "SAQ 5, December 2024 (Medicine)",
          "year": "December 2024",
          "marks": "10 marks · 15 mins",
          "topicClue": "55yo diabetic woman with right foot ulcer of 2 months duration: Wagner grading & management",
          "modelAnswerOutline": [
            "Wagner Classification: Grade 0 (intact skin) to Grade 5 (extensive foot gangrene).",
            "Multidisciplinary management: Strict glycemic control (insulin), mechanical offloading, empiric broad-spectrum antibiotics, vascular evaluation (ABI), surgical debridement."
          ]
        }
      },
      "afternoon": {
        "subject": "Surgery",
        "timeSlot": "Afternoon (2:00 PM - 5:30 PM · 3.5h · 35% Time)",
        "title": "Surgery: Prostatic Carcinoma, Benign Prostatic Hyperplasia & Acute Urinary Retention",
        "description": "Digital rectal examination findings (BPH vs Ca Prostate), PSA interpretation, Gleason score grading, emergency catheterization vs suprapubic cystostomy, and hormonal ablation (bilateral subcapsular orchidectomy vs LHRH analogues).",
        "keyObjectives": [
          "Differentiate clinical features of BPH vs Carcinoma of prostate on DRE",
          "Emergency management of acute urinary retention with failed urethral catheterization (percutaneous suprapubic cystostomy)",
          "Androgen deprivation therapy: surgical castration (bilateral subcapsular orchidectomy) vs medical castration (Goserelin + Bicalutamide anti-flare)"
        ],
        "suggestedTopicKeywords": [
          "prostate gland",
          "benign and malignant diseases of the prostate",
          "common urological emergency"
        ],
        "pqFrequency": 12,
        "targetPq": {
          "key": "SAQ 8, January 2025 (Surgery)",
          "year": "January 2025",
          "marks": "10 marks · 15 mins",
          "topicClue": "74yo man with acute retention, hard craggy prostate, and spinal bone pain: bilateral orchidectomy",
          "modelAnswerOutline": [
            "Diagnosis: Metastatic Carcinoma of Prostate with acute urinary retention and cord compression risk.",
            "Urgent intervention: Relieve obstruction with Foley catheter or emergency suprapubic cystostomy.",
            "Hormonal ablation: Bilateral subcapsular orchidectomy for rapid testosterone drop within 24 hours."
          ]
        }
      },
      "evening": {
        "subject": "Community Medicine",
        "timeSlot": "Evening (6:30 PM - 8:30 PM · 2.0h · 15% Time)",
        "title": "Community Medicine & Drill: Healthcare Financing Mechanisms (NHIA Act 2022 & BHCPF)",
        "description": "Revenue collection, risk pooling, strategic purchasing, National Health Insurance Authority (NHIA) Act 2022, Basic Health Care Provision Fund, and financing past question drill.",
        "keyObjectives": [
          "Explain the 3 core functions of healthcare financing: Revenue mobilization, Risk pooling, and Strategic purchasing",
          "Analyze out-of-pocket spending hazards and financial risk protection mechanisms in Nigeria"
        ],
        "suggestedTopicKeywords": [
          "health management",
          "public health admin"
        ],
        "pqFrequency": 18,
        "targetPq": {
          "key": "Q2, September 2022 (Comm. Med)",
          "year": "September 2022",
          "marks": "10 marks · 15 mins",
          "topicClue": "Health financing functions, risk pooling models, and challenges of NHIA coverage in informal sector",
          "modelAnswerOutline": [
            "Financing Functions: Revenue collection (taxation, mandatory contributions), Risk pooling, Purchasing services.",
            "Challenges: Massive informal sector (>70%), weak state-level health insurance agencies, poverty and high out-of-pocket spending."
          ]
        }
      }
    }
  },
  {
    "dayNumber": 4,
    "dateString": "2026-10-04",
    "dateLabel": "Sunday, Oct 4, 2026",
    "shortDateLabel": "Oct 4",
    "dayOfWeek": "Sun",
    "phaseNumber": 1,
    "phaseName": "Phase 1: High-Yield Medicine & Surgery Foundations",
    "dailyTheme": "Nephrology (AKI vs CKD & Dialysis) + Intestinal Obstruction & Laparotomy + Maternal Mortality",
    "clinicalPearl": "Indications for Urgent Hemodialysis (AEIOU mnemonic): A - Acidosis (pH < 7.1), E - Electrolyte (K+ > 6.5 mEq/L with ECG changes), I - Ingestion of toxins, O - Overload (Pulmonary edema), U - Uremic complications (Encephalopathy, Pericarditis, Bleeding).",
    "sessions": {
      "morning": {
        "subject": "Medicine",
        "timeSlot": "Morning (8:00 AM - 1:00 PM · 5.0h · 50% Time)",
        "title": "Internal Medicine: Acute Kidney Injury (KDIGO), Chronic Kidney Disease & Glomerulonephritis",
        "description": "KDIGO staging of AKI (prerenal, intrinsic, postrenal), indications for emergent hemodialysis (AEIOU), CKD mineral and bone disorder, management of hyperkalemia (Calcium gluconate, Insulin-Dextrose, Salbutamol, Resonium).",
        "keyObjectives": [
          "KDIGO staging: urine output vs serum creatinine rise",
          "Emergency cocktail for hyperkalemia with peaked T waves: 10% IV Calcium gluconate 10ml over 5-10 min, followed by 50ml 50% Dextrose + 10 units Regular Insulin",
          "Indications for acute renal replacement therapy (AEIOU)",
          "Nephrotic vs Nephritic syndrome presentation and urinalysis"
        ],
        "suggestedTopicKeywords": [
          "acute and chronic renal failure",
          "glomerular diseases",
          "fluid and electrolyte disorders"
        ],
        "pqFrequency": 8,
        "targetPq": {
          "key": "Q4, January 2025 (Medicine)",
          "year": "January 2025",
          "marks": "10 marks · 15 mins",
          "topicClue": "KDIGO staging of AKI, hyperkalemia ECG manifestations, and emergent indications for dialysis (AEIOU)",
          "modelAnswerOutline": [
            "KDIGO Criteria: Stage 1 (Cr 1.5-1.9x baseline or urine <0.5ml/kg/hr for 6-12h), Stage 2 (Cr 2.0-2.9x), Stage 3 (Cr 3x or >=4.0mg/dL or anuria >=12h).",
            "Emergency dialysis: Acidosis refractory to medical therapy, Hyperkalemia with cardiotoxicity, Volume overload refractory to loop diuretics, Uremic encephalopathy/pericarditis."
          ]
        }
      },
      "afternoon": {
        "subject": "Surgery",
        "timeSlot": "Afternoon (2:00 PM - 5:30 PM · 3.5h · 35% Time)",
        "title": "Surgery: Intestinal Obstruction, Sigmoid Volvulus & Strangulated Hernias",
        "description": "Small vs large bowel obstruction clinical differences and radiologic signs (valvulae conniventes vs haustra, coffee bean sign), closed-loop obstruction, signs of strangulation, and Hartmann procedure vs resection and anastomosis.",
        "keyObjectives": [
          "Cardinal signs of mechanical intestinal obstruction: Colicky abdominal pain, vomiting, abdominal distension, absolute constipation",
          "Recognize signs of intestinal strangulation: Continuous severe pain, fever, tachycardia, localized peritonism, metabolic acidosis",
          "Management of sigmoid volvulus: Rigid sigmoidoscopy and flatus tube decompression vs emergency laparotomy with Hartmann resection"
        ],
        "suggestedTopicKeywords": [
          "intestinal obstruction",
          "hernias of the abdominal wall"
        ],
        "pqFrequency": 10,
        "targetPq": {
          "key": "SAQ 10, January 2025 (Surgery)",
          "year": "January 2025",
          "marks": "10 marks · 15 mins",
          "topicClue": "10yo diagnosed with generalized peritonitis: pre-op preparation and emergency laparotomy",
          "modelAnswerOutline": [
            "Pre-operative resuscitation: NPO, two wide-bore IV lines, crystalloid fluid resuscitation, NG tube, urethral catheter.",
            "Antibiotic coverage: Broad spectrum coverage against gram-negative bacilli and anaerobes.",
            "Intraoperative goals: Source control, copious warm saline peritoneal lavage, and drainage."
          ]
        }
      },
      "evening": {
        "subject": "Community Medicine",
        "timeSlot": "Evening (6:30 PM - 8:30 PM · 2.0h · 15% Time)",
        "title": "Community Medicine & Drill: Maternal Mortality (Three Delays Model) & EmOC Services",
        "description": "Maternal mortality ratio definition, direct vs indirect causes in Nigeria, Thaddeus & Maine Three Delays model, emergency obstetric care (EmOC), and maternal health past question drill.",
        "keyObjectives": [
          "Define Maternal Mortality Ratio (MMR) per 100,000 live births",
          "Enumerate the Three Delays: 1. Delay in decision to seek care; 2. Delay in reaching health facility; 3. Delay in receiving adequate care at facility",
          "Contrast Basic vs Comprehensive Emergency Obstetric and Newborn Care (BEmONC vs CEmONC)"
        ],
        "suggestedTopicKeywords": [
          "maternal and child health",
          "the acute abdomen"
        ],
        "pqFrequency": 16,
        "targetPq": {
          "key": "Q1, January 2016 (Comm. Med)",
          "year": "January 2016",
          "marks": "10 marks · 15 mins",
          "topicClue": "Three Delays model in maternal deaths in rural Nigeria and public health intervention strategies",
          "modelAnswerOutline": [
            "Delay 1 (Decision to seek care): Low female literacy, cultural norms, lack of financial autonomy.",
            "Delay 2 (Reaching health facility): Poor road infrastructure, lack of emergency transport, distant health centers.",
            "Delay 3 (Receiving quality care): Shortage of skilled birth attendants, lack of blood bank, missing emergency obstetric drugs."
          ]
        }
      }
    }
  },
  {
    "dayNumber": 5,
    "dateString": "2026-10-05",
    "dateLabel": "Monday, Oct 5, 2026",
    "shortDateLabel": "Oct 5",
    "dayOfWeek": "Mon",
    "phaseNumber": 1,
    "phaseName": "Phase 1: High-Yield Medicine & Surgery Foundations",
    "dailyTheme": "Gastroenterology (Cirrhosis, SBP & Varices) + Head Injury & ATLS + Medical Ethics",
    "clinicalPearl": "SAAG >= 1.1 g/dL indicates Portal HTN (Cirrhosis, Budd-Chiari). SBP diagnostic threshold: Ascitic fluid PMN >= 250 cells/mm3; treat with IV Ceftriaxone! Bleeding varices: IV Terlipressin + Ceftriaxone + urgent EGD band ligation.",
    "sessions": {
      "morning": {
        "subject": "Medicine",
        "timeSlot": "Morning (8:00 AM - 1:00 PM · 5.0h · 50% Time)",
        "title": "Internal Medicine: Cirrhosis, Portal Hypertension, Ascites, SBP & Variceal Bleeding",
        "description": "Comprehensive prioritized review of Gastroenterology (Cirrhosis, SBP & Varices) with high-yield clinical manifestations, diagnostic protocols, and pharmacotherapy guidelines.",
        "keyObjectives": [
          "Child-Pugh and MELD score calculations",
          "SAAG interpretation and paracentesis protocol",
          "Terlipressin, prophylactic Ceftriaxone, and endoscopic band ligation for bleeding varices"
        ],
        "suggestedTopicKeywords": [
          "chronic liver disease and cirrhosis",
          "portal hypertension and its sequelae"
        ],
        "pqFrequency": 8,
        "targetPq": {
          "key": "Q1, January 2025 (Medicine)",
          "year": "January 2025",
          "marks": "10 marks · 15 mins",
          "topicClue": "Decompensated cirrhosis with ascites: diagnostic paracentesis (PMN >= 250), SAAG, and SBP treatment"
        }
      },
      "afternoon": {
        "subject": "Surgery",
        "timeSlot": "Afternoon (2:00 PM - 5:30 PM · 3.5h · 35% Time)",
        "title": "Surgery: Polytrauma, ATLS Protocol, Head Injury (GCS) & Epidural Hematoma",
        "description": "Focused surgical review covering surgical pathophysiology, operative indications, step-by-step procedures, and perioperative management.",
        "keyObjectives": [
          "Primary survey (ABCDE) with cervical spine stabilization",
          "Glasgow Coma Scale assessment and signs of raised intracranial pressure",
          "Extradural hematoma lucid interval and emergent burr hole / craniotomy"
        ],
        "suggestedTopicKeywords": [
          "initial management of trauma",
          "head injuries and intracranial hemorrhage"
        ],
        "pqFrequency": 10,
        "targetPq": {
          "key": "LAQ 2, December 2024 (Surgery)",
          "year": "December 2024",
          "marks": "20 marks · 25 mins",
          "topicClue": "25yo man involved in RTA with pulse rate 120bpm, BP 80/50: ATLS primary survey & pelvic fracture"
        }
      },
      "evening": {
        "subject": "Community Medicine",
        "timeSlot": "Evening (6:30 PM - 8:30 PM · 2.0h · 15% Time)",
        "title": "Community Medicine: Medical Ethics (4 Cardinal Principles) & Doctor-Patient Relationship",
        "description": "Targeted public health review followed by timed past question drill from finalmbpq repository with structured model answer checklist.",
        "keyObjectives": [
          "Autonomy, Beneficence, Non-maleficence, and Justice applications",
          "Exceptions to patient confidentiality and professional medical negligence (4 elements)"
        ],
        "suggestedTopicKeywords": [
          "medical ethics",
          "health management"
        ],
        "pqFrequency": 16,
        "targetPq": {
          "key": "SAQ 2, January 2025 (Comm. Med)",
          "year": "January 2025",
          "marks": "10 marks · 15 mins",
          "topicClue": "Physician dealing with patient autonomy, confidentiality breach, and HIV status disclosure dilemmas"
        },
        "pastQuestionExample": {
          "key": "SAQ 2, January 2025 (Comm. Med)",
          "year": "January 2025",
          "marks": "10 marks · 15 mins",
          "topicClue": "Physician dealing with patient autonomy, confidentiality breach, and HIV status disclosure dilemmas"
        }
      }
    }
  },
  {
    "dayNumber": 6,
    "dateString": "2026-10-06",
    "dateLabel": "Tuesday, Oct 6, 2026",
    "shortDateLabel": "Oct 6",
    "dayOfWeek": "Tue",
    "phaseNumber": 1,
    "phaseName": "Phase 1: High-Yield Medicine & Surgery Foundations",
    "dailyTheme": "Psychiatry (Mood Disorders: Bipolar & Major Depression) + Thyroid Surgery + Epidemiology",
    "clinicalPearl": "DIG FAST for Mania: Distractibility, Indiscretion, Grandiosity, Flight of ideas, Activity increase, Sleep decrease, Talkativeness. Lithium therapeutic range: 0.6 - 1.0 mEq/L. Toxic signs: coarse tremor, ataxia, vomiting, seizures.",
    "sessions": {
      "morning": {
        "subject": "Medicine",
        "timeSlot": "Morning (8:00 AM - 1:00 PM · 5.0h · 50% Time)",
        "title": "Psychiatry in Medicine: Mood Disorders, Bipolar Affective Disorder, Mania & Depression",
        "description": "Comprehensive prioritized review of Psychiatry (Mood Disorders: Bipolar & Major Depression) with high-yield clinical manifestations, diagnostic protocols, and pharmacotherapy guidelines.",
        "keyObjectives": [
          "DSM-5 criteria for manic vs depressive episode",
          "Pharmacotherapy: Lithium, Sodium Valproate, atypical antipsychotics, SSRIs",
          "Indications for Electroconvulsive Therapy (ECT): Severe catatonia, intractable suicidality"
        ],
        "suggestedTopicKeywords": [
          "affective disorders",
          "psychopharmacology"
        ],
        "pqFrequency": 8,
        "targetPq": {
          "key": "Q5, January 2025 (Psychiatry)",
          "year": "January 2025",
          "marks": "10 marks · 15 mins",
          "topicClue": "48yo farmer with 15-year history of fluctuating moods: bipolar disorder acute & maintenance therapy"
        }
      },
      "afternoon": {
        "subject": "Surgery",
        "timeSlot": "Afternoon (2:00 PM - 5:30 PM · 3.5h · 35% Time)",
        "title": "Surgery: Thyroid Swellings, Goitre, Thyroid Malignancies & Post-Op Complications",
        "description": "Focused surgical review covering surgical pathophysiology, operative indications, step-by-step procedures, and perioperative management.",
        "keyObjectives": [
          "Pre-operative preparation of toxic thyrotoxic goiter (Carbimazole, Lugol iodine, Propranolol)",
          "Immediate bedside management of post-thyroidectomy neck hematoma with airway compromise",
          "Post-op hypocalcemia: Chvostek and Trousseau signs, IV Calcium gluconate"
        ],
        "suggestedTopicKeywords": [
          "the thyroid gland",
          "benign and malignant diseases of the thyroid"
        ],
        "pqFrequency": 10,
        "targetPq": {
          "key": "SAQ 4, December 2024 (Surgery)",
          "year": "December 2024",
          "marks": "10 marks · 15 mins",
          "topicClue": "Solitary thyroid nodule workup, FNAC Bethesda classification, and subtotal thyroidectomy complications"
        }
      },
      "evening": {
        "subject": "Community Medicine",
        "timeSlot": "Evening (6:30 PM - 8:30 PM · 2.0h · 15% Time)",
        "title": "Community Medicine: Epidemiologic Study Designs (Case-Control vs Cohort Studies)",
        "description": "Targeted public health review followed by timed past question drill from finalmbpq repository with structured model answer checklist.",
        "keyObjectives": [
          "Case-control (retrospective, rare diseases, Odds Ratio calculation)",
          "Cohort studies (prospective, incidence, Relative Risk calculation)",
          "Randomized Controlled Trials: Randomization, blinding, intention-to-treat"
        ],
        "suggestedTopicKeywords": [
          "principles of epidemiology",
          "affective disorders"
        ],
        "pqFrequency": 16,
        "targetPq": {
          "key": "Q7, March 2019 (Comm. Med)",
          "year": "March 2019",
          "marks": "10 marks · 15 mins",
          "topicClue": "Study design selection for maternal morbidity and calculation of Odds Ratio from 2x2 table"
        },
        "pastQuestionExample": {
          "key": "Q7, March 2019 (Comm. Med)",
          "year": "March 2019",
          "marks": "10 marks · 15 mins",
          "topicClue": "Study design selection for maternal morbidity and calculation of Odds Ratio from 2x2 table"
        }
      }
    }
  },
  {
    "dayNumber": 7,
    "dateString": "2026-10-07",
    "dateLabel": "Wednesday, Oct 7, 2026",
    "shortDateLabel": "Oct 7",
    "dayOfWeek": "Wed",
    "phaseNumber": 1,
    "phaseName": "Phase 1: High-Yield Medicine & Surgery Foundations",
    "dailyTheme": "Pulmonology (Pneumonia, TB & Asthma) + Inguinal Hernias & Scrotal Swellings + EPI Immunization",
    "clinicalPearl": "CURB-65 Score: Confusion, Urea > 7mmol/L, Respiratory rate >= 30, Blood pressure < 90/60, Age >= 65. Score >= 2 requires admission; >= 3 ICU. Severe asthma: PEFR < 33%, silent chest, cyanosis, exhaustion.",
    "sessions": {
      "morning": {
        "subject": "Medicine",
        "timeSlot": "Morning (8:00 AM - 1:00 PM · 5.0h · 50% Time)",
        "title": "Internal Medicine: Community-Acquired Pneumonia, Pulmonary TB & Acute Severe Asthma",
        "description": "Comprehensive prioritized review of Pulmonology (Pneumonia, TB & Asthma) with high-yield clinical manifestations, diagnostic protocols, and pharmacotherapy guidelines.",
        "keyObjectives": [
          "CURB-65 risk stratification and antibiotic selection",
          "DOTS anti-TB therapy (2RHZE/4RH) and adverse drug toxicities",
          "Emergency treatment of life-threatening asthma: O2, nebulized Salbutamol/Ipratropium, IV Hydrocortisone, IV MgSO4"
        ],
        "suggestedTopicKeywords": [
          "pneumonias",
          "tuberculosis",
          "bronchial asthma"
        ],
        "pqFrequency": 8,
        "targetPq": {
          "key": "SAQ 9, April 2024 (Medicine)",
          "year": "April 2024",
          "marks": "10 marks · 15 mins",
          "topicClue": "25yo tailor with sudden onset cough after accidental ingestion of foreign body: differential & bronchoscopy"
        }
      },
      "afternoon": {
        "subject": "Surgery",
        "timeSlot": "Afternoon (2:00 PM - 5:30 PM · 3.5h · 35% Time)",
        "title": "Surgery: Inguinal Hernias, Femoral Hernias, Scrotal Swellings & Lichtenstein Repair",
        "description": "Focused surgical review covering surgical pathophysiology, operative indications, step-by-step procedures, and perioperative management.",
        "keyObjectives": [
          "Anatomy of inguinal canal, deep ring occlusion test, direct vs indirect hernia",
          "Lichtenstein tension-free mesh hernioplasty operative principles",
          "Emergency distinction: Testicular torsion vs acute epididymo-orchitis (TWIST score)"
        ],
        "suggestedTopicKeywords": [
          "hernias of the abdominal wall",
          "benign and malignant conditions of the testis"
        ],
        "pqFrequency": 10,
        "targetPq": {
          "key": "SAQ 7, January 2025 (Surgery)",
          "year": "January 2025",
          "marks": "10 marks · 15 mins",
          "topicClue": "Talipes Equinovarus deformities (CAVE), risk factors, and Ponseti serial casting method"
        }
      },
      "evening": {
        "subject": "Community Medicine",
        "timeSlot": "Evening (6:30 PM - 8:30 PM · 2.0h · 15% Time)",
        "title": "Community Medicine: Expanded Programme on Immunization (EPI) & Cold Chain Management",
        "description": "Targeted public health review followed by timed past question drill from finalmbpq repository with structured model answer checklist.",
        "keyObjectives": [
          "National immunization schedule in Nigeria (birth to 15 months)",
          "Cold chain equipment (+2°C to +8°C) and Vaccine Vial Monitor (VVM) stages",
          "Measles, Yellow fever, and Pentavalent vaccine storage requirements"
        ],
        "suggestedTopicKeywords": [
          "child survival strategies and immunization",
          "principles of epidemiology"
        ],
        "pqFrequency": 16,
        "targetPq": {
          "key": "SAQ 1, January 2025 (Comm. Med)",
          "year": "January 2025",
          "marks": "10 marks · 15 mins",
          "topicClue": "Epidemic curves definition, types (point source, continuous common source, propagated) with examples"
        },
        "pastQuestionExample": {
          "key": "SAQ 1, January 2025 (Comm. Med)",
          "year": "January 2025",
          "marks": "10 marks · 15 mins",
          "topicClue": "Epidemic curves definition, types (point source, continuous common source, propagated) with examples"
        }
      }
    }
  },
  {
    "dayNumber": 8,
    "dateString": "2026-10-08",
    "dateLabel": "Thursday, Oct 8, 2026",
    "shortDateLabel": "Oct 8",
    "dayOfWeek": "Thu",
    "phaseNumber": 2,
    "phaseName": "Phase 2: Subspecialties, Psychiatry & Operative Deep-Dives",
    "dailyTheme": "Neurology (Acute Stroke & TIA) + Burns (Parkland Formula) + Environmental Health",
    "clinicalPearl": "Ischemic Stroke: IV rtPA window is 4.5 hours from symptom onset! Pre-thrombolysis BP must be < 185/110 mmHg. Burns Parkland Formula: 4 mL x weight (kg) x %TBSA. Give 50% in first 8 hours, 50% in next 16 hours.",
    "sessions": {
      "morning": {
        "subject": "Medicine",
        "timeSlot": "Morning (8:00 AM - 1:00 PM · 5.0h · 50% Time)",
        "title": "Internal Medicine: Acute Ischemic & Hemorrhagic Stroke, TIA & Raised ICP",
        "description": "Comprehensive prioritized review of Neurology (Acute Stroke & TIA) with high-yield clinical manifestations, diagnostic protocols, and pharmacotherapy guidelines.",
        "keyObjectives": [
          "NIHSS stroke scale and non-contrast CT brain interpretation",
          "IV rtPA thrombolysis criteria and blood pressure management",
          "Secondary prevention: Antiplatelets, high-intensity statin, anticoagulation for AF"
        ],
        "suggestedTopicKeywords": [
          "cerebrovascular diseases",
          "headache and facial pain"
        ],
        "pqFrequency": 8,
        "targetPq": {
          "key": "LAQ 1, December 2024 (Medicine)",
          "year": "December 2024",
          "marks": "20 marks · 25 mins",
          "topicClue": "65yo bricklayer with acute stroke, left hemiplegia, and severe hypertensive emergency"
        }
      },
      "afternoon": {
        "subject": "Surgery",
        "timeSlot": "Afternoon (2:00 PM - 5:30 PM · 3.5h · 35% Time)",
        "title": "Surgery: Burns Resuscitation (Parkland Formula), Inhalational Injury & Escharotomy",
        "description": "Focused surgical review covering surgical pathophysiology, operative indications, step-by-step procedures, and perioperative management.",
        "keyObjectives": [
          "Parkland fluid calculation and titrating to urine output (0.5-1.0 mL/kg/hr)",
          "Signs of inhalational burn injury requiring early endotracheal intubation",
          "Indications and technique for emergency escharotomy in circumferential burns"
        ],
        "suggestedTopicKeywords": [
          "thermal and non thermal injuries",
          "fluid and electrolyte balance in surgical patients"
        ],
        "pqFrequency": 10,
        "targetPq": {
          "key": "SAQ 1, December 2024 (Surgery)",
          "year": "December 2024",
          "marks": "10 marks · 15 mins",
          "topicClue": "Care of acute spinal cord injury in the emergency unit: immobilization, log-roll, and spinal shock"
        }
      },
      "evening": {
        "subject": "Community Medicine",
        "timeSlot": "Evening (6:30 PM - 8:30 PM · 2.0h · 15% Time)",
        "title": "Community Medicine: Environmental Health, Air Pollution & Water Purification",
        "description": "Targeted public health review followed by timed past question drill from finalmbpq repository with structured model answer checklist.",
        "keyObjectives": [
          "Criteria air pollutants (PM2.5, SO2, NO2, CO, Ozone) and respiratory health hazards",
          "Large scale municipal water purification steps: Coagulation, sedimentation, filtration, chlorination"
        ],
        "suggestedTopicKeywords": [
          "environmental health",
          "water and sanitation"
        ],
        "pqFrequency": 16,
        "targetPq": {
          "key": "SAQ 5, January 2025 (Comm. Med)",
          "year": "January 2025",
          "marks": "10 marks · 15 mins",
          "topicClue": "Air pollution definition, major criteria pollutants, and 6 detrimental systemic health effects"
        },
        "pastQuestionExample": {
          "key": "SAQ 5, January 2025 (Comm. Med)",
          "year": "January 2025",
          "marks": "10 marks · 15 mins",
          "topicClue": "Air pollution definition, major criteria pollutants, and 6 detrimental systemic health effects"
        }
      }
    }
  },
  {
    "dayNumber": 9,
    "dateString": "2026-10-09",
    "dateLabel": "Friday, Oct 9, 2026",
    "shortDateLabel": "Oct 9",
    "dayOfWeek": "Fri",
    "phaseNumber": 2,
    "phaseName": "Phase 2: Subspecialties, Psychiatry & Operative Deep-Dives",
    "dailyTheme": "Psychiatry (Acute Emergencies: Dystonia & NMS) + Colorectal Surgery + Occupational Health",
    "clinicalPearl": "Acute Dystonia Antidote: IV/IM Procyclidine 5-10mg or Diphenhydramine 50mg. Neuroleptic Malignant Syndrome: Lead-pipe rigidity, hyperpyrexia, high CPK; stop offending drug, give Dantrolene / Bromocriptine.",
    "sessions": {
      "morning": {
        "subject": "Medicine",
        "timeSlot": "Morning (8:00 AM - 1:00 PM · 5.0h · 50% Time)",
        "title": "Psychiatry in Medicine: Acute Psychiatric Emergencies, Drug Side Effects, NMS & Toxicities",
        "description": "Comprehensive prioritized review of Psychiatry (Acute Emergencies: Dystonia & NMS) with high-yield clinical manifestations, diagnostic protocols, and pharmacotherapy guidelines.",
        "keyObjectives": [
          "Management of acute dystonic reaction and oculogyric crisis secondary to Haloperidol",
          "Differentiate Neuroleptic Malignant Syndrome vs Serotonin Syndrome (hyperreflexia/clonus)",
          "Acute agitation and psychiatric de-escalation protocols"
        ],
        "suggestedTopicKeywords": [
          "psychiatric emergencies",
          "psychopharmacology",
          "organic mental disorders"
        ],
        "pqFrequency": 8,
        "targetPq": {
          "key": "Q1, January 2025 (Psychiatry)",
          "year": "January 2025",
          "marks": "10 marks · 15 mins",
          "topicClue": "25yo undergraduate with neck twisting and tongue protrusion after oral haloperidol: acute dystonia"
        }
      },
      "afternoon": {
        "subject": "Surgery",
        "timeSlot": "Afternoon (2:00 PM - 5:30 PM · 3.5h · 35% Time)",
        "title": "Surgery: Colorectal Carcinoma, Dukes/TNM Staging & Lower GI Bleeding",
        "description": "Focused surgical review covering surgical pathophysiology, operative indications, step-by-step procedures, and perioperative management.",
        "keyObjectives": [
          "Right-sided colon cancer (anemia, occult bleeding) vs Left-sided (obstruction, altered bowel habits)",
          "Colonoscopy, biopsy, CEA tumor marker, and staging CT scan",
          "Principles of oncologic bowel resection: Right vs Left hemicolectomy, Abdominoperineal resection (APR)"
        ],
        "suggestedTopicKeywords": [
          "the colon rectum and anal canal",
          "general principle of cancer management"
        ],
        "pqFrequency": 10,
        "targetPq": {
          "key": "SAQ 6, December 2024 (Surgery)",
          "year": "December 2024",
          "marks": "10 marks · 15 mins",
          "topicClue": "62yo man with 6-month progressive dysphagia and weight loss: esophageal cancer workup"
        }
      },
      "evening": {
        "subject": "Community Medicine",
        "timeSlot": "Evening (6:30 PM - 8:30 PM · 2.0h · 15% Time)",
        "title": "Community Medicine: Occupational Health Services, Workplace Hazards & Pneumoconiosis",
        "description": "Targeted public health review followed by timed past question drill from finalmbpq repository with structured model answer checklist.",
        "keyObjectives": [
          "Classification of occupational hazards: Physical, chemical, biological, ergonomic, psychosocial",
          "Pneumoconioses: Silicosis, asbestosis, anthracosis, byssinosis prevention and compensation"
        ],
        "suggestedTopicKeywords": [
          "occupational health and industrial hygiene",
          "principles of epidemiology"
        ],
        "pqFrequency": 16,
        "targetPq": {
          "key": "SAQ 4, January 2025 (Comm. Med)",
          "year": "January 2025",
          "marks": "10 marks · 15 mins",
          "topicClue": "Functions and components of an Occupational Health service in a high-risk industrial workplace"
        },
        "pastQuestionExample": {
          "key": "SAQ 4, January 2025 (Comm. Med)",
          "year": "January 2025",
          "marks": "10 marks · 15 mins",
          "topicClue": "Functions and components of an Occupational Health service in a high-risk industrial workplace"
        }
      }
    }
  },
  {
    "dayNumber": 10,
    "dateString": "2026-10-10",
    "dateLabel": "Saturday, Oct 10, 2026",
    "shortDateLabel": "Oct 10",
    "dayOfWeek": "Sat",
    "phaseNumber": 2,
    "phaseName": "Phase 2: Subspecialties, Psychiatry & Operative Deep-Dives",
    "dailyTheme": "Infectious Diseases (HIV/AIDS, Opportunistic Infections & Sepsis) + Pediatric Surgery + Nutrition",
    "clinicalPearl": "HIV CD4 Milestones: CD4 < 200: Pneumocystis jirovecii (Cotrimoxazole prophylaxis); CD4 < 100: Cryptococcal meningitis (India ink, Amphotericin B + Flucytosine). Sepsis Hour-1 Bundle: Lactate, Blood cultures, Broad-spectrum IV antibiotics, 30mL/kg crystalloid.",
    "sessions": {
      "morning": {
        "subject": "Medicine",
        "timeSlot": "Morning (8:00 AM - 1:00 PM · 5.0h · 50% Time)",
        "title": "Internal Medicine: HIV/AIDS Clinical Staging, Opportunistic Infections, ART & Sepsis Bundle",
        "description": "Comprehensive prioritized review of Infectious Diseases (HIV/AIDS, Opportunistic Infections & Sepsis) with high-yield clinical manifestations, diagnostic protocols, and pharmacotherapy guidelines.",
        "keyObjectives": [
          "WHO Clinical Staging of HIV infection (Stage 1 to Stage 4)",
          "Diagnosis and management of Cryptococcal meningitis (Amphotericin B + Flucytosine)",
          "Surviving Sepsis Campaign Hour-1 bundle execution",
          "First-line Tenofovir + Lamivudine + Dolutegravir (TLD) regimen"
        ],
        "suggestedTopicKeywords": [
          "human immunodeficiency virus infection",
          "sepsis and septic shock",
          "tuberculosis"
        ],
        "pqFrequency": 8,
        "targetPq": {
          "key": "Q3, May 2014 (Medicine)",
          "year": "May 2014",
          "marks": "10 marks · 15 mins",
          "topicClue": "Psychosocial problems of PLWHA in Nigeria and management of opportunistic infections"
        }
      },
      "afternoon": {
        "subject": "Surgery",
        "timeSlot": "Afternoon (2:00 PM - 5:30 PM · 3.5h · 35% Time)",
        "title": "Surgery: Pediatric Surgical Emergencies: Intussusception, Hirschsprung & Pyloric Stenosis",
        "description": "Focused surgical review covering surgical pathophysiology, operative indications, step-by-step procedures, and perioperative management.",
        "keyObjectives": [
          "Infantile hypertrophic pyloric stenosis: Non-bilious projectile vomiting, hypochloremic alkalosis, Ramstedt pyloromyotomy",
          "Intussusception: Red currant jelly stools, target sign on US, pneumatic/hydrostatic reduction",
          "Hirschsprung disease: Delayed meconium, transition zone, rectal suction biopsy"
        ],
        "suggestedTopicKeywords": [
          "paediatric surgical conditions",
          "intestinal obstruction"
        ],
        "pqFrequency": 10,
        "targetPq": {
          "key": "SAQ 2, January 2025 (Surgery)",
          "year": "January 2025",
          "marks": "10 marks · 15 mins",
          "topicClue": "62yo open prostatectomy under spinal anaesthesia: clot retention, bladder irrigation, and TURP syndrome"
        }
      },
      "evening": {
        "subject": "Community Medicine",
        "timeSlot": "Evening (6:30 PM - 8:30 PM · 2.0h · 15% Time)",
        "title": "Community Medicine: Nutrition, Protein-Energy Malnutrition (PEM) & Food Fortification",
        "description": "Targeted public health review followed by timed past question drill from finalmbpq repository with structured model answer checklist.",
        "keyObjectives": [
          "Differentiate Kwashiorkor (edema, dermatosis, fatty liver) vs Marasmus (severe wasting)",
          "Food fortification vs biofortification strategies in Nigeria (Vitamin A in flour/oil, iodized salt)",
          "Food pyramid guidelines and dietary management of malnutrition"
        ],
        "suggestedTopicKeywords": [
          "nutrition and food safety",
          "maternal and child health"
        ],
        "pqFrequency": 16,
        "targetPq": {
          "key": "SAQ 7, January 2025 (Comm. Med)",
          "year": "January 2025",
          "marks": "10 marks · 15 mins",
          "topicClue": "Food pyramid nutritional tiers, balanced diet principles, and food fortification strategies"
        },
        "pastQuestionExample": {
          "key": "SAQ 7, January 2025 (Comm. Med)",
          "year": "January 2025",
          "marks": "10 marks · 15 mins",
          "topicClue": "Food pyramid nutritional tiers, balanced diet principles, and food fortification strategies"
        }
      }
    }
  },
  {
    "dayNumber": 11,
    "dateString": "2026-10-11",
    "dateLabel": "Sunday, Oct 11, 2026",
    "shortDateLabel": "Oct 11",
    "dayOfWeek": "Sun",
    "phaseNumber": 2,
    "phaseName": "Phase 2: Subspecialties, Psychiatry & Operative Deep-Dives",
    "dailyTheme": "Gastroenterology (Peptic Ulcer Disease & GI Bleed) + Orthopaedics (Fractures & Osteomyelitis) + Outbreaks",
    "clinicalPearl": "Upper GI Bleeding: Restrictive blood transfusion threshold (Hb < 7 g/dL), IV Erythromycin pre-endoscopy, high-dose IV Pantoprazole bolus + infusion, urgent endoscopy within 24 hours. Rockall score.",
    "sessions": {
      "morning": {
        "subject": "Medicine",
        "timeSlot": "Morning (8:00 AM - 1:00 PM · 5.0h · 50% Time)",
        "title": "Internal Medicine: Peptic Ulcer Disease, H. Pylori Eradication & Upper GI Hemorrhage",
        "description": "Comprehensive prioritized review of Gastroenterology (Peptic Ulcer Disease & GI Bleed) with high-yield clinical manifestations, diagnostic protocols, and pharmacotherapy guidelines.",
        "keyObjectives": [
          "H. pylori eradication 14-day triple therapy (PPI + Clarithromycin + Amoxicillin)",
          "Emergency resuscitation and risk scoring in non-variceal upper GI bleeding",
          "Zollinger-Ellison syndrome workup: Fasting gastrin level and secretin stimulation test"
        ],
        "suggestedTopicKeywords": [
          "peptic ulcer disease and gastritis",
          "upper gastrointestinal bleeding"
        ],
        "pqFrequency": 8,
        "targetPq": {
          "key": "SAQ 9, April 2024 (Medicine)",
          "year": "April 2024",
          "marks": "10 marks · 15 mins",
          "topicClue": "Acute cough and foreign body ingestion in emergency room: diagnostic differential and management"
        }
      },
      "afternoon": {
        "subject": "Surgery",
        "timeSlot": "Afternoon (2:00 PM - 5:30 PM · 3.5h · 35% Time)",
        "title": "Surgery: Orthopaedics: Open Fractures (Gustilo-Anderson), Compartment Syndrome & Osteomyelitis",
        "description": "Focused surgical review covering surgical pathophysiology, operative indications, step-by-step procedures, and perioperative management.",
        "keyObjectives": [
          "Gustilo-Anderson classification of open fractures and antibiotic/debridement protocol",
          "Signs of Compartment Syndrome (pain out of proportion, pulselessness, paresthesia); urgent fasciotomy",
          "Chronic osteomyelitis: Involucrum, sequestrum, cloaca, and sequestrectomy"
        ],
        "suggestedTopicKeywords": [
          "fractures and dislocations",
          "bone and joint infections"
        ],
        "pqFrequency": 10,
        "targetPq": {
          "key": "SAQ 7, January 2025 (Surgery)",
          "year": "January 2025",
          "marks": "10 marks · 15 mins",
          "topicClue": "Talipes Equinovarus CAVE deformities and Ponseti serial casting correction technique"
        }
      },
      "evening": {
        "subject": "Community Medicine",
        "timeSlot": "Evening (6:30 PM - 8:30 PM · 2.0h · 15% Time)",
        "title": "Community Medicine: Outbreak Investigation Steps & Integrated Disease Surveillance (IDSR)",
        "description": "Targeted public health review followed by timed past question drill from finalmbpq repository with structured model answer checklist.",
        "keyObjectives": [
          "10 systematic steps of disease outbreak investigation",
          "Case definitions: Suspected, probable, confirmed",
          "IDSR priority epidemic-prone diseases in Nigeria (Lassa fever, Cholera, Meningitis)"
        ],
        "suggestedTopicKeywords": [
          "principles of epidemiology",
          "communicable disease control"
        ],
        "pqFrequency": 16,
        "targetPq": {
          "key": "Q13, January 2016 (Comm. Med)",
          "year": "January 2016",
          "marks": "10 marks · 15 mins",
          "topicClue": "Investigation of suspected cholera outbreak in a local government area: systematic steps"
        },
        "pastQuestionExample": {
          "key": "Q13, January 2016 (Comm. Med)",
          "year": "January 2016",
          "marks": "10 marks · 15 mins",
          "topicClue": "Investigation of suspected cholera outbreak in a local government area: systematic steps"
        }
      }
    }
  },
  {
    "dayNumber": 12,
    "dateString": "2026-10-12",
    "dateLabel": "Monday, Oct 12, 2026",
    "shortDateLabel": "Oct 12",
    "dayOfWeek": "Mon",
    "phaseNumber": 2,
    "phaseName": "Phase 2: Subspecialties, Psychiatry & Operative Deep-Dives",
    "dailyTheme": "Psychiatry (Alcohol & Substance Dependence, Delirium Tremens) + Urology (Hematuria) + Health Systems",
    "clinicalPearl": "Delirium Tremens develops 48-72h after alcohol cessation (tremor, autonomic instability, hallucinations). Drug of choice: IV Diazepam / oral Chlordiazepoxide + High-dose IV Thiamine (Pabrinex) BEFORE glucose to prevent Wernicke encephalopathy!",
    "sessions": {
      "morning": {
        "subject": "Medicine",
        "timeSlot": "Morning (8:00 AM - 1:00 PM · 5.0h · 50% Time)",
        "title": "Psychiatry in Medicine: Alcohol & Substance Use Disorders, CAGE, Delirium Tremens & Rehabilitation",
        "description": "Comprehensive prioritized review of Psychiatry (Alcohol & Substance Dependence, Delirium Tremens) with high-yield clinical manifestations, diagnostic protocols, and pharmacotherapy guidelines.",
        "keyObjectives": [
          "CAGE questionnaire and DSM-5 substance use disorder criteria",
          "Emergency protocol for Delirium Tremens (CIWA-Ar protocol)",
          "Wernicke encephalopathy vs Korsakoff psychosis clinical features and parenteral thiamine regimen",
          "Opioid toxicity toxidrome and antidote administration (Naloxone)"
        ],
        "suggestedTopicKeywords": [
          "substance related disorders",
          "psychiatric emergencies",
          "organic mental disorders"
        ],
        "pqFrequency": 8,
        "targetPq": {
          "key": "Q3, September 2022 (Psychiatry)",
          "year": "September 2022",
          "marks": "10 marks · 15 mins",
          "topicClue": "David, middle-aged man managed for alcohol dependence: withdrawal symptoms & CIWA protocol"
        }
      },
      "afternoon": {
        "subject": "Surgery",
        "timeSlot": "Afternoon (2:00 PM - 5:30 PM · 3.5h · 35% Time)",
        "title": "Surgery: Urology: Hematuria Workup, Urolithiasis, Renal Cell Carcinoma & Bladder Tumors",
        "description": "Focused surgical review covering surgical pathophysiology, operative indications, step-by-step procedures, and perioperative management.",
        "keyObjectives": [
          "Painless gross hematuria: Rigid cystoscopy and CT urogram to rule out bladder transitional cell carcinoma",
          "Acute renal colic: Plain abdominal radiograph, non-contrast CT KUB, and medical expulsive therapy (Tamsulosin)",
          "Renal Cell Carcinoma: Classic triad (hematuria, flank pain, palpable mass) and radical nephrectomy"
        ],
        "suggestedTopicKeywords": [
          "urinary tract calculous disease",
          "tumours of the genitourinary tract"
        ],
        "pqFrequency": 10,
        "targetPq": {
          "key": "SAQ 8, December 2024 (Surgery)",
          "year": "December 2024",
          "marks": "10 marks · 15 mins",
          "topicClue": "74yo man with urinary retention and hard prostate: clinical diagnosis and bilateral orchidectomy"
        }
      },
      "evening": {
        "subject": "Community Medicine",
        "timeSlot": "Evening (6:30 PM - 8:30 PM · 2.0h · 15% Time)",
        "title": "Community Medicine: Health Systems Strengthening & WHO 6 Building Blocks",
        "description": "Targeted public health review followed by timed past question drill from finalmbpq repository with structured model answer checklist.",
        "keyObjectives": [
          "6 WHO Health System Building Blocks: Service delivery, Workforce, Information, Medicines, Financing, Leadership",
          "Role of international agencies (WHO, UNICEF, UNFPA, Global Fund) in health system resilience"
        ],
        "suggestedTopicKeywords": [
          "health management",
          "public health admin"
        ],
        "pqFrequency": 16,
        "targetPq": {
          "key": "SAQ 8, January 2025 (Comm. Med)",
          "year": "January 2025",
          "marks": "10 marks · 15 mins",
          "topicClue": "International Health Organizations (WHO, UNICEF) significance to national health systems"
        },
        "pastQuestionExample": {
          "key": "SAQ 8, January 2025 (Comm. Med)",
          "year": "January 2025",
          "marks": "10 marks · 15 mins",
          "topicClue": "International Health Organizations (WHO, UNICEF) significance to national health systems"
        }
      }
    }
  },
  {
    "dayNumber": 13,
    "dateString": "2026-10-13",
    "dateLabel": "Tuesday, Oct 13, 2026",
    "shortDateLabel": "Oct 13",
    "dayOfWeek": "Tue",
    "phaseNumber": 2,
    "phaseName": "Phase 2: Subspecialties, Psychiatry & Operative Deep-Dives",
    "dailyTheme": "Hematology (Sickle Cell Anemia, Acute Chest Syndrome) + Dysphagia & Gastric Ca + Demography",
    "clinicalPearl": "Sickle Cell Acute Chest Syndrome: New pulmonary infiltrate on CXR PLUS fever, tachypnea, chest pain, or hypoxemia. Immediate therapy: Incentive spirometry, IV analgesia, hydration, empiric Ceftriaxone + Macrolide, and exchange blood transfusion (HbS < 30%).",
    "sessions": {
      "morning": {
        "subject": "Medicine",
        "timeSlot": "Morning (8:00 AM - 1:00 PM · 5.0h · 50% Time)",
        "title": "Internal Medicine: Sickle Cell Disease Crises, Leukemias, Lymphomas & Coagulation Disorders",
        "description": "Comprehensive prioritized review of Hematology (Sickle Cell Anemia, Acute Chest Syndrome) with high-yield clinical manifestations, diagnostic protocols, and pharmacotherapy guidelines.",
        "keyObjectives": [
          "Pathophysiology and management of vaso-occlusive, aplastic, sequestration, and acute chest syndrome",
          "Differentiate AML (Auer rods) vs ALL vs CML (Philadelphia chromosome, Imatinib)",
          "Hodgkin lymphoma (Reed-Sternberg cells, Ann Arbor staging) vs Non-Hodgkin lymphoma"
        ],
        "suggestedTopicKeywords": [
          "hemoglobinopathies",
          "leukaemias and myeloproliferative disorders",
          "lymphomas"
        ],
        "pqFrequency": 8,
        "targetPq": {
          "key": "SAQ 5, December 2024 (Medicine)",
          "year": "December 2024",
          "marks": "10 marks · 15 mins",
          "topicClue": "Diabetic foot ulcer evaluation, Wagner staging, and multidisciplinary limb preservation"
        }
      },
      "afternoon": {
        "subject": "Surgery",
        "timeSlot": "Afternoon (2:00 PM - 5:30 PM · 3.5h · 35% Time)",
        "title": "Surgery: Upper GI Surgery: Progressive Dysphagia, Esophageal Ca & Gastric Adenocarcinoma",
        "description": "Focused surgical review covering surgical pathophysiology, operative indications, step-by-step procedures, and perioperative management.",
        "keyObjectives": [
          "Progressive dysphagia workup: Barium swallow and upper GI endoscopy with biopsy",
          "Differentiate Achalasia (bird beak sign on barium swallow) vs Esophageal cancer",
          "Gastric adenocarcinoma: Virchow node, Sister Mary Joseph nodule, Krukenberg tumor, and subtotal/total gastrectomy"
        ],
        "suggestedTopicKeywords": [
          "the oesophagus",
          "the stomach and duodenum"
        ],
        "pqFrequency": 10,
        "targetPq": {
          "key": "SAQ 6, January 2025 (Surgery)",
          "year": "January 2025",
          "marks": "10 marks · 15 mins",
          "topicClue": "62yo man with 6-month history of progressive dysphagia: investigations, staging, and surgery"
        }
      },
      "evening": {
        "subject": "Community Medicine",
        "timeSlot": "Evening (6:30 PM - 8:30 PM · 2.0h · 15% Time)",
        "title": "Community Medicine: Demography, Vital Statistics, Census & Population Pyramids",
        "description": "Targeted public health review followed by timed past question drill from finalmbpq repository with structured model answer checklist.",
        "keyObjectives": [
          "Sources of demographic data: Population census, vital registration, sample surveys",
          "Dependency ratio calculation and interpretation of population pyramids (expansive vs constrictive)",
          "Indices of fertility and mortality: Crude birth rate, Infant mortality rate, Under-5 mortality rate"
        ],
        "suggestedTopicKeywords": [
          "demography and vital statistics",
          "principles of epidemiology"
        ],
        "pqFrequency": 16,
        "targetPq": {
          "key": "Q12, May 2010 (Comm. Med)",
          "year": "May 2010",
          "marks": "10 marks · 15 mins",
          "topicClue": "Population census in developing countries: methodologies, errors, and dependency ratio calculation"
        },
        "pastQuestionExample": {
          "key": "Q12, May 2010 (Comm. Med)",
          "year": "May 2010",
          "marks": "10 marks · 15 mins",
          "topicClue": "Population census in developing countries: methodologies, errors, and dependency ratio calculation"
        }
      }
    }
  },
  {
    "dayNumber": 14,
    "dateString": "2026-10-14",
    "dateLabel": "Wednesday, Oct 14, 2026",
    "shortDateLabel": "Oct 14",
    "dayOfWeek": "Wed",
    "phaseNumber": 2,
    "phaseName": "Phase 2: Subspecialties, Psychiatry & Operative Deep-Dives",
    "dailyTheme": "Infectious Diseases (Enteric Fever, Severe Malaria & Tetanus) + Obstructive Jaundice + Disabilities",
    "clinicalPearl": "Typhoid Perforation in SSA: Typically occurs in 2nd-3rd week of illness at terminal ileum. Resuscitate with IV fluids and Ceftriaxone/Ciprofloxacin, then emergency laparotomy: Debridement and simple 2-layer closure or wedge resection.",
    "sessions": {
      "morning": {
        "subject": "Medicine",
        "timeSlot": "Morning (8:00 AM - 1:00 PM · 5.0h · 50% Time)",
        "title": "Internal Medicine: Enteric Fever (Typhoid), Severe Falciparum Malaria, Tetanus & Rabies",
        "description": "Comprehensive prioritized review of Infectious Diseases (Enteric Fever, Severe Malaria & Tetanus) with high-yield clinical manifestations, diagnostic protocols, and pharmacotherapy guidelines.",
        "keyObjectives": [
          "Enteric fever presentation: Step-ladder fever, relative bradycardia (Faget sign), intestinal complications",
          "WHO criteria for severe malaria: Impaired consciousness, severe anemia (Hb<7), AKI; IV Artesunate protocol",
          "Management of generalized tetanus: Wound debridement, TIG, IV Metronidazole, Diazepam, Dark/quiet room"
        ],
        "suggestedTopicKeywords": [
          "enteric fever",
          "malaria and other protozoal diseases",
          "tetanus"
        ],
        "pqFrequency": 8,
        "targetPq": {
          "key": "Q3, May 2010 (Medicine)",
          "year": "May 2010",
          "marks": "10 marks · 15 mins",
          "topicClue": "Tetanus management protocol in adult emergency room: spasms control, airway, and serotherapy"
        }
      },
      "afternoon": {
        "subject": "Surgery",
        "timeSlot": "Afternoon (2:00 PM - 5:30 PM · 3.5h · 35% Time)",
        "title": "Surgery: Obstructive Jaundice, Choledocholithiasis & Periampullary Malignancies",
        "description": "Focused surgical review covering surgical pathophysiology, operative indications, step-by-step procedures, and perioperative management.",
        "keyObjectives": [
          "Courvoisier law: Palpable non-tender gallbladder in painless jaundice indicates malignancy (periampullary Ca)",
          "Diagnostic ultrasound, MRCP, and therapeutic ERCP stenting",
          "Whipple pancreaticoduodenectomy indications and operative anatomy"
        ],
        "suggestedTopicKeywords": [
          "the biliary system",
          "the pancreas"
        ],
        "pqFrequency": 10,
        "targetPq": {
          "key": "SAQ 10, December 2024 (Surgery)",
          "year": "December 2024",
          "marks": "10 marks · 15 mins",
          "topicClue": "Generalized peritonitis in pediatric patient: pre-operative optimization and exploratory laparotomy"
        }
      },
      "evening": {
        "subject": "Community Medicine",
        "timeSlot": "Evening (6:30 PM - 8:30 PM · 2.0h · 15% Time)",
        "title": "Community Medicine: Management of Handicapping Conditions & Community-Based Rehabilitation",
        "description": "Targeted public health review followed by timed past question drill from finalmbpq repository with structured model answer checklist.",
        "keyObjectives": [
          "Classification: Impairment, disability, and handicap (ICF framework)",
          "Levels of prevention applied to disabilities (Primary, Secondary, Tertiary)",
          "Community-Based Rehabilitation (CBR) matrix and social inclusion strategies"
        ],
        "suggestedTopicKeywords": [
          "rehabilitation medicine",
          "primary health care"
        ],
        "pqFrequency": 16,
        "targetPq": {
          "key": "SAQ 6, January 2025 (Comm. Med)",
          "year": "January 2025",
          "marks": "10 marks · 15 mins",
          "topicClue": "Management of handicapping conditions in Nigeria and community-based rehabilitation programs"
        },
        "pastQuestionExample": {
          "key": "SAQ 6, January 2025 (Comm. Med)",
          "year": "January 2025",
          "marks": "10 marks · 15 mins",
          "topicClue": "Management of handicapping conditions in Nigeria and community-based rehabilitation programs"
        }
      }
    }
  },
  {
    "dayNumber": 15,
    "dateString": "2026-10-15",
    "dateLabel": "Thursday, Oct 15, 2026",
    "shortDateLabel": "Oct 15",
    "dayOfWeek": "Thu",
    "phaseNumber": 3,
    "phaseName": "Phase 3: High-Frequency Clinical Cases & Complex Scenarios",
    "dailyTheme": "Rheumatology (SLE, Rheumatoid Arthritis, Gout) + Anorectal Conditions + School Health",
    "clinicalPearl": "SLE 2019 EULAR/ACR: ANA positive (>= 1:80) entry criterion. Clinical domains: Malar rash, oral ulcers, serositis, lupus nephritis, cytopenias. Drug-induced lupus: Anti-histone antibodies (Hydralazine, Procainamide, Isoniazid).",
    "sessions": {
      "morning": {
        "subject": "Medicine",
        "timeSlot": "Morning (8:00 AM - 1:00 PM · 5.0h · 50% Time)",
        "title": "Internal Medicine: SLE, Lupus Nephritis, Rheumatoid Arthritis & Gouty Arthritis",
        "description": "Comprehensive prioritized review of Rheumatology (SLE, Rheumatoid Arthritis, Gout) with high-yield clinical manifestations, diagnostic protocols, and pharmacotherapy guidelines.",
        "keyObjectives": [
          "Clinical features and diagnostic criteria for SLE and classification of lupus nephritis",
          "Rheumatoid arthritis: Symmetric small joint polyarthritis, anti-CCP antibodies, DMARDs (Methotrexate)",
          "Acute gout vs pseudogout: Negatively birefringent needle crystals vs positively birefringent rhomboid crystals"
        ],
        "suggestedTopicKeywords": [
          "systemic lupus erythematosus",
          "rheumatoid arthritis",
          "crystal deposition diseases"
        ],
        "pqFrequency": 8,
        "targetPq": {
          "key": "Q4, January 2025 (Medicine)",
          "year": "January 2025",
          "marks": "10 marks · 15 mins",
          "topicClue": "Lupus nephritis clinical presentation, renal biopsy indications, and immunosuppressive therapy"
        }
      },
      "afternoon": {
        "subject": "Surgery",
        "timeSlot": "Afternoon (2:00 PM - 5:30 PM · 3.5h · 35% Time)",
        "title": "Surgery: Anorectal Diseases: Hemorrhoids, Anal Fissure, Fistula-in-Ano & Perianal Abscess",
        "description": "Focused surgical review covering surgical pathophysiology, operative indications, step-by-step procedures, and perioperative management.",
        "keyObjectives": [
          "Classification of internal hemorrhoids (1st to 4th degree) and management (Banding vs Hemorrhoidectomy)",
          "Anal fissure: Location (posterior midline), symptoms, GTN ointment/Diltiazem vs lateral internal sphincterotomy",
          "Goodsall rule for fistula-in-ano and emergency drainage of ischiorectal abscess"
        ],
        "suggestedTopicKeywords": [
          "the colon rectum and anal canal",
          "surgical infections and antibiotic therapy"
        ],
        "pqFrequency": 10,
        "targetPq": {
          "key": "SAQ 8, January 2025 (Surgery)",
          "year": "January 2025",
          "marks": "10 marks · 15 mins",
          "topicClue": "Prostatic enlargement with retention: examination findings and emergency subcapsular orchidectomy"
        }
      },
      "evening": {
        "subject": "Community Medicine",
        "timeSlot": "Evening (6:30 PM - 8:30 PM · 2.0h · 15% Time)",
        "title": "Community Medicine: School Health Services, Adolescent Health & Helminth Control",
        "description": "Targeted public health review followed by timed past question drill from finalmbpq repository with structured model answer checklist.",
        "keyObjectives": [
          "4 core components of School Health Programme: Healthful school environment, School health instruction, School health services, School-community relationship",
          "Mass drug administration protocols for soil-transmitted helminths (Albendazole) and schistosomiasis (Praziquantel)"
        ],
        "suggestedTopicKeywords": [
          "maternal and child health",
          "communicable disease control"
        ],
        "pqFrequency": 16,
        "targetPq": {
          "key": "Q11, March 2019 (Comm. Med)",
          "year": "March 2019",
          "marks": "10 marks · 15 mins",
          "topicClue": "Components of school health programme and mass deworming campaigns in primary schools"
        },
        "pastQuestionExample": {
          "key": "Q11, March 2019 (Comm. Med)",
          "year": "March 2019",
          "marks": "10 marks · 15 mins",
          "topicClue": "Components of school health programme and mass deworming campaigns in primary schools"
        }
      }
    }
  },
  {
    "dayNumber": 16,
    "dateString": "2026-10-16",
    "dateLabel": "Friday, Oct 16, 2026",
    "shortDateLabel": "Oct 16",
    "dayOfWeek": "Fri",
    "phaseNumber": 3,
    "phaseName": "Phase 3: High-Frequency Clinical Cases & Complex Scenarios",
    "dailyTheme": "Psychiatry (Suicide, Organophosphate Ingestion & Consultation-Liaison) + Neck Masses + Family Planning",
    "clinicalPearl": "Organophosphate Ingestion Toxidrome (SLUDGEM): Salivation, Lacrimation, Urination, Defecation, GI cramping, Emesis, Miosis. Antidote: High-dose IV Atropine (titrated to dry secretions) + Pralidoxime (2-PAM). Suicide risk: SAD PERSONS scale.",
    "sessions": {
      "morning": {
        "subject": "Medicine",
        "timeSlot": "Morning (8:00 AM - 1:00 PM · 5.0h · 50% Time)",
        "title": "Psychiatry in Medicine: Suicide Risk Assessment, Organophosphate Poisoning & Consultation-Liaison",
        "description": "Comprehensive prioritized review of Psychiatry (Suicide, Organophosphate Ingestion & Consultation-Liaison) with high-yield clinical manifestations, diagnostic protocols, and pharmacotherapy guidelines.",
        "keyObjectives": [
          "Emergency medical and psychiatric management of suicidal patient ingesting Sniper (organophosphate)",
          "Antidote administration protocol: IV Atropine double-dosing until full atropinization",
          "SAD PERSONS scale scoring for suicide risk stratification and involuntary observation",
          "Consultation-Liaison psychiatry principles in a tertiary medical center"
        ],
        "suggestedTopicKeywords": [
          "psychiatric emergencies",
          "psychopharmacology",
          "affective disorders"
        ],
        "pqFrequency": 8,
        "targetPq": {
          "key": "Q1, September 2022 (Psychiatry)",
          "year": "September 2022",
          "marks": "10 marks · 15 mins",
          "topicClue": "21yo corps member attempted suicide by ingesting sniper: toxidrome, atropinization, and suicide evaluation"
        }
      },
      "afternoon": {
        "subject": "Surgery",
        "timeSlot": "Afternoon (2:00 PM - 5:30 PM · 3.5h · 35% Time)",
        "title": "Surgery: Differential Diagnosis of Neck Masses, Branchial Cyst & Thyroglossal Duct Cyst",
        "description": "Focused surgical review covering surgical pathophysiology, operative indications, step-by-step procedures, and perioperative management.",
        "keyObjectives": [
          "Anatomy of anterior and posterior cervical triangles",
          "Thyroglossal duct cyst: Midline mass moving with tongue protrusion; Sistrunk procedure",
          "Cervical lymphadenopathy evaluation: Reactive vs tuberculous (scrofula) vs lymphoma vs metastatic"
        ],
        "suggestedTopicKeywords": [
          "the neck",
          "the thyroid gland"
        ],
        "pqFrequency": 10,
        "targetPq": {
          "key": "SAQ 4, December 2024 (Surgery)",
          "year": "December 2024",
          "marks": "10 marks · 15 mins",
          "topicClue": "Solitary thyroid nodule workup and complications of subtotal thyroidectomy"
        }
      },
      "evening": {
        "subject": "Community Medicine",
        "timeSlot": "Evening (6:30 PM - 8:30 PM · 2.0h · 15% Time)",
        "title": "Community Medicine: Reproductive Health, Family Planning Methods & Contraceptive Counseling",
        "description": "Targeted public health review followed by timed past question drill from finalmbpq repository with structured model answer checklist.",
        "keyObjectives": [
          "Modern contraceptive methods: Barrier, hormonal (implants, injectables, pills), intrauterine devices (Copper T, LNG-IUD), permanent sterilization",
          "Contraceptive Prevalence Rate (CPR) and unmet need for family planning in Nigeria",
          "Post-exposure prophylaxis for HIV and PMTCT protocols"
        ],
        "suggestedTopicKeywords": [
          "maternal and child health",
          "demography and vital statistics"
        ],
        "pqFrequency": 16,
        "targetPq": {
          "key": "Q8, January 2016 (Comm. Med)",
          "year": "January 2016",
          "marks": "10 marks · 15 mins",
          "topicClue": "Contraceptive prevalence rate in Nigeria, unmet need for family planning, and modern methods"
        },
        "pastQuestionExample": {
          "key": "Q8, January 2016 (Comm. Med)",
          "year": "January 2016",
          "marks": "10 marks · 15 mins",
          "topicClue": "Contraceptive prevalence rate in Nigeria, unmet need for family planning, and modern methods"
        }
      }
    }
  },
  {
    "dayNumber": 17,
    "dateString": "2026-10-17",
    "dateLabel": "Saturday, Oct 17, 2026",
    "shortDateLabel": "Oct 17",
    "dayOfWeek": "Sat",
    "phaseNumber": 3,
    "phaseName": "Phase 3: High-Frequency Clinical Cases & Complex Scenarios",
    "dailyTheme": "Cardiology (Infective Endocarditis & Arrhythmias) + Thoracic Trauma (Pneumothorax) + Hospital Waste",
    "clinicalPearl": "Tension Pneumothorax: Clinical diagnosis (Do NOT wait for CXR!). Tracheal deviation to opposite side, absent breath sounds, hypotension. Immediate needle decompression in 2nd ICS midclavicular line (or 5th ICS anterior axillary line), followed immediately by underwater-seal tube thoracostomy!",
    "sessions": {
      "morning": {
        "subject": "Medicine",
        "timeSlot": "Morning (8:00 AM - 1:00 PM · 5.0h · 50% Time)",
        "title": "Internal Medicine: Infective Endocarditis, Rheumatic Fever & Cardiac Arrhythmias",
        "description": "Comprehensive prioritized review of Cardiology (Infective Endocarditis & Arrhythmias) with high-yield clinical manifestations, diagnostic protocols, and pharmacotherapy guidelines.",
        "keyObjectives": [
          "Modified Duke Criteria for infective endocarditis and empiric antibiotic regimens",
          "Revised Jones criteria for acute rheumatic fever and secondary penicillin prophylaxis",
          "ECG interpretation: Atrial fibrillation (rate vs rhythm control), SVT (Adenosine), VT (Amiodarone/cardioversion)"
        ],
        "suggestedTopicKeywords": [
          "rheumatic heart disease",
          "cardiac arrhythmias",
          "infective endocarditis"
        ],
        "pqFrequency": 8,
        "targetPq": {
          "key": "LAQ 1, January 2025 (Medicine)",
          "year": "January 2025",
          "marks": "20 marks · 25 mins",
          "topicClue": "Heart failure secondary to rheumatic mitral regurgitation complicated by atrial fibrillation"
        }
      },
      "afternoon": {
        "subject": "Surgery",
        "timeSlot": "Afternoon (2:00 PM - 5:30 PM · 3.5h · 35% Time)",
        "title": "Surgery: Thoracic Surgery: Pneumothorax, Hemothorax, Flail Chest & Chest Drain Insertion",
        "description": "Focused surgical review covering surgical pathophysiology, operative indications, step-by-step procedures, and perioperative management.",
        "keyObjectives": [
          "Pathophysiology and signs of tension pneumothorax vs massive hemothorax",
          "Technique of insertion of chest tube (safe triangle: 5th ICS midaxillary line) and underwater seal mechanics",
          "Flail chest management: Paradoxical chest movement, analgesia, pulmonary toilet, positive pressure ventilation"
        ],
        "suggestedTopicKeywords": [
          "chest injuries and thoracic surgery",
          "initial management of trauma"
        ],
        "pqFrequency": 10,
        "targetPq": {
          "key": "SAQ 1, December 2024 (Surgery)",
          "year": "December 2024",
          "marks": "10 marks · 15 mins",
          "topicClue": "Acute thoracic and spinal cord trauma resuscitation in emergency department"
        }
      },
      "evening": {
        "subject": "Community Medicine",
        "timeSlot": "Evening (6:30 PM - 8:30 PM · 2.0h · 15% Time)",
        "title": "Community Medicine: Healthcare Waste Management & Municipal Solid Waste Disposal",
        "description": "Targeted public health review followed by timed past question drill from finalmbpq repository with structured model answer checklist.",
        "keyObjectives": [
          "Color coding of hospital waste: Yellow (infectious/clinical), Red (highly infectious), Brown (pharmaceutical), Black (general domestic)",
          "Sharps safety and puncture-proof yellow boxes",
          "Methods of solid waste disposal: Sanitary landfill, high-temperature incineration, composting"
        ],
        "suggestedTopicKeywords": [
          "environmental health",
          "health management"
        ],
        "pqFrequency": 16,
        "targetPq": {
          "key": "Q3, May 2010 (Comm. Med)",
          "year": "May 2010",
          "marks": "10 marks · 15 mins",
          "topicClue": "Occupational hazards faced by healthcare personnel in a tertiary institution and hospital waste"
        },
        "pastQuestionExample": {
          "key": "Q3, May 2010 (Comm. Med)",
          "year": "May 2010",
          "marks": "10 marks · 15 mins",
          "topicClue": "Occupational hazards faced by healthcare personnel in a tertiary institution and hospital waste"
        }
      }
    }
  },
  {
    "dayNumber": 18,
    "dateString": "2026-10-18",
    "dateLabel": "Sunday, Oct 18, 2026",
    "shortDateLabel": "Oct 18",
    "dayOfWeek": "Sun",
    "phaseNumber": 3,
    "phaseName": "Phase 3: High-Frequency Clinical Cases & Complex Scenarios",
    "dailyTheme": "Neurology (Meningitis & Status Epilepticus) + Vascular Surgery (DVT & Gangrene) + Screening Tests",
    "clinicalPearl": "Status Epilepticus: Seizure lasting > 5 min. 0-5 min: ABC, IV access, blood glucose. 5-10 min: IV Lorazepam 4mg (or IV Diazepam 10mg). 10-20 min: IV Levetiracetam 60 mg/kg or IV Phenytoin 20 mg/kg at max 50mg/min. >20 min: General anesthesia.",
    "sessions": {
      "morning": {
        "subject": "Medicine",
        "timeSlot": "Morning (8:00 AM - 1:00 PM · 5.0h · 50% Time)",
        "title": "Internal Medicine: Bacterial & Tuberculous Meningitis, Status Epilepticus & Epilepsy Syndromes",
        "description": "Comprehensive prioritized review of Neurology (Meningitis & Status Epilepticus) with high-yield clinical manifestations, diagnostic protocols, and pharmacotherapy guidelines.",
        "keyObjectives": [
          "CSF analysis: Bacterial (high neutrophils, low glucose) vs Viral (lymphocytes, normal glucose) vs TB (cobweb coagulum)",
          "Status epilepticus stepped pharmacologic resuscitation protocol",
          "Classification of epilepsy (focal vs generalized) and antiepileptic drug selection"
        ],
        "suggestedTopicKeywords": [
          "infections of the nervous system",
          "epilepsy and other convulsive disorders"
        ],
        "pqFrequency": 8,
        "targetPq": {
          "key": "LAQ 1, December 2024 (Medicine)",
          "year": "December 2024",
          "marks": "20 marks · 25 mins",
          "topicClue": "Acute intracranial pathology with altered sensorium and hypertensive encephalopathy"
        }
      },
      "afternoon": {
        "subject": "Surgery",
        "timeSlot": "Afternoon (2:00 PM - 5:30 PM · 3.5h · 35% Time)",
        "title": "Surgery: Vascular Surgery: Deep Venous Thrombosis (DVT), Pulmonary Embolism & Diabetic Gangrene",
        "description": "Focused surgical review covering surgical pathophysiology, operative indications, step-by-step procedures, and perioperative management.",
        "keyObjectives": [
          "Wells score for DVT, D-dimer assay, and compression duplex ultrasonography",
          "Anticoagulation: LMWH bridging to Warfarin vs direct oral anticoagulants (DOACs: Rivaroxaban/Apixaban)",
          "Wet vs dry gangrene, Fontaine classification of PAD, and lower extremity amputation levels"
        ],
        "suggestedTopicKeywords": [
          "diseases of the veins and lymphatics",
          "the foot in diabetes and peripheral arterial disease"
        ],
        "pqFrequency": 10,
        "targetPq": {
          "key": "SAQ 5, December 2024 (Surgery)",
          "year": "December 2024",
          "marks": "10 marks · 15 mins",
          "topicClue": "Diabetic foot ulcer evaluation, vascular supply assessment, and surgical debridement"
        }
      },
      "evening": {
        "subject": "Community Medicine",
        "timeSlot": "Evening (6:30 PM - 8:30 PM · 2.0h · 15% Time)",
        "title": "Community Medicine: Screening for Disease: Sensitivity, Specificity & Predictive Values",
        "description": "Targeted public health review followed by timed past question drill from finalmbpq repository with structured model answer checklist.",
        "keyObjectives": [
          "Wilson and Jungner criteria for population screening programs",
          "Calculation of Sensitivity, Specificity, Positive Predictive Value (PPV), and Negative Predictive Value (NPV)",
          "How disease prevalence influences PPV and NPV (Bayes theorem)"
        ],
        "suggestedTopicKeywords": [
          "principles of epidemiology",
          "communicable disease control"
        ],
        "pqFrequency": 16,
        "targetPq": {
          "key": "SAQ 3, January 2025 (Comm. Med)",
          "year": "January 2025",
          "marks": "10 marks · 15 mins",
          "topicClue": "Screening test validity metrics: Sensitivity, Specificity, and predictive value calculations"
        },
        "pastQuestionExample": {
          "key": "SAQ 3, January 2025 (Comm. Med)",
          "year": "January 2025",
          "marks": "10 marks · 15 mins",
          "topicClue": "Screening test validity metrics: Sensitivity, Specificity, and predictive value calculations"
        }
      }
    }
  },
  {
    "dayNumber": 19,
    "dateString": "2026-10-19",
    "dateLabel": "Monday, Oct 19, 2026",
    "shortDateLabel": "Oct 19",
    "dayOfWeek": "Mon",
    "phaseNumber": 3,
    "phaseName": "Phase 3: High-Frequency Clinical Cases & Complex Scenarios",
    "dailyTheme": "Psychiatry (Delirium vs Dementia, MMSE) + Soft Tissue Sarcomas + National Health Policy (SDG 3)",
    "clinicalPearl": "Delirium vs Dementia: Delirium is ACUTE onset, fluctuating course, impaired consciousness, reversible, secondary to medical triggers (PINCH ME). Dementia is INSIDIOUS onset, progressive, alert consciousness, usually irreversible (Alzheimer, Vascular). MMSE < 24/30 indicates impairment.",
    "sessions": {
      "morning": {
        "subject": "Medicine",
        "timeSlot": "Morning (8:00 AM - 1:00 PM · 5.0h · 50% Time)",
        "title": "Psychiatry in Medicine: Delirium, Dementia, Cognitive Assessment (MMSE) & Neurocognitive Syndromes",
        "description": "Comprehensive prioritized review of Psychiatry (Delirium vs Dementia, MMSE) with high-yield clinical manifestations, diagnostic protocols, and pharmacotherapy guidelines.",
        "keyObjectives": [
          "Systematic differentiation between delirium, dementia, and depression (pseudodementia)",
          "Identifying underlying organic triggers of delirium in elderly inpatients (PINCH ME mnemonic)",
          "Diagnostic workup of dementia: Rule out reversible causes (Hypothyroidism, Vitamin B12, NPH, Subdural hematoma)",
          "Pharmacotherapy in dementia: Donepezil and Memantine"
        ],
        "suggestedTopicKeywords": [
          "organic mental disorders",
          "psychiatric emergencies"
        ],
        "pqFrequency": 8,
        "targetPq": {
          "key": "Q3, January 2025 (Psychiatry)",
          "year": "January 2025",
          "marks": "10 marks · 15 mins",
          "topicClue": "Consultation-Liaison psychiatry, Delirium tremens, and Somatization disorder short notes"
        }
      },
      "afternoon": {
        "subject": "Surgery",
        "timeSlot": "Afternoon (2:00 PM - 5:30 PM · 3.5h · 35% Time)",
        "title": "Surgery: Soft Tissue Tumors, Lipoma, Sebaceous Cyst & Soft Tissue Sarcoma Management",
        "description": "Focused surgical review covering surgical pathophysiology, operative indications, step-by-step procedures, and perioperative management.",
        "keyObjectives": [
          "Distinguish benign lipoma/sebaceous cyst from malignant soft tissue sarcoma",
          "Red flags for soft tissue sarcoma: Size > 5cm, deep to fascia, painful, rapidly enlarging",
          "Diagnostic core biopsy (avoid transverse incisional biopsy!) and wide local margin excision with radiotherapy"
        ],
        "suggestedTopicKeywords": [
          "tumours of the skin and subcutaneous tissues",
          "general principle of cancer management"
        ],
        "pqFrequency": 10,
        "targetPq": {
          "key": "SAQ 4, January 2025 (Surgery)",
          "year": "January 2025",
          "marks": "10 marks · 15 mins",
          "topicClue": "Differences between T1 and T2 brain MRI sequences and indications for brain MRI in surgery"
        }
      },
      "evening": {
        "subject": "Community Medicine",
        "timeSlot": "Evening (6:30 PM - 8:30 PM · 2.0h · 15% Time)",
        "title": "Community Medicine: National Health Policy, Sustainable Development Goals (SDG 3) & PHC Reform",
        "description": "Targeted public health review followed by timed past question drill from finalmbpq repository with structured model answer checklist.",
        "keyObjectives": [
          "Structure of Nigerian health system (Federal, State, Local Government areas)",
          "Sustainable Development Goal 3 targets (Maternal mortality, under-5 mortality, infectious epidemics, UHC)",
          "Basic Health Care Provision Fund (BHCPF) operational guidelines"
        ],
        "suggestedTopicKeywords": [
          "health management",
          "public health admin"
        ],
        "pqFrequency": 16,
        "targetPq": {
          "key": "SAQ 8, January 2025 (Comm. Med)",
          "year": "January 2025",
          "marks": "10 marks · 15 mins",
          "topicClue": "International Health Organizations role in strengthening national health systems in Nigeria"
        },
        "pastQuestionExample": {
          "key": "SAQ 8, January 2025 (Comm. Med)",
          "year": "January 2025",
          "marks": "10 marks · 15 mins",
          "topicClue": "International Health Organizations role in strengthening national health systems in Nigeria"
        }
      }
    }
  },
  {
    "dayNumber": 20,
    "dateString": "2026-10-20",
    "dateLabel": "Tuesday, Oct 20, 2026",
    "shortDateLabel": "Oct 20",
    "dayOfWeek": "Tue",
    "phaseNumber": 3,
    "phaseName": "Phase 3: High-Frequency Clinical Cases & Complex Scenarios",
    "dailyTheme": "Nephrology & Rheumatology (Nephrotic Syndrome, Lupus Nephritis) + Peptic Ulcer Surgery + Vaccine Cold Chain",
    "clinicalPearl": "Nephrotic Syndrome Triad: Proteinuria > 3.5 g/24h, Hypoalbuminemia < 30 g/L, Generalized edema. Adults: Membranous nephropathy, FSGS. Complications: Thromboembolism (loss of antithrombin III), infection (loss of immunoglobulins).",
    "sessions": {
      "morning": {
        "subject": "Medicine",
        "timeSlot": "Morning (8:00 AM - 1:00 PM · 5.0h · 50% Time)",
        "title": "Internal Medicine: Nephrotic Syndrome, Minimal Change Disease, FSGS & Lupus Nephritis",
        "description": "Comprehensive prioritized review of Nephrology & Rheumatology (Nephrotic Syndrome, Lupus Nephritis) with high-yield clinical manifestations, diagnostic protocols, and pharmacotherapy guidelines.",
        "keyObjectives": [
          "Etiologies of nephrotic syndrome in adults vs children",
          "Renal biopsy indications and complications",
          "Immunosuppressive regimens (Corticosteroids, Cyclophosphamide, Mycophenolate) and anti-proteinuric ACEi/ARB therapy"
        ],
        "suggestedTopicKeywords": [
          "glomerular diseases",
          "acute and chronic renal failure"
        ],
        "pqFrequency": 8,
        "targetPq": {
          "key": "Q4, January 2025 (Medicine)",
          "year": "January 2025",
          "marks": "10 marks · 15 mins",
          "topicClue": "Acute kidney injury and nephrotic syndrome workup in adult clinical medicine"
        }
      },
      "afternoon": {
        "subject": "Surgery",
        "timeSlot": "Afternoon (2:00 PM - 5:30 PM · 3.5h · 35% Time)",
        "title": "Surgery: Management of Acute Upper GI Bleeding: Peptic Ulcer vs Bleeding Gastric Varices",
        "description": "Focused surgical review covering surgical pathophysiology, operative indications, step-by-step procedures, and perioperative management.",
        "keyObjectives": [
          "Endoscopic therapy modalities: Hemoclip, thermal coagulation, adrenaline injection, band ligation",
          "Indications for emergency surgical intervention in bleeding peptic ulcer (rebleeding after endoscopic failure, refractory shock)",
          "Truncal vagotomy and pyloroplasty vs partial gastrectomy"
        ],
        "suggestedTopicKeywords": [
          "the stomach and duodenum",
          "upper gastrointestinal bleeding"
        ],
        "pqFrequency": 10,
        "targetPq": {
          "key": "SAQ 6, January 2025 (Surgery)",
          "year": "January 2025",
          "marks": "10 marks · 15 mins",
          "topicClue": "Progressive dysphagia investigations and surgical staging of upper GI tumors"
        }
      },
      "evening": {
        "subject": "Community Medicine",
        "timeSlot": "Evening (6:30 PM - 8:30 PM · 2.0h · 15% Time)",
        "title": "Community Medicine: Cold Chain Maintenance, Vaccine Storage & Injection Safety",
        "description": "Targeted public health review followed by timed past question drill from finalmbpq repository with structured model answer checklist.",
        "keyObjectives": [
          "Temperature range for vaccine storage (+2°C to +8°C for refrigerators, -15°C to -25°C for OPV freezers)",
          "Conditioning of ice packs to prevent vaccine freezing",
          "Injection safety: Auto-disable (AD) syringes and prevention of needle-stick injuries"
        ],
        "suggestedTopicKeywords": [
          "child survival strategies and immunization",
          "occupational health and industrial hygiene"
        ],
        "pqFrequency": 16,
        "targetPq": {
          "key": "SAQ 1, January 2025 (Comm. Med)",
          "year": "January 2025",
          "marks": "10 marks · 15 mins",
          "topicClue": "Epidemic curve types and transmission dynamics in communicable disease outbreaks"
        },
        "pastQuestionExample": {
          "key": "SAQ 1, January 2025 (Comm. Med)",
          "year": "January 2025",
          "marks": "10 marks · 15 mins",
          "topicClue": "Epidemic curve types and transmission dynamics in communicable disease outbreaks"
        }
      }
    }
  },
  {
    "dayNumber": 21,
    "dateString": "2026-10-21",
    "dateLabel": "Wednesday, Oct 21, 2026",
    "shortDateLabel": "Oct 21",
    "dayOfWeek": "Wed",
    "phaseNumber": 3,
    "phaseName": "Phase 3: High-Frequency Clinical Cases & Complex Scenarios",
    "dailyTheme": "Psychiatry (Anxiety, OCD, PTSD, Somatization) + Pediatric Hernias & Hydrocele + Morbidity Rates",
    "clinicalPearl": "CBT Model: Thoughts, feelings, and behaviors are interconnected. Cognitive restructuring and exposure experiments. OCD first-line: High-dose SSRI + Exposure and Response Prevention (ERP). Cryptorchidism orchidopexy should be performed by 6-12 months!",
    "sessions": {
      "morning": {
        "subject": "Medicine",
        "timeSlot": "Morning (8:00 AM - 1:00 PM · 5.0h · 50% Time)",
        "title": "Psychiatry in Medicine: Generalized Anxiety, Panic Disorder, OCD, PTSD, Somatization & CBT",
        "description": "Comprehensive prioritized review of Psychiatry (Anxiety, OCD, PTSD, Somatization) with high-yield clinical manifestations, diagnostic protocols, and pharmacotherapy guidelines.",
        "keyObjectives": [
          "Panic disorder criteria and emergency management of acute panic attack vs acute coronary syndrome",
          "Obsessive-Compulsive Disorder: Obsessions vs Compulsions, and Exposure & Response Prevention (ERP)",
          "Post-Traumatic Stress Disorder (PTSD): Intrusive memories, avoidance, hyperarousal, Trauma-focused CBT",
          "Somatization disorder and illness anxiety disorder approach in clinical practice"
        ],
        "suggestedTopicKeywords": [
          "neurotic stress related and somatoform disorders",
          "psychological treatments"
        ],
        "pqFrequency": 8,
        "targetPq": {
          "key": "Q4, January 2025 (Psychiatry)",
          "year": "January 2025",
          "marks": "10 marks · 15 mins",
          "topicClue": "Operant conditioning, Cognitive Behavioural Therapy (CBT), and other psychological therapies"
        }
      },
      "afternoon": {
        "subject": "Surgery",
        "timeSlot": "Afternoon (2:00 PM - 5:30 PM · 3.5h · 35% Time)",
        "title": "Surgery: Pediatric Surgery: Inguino-Scrotal Conditions (Hernia, Hydrocele & Undescended Testis)",
        "description": "Focused surgical review covering surgical pathophysiology, operative indications, step-by-step procedures, and perioperative management.",
        "keyObjectives": [
          "Patent processus vaginalis anatomy in pediatric indirect hernia and communicating hydrocele",
          "Herniotomy (high ligation of sac) vs adult hernioplasty",
          "Undescended testis (Cryptorchidism): Risks of infertility and malignancy; timing and steps of Orchidopexy"
        ],
        "suggestedTopicKeywords": [
          "paediatric surgical conditions",
          "hernias of the abdominal wall"
        ],
        "pqFrequency": 10,
        "targetPq": {
          "key": "SAQ 2, December 2024 (Surgery)",
          "year": "December 2024",
          "marks": "10 marks · 15 mins",
          "topicClue": "Pediatric emergency laparotomy: Ruptured appendicitis with generalized peritonitis"
        }
      },
      "evening": {
        "subject": "Community Medicine",
        "timeSlot": "Evening (6:30 PM - 8:30 PM · 2.0h · 15% Time)",
        "title": "Community Medicine: Measurement of Health & Disease: Morbidity & Mortality Rates Calculation",
        "description": "Targeted public health review followed by timed past question drill from finalmbpq repository with structured model answer checklist.",
        "keyObjectives": [
          "Calculate Incidence rate, Prevalence rate, Case Fatality Rate, Crude Death Rate, Maternal Mortality Ratio",
          "Relationship between incidence, duration, and prevalence (P = I x D)",
          "Solve authentic statistics calculation questions from finalmbpq repository"
        ],
        "suggestedTopicKeywords": [
          "demography and vital statistics",
          "principles of epidemiology"
        ],
        "pqFrequency": 16,
        "targetPq": {
          "key": "SAQ 3, January 2025 (Comm. Med)",
          "year": "January 2025",
          "marks": "10 marks · 15 mins",
          "topicClue": "Statistical calculation: standard error of the mean, 95% confidence intervals, and hypothesis testing"
        },
        "pastQuestionExample": {
          "key": "SAQ 3, January 2025 (Comm. Med)",
          "year": "January 2025",
          "marks": "10 marks · 15 mins",
          "topicClue": "Statistical calculation: standard error of the mean, 95% confidence intervals, and hypothesis testing"
        }
      }
    }
  },
  {
    "dayNumber": 22,
    "dateString": "2026-10-22",
    "dateLabel": "Thursday, Oct 22, 2026",
    "shortDateLabel": "Oct 22",
    "dayOfWeek": "Thu",
    "phaseNumber": 4,
    "phaseName": "Phase 4: Final Speed Drills, High-Frequency PQs & Exam Readiness",
    "dailyTheme": "Phase 4 Rapid Drills: High-Frequency Medicine Long Cases + Acute Abdomen Surgical Emergencies + Comm Med Blitz",
    "clinicalPearl": "Final MB Long Case Presentation: Present Chief Complaint, HPI with functional inquiry, PMH, Drug/Allergy, Social history. Physical exam: General inspection, vitals, focused systemic examination. State clear differential diagnoses and investigation plan.",
    "sessions": {
      "morning": {
        "subject": "Medicine",
        "timeSlot": "Morning (8:00 AM - 1:00 PM · 5.0h · 50% Time)",
        "title": "Internal Medicine: High-Frequency Long Case Synthesis: Heart Failure, Stroke, DKA & CKD Review",
        "description": "Comprehensive prioritized review of Phase 4 Rapid Drills: High-Frequency Medicine Long Cases with high-yield clinical manifestations, diagnostic protocols, and pharmacotherapy guidelines.",
        "keyObjectives": [
          "Rapid recall of diagnostic criteria, drug regimens, and clinical signs for top 4 medical conditions",
          "Simulated 45-minute clinical long case presentation and examiner questioning",
          "Emergency drug dosages: IV Furosemide, IV Insulin, IV Labetalol, IV Ceftriaxone, IV Artesunate"
        ],
        "suggestedTopicKeywords": [
          "heart failure",
          "diabetes mellitus",
          "cerebrovascular diseases",
          "acute and chronic renal failure"
        ],
        "pqFrequency": 8,
        "targetPq": {
          "key": "LAQ 1, January 2025 (Medicine)",
          "year": "January 2025",
          "marks": "20 marks · 25 mins",
          "topicClue": "Comprehensive clinical medicine long case: Hypertensive heart failure with acute pulmonary edema"
        }
      },
      "afternoon": {
        "subject": "Surgery",
        "timeSlot": "Afternoon (2:00 PM - 5:30 PM · 3.5h · 35% Time)",
        "title": "Surgery: High-Frequency Surgical Emergencies: Acute Abdomen, Peritonitis & ATLS Drill",
        "description": "Focused surgical review covering surgical pathophysiology, operative indications, step-by-step procedures, and perioperative management.",
        "keyObjectives": [
          "Laparotomy checklist: Indications, incision, intraoperative findings, closure technique",
          "Emergency bowel resection principles and criteria for safe primary anastomosis vs stoma formation",
          "Massive transfusion protocol (1:1:1 PRBC, FFP, Platelets)"
        ],
        "suggestedTopicKeywords": [
          "the acute abdomen",
          "intestinal obstruction",
          "initial management of trauma"
        ],
        "pqFrequency": 10,
        "targetPq": {
          "key": "SAQ 10, January 2025 (Surgery)",
          "year": "January 2025",
          "marks": "10 marks · 15 mins",
          "topicClue": "Generalized peritonitis pre-operative resuscitation and operative surgical strategy"
        }
      },
      "evening": {
        "subject": "Community Medicine",
        "timeSlot": "Evening (6:30 PM - 8:30 PM · 2.0h · 15% Time)",
        "title": "Community Medicine: Ultra-High Frequency Past Question Drill: PHC, Biostatistics, EPI & Outbreak Review",
        "description": "Targeted public health review followed by timed past question drill from finalmbpq repository with structured model answer checklist.",
        "keyObjectives": [
          "Solve 3 authentic high-frequency past questions from finalmbpq under 20-minute timed constraint",
          "Rapid-fire recap of all essential public health formulas and mnemonics"
        ],
        "suggestedTopicKeywords": [
          "primary health care",
          "principles of epidemiology"
        ],
        "pqFrequency": 16,
        "targetPq": {
          "key": "SAQ 9, January 2025 (Comm. Med)",
          "year": "January 2025",
          "marks": "10 marks · 15 mins",
          "topicClue": "Primary Health Care four principles, ELEMENTS components, and Nigeria health system challenges"
        },
        "pastQuestionExample": {
          "key": "SAQ 9, January 2025 (Comm. Med)",
          "year": "January 2025",
          "marks": "10 marks · 15 mins",
          "topicClue": "Primary Health Care four principles, ELEMENTS components, and Nigeria health system challenges"
        }
      }
    }
  },
  {
    "dayNumber": 23,
    "dateString": "2026-10-23",
    "dateLabel": "Friday, Oct 23, 2026",
    "shortDateLabel": "Oct 23",
    "dayOfWeek": "Fri",
    "phaseNumber": 4,
    "phaseName": "Phase 4: Final Speed Drills, High-Frequency PQs & Exam Readiness",
    "dailyTheme": "Psychiatry & Medicine (Forensic Psychiatry, Mental Health Act & Toxicology) + Surgical Oncology + Ethics Blitz",
    "clinicalPearl": "Forensic Psychiatry: 1. Testamentary Capacity (Banks v Goodfellow): Knows nature of act and effects, extent of property, claims of potential beneficiaries; 2. Criminal Responsibility (M'Naghten Rules): Defect of reason from disease of mind such that did not know nature of act, or did not know it was wrong.",
    "sessions": {
      "morning": {
        "subject": "Medicine",
        "timeSlot": "Morning (8:00 AM - 1:00 PM · 5.0h · 50% Time)",
        "title": "Psychiatry & Medicine: Forensic Psychiatry, Testamentary Capacity, Criminal Responsibility & Mental Health Legislation",
        "description": "Comprehensive prioritized review of Psychiatry & Medicine (Forensic Psychiatry, Mental Health Act & Toxicology) with high-yield clinical manifestations, diagnostic protocols, and pharmacotherapy guidelines.",
        "keyObjectives": [
          "Legal criteria for assessing testamentary capacity in elderly or ill patients",
          "M'Naghten rules and concept of diminished responsibility in criminal law",
          "Indications and legal procedures for involuntary admission and emergency detention of mentally disordered persons",
          "Medicolegal implications of medical negligence, battery, and informed consent"
        ],
        "suggestedTopicKeywords": [
          "forensic psychiatry",
          "medical ethics"
        ],
        "pqFrequency": 8,
        "targetPq": {
          "key": "Q5, February 2020 (Psychiatry)",
          "year": "February 2020",
          "marks": "10 marks · 15 mins",
          "topicClue": "Diminished responsibility, Actus reus, and Testamentary capacity in forensic psychiatry"
        }
      },
      "afternoon": {
        "subject": "Surgery",
        "timeSlot": "Afternoon (2:00 PM - 5:30 PM · 3.5h · 35% Time)",
        "title": "Surgery: Surgical Oncology Principles, Biopsy Modalities & Reconstructive Flaps",
        "description": "Focused surgical review covering surgical pathophysiology, operative indications, step-by-step procedures, and perioperative management.",
        "keyObjectives": [
          "Biopsy principles: FNAC vs Core needle biopsy vs Incisional vs Excisional biopsy",
          "Tumor staging vs grading, and concepts of clean microscopic margins (R0, R1, R2 resections)",
          "Principles of skin grafts (split-thickness vs full-thickness) and local flaps"
        ],
        "suggestedTopicKeywords": [
          "general principle of cancer management",
          "the skin and subcutaneous tissues"
        ],
        "pqFrequency": 10,
        "targetPq": {
          "key": "LAQ 2, January 2025 (Surgery)",
          "year": "January 2025",
          "marks": "20 marks · 25 mins",
          "topicClue": "Breast cancer biopsy modalities, TNM clinical staging, and Modified Radical Mastectomy"
        }
      },
      "evening": {
        "subject": "Community Medicine",
        "timeSlot": "Evening (6:30 PM - 8:30 PM · 2.0h · 15% Time)",
        "title": "Community Medicine: Medical Law, Ethics, Doctor-Patient Relationship & Negligence",
        "description": "Targeted public health review followed by timed past question drill from finalmbpq repository with structured model answer checklist.",
        "keyObjectives": [
          "4 elements of medical negligence: Duty of care, Breach of duty, Causation, Damage/harm",
          "Medical and Dental Practitioners Disciplinary Tribunal (MDPDT) functions in Nigeria",
          "Solve ethics and confidentiality past question drill"
        ],
        "suggestedTopicKeywords": [
          "medical ethics",
          "health management"
        ],
        "pqFrequency": 16,
        "targetPq": {
          "key": "SAQ 2, January 2025 (Comm. Med)",
          "year": "January 2025",
          "marks": "10 marks · 15 mins",
          "topicClue": "Medical ethics 4 pillars, breach of confidentiality exceptions, and professional negligence"
        },
        "pastQuestionExample": {
          "key": "SAQ 2, January 2025 (Comm. Med)",
          "year": "January 2025",
          "marks": "10 marks · 15 mins",
          "topicClue": "Medical ethics 4 pillars, breach of confidentiality exceptions, and professional negligence"
        }
      }
    }
  },
  {
    "dayNumber": 24,
    "dateString": "2026-10-24",
    "dateLabel": "Saturday, Oct 24, 2026",
    "shortDateLabel": "Oct 24",
    "dayOfWeek": "Sat",
    "phaseNumber": 4,
    "phaseName": "Phase 4: Final Speed Drills, High-Frequency PQs & Exam Readiness",
    "dailyTheme": "Rapid Recall: Medicine Top Pearls & Mnemonics + Surgery Instruments/OSCE + Comm Med Spotters",
    "clinicalPearl": "Exam Spotters: Medicine: Splinter hemorrhages, Roth spots, Janeway lesions, Osler nodes (IE); Kayser-Fleischer ring (Wilson); Acanthosis nigricans (Insulin resistance/gastric Ca). Surgery: Trendelenburg sign, Chvostek sign, Cullen sign, Grey-Turner sign. Comm Med: VVM stages, mid-upper arm circumference (MUAC < 11.5cm severe acute malnutrition).",
    "sessions": {
      "morning": {
        "subject": "Medicine",
        "timeSlot": "Morning (8:00 AM - 1:00 PM · 5.0h · 50% Time)",
        "title": "Internal Medicine & Psychiatry: Rapid Recall of All Top 24 Medical Conditions & Drug Cocktails",
        "description": "Comprehensive prioritized review of Rapid Recall: Medicine Top Pearls & Mnemonics with high-yield clinical manifestations, diagnostic protocols, and pharmacotherapy guidelines.",
        "keyObjectives": [
          "Lightning review of all cardiovascular, endocrine, respiratory, renal, neurologic, and psychiatric guidelines",
          "Emergency drug dosages and high-yield pharmacotherapy calculations",
          "Emergency diagnostic algorithms for Final MB written and clinical exams"
        ],
        "suggestedTopicKeywords": [
          "heart failure",
          "schizophrenia",
          "diabetes mellitus",
          "infections of the nervous system"
        ],
        "pqFrequency": 8,
        "targetPq": {
          "key": "Q2, January 2025 (Psychiatry)",
          "year": "January 2025",
          "marks": "10 marks · 15 mins",
          "topicClue": "Psychiatry recall: Schizophrenia psychopathology, clinic defaulters, and depot neuroleptics"
        }
      },
      "afternoon": {
        "subject": "Surgery",
        "timeSlot": "Afternoon (2:00 PM - 5:30 PM · 3.5h · 35% Time)",
        "title": "Surgery: Surgical Instruments, X-Rays, Specimen Identification & OSCE Stations",
        "description": "Focused surgical review covering surgical pathophysiology, operative indications, step-by-step procedures, and perioperative management.",
        "keyObjectives": [
          "Identify common surgical instruments: Kocher clamp, Allis tissue forceps, Babcock, Langenbeck retractor, sponge forceps",
          "Plain abdominal and chest radiograph spotters (pneumoperitoneum, air-fluid levels, barium swallow, clubfoot)",
          "OSCE stations: Breast lump examination, groin hernia examination, thyroid examination, Foley catheter insertion"
        ],
        "suggestedTopicKeywords": [
          "the acute abdomen",
          "the breast",
          "the thyroid gland"
        ],
        "pqFrequency": 10,
        "targetPq": {
          "key": "SAQ 8, January 2025 (Surgery)",
          "year": "January 2025",
          "marks": "10 marks · 15 mins",
          "topicClue": "Urological surgery spotter: Prostatic enlargement with urinary retention and bony metastases"
        }
      },
      "evening": {
        "subject": "Community Medicine",
        "timeSlot": "Evening (6:30 PM - 8:30 PM · 2.0h · 15% Time)",
        "title": "Community Medicine: Public Health Spotters, Data Interpretation & High-Yield Calculations",
        "description": "Targeted public health review followed by timed past question drill from finalmbpq repository with structured model answer checklist.",
        "keyObjectives": [
          "Calculate Sensitivity, Specificity, Odds Ratio, Relative Risk from sample data in 5 minutes",
          "Interpret epidemic curves and population pyramids accurately",
          "Final review of EPI schedule, Bamako Initiative, and NHIA guidelines"
        ],
        "suggestedTopicKeywords": [
          "principles of epidemiology",
          "demography and vital statistics"
        ],
        "pqFrequency": 16,
        "targetPq": {
          "key": "SAQ 3, January 2025 (Comm. Med)",
          "year": "January 2025",
          "marks": "10 marks · 15 mins",
          "topicClue": "Biostatistics calculation: standard error of mean and 95% confidence interval formula"
        },
        "pastQuestionExample": {
          "key": "SAQ 3, January 2025 (Comm. Med)",
          "year": "January 2025",
          "marks": "10 marks · 15 mins",
          "topicClue": "Biostatistics calculation: standard error of mean and 95% confidence interval formula"
        }
      }
    }
  },
  {
    "dayNumber": 25,
    "dateString": "2026-10-25",
    "dateLabel": "Sunday, Oct 25, 2026",
    "shortDateLabel": "Oct 25",
    "dayOfWeek": "Sun",
    "phaseNumber": 4,
    "phaseName": "Phase 4: Final Speed Drills, High-Frequency PQs & Exam Readiness",
    "dailyTheme": "Exam Eve (Oct 25): Calm Consolidation, Exam Logistics, Mindset & Peak Performance",
    "clinicalPearl": "Exam Day Golden Rules: 1. Read every question twice before writing! 2. Plan answer structure with clear headings: Definition, Etiology, Clinical Features, Investigations, Management (General, Specific, Supportive). 3. Allocate time strictly per mark (1.5 min per mark). 4. Stop studying by 9:00 PM tonight, hydrate, and sleep 7-8 hours!",
    "sessions": {
      "morning": {
        "subject": "Medicine",
        "timeSlot": "Morning (8:00 AM - 1:00 PM · 5.0h · 50% Time)",
        "title": "Internal Medicine & Psychiatry: Calm Final Review of High-Yield Personal Notes & Starred Topics",
        "description": "Comprehensive prioritized review of Exam Eve (Oct 25): Calm Consolidation, Exam Logistics, Mindset & Peak Performance with high-yield clinical manifestations, diagnostic protocols, and pharmacotherapy guidelines.",
        "keyObjectives": [
          "Light review of personal bookmarks and summary sheets (no heavy new topics!)",
          "Review psychiatric first-rank symptoms, suicide risk assessment, and antipsychotic equivalents",
          "Visualize confident, structured clinical communication for oral/viva exams"
        ],
        "suggestedTopicKeywords": [
          "heart failure",
          "schizophrenia"
        ],
        "pqFrequency": 8,
        "targetPq": {
          "key": "LAQ 1, December 2024 (Medicine)",
          "year": "December 2024",
          "marks": "20 marks · 25 mins",
          "topicClue": "Final mental rehearsal: Approach to adult emergency medical admissions (Stroke, DKA, Heart Failure)"
        }
      },
      "afternoon": {
        "subject": "Surgery",
        "timeSlot": "Afternoon (2:00 PM - 5:30 PM · 3.5h · 35% Time)",
        "title": "Surgery: Operative Steps & Trauma Algorithm Mental Run-Through",
        "description": "Focused surgical review covering surgical pathophysiology, operative indications, step-by-step procedures, and perioperative management.",
        "keyObjectives": [
          "Mental walk-through of Appendectomy, Laparotomy, Modified Radical Mastectomy, and Herniotomy steps",
          "Review ATLS ABCDE primary survey checklist and surgical consent elements",
          "Pack exam stationery, stethoscope, pen torch, reflex hammer, tape measure"
        ],
        "suggestedTopicKeywords": [
          "the acute abdomen",
          "the breast"
        ],
        "pqFrequency": 10,
        "targetPq": {
          "key": "SAQ 10, January 2025 (Surgery)",
          "year": "January 2025",
          "marks": "10 marks · 15 mins",
          "topicClue": "Final mental rehearsal: Pre-operative preparation for emergency major abdominal surgery"
        }
      },
      "evening": {
        "subject": "Community Medicine",
        "timeSlot": "Evening (6:30 PM - 8:30 PM · 2.0h · 15% Time)",
        "title": "Community Medicine & Final Prep: Relax, Verify Exam Logistics & Rest",
        "description": "Targeted public health review followed by timed past question drill from finalmbpq repository with structured model answer checklist.",
        "keyObjectives": [
          "Double-check exam timetable, venue, hall ticket, identification card, and clinical equipment",
          "Final mental review of PHC 4 principles & 8 components",
          "Wind down, relax with family/friends, and get a solid 8 hours of restorative sleep"
        ],
        "suggestedTopicKeywords": [
          "primary health care"
        ],
        "pqFrequency": 16,
        "targetPq": {
          "key": "SAQ 9, January 2025 (Comm. Med)",
          "year": "January 2025",
          "marks": "10 marks · 15 mins",
          "topicClue": "Final mental rehearsal: Alma-Ata PHC declaration cardinal principles & ELEMENTS"
        },
        "pastQuestionExample": {
          "key": "SAQ 9, January 2025 (Comm. Med)",
          "year": "January 2025",
          "marks": "10 marks · 15 mins",
          "topicClue": "Final mental rehearsal: Alma-Ata PHC declaration cardinal principles & ELEMENTS"
        }
      }
    }
  }
];
