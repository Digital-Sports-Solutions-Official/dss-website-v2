# tinyLeague™ Documentation

The markdown in this folder is the source for the documentation at
**<https://digitalsportssolutions.com/docs>**.

It used to be a separate Docusaurus site. It is now rendered by the main
Next.js app, so there is no second project, no second `package.json`, and no
separate deploy — the docs ship with the website.

```text
docs/
├── versions.json                  # every published version, newest first
└── versioned_docs/
    ├── version-1.1.0/             # newest — served at /docs
    ├── version-1.0.1/             # served at /docs/1.0.1
    └── version-1.0.0/             # served at /docs/1.0.0
```

## Editing

From the **repository root** (not this folder):

```bash
npm install
npm run dev
```

Then open <http://localhost:3000/docs>. Edit any `.md` file under
`versioned_docs/` and the page reloads.

Almost all edits belong in `version-1.1.0/` — the older folders are frozen
snapshots of what shipped with those releases.

## How a page gets its URL

The last part of a URL comes from the frontmatter `id`, **not** the filename.
Everything before it is the folder path.

| File | URL |
| --- | --- |
| `version-1.1.0/index.md` | `/docs` |
| `version-1.1.0/faq.md` (`id: faq`) | `/docs/faq` |
| `version-1.1.0/tinyLeague-app/how-to-install.md` (`id: app-installation`) | `/docs/tinyLeague-app/app-installation` |
| `version-1.0.1/faq.md` | `/docs/1.0.1/faq` |

Renaming a file is safe. **Changing `id` changes the live URL** and breaks
every existing link to that page.

`index.md` is the landing page for its folder. Characters that do not belong in
a URL are dropped from folder names, so `tinyLeague™/` is served under
`/docs/tinyLeague/`.

Links between docs are written unversioned, as `/docs/some/page`. When a reader
is on an older version those are rewritten automatically so they stay in that
version.

## Frontmatter

```yaml
---
id: how-set-up          # required — the URL segment
title: How to set-up    # page heading, browser title, sidebar label
sidebar_position: 4     # order within the folder, ascending
hide_title: true        # optional — skip the auto <h1>
sidebar_label: Setup    # optional — shorter label for the sidebar only
description: …          # optional — meta description for search engines
---
```

## Sidebar

The sidebar is generated from the folder tree. Each folder needs a
`_category_.json`:

```json
{ "label": "Founders Edition", "position": 3 }
```

`position` orders the folder among its siblings; `sidebar_position` in a page's
frontmatter orders pages within a folder. The two share one numbering per
level, so a folder at `position: 3` and a page at `sidebar_position: 4` appear
in that order.

## What you can write

Standard markdown, plus:

**Admonitions** — `note`, `tip`, `info`, `caution`, `warning`, `danger`, with
an optional title after the type:

```md
:::caution
Only use the included battery bank.
:::

:::tip Use Case
Practising alone? Start here.
:::
```

**Tabs**

```md
<Tabs>
  <TabItem value="founders" label="Founders Edition" default>
    Content for the first tab.
  </TabItem>
  <TabItem value="pro" label="Pro Edition">
    Content for the second tab.
  </TabItem>
</Tabs>
```

**Images** — plain `<img>` with an absolute URL. Product photography lives in
the [DSS-assets](https://github.com/Digital-Sports-Solutions-Official/DSS-assets)
repository:

```md
<img
  src="https://raw.githubusercontent.com/Digital-Sports-Solutions-Official/DSS-assets/main/img/Product_Photos/Founders_Edition_Front.png"
  alt="Founders Edition"
  style={{ maxWidth: '90%' }}
/>
```

`<ImageSwitcher lightSrc="…" darkSrc="…" alt="…" />` still works. The site is
dark-only, so it shows `darkSrc`.

**Tables**, GitHub-flavoured. Inline HTML and JSX with `style={{ … }}` also
work.

### What no longer works

Leftovers from Docusaurus that are ignored or removed at build time:

- `import` statements — `Tabs`, `TabItem` and `ImageSwitcher` are always
  available, so the old `import … from '@theme/Tabs'` lines are simply dropped.
  Other imports are not supported.
- `useBaseUrl(...)` — unnecessary; write the URL directly.
- `<!-- HTML comments -->` — use `{/* … */}` instead.
- Event handlers such as `onMouseOver={...}`. Documentation pages render on the
  server, so they cannot carry JavaScript. Hover effects on download buttons
  come from CSS.
- Do not wrap markdown in a `<p>` tag. Use `<div>` — a `<p>` containing block
  content is invalid HTML.

## Publishing a new version

1. Copy the newest folder: `cp -r versioned_docs/version-1.1.0 versioned_docs/version-1.2.0`
2. Add the new version to the **front** of `versions.json` — the first entry is
   the one served at `/docs` with no version prefix.
3. Edit the new folder. The previous version freezes as an archive at its own
   URL.

Older versions are marked `noindex`, so search engines keep pointing at the
current docs.

## How it is rendered

| Concern | Where |
| --- | --- |
| Page route, prev/next, version banner | `src/app/docs/[[...slug]]/page.tsx` |
| Typography and prose styling | `src/app/docs/[[...slug]]/docs.css` |
| Version list, sidebar tree, URL rules | `src/lib/docs/content.ts` |
| Markdown compilation and compatibility fixes | `src/lib/docs/mdx.ts` |
| Sidebar, table of contents, tabs, admonitions | `src/components/docs/` |

Every page is prerendered at build time, so a malformed page fails
`npm run build` rather than reaching production.
