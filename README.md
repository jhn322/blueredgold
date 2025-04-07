# BlueRedGold - Company Website

A modern, responsive company website built with Next.js 15, TypeScript, Tailwind CSS and Shadcn. The website features a blog section powered by Sanity CMS and follows best practices for performance, accessibility, and maintainability.

## 🚀 Features

- Modern, responsive design with mobile-first approach
- Server-side rendering with Next.js 15
- Type-safe development with TypeScript
- Modern-looking UI components with Radix UI and Tailwind CSS
- Blog section powered by Sanity CMS
- Smooth animations with Framer Motion
- SEO optimized
- Accessibility focused

## 📋 Prerequisites

- Node.js 18.x or later
- npm or yarn
- Sanity CLI (for blog management)

## 🛠️ Installation

1. Clone the repository:

```bash
git clone https://github.com/SemuraiAB/blueredgold.git
cd blueredgold
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Set up environment variables:

```bash
cp .env.example .env
```

Fill in the required environment variables in `.env`:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_sanity_api_token
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
blueredgold/
├── .next/
├── node_modules/
├── prisma/
├── public/
│   ├── about/
│   ├── carousel/
│   ├── flower/
│   ├── landing-page/
│   ├── other/
│   ├── saffron/
│   ├── seed/
│   ├── favicon.ico
│   ├── logo-text.svg
│   ├── logo.svg
│   └── not-found.webp
├── src/
│   ├── app/
│   │   ├── about-us/
│   │   │   ├── about/
│   │   │   ├── career/
│   │   │   ├── contact-us/
│   │   │   ├── investor-relations/
│   │   │   ├── press/
│   │   │   └── sustainability/
|   |   |       ├── esg/
│   │   ├── blog/
│   │   │   ├── news/
│   │   │   ├── recipes/
│   │   │   ├── science/
│   │   │   └── updates/
│   │   ├── food-beverages/
│   │   ├── integritypolicy/
│   │   ├── medical-cosmetics/
│   │   │── technology/
│   │   │   ├── data/
│   │   │   ├── growing/
│   │   │   └── harvesting/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   ├── page.tsx
|   |
│   ├── components/
│   │   ├── animations/
│   │   ├── landing-page/
│   │   ├── ui/
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx
│   ├── fonts/
│   ├── hooks/
│   └── lib/
├── .env
├── .env.example
├── .gitignore
├── .prettierrc
├── components.json
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

## 🏗️ Architecture

```mermaid
graph TD
    A[Client Browser] --> B[Next.js App]
    B --> C[App Router]
    B --> D[API Routes]

    C --> E[Static Pages]
    C --> F[Dynamic Pages]

    D --> G[Sanity CMS]

    F --> I[Server Components]
    F --> J[Client Components]

    J --> K[UI Components]
    K --> K1[Shadcn UI]
    K --> K2[Radix UI]
    K --> K3[Custom Components]

    J --> L[Custom Hooks]

    M[Styling] --> M1[Tailwind CSS]
    M --> M2[Framer Motion]

    N[Static Assets] --> N1[Images]
    N --> N2[Fonts]
    N --> N3[SVGs]
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI, Shadcn UI
- **CMS**: Sanity
- **Animations**: Framer Motion
- **Development Tools**: ESLint, Prettier

## 📝 Blog Management

The blog section is managed through Sanity CMS. To manage blog content:

1. Install Sanity CLI:

```bash
npm install -g @sanity/cli
```

2. Start the Sanity Studio:

```bash
npm run sanity
```

3. Access the Sanity Studio at `http://localhost:3333`

## 🚀 Deployment

The application can be deployed to Vercel with the following steps:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables in Vercel
4. Deploy!

## 📄 License

This project is private and confidential. All rights reserved.
