XRAL

XRAL is a full-stack social media platform built with a strong focus on clean architecture, modularity, and future scalability.

The project is structured to support production deployment and future migration from external services to internal infrastructure without major refactors.

🚀 Project Overview

XRAL is currently under active development and is being prepared for production readiness.

Key goals:

Clean separation of concerns

Service-layer abstraction in backend

External CMS isolation (Sanity)

Type-safe backend (TypeScript)

Scalable monorepo structure

🏗️ Monorepo Structure

xral/
├── xral_backend/
│   ├── src/
│   ├── xral/              # Sanity Studio (CMS)
│   ├── package.json
│   └── tsconfig.json
│
├── xral_frontend/
│   ├── src/
│   ├── vite.config.ts
│   ├── package.json
│   └── tsconfig files
│
└── package.json (root)

🧠 Architecture Philosophy
1️⃣ Backend Design

Built with Node.js + TypeScript

Structured service layer

External CMS (Sanity) isolated behind abstraction

Designed for future database migration (e.g., PostgreSQL)

The goal is to ensure that replacing Sanity with an internal database will require minimal business logic changes.

2️⃣ Sanity CMS (Studio v3+)

Used for rapid schema iteration

Maintains structured content models

Isolated within xral_backend/xral

Intended to be replaceable in future scaling phase

3️⃣ Frontend

Built using Vite + React

Modular component structure

Designed to consume backend APIs (not tightly coupled to CMS)

⚙️ Tech Stack
Backend

Node.js

TypeScript

Express (if applicable — confirm)

Service-layer architecture

CMS

Sanity Studio v3+

Frontend

React

Vite

TypeScript

Dev Environment

Windows 11 + WSL2 (Ubuntu)

Docker (WSL integration)

Git + GitHub CLI

🛠️ Local Development
Backend

cd xral_backend
npm install
npm run dev

Sanity Studio

cd xral_backend/xral
npm install
npm run dev

Frontend

cd xral_frontend
npm install
npm run dev

🔄 Roadmap (Production Preparation)

 Centralized error handling

 API request validation layer

 Authentication system

 Database migration from CMS

 Dockerized deployment

 CI/CD pipeline

 Cloud deployment

📈 Long-Term Vision

XRAL is being developed as a learning-driven but production-oriented system, emphasizing:

Clean architecture

Replaceable infrastructure

Scalability mindset

Engineering best practices

👨🏽‍💻 Author

Elshamah Baraka
Software Engineering Intern Applicant | Backend-focused Full Stack Developer