import { SubjectType, StudyPriority, Topic, StudyStatus } from '../types';

// Raw clinical syllabus dataset directly transcribed from MBBS postings (LAUTECH, MB4)
export const rawSyllabusData: Omit<Topic, 'id' | 'status'>[] = [
  // ================= MEDICINE 1 (M1) =================
  {
    subject: SubjectType.MEDICINE,
    batch: "M1",
    topicName: "Introduction to Medicine & Clinical Methods",
    lecturer: "Prof. O.E. Ayodele",
    subspecialty: "General/Multisystem",
    priority: StudyPriority.ADVANCE_PREP,
    batchPriority: 1,
    highYield: false
  },
  {
    subject: SubjectType.MEDICINE,
    batch: "M1",
    topicName: "Approach to Cardiovascular Diseases",
    lecturer: "Prof. A.A. Akintunde",
    subspecialty: "Cardiology",
    priority: StudyPriority.ADVANCE_PREP,
    batchPriority: 1,
    highYield: true
  },
  {
    subject: SubjectType.MEDICINE,
    batch: "M1",
    topicName: "Hypertension & Hypertensive Emergencies",
    lecturer: "Dr. Shitu",
    subspecialty: "Cardiology",
    priority: StudyPriority.ADVANCE_PREP,
    batchPriority: 1,
    highYield: true
  },
  {
    subject: SubjectType.MEDICINE,
    batch: "M1",
    topicName: "Rheumatic Heart Disease & Infective Endocarditis",
    lecturer: "Prof. A.A. Akintunde",
    subspecialty: "Cardiology",
    priority: StudyPriority.ADVANCE_PREP,
    batchPriority: 1,
    highYield: true
  },
  {
    subject: SubjectType.MEDICINE,
    batch: "M1",
    topicName: "Approach to Kidney Diseases",
    lecturer: "Prof. O.E. Ayodele",
    subspecialty: "Nephrology",
    priority: StudyPriority.ADVANCE_PREP,
    batchPriority: 1,
    highYield: true
  },
  {
    subject: SubjectType.MEDICINE,
    batch: "M1",
    topicName: "Chronic Kidney Disease (CKD)",
    lecturer: "Prof. O.E. Ayodele",
    subspecialty: "Nephrology",
    priority: StudyPriority.ADVANCE_PREP,
    batchPriority: 1,
    highYield: true
  },
  {
    subject: SubjectType.MEDICINE,
    batch: "M1",
    topicName: "Approach to Endocrine Disorders",
    lecturer: "Prof. M.A. Olamoyegun",
    subspecialty: "Endocrinology",
    priority: StudyPriority.ADVANCE_PREP,
    batchPriority: 1,
    highYield: true
  },
  {
    subject: SubjectType.MEDICINE,
    batch: "M1",
    topicName: "Diabetes Mellitus: Clinical Presentation & Diagnosis",
    lecturer: "Prof. M.A. Olamoyegun",
    subspecialty: "Endocrinology",
    priority: StudyPriority.ADVANCE_PREP,
    batchPriority: 1,
    highYield: true
  },
  {
    subject: SubjectType.MEDICINE,
    batch: "M1",
    topicName: "Approach to Neurological Diseases",
    lecturer: "Dr. Shitu",
    subspecialty: "Neurology",
    priority: StudyPriority.ADVANCE_PREP,
    batchPriority: 1,
    highYield: true
  },
  {
    subject: SubjectType.MEDICINE,
    batch: "M1",
    topicName: "Approach to Stroke & TIA",
    lecturer: "Dr. Shitu",
    subspecialty: "Neurology",
    priority: StudyPriority.ADVANCE_PREP,
    batchPriority: 1,
    highYield: true
  },
  {
    subject: SubjectType.MEDICINE,
    batch: "M1",
    topicName: "Approach to Gastrointestinal Diseases",
    lecturer: "Dr. M.M. Oje",
    subspecialty: "GI & Hepatology",
    priority: StudyPriority.ADVANCE_PREP,
    batchPriority: 1,
    highYield: false
  },
  {
    subject: SubjectType.MEDICINE,
    batch: "M1",
    topicName: "Viral Hepatitis Profile",
    lecturer: "Dr. M.M. Oje",
    subspecialty: "GI & Hepatology",
    priority: StudyPriority.ADVANCE_PREP,
    batchPriority: 1,
    highYield: false
  },
  {
    subject: SubjectType.MEDICINE,
    batch: "M1",
    topicName: "Approach to Respiratory Diseases & Cough",
    lecturer: "Prof. M.O. Tanimowo",
    subspecialty: "Respiratory",
    priority: StudyPriority.ADVANCE_PREP,
    batchPriority: 1,
    highYield: false
  },
  {
    subject: SubjectType.MEDICINE,
    batch: "M1",
    topicName: "Pulmonary Tuberculosis (PTB)",
    lecturer: "Prof. M.O. Tanimowo",
    subspecialty: "Respiratory",
    priority: StudyPriority.ADVANCE_PREP,
    batchPriority: 1,
    highYield: false
  },
  {
    subject: SubjectType.MEDICINE,
    batch: "M1",
    topicName: "Malaria & Severe Plasmodium Infection",
    lecturer: "Prof. A.A. Akintunde",
    subspecialty: "Infectious Disease",
    priority: StudyPriority.ADVANCE_PREP,
    batchPriority: 1,
    highYield: false
  },
  {
    subject: SubjectType.MEDICINE,
    batch: "M1",
    topicName: "Sepsis & Septic Shock Management",
    lecturer: "Dr. O. Oni",
    subspecialty: "Infectious Disease",
    priority: StudyPriority.ADVANCE_PREP,
    batchPriority: 1,
    highYield: false
  },
  {
    subject: SubjectType.MEDICINE,
    batch: "M1",
    topicName: "Anaemias & Haemoglobinopathies",
    lecturer: "Dr. G.M. Israel",
    subspecialty: "Haematology",
    priority: StudyPriority.ADVANCE_PREP,
    batchPriority: 1,
    highYield: false
  },

  // ================= MEDICINE 2 (M2) =================
  // Medicine 2 and Medicine 3 topics rank higher (batchPriority: 2) than M1
  {
    subject: SubjectType.MEDICINE,
    batch: "M2",
    topicName: "Heart Failure: Management & Diagnostics",
    lecturer: "Prof. A.A. Akintunde",
    subspecialty: "Cardiology",
    priority: StudyPriority.ADVANCE_PREP,
    batchPriority: 2,
    highYield: true
  },
  {
    subject: SubjectType.MEDICINE,
    batch: "M2",
    topicName: "Valvular Heart Diseases",
    lecturer: "Prof. A.A. Akintunde",
    subspecialty: "Cardiology",
    priority: StudyPriority.ADVANCE_PREP,
    batchPriority: 2,
    highYield: true
  },
  {
    subject: SubjectType.MEDICINE,
    batch: "M2",
    topicName: "Approach to Stroke & TIA", // Duplicate to test deduplication (M2 is higher than M1)
    lecturer: "Dr. O. Oni", // Different lecturer to test merge
    subspecialty: "Neurology",
    priority: StudyPriority.ADVANCE_PREP,
    batchPriority: 2,
    highYield: true
  },
  {
    subject: SubjectType.MEDICINE,
    batch: "M2",
    topicName: "Acute Kidney Injury (AKI)",
    lecturer: "Dr. Shitu",
    subspecialty: "Nephrology",
    priority: StudyPriority.ADVANCE_PREP,
    batchPriority: 2,
    highYield: true
  },
  {
    subject: SubjectType.MEDICINE,
    batch: "M2",
    topicName: "Glomerulonephritis & Nephrotic Syndrome",
    lecturer: "Prof. O.E. Ayodele",
    subspecialty: "Nephrology",
    priority: StudyPriority.ADVANCE_PREP,
    batchPriority: 2,
    highYield: true
  },
  {
    subject: SubjectType.MEDICINE,
    batch: "M2",
    topicName: "Acute & Chronic Complications of DM",
    lecturer: "Prof. M.A. Olamoyegun",
    subspecialty: "Endocrinology",
    priority: StudyPriority.ADVANCE_PREP,
    batchPriority: 2,
    highYield: true
  },
  {
    subject: SubjectType.MEDICINE,
    batch: "M2",
    topicName: "Thyroid Disorders (Thyrotoxicosis & Hypothyroidism)",
    lecturer: "Prof. M.A. Olamoyegun",
    subspecialty: "Endocrinology",
    priority: StudyPriority.ADVANCE_PREP,
    batchPriority: 2,
    highYield: true
  },
  {
    subject: SubjectType.MEDICINE,
    batch: "M2",
    topicName: "Adrenal Gland Disorders & Cushing's",
    lecturer: "Prof. M.A. Olamoyegun",
    subspecialty: "Endocrinology",
    priority: StudyPriority.ADVANCE_PREP,
    batchPriority: 2,
    highYield: true
  },
  {
    subject: SubjectType.MEDICINE,
    batch: "M2",
    topicName: "Epilepsy & Seizure Disorders",
    lecturer: "Dr. Shitu",
    subspecialty: "Neurology",
    priority: StudyPriority.ADVANCE_PREP,
    batchPriority: 2,
    highYield: true
  },
  {
    subject: SubjectType.MEDICINE,
    batch: "M2",
    topicName: "Peptic Ulcer Disease & GERD",
    lecturer: "Dr. M.M. Oje",
    subspecialty: "GI & Hepatology",
    priority: StudyPriority.ADVANCE_PREP,
    batchPriority: 2,
    highYield: false
  },
  {
    subject: SubjectType.MEDICINE,
    batch: "M2",
    topicName: "Cirrhosis & Portal Hypertension",
    lecturer: "Dr. M.M. Oje",
    subspecialty: "GI & Hepatology",
    priority: StudyPriority.ADVANCE_PREP,
    batchPriority: 2,
    highYield: false
  },
  {
    subject: SubjectType.MEDICINE,
    batch: "M2",
    topicName: "Asthma & Bronchial Hyperresponsiveness",
    lecturer: "Prof. M.O. Tanimowo",
    subspecialty: "Respiratory",
    priority: StudyPriority.ADVANCE_PREP,
    batchPriority: 2,
    highYield: false
  },
  {
    subject: SubjectType.MEDICINE,
    batch: "M2",
    topicName: "Pneumonias (CAP, HAP, Aspiration)",
    lecturer: "Dr. Shitu",
    subspecialty: "Respiratory",
    priority: StudyPriority.ADVANCE_PREP,
    batchPriority: 2,
    highYield: false
  },
  {
    subject: SubjectType.MEDICINE,
    batch: "M2",
    topicName: "Superficial Fungal Infections & Scabies",
    lecturer: "Dr. G.M. Israel",
    subspecialty: "Dermatology & Venereology",
    priority: StudyPriority.ADVANCE_PREP,
    batchPriority: 2,
    highYield: false
  },
  {
    subject: SubjectType.MEDICINE,
    batch: "M2",
    topicName: "Deep Fungal & Parasitic Skin Infections",
    lecturer: "Dr. G.M. Israel",
    subspecialty: "Dermatology & Venereology",
    priority: StudyPriority.ADVANCE_PREP,
    batchPriority: 2,
    highYield: false
  },
  {
    subject: SubjectType.MEDICINE,
    batch: "M2",
    topicName: "Papulosquamous Disorders & Psoriasis",
    lecturer: "Dr. G.M. Israel",
    subspecialty: "Dermatology & Venereology",
    priority: StudyPriority.ADVANCE_PREP,
    batchPriority: 2,
    highYield: false
  },
  {
    subject: SubjectType.MEDICINE,
    batch: "M2",
    topicName: "Immunobullous Skin Disorders",
    lecturer: "Dr. G.M. Israel",
    subspecialty: "Dermatology & Venereology",
    priority: StudyPriority.ADVANCE_PREP,
    batchPriority: 2,
    highYield: false
  },
  {
    subject: SubjectType.MEDICINE,
    batch: "M2",
    topicName: "Cutaneous Drug Reactions",
    lecturer: "Dr. G.M. Israel",
    subspecialty: "Dermatology & Venereology",
    priority: StudyPriority.ADVANCE_PREP,
    batchPriority: 2,
    highYield: false
  },
  {
    subject: SubjectType.MEDICINE,
    batch: "M2",
    topicName: "Leprosy & Mycobacterial Diseases",
    lecturer: "Dr. G.M. Israel",
    subspecialty: "Dermatology & Venereology",
    priority: StudyPriority.ADVANCE_PREP,
    batchPriority: 2,
    highYield: false
  },
  {
    subject: SubjectType.MEDICINE,
    batch: "M2",
    topicName: "HIV/AIDS & Opportunistic Infections",
    lecturer: "Dr. G.M. Israel",
    subspecialty: "Infectious Disease",
    priority: StudyPriority.ADVANCE_PREP,
    batchPriority: 2,
    highYield: false
  },
  {
    subject: SubjectType.MEDICINE,
    batch: "M2",
    topicName: "Tetanus & Rabies Management",
    lecturer: "Dr. G.M. Israel",
    subspecialty: "Infectious Disease",
    priority: StudyPriority.ADVANCE_PREP,
    batchPriority: 2,
    highYield: false
  },

  // ================= MEDICINE 3 (M3) =================
  {
    subject: SubjectType.MEDICINE,
    batch: "M3",
    topicName: "Ischaemic Heart Disease",
    lecturer: "Prof. A.A. Akintunde",
    subspecialty: "Cardiology",
    priority: StudyPriority.ADVANCE_PREP,
    batchPriority: 3,
    highYield: true
  },
  {
    subject: SubjectType.MEDICINE,
    batch: "M3",
    topicName: "Arrhythmias (Brady- & Tachyarrhythmias)",
    lecturer: "Prof. A.A. Akintunde",
    subspecialty: "Cardiology",
    priority: StudyPriority.ADVANCE_PREP,
    batchPriority: 3,
    highYield: true
  },
  {
    subject: SubjectType.MEDICINE,
    batch: "M3",
    topicName: "Kidney Replacement Therapy & Dialysis",
    lecturer: "Dr. Shitu",
    subspecialty: "Nephrology",
    priority: StudyPriority.ADVANCE_PREP,
    batchPriority: 3,
    highYield: true
  },
  {
    subject: SubjectType.MEDICINE,
    batch: "M3",
    topicName: "Kidney Transplantation Overview",
    lecturer: "Dr. O. Oni",
    subspecialty: "Nephrology",
    priority: StudyPriority.ADVANCE_PREP,
    batchPriority: 3,
    highYield: true
  },
  {
    subject: SubjectType.MEDICINE,
    batch: "M3",
    topicName: "Pituitary & Neuroendocrinology",
    lecturer: "Prof. M.A. Olamoyegun",
    subspecialty: "Endocrinology",
    priority: StudyPriority.ADVANCE_PREP,
    batchPriority: 3,
    highYield: true
  },
  {
    subject: SubjectType.MEDICINE,
    batch: "M3",
    topicName: "Meningitis & Encephalitis",
    lecturer: "Dr. O. Oni",
    subspecialty: "Neurology",
    priority: StudyPriority.ADVANCE_PREP,
    batchPriority: 3,
    highYield: true
  },
  {
    subject: SubjectType.MEDICINE,
    batch: "M3",
    topicName: "Peripheral Neuropathies & Guillain-Barré",
    lecturer: "Dr. G.M. Israel",
    subspecialty: "Neurology",
    priority: StudyPriority.ADVANCE_PREP,
    batchPriority: 3,
    highYield: true
  },
  {
    subject: SubjectType.MEDICINE,
    batch: "M3",
    topicName: "Headache Syndromes (Migraine, Tension, Cluster)",
    lecturer: "Dr. Shitu",
    subspecialty: "Neurology",
    priority: StudyPriority.ADVANCE_PREP,
    batchPriority: 3,
    highYield: true
  },
  {
    subject: SubjectType.MEDICINE,
    batch: "M3",
    topicName: "Dementia & Cognitive Decline",
    lecturer: "Dr. O. Oni",
    subspecialty: "Neurology",
    priority: StudyPriority.ADVANCE_PREP,
    batchPriority: 3,
    highYield: true
  },
  {
    subject: SubjectType.MEDICINE,
    batch: "M3",
    topicName: "Malabsorption Syndromes",
    lecturer: "Dr. M.M. Oje",
    subspecialty: "GI & Hepatology",
    priority: StudyPriority.ADVANCE_PREP,
    batchPriority: 3,
    highYield: false
  },
  {
    subject: SubjectType.MEDICINE,
    batch: "M3",
    topicName: "Inflammatory Bowel Disease (Crohn's & UC)",
    lecturer: "Dr. Shitu",
    subspecialty: "GI & Hepatology",
    priority: StudyPriority.ADVANCE_PREP,
    batchPriority: 3,
    highYield: false
  },
  {
    subject: SubjectType.MEDICINE,
    batch: "M3",
    topicName: "Acute Liver Failure",
    lecturer: "Dr. M.M. Oje",
    subspecialty: "GI & Hepatology",
    priority: StudyPriority.ADVANCE_PREP,
    batchPriority: 3,
    highYield: false
  },
  {
    subject: SubjectType.MEDICINE,
    batch: "M3",
    topicName: "Gastrointestinal Malignancies",
    lecturer: "Dr. M.M. Oje",
    subspecialty: "GI & Hepatology",
    priority: StudyPriority.ADVANCE_PREP,
    batchPriority: 3,
    highYield: false
  },
  {
    subject: SubjectType.MEDICINE,
    batch: "M3",
    topicName: "Chronic Obstructive Pulmonary Disease (COPD)",
    lecturer: "Prof. M.O. Tanimowo",
    subspecialty: "Respiratory",
    priority: StudyPriority.ADVANCE_PREP,
    batchPriority: 3,
    highYield: false
  },
  {
    subject: SubjectType.MEDICINE,
    batch: "M3",
    topicName: "Carcinoma of the Lungs",
    lecturer: "Dr. O. Oni",
    subspecialty: "Respiratory",
    priority: StudyPriority.ADVANCE_PREP,
    batchPriority: 3,
    highYield: false
  },
  {
    subject: SubjectType.MEDICINE,
    batch: "M3",
    topicName: "Rheumatoid Arthritis & SLE",
    lecturer: "Dr. G.M. Israel",
    subspecialty: "Rheumatology",
    priority: StudyPriority.ADVANCE_PREP,
    batchPriority: 3,
    highYield: false
  },
  {
    subject: SubjectType.MEDICINE,
    batch: "M3",
    topicName: "Gouty Arthritis & Osteoarthritis",
    lecturer: "Dr. G.M. Israel",
    subspecialty: "Rheumatology",
    priority: StudyPriority.ADVANCE_PREP,
    batchPriority: 3,
    highYield: false
  },
  {
    subject: SubjectType.MEDICINE,
    batch: "M3",
    topicName: "Evaluation of the Elderly & Geriatrics",
    lecturer: "Dr. Raheem",
    subspecialty: "General/Multisystem",
    priority: StudyPriority.ADVANCE_PREP,
    batchPriority: 3,
    highYield: false
  },
  {
    subject: SubjectType.MEDICINE,
    batch: "M3",
    topicName: "Clinical Ethics & Reflective Practice",
    lecturer: "Prof. M.A. Olamoyegun",
    subspecialty: "General/Multisystem",
    priority: StudyPriority.ADVANCE_PREP,
    batchPriority: 3,
    highYield: false
  },

  // ================= SURGERY 1 (S1) =================
  {
    subject: SubjectType.SURGERY,
    batch: "S1",
    topicName: "History Taking & Physical Examination in Surgery",
    lecturer: "Dr. Akanbi",
    subspecialty: "General Surgery",
    priority: StudyPriority.UPCOMING,
    batchPriority: 1,
    highYield: false
  },
  {
    subject: SubjectType.SURGERY,
    batch: "S1",
    topicName: "Surgical Wound Management & Healing",
    lecturer: "Dr. Akinloye",
    subspecialty: "General Surgery",
    priority: StudyPriority.UPCOMING,
    batchPriority: 1,
    highYield: false
  },
  {
    subject: SubjectType.SURGERY,
    batch: "S1",
    topicName: "Surgical Infections & Antibiotic Stewardship",
    lecturer: "Dr. Otiti",
    subspecialty: "General Surgery",
    priority: StudyPriority.UPCOMING,
    batchPriority: 1,
    highYield: false
  },
  {
    subject: SubjectType.SURGERY,
    batch: "S1",
    topicName: "Pre- and Post-operative Care",
    lecturer: "Dr. Olatide",
    subspecialty: "General Surgery",
    priority: StudyPriority.UPCOMING,
    batchPriority: 1,
    highYield: false
  },
  {
    subject: SubjectType.SURGERY,
    batch: "S1",
    topicName: "Haemostasis, Bleeding Disorders & Transfusion",
    lecturer: "Dr. Olatide",
    subspecialty: "General Surgery",
    priority: StudyPriority.UPCOMING,
    batchPriority: 1,
    highYield: false
  },
  {
    subject: SubjectType.SURGERY,
    batch: "S1",
    topicName: "Sutures, Anastomosis & Surgical Energy",
    lecturer: "Dr. Idowu",
    subspecialty: "General Surgery",
    priority: StudyPriority.UPCOMING,
    batchPriority: 1,
    highYield: false
  },
  {
    subject: SubjectType.SURGERY,
    batch: "S1",
    topicName: "Shock, Fluid & Electrolyte Resuscitation",
    lecturer: "Dr. Akanbi",
    subspecialty: "General Surgery",
    priority: StudyPriority.UPCOMING,
    batchPriority: 1,
    highYield: false
  },
  {
    subject: SubjectType.SURGERY,
    batch: "S1",
    topicName: "Cardiopulmonary Resuscitation (CPR)",
    lecturer: "Dr. Raji",
    subspecialty: "General Surgery",
    priority: StudyPriority.UPCOMING,
    batchPriority: 1,
    highYield: false
  },
  {
    subject: SubjectType.SURGERY,
    batch: "S1",
    topicName: "Management of the Breast & Breast Lumps",
    lecturer: "Dr. Otiti",
    subspecialty: "General Surgery", // Breast lump is highYield
    priority: StudyPriority.UPCOMING,
    batchPriority: 1,
    highYield: true
  },
  {
    subject: SubjectType.SURGERY,
    batch: "S1",
    topicName: "Urological Emergencies (Retention, Torsion)",
    lecturer: "Dr. Odeyemi",
    subspecialty: "Urology",
    priority: StudyPriority.UPCOMING,
    batchPriority: 1,
    highYield: true
  },
  {
    subject: SubjectType.SURGERY,
    batch: "S1",
    topicName: "Intestinal Obstruction & Acute Abdomen",
    lecturer: "Dr. Akanbi",
    subspecialty: "General Surgery", // GI topic
    priority: StudyPriority.UPCOMING,
    batchPriority: 1,
    highYield: true
  },
  {
    subject: SubjectType.SURGERY,
    batch: "S1",
    topicName: "Anorectal Diseases (Haemorrhoids, Fistulae)",
    lecturer: "Dr. Akanbi",
    subspecialty: "General Surgery",
    priority: StudyPriority.UPCOMING,
    batchPriority: 1,
    highYield: true
  },
  {
    subject: SubjectType.SURGERY,
    batch: "S1",
    topicName: "Esophageal Diseases & Achalasia",
    lecturer: "Dr. Adedayo",
    subspecialty: "General Surgery",
    priority: StudyPriority.UPCOMING,
    batchPriority: 1,
    highYield: true
  },
  {
    subject: SubjectType.SURGERY,
    batch: "S1",
    topicName: "Liver Injury & Biliary Tract Diseases",
    lecturer: "Dr. Idowu",
    subspecialty: "General Surgery",
    priority: StudyPriority.UPCOMING,
    batchPriority: 1,
    highYield: true
  },
  {
    subject: SubjectType.SURGERY,
    batch: "S1",
    topicName: "Paediatric Surgical Emergencies",
    lecturer: "Dr. Akinloye",
    subspecialty: "Paediatric Surgery",
    priority: StudyPriority.UPCOMING,
    batchPriority: 1,
    highYield: false
  },
  {
    subject: SubjectType.SURGERY,
    batch: "S1",
    topicName: "Burns, Scalds & Contractures Management",
    lecturer: "Dr. Onilede",
    subspecialty: "Plastics & Burns",
    priority: StudyPriority.UPCOMING,
    batchPriority: 1,
    highYield: false
  },
  {
    subject: SubjectType.SURGERY,
    batch: "S1",
    topicName: "Varicose Veins & Deep Vein Thrombosis",
    lecturer: "Dr. Adedayo",
    subspecialty: "Vascular",
    priority: StudyPriority.UPCOMING,
    batchPriority: 1,
    highYield: false
  },
  {
    subject: SubjectType.SURGERY,
    batch: "S1",
    topicName: "Head & Neck Masses & Thyroid Swellings",
    lecturer: "Dr. Adedayo",
    subspecialty: "ENT & Head/Neck",
    priority: StudyPriority.UPCOMING,
    batchPriority: 1,
    highYield: false
  },
  {
    subject: SubjectType.SURGERY,
    batch: "S1",
    topicName: "Principles of Anaesthesia & Pain Management",
    lecturer: "Dr. Raji",
    subspecialty: "Anaesthesia",
    priority: StudyPriority.UPCOMING,
    batchPriority: 1,
    highYield: false
  },

  // ================= SURGERY 2 (S2) =================
  // Surgery 2 and Surgery 3 topics rank higher (batchPriority: 2) than S1
  {
    subject: SubjectType.SURGERY,
    batch: "S2",
    topicName: "Carcinoma of the Breast",
    lecturer: "Dr. Otiti",
    subspecialty: "General Surgery",
    priority: StudyPriority.UPCOMING,
    batchPriority: 2,
    highYield: true
  },
  {
    subject: SubjectType.SURGERY,
    batch: "S2",
    topicName: "Bone Fractures and Dislocations",
    lecturer: "Dr. Olatide",
    subspecialty: "Orthopaedics & Trauma",
    priority: StudyPriority.UPCOMING,
    batchPriority: 2,
    highYield: true
  },
  {
    subject: SubjectType.SURGERY,
    batch: "S2",
    topicName: "Bone Tumours (Osteosarcoma & Metastases)",
    lecturer: "Dr. Olatide",
    subspecialty: "Orthopaedics & Trauma",
    priority: StudyPriority.UPCOMING,
    batchPriority: 2,
    highYield: true
  },
  {
    subject: SubjectType.SURGERY,
    batch: "S2",
    topicName: "Low Back Pain & Spinal Deformities",
    lecturer: "Prof. Ajaga",
    subspecialty: "Orthopaedics & Trauma",
    priority: StudyPriority.UPCOMING,
    batchPriority: 2,
    highYield: true
  },
  {
    subject: SubjectType.SURGERY,
    batch: "S2",
    topicName: "Amputations & Orthopaedic Rehabilitation",
    lecturer: "Dr. Otiti",
    subspecialty: "Orthopaedics & Trauma",
    priority: StudyPriority.UPCOMING,
    batchPriority: 2,
    highYield: true
  },
  {
    subject: SubjectType.SURGERY,
    batch: "S2",
    topicName: "Angular Deformities of the Lower Limb",
    lecturer: "Dr. Olanipekun",
    subspecialty: "Orthopaedics & Trauma",
    priority: StudyPriority.UPCOMING,
    batchPriority: 2,
    highYield: true
  },
  {
    subject: SubjectType.SURGERY,
    batch: "S2",
    topicName: "Spinal Cord Injuries & Spine Trauma",
    lecturer: "Dr. Adeleke",
    subspecialty: "Neurosurgery",
    priority: StudyPriority.UPCOMING,
    batchPriority: 2,
    highYield: false
  },
  {
    subject: SubjectType.SURGERY,
    batch: "S2",
    topicName: "Nervous System Malformations & Hydrocephalus",
    lecturer: "Dr. Adeleke",
    subspecialty: "Neurosurgery",
    priority: StudyPriority.UPCOMING,
    batchPriority: 2,
    highYield: false
  },
  {
    subject: SubjectType.SURGERY,
    batch: "S2",
    topicName: "Vascular Lesions & Brain Tumours",
    lecturer: "Dr. Adeleke",
    subspecialty: "Neurosurgery",
    priority: StudyPriority.UPCOMING,
    batchPriority: 2,
    highYield: false
  },
  {
    subject: SubjectType.SURGERY,
    batch: "S2",
    topicName: "Neonatal Intestinal Obstruction",
    lecturer: "Dr. Akanbi",
    subspecialty: "Paediatric Surgery",
    priority: StudyPriority.UPCOMING,
    batchPriority: 2,
    highYield: false
  },
  {
    subject: SubjectType.SURGERY,
    batch: "S2",
    topicName: "Congenital Limb & Surgical Anomalies",
    lecturer: "Prof. Ajaga",
    subspecialty: "Paediatric Surgery",
    priority: StudyPriority.UPCOMING,
    batchPriority: 2,
    highYield: false
  },
  {
    subject: SubjectType.SURGERY,
    batch: "S2",
    topicName: "Cancer Chemotherapy & Palliative Care",
    lecturer: "Dr. Akinloye",
    subspecialty: "Oncology",
    priority: StudyPriority.UPCOMING,
    batchPriority: 2,
    highYield: false
  },

  // ================= SURGERY 3 (S3) =================
  {
    subject: SubjectType.SURGERY,
    batch: "S3",
    topicName: "Benign & Malignant Prostate Diseases",
    lecturer: "Dr. Odeyemi",
    subspecialty: "Urology",
    priority: StudyPriority.UPCOMING,
    batchPriority: 3,
    highYield: true
  },
  {
    subject: SubjectType.SURGERY,
    batch: "S3",
    topicName: "Scrotal Swellings (Hydrocele, Varicocele, Hernias)",
    lecturer: "Dr. Idowu",
    subspecialty: "Urology",
    priority: StudyPriority.UPCOMING,
    batchPriority: 3,
    highYield: true
  },
  {
    subject: SubjectType.SURGERY,
    batch: "S3",
    topicName: "Urinary Calculi (Urolithiasis)",
    lecturer: "Dr. Idowu",
    subspecialty: "Urology",
    priority: StudyPriority.UPCOMING,
    batchPriority: 3,
    highYield: true
  },
  {
    subject: SubjectType.SURGERY,
    batch: "S3",
    topicName: "Peritonitis & Abdominal Sepsis",
    lecturer: "Dr. Akanbi",
    subspecialty: "General Surgery",
    priority: StudyPriority.UPCOMING,
    batchPriority: 3,
    highYield: true
  },
  {
    subject: SubjectType.SURGERY,
    batch: "S3",
    topicName: "Peptic Ulcer Disease & Gastric Outflow",
    lecturer: "Prof. Oguntola",
    subspecialty: "General Surgery",
    priority: StudyPriority.UPCOMING,
    batchPriority: 3,
    highYield: true
  },
  {
    subject: SubjectType.SURGERY,
    batch: "S3",
    topicName: "Colorectal Malignancies",
    lecturer: "Dr. Akinloye",
    subspecialty: "General Surgery",
    priority: StudyPriority.UPCOMING,
    batchPriority: 3,
    highYield: true
  },
  {
    subject: SubjectType.SURGERY,
    batch: "S3",
    topicName: "Acute & Chronic Osteomyelitis",
    lecturer: "Dr. Olanipekun",
    subspecialty: "Orthopaedics & Trauma",
    priority: StudyPriority.UPCOMING,
    batchPriority: 3,
    highYield: true
  },
  {
    subject: SubjectType.SURGERY,
    batch: "S3",
    topicName: "Head Injuries & Extradural Haematoma",
    lecturer: "Dr. Adeleke",
    subspecialty: "Neurosurgery",
    priority: StudyPriority.UPCOMING,
    batchPriority: 3,
    highYield: false
  },
  {
    subject: SubjectType.SURGERY,
    batch: "S3",
    topicName: "Grafts & Skin Tumours",
    lecturer: "Dr. Onilede",
    subspecialty: "Plastics & Burns",
    priority: StudyPriority.UPCOMING,
    batchPriority: 3,
    highYield: false
  },
  {
    subject: SubjectType.SURGERY,
    batch: "S3",
    topicName: "Overview of Common Cardiothoracic Cases",
    lecturer: "Dr. Olatide",
    subspecialty: "Cardiothoracic",
    priority: StudyPriority.UPCOMING,
    batchPriority: 3,
    highYield: false
  },

  // ================= COMMUNITY MEDICINE 1 (CM1) =================
  // Community Medicine is highest priority (StudyPriority.HIGH - active posting)
  {
    subject: SubjectType.COMMUNITY_MEDICINE,
    batch: "CM1",
    topicName: "Definitions & Scope of Epidemiology",
    lecturer: "Dr. Israel",
    subspecialty: "Epidemiology",
    priority: StudyPriority.HIGH,
    batchPriority: 1,
    highYield: true
  },
  {
    subject: SubjectType.COMMUNITY_MEDICINE,
    batch: "CM1",
    topicName: "Epidemiologic Methods & Designs",
    lecturer: "Dr. Israel",
    subspecialty: "Epidemiology",
    priority: StudyPriority.HIGH,
    batchPriority: 1,
    highYield: true
  },
  {
    subject: SubjectType.COMMUNITY_MEDICINE,
    batch: "CM1",
    topicName: "Introduction to Medical Statistics & Demography",
    lecturer: "Prof. Egbewale",
    subspecialty: "Biostatistics & Research Methods",
    priority: StudyPriority.HIGH,
    batchPriority: 1,
    highYield: true
  },
  {
    subject: SubjectType.COMMUNITY_MEDICINE,
    batch: "CM1",
    topicName: "Research Methods & Thesis Formulation",
    lecturer: "Prof. Durowade",
    subspecialty: "Biostatistics & Research Methods",
    priority: StudyPriority.HIGH,
    batchPriority: 1,
    highYield: true
  },
  {
    subject: SubjectType.COMMUNITY_MEDICINE,
    batch: "CM1",
    topicName: "Concept of Primary Health Care (PHC)",
    lecturer: "Dr. Ilori",
    subspecialty: "Primary Health Care",
    priority: StudyPriority.HIGH,
    batchPriority: 1,
    highYield: true
  },
  {
    subject: SubjectType.COMMUNITY_MEDICINE,
    batch: "CM1",
    topicName: "PHC Implementation & Health Posts",
    lecturer: "Dr. Idowu",
    subspecialty: "Primary Health Care",
    priority: StudyPriority.HIGH,
    batchPriority: 1,
    highYield: true
  },
  {
    subject: SubjectType.COMMUNITY_MEDICINE,
    batch: "CM1",
    topicName: "Nigeria Health System Organization",
    lecturer: "Dr. Ilori",
    subspecialty: "Primary Health Care",
    priority: StudyPriority.HIGH,
    batchPriority: 1,
    highYield: true
  },
  {
    subject: SubjectType.COMMUNITY_MEDICINE,
    batch: "CM1",
    topicName: "Maternal, Newborn & Child Health (MNCH)",
    lecturer: "Prof. Olugbenga-Bello",
    subspecialty: "Reproductive & Child Health",
    priority: StudyPriority.HIGH,
    batchPriority: 1,
    highYield: true
  },
  {
    subject: SubjectType.COMMUNITY_MEDICINE,
    batch: "CM1",
    topicName: "Public Health Nutrition & Food Security",
    lecturer: "Dr. Ige",
    subspecialty: "Public Health Nutrition",
    priority: StudyPriority.HIGH,
    batchPriority: 1,
    highYield: false
  },
  {
    subject: SubjectType.COMMUNITY_MEDICINE,
    batch: "CM1",
    topicName: "Components of Environmental Health",
    lecturer: "Dr. Olarewaju",
    subspecialty: "Environmental Health",
    priority: StudyPriority.HIGH,
    batchPriority: 1,
    highYield: false
  },
  {
    subject: SubjectType.COMMUNITY_MEDICINE,
    batch: "CM1",
    topicName: "Occupational Health & Industrial Hazards",
    lecturer: "Dr. Israel",
    subspecialty: "Occupational Health",
    priority: StudyPriority.HIGH,
    batchPriority: 1,
    highYield: false
  },
  {
    subject: SubjectType.COMMUNITY_MEDICINE,
    batch: "CM1",
    topicName: "Medical Sociology & Public Health History",
    lecturer: "Dr. Ige",
    subspecialty: "Medical Sociology",
    priority: StudyPriority.HIGH,
    batchPriority: 1,
    highYield: false
  },
  {
    subject: SubjectType.COMMUNITY_MEDICINE,
    batch: "CM1",
    topicName: "Health Education & Social Marketing",
    lecturer: "Dr. Ilori",
    subspecialty: "Primary Health Care",
    priority: StudyPriority.HIGH,
    batchPriority: 1,
    highYield: false
  },

  // ================= COMMUNITY MEDICINE 2 (CM2) =================
  {
    subject: SubjectType.COMMUNITY_MEDICINE,
    batch: "CM2",
    topicName: "Infectious Disease Epidemiology",
    lecturer: "Dr. Israel",
    subspecialty: "Epidemiology",
    priority: StudyPriority.HIGH,
    batchPriority: 2,
    highYield: true
  },
  {
    subject: SubjectType.COMMUNITY_MEDICINE,
    batch: "CM2",
    topicName: "Epidemiology of Non-communicable Diseases",
    lecturer: "Dr. Israel",
    subspecialty: "Epidemiology",
    priority: StudyPriority.HIGH,
    batchPriority: 2,
    highYield: true
  },
  {
    subject: SubjectType.COMMUNITY_MEDICINE,
    batch: "CM2",
    topicName: "Disaster Management & Preparedness",
    lecturer: "Dr. Bada",
    subspecialty: "Epidemiology",
    priority: StudyPriority.HIGH,
    batchPriority: 2,
    highYield: true
  },
  {
    subject: SubjectType.COMMUNITY_MEDICINE,
    batch: "CM2",
    topicName: "Inferential Statistics & Hypothesis Testing",
    lecturer: "Prof. Egbewale",
    subspecialty: "Biostatistics & Research Methods",
    priority: StudyPriority.HIGH,
    batchPriority: 2,
    highYield: true
  },
  {
    subject: SubjectType.COMMUNITY_MEDICINE,
    batch: "CM2",
    topicName: "Health Care Financing & NHIS",
    lecturer: "Dr. Akande",
    subspecialty: "Health Management",
    priority: StudyPriority.HIGH,
    batchPriority: 2,
    highYield: false
  },
  {
    subject: SubjectType.COMMUNITY_MEDICINE,
    batch: "CM2",
    topicName: "Community Mental Health & Dental Care",
    lecturer: "Dr. Ilori",
    subspecialty: "Primary Health Care",
    priority: StudyPriority.HIGH,
    batchPriority: 2,
    highYield: false
  },
  {
    subject: SubjectType.COMMUNITY_MEDICINE,
    batch: "CM2",
    topicName: "Family Planning & Contraceptive Methods",
    lecturer: "Prof. Olugbenga-Bello",
    subspecialty: "Reproductive & Child Health",
    priority: StudyPriority.HIGH,
    batchPriority: 2,
    highYield: true
  },
  {
    subject: SubjectType.COMMUNITY_MEDICINE,
    batch: "CM2",
    topicName: "STIs, HIV & Prevention of Mother to Child",
    lecturer: "Prof. Olugbenga-Bello",
    subspecialty: "Reproductive & Child Health",
    priority: StudyPriority.HIGH,
    batchPriority: 2,
    highYield: true
  },
  {
    subject: SubjectType.COMMUNITY_MEDICINE,
    batch: "CM2",
    topicName: "Nutritional Assessment & Malnutrition Control",
    lecturer: "Dr. Ige",
    subspecialty: "Public Health Nutrition",
    priority: StudyPriority.HIGH,
    batchPriority: 2,
    highYield: false
  },
  {
    subject: SubjectType.COMMUNITY_MEDICINE,
    batch: "CM2",
    topicName: "Solid & Liquid Waste Management",
    lecturer: "Dr. Olarewaju",
    subspecialty: "Environmental Health",
    priority: StudyPriority.HIGH,
    batchPriority: 2,
    highYield: false
  },
  {
    subject: SubjectType.COMMUNITY_MEDICINE,
    batch: "CM2",
    topicName: "Principles of Medical Ethics",
    lecturer: "Prof. Olugbenga-Bello",
    subspecialty: "Medical Ethics",
    priority: StudyPriority.HIGH,
    batchPriority: 2,
    highYield: false
  },
  {
    subject: SubjectType.COMMUNITY_MEDICINE,
    batch: "CM2",
    topicName: "International Health & Global Health Security",
    lecturer: "Dr. Ige",
    subspecialty: "International Health",
    priority: StudyPriority.HIGH,
    batchPriority: 2,
    highYield: false
  },
  {
    subject: SubjectType.COMMUNITY_MEDICINE,
    batch: "CM2",
    topicName: "Demography & Population Dynamics",
    lecturer: "Prof. Olugbenga-Bello",
    subspecialty: "Demography",
    priority: StudyPriority.HIGH,
    batchPriority: 2,
    highYield: false
  },
  {
    subject: SubjectType.COMMUNITY_MEDICINE,
    batch: "CM2",
    topicName: "Public Health Laboratory & Museum Use",
    lecturer: "Dr. Akindele",
    subspecialty: "Biostatistics & Research Methods",
    priority: StudyPriority.HIGH,
    batchPriority: 2,
    highYield: false
  },
  // --- ADDITIONAL REQUISITE SUBSPECIALTIES TOPICS ---
  // Internal Medicine - Psychiatry
  {
    subject: SubjectType.MEDICINE,
    batch: "M3",
    topicName: "Major Depressive Disorder & Suicide Prevention",
    lecturer: "Dr. Lasebikan",
    subspecialty: "Psychiatry",
    priority: StudyPriority.ADVANCE_PREP,
    batchPriority: 3,
    highYield: true
  },
  {
    subject: SubjectType.MEDICINE,
    batch: "M3",
    topicName: "Schizophrenia, Acute Psychosis & Delirium",
    lecturer: "Dr. Lasebikan",
    subspecialty: "Psychiatry",
    priority: SubjectType.MEDICINE ? StudyPriority.ADVANCE_PREP : StudyPriority.UPCOMING,
    batchPriority: 3,
    highYield: true
  },
  // Surgery - Ophthalmology
  {
    subject: SubjectType.SURGERY,
    batch: "S3",
    topicName: "Cataracts, Glaucoma & Refractive Errors",
    lecturer: "Dr. Olayemi",
    subspecialty: "Opthalmology",
    priority: StudyPriority.UPCOMING,
    batchPriority: 3,
    highYield: true
  },
  {
    subject: SubjectType.SURGERY,
    batch: "S3",
    topicName: "Ocular Trauma & Red Eye Emergencies",
    lecturer: "Dr. Olayemi",
    subspecialty: "Opthalmology",
    priority: StudyPriority.UPCOMING,
    batchPriority: 3,
    highYield: false
  },
  // Surgery - Radiology
  {
    subject: SubjectType.SURGERY,
    batch: "S3",
    topicName: "Introduction to Clinical Radiology & Chest X-Ray Interpretation",
    lecturer: "Dr. Adebayo",
    subspecialty: "Radiology",
    priority: StudyPriority.UPCOMING,
    batchPriority: 3,
    highYield: false
  },
  {
    subject: SubjectType.SURGERY,
    batch: "S3",
    topicName: "Ultrasound, CT, and MRI in Surgical Diagnostics",
    lecturer: "Dr. Adebayo",
    subspecialty: "Radiology",
    priority: StudyPriority.UPCOMING,
    batchPriority: 3,
    highYield: false
  },
  // Surgery - Trauma/Emergency Surgery
  {
    subject: SubjectType.SURGERY,
    batch: "S3",
    topicName: "Advanced Trauma Life Support (ATLS) & Polytrauma Management",
    lecturer: "Dr. Akanbi",
    subspecialty: "Trauma/Emergency Surgery",
    priority: StudyPriority.UPCOMING,
    batchPriority: 3,
    highYield: true
  },
  {
    subject: SubjectType.SURGERY,
    batch: "S3",
    topicName: "Surgical Triage & Emergency Department Resuscitation",
    lecturer: "Dr. Akanbi",
    subspecialty: "Trauma/Emergency Surgery",
    priority: StudyPriority.UPCOMING,
    batchPriority: 3,
    highYield: false
  }
];

