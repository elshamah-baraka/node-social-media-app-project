XRAL is a full-stack social media platform designed with scalability, modularity, and future service migration in mind.

The backend is structured using a service-layer architecture to isolate external dependencies (e.g., CMS) and enable smooth future transitions to internal data stores or microservices.

This project is currently being prepared for production deployment.

🧠 Architecture Philosophy

Clean separation of concerns

Service layer abstraction

Type-safe backend (TypeScript)

Scalable folder structure

CMS isolation behind adapters

Environment-based configuration

The goal is to ensure that external services like Sanity can be replaced without rewriting core business logic.

🏗️ Project Structure

  xral/
 ├── xral_backend/
 │    ├── src/
 │    │    ├── controllers/
 │    │    ├── services/
 │    │    ├── routes/
 │    │    ├── config/
 │    │    └── index.ts
 │
 ├── xral_frontend/
 │
 └── README.md

 ⚙️ Tech Stack

Backend:

Node.js

TypeScript

Express

Sanity CMS (abstracted via service layer)

Frontend:

React.js

Dev Environment:

WSL2 (Ubuntu)

Docker (WSL integration)

pnpm

Git + GitHub CLI

🛠️ Local Setup

 # Clone repository
git clone https://github.com/elshamah-baraka/node-social-media-app-project

# Backend
cd xral_backend
pnpm install
pnpm dev

Environment variables required:

PORT=
SANITY_PROJECT_ID=
SANITY_DATASET=

🔄 Future Improvements (Roadmap)

Authentication & authorization system

Internal database migration (PostgreSQL)

Caching layer (Redis)

CI/CD pipeline

Dockerized production setup

Cloud deployment (AWS / Render / Railway)

📈 Production Goals

XRAL is being structured for:

Service independence

Horizontal scalability

Clean API boundaries

Production deployment readiness

👨🏽‍💻 Author

Elshamah Baraka
Aspiring Software Engineer focused on scalable backend systems and production-ready architecture.
