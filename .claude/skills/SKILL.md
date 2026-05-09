# Frontend Design Skill

Rules and conventions for building UI in this project.

---

## Layout & Spacing

- Use a consistent 4px base unit (`4, 8, 12, 16, 24, 32, 48, 64px`).
- Prefer CSS Grid for two-dimensional layouts; Flexbox for one-dimensional alignment.
- Never use magic pixel values — map everything to the spacing scale.
- Max content width: `1280px`, centered with `auto` margins.
- Section vertical padding: `64px` desktop / `40px` mobile.

---

## Typography

- Scale: `12, 14, 16, 18, 24, 32, 48, 64px` (map to `text-sm` → `text-6xl` if using Tailwind).
- Line height: `1.5` for body, `1.1–1.2` for headings.
- Font weight: `400` body, `600` subheadings, `700` headings.
- Never exceed `70ch` line length for prose.

---

## Color

- Define a token set: `--color-primary`, `--color-bg`, `--color-surface`, `--color-border`, `--color-text`, `--color-muted`.
- All interactive elements must meet **WCAG AA** contrast (4.5:1 text, 3:1 UI).
- Use opacity variants (`/50`, `/20`) for disabled/muted states instead of separate colors.
- Dark mode: flip `--color-bg` and `--color-text`; keep primary hue consistent.

---

## Components

- One component = one responsibility. No god components.
- Props must be typed (TypeScript interfaces or PropTypes).
- Avoid inline styles — use CSS Modules, Tailwind, or styled-components consistently.
- Interactive components must have `:hover`, `:focus-visible`, and `:active` states.
- Use `aria-*` attributes and semantic HTML (`button` not `div onClick`).

---

## Animation (Framer Motion)

- Prefer `motion.div` / `motion.section` for entrance animations.
- Standard easing: `{ ease: "easeOut", duration: 0.3 }` for micro-interactions.
- Page / section transitions: `duration: 0.5`, use `AnimatePresence` for exit.
- Stagger children with `staggerChildren: 0.08` inside `variants`.
- Respect `prefers-reduced-motion` — wrap animations in a check:

  ```js
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const transition = prefersReduced ? { duration: 0 } : { duration: 0.4, ease: "easeOut" };
  ```

- Never animate `width`/`height` directly — animate `scaleX`/`scaleY` or `maxHeight` for performance.
- Keep `layout` prop usage deliberate; it can be expensive on large lists.

---

## Responsiveness

- Mobile-first: write base styles for mobile, override at `sm (640px)`, `md (768px)`, `lg (1024px)`, `xl (1280px)`.
- Touch targets: minimum `44×44px`.
- Never hide content with `display:none` on mobile unless it is genuinely irrelevant.
- Test at 375px (iPhone SE), 768px (iPad), and 1440px (desktop) before marking done.

---

## Images & Media

- Always provide `alt` text. Decorative images get `alt=""`.
- Use `width` + `height` attributes to prevent layout shift (CLS).
- Prefer `webp` format; provide `jpg`/`png` fallback.
- Lazy-load images below the fold with `loading="lazy"`.

---

## Performance Rules

- No layout-triggering CSS properties in animations (`top`, `left`, `width`, `height`). Use `transform` and `opacity`.
- Code-split route-level components.
- Avoid re-renders: memoize expensive components with `React.memo`; stabilize callbacks with `useCallback`.
- Keep bundle additions justified — check `import cost` before adding a new library.

---

## Do / Don't

| Do | Don't |
|----|-------|
| Use semantic HTML elements | Use `div` for everything |
| Animate with `transform`/`opacity` | Animate `top`/`left`/`width` |
| Define color tokens | Hardcode hex values inline |
| Test keyboard navigation | Rely solely on mouse interaction |
| Use `framer-motion` variants for complex sequences | Chain `setTimeout` for animations |
| Write `aria-label` on icon-only buttons | Leave icon buttons without accessible labels |
