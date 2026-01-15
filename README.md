# Social Media App

A full-stack social media application built with **React** (frontend) and **Sanity Studio** (backend/content management).  
This repo demonstrates modern **full-stack development**, environment management, and clean repo practices.

---

## 🚀 Project Structure

social-app/
├─ backend/ # Sanity Studio
│ ├─ package.json
│ ├─ .env.example
│ └─ src/
├─ frontend/ # React + Vite Frontend
│ ├─ package.json
│ ├─ .env.example
│ └─ src/
├─ .gitignore
└─ README.md


---

## 🔧 Requirements

- Node.js 20.x (use [NVM](https://github.com/coreybutler/nvm-windows))  
- npm 10+ (comes with Node)  
- Git  

---

## ⚡ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/<username>/social-app.git
cd social-app

2. Backend Setup (Sanity Studio)
cd backend
nvm use 20           # Ensure correct Node version
npm install          # Install dependencies
cp .env.example .env # Copy env template
# Fill in your SANITY_PROJECT_ID, SANITY_DATASET, SANITY_API_TOKEN
npm run dev          # Start Sanity Studio locally

3. Frontend Setup (React + Vite)
cd ../frontend
nvm use 20           # Ensure correct Node version
npm install          # Install dependencies
cp .env.example .env # Copy env template
# Fill in your VITE_SANITY_PROJECT_ID, VITE_SANITY_DATASET, VITE_SANITY_API_TOKEN
npm run dev          # Start frontend locally

🔑 Environment Variables
Backend (backend/.env)
SANITY_PROJECT_ID=
SANITY_DATASET=
SANITY_API_TOKEN=

Frontend (frontend/.env)
VITE_SANITY_PROJECT_ID=
VITE_SANITY_DATASET=
VITE_SANITY_API_TOKEN=
Never commit .env files. Only .env.example should be tracked in Git.

📌 Node Version Management

Node version is locked in package.json engines:
"engines": {
  "node": ">=20 <23"
}
Ensure you switch Node version with NVM:
nvm use 20

🛠 Scripts
Backend
| Script           | Description                 |
| ---------------- | --------------------------- |
| `npm run dev`    | Start Sanity Studio locally |
| `npm run build`  | Build for production        |
| `npm run deploy` | Deploy Sanity Studio        |

Frontend
| Script            | Description                   |
| ----------------- | ----------------------------- |
| `npm run dev`     | Start React frontend locally  |
| `npm run build`   | Build frontend for production |
| `npm run preview` | Preview production build      |
| `npm run lint`    | Lint code with ESLint         |

Recommended Workflow

1. Always switch Node versions per folder:
cd backend
nvm use 20
cd ../frontend
nvm use 20
2. Install dependencies after cloning:
npm install
3. Copy .env.example to .env and fill values

4. Start apps:
npm run dev


📝Contributing

Fork the repository

Create a feature branch (git checkout -b feature-name)

Make changes and commit cleanly (git commit -m "Add feature X")

Push and create a pull request

🎯Professional Notes

.gitignore ensures node_modules and .env are never committed

.env.example documents required environment variables

Separate backend/ and frontend/ folders make the repo clean and easy to navigate

Engines in package.json ensure Node version consistency
