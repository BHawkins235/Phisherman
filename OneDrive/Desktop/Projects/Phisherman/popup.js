document.getElementById('check').addEventListener('click', () => {
  const status = document.getElementById('status');
  status.textContent = "Checking email...";

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: "checkPhish" }, (response) => {
      if (chrome.runtime.lastError) {
        console.error("Runtime error:", chrome.runtime.lastError.message);
        status.textContent = "Error: Could not connect to content script.";
        return;
      }

      if (response?.error) {
        console.error("Error:", response.error);
        status.textContent = `Error: ${response.error}`;
      } else {
        console.log("Phishing detected:", response.isPhishing);
        status.textContent = response.isPhishing
          ? "Phishing!"
          : "Safe";
      }
    });
  });
});