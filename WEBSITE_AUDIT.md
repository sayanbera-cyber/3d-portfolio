# Sagnik Bera Portfolio Website Audit

**Audit date:** 2026-10-13  
**Audit scope:** 25 requirement groups (A–Y) in the user's full audit prompt, plus build/runtime checks.  
**Result:** 1 PASS, 23 PARTIAL, 1 BLOCKED. The whole specification is not complete; external content and browser interaction testing remain outstanding.

## Repository facts

- Vite + React + TypeScript single-page project; no router or separate pages.
- `public/Images` contains the original photo library plus 383 web-ready imports from the new media archive (355 converted HEIC and 28 JPEG files). The 727 source media files, including videos and subtitles, are preserved in root `media`; no workbook or `public/models` directory was found.
- Image inventory has no usable capture dates; four portrait EXIF GPS blocks contain NaN coordinates. The image manifest now has 626 unique paths, all matching files under `public/Images`.
- The workbook named in the request is not in this checkout. Values and reel species/frequencies are transcribed from the user's earlier brief and explicitly labeled as such.
- No email address, form endpoint or confirmed award evidence was supplied. The user directed that the new Osprey photos be featured with the Purbasthali story; 27 Osprey-tagged frames are now included in the archive.
- `npm run build` passes. It emits a lazy 3D vendor chunk of about 746 kB minified / 192 kB gzip; Vite warns it exceeds the default 500 kB chunk threshold.
- HTTP checks returned 200 for the running page and representative supplied images. No browser automation or installed lint/test script is available.

## Requirement-by-requirement status

| ID / requirement group | Status | Current result, remaining work and affected files | Verification |
|---|---|---|---|
| A. Identity, name, 3 years, SEO and visual brand | PARTIAL | Name and role are consistent in `src/App.tsx` and `index.html`; SEO/OpenGraph/person metadata now identify Sagnik. Rich site presentation is implemented, but visual rendering has not been browser-reviewed. | Source scan, build. |
| B. Cinematic hero | PARTIAL | Real archive image, Sagnik identity, headline, both CTAs, scroll cue and reduced-motion-aware parallax are in `src/App.tsx` and `src/styles.css`; actual browser/responsive presentation remains unverified. | Build, image URL 200; browser unavailable. |
| C. Three Years introduction | PARTIAL | Dynamic years, supplied portrait introduction, reveal animation and editable profile data are in `src/App.tsx` and `src/content.ts`. Biography remains intentionally limited to supplied facts. | Build/source review; no browser review. |
| D. Spreadsheet and Instagram statistics | BLOCKED | Centralized figures/counters and source labels are in `src/content.ts`; the actual `.xlsx` is absent, so sheets, post-level insights and figures cannot be reconciled. Add/import the workbook and update this data layer. | Repository inventory; build. |
| E. Species visualization | PARTIAL | Interactive SVG orbit, frequency-sized nodes, search and detail dialog are in `src/App.tsx` using `src/content.ts`. Frequencies come from the pasted summary; workbook-level verification and browser interaction remain. | TypeScript/build; browser unavailable. |
| F. Species I've Met | PARTIAL | All 19 supplied analyzed-reel names, search and detail views are implemented. Species-to-photo matching, scientific names, portfolio species counts, dates and locations remain unverified; no names were guessed. Update `src/content.ts` and `src/data.ts` when IDs are confirmed. | Source/build; all 626 image paths verified; 27 imported Osprey frames tagged. |
| G. Made of Moments | PARTIAL | Dedicated stories, full-screen story dialog and a reusable optional photo metadata schema exist in `src/App.tsx`, `src/content.ts`, `src/data.ts`. Most images have no captions/stories/EXIF; only supplied context is shown. | Build; no browser test. |
| H. Purbasthali featured story | PARTIAL | Correct place, date, title and supplied waiting story are paired with three Osprey frames in `src/content.ts` and `src/App.tsx`. Twenty-seven imported Osprey frames carry the supplied Purbasthali story metadata and appear in the Birds archive. | Build/source review; user-directed Osprey photo selection implemented; exact frame-by-frame capture dates/settings remain unavailable. |
| I. Interactive gallery | PARTIAL | Folder view, all original files, search, category filter, asymmetric layout, zoom, full-screen details, keyboard and touch navigation are in `src/App.tsx`/`src/styles.css`. Browser interactions remain untested. | Manifest path comparison, build, representative HTTP 200. |
| J. Interactive 3D camera | PARTIAL | Procedural React Three Fiber camera/lens with orbital drag, wheel zoom, idle turn, pointer response, hotspots and offscreen unmount is in `src/components/CameraExperience.tsx` and `src/App.tsx`. No licensed GLB exists; runtime interactions have not been browser-tested. | TypeScript/build; browser unavailable. |
| K. Camera/lens hover specifications | PARTIAL | Hover/click/touch panels use manufacturer specs and links in `src/components/CameraExperience.tsx` and `src/content.ts`. Actual pointer/touch behavior still needs browser verification. | Source/build; official Nikon links embedded. |
| L. Why This Gear | PARTIAL | Dedicated general-use explanation and Nikon source links are in `src/App.tsx`; photographer-specific claims are omitted. Browser view unverified. | Build/source review. |
| M. Expeditions/map | PARTIAL | Purbasthali is shown on an OpenStreetMap embed/link in `src/App.tsx`; this is the only project-brief location. Per-photo locations/species/date panels remain unavailable. External map loading was not tested. | Source/build; map service network not browser-tested. |
| N. Achievements and awards | PARTIAL | A dated Aranya Saptaha 2026 first-rank photography award, certificate image and presentation photo are shown in the Achievements section. The separate Osprey district contest claim remains unconfirmed. | Supplied certificate visually reviewed; build/source review. |
| O. Field Notes/journal | PARTIAL | Journal card and full-screen field story use only the supplied Purbasthali context in `src/content.ts`/`src/App.tsx`. Additional real article content is not supplied. | Build/source review. |
| P. Conservation | PARTIAL | Purpose section and supplied archive photo appear in `src/App.tsx`; it makes no invented statistics or partnership claims. More photographer-specific information is unavailable. | Build/source review. |
| Q. About Sagnik Bera | PARTIAL | Six supplied portraits, intro, role, three years, gear and Instagram are in `src/App.tsx`/`src/data.ts`. Detailed biography/philosophy was not supplied. | Six assets visually reviewed; build and HTTP image check. |
| R. Contact form/social | PARTIAL | The supplied email and Facebook/Instagram are linked; the validated form creates a prefilled `mailto:` draft. No server-side form delivery exists. | Build/source review; email-client launch is browser-dependent. |
| S. Navigation/footer | PARTIAL | Main section links, mobile menu and footer links exist in `src/App.tsx`; active section is source-driven. Browser and mobile navigation behavior remains unverified. | Build/source review. |
| T. Custom cursor/interactions | PARTIAL | Desktop VIEW/EXPLORE/OPEN cursor labels and touch/reduced-motion hiding are in `src/App.tsx`/`src/styles.css`; no magnetic effect was added and browser behavior is untested. | Build/source review. |
| U. Transitions/animations/loading | PARTIAL | Image parallax, reveal observer, stat counters, hover transitions, immediate loading overlay and reduced-motion support are implemented. No artificial delay. Actual motion quality remains unreviewed in a browser. | Build/source review. |
| V. Optional sound | PASS | No ambient sound or audio assets exist; therefore no autoplay or audio control is introduced. | Asset inventory. |
| W. Instagram insights | PARTIAL | Optional expandable insights use centralized summary values and labels in `src/content.ts`/`src/App.tsx`. Detailed analytics require the absent workbook. | Build/source review. |
| X. Prints/commissions | PARTIAL | Print enquiry is included as a contact subject; no fake prices, availability or payment are shown. Fulfillment details need user data/contact endpoint. | Source review. |
| Y. SEO/accessibility/responsive/performance | PARTIAL | Metadata, OpenGraph image, Person JSON-LD, alt text, semantic regions, focus trap, keyboard dialogs, reduced-motion, lazy images, WebGL code split and responsive CSS are in `index.html`, `src/App.tsx`, `src/styles.css`, `vite.config.ts`. Browser/device matrix, console audit, map request, and large 3D chunk review remain. | TypeScript/build; HTTP checks; browser automation unavailable. |

