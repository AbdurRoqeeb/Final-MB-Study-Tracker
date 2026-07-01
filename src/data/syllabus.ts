import { SubjectType, StudyPriority, Topic, StudyStatus } from '../types';

// Complete lists of raw clinical syllabus topics directly transcribed from the user's syllabus.
// This matches 100% of the topics under medicine, surgery, and community medicine.

const medicine1Topics = [
  "Introduction to medicine",
  "Approach to the evaluation of patients with cardiovascular disease and common symptomatology in cardiac diseases",
  "Approach to the evaluation of patients with endocrine disorder and common symptomatology in endocrine diseases",
  "Approach to the evaluation of patients with gastrointestinal disease and common symptomatology in gastrology and hepatology",
  "Approach to the evaluation of patients with kidney disease and common symptomatology in kidney diseases",
  "Approach to the evaluation of patients with respiratory disease and common symptomatology in respiratory diseases",
  "Approach to the evaluation of patients with neurological disease and common symptomatology in neurological diseases",
  "Approach to gastrointestinal system examination",
  "Approach to cardiovascular system examination",
  "Approach to patient with endocrine disorders and physical examination in endocrine diseases",
  "Approach to examination in kidney disease. Investigation in kidney disease",
  "Approach to chest examination. Investigation in respiratory diseases",
  "Approach to patients with dermatological and venereological disease",
  "Immunological and genetic basis of disease",
  "Investigations in dermatology and venereology",
  "Approach to the patient with diarrhea and ascites",
  "Rheumatic fever and rheumatic heart disease",
  "Diabetes mellitus",
  "Approach to neurological examination, higher motor function and cranial nerves",
  "Evaluation of glomerular diseases - glomerulonephritis, nephrotic syndrome",
  "Pneumonias",
  "Introduction to basic side room tests on urine, stool, sputum, and blood",
  "Peptic ulcer disease",
  "Heart failure",
  "Evaluation of the febrile patient",
  "Approach to neurological examination - motor, sensory and autonomic systems",
  "Acute and chronic complications of diabetes mellitus",
  "Tuberculosis",
  "Viral hepatitis",
  "Investigations in dermatology and venereology",
  "Thyroid disorders - hypothyroidism, hyperthyroidism",
  "Multidisciplinary approach to patient care",
  "Hypertension",
  "Urinary tract infection (upper & lower)",
  "Asthma",
  "Introduction to electrocardiography (ECG)",
  "Gastrointestinal bleeding",
  "Acute and chronic pericarditis, myocarditis",
  "Eczema",
  "Hypertensive heart disease",
  "Introduction to fluid and electrolyte imbalance",
  "Parasitic skin infections",
  "Malaria",
  "Nutritional disorders - causes, clinical presentation, investigation and treatment",
  "Sepsis",
  "Tetanus",
  "Introduction to acute kidney injury",
  "Introduction to chronic kidney disease",
  "Pleural effusion",
  "Stroke",
  "Typhoid"
];

const medicine2Topics = [
  "Superficial fungal infection",
  "Deep fungal infection",
  "Infective endocarditis",
  "Viral/bacterial/parasitic skin infection",
  "Pyrexia of unknown origin",
  "Papulosquamous disorders",
  "Diabetic foot ulcer",
  "Pigmentary skin disorders",
  "Calcium metabolism and its disorders",
  "Amoebiasis",
  "Clostridial infections",
  "Rational use of antibiotics",
  "Syncope",
  "Pericarditis, myocarditis and diseases of the aorta",
  "Salmonella infections",
  "Pregnancy and heart disease",
  "Insulin therapy and dietary management of diabetes",
  "HIV 1 (etiology, epidemiology, risk factors, transmission, diagnosis, treatment and prevention)",
  "Haemorrhagic viral disease",
  "Rabies",
  "Immunobullous skin disorders",
  "Dermatologic emergency/cutaneous drug reaction",
  "Tuberculosis (extra-pulmonary)",
  "Leprosy",
  "Sexually transmitted disease",
  "HIV and the skin",
  "Malaria",
  "Glomerular disease associated with infections",
  "Herbal and over the counter medication",
  "Adrenal gland disorders",
  "Cholera",
  "Sebaceous/eccrine gland disorder",
  "Gastroenteritis",
  "Gastrointestinal reflux disease",
  "Trematode and nematode infection",
  "HIV and respiratory system",
  "HIV and digestive system",
  "HIV and the nervous system",
  "HIV and circulatory system"
];

const medicine3Topics = [
  "Meningitis",
  "Adult congenital heart diseases",
  "Lymphoproliferative disorders",
  "Myeloproliferative disorders",
  "Tuberculosis (pulmonary and extrapulmonary)",
  "Approach to Neurological Examination I",
  "Approach to Neurological Examination II",
  "Malabsorption syndromes, inflammatory bowel disease",
  "Upper and lower Gastrointestinal tract bleeding",
  "Current guidelines in the management of diabetes",
  "Headache syndromes",
  "Spinal cord compression syndrome",
  "Acute and chronic complications of diabetes",
  "Obesity and medical nutrition therapy",
  "Sepsis, systemic inflammatory response syndrome and multi-organ dysfunction syndrome",
  "Multidisciplinary approach to patient care",
  "Sleep disorders",
  "Coma - causes and management",
  "Ethics of clinical practice I",
  "Kidney replacement therapy (Haemodialysis, Peritoneal dialysis)",
  "Brady- and tachyarrhythmias, cardiac resuscitation",
  "Heart failure",
  "Thyroid disorders",
  "Management of Acute kidney injury and chronic kidney disease",
  "Connective tissue disorders",
  "Mixed connective tissue disease, Dermatomyositis and polymyositis",
  "Gastrointestinal malignancies",
  "Gallstone disease, pancreatitis",
  "Acute liver failure, management of hepatic encephalopathy",
  "ECG Wrap up",
  "Evaluation of the elderly. Common health issues with the elderly",
  "The arthritides",
  "Peripheral neuropathies",
  "Reflective practice",
  "Neuroendocrinology. Introduction to the use of technology in Medicine (Telemedicine)",
  "Chronic obstructive pulmonary disease, Respiratory failure",
  "Calcium metabolism & Osteoporosis",
  "Ischaemic heart disease",
  "Acute and chronic arterial disease, venous thromboembolism",
  "Dementia",
  "Pneumonias",
  "Stroke",
  "Epilepsy",
  "Parkinson's disease",
  "Anaemias",
  "Haemoglobinopathies",
  "Bronchial asthma",
  "Acute drug poisoning and overdose",
  "Kidney transplantation",
  "Elderly abuse and neglect, Drug management in the elderly",
  "Diabetic kidney disease, hypertension and the kidney",
  "Cardiomyopathies",
  "Carcinoma of the lungs"
];

