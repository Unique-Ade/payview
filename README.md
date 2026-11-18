# PayView

Compare what a tech role pays across countries, using live job-market data from the [Adzuna API](https://developer.adzuna.com/).

**Live demo:** https://payview-app.vercel.app/

(Payview%20Image.PNG)

## What it does

- Search a role (for example "Backend Developer") and a country.
- The searched country appears first, followed by popular markets, up to four in total.
- Shows average annual pay and the number of matching listings per market.
- Tells you when a role has no data, or when a country isn't supported, instead of showing broken numbers.

## How it works

```
URL (?role=...&country=...)
  -> page.tsx reads searchParams (Server Component)
  -> findCountryByName("Canada") -> "ca"
  -> buildMarkets("ca") -> ["ca", "us", "de", "gb"]
  -> jobRoleComparison(role, markets)   # one Adzuna request per market, in parallel
  -> reshape into CountrySalary[]       # missing salary becomes null
  -> Hero / Salarycard / Markets / Stats
```

The search form is a GET form (`next/form`), so every search is a shareable URL and the page is rendered on the server.

## Tech stack

- Next.js (App Router, Server Components) and TypeScript
- Tailwind CSS
- Vitest for unit tests
- Deployed on Vercel

## Getting started

```bash
npm install
cp .env.example .env.local   # then add your Adzuna credentials
npm run dev
```

You need an Adzuna API `app_id` and `app_key` ([get them here](https://developer.adzuna.com/)). Set them in `.env.local` using the variable names read in `lib/adzuna.ts`.

```bash
npm test         # unit tests
npm run build    # production build
```

## Project structure

```
app/            page.tsx (data + composition), error.tsx
components/     Hero, Salarycard, Markets, Stats, CtaBand, HowItWorks, SubmitButton
lib/            adzuna.ts (API), countries.ts (supported markets), format.ts, types.ts
```

## Design decisions

- **Server Components for data.** Credentials stay on the server and the page ships little client JavaScript. The only client component is the submit button, which shows a pending state.
- **Search state lives in the URL.** Searches are bookmarkable and shareable, and the server renders exactly what the URL describes.
- **`null` means "no data".** Adzuna omits `mean` when it finds nothing. Normalising that into `salary: number | null` forces every component to handle the empty case instead of rendering `NaN`.
- **Validation at the boundary.** Typed country names are matched against a list of Adzuna-supported countries; unmatched input produces a clear message rather than a silent fallback.

## Known limitations

- **Average, not median.** Adzuna exposes a mean, which is sensitive to outliers.
- **Local currencies.** Pay is shown in each market's currency and is not converted, so rows are not directly comparable.
- **Coverage.** Only countries supported by Adzuna can be searched (for example, Nigeria is not available).
- **Sample size.** Listing counts come from Adzuna's search results for the role text entered, so unusual job titles may match few or no listings.

## Roadmap

- Convert salaries to a common currency and add a "vs first market" comparison.
- Handle partial failures (show markets that responded when one request fails).
- Role autocomplete.

## Data

Job data provided by [Adzuna](https://www.adzuna.com/).
