const apiKeyInput = document.getElementById('apiKey');
const saveButton = document.getElementById('saveButton');
const status = document.getElementById('status');

// Load saved API key from storage
chrome.storage.sync.get(['geminiApiKey'], (result) => {
  const key = result.geminiApiKey;
  // Only set if key matches typical API key pattern (alphanumeric, dash, underscore, 20-100 chars)
  if (typeof key === 'string' && /^[A-Za-z0-9-_]{20,100}$/.test(key)) {
    apiKeyInput.value = key;
    status.textContent = "API key loaded.";
  } else {
    apiKeyInput.value = '';
    status.textContent = "No valid API key found.";
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
    apiKeyInput.value = '';
    console.log('API key saved.');
  });
});

saveButton.addEventListener('click', () => {
  apiKeyInput.value = '';
});