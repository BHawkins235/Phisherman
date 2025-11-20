<div style="max-width:900px;margin:auto;padding:20px;font-family:system-ui,Arial,sans-serif;">

  <div style="display:flex;align-items:center;gap:16px;">
    <img src="Phisherman.png" alt="Phisherman Logo" style="width:72px;height:72px;border-radius:10px;object-fit:cover;" onerror="this.style.display='none'">
    <div>
      <h1 style="margin:0;">Phisherman</h1>
      <p style="color:#475569;margin:4px 0 0 0;">A Chrome Extension that scans Gmail emails for phishing threats</p>

      <!-- Modern language badges -->
      <div style="margin-top:10px;">
        <img alt="HTML" src="https://img.shields.io/badge/HTML-60%25-E34F26?style=for-the-badge&logo=html5&logoColor=white">
        <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-40%25-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
        <img alt="Repo Size" src="https://img.shields.io/github/repo-size/BHawkins235/Phisherman?style=for-the-badge">
        <img alt="License" src="https://img.shields.io/badge/License-Unlicense-lightgrey?style=for-the-badge">
      </div>

      <div style="margin-top:12px;">
        <a href="https://github.com/BHawkins235/Phisherman" style="padding:10px 14px;background:#0ea5a4;color:white;text-decoration:none;border-radius:8px;font-weight:600;">Open on GitHub</a>
      </div>
    </div>
  </div>

  <h2 style="margin-top:30px;">About</h2>
  <p>
    <strong>Phisherman</strong> is a Chrome extension that examines Gmail message content and determines
    whether an email may be a phishing attempt. It uses a language model API to detect suspicious wording
    and provides results through a simple popup interface.
  </p>

  <h2 style="margin-top:30px;">Repository Structure</h2>
  <pre style="background:#0f172a;color:#e2e8f0;padding:16px;border-radius:8px;overflow:auto;">
Phisherman/
├── manifest.json
├── background.js
├── content.js
├── popup.html
├── options.html
└── Phisherman.png
  </pre>

  <h2 style="margin-top:30px;">Installation</h2>
  <ol style="margin-left:20px;">
    <li>Clone the repo: <code>git clone https://github.com/BHawkins235/Phisherman.git</code></li>
    <li>Open <strong>chrome://extensions/</strong></li>
    <li>Enable <strong>Developer Mode</strong></li>
    <li>Click <strong>Load unpacked</strong> and select the project folder</li>
    <li>Open Gmail and use the popup to scan an email</li>
  </ol>

  <h2 style="margin-top:30px;">Usage</h2>
  <ul style="margin-left:20px;">
    <li>Open an email in Gmail</li>
    <li>Open the extension popup</li>
    <li>Click <strong>Check Current Email</strong></li>
    <li>Enter your API key in the Options page</li>
  </ul>

  <h2 style="margin-top:30px;">Security Notes</h2>
  <ul style="margin-left:20px;">
    <li>Do not commit API keys into the repository</li>
    <li>Only analyze messages with user consent</li>
    <li>Ensure secure API communication</li>
  </ul>

  <h2 style="margin-top:30px;">Contributing</h2>
  <p>Pull requests and issues are welcome! For large changes, open an issue first.</p>

  <h2 style="margin-top:30px;">License</h2>
  <p>Add the license of your project here (MIT, Unlicense, etc.).</p>

  <p style="margin-top:30px;color:#64748b;">Repository: 
    <a href="https://github.com/BHawkins235/Phisherman">https://github.com/BHawkins235/Phisherman</a>
  </p>

</div>
