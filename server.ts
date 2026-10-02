import express from 'express';
import { GoogleGenAI } from '@google/genai';
import path from 'path';
import { fileURLToPath } from 'url';
import { getRandomCuratedTip } from './src/data/curatedStudyTips';

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

// Endpoint: Generate Study Tip of the Day
app.post('/api/study-tip', async (req, res) => {
  const { focusArea, dayTheme, simulatedDay, excludeTitle } = req.body || {};
  const requestedFocus = focusArea || 'General High-Yield Exam Strategy';

  try {
    if (ai) {
      const prompt = `You are a distinguished Senior Consultant Physician and Chief MBBS Clinical Examiner.
Provide ONE high-yield, razor-sharp clinical study tip or revision strategy specifically tailored for final-year MBBS medical students preparing for their Final MB exams (Internal Medicine, General Surgery, Community Medicine, and Psychiatry).

Context:
- Current Revision Day: ${simulatedDay ? `Day ${simulatedDay}` : 'Exam Revision Period'}
- Active Clinical Topic/Theme: ${dayTheme || 'Core High-Yield Clinical Topics'}
- Requested Focus Area: ${requestedFocus}
${excludeTitle ? `- Avoid generating this previous tip title: "${excludeTitle}"` : ''}

Return ONLY a valid JSON object (no markdown code blocks, no backticks, no preamble) with this exact schema:
{
  "title": "A short, punchy 5-8 word headline",
  "category": "${requestedFocus}",
  "content": "2 to 3 sentences of concise, actionable clinical revision advice directly relevant to passing final MB examinations",
  "clinicalTakeaway": "One memorable, high-yield sentence highlighting what to write on exam scripts or say to examiners",
  "mnemonic": "A short high-yield mnemonic or rule of thumb (or null if not applicable)"
}`;

      // Use gemini-3.8-flash as recommended
      for (let attempt = 1; attempt <= 2; attempt++) {
        try {
          const response = await ai.models.generateContent({
            model: 'gemini-3.8-flash',
            contents: prompt,
            config: {
              temperature: 0.8,
              responseMimeType: 'application/json',
            },
          });

          const responseText = response.text?.trim() || '';
          if (responseText) {
            const parsed = JSON.parse(responseText);
            if (parsed && parsed.title && parsed.content) {
              return res.json({
                success: true,
                tip: {
                  ...parsed,
                  category: requestedFocus
                },
                source: 'gemini (gemini-3.8-flash)'
              });
            }
          }
        } catch (modelErr: any) {
          console.warn(`Attempt ${attempt} for gemini-3.8-flash failed:`, modelErr?.message || modelErr);
          if (attempt < 2) {
            await new Promise(r => setTimeout(r, 500));
          }
        }
      }
    }

    // Dynamic tailored fallback from rich curated clinical tip bank
    const tip = getRandomCuratedTip(requestedFocus, excludeTitle);
    return res.json({ success: true, tip, source: 'curated' });
  } catch (error: any) {
    console.error('Error generating study tip:', error);
    const fallbackTip = getRandomCuratedTip(requestedFocus, excludeTitle);
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
  const isProduction =
    process.env.NODE_ENV === 'production' ||
    process.env.K_SERVICE !== undefined ||
    (process.env.PORT !== undefined && process.env.PORT !== '3000');

  if (!isProduction) {
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
    console.log(`Final MB Study Server listening on http://0.0.0.0:${PORT} (Mode: ${isProduction ? 'production' : 'development'})`);
  });
}

startServer();
