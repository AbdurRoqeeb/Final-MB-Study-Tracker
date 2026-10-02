import express from 'express';
import { GoogleGenAI } from '@google/genai';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

// Initialize Google Gen AI client with User-Agent header as required
const apiKey = process.env.GEMINI_API_KEY || '';
const ai = apiKey
  ? new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    })
  : null;

// High-yield fallback tips for MBBS clinical candidates
const CURATED_MBBS_TIPS = [
  {
    title: "The 3-Step Differential Formula for Medical Long Cases",
    category: "Clinical Long Case",
    content: "When presenting differentials in your Medicine viva, always structure them anatomically or etiologically (VINDICATE: Vascular, Infectious, Neoplastic, Degenerative, Iatrogenic/Intoxication, Congenital, Autoimmune, Trauma, Endocrine/Metabolic). Never offer more than 3 high-probability differentials unless specifically probed.",
    clinicalTakeaway: "State your most likely diagnosis first, supported by 2 positive clinical signs and 1 pertinent negative.",
    mnemonic: "VINDICATE schema for comprehensive differential diagnosis generation."
  },
  {
    title: "Alvarado Score & Acute Appendicitis Past Question Traps",
    category: "Surgery Strategy",
    content: "In final MB surgery papers, acute appendicitis is one of the most repeatedly tested emergencies. Remember that an Alvarado score ≥7 mandates surgical consultation/intervention, while ≤4 strongly points away. In women of childbearing age, always list ectopic pregnancy and PID as mandatory differentials before proceeding to open appendectomy.",
    clinicalTakeaway: "Always check urine β-hCG and perform a pelvic exam in female acute abdomen presentations.",
    mnemonic: "MANTRELS: Migration, Anorexia, Nausea, Tenderness in RIF, Rebound, Elevation of temp, Leukocytosis, Shift to left."
  },
  {
    title: "Parkland Fluid Resuscitation Speed Math",
    category: "Operative Principles",
    content: "Examiners love testing the timing of fluid administration in burn shock. Calculate 4 mL × % TBSA (2nd & 3rd degree only) × Body weight (kg). Crucially, the clock starts from the TIME OF INJURY, not the time of hospital admission! Give half over the first 8 hours and the remainder over the next 16 hours.",
    clinicalTakeaway: "Target adult urine output of 0.5 – 1.0 mL/kg/hr to guide real-time titration, not just formula output.",
    mnemonic: "First half in first 8 hours FROM BURN EVENT, not arrival."
  },
  {
    title: "Emergency Management of Severe Malaria with Altered Sensorium",
    category: "Internal Medicine",
    content: "In West African MBBS examinations, cerebral malaria is a perennial clinical scenario. Intravenous artesunate (2.4 mg/kg IV at 0, 12, and 24 hours, then daily) is the undisputed gold standard over quinine. Always rule out co-existing hypoglycemia, which commonly mimics or worsens coma.",
    clinicalTakeaway: "Check capillary blood glucose immediately in every comatose patient with suspected cerebral malaria.",
    mnemonic: "Artesunate 2.4 mg/kg at 0-12-24h; always check glucose and lumbar puncture after ruling out raised ICP."
  },
  {
    title: "Antipsychotic Extrapyramidal Side Effects (EPS) Time Course",
    category: "Psychiatry in Medicine",
    content: "Psychiatry examiners frequently test the chronological onset of antipsychotic complications. Acute dystonia happens in hours to days (treat with procyclidine or benzatropine). Akathisia develops in days to weeks (treat with propranolol). Parkinsonism takes weeks to months. Tardive dyskinesia develops after months to years (discontinue or switch to clozapine).",
    clinicalTakeaway: "Differentiate panic attacks from akathisia by checking for severe subjective motor restlessness in the limbs.",
    mnemonic: "ADAPT: Acute Dystonia (hours), Akathisia (days), Parkinsonism (weeks), Tardive Dyskinesia (years)."
  }
];

// Endpoint: Generate Study Tip of the Day
app.post('/api/study-tip', async (req, res) => {
  const { focusArea, dayTheme, simulatedDay } = req.body || {};

  try {
    if (ai) {
      const prompt = `You are a distinguished Senior Consultant Physician and Chief MBBS Clinical Examiner.
Provide ONE high-yield, razor-sharp clinical study tip or revision strategy specifically tailored for final-year MBBS medical students preparing for their Final MB exams (Internal Medicine, General Surgery, Community Medicine, and Psychiatry).

Context:
- Current Revision Day: ${simulatedDay ? `Day ${simulatedDay}` : 'Exam Revision Period'}
- Active Clinical Topic/Theme: ${dayTheme || 'Core High-Yield Clinical Topics'}
- Requested Focus Area: ${focusArea || 'General High-Yield Exam Strategy'}

Return ONLY a valid JSON object (no markdown code blocks, no backticks, no preamble) with this exact schema:
{
  "title": "A short, punchy 5-8 word headline",
  "category": "One of: Clinical Long Case, Surgery Strategy, Emergency Protocol, Pharmacology Trap, Viva & OSCE, or Time Management",
  "content": "2 to 3 sentences of concise, actionable clinical revision advice directly relevant to passing final MB examinations",
  "clinicalTakeaway": "One memorable, high-yield sentence highlighting what to write on exam scripts or say to examiners",
  "mnemonic": "A short high-yield mnemonic or rule of thumb (or null if not applicable)"
}`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
        config: {
          temperature: 0.7,
          responseMimeType: 'application/json',
        },
      });

      const responseText = response.text?.trim() || '';
      try {
        const parsed = JSON.parse(responseText);
        return res.json({ success: true, tip: parsed, source: 'gemini' });
      } catch (parseErr) {
        // Fallback to text parsing or curated tip
        console.warn('Could not parse Gemini JSON response, falling back:', parseErr);
      }
    }

    // Fallback: Pick a curated MBBS tip based on day or random
    const randomIndex = simulatedDay
      ? (Number(simulatedDay) - 1) % CURATED_MBBS_TIPS.length
      : Math.floor(Math.random() * CURATED_MBBS_TIPS.length);
    const tip = CURATED_MBBS_TIPS[Math.abs(randomIndex) % CURATED_MBBS_TIPS.length];

    return res.json({ success: true, tip, source: 'curated' });
  } catch (error: any) {
    console.error('Error generating study tip:', error);
    // Graceful fallback to curated clinical tip
    const fallbackTip = CURATED_MBBS_TIPS[Math.floor(Math.random() * CURATED_MBBS_TIPS.length)];
    return res.json({
      success: true,
      tip: fallbackTip,
      source: 'fallback',
      error: error?.message || 'Server error',
    });
  }
});

// Vite middleware in dev or static files in production
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  const PORT = Number(process.env.PORT) || 3000;
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Final MB Study Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
