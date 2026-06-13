# Todo List

## Current Goal
Replace the existing pricing section layout with the new animated-glassy-pricing Three.js background shader and custom glass card UI using multi-type ripple buttons.

## Implementation Tasks
- [x] Create `components/ui/multi-type-ripple-buttons.tsx`
- [x] Create `components/ui/animated-glassy-pricing.tsx`
- [x] Update `app/globals.css` with ripple color variables
- [x] Modify `components/landing/pricing-section.tsx` to use the new UI elements
- [x] Run `npm run build` to verify compilation
- [x] Document final results in `tasks/todo.md`

---

## New Goal
Resolve UI alignment issues in the hero section by fixing icon text overlapping and removing blurry box-shadow glows.

## Hero Icon Polish Tasks
- [x] Remove blurry `box-shadow` glows from `icon-tone-hero-*` classes in `app/globals.css`
- [x] Wrap top badge contents with an `inline-flex items-center gap-4` container inside `RevealTextLine` to fix overlapping
- [x] Increase gap in bottom stats row to `gap-4` for better spacing
- [x] Run build verification to ensure correct compilation

---

## Goal: Chat Card Readability
Remove excessive transparency and blur from the main chat card in the chat section to prevent background path graphics from interfering with text legibility.

## Chat Card Tasks
- [x] Change main chat card background wrapper to solid `bg-white dark:bg-neutral-950` in `components/landing/chat-section.tsx`
- [x] Remove transparency and glassmorphism from suggestion tiles, message bubbles, input form, and indicator bubbles, replacing them with clean solid backgrounds (`bg-neutral-50`/`bg-neutral-100` in light mode, and `bg-neutral-900` in dark mode)
- [x] Run build compilation verification

---

## Goal: Integrate Testimonials Columns
Integrate the custom scrolling `TestimonialsColumn` and layout in the bottom section of the landing page.

## Testimonials Integration Tasks
- [x] Install npm dependencies (`motion` package)
- [x] Create `components/ui/testimonials-columns-1.tsx` with safe TypeScript prop typings
- [x] Create `components/landing/real-testimonials.tsx` using context-relevant testimonials texts (peptide research oriented) and high-quality Unsplash stock avatar photos
- [x] Integrate `<RealTestimonialsSection />` in the bottom section of the main landing page (`app/page.tsx` right after the Pricing Section)
- [x] Run build compilation verification

---

## Goal: Standardize Testimonials Section Backdrop
Polish the Testimonials section background, spacing, transitions, and cards to match the layout styles of the rest of the application's landing sections.

## Testimonials Styling Tasks
- [x] Make `motion.div` in `testimonials-columns-1.tsx` background transparent, and style individual testimonial cards using `border border-border bg-card text-card-foreground shadow-sm`
- [x] Refactor `RealTestimonialsSection` in `real-testimonials.tsx` to include `SectionBackdrop variant="mesh"` and integrate scroll reveal animations via `useSectionReveal`
- [x] Verify compilation and static build outputs




