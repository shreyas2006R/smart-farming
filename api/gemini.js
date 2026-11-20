// Vercel serverless endpoint. Keep GEMINI_API_KEY in Vercel Environment Variables.
export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const key = process.env.GEMINI_API_KEY;
  if (!key) return res.status(503).json({ error: 'Gemini service is not configured on this deployment.' });
  const prompt = typeof req.body?.prompt === 'string' ? req.body.prompt.trim() : '';
  if (!prompt || prompt.length > 3000) return res.status(400).json({ error: 'A question of up to 3000 characters is required.' });

  const model = process.env.GEMINI_MODEL || 'gemini-3.8-flash';
  try {
    const upstream = await fetch('https://generativelanguage.googleapis.com/v1beta/models/' + encodeURIComponent(model) + ':generateContent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': key },
      body: JSON.stringify({
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
        tools: [{ google_search: {} }],
        generationConfig: { maxOutputTokens: 1200 }
      })
    });
    const data = await upstream.json().catch(() => ({}));
    if (!upstream.ok) {
      console.error('Gemini API request failed:', upstream.status, data?.error?.status || 'upstream error');
      return res.status(502).json({ error: 'The crop assistant is temporarily unavailable. Please try again later.' });
    }
    const answer = (data.candidates?.[0]?.content?.parts || []).map((part) => part.text || '').join('\n').trim();
    if (!answer) return res.status(502).json({ error: 'The AI service returned an empty answer.' });
    const sources = (data.candidates?.[0]?.groundingMetadata?.groundingChunks || [])
      .map((chunk) => chunk.web)
      .filter((web) => web?.uri)
      .slice(0, 5)
      .map((web) => ({ title: web.title || web.uri, url: web.uri }));
    return res.status(200).json({ answer, sources });
  } catch (error) {
    console.error('Gemini endpoint error:', error?.message || 'unknown error');
    return res.status(502).json({ error: 'Unable to reach the AI service.' });
  }
}