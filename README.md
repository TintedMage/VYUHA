# VYUHA

Visual Yield for Urban Hygiene Analysis

## Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework
- **Shadcn UI** - Re-usable components built with Radix UI
- **ESLint** - Code linting and formatting

## Getting Started

### Prerequisites

- Node.js 20.x or later
- npm, yarn, or pnpm

### Installation

```bash
npm install
```

### Development

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

### Build

Build the application for production:

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Lint

```bash
npm run lint
```

## Project Structure

```
├── src/
│   ├── app/              # App Router pages and layouts
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Home page
│   │   └── globals.css   # Global styles with Tailwind
│   ├── components/       # React components
│   │   └── ui/          # Shadcn UI components
│   └── lib/             # Utility functions
│       └── utils.ts     # Helper utilities (cn, etc.)
├── public/              # Static assets
├── components.json      # Shadcn UI configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies
```

## Adding Components

This project uses Shadcn UI. To add new components:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
# etc.
```

Note: Due to network restrictions in some environments, you may need to manually add components by copying them from the [Shadcn UI documentation](https://ui.shadcn.com).

## Best Practices

- Use TypeScript for type safety
- Follow the App Router conventions
- Use Server Components by default
- Add 'use client' only when necessary
- Use Tailwind CSS for styling
- Leverage Shadcn UI for consistent components
- Keep components small and focused

## Learn More

To learn more about the technologies used, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Shadcn UI Documentation](https://ui.shadcn.com)

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