## Prioritized remaining work

1. Add `sagnikwildlifelens_instagram_analysis.xlsx`; reconcile every sheet and derived value, then replace brief-transcribed summary data.
2. Confirm remaining photo-to-species mappings, locations, dates, scientific names and captions; populate `src/data.ts` only from verified information.
3. Supply achievement evidence, biography, email and/or backend endpoint to finish the blocked content/submission requirements.
4. Browser-test gallery/folder navigation, modal focus/zoom/swipe, SVG node selection, camera rotation/zoom/hotspots, OSM embed, contact validation, reduced-motion and responsive widths.
5. Review the 746 kB lazy 3D vendor chunk and decide whether additional asset compression or a licensed GLB is available.


## 2026-10-13 implementation update

The current implementation is served locally at `http://127.0.0.1:5173/`. HTTP HEAD checks returned 200 for the page and the Vite-served `src/App.tsx` module. `npm run build` completed successfully (TypeScript plus Vite production build). The lazy Three.js core chunk remains 745.99 kB minified / 191.97 kB gzip and triggers Vite's default chunk-size warning. No browser was available for visual or interaction review, so that verification remains pending.


## New media archive update

The 383 still images were categorized into the existing archive folders. The original export remains preserved in root `media`; the gallery uses converted JPEG copies in `public/Images/Media-Imports` because browser support for HEIC is inconsistent. Video and subtitle files are kept with the originals and are not treated as still photos. The Purbasthali story now features three distinct Osprey frames; all 27 reviewed Osprey files are included in Birds.


The Instagram profile link now uses the supplied canonical URL: `https://www.instagram.com/sagnikwildlifelens/`. The achievement image and certificate details come from the supplied Aranya Saptaha certificate; the unrelated Osprey contest mention remains unverified.


The photographer supplied `sagnikbera238@gmail.com` and `https://www.facebook.com/sagnik123456`; both are wired into the contact/footer links and Person metadata. New JPEG/PNG/WebP/AVIF files can be added and categorized through the gallery; browser uploads persist in IndexedDB on the current device only. A shared/public upload service would require a backend.

## Reels archive update (2026-10-14)

Added a Reels preview section on the portfolio and a dedicated `reels.html` page containing the 107 MP4 files from `media/reels/`, with generated posters in `public/Reel-Posters`. The separate page includes search and an Add Reels control. Later additions save in IndexedDB in the current browser/device only; a static-site public update requires adding the video to project assets and rebuilding/redeploying, or a backend upload service. The production build completed successfully. The local dev server was not running during the route check; browser-level visual and upload behavior remains unverified.