const surgery1Topics = [
  "Intestinal obstruction",
  "Surgical nutrition",
  "Thyroid and parathyroid",
  "History taking and physical examination in surgery / history of surgery",
  "The stomach",
  "Surgical wound management",
  "Principles of fracture management",
  "Surgical infection and antibiotics in surgery",
  "The breast",
  "Surgical bleeding and hemostasis / shock",
  "Peri-operative care",
  "Sutures, drains and catheter",
  "Medical problems in surgery",
  "Cardiopulmonary resuscitation",
  "Clinical and investigative evaluation of neurosurgical patients",
  "General principle of cancer management",
  "Blood transfusions in surgery",
  "Head and neck masses",
  "Trauma management / metabolic responses to injury",
  "Intestinal obstruction / surgical nutrition",
  "Congenital anomalies in paediatric surgery",
  "Fluid & electrolyte management of surgical",
  "The large intestine (benign and malignant)",
  "The acute abdomen / appendix",
  "Common urological emergency",
  "Varicose veins / DVT / thrombophlebitis",
  "Burn / grafts and flaps",
  "Transplantation in surgery",
  "Pediatrics surgical emergency",
  "Head injury / spinal injury, pituitary gland",
  "Stings and bites, tetanus",
  "Anorectal disease (benign and malignant)",
  "Typhoid enteritis / the spleen",
  "Diseases of esophagus and diaphragmatic hernias",
  "Surgical aspects of AIDS",
  "The liver and biliary tracts",
  "Paediatric urology",
  "The pancreas / obstructive jaundice",
  "Musculoskeletal infection / metabolic disease"
];

const surgery2Topics = [
  "Investigations in urology",
  "Hematuria, new trends in urology",
  "Urolithiasis",
  "Fractures and dislocations of lower limbs",
  "Bone tumours",
  "Hirschprung disease",
  "Surgical nutrition",
  "Degenerative disease of the spine",
  "Management of acute abdomen",
  "Robotic surgery",
  "Parenteral nutrition",
  "Leg ulcers",
  "Hand infection",
  "Cancer chemotherapy",
  "Evaluation of neurological patients",
  "Congenital malformation of nervous system",
  "Vascular lesions of the nervous system",
  "Management of lymphedema",
  "Wound healing",
  "Anorectal malformation",
  "Neonatal intestinal obstruction",
  "Surgery in the elderly",
  "Scoliosis and kyphosis",
  "Infections of joints and bones (excluding septic arthritis and osteomyelitis)",
  "The surgeon and HIV infections",
  "Tumors of the urinary tract",
  "Prostate gland",
  "Endoscopy in surgery",
  "Management of head injury",
  "Diabetes and hypertension on surgery",
  "Investigations monitoring and recent advances in cardiothoracic practice",
  "Management of chest injuries",
  "Congenital cardiac anomalies",
  "Facial cleft and management / ethical issues in surgery",
  "Internet, information, technology and surgery",
  "Surgical aspects of sickle cell disease",
  "The foot",
  "Amputation",
  "Rehabilitation in orthopedics",
  "Congenital limb anomalies",
  "Blood transfusion in surgery",
  "Angular deformities of the lower limb",
  "Nerve injury and management",
  "Burns, etiology and management",
  "Low back pain",
  "Spinal injuries",
  "Rehabilitation in orthopedic",
  "Operating room ethics"
];

const surgery3Topics = [
  "Suture and Drains/Catheter/Antisepsis",
  "Abdominal trauma",
  "Surgical Wounds, Wound Healing and Wound Infection",
  "Benign and Malignant Colorectal diseases",
  "Pancreatitis, Ca Pancreas",
  "Liver: Injury, Abscess, Tumour",
  "Grafts and Flaps / Skin Tumor",
  "Leg Ulcer, Varicose Veins",
  "Hernias/ Gastric Tumors",
  "Fluid and Electrolyte Balance in Surgical Patients",
  "Head injury/spinal injury/common neurosurgical conditions",
  "Trauma: Triage and Management of the acutely injured and multiple injury",
  "Appendicitis / Thyroid Gland Disorders",
  "Imaging in Surgery I",
  "Benign and Malignant Diseases of the prostate",
  "Scrotal Swellings, Urinary Calculi and Bladder Outlet Obstruction",
  "Urogenital Injuries and Urethral Strictures",
  "Peritonitis, Typhoid perforation, Peritoneal Abscess",
  "Surgical Parasitosis/ Intestinal Obstruction",
  "Shock/ Circulatory Collapse: Cause and Management",
  "Disorders of surgical Bleeding, Blood Transfusion of Blood substitutes and maintenance of hemostasis in surgery",
  "Common eye problems",
  "Benign Anorectal diseases",
  "Oesophageal Diseases",
  "Burn: Aetiology and Management",
  "Salivary Gland Diseases / Common ENT Problems",
  "Benign and Malignant Breast Diseases",
  "Anesthesia Overview 1",
  "Overview of common cardiothoracic cases",
  "Testicular, Kidney and Bladder Tumor",
  "Peptic Ulcer Disease",
  "Cholelithiasis, Surgical Jaundice",
  "Management of Fractures",
  "Common Pediatric Surgical Problems",
  "Acute and Chronic Osteomyelitis",
  "Arthritis (Pyogenic, Tuberculous) Degenerative",
  "Talipes and Genu deformities/ Bone tumours",
  "Surgical Infection and Rational use of antibiotic/ Pre- and Post-Operative Care of Surgical Patient",
  "Recent Advances in Surgery"
];

