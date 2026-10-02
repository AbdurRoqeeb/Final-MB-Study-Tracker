export interface StudyTip {
  title: string;
  category: string;
  content: string;
  clinicalTakeaway: string;
  mnemonic?: string | null;
}

export const CURATED_MBBS_TIPS_BY_CATEGORY: Record<string, StudyTip[]> = {
  "OSCE and viva": [
    {
      title: "The 3-Step Differential Formula for Clinical Viva",
      category: "OSCE and viva",
      content: "When presenting differentials in your Medicine or Surgery viva, structure them using the VINDICATE schema. State your primary diagnosis first with 2 positive physical signs and 1 pertinent negative, followed by at most 2 credible alternatives.",
      clinicalTakeaway: "Say: 'My primary clinical diagnosis is X based on signs A and B. Differential diagnoses to exclude are Y and Z.'",
      mnemonic: "VINDICATE: Vascular, Infectious, Neoplastic, Degenerative, Iatrogenic, Congenital, Autoimmune, Trauma, Endocrine."
    },
    {
      title: "Abdominal Mass Examination Routine in OSCE",
      category: "OSCE and viva",
      content: "When palpating an organomegaly or abdominal mass in the OSCE station, always demonstrate getting above the mass. If you cannot get above the swelling, it arises from the pelvis or retroperitoneum.",
      clinicalTakeaway: "Always check for movement with respiration (liver, gallbladder, spleen move; kidney ballotable).",
      mnemonic: "Site, Size, Shape, Surface, Margin, Consistency, Tenderness, Movement with respiration, Getting above."
    },
    {
      title: "Cranial Nerve VII Palsy: UMN vs LMN Spotter",
      category: "OSCE and viva",
      content: "Examiners will always ask you to test the frontalis muscle (wrinkling the forehead). Upper motor neuron lesions spare forehead wrinkling due to bilateral cortical innervation; lower motor neuron (Bell's palsy) paralyzes the entire half of the face.",
      clinicalTakeaway: "Forehead spared = stroke/UMN; forehead paralyzed = Bell's palsy/LMN.",
      mnemonic: "Upper spares the Upper face; Lower affects the whole Lower and Upper face."
    },
    {
      title: "Cardiac Murmur Dynamic Maneuvers in Viva",
      category: "OSCE and viva",
      content: "Know how bedside maneuvers change murmurs: Inspiration increases right-sided murmurs (Carvallo sign); Expiration increases left-sided murmurs. Valsalva decreases all murmurs EXCEPT Hypertrophic Cardiomyopathy (HOCM) and Mitral Valve Prolapse (MVP).",
      clinicalTakeaway: "HOCM and MVP become louder with Valsalva and standing (decreased preload).",
      mnemonic: "RILE: Right-sided murmurs increase with Inspiration; Left-sided with Expiration."
    },
    {
      title: "Thyroid Mass Examination & Retrosternal Signs",
      category: "OSCE and viva",
      content: "Observe the patient swallowing water (thyroid rises because it is enclosed in the pretracheal fascia). Ask them to protrude their tongue (thyroglossal cysts elevate; thyroid masses do not). Always check Pemberton sign for thoracic inlet obstruction.",
      clinicalTakeaway: "Pemberton sign: Raising both arms for 1 minute induces facial congestion, cyanosis, and stridor if retrosternal goiter is present.",
      mnemonic: "Pretracheal fascia = moves on swallowing; Thyroglossal tract = moves on tongue protrusion."
    }
  ],
  "Surgery & Emergencies": [
    {
      title: "Alvarado Score & Acute Appendicitis Traps",
      category: "Surgery & Emergencies",
      content: "In final MB surgery papers, acute appendicitis is a perennial emergency. Remember that an Alvarado score ≥7 mandates surgical consultation/intervention, while ≤4 strongly points away. In women of childbearing age, always list ectopic pregnancy and PID before laparotomy.",
      clinicalTakeaway: "Always check urine β-hCG and perform a pelvic exam in female acute abdomen presentations.",
      mnemonic: "MANTRELS: Migration, Anorexia, Nausea, Tenderness in RIF, Rebound, Elevation of temp, Leukocytosis, Shift to left."
    },
    {
      title: "Parkland Fluid Resuscitation Speed Math",
      category: "Surgery & Emergencies",
      content: "Examiners love testing the timing of fluid administration in burn shock: 4 mL × % TBSA (2nd & 3rd degree only) × Body weight (kg). Crucially, the 24-hour clock starts from the TIME OF INJURY, not hospital admission! Give half over first 8 hours and remainder over next 16 hours.",
      clinicalTakeaway: "Target adult urine output of 0.5 – 1.0 mL/kg/hr to guide real-time titration, not just formula output.",
      mnemonic: "First half in first 8 hours FROM THE BURN EVENT, not arrival time."
    },
    {
      title: "Tension Pneumothorax: Zero-Delay Decompression",
      category: "Surgery & Emergencies",
      content: "Tension pneumothorax is a clinical diagnosis, NOT a radiographic one. If a patient with chest trauma has severe dyspnea, tracheal deviation away from the affected side, hyperresonance, and hypotension, do not wait for a chest X-ray.",
      clinicalTakeaway: "Perform immediate needle thoracostomy (14G cannula at 5th intercostal space anterior axillary line, or 2nd ICS mid-clavicular line), followed immediately by chest tube insertion.",
      mnemonic: "Clinical diagnosis = Needle first, X-ray never before decompression."
    },
    {
      title: "Acute Intestinal Obstruction: Cardinal Triad",
      category: "Surgery & Emergencies",
      content: "The 4 cardinal symptoms of bowel obstruction are: Colicky abdominal pain, Vomiting, Abdominal distension, and Absolute constipation (no flatus or feces). Distinguish simple obstruction from strangulation (fever, localized tenderness, tachycardia, leukocytosis).",
      clinicalTakeaway: "Never delay emergency laparotomy in closed-loop obstruction or suspected strangulation.",
      mnemonic: "Coffee-bean sign = Sigmoid volvulus; String of pearls = Small bowel obstruction."
    },
    {
      title: "Acute Limb Ischemia: The 6 Ps",
      category: "Surgery & Emergencies",
      content: "Sudden thromboembolic arterial occlusion requires emergency revascularization within 6 hours to prevent irreversible muscle necrosis and amputation. Differentiate from deep vein thrombosis by checking peripheral pulses and skin temperature.",
      clinicalTakeaway: "The presence of paralysis and paresthesia indicates advanced, limb-threatening ischemia requiring immediate heparinization and embolectomy.",
      mnemonic: "The 6 Ps: Pain, Pallor, Pulselessness, Paresthesia, Paralysis, Perishingly cold."
    }
  ],
  "Pharmacology & Dosing": [
    {
      title: "HFrEF Guideline-Directed Quadruple Therapy",
      category: "Pharmacology & Dosing",
      content: "Modern management of Heart Failure with reduced Ejection Fraction (HFrEF) requires all four pillars started early: ARNI (Sacubitril/Valsartan) or ACEi/ARB + Beta-blocker (Bisoprolol, Carvedilol) + MRA (Spironolactone, Eplerenone) + SGLT2 inhibitor (Dapagliflozin, Empagliflozin).",
      clinicalTakeaway: "Never combine an ARNI with an ACE inhibitor; mandate a 36-hour washout period to prevent fatal angioedema.",
      mnemonic: "QUAD: Quadruple therapy reduces all-cause mortality by >60%."
    },
    {
      title: "Severe Malaria with Altered Sensorium Protocol",
      category: "Pharmacology & Dosing",
      content: "Intravenous artesunate (2.4 mg/kg IV at 0, 12, and 24 hours, then daily until oral intake tolerated) is the undisputed gold standard over quinine. Always rule out co-existing hypoglycemia, which commonly mimics or deepens coma.",
      clinicalTakeaway: "Check capillary blood glucose immediately in every comatose patient with suspected cerebral malaria.",
      mnemonic: "Artesunate 2.4 mg/kg at 0, 12, 24h; always check glucose and lumbar puncture."
    },
    {
      title: "Anaphylaxis Emergency Treatment Hierarchy",
      category: "Pharmacology & Dosing",
      content: "Intramuscular Epinephrine (Adrenaline) 1:1,000 (0.5 mg in adults, 0.01 mg/kg in children) injected into the anterolateral mid-thigh is the FIRST and ONLY life-saving medication. Antihistamines and steroids do not prevent airway collapse.",
      clinicalTakeaway: "Repeat IM epinephrine every 5 to 15 minutes if symptoms persist; never give IV bolus epinephrine in conscious patients.",
      mnemonic: "Epinephrine IM into Vastus Lateralis FIRST, IV fluids second, Hydrocortisone third."
    },
    {
      title: "Status Epilepticus Pharmacotherapy Algorithm",
      category: "Pharmacology & Dosing",
      content: "Minutes 0-5: ABCDE and IV access. Minutes 5-10: First-line IV Lorazepam 4 mg or Diazepam 10 mg. Minutes 10-30: Second-line IV Levetiracetam 60 mg/kg (max 4.5g) or IV Phenytoin 20 mg/kg. Minutes 30+: General anesthesia with Propofol or Midazolam infusion.",
      clinicalTakeaway: "Always check blood glucose and administer IV thiamine 100 mg before 50% dextrose in alcoholic patients.",
      mnemonic: "Benzodiazepine (0-10 min) -> Phenytoin/Levetiracetam (10-30 min) -> RSI Anesthesia (30+ min)."
    },
    {
      title: "DKA Potassium and Insulin Coordination",
      category: "Pharmacology & Dosing",
      content: "In Diabetic Ketoacidosis, never start insulin if serum potassium is <3.3 mmol/L (insulin drives K+ into cells and precipitates fatal arrhythmias). Once K+ is >3.3 mmol/L, administer IV regular insulin at a fixed rate of 0.1 units/kg/hr.",
      clinicalTakeaway: "Add potassium to IV replacement fluids once serum potassium falls below 5.5 mmol/L.",
      mnemonic: "Fluids first, Check K+, Insulin fixed-rate, Dextrose added once glucose <14 mmol/L."
    }
  ],
  "Time & Exam Pacing": [
    {
      title: "The 20-Mark Essay Strict Time-Box Rule",
      category: "Time & Exam Pacing",
      content: "In a 3-hour essay paper with 6 questions, allocate exactly 25 to 28 minutes per question, leaving 10 minutes at the end for script audit. If your time expires on Question 2, STOP writing in prose, bullet the remaining headings, and move to Question 3.",
      clinicalTakeaway: "It is mathematically impossible to score 18/20 on an incomplete paper, but two average answers (11/20 each = 22) easily surpass one brilliant answer (16/20).",
      mnemonic: "Breadth across all questions beats depth on only half the paper."
    },
    {
      title: "SBA / MCQ Speed Pacing & Negative Marking Rules",
      category: "Time & Exam Pacing",
      content: "In Single Best Answer (SBA) papers (e.g. 100 questions in 120 minutes), budget 60 seconds per question. On your first pass, answer only questions where you know the answer immediately. Flag doubtful questions for Pass 2.",
      clinicalTakeaway: "If there is no negative marking, NEVER leave a bubble blank; eliminate clearly impossible options and make an educated selection.",
      mnemonic: "Pass 1: Instant recall (40 min); Pass 2: Calculation & Vignettes (50 min); Pass 3: Audit (20 min)."
    },
    {
      title: "Bulleted Structure for Clinical Exam Scripts",
      category: "Time & Exam Pacing",
      content: "Examiners mark hundreds of scripts in short sessions using marking keys. Never write dense narrative paragraphs. Use explicit, numbered clinical headings: Definition, Etiology, Clinical Presentation, Investigations, and Management.",
      clinicalTakeaway: "Examiners award marks by ticking key concepts; bulleted points make those concepts visible instantly.",
      mnemonic: "D-E-C-I-M: Definition, Etiology, Clinical features, Investigations, Management."
    },
    {
      title: "OSCE Station 5-Minute Time Allocation",
      category: "Time & Exam Pacing",
      content: "In a typical 5-to-7 minute clinical OSCE station: spend 30 seconds reading the prompt, 3.5 minutes performing the focused examination while speaking out loud, and the final 1.5 minutes presenting findings and answering questions.",
      clinicalTakeaway: "Always verbalize what you are doing (e.g., 'I am checking for peripheral edema and calf tenderness') so examiners hear you even if watching their rubric.",
      mnemonic: "Talk while you examine; don't leave presentation to the final 10 seconds."
    }
  ],
  "General High-Yield Exam Strategy": [
    {
      title: "Primary Health Care ELEMENTS Mnemonic in Comm Med",
      category: "General High-Yield Exam Strategy",
      content: "In Community Medicine papers, the 8 essential components of Primary Health Care defined at the 1978 Alma-Ata conference are frequently tested in essays and MCQs. Structure your answer using the ELEMENTS acronym.",
      clinicalTakeaway: "Remember the 4 pillars of PHC: Community Participation, Intersectoral Collaboration, Appropriate Technology, and Equitable Distribution.",
      mnemonic: "ELEMENTS: Education, Local endemic disease, EPI immunization, Maternal & child, Essential drugs, Nutrition, Treatment, Sanitation."
    },
    {
      title: "Diagnostic Test 2x2 Table Math for MCQs",
      category: "General High-Yield Exam Strategy",
      content: "Sensitivity = a/(a+c) (detecting true positives); Specificity = d/(b+d) (detecting true negatives). Crucial exam fact: Positive Predictive Value (PPV) INCREASES with higher disease prevalence, while Sensitivity and Specificity remain UNCHANGED.",
      clinicalTakeaway: "High sensitivity test rules OUT disease (SnNOut); High specificity test rules IN disease (SpPIn).",
      mnemonic: "SnNOut: Sensitivity Negative rules Out; SpPIn: Specificity Positive rules In."
    },
    {
      title: "Cold Chain Temperature & Vaccine Vial Monitor (VVM)",
      category: "General High-Yield Exam Strategy",
      content: "Refrigerated vaccines (Pentavalent, PCV, Hep B, Tetanus, HPV) must be stored at +2°C to +8°C and NEVER frozen. OPV and Yellow fever can be frozen at -20°C. If a Vaccine Vial Monitor inner square matches or is darker than the outer circle, DISCARD.",
      clinicalTakeaway: "Conduct the 'Shake Test' if you suspect a freeze-sensitive vaccine was inadvertently frozen.",
      mnemonic: "Square lighter = Use; Square matches or darker = Do not use."
    },
    {
      title: "Four Elements of Medical Negligence (4 Ds)",
      category: "General High-Yield Exam Strategy",
      content: "In Forensic Medicine & Medical Ethics, proving civil negligence requires demonstrating all four: Duty of Care (established doctor-patient relationship), Dereliction (breach of standard of care), Direct Causation (the breach caused the harm), and Damages.",
      clinicalTakeaway: "Res ipsa loquitur ('the thing speaks for itself') shifts the burden of proof to the doctor (e.g. retained surgical swab).",
      mnemonic: "4 Ds of Negligence: Duty, Dereliction, Direct causation, Damage."
    }
  ]
};

export const getRandomCuratedTip = (category?: string, excludeTitle?: string): StudyTip => {
  const catKey = category && CURATED_MBBS_TIPS_BY_CATEGORY[category]
    ? category
    : "General High-Yield Exam Strategy";

  const pool = CURATED_MBBS_TIPS_BY_CATEGORY[catKey] || CURATED_MBBS_TIPS_BY_CATEGORY["General High-Yield Exam Strategy"];
  const eligible = pool.filter(t => t.title !== excludeTitle);
  const selectedPool = eligible.length > 0 ? eligible : pool;
  const randomIndex = Math.floor(Math.random() * selectedPool.length);
  return selectedPool[randomIndex];
};
