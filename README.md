# NOVERA — Pure Sound & Premium Audio

> **Novera** is a premium audio brand dedicated to creating headphones and earbuds that combine exceptional sound, elegant design, and cutting-edge technology. We believe music is more than entertainment—it’s an experience that inspires, connects, and empowers. Every Novera product is crafted to deliver crystal-clear audio, deep bass, lasting comfort, and reliable performance for everyday life.

---

## ✨ Features & Component Overview

- **🎨 White & Periwinkle Design System**: Pure White (`#FFFFFF`) canvas enriched with periwinkle (`#9FA1FF`), soft lavender (`#B5BAFF`), sky blue (`#AEE2FF`), and deep slate (`#181A38`) typography contrast.
- **🎧 High-Fidelity Audio Showcase**:
  - **Header & Navigation**: Sticky header with topbar trial announcements, brand mark, and responsive mobile drawer menu.
  - **Hero Stage**: Dynamic GSAP reveals showcasing flagship over-ear headphones and acoustic driver highlights.
  - **Feature Marquee**: Seamless looping ticker showcasing active noise cancellation, spatial audio, and battery life specs.
  - **Acoustic Spotlight**: Centralized interactive showcase with orbiting SVG progress rings, 40mm titanium driver stats, and -38dB active noise isolation highlights.
  - **Ranked Bestsellers**: Touch-swipe carousel ranking top audio gear based on listener reviews and sales data.
  - **Expanding Categories**: Accordion band showcasing over-ear headphones, true wireless earbuds, studio reference monitors, sports gear, and accessories.
  - **Four Pillars Showcase**: Visual feature grid detailing *Exceptional Sound*, *Elegant Design*, *Cutting-Edge Tech*, and *Lasting Comfort*.
  - **Curated Audio Bundles**: Interactive hotspots for studio setups and listening bundles.
  - **Novera in Motion**: Video reels section with Intersection Observer autoplaying studio sound lab demos.
  - **Audio Index & Ledger**: Cursor-following interactive preview plate showcasing driver specs and battery performance.
  - **Audio Equipment Edit**: Filterable tabbed grid with swatches, wishlist toggles, and risk-free trial guarantees.
  - **Customer Testimonials**: Interactive review card carousel with verified audiophile ratings.
  - **Sound Journal**: Articles on spatial audio tuning, hybrid ANC vs feedforward, and EQ optimization.
  - **Support FAQ**: Accordion answering battery expectations, ANC functionality, 30-day trials, and warranty details.
  - **Footer**: Newsletter sign-up card, acoustic lab location info, quick links, and copyright notices.

---

## 🎨 Color System Tokens

```css
--ivory: #ffffff;          /* Primary Canvas — Clean Pure White */
--ivory-2: #f6f7ff;        /* Soft Periwinkle-White Surface */
--sand: #eef1ff;           /* Sky-Tint Inset Panels & Dividers */
--tan: #9fa1ff;            /* Primary Accent Tone — #9FA1FF */
--gerua: #9fa1ff;          /* Primary Brand Accent — #9FA1FF */
--gerua-300: #b5baff;      /* Secondary Accent — #B5BAFF */
--gerua-100: #aee2ff;      /* Sky Accent — #AEE2FF */
--ink: #181a38;            /* Primary Text — Deep Slate Midnight */
--ink-soft: #52567a;       /* Secondary Text — Muted Periwinkle Slate */
```

---

## 📁 Project Architecture

```
website/
├── public/                # Static public assets
├── src/
│   ├── components/        # React components
│   │   ├── Bestsellers.jsx
│   │   ├── Categories.jsx
│   │   ├── CraftStory.jsx
│   │   ├── Faq.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Icons.jsx
│   │   ├── Journal.jsx
│   │   ├── Ledger.jsx
│   │   ├── Marquee.jsx
│   │   ├── Reels.jsx
│   │   ├── ShopCta.jsx
│   │   ├── ShopTheLooks.jsx
│   │   ├── Showcase.jsx
│   │   ├── Spotlight.jsx
│   │   ├── Testimonials.jsx
│   │   └── Trousseau.jsx
│   ├── styles/
│   │   └── global.css     # Global CSS design tokens, resets & layout rules
│   ├── App.jsx            # Main app assembly & GSAP reveal triggers
│   └── main.jsx           # Entry point
├── index.html             # HTML entry point with metadata & SVG favicon
├── package.json
└── vite.config.js         # Vite configuration
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18.0.0 or higher recommended)
- **npm** (v9.0.0 or higher)

### Installation & Execution

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

---

## 📄 License
© 2026 Novera Audio Inc. All rights reserved.
