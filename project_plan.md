# ArchCraft Solutions — Premium Construction & Architecture Website

## 1. Project Description
A premium, minimalist website for a local Indian construction, architecture, interior design, and liaisoning business. The site is designed to feel luxurious, editorial, and high-end — inspired by premium real estate and design brands. Target audience: property owners, developers, and institutions seeking full-service construction and design partners.

## 2. Page Structure
- `/` — Home (Hero, About, Services, Projects, Sustainability, Why Us, Testimonials, CTA)
- `/about` — About Us (Company story, team, values)
- `/services` — Services Listing (All service cards overview)
- `/services/architects-engineers` — Architects & Engineers service page
- `/services/builders-developers` — Builders & Developers service page
- `/services/liaisoning-works` — Liaisoning Works service page
- `/services/interior-designing` — Interior Designing & Execution service page
- `/services/building-approval` — Building Approval Services (external partner)
- `*` — 404 Not Found

## 3. Core Features
- [x] Sticky header with top contact bar and mobile hamburger menu
- [x] Full-screen hero with CTA buttons
- [x] About section with split layout
- [x] Services grid with individual dedicated pages
- [x] Projects showcase section
- [x] Sustainability section with icons
- [x] Why Choose Us trust points
- [x] Testimonials section
- [x] Final CTA section with call/WhatsApp/quote buttons
- [x] Premium dark footer with quick links
- [x] Contact form (Request a Quote) — Readdy form
- [x] Fully responsive (mobile-first + desktop-first rules)
- [x] Scroll-reveal animations

## 4. Data Model Design
No database required. All content is static. Mock data files:
- `src/mocks/projects.ts` — featured project data
- `src/mocks/testimonials.ts` — client testimonials

## 5. Backend / Third-party Integration Plan
- Supabase: Not needed
- Shopify: Not needed
- Stripe: Not needed
- Forms: Readdy Form API
  - Request a Quote: https://readdy.ai/api/form/d74ikan5hic0eqh315ug
  - Contact Form: https://readdy.ai/api/form/d74ikan5hic0eqh315v0
- External link: https://buildingapprovalservices.com (Building Approval Services partner)

## 6. Development Phase Plan

### Phase 1: Core Website — Home, About, Services (CURRENT)
- Goal: Full premium website with all pages and sections
- Deliverable: Complete functional site with responsive design, navigation, all section content, service pages, and forms

### Phase 2: Enhancements (future)
- Goal: Additional polish, contact page, project gallery
- Deliverable: Full project portfolio page, inquiry form integrations
