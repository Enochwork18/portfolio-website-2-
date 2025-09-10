# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Development Commands

### Build & Development
- `npm run dev` - Start the development server on localhost:3000
- `npm run build` - Build the production application
- `npm run start` - Start the production server
- `npm run lint` - Run Next.js linting

### Testing & Quality
- No test suite is currently configured
- Linting is configured via Next.js but disabled during builds (`ignoreDuringBuilds: true`)
- TypeScript errors are ignored during builds (`ignoreBuildErrors: true`)

## Architecture Overview

### Technology Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript with strict mode enabled
- **Styling**: Tailwind CSS with custom black/yellow theme
- **Components**: Radix UI primitives with shadcn/ui component system
- **Animations**: Framer Motion for page animations and transitions
- **Email**: EmailJS integration for contact form functionality
- **Analytics**: Vercel Analytics and Speed Insights integrated

### Project Structure

#### Core Application (`/app`)
- Uses Next.js App Router architecture
- Root layout with theme provider, analytics, and global navigation
- Single page application with hash-based section navigation
- Global metadata configured for SEO and social sharing

#### Component Architecture (`/components`)
- **Layout Components**: Navbar (fixed header with mobile responsive menu), Footer
- **Page Sections**: Hero, Skills, About, Services, Work (portfolio showcase)
- **Functional Components**: ContactForm (with EmailJS), EmailJsLoader, ThemeProvider
- **UI Components** (`/components/ui`): Complete shadcn/ui component library including buttons, forms, cards, dialogs, and more

#### Styling System
- **Theme**: Black background with vibrant yellow (#FFFF00) primary color
- **CSS Variables**: HSL-based design tokens in `globals.css`
- **Components**: Tailwind utility classes with consistent color scheme
- **Responsive**: Mobile-first design with desktop breakpoints

#### Configuration Files
- `components.json`: shadcn/ui configuration with path aliases
- `tailwind.config.ts`: Extended theme with custom colors and animations
- `tsconfig.json`: Path aliases using `@/*` for root-relative imports

### Key Features
- **Contact Form**: EmailJS integration with service ID `service_kfgm9n8` and template `template_4onk8gf`
- **Navigation**: Hash-based routing to page sections (home, about-me, my-skills, services, my-work)
- **Animations**: Staggered animations on page load using Framer Motion
- **Theme**: Dark theme with yellow accents, consistent throughout all components
- **Responsive Design**: Mobile-responsive navigation and layouts

## Development Guidelines

### Component Development
- All interactive components use `"use client"` directive
- UI components follow shadcn/ui patterns and conventions
- Consistent use of Tailwind design tokens (colors, spacing, typography)
- Animation effects primarily handled through Framer Motion

### Styling Conventions
- Use semantic color variables (`--primary`, `--secondary`, `--muted`, etc.)
- Maintain consistent spacing using Tailwind utilities
- Follow mobile-first responsive design patterns
- Custom scrollbar styling matches the yellow/black theme

### File Organization
- Components are flat in `/components` directory
- UI primitives organized in `/components/ui`
- Utilities centralized in `/lib/utils.ts`
- Path aliases configured for clean imports (`@/components`, `@/lib`, etc.)

### Build Configuration
- Images are unoptimized for static export compatibility
- ESLint and TypeScript errors are ignored during builds
- React Strict Mode enabled for development
