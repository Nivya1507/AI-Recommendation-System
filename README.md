# AI-Powered Product Recommendation System
> **AI Engineer Assessment Submission** — Built with Next.js (App Router), React, and OpenAI API.

![Live Demo Ready](https://img.shields.io/badge/Vercel-Ready-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4o--mini-412991?style=for-the-badge&logo=openai&logoColor=white)

---

## 📌 Project Overview

This project was built for the **AI Engineer Assessment** to demonstrate how an AI model can be integrated into a modern React application to power personalized product recommendations.

Users can enter free-form natural language preferences (e.g., *"I want a phone under $500 with a great camera"* or *"A coding laptop with long battery life"*), and the system leverages an external AI API to analyze requirements, filter strictly against the available product catalog, and return recommendations with concise reasons.

---

## 🎯 Assessment Criteria Fulfillment

| Requirement | Implementation Detail | Status |
|---|---|:---:|
| **React Frontend** | Built with Next.js 14 App Router, responsive product cards, category filters, and live state management. | ✅ Complete |
| **AI API Integration** | Secure server-side Route Handler at `app/api/recommend/route.js` using OpenAI API with structured JSON output. | ✅ Complete |
| **Catalog Verification** | Zero-hallucination guarantee: model outputs are strictly verified against `lib/products.js`. Non-catalog IDs are filtered out. | ✅ Complete |
| **Secure Key Handling** | API keys are kept strictly on the server via `.env.local` and Vercel environment variables (never exposed in client bundles). | ✅ Complete |
| **Clean Code & Architecture** | Modular components, error handling for empty/invalid inputs, fallback engine for demo/offline resilience. | ✅ Complete |
| **Vercel Ready** | Zero-config deployment on Vercel with environment variable configuration instructions. | ✅ Complete |

---

## 📂 Project Structure

```text
product-recommender/
├── app/
│   ├── api/
│   │   └── recommend/
│   │       └── route.js     # Secure server-side AI recommendation endpoint
│   ├── globals.css          # Modern dark-mode responsive styling
│   ├── layout.js            # Root layout, metadata & Google fonts
│   └── page.js              # Interactive React UI (Search, Catalog, AI Results)
├── lib/
│   └── products.js          # In-memory product catalog (Smartphones, Laptops, Audio, Wearables)
├── .env.example             # Safe environment variable template
├── .env.local               # Local secrets (ignored by Git)
├── .gitignore               # Strict ignore rules for node_modules and .env
├── package.json             # Project dependencies and scripts
└── README.md                # Documentation & submission template
```

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js** (v18.17+ or v20+)
- **npm** (v9+)
- (Optional) **OpenAI API Key** from [OpenAI Platform](https://platform.openai.com/api-keys)

### 2. Installation
```bash
cd product-recommender
npm install
```

### 3. Configure Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```
Edit `.env.local` and add your OpenAI API key:
```env
OPENAI_API_KEY=sk-proj-your_actual_key_here
OPENAI_MODEL=gpt-4o-mini
```

> **Note:** If you run the project without setting an OpenAI key, the application includes an intelligent fallback matching engine so you can still test sample queries and explore the UI immediately.

### 4. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Testing Test Cases

You can test the system with the following example queries:

1. **Budget Phone Query:**
   - Input: `"I want a phone under $500 with a great camera"`
   - Expected Output: **Google Pixel 8a** ($449) or **Samsung Galaxy A54** ($379) with AI reason citing the camera specs and budget match.

2. **Developer Laptop Query:**
   - Input: `"A laptop for programming and software development"`
   - Expected Output: **MacBook Air M2** ($899) and/or **ThinkPad E14 Gen 5** ($689) with reasons highlighting RAM, CPU, and keyboard ergonomics.

3. **Audio / Noise Cancellation:**
   - Input: `"Noise cancelling headphones for travel under $350"`
   - Expected Output: **Sony WH-1000XM5** ($348) and **Anker Soundcore Q30** ($79).

4. **Empty Input / Error State:**
   - Submitting an empty string displays an accessible validation alert asking the user for input.

5. **No Match / Impossible Constraints:**
   - Input: `"I want a brand new MacBook laptop under $100"`
   - Expected Output: Empty recommendation list with a clear message that no catalog items met the stringent budget constraint (no hallucinations).

---

## 🚢 Deploying to Vercel

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "feat: AI Product Recommendation System assessment"
   git branch -M main
   git remote add origin https://github.com/your-username/product-recommender.git
   git push -u origin main
   ```
   *(Ensure `.env.local` is NOT tracked in Git; `.gitignore` is already preconfigured).*

2. **Import into Vercel:**
   - Log in to [Vercel](https://vercel.com/new).
   - Click **"Add New..."** -> **Project**.
   - Select your `product-recommender` GitHub repository.
   - Vercel will automatically detect **Next.js**.

3. **Add Environment Variables in Vercel:**
   - Under the **Environment Variables** section:
     - `OPENAI_API_KEY`: `your_actual_openai_api_key`
     - `OPENAI_MODEL`: `gpt-4o-mini`
   - Click **Deploy**.

4. **Verify Live Deployment:**
   - Open your deployed URL (e.g. `https://product-recommender-yourname.vercel.app`).
   - Test submitting a recommendation query in an incognito window to ensure server-side variables are active.

---

