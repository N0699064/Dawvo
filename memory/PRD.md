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
- **Header**: 5px sharp black border, extra-large logo, single-line navigation on desktop
- **Animations**: Scroll-triggered fade-in/slide-up via IntersectionObserver. Must NOT fade out on scroll-up
- **No dark colorful gradients** - bright white/minimalist tech theme only

## Pages & Status

### Home (`/`) - DONE
- Hero section with tagline, description, two CTA buttons

### Platform Architecture (`/platform-architecture`) - DONE
- Hero with intro text
- 4 numbered layer cards (01-04) with dark sidebar, descriptions, bullet points, italic footers
- Platform Integration section (4 small cards)
- Technology Vision section with expanding bars
- Development Outlook section (dark bg, 2027 target)

### Programme (`/programme`) - DONE
- Hero section
- 3 horizontal scrolling pill carousels (Technologies, Benefits, Features)
- 2x2 interactive card grid for Core Architecture Layers (with icons, colored gradients, hover progress bars)
- Programme Focus section with 4 numbered cards

### About (`/about`) - DONE (Updated 2026-04-10)
- Hero: "Building Climate AI Infrastructure for the Future of Clean Energy"
- Our Mission section
- Our Approach: 4 interactive cards (Monitoring & Analytics, Climate AI Optimisation, Distributed Energy Coordination, Clean Energy Marketplace)
- The Davwo Story: Origin of the name from Urhobo language
- Founding Team: Awikpe Anirejoritse Collins (Founder & CEO) and Salma Chentite (Co-Founder & COO) with real photos
- Looking Ahead section (dark background)

### Contact (`/contact`) - DONE

## Completed Work
- [2026-04-09] Frontend scaffolding, routing, Navbar with thick bordered header and extra-large logo
- [2026-04-09] Scroll-triggered staggered fade-in animations (stay visible on scroll-up)
- [2026-04-09] Tesla-style typography (light weights, smaller headings, gray-800 text)
- [2026-04-09] Platform Architecture redesigned with numbered layer cards
- [2026-04-09] Programme updated from 3D carousels to interactive 2x2 cards + pill carousels
- [2026-04-10] About page fully rewritten with user-provided content, founder bios, and real photos

## Testing
- All 5 pages verified via testing agent (iteration_1) - 100% pass rate
- Navigation, scroll animations, photo loading, design consistency all verified

## Upcoming / Backlog
- P1: Extract scroll-reveal animation into reusable `useScrollReveal` hook (DRY refactor)
- P1: Backend & API integration (when user is ready)
- P2: Mobile responsiveness fine-tuning
