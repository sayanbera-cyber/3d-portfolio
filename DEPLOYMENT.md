# Free deployment plan

## Fit for this portfolio

- **Website hosting:** Cloudflare Pages, deploying the Vite `dist` directory. The current build has 850 output files. The largest archived reel is about 12.2 MB, under Cloudflare Pages' 25 MiB per-file limit. The current reel archive (~239.5 MB) is included as static site assets.
- **Database and future shared media:** Supabase Free (Postgres + Storage + Auth). The free plan currently lists 500 MB of database, 1 GB of file storage, and 5 GB of egress. The existing archive stays on Pages, so it does not consume Supabase storage. New public uploads would consume the 1 GB Supabase storage allowance.
- **Current behavior:** The website's Add Photos and Add Reels controls currently save only in the browser/device using IndexedDB. They are not connected to a shared database or cloud storage yet. Do not publish Supabase service-role keys in the website; owner-only upload access must use authentication and database/storage policies.

Provider quotas and free-plan behavior can change. Supabase currently pauses Free projects after a week of low activity, so an infrequently used portfolio may need the project resumed from its dashboard.

## Deploy the current website (Cloudflare Pages)

1. Create/sign into a Cloudflare account and open **Workers & Pages**.
2. Create a Pages project. For a quick first deployment, use **Direct Upload** and upload the contents of this project's `dist` folder after running `npm.cmd run build`.
3. If setting up Git-based deployment, first put the project in a GitHub repository, then connect that repository to Pages with build command `npm run build` and output directory `dist`.
4. The build creates both `index.html` and `reels.html`; confirm both the site root and `/reels.html` load on the deployed `pages.dev` address.

Cloudflare Direct Upload projects cannot later be switched to Git integration in place; create a Git-integrated Pages project if automatic deployment on every push is wanted.

## Connect a shared Supabase media database

This requires a Supabase account/project and a one-time owner-authenticated upload implementation. Set up the project and provide only its **Project URL** and **publishable/anon key** for frontend configuration. Never send or commit a service-role key. The owner's email (`sagnikbera238@gmail.com`) should be the only account permitted to upload or change portfolio media; public visitors should have read-only access.

After the project exists, the integration needs to add tables for photo/reel metadata, public read policies, an owner-only Auth flow, and public Storage buckets with upload rules. The browser upload controls can then upload media and metadata so additions appear to every visitor. The existing 107 reels can remain hosted from the project's static assets.

## Provider references

- Cloudflare Pages [build configuration](https://developers.cloudflare.com/pages/configuration/build-configuration/), [limits](https://developers.cloudflare.com/pages/platform/limits/), and [Git integration](https://developers.cloudflare.com/pages/get-started/git-integration/).
- Supabase [pricing](https://supabase.com/pricing), [free project pausing](https://supabase.com/docs/guides/platform/free-project-pausing), and [Storage access control](https://supabase.com/docs/guides/storage/security/access-control).