const communityMedicine1Topics = [
  "Primary health care: definition, history, component, principle",
  "History of public health: history of public health and community health specialties",
  "Health management: introduction, concept, function",
  "Epidemiology: definition, scope, objective, uses",
  "Demography: introduction, definition and rationale, demographic processes",
  "Occupational health: definition, history, concept, component of the work environment, interaction between work and health",
  "Public health nutrition: Concept in human nutrition, nutrients and their functions, food sources and related diseases",
  "Environmental health: Introduction, components, water sources, uses, pollution & purification",
  "Medical statistics: Data summary measures of central tendencies",
  "Epidemiology: Triad, principles of disease control and eradication and levels of prevention",
  "Health management: Planning process, organizing",
  "Demography: Sources of data: census, NDHS etc",
  "Research methods: Concept, uses, types, methods of data collection, planning, and conducting research in public health",
  "Occupational health: Services and practice, organization, functions",
  "Epidemiology: epidemiological methods",
  "Public health nutrition: Assessment of nutritional status in a community",
  "Social medicine: Introduction, categories, classification of underprivileged members of the society",
  "Research methods: Study designs / sampling techniques",
  "Primary health care: Organization of services in PHC including referral system, community participation and mobilization",
  "Reproductive health: Maternal health: objectives, maternal depletion syndrome, causes of maternal death",
  "Medical statistics: Data summary measures of dispersion",
  "Environmental health: Solid and liquid waste management and treatment",
  "Epidemiology: Epid and control of selected endemic diseases of skin and mucous membrane",
  "Medical statistics: Introduction to inferential statistics / Concept of confidence interval",
  "Social medicine: Medical and social problems of underprivileged members of the society and control",
  "International health: Origin and development of international health organization and their functions",
  "Public health admin-principles, the Nigeria health system",
  "Environmental health: Vector/pest control, chemical safety & poisoning",
  "Reproductive health: child health: objectives, causes of child death, child survival strategies",
  "Health education: definition, concept, components, health communication, behavioural communication change",
  "Public health nutrition: Nutrition in children and associated nutritional problems",
  "Public health laboratory",
  "Epidemiology: Epidemiology and control of selected endemic diseases of the respiratory tract",
  "Health education: Health promotion: concept, scope and principles",
  "Reproductive health: Family planning, information, counseling and services. Methods of FP, unmet needs of FP",
  "Environmental health: housing and health",
  "Medical ethics: definition, evolution, international codes",
  "Health management: staffing, the health team, leading",
  "Medical ethics: duties of doctors, professional negligence, code of conduct",
  "Public health nutrition: nutrition among pregnant women",
  "Public health nutrition: And the elderly and associated nutritional problems",
  "Primary health care: community mental health, community dental care",
  "Health management: staffing, the health team leading",
  "Medical ethics: definition, evolution, international codes",
  "Epidemiology: epidemiological methods",
  "International health: Origin and development of international health",
  "Medical ethics: duties of doctors, negligence, code of conduct",
  "Public health nutrition: Nutrition among pregnant women and the elderly and associated nutritional problems",
  "Primary health care: Organization of services in PHC including referral system, community participation and mobilization",
  "Reproductive health: school health programme and services; components, implementation and healthful school environment",
  "Research methods: concept, uses, types, methods of data collection, planning, conducting research in public health",
  "Environmental health: Assessment of quality of water and water related diseases",
  "Health management: Utilization of health services, inverse care law and referral system",
  "Epidemiology: Double burden of disease and epidemiological transition",
  "Demography: Demographic process: marriage, migration and demographic transition",
  "Medical sociology: concept of socialization, social classification, social stratification and social mobility",
  "Research methods: scales of measurements: nominal and ordinal; interval and ratio scales",
  "Public health admin-principles, the Nigeria health system",
  "Health management: problem solving in management",
  "Epidemiology: epid and control of selected endemic diseases of skin and mucous membrane",
  "Reproductive health: School health programme and services; components, implementation and healthful school environment",
  "Environmental health: housing and health",
  "Research methods: Study designs, sample size determination and sampling techniques",
  "Health education: Health promotion: concept, scope and principles",
  "Public health nutrition: Epidemiology and control of common nutritional problems in Nigeria: PEM, selected micronutrient deficiencies, obesity",
  "Research methods: presentation of data; prose/narrative, contingency table, frequency tables, pie charts, bar charts, histogram, frequency polygon, pictogram and scattered diagram",
  "Health education: Identification of needs, types of needs: channel and methods of health education in rural/urban settings",
  "Occupational health: Principles of occupational health and safety, occupational diseases and hazards prevention",
  "Medical sociology: Beneficial and harmful traditional practices",
  "Research methods: Test of significance: concept of hypothesis",
  "Environmental health: Solid waste and liquid waste management",
  "Demography: Population dynamics, structure and growth; health and population growth",
  "Health management: Introduction to health care financing; concept, goals and objectives",
  "Epidemiology: Concept of endemicity, epidemicity and pandemicity",
  "Medical ethics: Doctor-patient relationship, doctor-doctor relationship",
  "Occupational health: Occupational accidents and safety at work",
  "Health education: Steps of health education",
  "Reproductive health: Measurement of fertility and mortality",
  "Health management: Options in health care financing: advantages and disadvantages",
  "International health: international health organizations and their functions, non-governmental organizations and their functions",
  "Epidemiology: epidemiology and control of selected endemic diseases of the respiratory tract",
  "Reproductive health: family planning, information, counseling and services. Methods of FP, unmet needs of FP",
  "Primary health care: Community mental health, community dental care",
  "Public health museum",
  "Epidemiology: Types of epidemics, uses of epidemic curve and epidemic investigations",
  "Medical sociology: Impairment, disability and handicap",
  "Environmental health: Vector/pest control, chemical safety & poisoning"
];

