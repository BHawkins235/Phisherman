document.getElementById('check').addEventListener('click', () => {
  const status = document.getElementById('status');
  status.textContent = "Checking email...";

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: "checkPhish" }, (response) => {
      if (chrome.runtime.lastError) {
        console.error("Runtime error:", chrome.runtime.lastError.message);
        status.textContent = "Error.";
        return;
      }
      //Response Verification
      if (response?.error) {
        console.error("Error:", response.error);
        status.textContent = `Error: ${response.error}`;

      
      } 
      if (typeof response.isPhishing === 'number' && Number.isFinite(response.isPhishing)) {
        // Clamp and format percentage
        const percent = Math.max(0, Math.min(100, response.isPhishing));
        status.textContent = `Phishing Likelihood: ${percent}%`;
      } else if (typeof response.isPhishing === 'boolean') {
        status.textContent = response.isPhishing ? "Phishing!" : "Safe";
      } else {
        // Unexpected value: show fallback message
        status.textContent = "Unable to determine.";
        console.warn("Unexpected response:", response);
      }
    });
  });
});
const optionsButton = document.getElementById('OptionsButton');
optionsButton.addEventListener('click', () => {
  chrome.runtime.openOptionsPage();
});