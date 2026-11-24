const ALLOWED_ORIGIN = "https://shreyas2006r.github.io";

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const headers = {
      "Access-Control-Allow-Origin": origin === ALLOWED_ORIGIN ? ALLOWED_ORIGIN : "null",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Vary": "Origin"
    };
    if (request.method === "OPTIONS") return new Response(null, { headers });
    if (origin !== ALLOWED_ORIGIN) return new Response("Origin not allowed", { status: 403, headers });
    if (request.method !== "POST") return new Response("Method not allowed", { status: 405, headers });
    if (!env.GEMINI_API_KEY) return Response.json({ error: "GEMINI_API_KEY secret is not configured" }, { status: 503, headers });
    try {
      const body = await request.json();
      const allowed = ["kn", "hi", "ta", "te", "ml", "en"];
      if (!allowed.includes(body.language) || !Array.isArray(body.texts) || body.texts.length > 35 ||
          body.texts.some(x => typeof x !== "string" || x.length > 1800)) {
        return Response.json({ error: "Invalid translation request" }, { status: 400, headers });
      }
      const names = { kn:"Kannada", hi:"Hindi", ta:"Tamil", te:"Telugu", ml:"Malayalam", en:"English" };
      const prompt = "Translate every string in the JSON array into " + names[body.language] +
        ". Return ONLY a valid JSON array of strings with exactly the same number and order. Preserve numbers, units, URLs, product names, HTML entities and placeholders such as {name}. Do not add explanations.\n" +
        JSON.stringify(body.texts);
      const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" +
        encodeURIComponent(env.GEMINI_API_KEY), {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: { temperature: 0.1, responseMimeType: "application/json" }
          })
        });
      if (!response.ok) {
        const detail = await response.text();
        return Response.json({ error: "Gemini translation failed", detail: detail.slice(0, 500) }, { status: 502, headers });
      }
      const data = await response.json();
      const raw = data.candidates?.[0]?.content?.parts?.map(p => p.text || "").join("") || "";
      const translated = JSON.parse(raw);
      if (!Array.isArray(translated) || translated.length !== body.texts.length ||
          translated.some(x => typeof x !== "string")) {
        return Response.json({ error: "Unexpected translation response" }, { status: 502, headers });
      }
      return Response.json({ translations: translated }, { headers });
    } catch (error) {
      return Response.json({ error: "Translation request could not be completed" }, { status: 500, headers });
    }
  }
};