const communityMedicine2Topics = [
  "Research methodology: steps in research, data collection, study designs, sampling techniques",
  "Health management 1: staffing, health team, leadership and leading",
  "Primary health care 1: PHC implementation in Nigeria and challenges",
  "Biostatistics 1: inferential statistics-chi square",
  "Occupational health 1: small scale industries and hospital",
  "Reproductive health 1: focused ANC, essential obstetric care, post-natal care, child health",
  "Health education 1: BCC & IEC materials & applications in health communication",
  "Public health nutrition 1: nutritional problems of special groups of children, adolescents",
  "Health management 2: control, monitoring & evaluation, health indicators",
  "Public health nutrition 2: nutritional problems of special groups - pregnant women, aged",
  "Environmental health 1: air hygiene & pollution",
  "Biostatistics 2: inferential statistics, t-test, pooled, unpaired samples",
  "Epidemiology: emerging and re-emerging disease, epidemic, and disaster management",
  "Reproductive health 2: family planning information and service, maternal depletion syndrome, breast feeding",
  "Research methods and biomedical writing: questionnaire designs, writing proposals and projects, referencing styles",
  "Health care financing 1: financing the health care sector in Nigeria and challenges, budgeting, economic evaluation",
  "Reproductive health 3: STI including HIV/AIDS, PMTCT",
  "Public health nutrition 3: assessment of nutritional status, nutritional survey",
  "Epidemiology: epidemiology & control of non-communicable disease - RTA, cancers",
  "Epidemiology: epidemic transition & double burden of disease",
  "Medical ethics 1: introduction, history, theories, approaches",
  "Primary health care 2: health manpower at the PHC",
  "Biostatistics 3: sample size determination, calculations for various study designs",
  "International health 1: governmental and non-governmental agencies",
  "Health management 3: supervision: quality improvement in health care",
  "Epidemiology: epidemic and control of selected endemic/neglected tropical disease",
  "Occupational health 2: occupational poisons, cancers, dermatitis, trauma etc",
  "Social and rehab medicine: social welfare service, prison health, motherless babies, refugees",
  "Public health nutrition: nutritional rehabilitation and education",
  "Environmental health 3: noise and irradiation effect and control",
  "Epidemiology: epidemiology and control of non-communicable disease, HTN, DM",
  "Social and rehab medicine 2: child abuse / labour: destitute",
  "Medical ethics 1: patients rights, obligation: principles of ethics",
  "Health management 4: national health policy, health development in Nigeria",
  "Primary health care 3: community mental health & community dental health",
  "Reproductive health 4: adolescent reproductive health, prevention and management of abortion",
  "Health management: management of health researches, drug revolving scheme",
  "Primary health care 4: structural organization in PHC - LGA, ward, communication health organization",
  "Reproductive health 5: prevention and management of infertility, sexual dysfunction, and non-infectious conditions of reproductive tract",
  "International health 2: international health regulation surveillance, port health",
  "Environmental health 2: food hygiene and safety: market sanitation",
  "Health care financing 2: insurance scheme, retainership"
];

// Helper functions to map raw strings to structured Omit<Topic, 'id' | 'status'> items programmatically
function getNormalKey(name: string): string {
  const fillers = [
    "and", "the", "in", "of", "to", "or", "a", "with", "for", "on", "from", "at", "by", 
    "about", "common", "selected", "approach", "evaluation", "patients", "disease", 
    "diseases", "symptomatology", "investigations", "investigation", "management", 
    "introduction", "concept", "principles", "principle", "overview", "methods", 
    "method", "clinical", "evaluation", "treatment", "causes", "presentation", "studies"
  ];
  const words = name
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .map(w => w.trim())
    .filter(w => w.length > 2 && !fillers.includes(w));
  
  words.sort();
  return words.join("_");
}

