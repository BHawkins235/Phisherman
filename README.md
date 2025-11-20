<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Phisherman — README</title>
  <style>
    body {
      font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue",
                   Arial, "Noto Sans", "Liberation Sans", sans-serif;
      line-height: 1.6;
      color: #0f172a;
      background: #f8fafc;
      margin: 0;
      padding: 24px;
    }
    .container {
      max-width: 980px;
      margin: 24px auto;
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 6px 24px rgba(2,6,23,0.06);
      padding: 28px;
    }
    header { display:flex; gap:16px; align-items:center; }
    header img.logo { width:72px; height:72px; object-fit:cover; border-radius:10px; }
    h1 { margin:0; font-size:1.75rem; }
    .badges { margin-top:8px; display:flex; gap:8px; flex-wrap:wrap; }
    .section { margin-top:22px; }
    pre.code { background:#0b1220; color:#e6eef8; padding:16px; border-radius:8px; overflow:auto; }
    .muted { color:#64748b; font-size:0.95rem; }
    a.button {
      display:inline-block; padding:10px 14px; background:#0ea5a4; color:white;
      border-radius:8px; text-decoration:none; font-weight:600;
    }
    ul { margin-left:1.25rem; }
    footer { margin-top:28px; color:#94a3b8; font-size:0.9rem; }
    @media (max-width:520px){
      header { flex-direction:column; align-items:flex-start; gap:10px; }
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <!-- If you have a project image, replace src with ./Phisherman.png or appropriate path -->
      <img class="logo" src="Phisherman.png" alt="Phisherman logo (optional)" onerror="this.style.display='none'">
      <div>
        <h1>Phisherman</h1>
        <div class="muted">A Chrome Extension that scans emails and flags if they are phishing.</div>
        <div class="badges" style="margin-top:10px">
          <!-- Language badges (percentages reflect repo language breakdown) -->
          <img alt="HTML 59.7%" src="https://img.shields.io/badge/HTML-59.7%25-E44D26?logo=html5&logoColor=white" />
          <img alt="JavaScript 40.3%" src="https://img.shields.io/badge/JavaScript-40.3%25-F7DF1E?logo=javascript&logoColor=black" />
          <!-- Status / stars (edit these if you want dynamic badges) -->
          <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/BHawkins235/Phisherman" />
          <img alt="License" src="https://img.shields.io/badge/License-Unlicense-lightgrey" />
        </div>
        <div style="margin-top:12px">
          <a class="button" href="https://github.com/BHawkins235/Phisherman" target="_blank" rel="noopener">Open on GitHub</a>
        </div>
      </div>
    </header>

    <section class="section">
      <h2>About</h2>
      <p>
        <strong>Phisherman</strong> is a Chrome extension that uses a language model API to read Gmail messages and identify potential phishing attempts. The repository contains a Chrome extension manifest, background/content scripts, popup and options pages, and basic assets. (Repository description & language breakdown checked from the project's GitHub page.) 
      </p>
      <p class="muted">Source: GitHub repository view. :contentReference[oaicite:1]{index=1}</p>
    </section>

    <section class="section">
      <h2>Repository language breakdown</h2>
      <p>The repository languages reported on GitHub are:</p>
      <ul>
        <li><strong>HTML</strong> — 59.7% (primary markup & UI). :contentReference[oaicite:2]{index=2}</li>
        <li><strong>JavaScript</strong> — 40.3% (extension logic, background/content scripts). :contentReference[oaicite:3]{index=3}</li>
      </ul>
    </section>

    <section class="section">
      <h2>Features</h2>
      <ul>
        <li>Scans Gmail messages and checks them for phishing indicators.</li>
        <li>Popup UI to check the current email.</li>
        <li>Options page for configuring API keys and behavior.</li>
        <li>Lightweight — built with HTML/CSS/JS for Chrome extension platform.</li>
      </ul>
    </section>

    <section class="section">
      <h2>Files of interest</h2>
      <ul>
        <li><code>manifest.json</code> — Chrome extension manifest.</li>
        <li><code>background.js</code> — background script / API calls.</li>
        <li><code>content.js</code> — page/content script to interact with Gmail UI.</li>
        <li><code>popup.html</code> / <code>options.html</code> — extension UI pages.</li>
        <li><code>Phisherman.png</code> — project image/logo (if present).</li>
      </ul>
      <p class="muted">File list pulled from the repository index. :contentReference[oaicite:4]{index=4}</p>
    </section>

    <section class="section">
      <h2>Installation (local development)</h2>
      <ol>
        <li>Clone the repo: <code>git clone https://github.com/BHawkins235/Phisherman.git</code></li>
        <li>Open Chrome and go to <strong>chrome://extensions</strong>.</li>
        <li>Enable <em>Developer mode</em> (top-right).</li>
        <li>Click <em>Load unpacked</em> and select the project folder.</li>
        <li>Open the extension popup or navigate to Gmail to test the content script.</li>
      </ol>
    </section>

    <section class="section">
      <h2>Usage</h2>
      <p>Use the popup to check the currently open email in Gmail. Configure the extension's API key on the Options page to enable the language-model check. (See code in <code>background.js</code> and <code>options.js</code> for integration details.)</p>
    </section>

    <section class="section">
      <h2>Security & Privacy</h2>
      <p>
        If this project uses an external language model or API, do not commit secret keys to the repository. Store API keys in extension options or environment variables and treat message contents sensitively — only analyze messages with user consent.
      </p>
    </section>

    <section class="section">
      <h2>Contributing</h2>
      <p>Contributions welcome! Please open an issue or a pull request with your proposed changes. For larger changes, open an issue first to discuss the design.</p>
    </section>

    <section class="section">
      <h2>License</h2>
      <p>Specify your license here (e.g., MIT, Unlicense). The repository currently shows no published releases.</p>
    </section>

    <footer>
      <p>Repository source: <a href="https://github.com/BHawkins235/Phisherman" target="_blank" rel="noopener">BHawkins235/Phisherman</a>. Data checked from GitHub. :contentReference[oaicite:5]{index=5}</p>
    </footer>
  </div>
</body>
</html>
