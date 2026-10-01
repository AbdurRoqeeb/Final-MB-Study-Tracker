// Top Tested Topics Frequency Rankings extracted from https://finalmbpq.vercel.app/
// Grounded in past LAUTECH MB4 final examination frequency data.

export interface PQTopicFrequency {
  rank: number;
  topic: string;
  specialty: 'Medicine' | 'Surgery' | 'Community Medicine';
  frequency: number;
  occurrences: string[];
  representativeQuestionKey: string;
  representativeQuestionText: string;
}

export const TOP_TESTED_TOPICS: PQTopicFrequency[] = [
  {
    "rank": 1,
    "topic": "Primary Health Care (PHC) Principles, Components & Implementation Challenges in Nigeria",
    "specialty": "Community Medicine",
    "frequency": 22,
    "occurrences": [
      "Q5a",
      "December 2017",
      "Q1",
      "January 2016",
      "Q12",
      "February 2019",
      "Q6",
      "September 2019",
      "Q5",
      "April 2017",
      "Q6a",
      "January 2016",
      "Q6b",
      "February 2015",
      "Q9a",
      "May 2010",
      "Q13",
      "January 2016",
      "Q13",
      "May 2010",
      "SAQ 9",
      "January 2025 (Comm. Med)"
    ],
    "representativeQuestionKey": "Q5a",
    "representativeQuestionText": ""
  },
  {
    "rank": 2,
    "topic": "Statistical Calculations: t-Tests, Chi-Square & Confidence Intervals",
    "specialty": "Community Medicine",
    "frequency": 20,
    "occurrences": [
      "Q11",
      "December 2017",
      "Q12",
      "January 2016",
      "Q12",
      "May 2010",
      "Q7",
      "October 2015",
      "Q8",
      "May 2010",
      "Q6c",
      "February 2019",
      "Q11",
      "March 2019",
      "Q11",
      "600L End of Posting",
      "Q12",
      "600L End of Posting",
      "LAQ 11",
      "August 2014"
    ],
    "representativeQuestionKey": "Q11",
    "representativeQuestionText": ""
  },
  {
    "rank": 3,
    "topic": "Healthcare Financing Mechanisms (Community Insurance, User Fees, Out-of-Pocket)",
    "specialty": "Community Medicine",
    "frequency": 18,
    "occurrences": [
      "Q2",
      "September 2022",
      "Q6",
      "January 2016",
      "Q4a",
      "January 2016",
      "Q8",
      "December 2017",
      "Q7",
      "March 2019",
      "Q4",
      "August 2014",
      "Q16",
      "May 2010",
      "Q8",
      "October 2015",
      "SAQ 10",
      "August 2014"
    ],
    "representativeQuestionKey": "Q2",
    "representativeQuestionText": ""
  },
  {
    "rank": 4,
    "topic": "Maternal Mortality, Safe Motherhood & Focused Antenatal Care",
    "specialty": "Community Medicine",
    "frequency": 16,
    "occurrences": [
      "Q3",
      "September 2022",
      "Q6",
      "October 2015",
      "Q10",
      "September 2019",
      "Q13",
      "February 2019",
      "Q1",
      "January 2016",
      "Q2",
      "January 2016",
      "Q3",
      "September 2008",
      "LAQ 12",
      "August 2014"
    ],
    "representativeQuestionKey": "Q3",
    "representativeQuestionText": ""
  },
  {
    "rank": 5,
    "topic": "Health Education Communication Methods & Behavior Adoption Theories",
    "specialty": "Community Medicine",
    "frequency": 16,
    "occurrences": [
      "Q1",
      "April 2017",
      "Q10",
      "December 2017",
      "Q10",
      "January 2016",
      "Q10",
      "March 2019",
      "Q3b",
      "October 2015",
      "Q4b",
      "June 2013",
      "Q9",
      "600L End of Posting",
      "SAQ 10",
      "January 2025 (Comm. Med)"
    ],
    "representativeQuestionKey": "Q1",
    "representativeQuestionText": ""
  },
  {
    "rank": 6,
    "topic": "Principles of Medical Ethics & Professional Medical Negligence",
    "specialty": "Community Medicine",
    "frequency": 16,
    "occurrences": [
      "Q3a",
      "December 2017",
      "Q5",
      "September 2022",
      "Q4b",
      "January 2016",
      "Q6",
      "March 2019",
      "Q9",
      "September 2019",
      "Q1a",
      "600L End of Posting",
      "SAQ 2",
      "January 2025 (Comm. Med)",
      "SAQ 8a",
      "August 2014"
    ],
    "representativeQuestionKey": "Q3a",
    "representativeQuestionText": ""
  },
  {
    "rank": 7,
    "topic": "Breast Cancer Evaluation, TNM Staging & Surgical Mastectomy",
    "specialty": "Surgery",
    "frequency": 14,
    "occurrences": [
      "LAQ 1",
      "March 2024",
      "LAQ 2",
      "January 2025",
      "Q8",
      "June 2018",
      "Q2",
      "September 2022 (Surgery)",
      "SAQ 4",
      "December 2024",
      "LAQ 2",
      "January 2020",
      "SAQ 4",
      "February 2020"
    ],
    "representativeQuestionKey": "LAQ 1",
    "representativeQuestionText": ""
  },
  {
    "rank": 8,
    "topic": "Occupational Health Physician Roles & Clinical Functions",
    "specialty": "Community Medicine",
    "frequency": 14,
    "occurrences": [
      "Q1",
      "September 2022",
      "Q5a",
      "February 2015",
      "Q1",
      "May 2010",
      "Q5",
      "October 2015",
      "Q4",
      "September 2019",
      "Q6a",
      "June 2013",
      "SAQ 4",
      "January 2025 (Comm. Med)"
    ],
    "representativeQuestionKey": "Q1",
    "representativeQuestionText": ""
  },
  {
    "rank": 9,
    "topic": "Family Planning Methods, Unmet Need & Contraceptive Counseling",
    "specialty": "Community Medicine",
    "frequency": 14,
    "occurrences": [
      "Q9",
      "December 2017",
      "Q2",
      "March 2019",
      "Q6",
      "August 2014",
      "Q8c",
      "June 2013",
      "Q8",
      "October 2015",
      "Q3",
      "600L End of Posting",
      "LAQ 13",
      "January 2025 (Comm. Med)"
    ],
    "representativeQuestionKey": "Q9",
    "representativeQuestionText": ""
  },
  {
    "rank": 10,
    "topic": "Sampling Methods (Probability & Simple Random Techniques)",
    "specialty": "Community Medicine",
    "frequency": 14,
    "occurrences": [
      "Q1",
      "February 2019",
      "Q5",
      "September 2019",
      "Q9b",
      "February 2015",
      "Q7",
      "May 2010",
      "Q2",
      "May 2010",
      "Q7b",
      "June 2013",
      "SAQ 3",
      "January 2025 (Comm. Med)"
    ],
    "representativeQuestionKey": "Q1",
    "representativeQuestionText": ""
  },
  {
    "rank": 11,
    "topic": "Generalized Peritonitis in Pediatrics & Pre-operative Preparation",
    "specialty": "Surgery",
    "frequency": 12,
    "occurrences": [
      "SAQ 10",
      "April 2024",
      "SAQ 10",
      "March 2024",
      "SAQ 10",
      "December 2024",
      "Q1",
      "June 2018",
      "SAQ 10",
      "January 2025",
      "SAQ 4",
      "January 2020"
    ],
    "representativeQuestionKey": "SAQ 10",
    "representativeQuestionText": ""
  },
  {
    "rank": 12,
    "topic": "Metastatic Prostate Cancer & Emergency Clot/Urinary Retention",
    "specialty": "Surgery",
    "frequency": 12,
    "occurrences": [
      "SAQ 8",
      "December 2024",
      "Q3",
      "May 2018",
      "SAQ 8",
      "January 2025",
      "SAQ 7",
      "February 2020",
      "SAQ 7",
      "January 2020",
      "Q11",
      "June 2018"
    ],
    "representativeQuestionKey": "SAQ 8",
    "representativeQuestionText": ""
  },
  {
    "rank": 13,
    "topic": "Water Quality, Water Sampling & Low-Water Sewage Systems",
    "specialty": "Community Medicine",
    "frequency": 12,
    "occurrences": [
      "Q2b",
      "June 2013",
      "Q7",
      "August 2014",
      "Q13",
      "March 2019",
      "Q2b",
      "February 2015",
      "Q2",
      "May 2014",
      "Q13",
      "May 2010"
    ],
    "representativeQuestionKey": "Q2b",
    "representativeQuestionText": ""
  },
  {
    "rank": 14,
    "topic": "Global Agencies Promoting Health (Bilateral & Multilateral)",
    "specialty": "Community Medicine",
    "frequency": 12,
    "occurrences": [
      "Q1a",
      "December 2017",
      "Q3",
      "March 2019",
      "Q1",
      "May 2010",
      "Q2",
      "May 2010",
      "Q5a",
      "January 2016",
      "SAQ 8",
      "January 2025 (Comm. Med)"
    ],
    "representativeQuestionKey": "Q1a",
    "representativeQuestionText": ""
  },
  {
    "rank": 15,
    "topic": "Foreign Body Ingestion/Inhalation & Rigid Bronchoscopy / Esophagoscopy",
    "specialty": "Surgery",
    "frequency": 10,
    "occurrences": [
      "SAQ 9",
      "April 2024",
      "SAQ 9",
      "December 2024",
      "Q1",
      "February 2019",
      "Q6",
      "June 2018",
      "Q10",
      "September 2022 (Surgery)"
    ],
    "representativeQuestionKey": "SAQ 9",
    "representativeQuestionText": ""
  },
  {
    "rank": 16,
    "topic": "Municipal Solid Waste & Sewage Disposal: Composting, Incineration & Sanitary Landfills",
    "specialty": "Community Medicine",
    "frequency": 10,
    "occurrences": [
      "Q2",
      "December 2017",
      "Q11",
      "January 2016",
      "Q2",
      "September 2019",
      "Q2a",
      "October 2015",
      "SAQ 9a",
      "August 2014"
    ],
    "representativeQuestionKey": "Q2",
    "representativeQuestionText": ""
  },
  {
    "rank": 17,
    "topic": "Environmental Sanitation, Food Premises & Market Hygiene",
    "specialty": "Community Medicine",
    "frequency": 10,
    "occurrences": [
      "Q2iii",
      "December 2017",
      "Q2a",
      "June 2013",
      "Q9",
      "January 2016",
      "Q7",
      "January 2016",
      "Q8",
      "March 2019"
    ],
    "representativeQuestionKey": "Q2iii",
    "representativeQuestionText": ""
  },
  {
    "rank": 18,
    "topic": "Vector Biology, Vector-Borne Diseases & Integrated Vector Control Methods",
    "specialty": "Community Medicine",
    "frequency": 10,
    "occurrences": [
      "Q5",
      "February 2019",
      "Q8",
      "September 2019",
      "Q3b",
      "June 2013",
      "Q2b",
      "October 2015",
      "Q4",
      "600L End of Posting"
    ],
    "representativeQuestionKey": "Q5",
    "representativeQuestionText": ""
  },
  {
    "rank": 19,
    "topic": "Health Program Planning Cycle, Situation Analysis & Priority Setting",
    "specialty": "Community Medicine",
    "frequency": 10,
    "occurrences": [
      "Q12",
      "September 2022",
      "Q1",
      "June 2013",
      "Q4",
      "May 2010",
      "Q6",
      "600L End of Posting",
      "LAQ 12",
      "January 2025 (Comm. Med)"
    ],
    "representativeQuestionKey": "Q12",
    "representativeQuestionText": ""
  },
  {
    "rank": 20,
    "topic": "International Health Certificates & Vaccinations",
    "specialty": "Community Medicine",
    "frequency": 10,
    "occurrences": [
      "Q1b",
      "December 2017",
      "Q5b",
      "February 2015",
      "Q5b",
      "September 2019",
      "Q5b",
      "October 2015",
      "Q5b",
      "May 2014"
    ],
    "representativeQuestionKey": "Q1b",
    "representativeQuestionText": ""
  },
  {
    "rank": 21,
    "topic": "Nutritional Status Assessment: Anthropometry (BMI, Under-Five Surveys & Shakir's Strip)",
    "specialty": "Community Medicine",
    "frequency": 10,
    "occurrences": [
      "Q7",
      "September 2022",
      "Q11",
      "May 2010",
      "Q2",
      "February 2019",
      "Q1c",
      "October 2015",
      "Q3",
      "September 2019"
    ],
    "representativeQuestionKey": "Q7",
    "representativeQuestionText": ""
  },
  {
    "rank": 22,
    "topic": "Blood Transfusion Indications, Procedures & Complications",
    "specialty": "Surgery",
    "frequency": 8,
    "occurrences": [
      "LAQ 2",
      "April 2024",
      "LAQ 1",
      "January 2025",
      "Q5",
      "May 2018",
      "LAQ 1",
      "February 2020 (Surgery)"
    ],
    "representativeQuestionKey": "LAQ 2",
    "representativeQuestionText": ""
  },
  {
    "rank": 23,
    "topic": "Spinal Cord Injury Emergency Stabilization & Care",
    "specialty": "Surgery",
    "frequency": 8,
    "occurrences": [
      "SAQ 1",
      "April 2024",
      "SAQ 1",
      "December 2024",
      "SAQ 1",
      "January 2025",
      "Q3",
      "Finals Paper II (Surgery)"
    ],
    "representativeQuestionKey": "SAQ 1",
    "representativeQuestionText": ""
  },
  {
    "rank": 24,
    "topic": "Epidemiological Study Designs (Cohort vs Case-Control)",
    "specialty": "Community Medicine",
    "frequency": 8,
    "occurrences": [
      "Q4b",
      "May 2010",
      "Q6",
      "February 2019",
      "Q11",
      "February 2019",
      "Q11a",
      "600L End of Posting"
    ],
    "representativeQuestionKey": "Q4b",
    "representativeQuestionText": ""
  },
  {
    "rank": 25,
    "topic": "Levels of Disease Prevention (Primordial, Primary, Secondary & Tertiary)",
    "specialty": "Community Medicine",
    "frequency": 8,
    "occurrences": [
      "Q6a",
      "February 2015",
      "Q10a",
      "June 2013",
      "Q11",
      "September 2022",
      "Q6a",
      "May 2010"
    ],
    "representativeQuestionKey": "Q6a",
    "representativeQuestionText": ""
  },
  {
    "rank": 26,
    "topic": "Notifiable Diseases & Public Health Emergencies of International Concern (PHEIC)",
    "specialty": "Community Medicine",
    "frequency": 8,
    "occurrences": [
      "Q2",
      "January 2016",
      "Q4",
      "February 2019",
      "Q4b",
      "February 2015",
      "Q5",
      "January 2016"
    ],
    "representativeQuestionKey": "Q2",
    "representativeQuestionText": ""
  },
  {
    "rank": 27,
    "topic": "Supervision, Monitoring & Program Evaluation Techniques",
    "specialty": "Community Medicine",
    "frequency": 8,
    "occurrences": [
      "Q12",
      "March 2019",
      "Q8",
      "February 2019",
      "Q4",
      "May 2014",
      "Q8",
      "600L End of Posting"
    ],
    "representativeQuestionKey": "Q12",
    "representativeQuestionText": ""
  },
  {
    "rank": 28,
    "topic": "Child Survival Interventions & Vulnerable Child Care (GOBI-FFF, Immunization, Motherless Babies)",
    "specialty": "Community Medicine",
    "frequency": 8,
    "occurrences": [
      "Q3",
      "April 2017",
      "Q13",
      "March 2019",
      "Q8",
      "June 2013",
      "Q7a",
      "February 2015"
    ],
    "representativeQuestionKey": "Q3",
    "representativeQuestionText": ""
  },
  {
    "rank": 29,
    "topic": "Nutritional Vulnerability in Pregnancy, Lactation & Child Weaning",
    "specialty": "Community Medicine",
    "frequency": 8,
    "occurrences": [
      "Q13",
      "January 2016",
      "Q1",
      "October 2015",
      "Q12",
      "December 2017",
      "Q13",
      "March 2019"
    ],
    "representativeQuestionKey": "Q13",
    "representativeQuestionText": ""
  },
  {
    "rank": 30,
    "topic": "Aged & Elderly: Health Problems, Social Welfare & Nutritional Needs",
    "specialty": "Community Medicine",
    "frequency": 8,
    "occurrences": [
      "Q2",
      "April 2017",
      "Q8b",
      "January 2016",
      "Q7b",
      "February 2015",
      "Q1",
      "August 2014"
    ],
    "representativeQuestionKey": "Q2",
    "representativeQuestionText": ""
  },
  {
    "rank": 31,
    "topic": "Biomedical Research Design, Proposals & Methodological Types",
    "specialty": "Community Medicine",
    "frequency": 8,
    "occurrences": [
      "Q9a",
      "February 2015",
      "Q9",
      "May 2010",
      "Q9",
      "August 2014",
      "Q5",
      "December 2007"
    ],
    "representativeQuestionKey": "Q9a",
    "representativeQuestionText": ""
  },
  {
    "rank": 32,
    "topic": "Demographic Transition Theory & Phases",
    "specialty": "Community Medicine",
    "frequency": 8,
    "occurrences": [
      "Q4",
      "September 2022",
      "Q9b",
      "February 2019",
      "Q4a",
      "June 2013",
      "Q4b",
      "September 2008"
    ],
    "representativeQuestionKey": "Q4",
    "representativeQuestionText": ""
  },
  {
    "rank": 33,
    "topic": "Demographic Data Sources & Demographic Structure Dynamics",
    "specialty": "Community Medicine",
    "frequency": 8,
    "occurrences": [
      "Q4",
      "September 2022",
      "Q3b",
      "December 2017",
      "Q9c",
      "February 2019",
      "Q7",
      "May 2014"
    ],
    "representativeQuestionKey": "Q4",
    "representativeQuestionText": ""
  },
  {
    "rank": 34,
    "topic": "Population Pyramid Construction & Significance",
    "specialty": "Community Medicine",
    "frequency": 8,
    "occurrences": [
      "Q4a",
      "January 2016",
      "Q3a",
      "February 2015",
      "Q4a",
      "September 2008",
      "SAQ 8b",
      "August 2014"
    ],
    "representativeQuestionKey": "Q4a",
    "representativeQuestionText": ""
  },
  {
    "rank": 35,
    "topic": "Ethics Codes & Declarations (Nuremberg, Helsinki, Tokyo, Geneva, etc.)",
    "specialty": "Community Medicine",
    "frequency": 8,
    "occurrences": [
      "Q7",
      "May 2010",
      "Q10",
      "October 2015",
      "Q1b",
      "600L End of Posting",
      "Q2ii",
      "December 2007"
    ],
    "representativeQuestionKey": "Q7",
    "representativeQuestionText": ""
  },
  {
    "rank": 36,
    "topic": "Congestive Heart Failure (CHF) Etiology & Pharmacotherapy",
    "specialty": "Medicine",
    "frequency": 6,
    "occurrences": [
      "Q2",
      "February 2020",
      "Q4",
      "January 2025",
      "Q6",
      "April 2024"
    ],
    "representativeQuestionKey": "Q2",
    "representativeQuestionText": ""
  },
  {
    "rank": 37,
    "topic": "Esophageal Carcinoma, Dysphagia Grading & Palliative Interventions",
    "specialty": "Surgery",
    "frequency": 6,
    "occurrences": [
      "SAQ 6",
      "April 2024",
      "SAQ 6",
      "December 2024",
      "SAQ 6",
      "January 2025"
    ],
    "representativeQuestionKey": "SAQ 6",
    "representativeQuestionText": ""
  },
  {
    "rank": 38,
    "topic": "Burns, Thermal/Chemical Trauma & Inhalational Airway Injury",
    "specialty": "Surgery",
    "frequency": 6,
    "occurrences": [
      "Q10",
      "June 2018",
      "Q5",
      "September 2022 (Surgery)",
      "SAQ 5",
      "February 2020"
    ],
    "representativeQuestionKey": "Q10",
    "representativeQuestionText": ""
  },
  {
    "rank": 39,
    "topic": "Hemorrhagic Shock, Ballistic Trauma & Rapid Resuscitation",
    "specialty": "Surgery",
    "frequency": 6,
    "occurrences": [
      "LAQ 2",
      "December 2024",
      "Q2",
      "June 2018",
      "LAQ 1",
      "January 2020"
    ],
    "representativeQuestionKey": "LAQ 2",
    "representativeQuestionText": ""
  },
  {
    "rank": 40,
    "topic": "Epistaxis Bedside Management & Diagnosis",
    "specialty": "Surgery",
    "frequency": 6,
    "occurrences": [
      "SAQ 9",
      "March 2024",
      "Q2",
      "February 2019",
      "SAQ 9",
      "January 2025"
    ],
    "representativeQuestionKey": "SAQ 9",
    "representativeQuestionText": ""
  },
  {
    "rank": 41,
    "topic": "Glaucoma, Optic Disc Cupping & Irreversible Blindness",
    "specialty": "Community Medicine",
    "frequency": 6,
    "occurrences": [
      "SAQ 3",
      "January 2025",
      "SAQ 10",
      "January 2020",
      "Q1",
      "Finals Paper II (Surgery)"
    ],
    "representativeQuestionKey": "SAQ 3",
    "representativeQuestionText": ""
  },
  {
    "rank": 42,
    "topic": "Screening Parameters (Sensitivity, Specificity, PPV & NPV)",
    "specialty": "Community Medicine",
    "frequency": 6,
    "occurrences": [
      "Q11",
      "September 2022",
      "Q6a",
      "May 2010",
      "Q9",
      "May 2010"
    ],
    "representativeQuestionKey": "Q11",
    "representativeQuestionText": ""
  },
  {
    "rank": 43,
    "topic": "Ergonomics, Posture at Work & PPE Use",
    "specialty": "Community Medicine",
    "frequency": 6,
    "occurrences": [
      "Q7",
      "April 2017",
      "Q9",
      "January 2016",
      "Q3",
      "February 2019"
    ],
    "representativeQuestionKey": "Q7",
    "representativeQuestionText": ""
  },
  {
    "rank": 44,
    "topic": "Occupational Hazards: Principles of Control, Industry-Specific Risks & Sawmill Workers",
    "specialty": "Community Medicine",
    "frequency": 6,
    "occurrences": [
      "Q7",
      "December 2017",
      "Q5",
      "January 2016",
      "SAQ 9b",
      "August 2014"
    ],
    "representativeQuestionKey": "Q7",
    "representativeQuestionText": ""
  },
  {
    "rank": 45,
    "topic": "Occupational Medicine Services in Large Industrial Settings",
    "specialty": "Community Medicine",
    "frequency": 6,
    "occurrences": [
      "Q1",
      "September 2022",
      "SAQ 7c",
      "August 2014",
      "Q4",
      "September 2019"
    ],
    "representativeQuestionKey": "Q1",
    "representativeQuestionText": ""
  },
  {
    "rank": 46,
    "topic": "Healthful Housing Criteria, Goals & Structural Standards",
    "specialty": "Community Medicine",
    "frequency": 6,
    "occurrences": [
      "Q2ii",
      "December 2017",
      "Q9",
      "September 2022",
      "Q2a",
      "February 2015"
    ],
    "representativeQuestionKey": "Q2ii",
    "representativeQuestionText": ""
  },
  {
    "rank": 47,
    "topic": "Air Pollution, Common Contaminants & Health Risks",
    "specialty": "Community Medicine",
    "frequency": 6,
    "occurrences": [
      "Q2i",
      "December 2017",
      "Q9",
      "January 2016",
      "SAQ 5",
      "January 2025 (Comm. Med)"
    ],
    "representativeQuestionKey": "Q2i",
    "representativeQuestionText": ""
  },
  {
    "rank": 48,
    "topic": "Climate Change, Flooding Events & Environmental Control Measures",
    "specialty": "Community Medicine",
    "frequency": 6,
    "occurrences": [
      "Q13",
      "September 2022",
      "Q7d",
      "August 2014",
      "Q13",
      "May 2014"
    ],
    "representativeQuestionKey": "Q13",
    "representativeQuestionText": ""
  },
  {
    "rank": 49,
    "topic": "Health Administration, Organisation Principles & Governance Frameworks in Nigeria",
    "specialty": "Community Medicine",
    "frequency": 6,
    "occurrences": [
      "Q7",
      "September 2019",
      "Q8",
      "February 2015",
      "Q10",
      "May 2010"
    ],
    "representativeQuestionKey": "Q7",
    "representativeQuestionText": ""
  },
  {
    "rank": 50,
    "topic": "World Health Organization (WHO) Strategy & Regional Offices",
    "specialty": "Community Medicine",
    "frequency": 6,
    "occurrences": [
      "Q1",
      "May 2010",
      "Q2",
      "May 2010",
      "SAQ 8",
      "January 2025 (Comm. Med)"
    ],
    "representativeQuestionKey": "Q1",
    "representativeQuestionText": ""
  },
  {
    "rank": 51,
    "topic": "Antenatal Care Models: 2016 WHO 8-Contact Model vs Focused ANC Model (FANC)",
    "specialty": "Community Medicine",
    "frequency": 6,
    "occurrences": [
      "Q10",
      "September 2019",
      "Q6c",
      "October 2015",
      "Q3",
      "September 2022"
    ],
    "representativeQuestionKey": "Q10",
    "representativeQuestionText": ""
  },
  {
    "rank": 52,
    "topic": "Cold Chain System, Vaccine Vial Monitors (VVM) & National Immunization Schedules",
    "specialty": "Community Medicine",
    "frequency": 6,
    "occurrences": [
      "Q4",
      "December 2007",
      "Q2",
      "600L End of Posting",
      "Q8a",
      "June 2013"
    ],
    "representativeQuestionKey": "Q4",
    "representativeQuestionText": ""
  },
  {
    "rank": 53,
    "topic": "Reproductive Health Indicators & Determinants of General Fertility",
    "specialty": "Community Medicine",
    "frequency": 6,
    "occurrences": [
      "Q1",
      "February 2015",
      "Q8",
      "May 2010",
      "Q3a",
      "January 2016"
    ],
    "representativeQuestionKey": "Q1",
    "representativeQuestionText": ""
  },
  {
    "rank": 54,
    "topic": "Micronutrient Deficiencies (Vitamin A, Iodine, Iron) & National Programs",
    "specialty": "Community Medicine",
    "frequency": 6,
    "occurrences": [
      "Q10",
      "February 2015",
      "Q11",
      "May 2010",
      "SAQ 7",
      "January 2025 (Comm. Med)"
    ],
    "representativeQuestionKey": "Q10",
    "representativeQuestionText": ""
  },
  {
    "rank": 55,
    "topic": "Biostatistical Definitions (p-value, SEM, Type I & II errors, Power)",
    "specialty": "Community Medicine",
    "frequency": 6,
    "occurrences": [
      "Q12a",
      "January 2016",
      "Q11a",
      "August 2014",
      "Q12a",
      "May 2010"
    ],
    "representativeQuestionKey": "Q12a",
    "representativeQuestionText": ""
  },
  {
    "rank": 56,
    "topic": "Normal Distribution Curve and Probability Characteristics",
    "specialty": "Community Medicine",
    "frequency": 6,
    "occurrences": [
      "Q8a",
      "May 2010",
      "Q7a",
      "June 2013",
      "SAQ 3",
      "January 2025 (Comm. Med)"
    ],
    "representativeQuestionKey": "Q8a",
    "representativeQuestionText": ""
  },
  {
    "rank": 57,
    "topic": "Population Census Formats & De Facto/De Jure Enumeration",
    "specialty": "Community Medicine",
    "frequency": 6,
    "occurrences": [
      "Q4",
      "October 2015",
      "Q6a",
      "March 2019",
      "Q6a",
      "January 2016"
    ],
    "representativeQuestionKey": "Q4",
    "representativeQuestionText": ""
  },
  {
    "rank": 58,
    "topic": "Prison Health Care Services & Rehabilitative Measures",
    "specialty": "Community Medicine",
    "frequency": 6,
    "occurrences": [
      "Q8",
      "January 2016",
      "Q1",
      "September 2019",
      "Q1",
      "September 2008"
    ],
    "representativeQuestionKey": "Q8",
    "representativeQuestionText": ""
  },
  {
    "rank": 59,
    "topic": "Health Problems of Destitutes & Homeless Populations",
    "specialty": "Community Medicine",
    "frequency": 6,
    "occurrences": [
      "Q6",
      "December 2017",
      "Q5",
      "May 2010",
      "Q2",
      "August 2014"
    ],
    "representativeQuestionKey": "Q6",
    "representativeQuestionText": ""
  },
  {
    "rank": 60,
    "topic": "Diabetic Ketoacidosis (DKA) Pathophysiology, Osmolality/Anion Gap Calculations & Protocols",
    "specialty": "Medicine",
    "frequency": 4,
    "occurrences": [
      "Q1b",
      "September 2022",
      "Q5",
      "February 2020"
    ],
    "representativeQuestionKey": "Q1b",
    "representativeQuestionText": ""
  },
  {
    "rank": 61,
    "topic": "Addison's Disease (Adrenal Insufficiency) & Postural Hypotension",
    "specialty": "Medicine",
    "frequency": 4,
    "occurrences": [
      "Q6",
      "January 2025",
      "Q2C",
      "April 2024"
    ],
    "representativeQuestionKey": "Q6",
    "representativeQuestionText": ""
  },
  {
    "rank": 62,
    "topic": "Chronic Kidney Disease & Hypertensive Nephrosclerosis",
    "specialty": "Medicine",
    "frequency": 4,
    "occurrences": [
      "Q3",
      "April 2016",
      "Q4B",
      "April 2024"
    ],
    "representativeQuestionKey": "Q3",
    "representativeQuestionText": ""
  },
  {
    "rank": 63,
    "topic": "Lichen Planus Variants, Oral Wickham's Striae & Management",
    "specialty": "Community Medicine",
    "frequency": 4,
    "occurrences": [
      "Q3",
      "February 2020",
      "Q3A",
      "April 2024"
    ],
    "representativeQuestionKey": "Q3",
    "representativeQuestionText": ""
  },
  {
    "rank": 64,
    "topic": "Decompensated Liver Cirrhosis, Portal Hypertension & Ascites",
    "specialty": "Medicine",
    "frequency": 4,
    "occurrences": [
      "Q1",
      "January 2025",
      "Q5",
      "April 2024"
    ],
    "representativeQuestionKey": "Q1",
    "representativeQuestionText": ""
  },
  {
    "rank": 65,
    "topic": "Suicide Risk Assessment, Sociological Types & CSF Bio-markers",
    "specialty": "Community Medicine",
    "frequency": 4,
    "occurrences": [
      "Q3",
      "February 2020 (Psychiatry)",
      "Q3b",
      "January 2025 (Psychiatry)"
    ],
    "representativeQuestionKey": "Q3",
    "representativeQuestionText": ""
  },
  {
    "rank": 66,
    "topic": "Suicide Attempt Evaluation, Associated Disorders & Intent High-Yield Features",
    "specialty": "Community Medicine",
    "frequency": 4,
    "occurrences": [
      "Q1",
      "September 2022 (Psychiatry)",
      "Q3b",
      "January 2025 (Psychiatry)"
    ],
    "representativeQuestionKey": "Q1",
    "representativeQuestionText": ""
  },
  {
    "rank": 67,
    "topic": "Acute Dystonic Reaction, Extrapyramidal Side Effects & Antidotes",
    "specialty": "Community Medicine",
    "frequency": 4,
    "occurrences": [
      "Q2",
      "September 2022 (Psychiatry)",
      "Q3e",
      "January 2025 (Psychiatry)"
    ],
    "representativeQuestionKey": "Q2",
    "representativeQuestionText": ""
  },
  {
    "rank": 68,
    "topic": "Antidepressant Classification & Serotonin Syndrome Differentials",
    "specialty": "Community Medicine",
    "frequency": 4,
    "occurrences": [
      "Q5",
      "September 2022 (Psychiatry)",
      "Q3d",
      "January 2025 (Psychiatry)"
    ],
    "representativeQuestionKey": "Q5",
    "representativeQuestionText": ""
  },
  {
    "rank": 69,
    "topic": "Pressure Ulcers (Decubitus): Pathogenesis, Etiologies & Prevention in High-Risk Patients",
    "specialty": "Community Medicine",
    "frequency": 4,
    "occurrences": [
      "SAQ 5",
      "April 2024",
      "SAQ 5",
      "March 2024"
    ],
    "representativeQuestionKey": "SAQ 5",
    "representativeQuestionText": ""
  },
  {
    "rank": 70,
    "topic": "Chronic Leg Ulcers, Venous Insufficiency & Marjolin's Ulcer",
    "specialty": "Community Medicine",
    "frequency": 4,
    "occurrences": [
      "Q2",
      "May 2018",
      "SAQ 5",
      "January 2020"
    ],
    "representativeQuestionKey": "Q2",
    "representativeQuestionText": ""
  },
  {
    "rank": 71,
    "topic": "Diabetic Foot Ulcer Grading (Meggit-Wagner) & Management",
    "specialty": "Community Medicine",
    "frequency": 4,
    "occurrences": [
      "SAQ 5",
      "December 2024",
      "SAQ 5",
      "January 2025"
    ],
    "representativeQuestionKey": "SAQ 5",
    "representativeQuestionText": ""
  },
  {
    "rank": 72,
    "topic": "Thyroid Disease, Toxic Goitre / Graves' Disease & Surgical Management",
    "specialty": "Community Medicine",
    "frequency": 4,
    "occurrences": [
      "Q4",
      "May 2018",
      "LAQ 2",
      "February 2020 (Surgery)"
    ],
    "representativeQuestionKey": "Q4",
    "representativeQuestionText": ""
  },
  {
    "rank": 73,
    "topic": "Open Tibial Fractures and Gustilo-Anderson Classification",
    "specialty": "Surgery",
    "frequency": 4,
    "occurrences": [
      "LAQ 2",
      "March 2024",
      "Q3",
      "September 2022 (Surgery)"
    ],
    "representativeQuestionKey": "LAQ 2",
    "representativeQuestionText": ""
  },
  {
    "rank": 74,
    "topic": "Amputation: Indications, Classification of Lower Limb Amputations & Complications",
    "specialty": "Community Medicine",
    "frequency": 4,
    "occurrences": [
      "SAQ 7",
      "April 2024",
      "SAQ 7",
      "March 2024"
    ],
    "representativeQuestionKey": "SAQ 7",
    "representativeQuestionText": ""
  },
  {
    "rank": 75,
    "topic": "Talipes Equinovarus (Clubfoot) Deformities & Correction Order",
    "specialty": "Surgery",
    "frequency": 4,
    "occurrences": [
      "SAQ 7",
      "December 2024",
      "SAQ 7",
      "January 2025"
    ],
    "representativeQuestionKey": "SAQ 7",
    "representativeQuestionText": ""
  },
  {
    "rank": 76,
    "topic": "Septic Arthritis vs Osteomyelitis in Pediatric Hip & Limb",
    "specialty": "Community Medicine",
    "frequency": 4,
    "occurrences": [
      "Q1",
      "May 2018",
      "SAQ 11",
      "January 2020"
    ],
    "representativeQuestionKey": "Q1",
    "representativeQuestionText": ""
  },
  {
    "rank": 77,
    "topic": "Benign Prostatic Hyperplasia (BPH): IPSS Staging, Medical vs Surgical Management & Adverse Effects",
    "specialty": "Community Medicine",
    "frequency": 4,
    "occurrences": [
      "SAQ 8",
      "April 2024",
      "SAQ 8",
      "March 2024"
    ],
    "representativeQuestionKey": "SAQ 8",
    "representativeQuestionText": ""
  },
  {
    "rank": 78,
    "topic": "Brain CT / MRI Interpretation in Acute Head Trauma & Subdural Haematoma",
    "specialty": "Community Medicine",
    "frequency": 4,
    "occurrences": [
      "SAQ 4",
      "January 2025",
      "Q3",
      "June 2018"
    ],
    "representativeQuestionKey": "SAQ 4",
    "representativeQuestionText": ""
  },
  {
    "rank": 79,
    "topic": "Anaesthetic Breathing Circuits & Mapleson Classification",
    "specialty": "Community Medicine",
    "frequency": 4,
    "occurrences": [
      "SAQ 2",
      "March 2024",
      "SAQ 2",
      "December 2024"
    ],
    "representativeQuestionKey": "SAQ 2",
    "representativeQuestionText": ""
  },
  {
    "rank": 80,
    "topic": "Local Anesthetic Systemic Toxicity (LAST) Symptoms & Management",
    "specialty": "Community Medicine",
    "frequency": 4,
    "occurrences": [
      "Q5",
      "June 2018",
      "SAQ 6",
      "February 2020"
    ],
    "representativeQuestionKey": "Q5",
    "representativeQuestionText": ""
  },
  {
    "rank": 81,
    "topic": "Papilloedema vs Papillitis: Definitions, Etiologies & Differentiation",
    "specialty": "Community Medicine",
    "frequency": 4,
    "occurrences": [
      "SAQ 3",
      "April 2024",
      "SAQ 3",
      "March 2024"
    ],
    "representativeQuestionKey": "SAQ 3",
    "representativeQuestionText": ""
  },
  {
    "rank": 82,
    "topic": "Cataract Etiology, Refractive Media & Contributing Factors",
    "specialty": "Community Medicine",
    "frequency": 4,
    "occurrences": [
      "SAQ 3",
      "December 2024",
      "SAQ 3",
      "January 2025"
    ],
    "representativeQuestionKey": "SAQ 3",
    "representativeQuestionText": ""
  },
  {
    "rank": 83,
    "topic": "Emerging/Re-emerging Infections & Lassa Fever Outbreaks",
    "specialty": "Community Medicine",
    "frequency": 4,
    "occurrences": [
      "Q7",
      "January 2016",
      "Q9",
      "March 2019"
    ],
    "representativeQuestionKey": "Q7",
    "representativeQuestionText": ""
  },
  {
    "rank": 84,
    "topic": "Zoonotic Diseases (Epidemiology, Vectors & Reservoirs)",
    "specialty": "Community Medicine",
    "frequency": 4,
    "occurrences": [
      "Q13",
      "December 2017",
      "Q4a",
      "February 2015"
    ],
    "representativeQuestionKey": "Q13",
    "representativeQuestionText": ""
  },
  {
    "rank": 85,
    "topic": "HIV/AIDS, Tropical Diseases (TDR) & Care of Vulnerable Populations (PLWHA)",
    "specialty": "Community Medicine",
    "frequency": 4,
    "occurrences": [
      "Q3",
      "May 2014",
      "Q6",
      "May 2014"
    ],
    "representativeQuestionKey": "Q3",
    "representativeQuestionText": ""
  },
  {
    "rank": 86,
    "topic": "Nosocomial Infections (Hospital Acquired Infections) & Infection Control",
    "specialty": "Community Medicine",
    "frequency": 4,
    "occurrences": [
      "Q8",
      "August 2014",
      "Q1",
      "May 2014"
    ],
    "representativeQuestionKey": "Q8",
    "representativeQuestionText": ""
  },
  {
    "rank": 87,
    "topic": "Occupational Deafness, Factory Inspectorate Division & Industrial Rehabilitation",
    "specialty": "Community Medicine",
    "frequency": 4,
    "occurrences": [
      "Q9",
      "January 2016",
      "Q3",
      "February 2019"
    ],
    "representativeQuestionKey": "Q9",
    "representativeQuestionText": ""
  },
  {
    "rank": 88,
    "topic": "Occupational Hazards in Agriculture & Farming",
    "specialty": "Community Medicine",
    "frequency": 4,
    "occurrences": [
      "Q6b",
      "June 2013",
      "Q3",
      "August 2014"
    ],
    "representativeQuestionKey": "Q6b",
    "representativeQuestionText": ""
  },
  {
    "rank": 89,
    "topic": "Healthcare Waste Management, Separation & Safety",
    "specialty": "Community Medicine",
    "frequency": 4,
    "occurrences": [
      "Q11",
      "January 2016",
      "Q9a",
      "June 2013"
    ],
    "representativeQuestionKey": "Q11",
    "representativeQuestionText": ""
  },
  {
    "rank": 90,
    "topic": "Environmental Impact Assessment (EIA) for Industrial Siting",
    "specialty": "Community Medicine",
    "frequency": 4,
    "occurrences": [
      "Q5",
      "February 2019",
      "Q5",
      "600L End of Posting"
    ],
    "representativeQuestionKey": "Q5",
    "representativeQuestionText": ""
  },
  {
    "rank": 91,
    "topic": "Referral Systems in PHC Structures & Integration",
    "specialty": "Community Medicine",
    "frequency": 4,
    "occurrences": [
      "Q10",
      "September 2022",
      "Q3",
      "October 2015"
    ],
    "representativeQuestionKey": "Q10",
    "representativeQuestionText": ""
  },
  {
    "rank": 92,
    "topic": "Total Quality Management (TQM) & Quality Improvement in Health Care",
    "specialty": "Community Medicine",
    "frequency": 4,
    "occurrences": [
      "Q2",
      "September 2022",
      "Q11",
      "January 2016"
    ],
    "representativeQuestionKey": "Q2",
    "representativeQuestionText": ""
  },
  {
    "rank": 93,
    "topic": "Human Resources for Health (HRH) at Primary Health Care Level",
    "specialty": "Community Medicine",
    "frequency": 4,
    "occurrences": [
      "Q4",
      "March 2019",
      "Q10",
      "600L End of Posting"
    ],
    "representativeQuestionKey": "Q4",
    "representativeQuestionText": ""
  },
  {
    "rank": 94,
    "topic": "Health Management Information Systems (HMIS) & Health Information Data in Nigeria",
    "specialty": "Community Medicine",
    "frequency": 4,
    "occurrences": [
      "Q12",
      "May 2010",
      "Q2",
      "September 2008"
    ],
    "representativeQuestionKey": "Q12",
    "representativeQuestionText": ""
  },
  {
    "rank": 95,
    "topic": "Adolescent Health, Classification & Friendly Clinical Services",
    "specialty": "Community Medicine",
    "frequency": 4,
    "occurrences": [
      "Q6",
      "September 2022",
      "Q2",
      "January 2016"
    ],
    "representativeQuestionKey": "Q6",
    "representativeQuestionText": ""
  },
  {
    "rank": 96,
    "topic": "Behavior Change Communication (BCC) Implementation & Patient Charter",
    "specialty": "Community Medicine",
    "frequency": 4,
    "occurrences": [
      "Q10",
      "August 2014",
      "Q8",
      "January 2016"
    ],
    "representativeQuestionKey": "Q10",
    "representativeQuestionText": ""
  },
  {
    "rank": 97,
    "topic": "Health Problems of Internally Displaced Persons (IDPs)",
    "specialty": "Community Medicine",
    "frequency": 4,
    "occurrences": [
      "Q4",
      "April 2017",
      "Q10",
      "January 2016"
    ],
    "representativeQuestionKey": "Q4",
    "representativeQuestionText": ""
  },
  {
    "rank": 98,
    "topic": "Socioeconomic Welfare Services, Challenges & Infrastructure in Nigeria",
    "specialty": "Community Medicine",
    "frequency": 4,
    "occurrences": [
      "Q7",
      "February 2019",
      "Q5",
      "March 2019"
    ],
    "representativeQuestionKey": "Q7",
    "representativeQuestionText": ""
  },
  {
    "rank": 99,
    "topic": "Handicapping Conditions, Impairments, Disabilities & Rehabilitative Management",
    "specialty": "Community Medicine",
    "frequency": 4,
    "occurrences": [
      "Q4a",
      "October 2015",
      "SAQ 6",
      "January 2025 (Comm. Med)"
    ],
    "representativeQuestionKey": "Q4a",
    "representativeQuestionText": ""
  },
  {
    "rank": 100,
    "topic": "Type 2 Diabetes Mellitus Comprehensive Cardiovascular & Glycemic Management",
    "specialty": "Medicine",
    "frequency": 2,
    "occurrences": [
      "Q1a",
      "September 2022"
    ],
    "representativeQuestionKey": "Q1a",
    "representativeQuestionText": ""
  },
  {
    "rank": 101,
    "topic": "Diabetes Cutaneous Manifestations, Ulcers & Necrobiosis Lipoidica",
    "specialty": "Medicine",
    "frequency": 2,
    "occurrences": [
      "Q2A",
      "January 2025"
    ],
    "representativeQuestionKey": "Q2A",
    "representativeQuestionText": ""
  },
  {
    "rank": 102,
    "topic": "Type 1 Diabetes Mellitus Clinical Presentation, Diagnostic Criteria & Supportive Investigations",
    "specialty": "Medicine",
    "frequency": 2,
    "occurrences": [
      "Q2A",
      "April 2024"
    ],
    "representativeQuestionKey": "Q2A",
    "representativeQuestionText": ""
  },
  {
    "rank": 103,
    "topic": "Primary Hypothyroidism Thyroid Function Interpretation, Etiologies & Cardiovascular Signs",
    "specialty": "Medicine",
    "frequency": 2,
    "occurrences": [
      "Q2B",
      "April 2024"
    ],
    "representativeQuestionKey": "Q2B",
    "representativeQuestionText": ""
  },
  {
    "rank": 104,
    "topic": "Acute Kidney Injury (AKI) secondary to Herbal Remedies & NSAIDs (ATN)",
    "specialty": "Medicine",
    "frequency": 2,
    "occurrences": [
      "Q1",
      "February 2020"
    ],
    "representativeQuestionKey": "Q1",
    "representativeQuestionText": ""
  },
  {
    "rank": 105,
    "topic": "Urinary Tract Infections: Acute Cystitis & Pyelonephritis Pathogenesis & Management",
    "specialty": "Medicine",
    "frequency": 2,
    "occurrences": [
      "Q3B",
      "January 2025"
    ],
    "representativeQuestionKey": "Q3B",
    "representativeQuestionText": ""
  },
  {
    "rank": 106,
    "topic": "Parkinson's Disease Presentation, Risk Factors & Treatment",
    "specialty": "Medicine",
    "frequency": 2,
    "occurrences": [
      "Q1",
      "April 2016"
    ],
    "representativeQuestionKey": "Q1",
    "representativeQuestionText": ""
  },
  {
    "rank": 107,
    "topic": "Acute Ischemic Stroke Diagnosis & Thrombolysis Guidelines",
    "specialty": "Medicine",
    "frequency": 2,
    "occurrences": [
      "Q3A",
      "January 2025"
    ],
    "representativeQuestionKey": "Q3A",
    "representativeQuestionText": ""
  },
  {
    "rank": 108,
    "topic": "Migraine with Aura (Chronic Migraine) Triggers, Abortive & Preventive Pharmacotherapy",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "Q4A",
      "April 2024"
    ],
    "representativeQuestionKey": "Q4A",
    "representativeQuestionText": ""
  },
  {
    "rank": 109,
    "topic": "Acute Decompensated Heart Failure & Pulmonary Embolism Co-existence",
    "specialty": "Medicine",
    "frequency": 2,
    "occurrences": [
      "Q2",
      "September 2022"
    ],
    "representativeQuestionKey": "Q2",
    "representativeQuestionText": ""
  },
  {
    "rank": 110,
    "topic": "Rheumatic Heart Disease (Valvular Heart Disease), Atrial Fibrillation & Embolic Stroke",
    "specialty": "Medicine",
    "frequency": 2,
    "occurrences": [
      "Q6",
      "April 2024"
    ],
    "representativeQuestionKey": "Q6",
    "representativeQuestionText": ""
  },
  {
    "rank": 111,
    "topic": "Hypertensive Emergency, Malignant Hypertension & Organ Damage",
    "specialty": "Medicine",
    "frequency": 2,
    "occurrences": [
      "Q3",
      "September 2022"
    ],
    "representativeQuestionKey": "Q3",
    "representativeQuestionText": ""
  },
  {
    "rank": 112,
    "topic": "Ischemic Heart Disease & Diabetic Cardiomyopathy",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "Q2",
      "April 2016"
    ],
    "representativeQuestionKey": "Q2",
    "representativeQuestionText": ""
  },
  {
    "rank": 113,
    "topic": "Deep Vein Thrombosis (DVT) Diagnosis & Therapeutic Management",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "Q5",
      "January 2025"
    ],
    "representativeQuestionKey": "Q5",
    "representativeQuestionText": ""
  },
  {
    "rank": 114,
    "topic": "Stevens-Johnson Syndrome (SJS) & Toxic Epidermal Necrolysis (TEN)",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "Q4",
      "September 2022"
    ],
    "representativeQuestionKey": "Q4",
    "representativeQuestionText": ""
  },
  {
    "rank": 115,
    "topic": "HIV Associated Pruritic Papular Eruption & Oral Hairy Leukoplakia",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "Q2B",
      "January 2025"
    ],
    "representativeQuestionKey": "Q2B",
    "representativeQuestionText": ""
  },
  {
    "rank": 116,
    "topic": "Molluscum Contagiosum in HIV/AIDS, STI Management & Opportunistic Genital Dermatoses",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "Q3B",
      "April 2024"
    ],
    "representativeQuestionKey": "Q3B",
    "representativeQuestionText": ""
  },
  {
    "rank": 117,
    "topic": "Paracetamol Poisoning, Drug-Induced Acute Liver Failure & NAC Protocol",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "Q6",
      "September 2022"
    ],
    "representativeQuestionKey": "Q6",
    "representativeQuestionText": ""
  },
  {
    "rank": 118,
    "topic": "Bleeding Peptic Ulcer Disease Pathophysiology & Management",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "Q4",
      "April 2016"
    ],
    "representativeQuestionKey": "Q4",
    "representativeQuestionText": ""
  },
  {
    "rank": 119,
    "topic": "Hepatic Encephalopathy Precipitants, Paracentesis Complications & Protocolized Therapy",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "Q5",
      "April 2024"
    ],
    "representativeQuestionKey": "Q5",
    "representativeQuestionText": ""
  },
  {
    "rank": 120,
    "topic": "Community-Acquired & Atypical Pneumonia Pathogens, Diagnostic Confirmation & Antibiotic Duration",
    "specialty": "Medicine",
    "frequency": 2,
    "occurrences": [
      "Q1",
      "April 2024"
    ],
    "representativeQuestionKey": "Q1",
    "representativeQuestionText": ""
  },
  {
    "rank": 121,
    "topic": "Silicotuberculosis, Occupational Dust Exposure & Restrictive Spirometry",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "Q4",
      "February 2020"
    ],
    "representativeQuestionKey": "Q4",
    "representativeQuestionText": ""
  },
  {
    "rank": 122,
    "topic": "Asbestosis, Mesothelioma & Pulmonary Fibrosis",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "Q5",
      "April 2016"
    ],
    "representativeQuestionKey": "Q5",
    "representativeQuestionText": ""
  },
  {
    "rank": 123,
    "topic": "Miliary Tuberculosis vs Metastatic Lung Disease Evaluation",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "Q5",
      "September 2022"
    ],
    "representativeQuestionKey": "Q5",
    "representativeQuestionText": ""
  },
  {
    "rank": 124,
    "topic": "Informed Consent, Medical Malpractice & Professional Negligence Elements",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "Q7",
      "September 2022"
    ],
    "representativeQuestionKey": "Q7",
    "representativeQuestionText": ""
  },
  {
    "rank": 125,
    "topic": "Primary Prevention of Cancer & Global Cancer Burden",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "Q7",
      "January 2025"
    ],
    "representativeQuestionKey": "Q7",
    "representativeQuestionText": ""
  },
  {
    "rank": 126,
    "topic": "Clinical Syndromes: Depression Variants, Schizophrenia & Affective Disorders",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "Q1",
      "February 2020 (Psychiatry)"
    ],
    "representativeQuestionKey": "Q1",
    "representativeQuestionText": ""
  },
  {
    "rank": 127,
    "topic": "Anxiety Disorders, PTSD, Coping Mechanisms & Grief Reactions",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "Q2",
      "February 2020 (Psychiatry)"
    ],
    "representativeQuestionKey": "Q2",
    "representativeQuestionText": ""
  },
  {
    "rank": 128,
    "topic": "Personality Disorders: DSM Classification Clusters & Clinical Features",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "Q4",
      "September 2022 (Psychiatry)"
    ],
    "representativeQuestionKey": "Q4",
    "representativeQuestionText": ""
  },
  {
    "rank": 129,
    "topic": "Biopsychosocial Formulation of Bipolar/Depressive Illness & Co-morbidities",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "Q5",
      "January 2025 (Psychiatry)"
    ],
    "representativeQuestionKey": "Q5",
    "representativeQuestionText": ""
  },
  {
    "rank": 130,
    "topic": "Neuroleptic Malignant Syndrome (NMS) Diagnosis & Therapeutic Management",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "Q1",
      "January 2025 (Psychiatry)"
    ],
    "representativeQuestionKey": "Q1",
    "representativeQuestionText": ""
  },
  {
    "rank": 131,
    "topic": "Consultation-Liaison Psychiatry & Lithium Monitoring/Toxicity Guidelines",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "Q3",
      "January 2025 (Psychiatry)"
    ],
    "representativeQuestionKey": "Q3",
    "representativeQuestionText": ""
  },
  {
    "rank": 132,
    "topic": "Forensic Psychiatry: Criminal Responsibility, Capacity & Fitness to Plead",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "Q5",
      "February 2020 (Psychiatry)"
    ],
    "representativeQuestionKey": "Q5",
    "representativeQuestionText": ""
  },
  {
    "rank": 133,
    "topic": "Forensic Duty to Protect (Tarasoff), Risk of Violence & Competency Assessment",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "Q2",
      "January 2025 (Psychiatry)"
    ],
    "representativeQuestionKey": "Q2",
    "representativeQuestionText": ""
  },
  {
    "rank": 134,
    "topic": "De-escalation Techniques & Physical Restraints in Acute Psychosis",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "Q4",
      "February 2020 (Psychiatry)"
    ],
    "representativeQuestionKey": "Q4",
    "representativeQuestionText": ""
  },
  {
    "rank": 135,
    "topic": "Psychotherapy: Operant Conditioning, CBT & Psychological Modalities",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "Q4",
      "January 2025 (Psychiatry)"
    ],
    "representativeQuestionKey": "Q4",
    "representativeQuestionText": ""
  },
  {
    "rank": 136,
    "topic": "Alcohol Dependence: Stages of Change & Neurological Complications",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "Q3",
      "September 2022 (Psychiatry)"
    ],
    "representativeQuestionKey": "Q3",
    "representativeQuestionText": ""
  },
  {
    "rank": 137,
    "topic": "Colorectal Carcinoma (Left-Sided / Rectal Cancer) Evaluation, Staging & Surgical Management",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "LAQ 1",
      "April 2024"
    ],
    "representativeQuestionKey": "LAQ 1",
    "representativeQuestionText": ""
  },
  {
    "rank": 138,
    "topic": "Gastric Outflow Obstruction & Gastric Cancer Management",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "LAQ 1",
      "December 2024"
    ],
    "representativeQuestionKey": "LAQ 1",
    "representativeQuestionText": ""
  },
  {
    "rank": 139,
    "topic": "Obstructive Jaundice Assessment & Pre-operative Preparation",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "Q1",
      "September 2022 (Surgery)"
    ],
    "representativeQuestionKey": "Q1",
    "representativeQuestionText": ""
  },
  {
    "rank": 140,
    "topic": "Splenectomy Indications, Techniques & Post-splenectomy Sepsis",
    "specialty": "Medicine",
    "frequency": 2,
    "occurrences": [
      "SAQ 3",
      "January 2020"
    ],
    "representativeQuestionKey": "SAQ 3",
    "representativeQuestionText": ""
  },
  {
    "rank": 141,
    "topic": "Bowel Preparation & Abdomino-perineal Resection for Rectal Tumors",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "SAQ 3",
      "February 2020"
    ],
    "representativeQuestionKey": "SAQ 3",
    "representativeQuestionText": ""
  },
  {
    "rank": 142,
    "topic": "Cutaneous Ulcers, ABPI & Arterial vs Venous Ulcer Differentiation",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "Q7",
      "September 2022 (Surgery)"
    ],
    "representativeQuestionKey": "Q7",
    "representativeQuestionText": ""
  },
  {
    "rank": 143,
    "topic": "Haemorrhoids Grading, Pathophysiology & Treatment Modalities",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "Q4",
      "Finals Paper II (Surgery)"
    ],
    "representativeQuestionKey": "Q4",
    "representativeQuestionText": ""
  },
  {
    "rank": 144,
    "topic": "Intestinal Obstruction Radiological Evaluation & Management",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "SAQ 9",
      "January 2020"
    ],
    "representativeQuestionKey": "SAQ 9",
    "representativeQuestionText": ""
  },
  {
    "rank": 145,
    "topic": "Angular Knee Deformities & Pediatric Genu Valgum",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "Q7",
      "June 2018"
    ],
    "representativeQuestionKey": "Q7",
    "representativeQuestionText": ""
  },
  {
    "rank": 146,
    "topic": "Hematuria Causes in Elderly Males & Diagnostic Workup",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "Q4",
      "September 2022 (Surgery)"
    ],
    "representativeQuestionKey": "Q4",
    "representativeQuestionText": ""
  },
  {
    "rank": 147,
    "topic": "Testicular Torsion Presentation & Emergency Detorsion",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "SAQ 6",
      "January 2020"
    ],
    "representativeQuestionKey": "SAQ 6",
    "representativeQuestionText": ""
  },
  {
    "rank": 148,
    "topic": "Cyanotic Congenital Heart Disease (Tetralogy of Fallot) & Palliative Shunt Surgery (Blalock-Taussig)",
    "specialty": "Surgery",
    "frequency": 2,
    "occurrences": [
      "SAQ 6",
      "March 2024"
    ],
    "representativeQuestionKey": "SAQ 6",
    "representativeQuestionText": ""
  },
  {
    "rank": 149,
    "topic": "Empyema Thoracis Classification, Causes & Surgical Interventions",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "Q12",
      "September 2022 (Surgery)"
    ],
    "representativeQuestionKey": "Q12",
    "representativeQuestionText": ""
  },
  {
    "rank": 150,
    "topic": "Traumatic Brain Injury & Extradural Haemorrhage Management",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "SAQ 1",
      "March 2024"
    ],
    "representativeQuestionKey": "SAQ 1",
    "representativeQuestionText": ""
  },
  {
    "rank": 151,
    "topic": "Raised Intracranial Pressure (ICP) Assessment & Management Steps",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "Q9",
      "June 2018"
    ],
    "representativeQuestionKey": "Q9",
    "representativeQuestionText": ""
  },
  {
    "rank": 152,
    "topic": "Hydrocephalus Etiology, Shunt Procedures & Complications",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "Q11",
      "September 2022 (Surgery)"
    ],
    "representativeQuestionKey": "Q11",
    "representativeQuestionText": ""
  },
  {
    "rank": 153,
    "topic": "Ruptured Pediatric Appendicitis & Emergency Management",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "SAQ 2",
      "December 2024"
    ],
    "representativeQuestionKey": "SAQ 2",
    "representativeQuestionText": ""
  },
  {
    "rank": 154,
    "topic": "Vocal Cord Pathology, Hoarseness & Clinic Laryngoscopy",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "Q3",
      "February 2019"
    ],
    "representativeQuestionKey": "Q3",
    "representativeQuestionText": ""
  },
  {
    "rank": 155,
    "topic": "Insect in Ear Removal & Complications",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "SAQ 8",
      "January 2020"
    ],
    "representativeQuestionKey": "SAQ 8",
    "representativeQuestionText": ""
  },
  {
    "rank": 156,
    "topic": "Computed Tomography (CT) vs Magnetic Resonance Imaging (MRI): Comparative Advantages & Disadvantages",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "SAQ 4",
      "April 2024"
    ],
    "representativeQuestionKey": "SAQ 4",
    "representativeQuestionText": ""
  },
  {
    "rank": 157,
    "topic": "Radiographic Densities, Terminologies & Tissue Attenuation in Radiology",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "SAQ 4",
      "March 2024"
    ],
    "representativeQuestionKey": "SAQ 4",
    "representativeQuestionText": ""
  },
  {
    "rank": 158,
    "topic": "MRI Basic Sequences (T1 vs T2 comparison)",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "SAQ 4",
      "January 2025"
    ],
    "representativeQuestionKey": "SAQ 4",
    "representativeQuestionText": ""
  },
  {
    "rank": 159,
    "topic": "Brain CT Scanning in Acute Head Trauma",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "Q3",
      "June 2018"
    ],
    "representativeQuestionKey": "Q3",
    "representativeQuestionText": ""
  },
  {
    "rank": 160,
    "topic": "Sonomammography Indications & Breast Mass Characterization",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "Q6",
      "September 2022 (Surgery)"
    ],
    "representativeQuestionKey": "Q6",
    "representativeQuestionText": ""
  },
  {
    "rank": 161,
    "topic": "Acute Trauma Pain Management, WHO Analgesic Ladder & Pain Assessment Tools",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "SAQ 2",
      "April 2024"
    ],
    "representativeQuestionKey": "SAQ 2",
    "representativeQuestionText": ""
  },
  {
    "rank": 162,
    "topic": "Post-Dural Puncture Headache (PDPH) & Spinal Anesthesia Complications",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "SAQ 2",
      "January 2025"
    ],
    "representativeQuestionKey": "SAQ 2",
    "representativeQuestionText": ""
  },
  {
    "rank": 163,
    "topic": "Oxygen Therapy Administration Devices & Complications",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "Q8",
      "September 2022 (Surgery)"
    ],
    "representativeQuestionKey": "Q8",
    "representativeQuestionText": ""
  },
  {
    "rank": 164,
    "topic": "Hypoxia Definition & Etiologies under General Anaesthesia",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "Q7",
      "Finals Paper II (Surgery)"
    ],
    "representativeQuestionKey": "Q7",
    "representativeQuestionText": ""
  },
  {
    "rank": 165,
    "topic": "Pterygium Etiology, Clinical Presentation & Recurrence Prevention",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "Q4",
      "June 2018"
    ],
    "representativeQuestionKey": "Q4",
    "representativeQuestionText": ""
  },
  {
    "rank": 166,
    "topic": "Chemical Eye Injury Emergency Management & Causes of Blindness",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "Q9",
      "September 2022 (Surgery)"
    ],
    "representativeQuestionKey": "Q9",
    "representativeQuestionText": ""
  },
  {
    "rank": 167,
    "topic": "Meningitis Control & Vaccine Campaigns",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "Q6",
      "April 2017"
    ],
    "representativeQuestionKey": "Q6",
    "representativeQuestionText": ""
  },
  {
    "rank": 168,
    "topic": "Disease Elimination vs Eradication Criteria",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "Q3",
      "December 2007"
    ],
    "representativeQuestionKey": "Q3",
    "representativeQuestionText": ""
  },
  {
    "rank": 169,
    "topic": "Cancer Epidemiology in Africa & Prevention Recommendations",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "Q11",
      "February 2019"
    ],
    "representativeQuestionKey": "Q11",
    "representativeQuestionText": ""
  },
  {
    "rank": 170,
    "topic": "Sexually Transmitted Infections (STIs) Classification & Syndromic Management",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "Q9",
      "October 2015"
    ],
    "representativeQuestionKey": "Q9",
    "representativeQuestionText": ""
  },
  {
    "rank": 171,
    "topic": "Non-Communicable Diseases (NCDs): Risk Factors (Sugar, Obesity) & Public Health Control",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "Q5",
      "June 2013"
    ],
    "representativeQuestionKey": "Q5",
    "representativeQuestionText": ""
  },
  {
    "rank": 172,
    "topic": "Epidemic Curve Definition, Types, Characteristics & Public Health Application",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "SAQ 1",
      "January 2025 (Comm. Med)"
    ],
    "representativeQuestionKey": "SAQ 1",
    "representativeQuestionText": ""
  },
  {
    "rank": 173,
    "topic": "Waterborne Outbreaks: Cholera Epidemiology, Pathogenesis, Transmission & Outbreak Control",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "LAQ 11",
      "January 2025 (Comm. Med)"
    ],
    "representativeQuestionKey": "LAQ 11",
    "representativeQuestionText": ""
  },
  {
    "rank": 174,
    "topic": "Occupational Hazards in Mining Industries",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "Q1",
      "March 2019"
    ],
    "representativeQuestionKey": "Q1",
    "representativeQuestionText": ""
  },
  {
    "rank": 175,
    "topic": "Hospital Hazards, Waste Exposure & Biosafety for Health Workers",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "Q3",
      "May 2010"
    ],
    "representativeQuestionKey": "Q3",
    "representativeQuestionText": ""
  },
  {
    "rank": 176,
    "topic": "Port Health Services & Quarantine Inspection at Seaports/Airports",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "Q9b",
      "June 2013"
    ],
    "representativeQuestionKey": "Q9b",
    "representativeQuestionText": ""
  },
  {
    "rank": 177,
    "topic": "Medical Officer of Health (MOH) Roles & Administrative Functions",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "Q5b",
      "December 2017"
    ],
    "representativeQuestionKey": "Q5b",
    "representativeQuestionText": ""
  },
  {
    "rank": 178,
    "topic": "Drug Management Cycle in Primary Care Units",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "Q2",
      "September 2022"
    ],
    "representativeQuestionKey": "Q2",
    "representativeQuestionText": ""
  },
  {
    "rank": 179,
    "topic": "Modern Health Service Underutilization in Rural Populations",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "Q13",
      "August 2014"
    ],
    "representativeQuestionKey": "Q13",
    "representativeQuestionText": ""
  },
  {
    "rank": 180,
    "topic": "Childhood Nutritional Disorders & Nutritional Surveillance Systems",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "Q1",
      "December 2007"
    ],
    "representativeQuestionKey": "Q1",
    "representativeQuestionText": ""
  },
  {
    "rank": 181,
    "topic": "Protein Energy Malnutrition (PEM) Prevention & Clinical Signs",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "Q3",
      "May 2010"
    ],
    "representativeQuestionKey": "Q3",
    "representativeQuestionText": ""
  },
  {
    "rank": 182,
    "topic": "Applied Nutrition: Food Pyramid, Fortification & Complementary Feeding Guidelines",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "SAQ 7",
      "January 2025 (Comm. Med)"
    ],
    "representativeQuestionKey": "SAQ 7",
    "representativeQuestionText": ""
  },
  {
    "rank": 183,
    "topic": "Epidemiological Bias vs Confounding Control Methods",
    "specialty": "Community Medicine",
    "frequency": 2,
    "occurrences": [
      "Q8",
      "September 2022"
    ],
    "representativeQuestionKey": "Q8",
    "representativeQuestionText": ""
  }
];

export function getTopTestedTopics(specialty?: string, minFrequency: number = 3): PQTopicFrequency[] {
  return TOP_TESTED_TOPICS.filter(t => {
    const matchesSpec = !specialty || specialty === 'All' || t.specialty === specialty;
    const matchesFreq = t.frequency >= minFrequency;
    return matchesSpec && matchesFreq;
  });
}
