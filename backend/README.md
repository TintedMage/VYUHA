# Backend

Node.js/Express backend service for VYUHA.

## Tech Stack

- **Express** - Web framework
- **TypeScript** - Type-safe development
- **tsx** - TypeScript execution for development

## Getting Started

### Development

Run the development server with hot reload:

```bash
npm run dev
```

The server will start on [http://localhost:3001](http://localhost:3001)

### Build

Build the application for production:

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### API Endpoints

- `GET /api/health` - Health check endpoint
- `GET /api` - Welcome endpoint

## Project Structure

```
├── src/
│   └── index.ts       # Main server file
├── dist/              # Compiled output (after build)
├── package.json       # Project dependencies
└── tsconfig.json      # TypeScript configuration
```
