# Anshuman Palai — Portfolio

A minimal, high-craft personal portfolio inspired by modern dark editorial design. Built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser. Live API proxy for LeetCode, CodeChef, and GeeksforGeeks stats is integrated into the Vite dev server.

### 3. Production Build
```bash
npm run build
```
Creates an optimized, production-ready bundle in `dist/`.

---

## 🌐 Deploy to Vercel (Recommended)

This project is pre-configured for **Vercel** with support for both the React SPA and the `/api/coding-profiles` serverless function.

### Option A: Using Vercel Dashboard (Easiest)
1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) → **Add New** → **Project**.
3. Import your GitHub repository.
4. Framework preset: **Vite** (auto-detected).
5. Click **Deploy**.

### Option B: Using Vercel CLI
```bash
npm install -g vercel
vercel
```

---

## 🛠️ Tech Stack
- **Framework**: React 18 + Vite
- **Language**: TypeScript + JSX
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Smooth Scroll**: Lenis
- **Routing**: React Router v6
- **Live Stats API**: Vercel Serverless Function (`api/coding-profiles.js`)

