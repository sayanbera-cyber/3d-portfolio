# Feature Verification Register

| Feature | Implementation | Status | Verification performed | Remaining limitation |
|---|---|---|---|---|
| Identity, three years, SEO/OpenGraph | `index.html`, `src/App.tsx`, `src/content.ts` | Partial | Source audit and TypeScript/build | Browser appearance not reviewed |
| Hero and CTAs | `src/App.tsx`, `src/styles.css` | Partial | Build; hero image route returned HTTP 200 | Browser/parallax behavior not tested |
| Folder categories and full archive | `src/data.ts`, `src/App.tsx`, `src/styles.css` | Implemented | Manifest comparison: 626 files, 626 unique valid public paths (243 original plus 383 imported); Achievements folder added | Photo-to-species tagging remains open |
| Full-screen photo details, keyboard, touch, zoom | `src/App.tsx`, `src/data.ts` | Implemented | TypeScript/build and source review | Runtime interactions not browser-tested; metadata absent in source archive |
| Sagnik About portraits | `public/Images/Sagnik`, `src/data.ts`, `src/App.tsx` | Implemented | All six portraits visually reviewed; portrait route returned 200 | No portrait date/location supplied |
| Central profile/statistics data | `src/content.ts` | Partial | Build and source audit | Uses pasted summary; workbook absent |
| Animated counters and optional creator insights | `src/App.tsx`, `src/content.ts` | Partial | Build/source review | Workbook-derived details and browser animation test missing |
| Analyzed-species list and frequency diagram | `src/content.ts`, `src/App.tsx` | Partial | Build/source review; 19 names present | Frequencies need workbook reconciliation; no portfolio-photo mapping |
| Species search and detail panel | `src/App.tsx` | Partial | Build/source review | Browser interaction and verified species/photo matches pending |
| Made of Moments story framework | `src/content.ts`, `src/App.tsx` | Partial | Build/source review | Most photos lack supplied story/metadata |
| Purbasthali date/title/story | `src/content.ts`, `src/App.tsx` | Implemented | Build/source review; three Osprey frames featured and 27 tagged in archive | Individual EXIF capture settings unavailable |
| Procedural 3D Nikon camera/lens | `src/components/CameraExperience.tsx` | Partial | TypeScript/build; dynamic chunk emitted | Drag/zoom/idle and no-WebGL runtime behavior not browser-tested |
| Verified hover/click/touch gear facts | `src/components/CameraExperience.tsx`, `src/content.ts` | Partial | Nikon source URLs included; TypeScript/build | Interaction browser-test pending |
| Why This Gear | `src/App.tsx` | Partial | Build/source review | No personal claims; runtime visual check pending |
| Purbasthali map | `src/App.tsx` | Partial | Build/source review | External OpenStreetMap embed not browser/network tested |
| Achievements | `src/content.ts`, `src/data.ts`, `src/App.tsx`, `src/styles.css` | Implemented | Certificate image and presentation photo visually reviewed; TypeScript/build | Separate Osprey contest claim remains unconfirmed |
| Journal / Field Notes | `src/content.ts`, `src/App.tsx` | Partial | Build/source review | Only supplied Purbasthali story is available |
| Conservation section | `src/App.tsx` | Partial | Build/source review | No photographer-specific claims/data supplied |
| Contact form and social links | `src/App.tsx`, `src/content.ts`, `index.html` | Partial | Build/source review; mailto draft, supplied email, Instagram and Facebook URLs added | Sending requires a configured email app; no server-side delivery |
| Navigation and mobile menu | `src/App.tsx`, `src/styles.css` | Partial | Build/source review; Achievements anchor added | Browser interaction not tested |
| Custom cursor | `src/App.tsx`, `src/styles.css` | Partial | Build/source review | Desktop hover and touch hiding not browser-tested |
| Reveals, parallax, loading, reduced motion | `src/App.tsx`, `src/styles.css` | Partial | Build/source review | Motion quality not browser-tested |
| Optional sound | None | Pass | Asset inventory found no sound files; no audio is played | Not applicable |
| Prints/commissions | `src/App.tsx` | Partial | Contact subject option source-reviewed | No pricing, availability or fulfilment data supplied |
| Responsive/accessibility/performance/SEO | `src/styles.css`, `src/App.tsx`, `index.html`, `vite.config.ts` | Partial | TypeScript/build; page and sample image HTTP 200 | Browser/device matrix and console inspection unavailable; 746 kB lazy Three chunk (192 kB gzip) |
| Add and categorize photos in browser | `src/photoStorage.ts`, `src/App.tsx`, `src/styles.css` | Partial | IndexedDB storage, MIME/type/size checks, image dimensions, and dynamic category/gallery integration reviewed; production build passes | Device/browser-local only; public deployment requires adding assets to the project and rebuilding |
| Production build | `package.json`, `vite.config.ts` | Pass | `npm run build` passed TypeScript and Vite bundling | Vite reports a large but lazy Three.js chunk |
| Browser regression suite | — | Not run | No browser automation/installed browser found | Manually test interactions on desktop and touch devices |
| Lint/tests scripts | `package.json` | Not available | Script inventory contains dev/build/preview only | Add lint/test tooling if desired; no tests were claimed |



## New media import verification

The image manifest contains 626 unique paths, all matching local files. This includes 383 converted stills from the new archive: 355 HEIC sources and 28 JPEG sources. The original `media` export remains preserved at the project root (727 files total, including 312 videos and 32 subtitle files). Osprey images were visually reviewed from contact sheets; 27 are tagged as Osprey and three distinct frames are featured in Purbasthali. `npm run build` passed after the import; Vite still reports the lazy Three.js chunk size warning.


The supplied Instagram URL is now used from the shared profile data and in Person structured metadata. The achievement certificate supports a 1st-rank Photography award at Aranya Saptaha 2026, dated 20 July 2026; separate Osprey contest details remain unverified.


| Reels archive and add control | `src/App.tsx`, `src/ReelsPage.tsx`, `src/reelsData.ts`, `src/reelStorage.ts`, `reels.html` | Implemented | Production build emitted the dedicated page and 107 reel videos | Browser interactions not tested; future browser additions are local to that device unless deployed as project assets/backend |
