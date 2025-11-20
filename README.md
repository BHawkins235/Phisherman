<div style="max-width:900px;margin:auto;padding:20px;font-family:system-ui,Arial,sans-serif;">

  <div style="display:flex;align-items:center;gap:16px;">
   
   <div>
      <h1 style="margin:0;">Phisherman</h1>
      <p style="color:#475569;margin:4px 0 0 0;">A Chrome Extension that scans Gmail emails for phishing threats</p>

      
   <div style="margin-top:10px;">
       <div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="javascript logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="40" alt="html5 logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="40" alt="css logo"  />
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
