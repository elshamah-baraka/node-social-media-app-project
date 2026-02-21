XRAL — Social Media Platform (In Progress)

XRAL is a full-stack social media application built with a modular architecture to support scalability, CMS flexibility, and production deployment.

The project is currently under active development with a target production-ready milestone within 1–2 months.

🚀 Tech Stack
Frontend

React

TypeScript

Vite

Backend

Node.js (v22+)

Express

TypeScript

CMS Layer

Sanity Studio v5

Isolated behind a service layer for future migration flexibility

🧠 Architectural Philosophy

XRAL is structured as a monorepo with clear separation of concerns:

socialmediaapp/
│
├── xral_frontend/
├── xral_backend/
│   └── xral/ (Sanity Studio)

Key architectural decisions:

Sanity CMS is abstracted behind a backend service layer.

Frontend does not directly depend on CMS APIs.

Backend is structured to allow migration to a different CMS or database without affecting the frontend.

Node version locked to 22.x to maintain engine consistency.

This reduces vendor lock-in risk and improves long-term maintainability.

🛠️ Local Development Setup
1. Ensure Node 22 is installed

nvm use 22

2. Backend

cd xral_backend
npm install
npm run dev

3. Sanity Studio

cd xral_backend/xral
npm install
npm run dev

4. Frontend

cd xral_frontend
npm install
npm run dev


🔐 Environment Variables

Create .env files in:

xral_backend

xral_frontend 

Do not commit .env files.

📌 Current Status

Dev environment migrated to WSL

Stack stabilized

Node engine standardized (22.x)

Sanity v5 operational

Monorepo structure validated

🎯 Next Milestones

API contract refinement

Auth system integration

Deployment pipeline setup

Production hosting



👨🏽‍💻 Author

Elshamah Baraka
Software Engineer | Backend-focused Full Stack Developer