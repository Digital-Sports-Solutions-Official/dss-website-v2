# Next.js 14 Web Architecture

A production-ready Next.js 14 application built using the **App Router**, **TypeScript**, **Tailwind CSS**, and optimized architecture conventions.

## 📁 Project Architecture

```text
├── public/
│   └── assets/          # Static assets (images, fonts, logos, videos)
├── src/
│   ├── app/             # App Router (pages, layouts, error boundaries, routing)
│   ├── components/      # Reusable UI components
│   │   └── ui/          # Low-level primitive design elements (Atomic UI)
│   ├── lib/             # Third-party configurations, utility functions, SDKs
│   └── styles/          # Global styles, animations, and typography tokens