function getSubspecialty(name: string, subject: SubjectType): string {
  const lowerName = name.toLowerCase();

  if (subject === SubjectType.MEDICINE) {
    if (lowerName.includes("cardio") || lowerName.includes("cardiac") || lowerName.includes("heart") || lowerName.includes("pericarditis") || lowerName.includes("myocarditis") || lowerName.includes("hypertens") || lowerName.includes("ecg") || lowerName.includes("arrhythmia") || lowerName.includes("ischemic") || lowerName.includes("coronary") || lowerName.includes("arterial") || lowerName.includes("vein") || lowerName.includes("thromboembolism") || lowerName.includes("syncope")) {
      return "Cardiology";
    }
    if (lowerName.includes("endocrine") || lowerName.includes("thyroid") || lowerName.includes("diabetes") || lowerName.includes("diabetic") || lowerName.includes("cushing") || lowerName.includes("adrenal") || lowerName.includes("calcium") || lowerName.includes("metabolism") || lowerName.includes("neuroendocrinology") || lowerName.includes("obesity")) {
      return "Endocrinology";
    }
    if (lowerName.includes("kidney") || lowerName.includes("renal") || lowerName.includes("nephrotic") || lowerName.includes("glomerular") || lowerName.includes("glomerulonephritis") || lowerName.includes("dialysis") || lowerName.includes("haemodialysis") || lowerName.includes("peritoneal") || lowerName.includes("transplantation") || lowerName.includes("urinary")) {
      return "Nephrology";
    }
    if (lowerName.includes("neurolog") || lowerName.includes("stroke") || lowerName.includes("seizure") || lowerName.includes("epilepsy") || lowerName.includes("meningitis") || lowerName.includes("parkinson") || lowerName.includes("neuropath") || lowerName.includes("headache") || lowerName.includes("coma") || lowerName.includes("brain") || lowerName.includes("spinal cord compression") || lowerName.includes("higher motor") || lowerName.includes("cranial nerve") || lowerName.includes("motor, sensory")) {
      return "Neurology";
    }
    if (lowerName.includes("dermatolog") || lowerName.includes("venereolog") || lowerName.includes("skin") || lowerName.includes("eczema") || lowerName.includes("fungal") || lowerName.includes("scabies") || lowerName.includes("papulosquamous") || lowerName.includes("pigmentary") || lowerName.includes("immunobullous") || lowerName.includes("cutaneous") || lowerName.includes("leprosy") || lowerName.includes("sebaceous") || lowerName.includes("eccrine") || lowerName.includes("eczema")) {
      return "Dermatology";
    }
    if (lowerName.includes("gastrointestinal") || lowerName.includes("gastrology") || lowerName.includes("hepatology") || lowerName.includes("diarrhea") || lowerName.includes("ascites") || lowerName.includes("peptic") || lowerName.includes("ulcer") || lowerName.includes("bleeding") || lowerName.includes("viral hepatitis") || lowerName.includes("amoebiasis") || lowerName.includes("gastroenteritis") || lowerName.includes("reflux") || lowerName.includes("digestive") || lowerName.includes("malabsorption") || lowerName.includes("bowel") || lowerName.includes("crohn") || lowerName.includes("liver") || lowerName.includes("gallstone") || lowerName.includes("pancreatitis") || lowerName.includes("portal") || lowerName.includes("stomach") || lowerName.includes("cholera") || lowerName.includes("salmonella") || lowerName.includes("typhoid") || lowerName.includes("gastro")) {
      return "Gastroenterology";
    }
    if (lowerName.includes("respiratory") || lowerName.includes("pulmonary") || lowerName.includes("asthma") || lowerName.includes("pneumonia") || lowerName.includes("tuberculosis") || lowerName.includes("pleural") || lowerName.includes("cough") || lowerName.includes("bronchial") || lowerName.includes("obstructive") || lowerName.includes("copd") || lowerName.includes("chest")) {
      return "Pulmonology";
    }
    if (lowerName.includes("psychiatry") || lowerName.includes("depressive") || lowerName.includes("suicide") || lowerName.includes("schizophrenia") || lowerName.includes("psychosis") || lowerName.includes("delirium") || lowerName.includes("dementia") || lowerName.includes("sleep") || lowerName.includes("elderly") || lowerName.includes("geriatric") || lowerName.includes("abuse")) {
      return "Psychiatry";
    }
    if (lowerName.includes("ethics") || lowerName.includes("reflective") || lowerName.includes("negligence") || lowerName.includes("code of conduct") || lowerName.includes("multidisciplinary") || lowerName.includes("evaluation") || lowerName.includes("practice") || lowerName.includes("technology") || lowerName.includes("telemedicine")) {
      return "Medical Ethics";
    }
    return "Medical Ethics";
  } else if (subject === SubjectType.SURGERY) {
    if (lowerName.includes("urolog") || lowerName.includes("hematuria") || lowerName.includes("urolithiasis") || lowerName.includes("prostate") || lowerName.includes("calculi") || lowerName.includes("scrotal") || lowerName.includes("testicular") || lowerName.includes("bladder") || lowerName.includes("urethral") || lowerName.includes("stricture") || lowerName.includes("kidney tumor") || lowerName.includes("urogenital") || lowerName.includes("catheter") || lowerName.includes("scrotum")) {
      return "urology";
    }
    if (lowerName.includes("paediatric") || lowerName.includes("pediatric") || lowerName.includes("congenital anomalies") || lowerName.includes("hirschprung") || lowerName.includes("anorectal malformation") || lowerName.includes("cleft")) {
      return "paediatric surgery";
    }
    if (lowerName.includes("burn") || lowerName.includes("burns") || lowerName.includes("scalds") || lowerName.includes("grafts") || lowerName.includes("flaps") || lowerName.includes("contracture") || lowerName.includes("wound") || lowerName.includes("suture") || lowerName.includes("suturing")) {
      return "plastics";
    }
    if (lowerName.includes("cardiothoracic") || lowerName.includes("chest") || lowerName.includes("oesophagus") || lowerName.includes("esophageal") || lowerName.includes("esophagus") || lowerName.includes("diaphragmatic") || lowerName.includes("arterial") || lowerName.includes("venous") || lowerName.includes("airway") || lowerName.includes("heart") || lowerName.includes("thoracic")) {
      return "cardio thoracic surgery";
    }
    if (lowerName.includes("ent") || lowerName.includes("head and neck") || lowerName.includes("salivary") || lowerName.includes("tonsil") || lowerName.includes("cleft")) {
      return "ENT";
    }
    if (lowerName.includes("anaesthesia") || lowerName.includes("anaesthesiology") || lowerName.includes("anesthesia") || lowerName.includes("resuscitation") || lowerName.includes("cpr") || lowerName.includes("pain") || lowerName.includes("antisepsis") || lowerName.includes("operating room")) {
      return "anaesthesiology";
    }
    if (lowerName.includes("neurosurgery") || lowerName.includes("head injury") || lowerName.includes("spinal injury") || lowerName.includes("brain") || lowerName.includes("neurological patient") || lowerName.includes("pituitary") || lowerName.includes("hydrocephalus") || lowerName.includes("spinal cord compression")) {
      return "neurosurgery";
    }
    if (lowerName.includes("fracture") || lowerName.includes("dislocation") || lowerName.includes("joint") || lowerName.includes("bone") || lowerName.includes("scoliosis") || lowerName.includes("kyphosis") || lowerName.includes("limb") || lowerName.includes("deformities") || lowerName.includes("talipes") || lowerName.includes("genu") || lowerName.includes("osteomyelitis") || lowerName.includes("back pain") || lowerName.includes("spine") || lowerName.includes("amputation") || lowerName.includes("rehabilitation") || lowerName.includes("musculoskeletal") || lowerName.includes("gout") || lowerName.includes("arthritis")) {
      return "orthopedics";
    }
    if (lowerName.includes("trauma") || lowerName.includes("triage") || lowerName.includes("acute abdomen") || lowerName.includes("abdominal trauma") || lowerName.includes("injury") || lowerName.includes("injured") || lowerName.includes("shock") || lowerName.includes("bleeding") || lowerName.includes("peritonitis") || lowerName.includes("appendic") || lowerName.includes("perforation") || lowerName.includes("abscess") || lowerName.includes("emergency")) {
      return "trauma/emergency surgery";
    }
    if (lowerName.includes("radiology") || lowerName.includes("imaging") || lowerName.includes("x-ray") || lowerName.includes("ultrasound") || lowerName.includes("ct") || lowerName.includes("mri")) {
      return "radiology";
    }
    if (lowerName.includes("eye") || lowerName.includes("cataract") || lowerName.includes("glaucoma") || lowerName.includes("refractive") || lowerName.includes("ocular") || lowerName.includes("ophthalmology") || lowerName.includes("opthalmology")) {
      return "Opthalmology";
    }
    return "general surgery";
  } else {
    // Community Medicine
    if (lowerName.includes("epidemiolog") || lowerName.includes("triad") || lowerName.includes("disease control") || lowerName.includes("eradication") || lowerName.includes("prevention") || lowerName.includes("endemic") || lowerName.includes("epidemic") || lowerName.includes("pandemic") || lowerName.includes("double burden") || lowerName.includes("emerging") || lowerName.includes("disaster") || lowerName.includes("vector") || lowerName.includes("pest") || lowerName.includes("infectious")) {
      return "epidemiology";
    }
    if (lowerName.includes("occupational") || lowerName.includes("work environment") || lowerName.includes("industrial") || lowerName.includes("safety at work") || lowerName.includes("accident") || lowerName.includes("hazards")) {
      return "occupational health";
    }
    if (lowerName.includes("environmental") || lowerName.includes("water") || lowerName.includes("pollution") || lowerName.includes("waste") || lowerName.includes("sewage") || lowerName.includes("housing") || lowerName.includes("hygiene") || lowerName.includes("sanitation") || lowerName.includes("solid") || lowerName.includes("liquid")) {
      return "environmental health";
    }
    if (lowerName.includes("management") || lowerName.includes("planning") || lowerName.includes("organizing") || lowerName.includes("staffing") || lowerName.includes("health team") || lowerName.includes("leading") || lowerName.includes("supervision") || lowerName.includes("quality improvement") || lowerName.includes("national health policy") || lowerName.includes("utilization") || lowerName.includes("referral") || lowerName.includes("admin")) {
      return "health management";
    }
    if (lowerName.includes("financing") || lowerName.includes("nhis") || lowerName.includes("economics") || lowerName.includes("budget") || lowerName.includes("insurance") || lowerName.includes("retainership") || lowerName.includes("revolving")) {
      return "health economics";
    }
    if (lowerName.includes("international") || lowerName.includes("global") || lowerName.includes("ngo") || lowerName.includes("foreign") || lowerName.includes("port health")) {
      return "international health";
    }
    if (lowerName.includes("reproductive") || lowerName.includes("maternal") || lowerName.includes("child health") || lowerName.includes("child survival") || lowerName.includes("family planning") || lowerName.includes("contraceptive") || lowerName.includes("pregnancy") || lowerName.includes("abortion") || lowerName.includes("infertility") || lowerName.includes("sexual dysfunction") || lowerName.includes("school health") || lowerName.includes("anc") || lowerName.includes("obstetric") || lowerName.includes("post-natal") || lowerName.includes("pmtct") || lowerName.includes("adolescent") || lowerName.includes("baby") || lowerName.includes("fertility") || lowerName.includes("birth")) {
      return "family & reproductive health (including school health services)";
    }
    if (lowerName.includes("education") || lowerName.includes("communication") || lowerName.includes("bcc") || lowerName.includes("iec") || lowerName.includes("promotion")) {
      return "health education";
    }
    if (lowerName.includes("nutrition") || lowerName.includes("nutrients") || lowerName.includes("food") || lowerName.includes("pem") || lowerName.includes("micronutrient") || lowerName.includes("obesity") || lowerName.includes("malnutrition") || lowerName.includes("dietary")) {
      return "public health nutrition";
    }
    if (lowerName.includes("statistics") || lowerName.includes("biostatistics") || lowerName.includes("data") || lowerName.includes("mean") || lowerName.includes("median") || lowerName.includes("central tendencies") || lowerName.includes("dispersion") || lowerName.includes("hypothesis") || lowerName.includes("inferential") || lowerName.includes("chi square") || lowerName.includes("t-test") || lowerName.includes("confidence") || lowerName.includes("sample size") || lowerName.includes("significance") || lowerName.includes("measurements") || lowerName.includes("research methodology") || lowerName.includes("research methods") || lowerName.includes("questionnaire") || lowerName.includes("proposal") || lowerName.includes("thesis") || lowerName.includes("scales")) {
      return "biostatistics";
    }
    if (lowerName.includes("demography") || lowerName.includes("demographics") || lowerName.includes("census") || lowerName.includes("ndhs") || lowerName.includes("marriage") || lowerName.includes("migration") || lowerName.includes("transition") || lowerName.includes("population") || lowerName.includes("fertility") || lowerName.includes("mortality")) {
      return "demographics";
    }
    if (lowerName.includes("sociology") || lowerName.includes("social") || lowerName.includes("underprivileged") || lowerName.includes("traditional practices") || lowerName.includes("impairment") || lowerName.includes("disability") || lowerName.includes("handicap") || lowerName.includes("rehab") || lowerName.includes("welfare") || lowerName.includes("prison") || lowerName.includes("refugees") || lowerName.includes("destitute") || lowerName.includes("abuse") || lowerName.includes("labour")) {
      return "social and rehabilitate medicine";
    }
    if (lowerName.includes("ethics") || lowerName.includes("rights") || lowerName.includes("negligence") || lowerName.includes("conduct") || lowerName.includes("doctor-patient") || lowerName.includes("negligence")) {
      return "medical ethics";
    }
    return "health management";
  }
}

