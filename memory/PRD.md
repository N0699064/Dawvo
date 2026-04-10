# Davwo Energy Platform - PRD

## Original Problem Statement
Build a pixel-perfect, responsive clone of the Davwo Energy platform based on user-provided screenshots and logo. The application must feature a sleek, modern, bright white "Tesla-like" aesthetic with specific bold borders, dynamic scroll-triggered fade-in animations, and complex interactive UI components.

## Tech Stack
- React (frontend only)
- Tailwind CSS
- Shadcn/UI components
- No backend currently

## Design Guidelines
- **Tesla-like aesthetic**: minimalist, bright white backgrounds, dark text (gray-800/700), light/extralight font weights
- **Header**: 5px sharp black border, extra-large logo on desktop (h-80), compact on mobile (h-16)
- **Animations**: IntersectionObserver-based fade-in/slide-up via shared `useScrollReveal` hook. Stay visible once revealed.
- **No dark colorful gradients** - bright white/minimalist tech theme only
- **Mobile-first responsive**: All pages tested at 375px and 1920px viewports

## Pages & Status

### Home (`/`) - DONE
- Hero section with tagline, description, two CTA buttons (stack vertically on mobile)

### Platform Architecture (`/platform-architecture`) - DONE
- Hero with intro text
- 4 numbered layer cards (01-04) — horizontal on desktop, stacked on mobile
- Platform Integration section (2x2 grid, collapses to 1-col on mobile)
- Technology Vision section with expanding bars
- Development Outlook section (dark bg, 2027 target)

### Programme (`/programme`) - DONE
- Hero section
- 3 horizontal scrolling pill carousels
- 2x2 interactive card grid for Core Architecture Layers (stacks on mobile)
- Programme Focus section (2x2 grid on mobile, 4-col on desktop)

### About (`/about`) - DONE
- Hero: "Building Climate AI Infrastructure for the Future of Clean Energy"
- Our Mission section
- Our Approach: 4 interactive cards
- The Davwo Story
- Founding Team: 2 members with photos (side-by-side desktop, stacked mobile)
- Looking Ahead section (dark background)

### Contact (`/contact`) - DONE
- Info cards (Email, Phone, Location) — 3-col desktop, stacked mobile
- Contact form with proper mobile padding

### Footer - DONE
- 3 social media icons only (LinkedIn, X, Instagram) in black & white, centered
- Links set to `#` — awaiting user's social media URLs

## Shared Hooks
- `useScrollReveal` (`/app/frontend/src/hooks/useScrollReveal.js`) — IntersectionObserver-based scroll animation, used by all pages

## Completed Work
- [2026-04-09] Frontend scaffolding, routing, Navbar, scroll animations
- [2026-04-09] Platform Architecture redesigned, Programme updated to interactive cards
- [2026-04-10] About page fully rewritten with user content and founder photos
- [2026-04-10] Footer simplified to social icons only (black & white)
- [2026-04-10] Full mobile responsiveness across all 5 pages + navbar + footer
- [2026-04-10] Refactored scroll animations from scroll-position-based to IntersectionObserver via shared hook

## Testing
- iteration_1: Desktop-only, 100% pass
- iteration_2: Mobile + Desktop, 100% pass (13/13 features)

## Upcoming / Backlog
- P1: Add social media profile URLs to footer (awaiting user input)
- P1: Backend & API integration (when user is ready)
- P2: Additional mobile polish if needed
