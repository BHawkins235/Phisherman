function getCurrentEmail() {
  const subject = document.querySelector("h2[data-thread-id]")?.innerText || "";
  const body = document.querySelector(".a3s")?.innerText || "";
  const sender = document.querySelector(".gD")?.getAttribute("email") || "";
  const header = document.querySelector(".gE")?.innerText || "";
  const links = Array.from(document.querySelectorAll(".a3s a")).map(a => a.href).join(" ");
  return { subject, body, sender, header, links };
}

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message.action === "checkPhish") {
    const email = getCurrentEmail();
    const combined = `${email.subject} ${email.body}`;


    

    // Step 1: Gemini prompt and API call
    chrome.runtime.sendMessage({ action: "getApiKey" }, async (response) => {
      const apiKey = response?.apiKey || '';
      if (!apiKey) {
        console.error("Missing API key");
        sendResponse({ isPhishing: false, error: "Missing API key" });
        return;
      }

      const prompt2 = `You're a expert email security analyst. Determine if the following email is a phishing attempt. Respond with only "true" or "false". 
        Use your knowledge of common phishing tactics such as urgent language, suspicious links, requests for personal information, and unexpected attachments.
        Email Subject: ${email.subject} Email Body: ${email.body} Email Sender: ${email.sender} Email Header: ${email.header}. With the links analize the address connected to them; links: ${email.links}. If you are not sure respond with a number 0 to 100 indicating the likelihood of phishing.`;


      try {
        const geminiResponse = await queryGemini(prompt2, apiKey);
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