function getLecturer(name: string, sub: string, subject: SubjectType): string {
  const lowerName = name.toLowerCase();

  if (subject === SubjectType.MEDICINE) {
    if (sub === "Nephrology") {
      if (lowerName.includes("replace") || lowerName.includes("dialysis") || lowerName.includes("transplant")) return "Dr. Shitu";
      return "Prof. O.E. Ayodele";
    }
    if (sub === "Cardiology") {
      if (lowerName.includes("hyperten") || lowerName.includes("ecg") || lowerName.includes("myocarditis")) return "Dr. Shitu";
      return "Prof. A.A. Akintunde";
    }
    if (sub === "Endocrinology") return "Prof. M.A. Olamoyegun";
    if (sub === "Neurology") {
      if (lowerName.includes("meningitis") || lowerName.includes("coma")) return "Dr. O. Oni";
      return "Dr. Shitu";
    }
    if (sub === "Dermatology") return "Dr. G.M. Israel";
    if (sub === "Pulmonology") return "Prof. M.O. Tanimowo";
    if (sub === "Gastroenterology") return "Dr. M.M. Oje";
    if (sub === "Psychiatry") return "Dr. Lasebikan";
    return "Clinical Faculty";
  } else if (subject === SubjectType.SURGERY) {
    if (sub === "urology") {
      if (lowerName.includes("calculi") || lowerName.includes("prostate") || lowerName.includes("scrotal")) return "Dr. Odeyemi";
      return "Dr. Idowu";
    }
    if (sub === "orthopedics" || sub === "trauma/emergency surgery") {
      if (lowerName.includes("fracture") || lowerName.includes("osteomyelitis")) return "Dr. Olanipekun";
      if (lowerName.includes("spine") || lowerName.includes("back pain")) return "Prof. Ajaga";
      return "Dr. Olatide";
    }
    if (sub === "neurosurgery") return "Dr. Adeleke";
    if (sub === "paediatric surgery") return "Dr. Akinloye";
    if (sub === "plastics") return "Dr. Onilede";
    if (sub === "ENT") return "Dr. Adedayo";
    if (sub === "anaesthesiology") return "Dr. Raji";
    if (sub === "radiology") return "Dr. Adebayo";
    if (sub === "Opthalmology") return "Dr. Olayemi";
    return "Dr. Akanbi";
  } else {
    // Community Medicine
    if (sub === "epidemiology") {
      if (lowerName.includes("disaster")) return "Dr. Bada";
      return "Dr. Israel";
    }
    if (sub === "biostatistics") {
      if (lowerName.includes("proposal") || lowerName.includes("thesis") || lowerName.includes("research methods")) return "Prof. Durowade";
      if (lowerName.includes("museum") || lowerName.includes("laboratory")) return "Dr. Akindele";
      return "Prof. Egbewale";
    }
    if (sub === "environmental health") return "Dr. Olarewaju";
    if (sub === "family & reproductive health (including school health services)") {
      if (lowerName.includes("maternal") || lowerName.includes("child") || lowerName.includes("planning")) return "Prof. Olugbenga-Bello";
      return "Dr. Ilori";
    }
    if (sub === "public health nutrition" || sub === "social and rehabilitate medicine") return "Dr. Ige";
    return "Dr. Ilori";
  }
}

