# EdoLine - Next.js Full-Stack Project

This project is a complete rewrite of the original EdoLine landing page, built with Next.js and following the principles of Feature-Sliced Design (FSD), Clean Architecture, and Domain-Driven Design (DDD).

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (with App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Linting**: [ESLint](https://eslint.org/)

## Architecture

The project adheres to **Feature-Sliced Design (FSD)**, a scalable architecture for frontend applications.

- **`src/app`**: The core application layer (layouts, pages, API routes).
- **`src/widgets`**: Compositional blocks of the UI (e.g., Header, Footer, Hero).
- **`src/features`**: Business-value functionalities (e.g., Contact Form, Pricing Plans).
- **`src/entities`**: Business entities and their models (e.g., Document, User).
- **`src/shared`**: Reusable, framework-agnostic code (e.g., UI Kit, helpers, config).

## Getting Started

### Prerequisites

- Node.js (v18.17 or later)
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd edoline-next
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Environment Variables

Create a `.env.local` file in the root of the project and add the necessary environment variables for the contact form to work:

```env
VITE_TELEGRAM_BOT_TOKEN=YOUR_TELEGRAM_BOT_TOKEN
VITE_TELEGRAM_CHAT_ID=YOUR_TELEGRAM_CHAT_ID
```
*Note: Next.js requires environment variables exposed to the browser to be prefixed with `NEXT_PUBLIC_`. For server-side variables (like in API routes), no prefix is needed.*

Update the `.env.local` file:
```env
TELEGRAM_BOT_TOKEN=YOUR_TELEGRAM_BOT_TOKEN
TELEGRAM_CHAT_ID=YOUR_TELEGRAM_CHAT_ID
```

### Running the Development Server

To start the development server, run:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Lints the codebase.
