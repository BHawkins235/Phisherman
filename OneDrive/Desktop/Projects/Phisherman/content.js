function getCurrentEmail() {
  const subject = document.querySelector("h2[data-thread-id]")?.innerText || "";
  const body = document.querySelector(".a3s")?.innerText || "";
  return { subject, body };
}

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message.action === "checkPhish") {
    const email = getCurrentEmail();
    const combined = `${email.subject} ${email.body}`;

    // Step 1: Local pattern check
    const patterns = [
      /urgent/i,
      /account\s+locked/i,
      /verify\s+your\s+account/i,
      /click\s+here/i,
      /suspend/i,
      /security\s+alert/i,
      /password/i
    ];

    const localMatch = patterns.some(p => p.test(combined));

    if (localMatch) {
      console.log("Local pattern matched — phishing likely.");
      sendResponse({ isPhishing: true, source: "local" });
      return;
    }

    // Step 2: Gemini fallback
    chrome.runtime.sendMessage({ action: "getApiKey" }, async (response) => {
      const apiKey = response?.apiKey || '';
      if (!apiKey) {
        console.error("Missing API key");
        sendResponse({ isPhishing: false, error: "Missing API key" });
        return;
      }

      const prompt = `
You're an AI trained to detect phishing emails. Respond with only "true" or "false" — no explanation.
Is the following email a phishing attempt?

Subject: ${email.subject}
Body: ${email.body}
`;

      try {
        const geminiResponse = await queryGemini(prompt, apiKey);
        console.log("Gemini raw response:", geminiResponse);

        const isPhishing = geminiResponse.trim().toLowerCase() === "true";
        sendResponse({ isPhishing, source: "gemini" });
      } catch (err) {
        console.error("Gemini API error:", err);
        sendResponse({ isPhishing: false, error: "API request failed" });
      }
    });

    return true; // Keep message channel open for async sendResponse
  }
});

async function queryGemini(prompt, apiKey) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;
  const payload = {
    contents: [{ parts: [{ text: prompt }] }]
  };

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  const data = await res.json();
  console.log("Gemini full response:", data);
  return data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
}