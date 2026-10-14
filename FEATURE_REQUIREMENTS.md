# Sagnik Bera Portfolio — Permanent Feature Requirements

This document records the user-provided project requirements. A pending item remains a requirement; it is not considered fulfilled until it has been implemented and verified.

## Identity and visual direction

- Use the name **Sagnik Bera** consistently in the site, navigation, metadata, SEO and footer.
- State **3 Years in the Field** accurately.
- Keep a cinematic, premium, nature-inspired editorial visual identity with photography as the focus.
- Provide a cinematic hero using a supplied photograph.

## Photography archive and viewer

- Use the original photographs supplied in `/public/Images`; preserve the originals.
- Include every supplied photograph and organize it into browsable folder-like categories.
- Categories may include Birds, Mammals, Reptiles, Amphibians, Insects, Marine Life, Portraits, Places/Creative and Other, based on the actual images.
- Opening a folder shows its photographs; opening a photograph shows every supplied/verified detail, such as caption, story, species, date, location, camera, lens, settings and dimensions.
- Never fabricate missing metadata; mark unavailable fields clearly or omit them.
- Provide an asymmetric/masonry gallery, fullscreen viewer, zoom/transition, keyboard navigation and mobile swipe support.
- Provide species filtering/search, per-species views, photographs, counts, scientific names only when verified, and dates/locations when supplied.
- Include a dedicated **Made of Moments** story collection.
- Feature the supplied Purbasthali photograph with **24 December 2025** and the user-supplied story about waiting all day on a boat in intense sun and heat.

## Spreadsheet-derived information

- Integrate `sagnikwildlifelens_instagram_analysis.xlsx` when available.
- Centralize spreadsheet data. Preserve verified Instagram statistics, species frequencies and insights.
- Distinguish Instagram species mentions from portfolio photograph counts and total photographed species.
- Provide interactive visualizations where the verified data supports them.

## Photographer introduction

- Include an About Sagnik Bera section with the supplied photographs of Sagnik, role, and three years in the field.
- Keep biography and philosophy editable; use only information supplied by the photographer.

## Gear

- Show the supplied Nikon D7500 and 200–500mm lens.
- Provide a realistic interactive 3D camera/lens with mouse/touch rotation, zoom, idle/cursor/scroll response, realistic lighting and shadows, mobile optimization, and proper resource cleanup.
- Provide camera-body and lens hotspots; desktop hover previews and click/tap specification panels.
- Use only verified gear specifications and include a **Why This Gear** explanation without unsupported personal claims.

## Other portfolio sections

- Expeditions/location map from supplied locations and metadata.
- Verified achievements/awards timeline.
- Field Notes/journal based on real supplied experiences.
- Conservation section based on supplied information.
- Contact form with validation, supplied email/social links, and an email-client handoff.
- Allow the site owner to add and categorize image files later; on this static site, browser-added photos persist in IndexedDB on that device only unless published to the project assets.
- Optional Instagram insights and prints/commissions when verified/implemented.
- Footer with Sagnik Bera identity and working navigation/social links.

## Interaction, accessibility and technical quality

- Preserve and implement intentional motion: transitions, parallax, image/text reveals, scroll triggers, animated stats, custom desktop cursor and loading experience where appropriate.
- Maintain responsive desktop/mobile layouts, semantic/accessibility support, focus states, keyboard interaction, reduced-motion support, lazy loading, image optimization and WebGL performance.
- Keep reusable TypeScript components and SEO metadata.
- Preserve all original user files and update references safely if content is reorganized.


## Current completion boundary

Implemented items are documented in `FEATURE_VERIFICATION.md`; the specification is still not complete. In particular, the Instagram-analysis workbook, verified photo metadata and species mapping, award evidence, and a real contact delivery endpoint were not present in the workspace. No PASS is claimed for these. Browser-level visual/interactions are also pending because no browser automation or installed browser was available.


## Media import note

The newly supplied media archive is preserved in the project-root `media` folder. Browser-ready copies of all 383 still images are included in `public/Images/Media-Imports` and categorized in the archive; videos and subtitle files remain preserved as source assets and are not shown as photographs. Osprey frames selected per the user direction are featured with the Purbasthali story.


A certificate supplied in the media archive verifies a 1st-rank Photography award at Aranya Saptaha 2026 (20 July 2026). The portfolio shows the certificate and an award presentation image. The earlier separate Osprey contest reference is not equated with this award and remains unconfirmed.


The photographer supplied `sagnikbera238@gmail.com` and `https://www.facebook.com/sagnik123456`. These are linked in Contact and the footer; form submissions open a prefilled email draft. The gallery also accepts new JPEG, PNG, WebP and AVIF photos and saves them locally in the current browser.

## Reels archive update (2026-10-14)

The main portfolio has a Reels section linking to the dedicated `reels.html` archive page. The archive imports all 107 videos from `media/reels/`; generated preview posters live in `public/Reel-Posters`. The page includes search and an Add Reels control for MP4/WebM files (up to 200 MB each). Added files persist in IndexedDB in that browser/device only. To publish new reels for all visitors on a static deployment, place them in `media/reels/` and rebuild/redeploy; shared browser uploads need a backend.
