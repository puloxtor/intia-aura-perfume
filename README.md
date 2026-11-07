# INTIA Aura — The Perfume

Scroll-driven landing page for **INTIA Aura — The Perfume**, a 50 ml hair perfume and the first product of INTIA's *Line 01 Scentual Longevity*.

The page is one continuous film of a perfume droplet: scrolling moves the playhead, and five chapters of copy (notes, ingredients, how to use) ride on top of it.

## How it works

- **Static site, no build step.** `index.html`, `support.js`, the INTIA design-system bundle in `_ds/` and the films in `media/` are served as-is.
- **Scroll-scrubbed video.** Frames are decoded directly (WebCodecs → canvas where supported) instead of seeking a `<video>` element, with damped easing on a single playhead so the film and the copy move together.
- **Resolution ladder.** Large or high-DPR screens get the 1080p cut, others the 720p cut, with the original 60 fps film as a fallback.
- **Mobile layout.** A separate handset composition that leaves the desktop layout untouched.
- **Auto-tour.** The page can play itself through all chapters.

## Files

| Path | What it is |
|---|---|
| `index.html` | The page |
| `INTIA Aura - The Perfume.dc.html` | Same page as a design component (kept identical to `index.html`) |
| `support.js` | Component runtime for the page |
| `_ds/` | INTIA design system: tokens (colour, type, spacing, motion) and styles |
| `media/` | Droplet films (1080p and 720p scrub cuts, 60 fps original) and poster |
| `netlify.toml` | Netlify publish settings and cache headers |

## Run locally

Any static server works, for example:

```bash
npx serve .
```

## Deploy

Set up for Netlify: `netlify.toml` publishes the repository root. The films are cached for a week and revalidated by ETag; the design system path is versioned, so it is cached as immutable.
