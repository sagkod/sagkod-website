# Sagkod Marketing Website

A lightweight, responsive static website for Sagkod Marketing, optimized for speed, mobile-first browsing, and SEO.

---

## 📂 Structure
- `index.html` – Main landing page
- `promotions.html` – List of active casino promotions
- `clients.html` – Onboarding form for new clients
- `contact.html` – Contact details
- `styles.css` – Global styles (dark theme with gold/silver accents)
- `script.js` – Handles client form submission
- `logo.png`, `leaflet-demo.png`, `favicon.ico` – Assets

---

## 🚀 Deployment to GitHub Pages
1. Fork or clone this repository.
2. Commit your changes and push to `main`.
3. In GitHub, go to **Settings → Pages**.
4. Under "Branch", select `main` and `/ (root)`.
5. Save – your site will be live at `https://<username>.github.io/sagkod-website/`.

---

## ⚙️ Deployment to Netlify
1. Log in to [Netlify](https://netlify.com).
2. Click **New site from Git**.
3. Connect your GitHub repository.
4. Deploy. Your site will be live with a free Netlify subdomain.

---

## 📝 Customizing
- **Form endpoint:** In `script.js`, replace  
  ```js
  fetch("https://your-endpoint.com/api", { ... })
