# Pending: Trademark ™ on Logo Assets

**Status: NOT DONE — blocked on designer delivery.**
Last updated: August 15, 2026

---

## What is outstanding

No ™ symbol is currently visible next to **any logo** on the website. The only trademark
coverage on-screen today is the notice paragraph in the site footer and the Intellectual
Property section in the Terms of Service.

The JSX superscript wrapper described as "Priority 3" in `DSS_Trademark_Update_Plan.md` was
**deliberately not implemented**. The designer is regenerating every asset in DSS_LOGOPACK and
tinyLeague_LOGOPACK with ™ in the bottom-right corner of the artwork. Adding a JSX superscript
now would produce a double ™ once those files land.

## Verified state of the current assets

- All four SVGs (`dss-combination-mark-white.svg`, `logo-white.svg`, `logo-color.svg`,
  `logo-black.svg`) are pure vector paths. They contain no `<text>` or `<tspan>` elements, so
  no ™ or ® is embedded in any of them.
- `tinyLeague_CombinationMark_fullcolorInWHITE.png` has no ™ in the artwork.
- **Zero ® characters exist anywhere in this repository** (verified byte-level across `src/`,
  `public/`, and `docs/`). The ® problem noted in the trademark plan applies to external
  marketing files only, not to anything in this codebase. Nothing here needs to be corrected
  from ® to ™.

---

## Every on-screen logo location awaiting updated artwork

| # | Where it appears | Code location | Asset file | Mark |
|---|---|---|---|---|
| 1 | Navigation bar — **every page**, top of every specimen screenshot | [Navigation.tsx:127-131](src/components/Navigation.tsx#L127-L131) | `dss-combination-mark-white.svg` | DSS Combination Mark |
| 2 | Footer — **every page** | [Footer.tsx:31-35](src/components/Footer.tsx#L31-L35) | `dss-combination-mark-white.svg` | DSS Combination Mark |
| 3 | Full-screen menu watermark | [Navigation.tsx:198-202](src/components/Navigation.tsx#L198-L202) | `logo-white.svg` | DSS LogoMark |
| 4 | Homepage tinyLeague teaser | [page.tsx:172](src/app/page.tsx#L172) | `tinyLeague_CombinationMark_fullcolorInWHITE.png` | tinyLeague Combination Mark |
| 5 | tinyLeague page header | [tinyleague/page.tsx:44](src/app/tinyleague/page.tsx#L44) | `tinyLeague_CombinationMark_fullcolorInWHITE.png` | tinyLeague Combination Mark |
| 6 | Shared `Logo` component variants | [Logo.tsx](src/components/Logo.tsx) | `logo-white.svg`, `logo-color.svg`, `logo-black.svg` | DSS LogoMark |

Locations 1 and 2 are the highest priority — the navigation logo sits at the top of every
full-page screenshot the attorney will submit as a substitute specimen.

---

## Action when the designer files arrive

1. **Drop the new files into `public/assets/`, keeping the filenames identical.** Every
   location above references its asset by string path, so identical filenames mean zero code
   changes are required.
2. **Decision gate on the JSX wrapper:**
   - If the delivered artwork has a visible ™ — Priority 3 is closed. No code change.
   - If the delivered artwork has **no** ™ — implement the superscript wrapper as specified in
     the "PRIORITY 3" section of `DSS_Trademark_Update_Plan.md`, applied to locations 1, 2,
     and 3 above.
3. Re-check the rendered pages at small viewport sizes; a ™ baked into the bottom-right of the
   artwork can become illegible at the 40–44px logo heights used in the nav and footer.

---

## Later: when ® becomes available

Only the **DSS LogoMark (SN 98819570)** has a Notice of Acceptance. When its registration
certificate is actually issued:

1. Update the footer trademark notice in [Footer.tsx](src/components/Footer.tsx) — change
   "DSS LogoMark™ … accepted for registration, pending issuance" to "DSS LogoMark® is a
   registered trademark of Digital Sports Solutions, LLC."
2. Update the Intellectual Property section in [terms/page.tsx](src/app/terms/page.tsx).
3. Ask the designer to reissue `logo-white.svg`, `logo-color.svg`, and `logo-black.svg` with ®.

**The other four marks stay ™ until their own certificates issue.** Using ® before a
certificate is issued is a federal violation under 15 U.S.C. §1111.
