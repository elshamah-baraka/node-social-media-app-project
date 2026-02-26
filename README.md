🚀 XRAL — Scalable Social Media Platform

XRAL is a full-stack social media application built with scalability, modularity, and production-readiness in mind.

The system is structured as a monorepo with isolated frontend, backend, and CMS layers to allow independent evolution and clean architectural boundaries.

🏗️ Project Structure

socialmediaapp/
│
├── xral_backend/     # Node.js + TypeScript + Prisma + PostgreSQL
├── xral_frontend/    # Vite + TypeScript frontend
└── xral_backend/xral # Sanity Studio (CMS)

🧠 Architecture Overview

XRAL follows a layered architecture:

Frontend (Vite + TS)
        ↓
Backend API (Node + TS)
        ↓
Service Layer
        ↓
Prisma ORM
        ↓
PostgreSQL

Sanity CMS is isolated behind a service layer, allowing gradual migration toward a fully relational architecture without tight coupling.

🧰 Tech Stack
Frontend

Vite

TypeScript

Modern modular component structure

Backend

Node.js

TypeScript

Prisma ORM

PostgreSQL

ESLint

Environment-based configuration

CMS

Sanity Studio

Schema-based content modeling

Isolated integration layer

Development Environment

Windows 11

WSL2 (Ubuntu)

Node via nvm

Docker-ready setup

Git + GitHub SSH

🗄️ Backend Setup (PostgreSQL + Prisma)
1️⃣ Start PostgreSQL
sudo service postgresql start

2️⃣ Create Database and User

Inside psql:

CREATE DATABASE xral_db;
CREATE USER xral_user WITH PASSWORD 'yourpassword';
GRANT ALL PRIVILEGES ON DATABASE xral_db TO xral_user;
ALTER USER xral_user CREATEDB;

\c xral_db
GRANT ALL ON SCHEMA public TO xral_user;
ALTER SCHEMA public OWNER TO xral_user;

3️⃣ Configure Environment Variables

Create .env inside xral_backend:

DATABASE_URL="postgresql://xral_user:yourpassword@localhost:5432/xral_db"

⚠️ .env is excluded from version control.

4️⃣ Run Prisma Migration
cd xral_backend
npx prisma migrate dev --name init

This:

Applies schema

Creates migration history

Generates Prisma client

🧪 Running the Backend
cd xral_backend
npm install
npm run dev

🎨 Running the Frontend
cd xral_frontend
npm install
npm run dev

🧩 Running Sanity Studio
cd xral_backend/xral
npm install
npm run dev

Sanity runs independently and communicates through a controlled backend integration layer.

🧠 Design Philosophy

XRAL is built with:

Separation of concerns

Incremental migration strategy

Relational database-first mindset

Production deployment readiness

Clean Git history and structured commits

The goal is long-term scalability, not just rapid feature shipping.

🔐 Environment & Security Notes

Dedicated PostgreSQL user (not default postgres)

Schema-level permission configuration

Local development via WSL2

Environment variables excluded from Git

Migration-based DB lifecycle management

🛣️ Roadmap (Backend)

 PostgreSQL integration

 Prisma ORM setup

 Migration system operational

 Core models (User, Post, Follow, Like)

 Authentication system

 Production deployment configuration

 CI-based migration workflow

🎯 Long-Term Vision

XRAL is being engineered as a modular, scalable social platform where:

CMS can be phased out if needed

Backend can scale independently

Database architecture supports growth

Frontend can evolve without backend coupling


👨🏽‍💻 Author

Elshamah Baraka
Software Engineer | Backend-focused Full Stack Developer