// Deduplicates raw clinical syllabus data according to specified criteria:
// 1. Group by subject group (Medicine 1+2+3 -> Medicine, Surgery 1+2+3 -> Surgery, CommMed 1+2 -> Community Medicine)
// 2. Normalize topic name (lowercase, trim whitespace)
// 3. Keep the HIGHER batch number as canonical (e.g. M3 > M2 > M1)
// 4. Merge lecturers if multiple exist, separated by ' & ' (and avoid duplicate lecturer names)
export function getCuratedSyllabus(): Topic[] {
  const grouped: Record<string, Record<string, typeof rawSyllabusData[0]>> = {
    [SubjectType.MEDICINE]: {},
    [SubjectType.SURGERY]: {},
    [SubjectType.COMMUNITY_MEDICINE]: {}
  };

  rawSyllabusData.forEach(item => {
    const key = item.topicName.trim().toLowerCase();
    const existing = grouped[item.subject][key];

    if (!existing) {
      grouped[item.subject][key] = { ...item };
    } else {
      // Extract batch number
      const getBatchNum = (b: string) => {
        const num = parseInt(b.replace(/[^0-9]/g, ''), 10);
        return isNaN(num) ? 1 : num;
      };

      const existingNum = getBatchNum(existing.batch);
      const currentNum = getBatchNum(item.batch);

      // Merge lecturers
      const lecturers = new Set<string>();
      existing.lecturer.split(/&|,/).forEach(l => {
        const name = l.trim();
        if (name) lecturers.add(name);
      });
      item.lecturer.split(/&|,/).forEach(l => {
        const name = l.trim();
        if (name) lecturers.add(name);
      });
      const mergedLecturers = Array.from(lecturers).join(" & ");

      if (currentNum > existingNum) {
        // Current batch is higher, make it canonical but preserve merged lecturers
        grouped[item.subject][key] = {
          ...item,
          lecturer: mergedLecturers
        };
      } else {
        // Existing is higher/same, keep it canonical but update lecturers
        existing.lecturer = mergedLecturers;
      }
    }
  });

  const curatedList: Topic[] = [];
  let idCounter = 1;

  Object.values(grouped).forEach(subjectGroup => {
    Object.values(subjectGroup).forEach(topic => {
      curatedList.push({
        id: `topic_${idCounter++}`,
        ...topic,
        status: StudyStatus.NOT_STARTED // Default starting status
      });
    });
  });

  // Map subspecialties strictly to the user-supplied list
  const mappedList = curatedList.map(topic => {
    let sub = topic.subspecialty;
    const name = topic.topicName.trim().toLowerCase();
    
    if (topic.subject === SubjectType.MEDICINE) {
      // internal medicine: endocrinology, nephrology, neurology, cardiology, dermatology, gastroenterology, pulmonology, psychiatry, medical ethics
      if (sub === "Cardiology") sub = "Cardiology";
      else if (sub === "Nephrology") sub = "Nephrology";
      else if (sub === "Endocrinology") sub = "Endocrinology";
      else if (sub === "Neurology") sub = "Neurology";
      else if (sub === "Psychiatry") sub = "Psychiatry";
      else if (sub === "GI & Hepatology" || sub.includes("GI") || sub.includes("Gastro")) sub = "Gastroenterology";
      else if (sub === "Respiratory" || sub === "Pulmonology") sub = "Pulmonology";
      else if (sub.includes("Dermatology")) sub = "Dermatology";
      else if (sub === "Rheumatology") {
        sub = "Dermatology"; // Rheum matches Derm best or Nephrology, let's keep it as Dermatology
      } else if (sub === "General/Multisystem") {
        if (name.includes("ethics")) {
          sub = "Medical Ethics";
        } else if (name.includes("elderly") || name.includes("geriatric")) {
          sub = "Psychiatry";
        } else {
          sub = "Medical Ethics";
        }
      } else if (sub === "Infectious Disease") {
        if (name.includes("tetanus") || name.includes("rabies") || name.includes("meningitis")) {
          sub = "Neurology";
        } else if (name.includes("hiv") || name.includes("aids")) {
          sub = "Dermatology";
        } else if (name.includes("malaria")) {
          sub = "Gastroenterology";
        } else {
          sub = "Pulmonology";
        }
      } else {
        sub = "Medical Ethics"; // Fallback
      }
    } else if (topic.subject === SubjectType.SURGERY) {
      // Surgery: general surgery, plastics, orthopedics, urology, cardio thoracic surgery, neurosurgery, paediatric surgery, trauma/emergency surgery, ENT, radiology, anaesthesiology, Opthalmology
      const lowerSub = sub.toLowerCase();
      if (lowerSub.includes("general surgery")) sub = "general surgery";
      else if (lowerSub.includes("urology")) sub = "urology";
      else if (lowerSub.includes("paediatric surgery") || lowerSub.includes("pediatric")) sub = "paediatric surgery";
      else if (lowerSub.includes("plastics") || lowerSub.includes("burns")) sub = "plastics";
      else if (lowerSub.includes("vascular") || lowerSub.includes("cardiothoracic") || lowerSub.includes("cardio thoracic")) sub = "cardio thoracic surgery";
      else if (lowerSub.includes("ent") || lowerSub.includes("head")) sub = "ENT";
      else if (lowerSub.includes("anaesthesia") || lowerSub.includes("anaesthesiology")) sub = "anaesthesiology";
      else if (lowerSub.includes("neurosurgery")) sub = "neurosurgery";
      else if (lowerSub.includes("orthopaedics") || lowerSub.includes("orthopedics")) {
        if (name.includes("fracture") || name.includes("dislocation") || name.includes("trauma")) {
          sub = "trauma/emergency surgery";
        } else {
          sub = "orthopedics";
        }
      } else if (lowerSub.includes("trauma/emergency")) {
        sub = "trauma/emergency surgery";
      } else if (lowerSub.includes("oncology")) {
        sub = "radiology";
      } else if (lowerSub.includes("opthalmology") || lowerSub.includes("eye")) {
        sub = "Opthalmology";
      } else if (lowerSub.includes("radiology")) {
        sub = "radiology";
      } else {
        sub = "general surgery";
      }
    } else if (topic.subject === SubjectType.COMMUNITY_MEDICINE) {
      // Community medicine: epidemiology, occupational health, environmental health, health management, health economics, international health, family & reproductive health (including school health services), health education, public health nutrition, biostatistics, demographics, social and rehabilitate medicine, medical ethics
      const lowerSub = sub.toLowerCase();
      if (lowerSub.includes("epidemiology")) sub = "epidemiology";
      else if (lowerSub.includes("biostatistics") || lowerSub.includes("statistics") || lowerSub.includes("research")) sub = "biostatistics";
      else if (lowerSub.includes("environmental")) sub = "environmental health";
      else if (lowerSub.includes("occupational")) sub = "occupational health";
      else if (lowerSub.includes("nutrition")) sub = "public health nutrition";
      else if (lowerSub.includes("ethics")) sub = "medical ethics";
      else if (lowerSub.includes("international") || lowerSub.includes("global")) sub = "international health";
      else if (lowerSub.includes("demography") || lowerSub.includes("population")) sub = "demographics";
      else if (lowerSub.includes("reproductive") || lowerSub.includes("maternal") || lowerSub.includes("child") || lowerSub.includes("family planning")) {
        sub = "family & reproductive health (including school health services)";
      } else if (lowerSub.includes("sociology") || lowerSub.includes("mental") || lowerSub.includes("dental") || lowerSub.includes("rehabilitate") || lowerSub.includes("social")) {
        sub = "social and rehabilitate medicine";
      } else if (lowerSub.includes("education") || lowerSub.includes("marketing")) {
        sub = "health education";
      } else if (lowerSub.includes("management") || lowerSub.includes("health system") || lowerSub.includes("phc") || lowerSub.includes("primary health")) {
        if (name.includes("financing") || name.includes("nhis") || name.includes("economics")) {
          sub = "health economics";
        } else {
          sub = "health management";
        }
      } else {
        sub = "health management";
      }
    }
    
    return {
      ...topic,
      subspecialty: sub
    };
  });

  return mappedList;
}

export const postingScheduleTimeline = [
  { id: 1, title: "Community Medicine Posting", dateRange: "June 29 - August 2, 2026", focus: "Epidemiology, Biostatistics, Environmental Health, Public Health Nutrition" },
  { id: 2, title: "Internal Medicine Posting", dateRange: "August 3 - September 6, 2026", focus: "Cardiology, Nephrology, Neurology, Endocrinology, Respiratory, GI" },
  { id: 3, title: "Surgery Posting & Integrated Revision", dateRange: "September 7 - October 11, 2026", focus: "General Surgery, Urology, Trauma/Orthopaedics, Neurosurgery, Paediatrics" }
];
