chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.get(["geminiApiKey"], (result) => {
    if (!result.geminiApiKey) {
      chrome.runtime.openOptionsPage();
    }
  });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "getApiKey") {
    chrome.storage.sync.get(['geminiApiKey'], (result) => {
      console.log("Background retrieved API key:", result.geminiApiKey);
      sendResponse({ apiKey: result.geminiApiKey || '' });
    });
    return true; 
  }
});