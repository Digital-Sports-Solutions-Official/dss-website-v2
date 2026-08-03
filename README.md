# Digital Sports Solutions — Web Application

A modern, high-performance web platform built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**. Designed with a refined dark-mode aesthetic, modular architecture, and precise layout primitives.

---

## 🎨 Design System & Visual Identity

This codebase adheres to a strict dark-mode design specification:

* **Primary Colors:**
  * `#FD955D` — Accent Orange (Highlights, badges, hover borders)
  * `#FF1900` — Accent Red (Special callouts and secondary accents)
* **Backgrounds:**
  * `#181818` — Primary Page Background
  * `#202020` / `#222222` — Card and Container Surfaces
  * `#121212` — Dark Inset Frames
* **Typography & Icons:**
  * Tailwind Sans & Mono font pairings with explicit hierarchy scaling
  * **FontAwesome 6 Free** (`fas`) icon integration

---

## 🛠️ Tech Stack

* **Framework:** [Next.js](https://nextjs.org) (App Router)
* **Language:** [TypeScript](https://www.typescript.org)
* **Styling:** [Tailwind CSS](https://tailwindcss.com)
* **Icons:** FontAwesome Free Solid Icons

---

## 📁 Repository Structure

```text
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── services/
│   │   │   ├── data/           # Data services landing page
│   │   │   └── web-mobile/     # Web & Mobile engineering page
│   │   ├── tinyleague/         # Showcase / Product page
│   │   ├── layout.tsx          # Root layout & providers
│   │   └── page.tsx            # Homepage
│   ├── components/             # Reusable UI Component Library
│   │   ├── Button.tsx          # Custom primary/secondary buttons
│   │   ├── Card.tsx            # Multi-variant card components
│   │   ├── LayoutPrimitives.tsx# PageWrapper, Section, ContentContainer, Rule
│   │   ├── ServicePageTemplate.tsx # Template for core service pages
│   │   ├── Typography.tsx      # Standardized heading & caption components
│   │   └── Footer.tsx          # Main site footer
│   └── public/                 # Static assets & webp image showcases
└── tailwind.config.js          # Extended color palette & styling rules