# **Phisherman**
*A Chrome Extension that scans Gmail emails and flags possible phishing attempts.*

<!-- Badges -->
![HTML 59.7%](https://img.shields.io/badge/HTML-59.7%25-E44D26?logo=html5&logoColor=white)
![JavaScript 40.3%](https://img.shields.io/badge/JavaScript-40.3%25-F7DF1E?logo=javascript&logoColor=black)
![Repo Size](https://img.shields.io/github/repo-size/BHawkins235/Phisherman)
![License](https://img.shields.io/badge/License-Unlicense-lightgrey)

---

## **📌 About**
**Phisherman** is a Chrome extension that analyzes Gmail message contents and determines whether an email appears to be a phishing attempt.  
It uses a language-model API to detect suspicious text patterns and provides an easy-to-use popup UI.

---

## **📁 Repository Structure**


**Key Files**  
- `manifest.json` — Chrome extension manifest  
- `background.js` — background logic + API calls  
- `content.js` — Gmail content extraction  
- `popup.html` — popup UI  
- `options.html` — API key entry page  

---

## **🚀 Installation (Local Development)**

1. Clone the repo:  
   ```bash
   git clone https://github.com/BHawkins235/Phisherman.git
