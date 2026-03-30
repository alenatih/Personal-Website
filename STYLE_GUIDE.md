# The Gilded Modern — Design Style Guide

> *A design system at the intersection of Victorian elegance and contemporary minimalism.*
> *Warm amber and gold accents against clean whites and deep blues, serif gravitas balanced by*
> *airy sans-serif clarity, ornament used with restraint.*

---

## Table of Contents

1. [Philosophy](#1-philosophy)
2. [Color Palette](#2-color-palette)
3. [Typography](#3-typography)
4. [Spacing & Layout](#4-spacing--layout)
5. [Component Patterns](#5-component-patterns)
6. [Gradients & Backgrounds](#6-gradients--backgrounds)
7. [Motion & Animation](#7-motion--animation)
8. [Dark Mode](#8-dark-mode)
9. [Ornamental Details](#9-ornamental-details)
10. [CSS Variables Boilerplate](#10-css-variables-boilerplate)
11. [Tailwind Config Boilerplate](#11-tailwind-config-boilerplate)
12. [Quick-Reference Cheat Sheet](#12-quick-reference-cheat-sheet)

---

## 1. Philosophy

This style speaks two languages at once and makes them agree.

**The Victorian voice** — warmth, weight, and ceremony. Gold and amber tones that recall gaslit interiors and polished brass. Serif letterforms for headings. Ornamental hairline rules used as punctuation between sections, not decoration for its own sake. A sense that the interface has been *crafted*, not assembled.

**The Modernist voice** — restraint, whitespace, and motion. A near-achromatic base palette so the amber accents feel chosen, not scattered. Sans-serif body text for legibility at scale. Layouts that breathe. Interactions that respond smoothly but never perform.

**The governing tension:** every element earns its presence. Ornamentation is structural — a gradient rule marks a hierarchy, an amber border-top on a card anchors its weight. Nothing decorates without also informing.

---

## 2. Color Palette

### 2.1 Semantic Tokens (CSS Custom Properties)

Use these throughout components. Never hard-code hex values inside components — always go through the token layer.

| Token | Light Value (HSL) | Dark Value (HSL) | Role |
|---|---|---|---|
| `--background` | `0 0% 100%` | `0 0% 3.9%` | Page background |
| `--foreground` | `0 0% 3.9%` | `0 0% 98%` | Primary text |
| `--card` | `0 0% 100%` | `0 0% 3.9%` | Card surface |
| `--card-foreground` | `0 0% 3.9%` | `0 0% 98%` | Card text |
| `--primary` | `0 0% 9%` | `0 0% 98%` | Primary interactive |
| `--primary-foreground` | `0 0% 98%` | `0 0% 9%` | Text on primary |
| `--secondary` | `0 0% 96.1%` | `0 0% 14.9%` | Secondary surface |
| `--secondary-foreground` | `0 0% 9%` | `0 0% 98%` | Text on secondary |
| `--muted` | `0 0% 96.1%` | `0 0% 14.9%` | Subdued surface |
| `--muted-foreground` | `0 0% 45.1%` | `0 0% 63.9%` | Subdued text |
| `--accent` | `0 0% 96.1%` | `0 0% 14.9%` | Hover/active tint |
| `--accent-foreground` | `0 0% 9%` | `0 0% 98%` | Text on accent |
| `--border` | `0 0% 89.8%` | `0 0% 14.9%` | Borders, dividers |
| `--input` | `0 0% 89.8%` | `0 0% 14.9%` | Form field borders |
| `--ring` | `0 0% 3.9%` | `0 0% 83.1%` | Focus ring |
| `--radius` | `0.5rem` | `0.5rem` | Base border radius |

### 2.2 Amber — The Signature Accent

Amber is the soul of this palette. It carries warmth, prestige, and age without being garish. It appears in:
- Gradient headings
- CTA buttons
- Card top-borders
- Active navigation states
- Icon backgrounds
- Ornamental dividers

```
amber-50   #faf8f3  — card background tints, subtle fills
amber-100  #f3eddc  — light hover states, icon containers
amber-200  #e6d5b8  — primary CTA button (light mode)
amber-300  #d4b896  — card border-top, step circles
amber-400  #c4a370  — gradient endpoints, glow effects
amber-600  #a68552  — gradient text start (dark tone)
amber-700  #9a7d54  — text hover states
amber-800  #8a6d45  — text on amber backgrounds
amber-900  #5c4620  — deepest amber, used sparingly
```

**Usage rule:** Amber never fills large areas. It traces edges, colors words, and tints icons. Reserve full amber fills for small interactive elements (buttons, badges, icon containers).

### 2.3 Slate Blue — The Structural Color

Blue provides structural depth: backgrounds for alternating sections, navigation gradients, and hero washes. It reads as trustworthy and calm — a counterweight to amber's warmth.

```
Sidebar light gradient: #ddeaf6 → #ccd9ec → #b8cce2
Sidebar dark gradient:  #2c4d73 → #223a59 → #1a2a40

Section background:  bg-gradient-to-br from-blue-400/20 to-blue-900/20
Hero background:     bg-gradient-to-br from-blue-400/20 via-transparent to-blue-300/20
Navigation links:    text-blue-500 dark:text-blue-400
Footer links:        text-blue-700 dark:text-blue-500
```

### 2.4 Neutral Grays — The Canvas

Grays carry body text, secondary labels, and surface backgrounds. The palette is achromatic, keeping amber unmistakably warm against it.

```
gray-700  #374151  — paragraph body text
gray-600  #4b5563  — secondary labels, nav inactive
gray-500  #6b7280  — captions, metadata
gray-400  #9ca3af  — placeholder, dark mode body text
gray-900  #111827  — primary headings (light mode)
```

### 2.5 Chart Colors (OKLch)

For data visualization, these perceptually-uniform colors maintain equal visual weight across hues.

```css
--chart-1: oklch(0.646 0.222 41.116);   /* warm orange  */
--chart-2: oklch(0.6   0.118 184.704);  /* teal         */
--chart-3: oklch(0.398 0.07  227.392);  /* dark blue    */
--chart-4: oklch(0.828 0.189 84.429);   /* amber-yellow */
--chart-5: oklch(0.769 0.188 70.08);    /* gold-orange  */
```

---

## 3. Typography

### 3.1 Font Stack

```css
/* Primary: Geist (modern geometric sans) */
font-family: 'Geist', sans-serif;

/* For headings that need gravitas: the default browser serif */
font-family: serif;  /* Tailwind: font-serif */
```

Import Geist from Google Fonts in your `<head>`:
```html
<link
  href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600&display=swap"
  rel="stylesheet"
/>
```

Or with Next.js:
```ts
import { Geist } from 'next/font/google'
const geist = Geist({ subsets: ['latin'], display: 'swap' })
```

### 3.2 Type Scale

| Role | Classes | Notes |
|---|---|---|
| Display heading | `text-5xl md:text-7xl font-light` | Hero H1. Light weight is intentional — grand but not heavy. |
| Display accent | `font-serif tracking-wide bg-clip-text text-transparent bg-gradient-to-br from-amber-600 to-amber-800` | Brand name or key word within H1. |
| Section heading | `text-4xl md:text-5xl font-serif tracking-wide` | H2. Serif returns the Victorian register. |
| Sub-heading | `text-2xl font-semibold leading-none tracking-tight` | H3 / card titles. |
| Lead paragraph | `text-xl md:text-2xl font-light leading-relaxed` | Hero subtext. |
| Body | `text-base font-normal leading-relaxed` | Default prose. |
| Small / Label | `text-sm font-medium` | UI labels, captions. |
| Metadata | `text-xs` | Timestamps, badges. |

### 3.3 The Serif/Sans Contrast

This is the primary typographic gesture of the style. Reserve `font-serif` for:
- Section headings (H2)
- Pull quotes or callout text
- Brand name treatments with gradient fill

Everything else is `font-sans` (Geist). The contrast creates the Victorian-meets-modern tension.

---

## 4. Spacing & Layout

### 4.1 Page Structure

```
┌─────────────────────────────────────────┐
│  nav  (border-b border-b-foreground/10) │  h-auto, full width
├─────────────────────────────────────────┤
│  main content                           │  min-h-screen, max-w-7xl, centered
│    section 1  (py-24 pb-36)             │
│    section 2  (py-24 pb-36)             │
│    …                                    │
├─────────────────────────────────────────┤
│  footer  (pt-14 pb-20 md:pb-16)         │  border-t
└─────────────────────────────────────────┘
```

```html
<body class="flex flex-col items-center justify-center text-foreground bg-background">
  <main class="min-h-screen flex flex-col items-center w-full">
    <nav class="h-full w-full flex justify-center border-b border-b-foreground/10">
      <div class="max-w-7xl w-full py-10 md:py-7 px-5 md:px-12 flex justify-between items-center">
        ...
      </div>
    </nav>
    <div class="flex flex-col gap-4 w-full">
      <!-- page content -->
    </div>
  </main>
  <footer class="max-w-7xl w-full pt-14 pb-20 md:pb-16 px-4 sm:px-6 md:px-12 mx-auto mt-auto border-t flex flex-col md:flex-row items-center md:justify-between gap-4 md:gap-12">
    ...
  </footer>
</body>
```

### 4.2 Section Padding

```
py-24 pb-36          — standard content section
px-4 sm:px-6 md:px-12 lg:px-12   — horizontal page padding
max-w-7xl mx-auto    — content width cap
```

### 4.3 Card & Component Spacing

```
p-6         — card padding
gap-2       — tight inline items
gap-4       — default stack gap
gap-6       — medium separation
gap-8       — larger separation
gap-12      — section-level separation
```

### 4.4 Responsive Grid Patterns

```html
<!-- Feature grid: 1 → 2 → 4 columns -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<!-- Two-column layout: stacked on mobile -->
<div class="flex flex-col md:flex-row gap-6 md:gap-12">

<!-- Sidebar + content -->
<div class="flex flex-col md:flex-row">
  <aside class="md:max-w-[220px] md:w-full md:min-h-screen">...</aside>
  <main class="flex-1">...</main>
</div>
```

---

## 5. Component Patterns

### 5.1 Cards

The card is the core compositional unit. Its defining gesture is the **amber top border**, which anchors weight and identifies the style instantly.

```html
<div class="group border-t-2 border-t-amber-300 dark:border-t-amber-600
            bg-white/80 dark:bg-gray-900/70 backdrop-blur-sm
            rounded-lg shadow-md hover:shadow-xl
            transition-all duration-500 p-6">

  <!-- Icon container -->
  <div class="bg-amber-50 dark:bg-amber-900/20 w-12 h-12 rounded-2xl
              flex items-center justify-center mb-4
              group-hover:scale-110 transition-transform duration-300">
    <!-- icon with class="text-amber-600 dark:text-amber-400" -->
  </div>

  <h3 class="text-lg font-semibold tracking-tight mb-2
             group-hover:text-amber-700 dark:group-hover:text-amber-400
             transition-colors">
    Card Title
  </h3>

  <p class="text-sm text-muted-foreground leading-relaxed">
    Card description text goes here.
  </p>
</div>
```

**Key rules:**
- `border-t-2 border-t-amber-300` always present on elevated cards
- `backdrop-blur-sm` when card sits over a textured/image background
- `group` on the wrapper, `group-hover:` modifiers on children
- Shadow lifts on hover: `shadow-md hover:shadow-xl`

### 5.2 Buttons

**Primary CTA:**
```html
<button class="text-gray-800 dark:text-amber-950
               bg-amber-200 dark:bg-amber-300
               hover:bg-amber-300 dark:hover:bg-amber-200
               py-2 px-8 text-lg font-medium rounded-md
               shadow-lg hover:shadow-xl
               transition-all duration-300 hover:scale-105">
  Get Started
</button>
```

**Ghost / Text CTA:**
```html
<button class="text-amber-700 dark:text-amber-400
               hover:text-amber-800 dark:hover:text-amber-200
               rounded-md hover:scale-105 transition-all duration-300">
  Learn more
</button>
```

**Global button behavior** (add to `globals.css`):
```css
button {
  transition: transform 150ms ease, box-shadow 150ms ease;
  transform: translateZ(0);
}
button:active {
  transform: scale(0.98);
}
```

### 5.3 Section Headings

Every major section heading uses a serif font with a gradient accent and an ornamental hairline rule below it.

```html
<div class="flex flex-col items-center text-center mb-16 gap-4">
  <h2 class="text-4xl md:text-5xl font-serif text-gray-900 dark:text-amber-50 tracking-wide">
    Section Title
  </h2>
  <!-- Ornamental rule -->
  <div class="h-px w-16 bg-gradient-to-r from-amber-400 via-amber-300 to-transparent
              dark:from-amber-500 dark:via-amber-400"></div>
  <p class="text-xl text-gray-600 dark:text-gray-400 font-light max-w-2xl leading-relaxed">
    Supporting description text.
  </p>
</div>
```

### 5.4 Hero Section

```html
<section class="relative min-h-[80vh] flex items-center">
  <!-- Background image -->
  <img src="/hero-image.jpg"
       class="absolute inset-0 h-full w-full object-cover object-center opacity-50 dark:opacity-20" />
  <!-- Gradient overlay -->
  <div class="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background"></div>

  <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-24">
    <!-- Logo with glow -->
    <div class="relative inline-flex items-center justify-center w-20 h-20 mb-8">
      <div class="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600
                  rounded-full blur-xl opacity-20 animate-pulse"></div>
      <img src="/logo.png" class="relative w-16 h-16" />
    </div>

    <h1 class="text-5xl md:text-7xl font-light text-gray-900 dark:text-gray-100 mb-6">
      Your
      <span class="font-serif bg-clip-text text-transparent
                   bg-gradient-to-br from-amber-600 to-amber-800
                   dark:from-amber-400 dark:to-amber-600 tracking-wide">
        Platform
      </span>
      <br />
      <span class="text-4xl md:text-5xl font-light text-gray-700 dark:text-gray-400 tracking-widest">
        Subtitle
      </span>
    </h1>

    <p class="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-light leading-relaxed max-w-2xl mb-10">
      Lead paragraph text that supports the headline and invites the user in.
    </p>

    <div class="flex items-center gap-6">
      <button class="bg-amber-200 dark:bg-amber-300 text-gray-800 dark:text-amber-950
                     hover:bg-amber-300 dark:hover:bg-amber-200
                     py-2 px-8 text-lg font-medium rounded-md shadow-lg hover:shadow-xl
                     transition-all duration-300 hover:scale-105">
        Primary Action
      </button>
      <button class="text-amber-700 dark:text-amber-400 hover:scale-105 transition-all duration-300">
        Secondary Action
      </button>
    </div>
  </div>
</section>
```

### 5.5 Sidebar Navigation

The sidebar gradient (blue, cool, receding) frames the amber accents of active items beautifully.

```html
<aside class="flex md:flex-col
              md:bg-gradient-to-b md:from-[#ddeaf6] md:via-[#ccd9ec] md:to-[#b8cce2]
              dark:md:from-[#2c4d73] dark:md:via-[#223a59] dark:md:to-[#1a2a40]
              md:min-h-screen md:max-w-[220px] md:w-full
              md:pt-8 md:pb-16
              md:border-r border-amber-200/50 dark:border-amber-900/30">

  <!-- Ornamental section divider -->
  <div class="h-px w-full bg-gradient-to-r from-transparent via-amber-400/50 to-transparent
              dark:via-amber-500/30 my-4"></div>

  <!-- Nav item — inactive -->
  <a class="relative flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium
            text-gray-600 dark:text-gray-400
            hover:text-amber-700 dark:hover:text-amber-300
            hover:bg-amber-50/60 dark:hover:bg-amber-900/15
            transition-all duration-200">
    <span class="flex items-center justify-center w-7 h-7 rounded-md">
      <!-- icon -->
    </span>
    Label
  </a>

  <!-- Nav item — active -->
  <a class="relative flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium
            text-amber-800 dark:text-amber-300
            bg-amber-100/70 dark:bg-amber-900/25 shadow-sm">
    <!-- Active indicator bar -->
    <span class="absolute left-0 top-1/2 -translate-y-1/2
                 w-0.5 h-6 rounded-r-full
                 bg-gradient-to-b from-amber-400 to-amber-600
                 dark:from-amber-400 dark:to-amber-500"></span>
    <span class="flex items-center justify-center w-7 h-7 rounded-md
                 bg-amber-200/60 dark:bg-amber-800/30">
      <!-- icon -->
    </span>
    Label
  </a>
</aside>
```

### 5.6 Gradient App Title

For brand names or app titles in navigation headers:

```css
/* globals.css */
.app-title {
  background: linear-gradient(90deg, #477FEB 0%, #a9c1df 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

```html
<span class="app-title text-xl font-semibold tracking-wide">AppName</span>
```

### 5.7 Numbered Steps

For "How it works" or sequential instructional sections:

```html
<div class="group border-t-2 border-t-amber-300 dark:border-t-amber-600
            bg-white/80 dark:bg-gray-900/70 backdrop-blur-sm
            rounded-lg shadow-md hover:shadow-xl transition-all duration-500 p-6">

  <!-- Step number circle -->
  <div class="w-10 h-10 rounded-full
              border border-amber-300 dark:border-amber-600
              bg-amber-50 dark:bg-amber-900/20
              flex items-center justify-center mb-4
              text-sm font-semibold text-amber-800 dark:text-amber-300">
    1
  </div>

  <h3 class="font-semibold text-lg mb-2">Step Title</h3>
  <p class="text-sm text-muted-foreground leading-relaxed">Step description.</p>
</div>
```

### 5.8 Standard Form Inputs

```html
<div class="flex flex-col gap-2">
  <label class="text-sm font-medium leading-none">Field Label</label>
  <input
    class="flex h-10 w-full rounded-md border border-input bg-background
           px-3 py-2 text-sm ring-offset-background
           placeholder:text-muted-foreground
           focus-visible:outline-none focus-visible:ring-2
           focus-visible:ring-ring focus-visible:ring-offset-2
           disabled:cursor-not-allowed disabled:opacity-50"
    placeholder="Placeholder text"
  />
</div>
```

---

## 6. Gradients & Backgrounds

### 6.1 Amber Gradient Text

The defining typographic move. Apply to H1 brand words or H2 section headings.

```html
<!-- Warm amber (headings, brand names) -->
<span class="bg-clip-text text-transparent
             bg-gradient-to-br from-amber-600 to-amber-800
             dark:from-amber-400 dark:to-amber-600">
  Word
</span>

<!-- Cool blue (app title, navigation) -->
<span style="background: linear-gradient(90deg, #477FEB 0%, #a9c1df 100%);
             -webkit-background-clip: text;
             background-clip: text;
             -webkit-text-fill-color: transparent;">
  AppName
</span>
```

### 6.2 Section Background Tints

Each major section alternates between near-white and a subtle tinted gradient to create rhythm without full color changes.

```html
<!-- Default / white section -->
<section class="py-24 pb-36">...</section>

<!-- Blue-tinted section (alternating) -->
<section class="py-24 pb-36 bg-gradient-to-br from-blue-400/20 to-blue-900/20 dark:from-blue-900/20 dark:to-blue-950/20">
  ...
</section>

<!-- Amber-tinted CTA section -->
<section class="relative py-24">
  <div class="absolute inset-0 bg-gradient-to-br
              from-amber-400/20 via-transparent to-blue-300/20
              dark:from-amber-600/20 dark:via-transparent dark:to-blue-500/20"></div>
  <div class="relative z-10">...</div>
</section>
```

### 6.3 Glass / Backdrop Blur Surfaces

Used for cards that overlay images or textured backgrounds:

```html
<div class="bg-white/80 dark:bg-gray-900/70 backdrop-blur-sm rounded-lg">
```

For modals/overlays over blurred backgrounds:
```html
<div class="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
```

### 6.4 Ornamental Hairline Rules

These are small but essential — they carry the Victorian register into the layout.

```html
<!-- Section accent under a heading -->
<div class="h-px w-16 bg-gradient-to-r from-amber-400 via-amber-300 to-transparent
            dark:from-amber-500 dark:via-amber-400"></div>

<!-- Full-width divider (sidebar, between sections) -->
<div class="h-px w-full bg-gradient-to-r from-transparent via-amber-400/50 to-transparent
            dark:via-amber-500/30"></div>
```

---

## 7. Motion & Animation

### 7.1 Governing Principles

- **Responsive, not theatrical.** Animations confirm interaction; they don't perform.
- **Shorter durations for micro-interactions** (150ms), longer for reveals (300–500ms).
- **Scale is the primary hover gesture.** Elements that can be interacted with grow slightly.
- **Shadow elevation** reinforces the scale lift on cards and buttons.

### 7.2 Standard Transition Classes

| Effect | Class | Use on |
|---|---|---|
| Color change | `transition-colors` | Text, borders, backgrounds |
| Transform only | `transition-transform` | Icons, logos |
| Everything | `transition-all duration-300` | Buttons |
| Slow reveal | `transition-all duration-500` | Cards |

### 7.3 Hover Gestures

```html
<!-- Lift + grow (cards, primary buttons) -->
class="shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"

<!-- Icon grow inside hovered card parent -->
class="group-hover:scale-110 transition-transform duration-300"

<!-- Text color shift on hover -->
class="hover:text-amber-700 dark:hover:text-amber-400 transition-colors"

<!-- Navigation links -->
class="hover:scale-105 transition-transform"
```

### 7.4 Press Effect (Global)

```css
/* globals.css */
button {
  transition: transform 150ms ease, box-shadow 150ms ease;
  transform: translateZ(0);
}
button:active {
  transform: scale(0.98);
}
```

### 7.5 Ambient Animation

Used sparingly — only for the logo glow:

```html
<div class="bg-gradient-to-r from-amber-400 to-amber-600
            rounded-full blur-xl opacity-20 animate-pulse"></div>
```

Do not use `animate-pulse` or `animate-bounce` for UI state or data. Reserve them for decorative background elements only.

---

## 8. Dark Mode

### 8.1 Setup

```ts
// next-themes
<ThemeProvider
  attribute="class"
  defaultTheme="system"
  enableSystem={true}
  disableTransitionOnChange={true}
>
```

### 8.2 Dark Mode Amber Shifts

In dark mode, amber shifts lighter so it remains legible and warm against deep backgrounds.

| Light | Dark | Used for |
|---|---|---|
| `text-amber-600` | `dark:text-amber-400` | Icon color, accent text |
| `text-amber-700` | `dark:text-amber-400` | Hover text, link color |
| `text-amber-800` | `dark:text-amber-300` | Active nav items |
| `bg-amber-200` | `dark:bg-amber-300` | CTA button fill |
| `border-t-amber-300` | `dark:border-t-amber-600` | Card top border |
| `bg-amber-100/70` | `dark:bg-amber-900/25` | Active nav background |
| `from-amber-600 to-amber-800` | `dark:from-amber-400 dark:to-amber-600` | Gradient text |

### 8.3 Dark Sidebar Colors

The sidebar gradient inverts from airy light blue to deep navy:

```
Light: #ddeaf6 → #ccd9ec → #b8cce2
Dark:  #2c4d73 → #223a59 → #1a2a40
```

### 8.4 Theme Switcher Component Pattern

```html
<button variant="ghost" size="sm">
  <!-- Sun icon for light, Moon for dark, Laptop for system -->
  <span class="text-muted-foreground w-4 h-4"><!-- icon --></span>
</button>
```

---

## 9. Ornamental Details

These small gestures are what distinguish *crafted* from *assembled*. Use them consistently.

### 9.1 The Amber Top Border on Cards

```css
border-top: 2px solid theme('colors.amber.300');  /* light */
border-top: 2px solid theme('colors.amber.600');  /* dark  */
```

It functions as a visual anchor and a category marker. Every elevated card in this system carries it.

### 9.2 The Active Navigation Bar

```html
<span class="absolute left-0 top-1/2 -translate-y-1/2
             w-0.5 h-6 rounded-r-full
             bg-gradient-to-b from-amber-400 to-amber-600"></span>
```

A two-pixel vertical bar flush with the left edge of the nav item. Gradient-filled, pill-tipped. Understated but unmistakable.

### 9.3 The Section Accent Line

```html
<div class="h-px w-16 bg-gradient-to-r from-amber-400 via-amber-300 to-transparent"></div>
```

Sixteen pixels wide, fading to nothing. Placed directly beneath a section heading, slightly left of center if the layout allows. It functions as a period — it ends the heading and begins the content.

### 9.4 Gradient Fade Dividers

```html
<div class="h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
```

Full-width, symmetrical fade. Used to separate logical groups inside the sidebar or between subsections.

### 9.5 Numbered Step Circles

```html
<div class="w-10 h-10 rounded-full
            border border-amber-300 dark:border-amber-600
            bg-amber-50 dark:bg-amber-900/20
            flex items-center justify-center
            text-sm font-semibold text-amber-800 dark:text-amber-300">
  1
</div>
```

The circle is outlined, not filled — the amber border traces the shape, the tinted fill echoes the accent. Heavy fills are reserved for active states.

---

## 10. CSS Variables Boilerplate

```css
/* globals.css */

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 0 0% 3.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 0 0% 3.9%;
    --primary: 0 0% 9%;
    --primary-foreground: 0 0% 98%;
    --secondary: 0 0% 96.1%;
    --secondary-foreground: 0 0% 9%;
    --muted: 0 0% 96.1%;
    --muted-foreground: 0 0% 45.1%;
    --accent: 0 0% 96.1%;
    --accent-foreground: 0 0% 9%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 89.8%;
    --input: 0 0% 89.8%;
    --ring: 0 0% 3.9%;
    --radius: 0.5rem;
    --chart-1: oklch(0.646 0.222 41.116);
    --chart-2: oklch(0.6 0.118 184.704);
    --chart-3: oklch(0.398 0.07 227.392);
    --chart-4: oklch(0.828 0.189 84.429);
    --chart-5: oklch(0.769 0.188 70.08);
  }

  .dark {
    --background: 0 0% 3.9%;
    --foreground: 0 0% 98%;
    --card: 0 0% 3.9%;
    --card-foreground: 0 0% 98%;
    --popover: 0 0% 3.9%;
    --popover-foreground: 0 0% 98%;
    --primary: 0 0% 98%;
    --primary-foreground: 0 0% 9%;
    --secondary: 0 0% 14.9%;
    --secondary-foreground: 0 0% 98%;
    --muted: 0 0% 14.9%;
    --muted-foreground: 0 0% 63.9%;
    --accent: 0 0% 14.9%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 14.9%;
    --input: 0 0% 14.9%;
    --ring: 0 0% 83.1%;
    --chart-1: oklch(0.488 0.243 264.376);
    --chart-2: oklch(0.696 0.17 162.48);
    --chart-3: oklch(0.769 0.188 70.08);
    --chart-4: oklch(0.627 0.265 303.9);
    --chart-5: oklch(0.645 0.246 16.439);
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}

/* Brand gradient text class */
.app-title {
  background: linear-gradient(90deg, #477FEB 0%, #a9c1df 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Global button tactile feedback */
button {
  transition: transform 150ms ease, box-shadow 150ms ease;
  transform: translateZ(0);
}
button:active {
  transform: scale(0.98);
}
```

---

## 11. Tailwind Config Boilerplate

```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss'
import tailwindcssAnimate from 'tailwindcss-animate'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: { '2xl': '1400px' },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [tailwindcssAnimate],
}

export default config
```

---

## 12. Quick-Reference Cheat Sheet

### Colors

| Intent | Light | Dark |
|---|---|---|
| Gradient heading text | `from-amber-600 to-amber-800` | `from-amber-400 to-amber-600` |
| Primary CTA button | `bg-amber-200 text-gray-800` | `bg-amber-300 text-amber-950` |
| Card top border | `border-t-amber-300` | `border-t-amber-600` |
| Icon / accent | `text-amber-600` | `text-amber-400` |
| Active nav text | `text-amber-800` | `text-amber-300` |
| Body text | `text-gray-700` | `text-gray-300` |
| Section bg (alternate) | `from-blue-400/20 to-blue-900/20` | same |
| Sidebar gradient | `#ddeaf6 → #ccd9ec → #b8cce2` | `#2c4d73 → #223a59 → #1a2a40` |

### Typography

| Role | Classes |
|---|---|
| Hero H1 | `text-5xl md:text-7xl font-light` |
| Brand word in H1 | `font-serif bg-clip-text text-transparent bg-gradient-to-br from-amber-600 to-amber-800` |
| Section H2 | `text-4xl md:text-5xl font-serif tracking-wide` |
| Card title | `text-lg font-semibold tracking-tight` |
| Lead paragraph | `text-xl md:text-2xl font-light leading-relaxed` |
| Body | `text-base leading-relaxed` |

### Cards

```
border-t-2 border-t-amber-300 dark:border-t-amber-600
bg-white/80 dark:bg-gray-900/70 backdrop-blur-sm
rounded-lg shadow-md hover:shadow-xl transition-all duration-500
```

### Ornamental Rules

```
Accent (under heading):  h-px w-16 bg-gradient-to-r from-amber-400 via-amber-300 to-transparent
Full divider:            h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent
Active nav bar:          absolute left-0 w-0.5 h-6 rounded-r-full bg-gradient-to-b from-amber-400 to-amber-600
```

### Transitions

```
Micro (links, colors):   transition-colors  /  transition-transform
Interactions (buttons):  transition-all duration-300
Reveals (cards):         transition-all duration-500
Hover scale small:       hover:scale-105
Hover scale large:       hover:scale-110  (icons inside cards)
```

---

*The Gilded Modern — a style system built for projects that take both craft and clarity seriously.*