function checkHighYield(name: string, sub: string): boolean {
  const lowerName = name.toLowerCase();
  
  // Explicit clinical high yield core topics for MBBS final examinations
  const hyKeywords = [
    "hypertension", "heart failure", "rheumatic", "stroke", "meningitis", "diabetes", 
    "diabetic", "thyroid", "ckd", "aki", "glomerular", "glomerulonephritis", "asthma", 
    "tuberculosis", "pneumonia", "peptic ulcer", "intestinal obstruction", "acute abdomen", 
    "appendicitis", "breast", "prostate", "fracture", "dislocation", "head injury", 
    "primary health care", "epidemiologic methods", "maternal", "infant", "child survival", 
    "family planning", "statistics", "sepsis", "malaria"
  ];

  return hyKeywords.some(kw => lowerName.includes(kw)) || sub === "Cardiology" || sub === "Nephrology" || sub === "Endocrinology" || sub === "urology";
}

function getPriority(subject: SubjectType): StudyPriority {
  if (subject === SubjectType.COMMUNITY_MEDICINE) return StudyPriority.HIGH;
  if (subject === SubjectType.MEDICINE) return StudyPriority.ADVANCE_PREP;
  return StudyPriority.UPCOMING;
}

// Map simple string lists to the database schema
const allRawTopics: Omit<Topic, 'id' | 'status'>[] = [
  ...medicine1Topics.map(name => ({
    subject: SubjectType.MEDICINE,
    batch: "M1",
    topicName: name,
    lecturer: getLecturer(name, getSubspecialty(name, SubjectType.MEDICINE), SubjectType.MEDICINE),
    subspecialty: getSubspecialty(name, SubjectType.MEDICINE),
    priority: getPriority(SubjectType.MEDICINE),
    batchPriority: 1,
    highYield: checkHighYield(name, getSubspecialty(name, SubjectType.MEDICINE))
  })),
  ...medicine2Topics.map(name => ({
    subject: SubjectType.MEDICINE,
    batch: "M2",
    topicName: name,
    lecturer: getLecturer(name, getSubspecialty(name, SubjectType.MEDICINE), SubjectType.MEDICINE),
    subspecialty: getSubspecialty(name, SubjectType.MEDICINE),
    priority: getPriority(SubjectType.MEDICINE),
    batchPriority: 2,
    highYield: checkHighYield(name, getSubspecialty(name, SubjectType.MEDICINE))
  })),
  ...medicine3Topics.map(name => ({
    subject: SubjectType.MEDICINE,
    batch: "M3",
    topicName: name,
    lecturer: getLecturer(name, getSubspecialty(name, SubjectType.MEDICINE), SubjectType.MEDICINE),
    subspecialty: getSubspecialty(name, SubjectType.MEDICINE),
    priority: getPriority(SubjectType.MEDICINE),
    batchPriority: 3,
    highYield: checkHighYield(name, getSubspecialty(name, SubjectType.MEDICINE))
  })),
  ...surgery1Topics.map(name => ({
    subject: SubjectType.SURGERY,
    batch: "S1",
    topicName: name,
    lecturer: getLecturer(name, getSubspecialty(name, SubjectType.SURGERY), SubjectType.SURGERY),
    subspecialty: getSubspecialty(name, SubjectType.SURGERY),
    priority: getPriority(SubjectType.SURGERY),
    batchPriority: 1,
    highYield: checkHighYield(name, getSubspecialty(name, SubjectType.SURGERY))
  })),
  ...surgery2Topics.map(name => ({
    subject: SubjectType.SURGERY,
    batch: "S2",
    topicName: name,
    lecturer: getLecturer(name, getSubspecialty(name, SubjectType.SURGERY), SubjectType.SURGERY),
    subspecialty: getSubspecialty(name, SubjectType.SURGERY),
    priority: getPriority(SubjectType.SURGERY),
    batchPriority: 2,
    highYield: checkHighYield(name, getSubspecialty(name, SubjectType.SURGERY))
  })),
  ...surgery3Topics.map(name => ({
    subject: SubjectType.SURGERY,
    batch: "S3",
    topicName: name,
    lecturer: getLecturer(name, getSubspecialty(name, SubjectType.SURGERY), SubjectType.SURGERY),
    subspecialty: getSubspecialty(name, SubjectType.SURGERY),
    priority: getPriority(SubjectType.SURGERY),
    batchPriority: 3,
    highYield: checkHighYield(name, getSubspecialty(name, SubjectType.SURGERY))
  })),
  ...communityMedicine1Topics.map(name => ({
    subject: SubjectType.COMMUNITY_MEDICINE,
    batch: "CM1",
    topicName: name,
    lecturer: getLecturer(name, getSubspecialty(name, SubjectType.COMMUNITY_MEDICINE), SubjectType.COMMUNITY_MEDICINE),
    subspecialty: getSubspecialty(name, SubjectType.COMMUNITY_MEDICINE),
    priority: getPriority(SubjectType.COMMUNITY_MEDICINE),
    batchPriority: 1,
    highYield: checkHighYield(name, getSubspecialty(name, SubjectType.COMMUNITY_MEDICINE))
  })),
  ...communityMedicine2Topics.map(name => ({
    subject: SubjectType.COMMUNITY_MEDICINE,
    batch: "CM2",
    topicName: name,
    lecturer: getLecturer(name, getSubspecialty(name, SubjectType.COMMUNITY_MEDICINE), SubjectType.COMMUNITY_MEDICINE),
    subspecialty: getSubspecialty(name, SubjectType.COMMUNITY_MEDICINE),
    priority: getPriority(SubjectType.COMMUNITY_MEDICINE),
    batchPriority: 2,
    highYield: checkHighYield(name, getSubspecialty(name, SubjectType.COMMUNITY_MEDICINE))
  }))
];

