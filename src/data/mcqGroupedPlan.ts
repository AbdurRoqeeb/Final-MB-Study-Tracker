import { Topic, SubjectType, StudyStatus } from '../types';

export interface SpecialtyMcqGroup {
  specialty: SubjectType;
  groupTitle: string;
  themeKeywords: string[];
  highYieldPearl: string;
  mcqExamTips: string[];
}

export interface DayMcqGrouping {
  dayNumber: number;
  dayTheme: string;
  medicineGroup: SpecialtyMcqGroup;
  surgeryGroup: SpecialtyMcqGroup;
  commMedGroup: SpecialtyMcqGroup;
}

export const DAY_MCQ_GROUPINGS: Record<number, DayMcqGrouping> = {
  1: {
    dayNumber: 1,
    dayTheme: "Cardiology & Vascular + Acute Abdomen & Trauma + Primary Health Care",
    medicineGroup: {
      specialty: SubjectType.MEDICINE,
      groupTitle: "Cardiovascular System Satellite Cluster",
      themeKeywords: ["infective endocarditis", "electrocardiography", "rheumatic fever", "pericarditis", "adult congenital", "brady- and tachyarrhythmias", "cardiomyopathies", "pregnancy and heart disease", "syncope", "hypertensive heart", "ischaemic heart"],
      highYieldPearl: "Duke criteria for Infective Endocarditis: 2 Major (positive blood cultures for typical organisms, echo showing vegetation/abscess/dehiscence) OR 1 Major + 3 Minor.",
      mcqExamTips: [
        "ECG: Short PR + Delta wave = WPW. Reverse tick ST sagging = Digoxin. Tall tented T waves = Hyperkalemia.",
        "Infective endocarditis prophylaxis: Amoxicillin 2g PO 30-60 mins before high-risk dental procedures (prosthetic valve, prior IE, cyanotic CHD).",
        "Cannon a-waves in JVP occur when right atrium contracts against closed tricuspid valve (complete heart block, ventricular tachycardia)."
      ]
    },
    surgeryGroup: {
      specialty: SubjectType.SURGERY,
      groupTitle: "Vascular, Trauma & Emergency Cluster",
      themeKeywords: ["varicose veins", "common urological emergency", "stings and bites", "typhoid enteritis", "fluid & electrolyte management", "sutures, drains", "surgical wound management", "surgical bleeding and hemostasis"],
      highYieldPearl: "Well's score >2 points indicates likely DVT; order compression ultrasound immediately. If score ≤1, order D-dimer to rule out.",
      mcqExamTips: [
        "Unfractionated heparin reversal: Protamine sulfate (1mg per 100 units heparin). Warfarin reversal: Vitamin K + Prothrombin Complex Concentrate (PCC).",
        "Trendelenburg test differentiates saphenofemoral junction incompetence (controls reflux upon standing with tourniquet) from perforator incompetence.",
        "Tetanus prone wounds: Dirt/soil contamination, puncture wounds, devitalized tissue >6 hours old (give Td booster + Tetanus Immunoglobulin 250-500 IU)."
      ]
    },
    commMedGroup: {
      specialty: SubjectType.COMMUNITY_MEDICINE,
      groupTitle: "Primary Health Care & Health Systems Cluster",
      themeKeywords: ["primary health care", "organization of services in phc", "health management: introduction", "history of public health", "central tendencies", "measures of dispersion"],
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
    dayTheme: "Neurology & CNS + Intestinal Obstruction & Hernias + Epidemiology & Surveillance",
    medicineGroup: {
      specialty: SubjectType.MEDICINE,
      groupTitle: "Neurological & Cerebrovascular Satellite Cluster",
      themeKeywords: ["meningitis", "approach to neurological examination", "headache syndromes", "spinal cord compression", "epilepsy", "parkinson's", "coma", "peripheral neuropathies", "sleep disorders"],
      highYieldPearl: "CSF bacterial meningitis: polymorph predominance, low glucose (<40% serum), high protein (>1g/L), cloudy. Give IV Dexamethasone with or before antibiotics to prevent hearing loss.",
      mcqExamTips: [
        "UMN 7th nerve palsy spares the upper face/forehead (bilateral cortical innervation); LMN 7th palsy involves entire ipsilateral face (Bell's palsy).",
        "Wernicke encephalopathy classic triad: Ophthalmoplegia (nystagmus/6th nerve palsy), Ataxia, Confusion. Give IV Thiamine BEFORE dextrose.",
        "Status epilepticus first-line: IV Lorazepam 4mg or Diazepam 10mg; if seizing persists past 10 mins: IV Phenytoin 20mg/kg or Levetiracetam 60mg/kg."
      ]
    },
    surgeryGroup: {
      specialty: SubjectType.SURGERY,
      groupTitle: "Abdominal Radiology & Bowel Obstruction Cluster",
      themeKeywords: ["imaging in surgery", "neonatal intestinal obstruction", "hirschprung disease", "diseases of esophagus", "anorectal disease", "large intestine", "anorectal malformation"],
      highYieldPearl: "Coffee-bean sign on plain abdominal X-ray indicates Sigmoid Volvulus (apex points to right upper quadrant). Initial therapy: rigid sigmoidoscopy + flatus tube decompression.",
      mcqExamTips: [
        "Cecal volvulus points to the left upper quadrant; requires surgical right hemicolectomy or cecopexy (endoscopic decompression has high failure rate).",
        "Rigler sign (double wall sign) indicates pneumoperitoneum with gas on both luminal and peritoneal sides of the bowel wall.",
        "Hirschsprung disease: failure to pass meconium within 48 hours; rectal suction biopsy showing absence of ganglion cells in Auerbach/Meissner plexuses is gold standard."
      ]
    },
    commMedGroup: {
      specialty: SubjectType.COMMUNITY_MEDICINE,
      groupTitle: "Epidemiological Methods & Surveillance Cluster",
      themeKeywords: ["epidemiology: definition", "epidemiology: triad", "epidemiological methods", "endemic diseases of skin", "double burden of disease", "epidemiological transition"],
      highYieldPearl: "Levels of prevention: Primordial (lifestyle/risk factor emergence prevention), Primary (vaccination/health promotion), Secondary (screening/Pap smear/early diagnosis), Tertiary (disability limitation/rehab).",
      mcqExamTips: [
        "Epidemiological Triad: Agent, Host, Environment interconnected by vector.",
        "Immediate notifiable diseases (within 24 hours): Cholera, Yellow fever, Polio, Avian influenza, Lassa fever, Rabies, Measles.",
        "Incidence = new cases over population at risk in a given time period; Prevalence = all existing cases over total population at a point in time."
      ]
    }
  },
  3: {
    dayNumber: 3,
    dayTheme: "Respiratory & TB + Surgical Shock & Critical Care + Environmental Health & Water",
    medicineGroup: {
      specialty: SubjectType.MEDICINE,
      groupTitle: "Respiratory & Pulmonology Satellite Cluster",
      themeKeywords: ["tuberculosis", "pleural effusion", "chronic obstructive pulmonary", "carcinoma of the lungs", "respiratory failure", "bronchial asthma", "pneumonias"],
      highYieldPearl: "Light's criteria for exudative pleural effusion (at least one): Pleural/Serum protein >0.5, Pleural/Serum LDH >0.6, Pleural LDH >2/3 upper limit of normal serum LDH.",
      mcqExamTips: [
        "Mantoux test positive cutoff: ≥5mm in HIV/severely immunosuppressed or close TB contacts; ≥10mm in healthcare workers/endemic countries; ≥15mm in low-risk individuals.",
        "CURB-65 pneumonia severity score: Confusion, Urea >7 mmol/L, RR ≥30/min, BP <90 systolic or ≤60 diastolic, Age ≥65. Score ≥3 warrants ICU admission.",
        "Spirometry: FEV1/FVC <0.70 confirms obstructive defect; if post-bronchodilator improvement >12% and >200mL, Asthma is diagnosed."
      ]
    },
    surgeryGroup: {
      specialty: SubjectType.SURGERY,
      groupTitle: "Critical Care, Burns & ENT Satellite Cluster",
      themeKeywords: ["shock/ circulatory collapse", "surgical bleeding", "blood transfusions in surgery", "surgical infection and antibiotics", "burn / grafts", "salivary gland diseases / common ent"],
      highYieldPearl: "Hemorrhagic shock classes: Class I (<15% blood loss, normal vitals), Class II (15-30%, tachycardia), Class III (30-40%, hypotension + marked tachycardia), Class IV (>40%, profound shock/anuria).",
      mcqExamTips: [
        "Parkland formula for burns: 4 mL × weight (kg) × % TBSA (2nd & 3rd degree); give 1st half in first 8 hours FROM INJURY, 2nd half in next 16 hours.",
        "Little's area (Kiesselbach plexus) anterior epistaxis: anterior ethmoidal, sphenopalatine, greater palatine, superior labial arteries.",
        "Foreign bodies aspirated into the bronchial tree lodge most commonly in the RIGHT main bronchus (wider, shorter, more vertical)."
      ]
    },
    commMedGroup: {
      specialty: SubjectType.COMMUNITY_MEDICINE,
      groupTitle: "Environmental Health, Water & Sanitation Cluster",
      themeKeywords: ["environmental health: introduction, components, water", "solid and liquid waste management", "vector/pest control", "housing and health", "assessment of quality of water"],
      highYieldPearl: "Break-point chlorination is the point where chlorine demand is satisfied and free residual chlorine (0.5 mg/L after 30 mins contact time) remains to kill bacteria.",
      mcqExamTips: [
        "Slow sand filter (biological purification via Schmutzdecke vital layer, cleaned by scraping) vs Rapid sand filter (chemical coagulation with alum, cleaned by backwashing).",
        "Clinical waste color codes: Yellow = infectious/pathological waste (incineration); Red = highly infectious plastic; Brown = pharmaceutical; Black = non-hazardous domestic.",
        "Overcrowding standard: Floor area per person >110 sq ft is acceptable; <50 sq ft indicates severe overcrowding."
      ]
    }
  },
  4: {
    dayNumber: 4,
    dayTheme: "Endocrinology & DKA + Urology & Scrotal Conditions + Demography & Statistics",
    medicineGroup: {
      specialty: SubjectType.MEDICINE,
      groupTitle: "Endocrine & Metabolic Satellite Cluster",
      themeKeywords: ["calcium metabolism", "current guidelines in the management of diabetes", "thyroid disorders", "adrenal gland disorders", "obesity and medical nutrition", "insulin therapy", "acute and chronic complications of diabetes"],
      highYieldPearl: "DKA diagnostic triad: Blood glucose >11 mmol/L (or known DM), Venous pH <7.30 or Bicarbonate <15 mmol/L, Ketonemia >3.0 mmol/L or urine ketones ≥2+.",
      mcqExamTips: [
        "DKA management sequence: 1st IV isotonic saline, 2nd Fixed-rate insulin 0.1 units/kg/hr, 3rd Potassium replacement once K+ <5.5 mmol/L (HOLD insulin if K+ <3.3 mmol/L).",
        "Burch-Wartofsky score for Thyroid Storm (temperature, tachycardia, delirium, jaundice). Sequence: Propranolol → PTU → Lugol's iodine (1 hr post PTU) → Hydrocortisone.",
        "Primary hyperparathyroidism: high Ca, low PO4, elevated PTH. Hypoparathyroidism: low Ca, high PO4, low PTH, prolonged QTc on ECG."
      ]
    },
    surgeryGroup: {
      specialty: SubjectType.SURGERY,
      groupTitle: "Urology, Calculi & Scrotal Satellite Cluster",
      themeKeywords: ["urolithiasis", "prostate gland", "scrotal swellings", "urogenital injuries", "tumors of the urinary tract", "investigations in urology", "hematuria, new trends", "paediatric urology"],
      highYieldPearl: "Testicular torsion vs Epididymo-orchitis: Negative Prehn sign (lifting scrotum does not relieve pain) and absent cremasteric reflex indicate torsion. Must operate within 6 hours.",
      mcqExamTips: [
        "Kidney stones: Calcium oxalate (80%, radiopaque, envelope shaped), Struvite (magnesium ammonium phosphate, staghorn, Proteus mirabilis urease producers, alkaline urine), Uric acid (radiolucent on plain X-ray).",
        "Urethral injury: High-riding prostate + blood at urethral meatus + butterfly perineal hematoma in pelvic fracture = membranous posterior urethra rupture. DO NOT blind catheterize; perform suprapubic cystostomy.",
        "BPH: Transitional zone hyperplasia; Prostate Cancer: Peripheral zone adenocarcinoma (osteoblastic bone metastases)."
      ]
    },
    commMedGroup: {
      specialty: SubjectType.COMMUNITY_MEDICINE,
      groupTitle: "Demography & Vital Statistics Cluster",
      themeKeywords: ["demography: introduction", "census, ndhs", "demographic process: marriage", "demographic transition", "vital statistics and health indicators", "measures of central tendencies"],
      highYieldPearl: "Maternal Mortality Ratio (MMR): Deaths of women from pregnancy-related causes per 100,000 LIVE BIRTHS. Maternal Mortality Rate: per 1,000 WOMEN OF REPRODUCTIVE AGE (15-49).",
      mcqExamTips: [
        "Infant Mortality Rate (IMR): Deaths under 1 year per 1,000 live births (sensitive indicator of socio-economic development and health service availability).",
        "Demographic Transition Model: Stage 1 (High birth, high death), Stage 2 (High birth, falling death = population explosion), Stage 3 (Falling birth, low death), Stage 4 (Low birth, low death).",
        "De facto census: counting people where present on census night. De jure census: counting people by permanent/customary residence."
      ]
    }
  },
  5: {
    dayNumber: 5,
    dayTheme: "GI, Liver & Hepatitis + Ophthalmology & Head/Neck + Occupational Health & Toxicology",
    medicineGroup: {
      specialty: SubjectType.MEDICINE,
      groupTitle: "Gastroenterology & Hepatology Satellite Cluster",
      themeKeywords: ["gastrointestinal bleeding", "viral hepatitis", "gallstone disease, pancreatitis", "acute liver failure", "peptic ulcer disease", "gastroesophageal reflux", "amoebiasis", "gastrointestinal malignancies"],
      highYieldPearl: "Hepatitis B serology: HBsAg = active infection; Anti-HBs = immunity (vaccine or past infection); Anti-HBc IgM = acute infection; Anti-HBc IgG = chronic infection or resolved; HBeAg = high replication/infectivity.",
      mcqExamTips: [
        "Upper GI bleed Rockall and Glasgow-Blatchford scores guide risk stratification. Terlipressin + prophylactic IV Ceftriaxone for variceal bleeding.",
        "Spontaneous Bacterial Peritonitis (SBP): Asitic fluid absolute neutrophil count (ANC) ≥250 cells/mm³; treat with IV Cefotaxime.",
        "Glasgow-Imrie and Ranson criteria assess acute pancreatitis severity at admission and 48 hours."
      ]
    },
    surgeryGroup: {
      specialty: SubjectType.SURGERY,
      groupTitle: "Ophthalmology & ENT Satellite Cluster",
      themeKeywords: ["common eye problems", "cataracts and blindness", "glaucoma", "red eye", "facial cleft", "head and neck masses", "salivary gland"],
      highYieldPearl: "Acute closed-angle glaucoma triad: Severe eye pain with halos, mid-dilated fixed non-reactive pupil, steamy cornea, stony hard globe. Give IV Acetazolamide + topical Pilocarpine 2% + Timolol.",
      mcqExamTips: [
        "Cataract: Lens opacification; most common cause of reversible blindness worldwide. Nuclear sclerotic causes progressive myopia ('second sight').",
        "Trachoma (Chlamydia trachomatis serovars A, B, Ba, C): SAFE strategy (Surgery for trichiasis, Antibiotics [Azithromycin], Facial cleanliness, Environmental improvement).",
        "Pleomorphic adenoma (benign mixed tumor): Most common parotid tumor; superficial parotidectomy with facial nerve preservation is procedure of choice."
      ]
    },
    commMedGroup: {
      specialty: SubjectType.COMMUNITY_MEDICINE,
      groupTitle: "Occupational Health & Toxicology Cluster",
      themeKeywords: ["occupational health: definition", "occupational health: services and practice", "component of the work environment", "workmen compensation and factory act", "chemical safety & poisoning"],
      highYieldPearl: "Silicosis: Quarries, sandblasting, foundries; affects upper lobes with eggshell calcification of hilar lymph nodes; increases susceptibility to pulmonary tuberculosis.",
      mcqExamTips: [
        "Asbestosis: Shipbuilders, pipe fitters, roofing; affects lower lobes with calcified pleural plaques; causes bronchogenic carcinoma (most common) and mesothelioma (most specific, 30-40 yr latency).",
        "Byssinosis: Cotton, flax, hemp textile mill workers; classic symptom is chest tightness on Monday mornings after weekend off.",
        "Ergonomic hazards cause work-related musculoskeletal disorders (WRMSDs) like carpal tunnel syndrome, tenosynovitis, and lower back strain."
      ]
    }
  },
  6: {
    dayNumber: 6,
    dayTheme: "Infectious Diseases & Parasitology + Paediatric Surgery + Medical Ethics & Forensics",
    medicineGroup: {
      specialty: SubjectType.MEDICINE,
      groupTitle: "Infectious & Tropical Diseases Satellite Cluster",
      themeKeywords: ["malaria", "typhoid", "tetanus", "rabies", "clostridial infections", "salmonella", "haemorrhagic viral disease", "cholera", "trematode and nematode infection", "pyrexia of unknown origin"],
      highYieldPearl: "Severe malaria criteria: Impaired consciousness (GCS <11), severe normocytic anemia (Hb <5 g/dL), hypoglycemia (<2.2 mmol/L), metabolic acidosis, acute kidney injury. Gold standard: IV Artesunate 2.4 mg/kg at 0, 12, 24h.",
      mcqExamTips: [
        "Post-exposure rabies prophylaxis (PEP): Category I (touching intact skin = wash only); Category II (minor scratch = vaccine); Category III (bite with bleeding/saliva on broken skin = Vaccine + Rabies Immunoglobulin infiltrated around wound).",
        "Tetanus: Caused by tetanospasmin from Clostridium tetani (blocks inhibitory GABA/glycine release from Renshaw cells). Trismus (lockjaw), risus sardonicus, opisthotonos.",
        "Schistosoma haematobium: Terminal spine on ova; causes painless terminal hematuria and squamous cell carcinoma of bladder. Schistosoma mansoni: Lateral spine; causes pipe-stem cirrhosis."
      ]
    },
    surgeryGroup: {
      specialty: SubjectType.SURGERY,
      groupTitle: "Paediatric Surgery Satellite Cluster",
      themeKeywords: ["common pediatric surgical problems", "congenital anomalies in paediatric", "pediatrics surgical emergency", "anorectal malformation", "congenital malformation of nervous system", "facial cleft"],
      highYieldPearl: "Infantile hypertrophic pyloric stenosis: First-born male at 3-6 weeks, projectile non-bilious vomiting, visible peristalsis, palpable olive mass in RUQ, hypochloremic hypokalemic metabolic alkalosis with paradoxical aciduria.",
      mcqExamTips: [
        "Intussusception: 3 months to 2 years, colicky crying with legs drawn up, red currant jelly stool, sausage-shaped mass with empty right iliac fossa (Dance sign); air/hydrostatic enema reduction is diagnostic and therapeutic.",
        "Rule of 10s for cleft lip repair: Age ≥10 weeks, Weight ≥10 lbs, Hemoglobin ≥10 g/dL, WBC <10,000/mm³.",
        "Congenital diaphragmatic hernia (Bochdalek postero-lateral left-sided most common): Scaphoid abdomen, respiratory distress, bowel sounds in chest; DO NOT bag-mask ventilate (distends stomach and compresses lung)."
      ]
    },
    commMedGroup: {
      specialty: SubjectType.COMMUNITY_MEDICINE,
      groupTitle: "Medical Ethics & Forensic Medicine Cluster",
      themeKeywords: ["medical ethics: definition", "medical ethics: duties of doctors", "professional negligence, code of conduct", "forensic medicine", "signs of death and post-mortem changes"],
      highYieldPearl: "Four elements of Medical Negligence (4 Ds): Duty of care, Dereliction (breach of standard of care), Direct causation, Damages.",
      mcqExamTips: [
        "Four Bioethical Principles (Beauchamp & Childress): Autonomy (informed consent), Beneficence (acting in patient's best interest), Non-maleficence (primum non nocere), Justice (equitable resource distribution).",
        "Rigor mortis starts in small muscles (jaw, eyelids) in 2-4 hours, fully establishes at 12 hours, persists for 12 hours, disappears by 36 hours. Algor mortis: cooling rate ~1.5°F/hr.",
        "Post-mortem lividity (hypostasis) becomes fixed after 8-12 hours; purplish discoloration in dependent areas. If lividity is discordant with body position, body was moved post-mortem."
      ]
    }
  },
  7: {
    dayNumber: 7,
    dayTheme: "Nephrology & Renal Failure + Orthopaedics & Fractures + Maternal & Child Health",
    medicineGroup: {
      specialty: SubjectType.MEDICINE,
      groupTitle: "Renal & Glomerular Satellite Cluster",
      themeKeywords: ["acute kidney injury", "chronic kidney disease", "kidney replacement therapy", "urinary tract infection", "kidney transplantation", "evaluation of glomerular diseases", "diabetic kidney disease"],
      highYieldPearl: "KDIGO AKI criteria: Serum creatinine rise ≥26.5 µmol/L (0.3 mg/dL) within 48h, or ≥1.5x baseline within 7 days, or urine output <0.5 mL/kg/h for 6 hours.",
      mcqExamTips: [
        "Urgent indications for hemodialysis (AEIOU): Acidosis (refractory pH <7.1), Electrolytes (refractory K+ >6.5 with ECG changes), Ingestion/toxins (Lithium, Methanol, Salicylates), Overload (pulmonary edema), Uremia (pericarditis, encephalopathy).",
        "Nephrotic syndrome triad: Heavy proteinuria (>3.5 g/24h or PCR >300 mg/mmol), Hypoalbuminemia (<30 g/L), Generalized edema, Hyperlipidemia.",
        "RBC casts on urinalysis are pathognomonic of acute glomerulonephritis / nephritic syndrome."
      ]
    },
    surgeryGroup: {
      specialty: SubjectType.SURGERY,
      groupTitle: "Orthopaedics & Musculoskeletal Satellite Cluster",
      themeKeywords: ["principles of fracture management", "fractures and dislocations of lower limbs", "talipes and genu deformities", "bone tumours", "acute and chronic osteomyelitis", "management of chest injuries", "spinal injuries", "nerve injury"],
      highYieldPearl: "Salter-Harris fracture classification (SALTR): Type I (Separated physis), Type II (Above physis into Metaphysis - most common), Type III (Lower into Epiphysis), Type IV (Through all 3), Type V (cRush of growth plate).",
      mcqExamTips: [
        "Acute osteomyelitis in children: Most common organism is Staphylococcus aureus (Salmonella in sickle cell disease); subperiosteal abscess on X-ray shows periosteal elevation (takes 10-14 days to appear).",
        "Congenital Talipes Equinovarus (CTEV / Clubfoot) components: CAVE (Cavus, Adductus, Varus, Equinus); corrected by Ponseti serial casting.",
        "Anterior shoulder dislocation: Most common dislocation (95%), square shoulder appearance, loss of deltoid contour, risk of axillary nerve injury (regimental badge sensory loss)."
      ]
    },
    commMedGroup: {
      specialty: SubjectType.COMMUNITY_MEDICINE,
      groupTitle: "Maternal & Child Health / Immunization Cluster",
      themeKeywords: ["reproductive health: maternal health", "reproductive health: child health", "child survival strategies", "school health programme and services", "family planning, information", "nutrition in children"],
      highYieldPearl: "GOBI-FFF child survival strategies (UNICEF): Growth monitoring, Oral rehydration therapy, Breastfeeding, Immunization, Female education, Family planning, Food supplementation.",
      mcqExamTips: [
        "Cold chain temperature: +2°C to +8°C in refrigerator (OPV and Yellow fever stored at -20°C in freezer). Never freeze DTP, Pentavalent, Tetanus, or Hep B vaccines.",
        "Vaccine Vial Monitor (VVM): discard vaccine if the inner square matches or is darker than the outer circle.",
        "Pearl Index: Number of accidental pregnancies per 100 woman-years of contraceptive use. Copper IUD is the most effective post-coital emergency contraceptive within 5 days."
      ]
    }
  },
  8: {
    dayNumber: 8,
    dayTheme: "Dermatology & Skin Disorders + Anaesthesia & Resuscitation + Research Methods & Biostats",
    medicineGroup: {
      specialty: SubjectType.MEDICINE,
      groupTitle: "Dermatology & Venereology Satellite Cluster",
      themeKeywords: ["superficial fungal", "deep fungal", "viral/bacterial/parasitic skin", "papulosquamous disorders", "pigmentary skin disorders", "immunobullous skin disorders", "dermatologic emergency", "eczema", "leprosy", "sexually transmitted disease"],
      highYieldPearl: "Psoriasis hallmarks: Auspitz sign (pinpoint bleeding on removing silvery micaceous scale), Koebner phenomenon, oil drop nail sign. AVOID systemic steroids (causes generalized pustular psoriasis).",
      mcqExamTips: [
        "Lichen planus 6 Ps: Pruritic, Polygonal, Planar, Purple, Papules, Plaques with Wickham striae on oral mucosa.",
        "Pemphigus vulgaris (flaccid bullae, intraepidermal acantholysis, anti-desmoglein 1/3, positive Nikolsky sign) vs Bullous pemphigoid (tense bullae, subepidermal, anti-hemidesmosome BP180/230, negative Nikolsky).",
        "Leprosy (Hansen disease): Tuberculoid (few hypopigmented anesthetic macules, strong cell-mediated immunity) vs Lepromatous (diffuse leonine facies, loss of eyebrows/madarosis, high bacteriological index, globi on slit-skin smear)."
      ]
    },
    surgeryGroup: {
      specialty: SubjectType.SURGERY,
      groupTitle: "Anaesthesia, Resuscitation & Fluids Cluster",
      themeKeywords: ["anesthesia overview 1", "peri-operative care", "cardiopulmonary resuscitation", "pain management", "fluid and electrolyte balance in surgical", "operating room ethics"],
      highYieldPearl: "Malignant hyperthermia: Triggered by volatile halogenated anesthetics (Halothane, Isoflurane) and Succinylcholine (RYR1 receptor mutation). Masseter spasm, hyperthermia, hypercapnia. Treat immediately with IV DANTROLENE (2.5 mg/kg).",
      mcqExamTips: [
        "Local anesthetic systemic toxicity (LAST): Circumoral numbness, metallic taste, tinnitus, seizures, cardiovascular collapse. Antidote is 20% Intralipid emulsion.",
        "Mallampati score predicts difficult intubation: Class I (soft palate, fauces, uvula, pillars visible) to Class IV (only hard palate visible).",
        "Spinal anesthesia hypotension is caused by sympathetic blockade resulting in arteriolar and venous dilation; treat with IV fluid bolus and Ephedrine / Phenylephrine."
      ]
    },
    commMedGroup: {
      specialty: SubjectType.COMMUNITY_MEDICINE,
      groupTitle: "Research Methods & Advanced Biostatistics Cluster",
      themeKeywords: ["medical statistics: data summary measures", "inferential statistics", "research methods: concept, uses", "study designs / sampling techniques", "scales of measurements", "concept of confidence interval"],
      highYieldPearl: "Study designs hierarchy: Meta-analysis & Systematic Reviews > Randomized Controlled Trials > Cohort studies (calculate Relative Risk) > Case-control studies (calculate Odds Ratio) > Cross-sectional (calculate Prevalence).",
      mcqExamTips: [
        "Type I error (α): Rejecting null hypothesis when it is actually true (false positive; α typically 0.05). Type II error (β): Failing to reject null hypothesis when false (false negative). Power of study = 1 - β.",
        "Chi-square test compares proportions / categorical data between groups (e.g. smoker vs non-smoker and lung cancer yes/no). Student's t-test compares means of continuous data between two independent groups.",
        "Standard Error of Mean (SEM) = SD / √n. A 95% Confidence Interval = Mean ± 1.96 × SEM."
      ]
    }
  }
};

/**
 * Given a day number and the full curated syllabus topics array,
 * dynamically finds ALL related syllabus topics that belong to each specialty group!
 */
export const getDayGroupedSyllabusTopics = (dayNumber: number, allTopics: Topic[]) => {
  // Normalize day number to 1-8 cyclic schedule if day > 8
  const cycleIndex = ((dayNumber - 1) % 8) + 1;
  const grouping = DAY_MCQ_GROUPINGS[cycleIndex] || DAY_MCQ_GROUPINGS[1];

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
