# VYUHA

Visual Yield for Urban Hygiene Analysis

## Monorepo Structure

This is a monorepo containing both frontend and backend workspaces:

- **frontend/** - Next.js 16 application with TypeScript, Tailwind CSS, and Shadcn UI
- **backend/** - Node.js/Express API server with TypeScript

## Tech Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework
- **Shadcn UI** - Re-usable components built with Radix UI
- **ESLint** - Code linting and formatting

### Backend
- **Express** - Web framework
- **TypeScript** - Type-safe development
- **tsx** - TypeScript execution for development

## Getting Started

### Prerequisites

- Node.js 20.x or later
- npm, yarn, or pnpm

### Installation

Install dependencies for all workspaces:

```bash
npm install
```

### Development

Run both frontend and backend in development mode:

```bash
npm run dev
```

Or run them individually:

```bash
# Frontend only (http://localhost:3000)
npm run dev:frontend

# Backend only (http://localhost:3001)
npm run dev:backend
```

### Build

Build all workspaces:

```bash
npm run build
```

Or build individually:

```bash
npm run build:frontend
npm run build:backend
```

### Start Production Server

Start all production servers:

```bash
npm start
```

Or start individually:

```bash
npm run start:frontend
npm run start:backend
```

### Lint

Lint all workspaces:

```bash
npm run lint
```

Or lint individually:

```bash
npm run lint:frontend
npm run lint:backend
```

### Clean

Remove all node_modules and build artifacts:

```bash
npm run clean
```

## Project Structure

```
├── frontend/             # Next.js frontend application
│   ├── src/
│   │   ├── app/         # App Router pages and layouts
│   │   ├── components/  # React components
│   │   └── lib/         # Utility functions
│   ├── public/          # Static assets
│   └── package.json     # Frontend dependencies
├── backend/             # Express backend API
│   ├── src/
│   │   └── index.ts     # Main server file
│   └── package.json     # Backend dependencies
├── package.json         # Root workspace configuration
└── README.md           # This file
```

## Workspaces

This project uses npm workspaces to manage the monorepo. Each workspace (frontend and backend) has its own `package.json` and can be developed independently.

### Working with Workspaces

```bash
# Install a package in frontend
npm install <package> --workspace=frontend

# Install a package in backend
npm install <package> --workspace=backend

# Run a script in a specific workspace
npm run <script> --workspace=<workspace-name>
```

## Learn More

### Frontend
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Shadcn UI Documentation](https://ui.shadcn.com)

### Backend
- [Express Documentation](https://expressjs.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## Deploy

### Frontend
The easiest way to deploy the Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

### Backend
The backend can be deployed to any Node.js hosting platform like:
- Heroku
- Railway
- Render
- AWS
- Google Cloud Platform
- Azure

Check out the respective platform documentation for deployment instructions.