// Deduplicates raw clinical syllabus data according to the user's criteria:
// 1. Group by subject group (Medicine, Surgery, Community Medicine)
// 2. Normalize and check similarity (by sorting core keywords, completely order-independent)
// 3. Keep canonical recency (e.g., S3 > S2 > S1)
// 4. Trace the batches it was found in, and append `[Repeated in S1, S3]` to the canonical name!
export function getCuratedSyllabus(): Topic[] {
  const grouped: Record<string, Record<string, typeof allRawTopics[0] & { batches: string[] }>> = {
    [SubjectType.MEDICINE]: {},
    [SubjectType.SURGERY]: {},
    [SubjectType.COMMUNITY_MEDICINE]: {}
  };

  allRawTopics.forEach(item => {
    const key = getNormalKey(item.topicName);
    const subjectGroup = grouped[item.subject];
    const existing = subjectGroup[key];

    if (!existing) {
      subjectGroup[key] = {
        ...item,
        batches: [item.batch]
      };
    } else {
      // Record this batch if not already added
      if (!existing.batches.includes(item.batch)) {
        existing.batches.push(item.batch);
      }

      // Check recency (higher batchPriority gets canonical precedence)
      if (item.batchPriority > existing.batchPriority) {
        // Current item is more recent, overwrite canonical metadata but preserve collected batches
        const oldBatches = existing.batches;
        subjectGroup[key] = {
          ...item,
          batches: oldBatches
        };
      }
    }
  });

  const curatedList: Topic[] = [];
  let idCounter = 1;

  Object.values(grouped).forEach(subjectGroup => {
    Object.values(subjectGroup).forEach(item => {
      // Sort batches for clean rendering, e.g., ["S1", "S3"]
      item.batches.sort();
      
      // If it appears in multiple batches, specify that it is repeated
      let formattedName = item.topicName;
      if (item.batches.length > 1) {
        formattedName = `${item.topicName} [Repeated in ${item.batches.join(", ")}]`;
      }

      curatedList.push({
        id: `topic_${idCounter++}`,
        subject: item.subject,
        batch: item.batch,
        topicName: formattedName,
        lecturer: item.lecturer,
        subspecialty: item.subspecialty,
        priority: item.priority,
        batchPriority: item.batchPriority,
        highYield: item.highYield,
        status: StudyStatus.NOT_STARTED
      });
    });
  });

  return curatedList;
}

export const postingScheduleTimeline = [
  { id: 1, title: "Community Medicine Posting", dateRange: "June 29 - August 2, 2026", focus: "Epidemiology, Biostatistics, Environmental Health, Public Health Nutrition" },
  { id: 2, title: "Internal Medicine Posting", dateRange: "August 3 - September 6, 2026", focus: "Cardiology, Nephrology, Neurology, Endocrinology, Respiratory, GI" },
  { id: 3, title: "Surgery Posting & Integrated Revision", dateRange: "September 7 - October 11, 2026", focus: "General Surgery, Urology, Trauma/Orthopaedics, Neurosurgery, Paediatrics" }
];
