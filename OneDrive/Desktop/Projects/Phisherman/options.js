const apiKeyInput = document.getElementById('apiKey');
const saveButton = document.getElementById('saveButton');
const status = document.getElementById('status');

// Load saved API key from storage
chrome.storage.sync.get(['geminiApiKey'], (result) => {
  if (result.geminiApiKey) {
    apiKeyInput.value = result.geminiApiKey;
    status.textContent = "API key loaded.";
  }
});

// Save API key to storage
saveButton.addEventListener('click', () => {
  const apiKey = apiKeyInput.value.trim();
  if (!apiKey) {
    status.textContent = "Please enter a valid API key.";
    return;
  }

  chrome.storage.sync.set({ geminiApiKey: apiKey }, () => {
    status.textContent = "API key saved successfully.";
    console.log('API key saved:', apiKey);
  });
});