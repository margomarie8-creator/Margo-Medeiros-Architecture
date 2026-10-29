# SEO audit — Margo Medeiros Architecture

## Current decisions

- **Login retained:** The user has decided to keep the login page and existing portfolio login gate.
- **robots.txt approved for publication:** `User-agent: Google-Extended` with `Disallow: /`. This applies to Google-Extended’s covered AI uses and does not block Googlebot search crawling. It does not guarantee search indexing or opt out of every AI provider.
- **Robots commit:** `BA6: robots.txt crawler preferences`. SEO.md remains excluded from Vercel through .vercelignore.
- **Robots policy check:** `BA6: verify robots.txt crawler policy`. Local policy validated; live HTTP check still times out on this connection.

Audit date: October 29, 2026. Local source baseline: Git commit `83e8eff`; baseline document commit `8597806`. Current implementation source checked at `2e90c17`. Baseline observations are retained below. The approved Page titles, Meta descriptions, Headings, Image alt text, About page, Project summaries, Credibility, Internal links, Person/CreativeWork schema and robots.txt items have since been implemented.

## Current implementation status — October 29, 2026

Rechecked against the actual local production files at commit `2e90c17`. All ten requested checklist items are implemented locally and their implementation commits have been pushed. This is a source-level verification, not proof of a completed Vercel deployment or current search indexing. Live HTTP checks and live SEO.md exclusion remain unverified because of network timeouts.

The **Before** entries below intentionally preserve the original baseline; they are historical, not the current text. **Change**, **Why** and **Commit** record each approved item. The current page inventory and snapshot below show the post-change files.

| Item | Status | Implementation commit |
| --- | --- | --- |
| 1. Page titles | Implemented; source checked | 1d4ee96 |
| 2. Meta descriptions | Implemented; source checked | 1a65885 |
| 3. Headings | Implemented; source checked | 807ef58 |
| 4. Alt text | Implemented; source checked | a823622 |
| 5. About page | Implemented; source checked | 6d72c37 |
| 6. Project summaries | Implemented; source checked | ed9bdd7 |
| 7. Credibility | Implemented; source checked | 3018587 |
| 8. Internal links | Implemented; source checked | e186f02 |
| 9. Person and CreativeWork schema | Implemented; source checked | 07e8884 |
| 10. robots.txt | Implemented; source checked | 99ceb7f; policy check 2e90c17 |

There are 7 authored pages, each with one H1 and a non-empty title and description; 23 displayed image instances, all with non-empty approved alt text; one top-level Person block on About; and one top-level CreativeWork block on each of the three project pages. Project creator references point to the same About Person identity. Home links directly to every project; each project links to Home and About. All local file link targets exist.

The About page includes the approved introduction, Fall 2026 coursework with both ARC 101 faculty in one bullet, ARC 111 faculty, and confirmed individual authorship. Each project has an approved opening summary and individual-work credit. Full original reflection paragraphs are retained. The login page and client-side portfolio gate remain in place.

robots.txt contains only the Google-Extended opt-out group (plus its comment); it does not contain a blanket wildcard disallow. SEO.md remains excluded by /SEO.md in .vercelignore.

Additional audit observations are not part of the ten implemented items: canonical tags and sitemap.xml remain absent locally; Open Graph titles/descriptions retain their earlier wording rather than mirroring the updated standard title/meta-description tags. No fixes for those extra observations were applied.

## Page inventory and signed-out access

| Page | Address | What a signed-out visitor can see |
| --- | --- | --- |
| Log In to the Portfolio \| Margo Medeiros | https://margo-medeiros-architecture-alpha.vercel.app/login.html | Public login/sign-up interface. |
| Architecture Portfolio \| Margo Medeiros | https://margo-medeiros-architecture-alpha.vercel.app/index.html | By design, portfolio content is hidden and auth.js redirects to login.html. Raw HTML/assets have no server-side access gate in this static implementation; live behavior was not reverified. |
| Architecture Projects \| Margo Medeiros | https://margo-medeiros-architecture-alpha.vercel.app/projects.html | By design, portfolio content is hidden and auth.js redirects to login.html. Raw HTML/assets have no server-side access gate in this static implementation; live behavior was not reverified. |
| About Margo Medeiros \| Architecture Student | https://margo-medeiros-architecture-alpha.vercel.app/about.html | By design, portfolio content is hidden and auth.js redirects to login.html. Raw HTML/assets have no server-side access gate in this static implementation; live behavior was not reverified. |
| Between House \| Margo Medeiros | https://margo-medeiros-architecture-alpha.vercel.app/between-house.html | By design, portfolio content is hidden and auth.js redirects to login.html. Raw HTML/assets have no server-side access gate in this static implementation; live behavior was not reverified. |
| Analysis of Urban Form and Tracing Exercises \| Margo Medeiros | https://margo-medeiros-architecture-alpha.vercel.app/project-2.html | By design, portfolio content is hidden and auth.js redirects to login.html. Raw HTML/assets have no server-side access gate in this static implementation; live behavior was not reverified. |
| Street Smarts \| Margo Medeiros | https://margo-medeiros-architecture-alpha.vercel.app/project-3.html | By design, portfolio content is hidden and auth.js redirects to login.html. Raw HTML/assets have no server-side access gate in this static implementation; live behavior was not reverified. |

The root address https://margo-medeiros-architecture-alpha.vercel.app/ serves the same home document as index.html; it is not an additional authored page. No other top-level HTML pages exist in this checkout. The 585 folder is a second local Git checkout, not a second set of published pages. Local work/ previews are untracked review artifacts, not production pages.

## Current page snapshot — source values

### login.html

- **Title:** “Log In to the Portfolio | Margo Medeiros”
- **Meta description:** “Log in or create an account to view Margo Medeiros’s architecture portfolio.”
- **Headings:** H1 “Welcome to the portfolio.”
- **Displayed image alt text:** No displayed images.
- **Schema:** No top-level JSON-LD block.

### index.html

- **Title:** “Architecture Portfolio | Margo Medeiros”
- **Meta description:** “Explore Margo Medeiros’s architecture portfolio through drawings, physical models, sketches, and photography.”
- **Headings:** H1 “Ideas take shape.”; H2 “Selected work”; H2 “Portfolio introduction”
- **Displayed image alt text:** `images/physical-model.png`: “Between House model showing exposed stairs and a pitched roof.”; `images/project-2/map-cover.jpg`: “Hand-drawn plan of St. Augustine showing streets, trees, and the fort.”; `images/project-3/site-photograph.jpg`: “House and landscaping on South Greenway Drive, Coral Gables.”
- **Schema:** No top-level JSON-LD block.

### projects.html

- **Title:** “Architecture Projects | Margo Medeiros”
- **Meta description:** “View Between House, Analysis of Urban Form and Tracing Exercises, and Street Smarts by Margo Medeiros.”
- **Headings:** H1 “Projects”; H2 “Between House”; H2 “Analysis of Urban Form and Tracing Exercises”; H2 “Street Smarts”
- **Displayed image alt text:** `images/between-house/model-terraces.png`: “Between House model showing projecting terraces and a pitched roof.”; `images/project-2/map-cover.jpg`: “Hand-drawn plan of St. Augustine showing streets, trees, and the fort.”; `images/project-3/site-photograph.jpg`: “House and landscaping on South Greenway Drive, Coral Gables.”
- **Schema:** No top-level JSON-LD block.

### about.html

- **Title:** “About Margo Medeiros | Architecture Student”
- **Meta description:** “Meet Margo Medeiros, a first-year Bachelor of Architecture student at the University of Miami from Boston. Read about her developing skills and architectural interests.”
- **Headings:** H1 “Margo Medeiros”; H2 “About”; H2 “Architectural interests”; H2 “Coursework and credits”
- **Displayed image alt text:** No displayed images; About retains its explicitly labeled portrait placeholder.
- **Schema:** Person
- **Biography:** “I’m Margo Medeiros, a first-year Bachelor of Architecture student at the University of Miami School of Architecture. Originally from Boston, I create physical models, architectural drawings, and sketches through my studio coursework in Miami. My work so far includes physical model making, hand drafting, field sketching, site observation, and AutoCAD drawings. I enjoy turning observations and ideas into work I can build, study, and refine.”
- **Coursework:** “ARC 101: Design I — Faculty: Crystal Torres and Sebastian Eiler”; “ARC 111: Visualization I — Faculty: Maria Cannavo”; “Fall 2026”.

### between-house.html

- **Title:** “Between House | Margo Medeiros”
- **Meta description:** “Explore Between House, Margo Medeiros’s Jutaku House assignment, through physical model photographs and AutoCAD floor plans, elevations, and sections.”
- **Headings:** H1 “Between House”; H2 “Model studies”; H2 “Architectural drawings”; H3 “Floor plans”; H3 “Elevations”; H3 “Sections”
- **Displayed image alt text:** `images/between-house/model-terraces.png`: “Between House model showing projecting terraces and a pitched roof.”; `images/between-house/model-opposite-view.png`: “Opposite view of the Between House model showing terraces and the stair opening.”; `images/between-house/model-stair-volume.png`: “Between House model showing stair flights across multiple levels.”; `images/between-house/model-side-view.png`: “Side view of the Between House model showing stairs, terraces, and the roof.”; `images/between-house/floor-plans.png`: “Three Between House floor plans showing room layouts and stairs.”; `images/between-house/elevations.png`: “Four Between House elevations showing openings, terraces, and roof profiles.”; `images/between-house/sections.png`: “Two Between House sections showing floor levels, stairs, and the pitched roof.”
- **Schema:** CreativeWork
- **Opening summary:** “Between House is a Jutaku home designed for a hypothetical neighborhood, with student-designed homes grouped into blocks by studio, each with 12 students. The brief limited each home to 48 feet in height, 15 feet in width, and 48 feet in depth, while requiring it to respond cohesively to neighboring houses and follow site restrictions. I organized the house around an art studio positioned centrally, both vertically and horizontally—giving Between House its name. The design also prioritizes natural light within the constraints of closely spaced homes.”

### project-2.html

- **Title:** “Analysis of Urban Form and Tracing Exercises | Margo Medeiros”
- **Meta description:** “View Margo Medeiros’s analysis of St. Augustine’s urban form and architectural tracing exercises, with drawings and her written reflections.”
- **Headings:** H1 “Analysis of Urban Form and Tracing Exercises”; H2 “Analysis of Urban Form”; H2 “Tracing Exercises”
- **Displayed image alt text:** `images/project-2/map-cover.jpg`: “Hand-drawn plan of St. Augustine showing streets, trees, and the fort.”; `images/project-2/sheet-3.jpg`: “Hand-drawn plan of St. Augustine showing streets, trees, and the fort.”; `images/project-2/sheet-4.jpg`: “Hand-drawn urban plan showing building footprints, streets, and trees.”; `images/project-2/sheet-5.jpg`: “Architectural drawings showing elevations, floor plans, sections, and facade details.”; `images/project-2/sheet-7.jpg`: “Tracing exercises showing plans, architectural views, trees, and urban studies.”
- **Schema:** CreativeWork
- **Opening summary:** “This project combines an urban-form study of St. Augustine, Florida, with architectural tracing exercises. The assignments involved studying urban form and practicing architectural drawing. My study examines the city’s streets, public spaces, buildings, and landscape, while the tracing exercises helped me learn to read plans and sections.”

### project-3.html

- **Title:** “Street Smarts | Margo Medeiros”
- **Meta description:** “Explore Margo Medeiros’s study of South Greenway Drive in Coral Gables through site photography, field sketches, model photographs, and a final drawing.”
- **Headings:** H1 “Street Smarts”; H2 “Project reflection”; H2 “Project documentation”; H3 “Site photograph”; H3 “Field sketches”; H3 “Physical model”; H3 “Final drawing”
- **Displayed image alt text:** `images/project-3/site-photograph.jpg`: “House and landscaping on South Greenway Drive, Coral Gables.”; `images/project-3/site-photograph.jpg`: “House and landscaping on South Greenway Drive, Coral Gables.”; `images/project-3/field-sketches.jpg`: “Field sketches of a lantern-topped pillar, decorative gate, and landmark plaque.”; `images/project-3/model-studies.jpg`: “Four views of a streetscape model showing a house, trees, and the ground plane.”; `images/project-3/final-drawing.jpg`: “Street elevation and plan showing trees, a house, sidewalk, and street.”
- **Schema:** CreativeWork
- **Opening summary:** “Street Smarts studies South Greenway Drive in Coral Gables, Florida, through site observation, field sketches, a physical model, and a final drawing. The project involved observing the street and recreating a portion of it. My work examines how the street, sidewalk, landscape, and buildings form layers that shape the experience of the place.”

## HTML delivery and JavaScript — answer for every page

| Page | Title and meta description | Text and headings | Person / CreativeWork schema |
| --- | --- | --- | --- |
| login.html | Written directly in static HTML; not injected by JavaScript. | Initial login text is in HTML. JavaScript changes the welcome heading in sign-up mode and adds status/error messages. | Neither is present in HTML or added by the existing JavaScript. |
| index.html | Written directly in static HTML; not injected by JavaScript. | Written directly in static HTML inside a hidden wrapper. JavaScript reveals it after a session check; it does not generate the portfolio text. | Neither is present in HTML or added by the existing JavaScript. |
| projects.html | Written directly in static HTML; not injected by JavaScript. | Written directly in static HTML inside a hidden wrapper. JavaScript reveals it after a session check; it does not generate the portfolio text. | Neither is present in HTML or added by the existing JavaScript. |
| about.html | Written directly in static HTML; not injected by JavaScript. | Written directly in static HTML inside a hidden wrapper. JavaScript reveals it after a session check; it does not generate the portfolio text. | Person JSON-LD is now embedded directly in static HTML; no CreativeWork block on this page. |
| between-house.html | Written directly in static HTML; not injected by JavaScript. | Written directly in static HTML inside a hidden wrapper. JavaScript reveals it after a session check; it does not generate the portfolio text. | CreativeWork JSON-LD with a reference to the About Person is now embedded directly in static HTML. |
| project-2.html | Written directly in static HTML; not injected by JavaScript. | Written directly in static HTML inside a hidden wrapper. JavaScript reveals it after a session check; it does not generate the portfolio text. | CreativeWork JSON-LD with a reference to the About Person is now embedded directly in static HTML. |
| project-3.html | Written directly in static HTML; not injected by JavaScript. | Written directly in static HTML inside a hidden wrapper. JavaScript reveals it after a session check; it does not generate the portfolio text. | CreativeWork JSON-LD with a reference to the About Person is now embedded directly in static HTML. |

This is static HTML delivery, not dynamic server rendering: the files already contain the metadata and content before the browser executes JavaScript. The protected-page gate is a client-side redirect, not server-side access control. SEO source availability and signed-out rendered visibility are different; this audit does not assert that hidden portfolio content is indexed.


## Audit scope and limitations

Read the complete HTML of all seven local production pages, plus auth.js, script.js, styles.css, DESIGN.md and SPEC.md. Protected-page text was read from the full HTML source without changing or bypassing the login gate. No credentials were requested or used, and no new account was created. A fresh signed-in browser walk-through was not performed.

Live HTTP checks of the root, all seven page addresses, auth.js, robots.txt and sitemap.xml timed out on this connection. Therefore current deployed responses, HTTP redirect behavior, X-Robots-Tag headers, robots.txt status and search-engine rendering are NOT verified. Statements below describe the inspected production-source checkout, not a newly confirmed live deployment. The user previously identified Wi-Fi reachability problems.

Checklist additions: authentication/crawl visibility, canonical URLs, sitemap.xml and social previews. These are relevant to this static portfolio with a login gate. Only implemented checklist items have Change, Why and Commit entries; other fields remain empty. Missing entries below are explicitly audit findings, not quotations of existing text.

## Page titles

### Before
- **login.html** — “Log in — Margo Medeiros Architecture”
- **index.html** — “Home — Margo Medeiros Architecture”
- **projects.html** — “Projects — Margo Medeiros Architecture”
- **about.html** — “About — Margo Medeiros Architecture”
- **between-house.html** — “Between House — Margo Medeiros Architecture”
- **project-2.html** — “Analysis of Urban Form and Tracing Exercises — Margo Medeiros Architecture”
- **project-3.html** — “Street Smarts — Margo Medeiros Architecture”

### Change

- **login.html** — Log In to the Portfolio | Margo Medeiros
- **index.html** — Architecture Portfolio | Margo Medeiros
- **projects.html** — Architecture Projects | Margo Medeiros
- **about.html** — About Margo Medeiros | Architecture Student
- **between-house.html** — Between House | Margo Medeiros
- **project-2.html** — Analysis of Urban Form and Tracing Exercises | Margo Medeiros
- **project-3.html** — Street Smarts | Margo Medeiros

Only the HTML <title> elements changed. Visible page headings, descriptions and original project text remain unchanged.

### Why

Each title identifies the page or existing project and Margo Medeiros. The home and project-index titles now explicitly describe the architecture portfolio. The About title uses the confirmed architecture-student status. All seven titles were approved by the user before implementation.

### Commit

`BA6: page titles across portfolio`


## Meta descriptions

### Before
- **login.html** — “Log in or create an account to view the architecture portfolio.”
- **index.html** — “Architectural drawings, physical models, and sketches.”
- **projects.html** — “Explore architectural projects by Margo Medeiros, including Between House.”
- **about.html** — “Margo Medeiros, a first-year Bachelor of Architecture student at the University of Miami, originally from Boston.”
- **between-house.html** — “Between House, a Jutaku House project presented through physical models and architectural drawings.”
- **project-2.html** — “Analysis of Urban Form and Tracing Exercises · ARC 101 · Margo Medeiros.”
- **project-3.html** — “Street Smarts · ARC 111 · Margo Medeiros.”

### Change

- **login.html** — Log in or create an account to view Margo Medeiros’s architecture portfolio.
- **index.html** — Explore Margo Medeiros’s architecture portfolio through drawings, physical models, sketches, and photography.
- **projects.html** — View Between House, Analysis of Urban Form and Tracing Exercises, and Street Smarts by Margo Medeiros.
- **about.html** — Meet Margo Medeiros, a first-year Bachelor of Architecture student at the University of Miami from Boston. Read about her developing skills and architectural interests.
- **between-house.html** — Explore Between House, Margo Medeiros’s Jutaku House assignment, through physical model photographs and AutoCAD floor plans, elevations, and sections.
- **project-2.html** — View Margo Medeiros’s analysis of St. Augustine’s urban form and architectural tracing exercises, with drawings and her written reflections.
- **project-3.html** — Explore Margo Medeiros’s study of South Greenway Drive in Coral Gables through site photography, field sketches, model photographs, and a final drawing.

### Why

Each page now has a user-approved one- or two-sentence description of its actual content. Existing project names, supplied biography facts and documented media are used without adding awards, credits or other unverified facts. Visible original project writing remains unchanged.

### Commit

`BA6: meta descriptions across portfolio`


## Headings

### Before
- **login.html** — H1: “Welcometo the portfolio.”; auth.js also supplies “Create your account.” when sign-up is selected.
- **index.html** — H1: “Ideastake shape.”; H2: “Selected work”; H2: “Margo Medeiros”
- **projects.html** — H1: “Projects”; H2: “Between House”; H2: “Analysis of Urban Form and Tracing Exercises”; H2: “Street Smarts”
- **about.html** — H1: “Margo Medeiros”; H2: “About”; H2: “Architectural interests”
- **between-house.html** — H1: “Between House”; H3: “Model studies”; H3: “Architectural drawings”; H4: “Floor plans”; H4: “Elevations”; H4: “Sections”; hierarchy skips H2 (H1 is followed by H3).
- **project-2.html** — H1: “Analysis of Urban Form and Tracing Exercises”; H3: “Analysis of Urban Form”; H3: “Tracing Exercises”; hierarchy skips H2 (H1 is followed by H3).
- **project-3.html** — H1: “Street Smarts”; H3: “Street Smarts”; H4: “Site photograph”; H4: “Field sketches”; H4: “Physical model”; H4: “Final drawing”; hierarchy skips H2 (H1 is followed by H3).

### Change

- **login.html** — No change; one H1.
- **index.html** — One H1 retained. H2 “Selected work” retained; H2 “Margo Medeiros” renamed “Portfolio introduction”.
- **projects.html** — No change; one H1 and H2 project-card titles.
- **about.html** — No change; one H1 and H2 “About” and “Architectural interests”.
- **between-house.html** — H2 “Model studies” and “Architectural drawings”; H3 “Floor plans”, “Elevations” and “Sections”.
- **project-2.html** — H2 “Analysis of Urban Form” and “Tracing Exercises” follow the existing H1.
- **project-3.html** — H2 “Project reflection” replaces repeated “Street Smarts”; new H2 “Project documentation” precedes H3 image headings.

Updated CSS selectors to retain existing heading typography after promoting semantic levels. Original project descriptions, metadata and the login gate remain unchanged.

### Why

Each page has one main heading and section headings that progress without skipped levels. The user-approved Home and Street Smarts labels describe their sections instead of repeating a person or project name.

### Commit

`BA6: heading hierarchy across portfolio`


## Image alt text and image placeholders

### Before
- **login.html** — No <img> elements.
- **index.html** — “images/physical-model.png” alt=“White architectural model with exposed staircases and a pitched roof against a dark background.”; “images/project-2/map-cover.jpg” alt=“Hand-drawn urban plan of St. Augustine showing streets, building blocks, trees, and the fort.”; “images/project-3/site-photograph.jpg” alt=“Site photograph of a two-story house framed by trees and landscaping on South Greenway Drive.”
- **projects.html** — “images/between-house/model-terraces.png” alt=“Physical model of Between House showing projecting terraces and a pitched roof.”; “images/project-2/map-cover.jpg” alt=“Hand-drawn urban plan of St. Augustine showing streets, building blocks, trees, and the fort.”; “images/project-3/site-photograph.jpg” alt=“Site photograph of a two-story house framed by trees and landscaping on South Greenway Drive.”
- **about.html** — No <img> elements. Portrait placeholder: role="img", aria-label=“Placeholder: portrait of Margo Medeiros”; visible text “[ADD: portrait of Margo Medeiros]”.
- **between-house.html** — “images/between-house/model-terraces.png” alt=“Angled view of the white Between House model showing projecting terraces, wall openings, and a pitched roof.”; “images/between-house/model-opposite-view.png” alt=“Opposite angled view of the Between House model showing terraces and a tall opening beside the stair volume.”; “images/between-house/model-stair-volume.png” alt=“Between House model viewed through its open stair volume, showing stair flights across multiple levels.”; “images/between-house/model-side-view.png” alt=“Side view of the Between House model showing the open stair volume, terraces, and pitched roof.”; “images/between-house/floor-plans.png” alt=“Three floor plans of Between House with room layouts, stairs, section markers, and a scale bar.”; “images/between-house/elevations.png” alt=“Four elevation views of Between House showing roof profile, openings, terraces, and a scale bar.”; “images/between-house/sections.png” alt=“Two sections through Between House showing floor levels, the stair volume, pitched roof, and a scale bar.”
- **project-2.html** — “images/project-2/map-cover.jpg” alt=“Hand-drawn urban plan of St. Augustine showing streets, building blocks, trees, and the fort.”; “images/project-2/sheet-3.jpg” alt=“Hand-drawn plan of St. Augustine showing the fort, streets, building blocks, and vegetation.”; “images/project-2/sheet-4.jpg” alt=“Detailed hand-drawn urban plan showing building footprints, streets, and trees.”; “images/project-2/sheet-5.jpg” alt=“Drawing sheet with architectural elevations, floor plans, sections, and facade details.”; “images/project-2/sheet-7.jpg” alt=“Sheet of tracing exercises including plans, architectural views, trees, and urban studies.”
- **project-3.html** — “images/project-3/site-photograph.jpg” alt=“Site photograph of a two-story house framed by trees and landscaping on South Greenway Drive.”; “images/project-3/site-photograph.jpg” alt=“Site photograph of a two-story house framed by trees and landscaping on South Greenway Drive.”; “images/project-3/field-sketches.jpg” alt=“Three field sketches showing a lantern-topped pillar, decorative gate, and landmark plaque.”; “images/project-3/model-studies.jpg” alt=“Four photographs of a physical streetscape model showing a house, trees, and the surrounding ground plane.”; “images/project-3/final-drawing.jpg” alt=“Hand-drawn street elevation and plan showing trees, a house, sidewalk, and street.”

### Change

- **login.html** — No change; no displayed images.
- **index.html** — `images/physical-model.png`: Between House model showing exposed stairs and a pitched roof.; `images/project-2/map-cover.jpg`: Hand-drawn plan of St. Augustine showing streets, trees, and the fort.; `images/project-3/site-photograph.jpg`: House and landscaping on South Greenway Drive, Coral Gables.
- **projects.html** — `images/between-house/model-terraces.png`: Between House model showing projecting terraces and a pitched roof.; `images/project-2/map-cover.jpg`: Hand-drawn plan of St. Augustine showing streets, trees, and the fort.; `images/project-3/site-photograph.jpg`: House and landscaping on South Greenway Drive, Coral Gables.
- **about.html** — No change; the portrait placeholder keeps its descriptive aria-label.
- **between-house.html** — `images/between-house/model-terraces.png`: Between House model showing projecting terraces and a pitched roof.; `images/between-house/model-opposite-view.png`: Opposite view of the Between House model showing terraces and the stair opening.; `images/between-house/model-stair-volume.png`: Between House model showing stair flights across multiple levels.; `images/between-house/model-side-view.png`: Side view of the Between House model showing stairs, terraces, and the roof.; `images/between-house/floor-plans.png`: Three Between House floor plans showing room layouts and stairs.; `images/between-house/elevations.png`: Four Between House elevations showing openings, terraces, and roof profiles.; `images/between-house/sections.png`: Two Between House sections showing floor levels, stairs, and the pitched roof.
- **project-2.html** — `images/project-2/map-cover.jpg`: Hand-drawn plan of St. Augustine showing streets, trees, and the fort.; `images/project-2/sheet-3.jpg`: Hand-drawn plan of St. Augustine showing streets, trees, and the fort.; `images/project-2/sheet-4.jpg`: Hand-drawn urban plan showing building footprints, streets, and trees.; `images/project-2/sheet-5.jpg`: Architectural drawings showing elevations, floor plans, sections, and facade details.; `images/project-2/sheet-7.jpg`: Tracing exercises showing plans, architectural views, trees, and urban studies.
- **project-3.html** — `images/project-3/site-photograph.jpg`: House and landscaping on South Greenway Drive, Coral Gables.; `images/project-3/site-photograph.jpg`: House and landscaping on South Greenway Drive, Coral Gables.; `images/project-3/field-sketches.jpg`: Field sketches of a lantern-topped pillar, decorative gate, and landmark plaque.; `images/project-3/model-studies.jpg`: Four views of a streetscape model showing a house, trees, and the ground plane.; `images/project-3/final-drawing.jpg`: Street elevation and plan showing trees, a house, sidewalk, and street.

### Why

All 23 displayed image instances use short, user-approved descriptions of visible subjects. Repeated assets are described consistently, without adding unverified materials, media or project facts. Existing captions, original writing and image files remain unchanged.

### Commit

`BA6: image alt text across portfolio`


## About page and biographical context

### Before
- **login.html** — “Margo Medeiros” / “Architecture” brand links to “login.html”; no About link before login.
- **index.html** — Navigation contains “About” → “about.html”.
- **projects.html** — Navigation contains “About” → “about.html”.
- **about.html** — “I’m Margo Medeiros, a first-year student at the University of Miami pursuing a Bachelor of Architecture. Originally from Boston, I’m developing my design skills through studio projects, drawing, and hands-on exploration. My work so far includes physical model making, hand drafting, field sketching, site observation, and AutoCAD drawings. I enjoy turning observations and ideas into work I can build, study, and refine.”; “I’m still discovering which areas of architecture I’m most drawn to. Each project gives me a chance to explore different approaches, learn how spaces relate to their surroundings, and develop my own perspective as a designer.”; portrait remains “[ADD: portrait of Margo Medeiros]”. No contact address or professional credentials displayed.
- **between-house.html** — Navigation contains “About” → “about.html”.
- **project-2.html** — Navigation contains “About” → “about.html”.
- **project-3.html** — Navigation contains “About” → “about.html”.

### Change

- **login.html** — No change; existing Margo Medeiros identity remains consistent.
- **index.html** — No change; existing Margo Medeiros identity remains consistent.
- **projects.html** — No change; existing Margo Medeiros identity remains consistent.
- **about.html** — Replaced the first two biography sentences with the user-approved text: “I’m Margo Medeiros, a first-year Bachelor of Architecture student at the University of Miami School of Architecture. Originally from Boston, I create physical models, architectural drawings, and sketches through my studio coursework in Miami.” The rest of the biography, interests and portrait placeholder remain unchanged.
- **between-house.html** — No change; existing Margo Medeiros identity remains consistent.
- **project-2.html** — No change; existing Margo Medeiros identity remains consistent.
- **project-3.html** — No change; existing Margo Medeiros identity remains consistent.

### Why

The first two sentences now identify the user by the approved name, University of Miami School of Architecture, first-year Bachelor of Architecture studies, the work she creates and its Miami studio context. Existing supplied Boston background is retained. No awards or additional credits are added. LinkedIn identity was not independently verified.

### Commit

`BA6: About page introduction and identity`


## Project summaries and original writing

### Before
- **login.html** — No project summary on this page; “Log in to view Margo Medeiros Architecture.”
- **index.html** — Portfolio introduction: “My work explores how ideas take shape through architectural drawings, physical models, and sketches. This portfolio brings together studies of space and form, showing both the process of developing an idea and the work that emerges from it.”; image captions “Physical model”, “Drawing”, “Photograph”; no project-specific summaries on this page.
- **projects.html** — Card titles: “Between House”, “Analysis of Urban Form and Tracing Exercises”, “Street Smarts”; repeated call to action “View project ↗”; no prose project summaries on the index.
- **about.html** — No project-specific summary; biography describes developing skills.
- **between-house.html** — “Between House is a narrow, multilevel dwelling with an open stair volume, projecting terraces, and a pitched roof. Physical model studies and AutoCAD plans, elevations, and sections document its spatial organization.”
- **project-2.html** — Complete original reflection text: “St. Augustine, being the oldest European-founded city in the United States that still remains populous today, was developed differently than a lot of other modern American cities The typical building styles showcase beautiful Spanish colonialism, and the Plaza de Constitución serves as the heart of the city. In this plaza, the community can gather for any and all matters. Following Spanish colonial urban development, the city extends outwards with this multifaceted community gathering space as its core. Colonial influence proceeds to stand out in the narrowness of the streets and the lack of space between buildings and sidewalks. On another historical note, the Castillo de San Marcos stands out as a grand, bold structure that is now recognized as a national mnument. St. Augustine‘s Spanish Colonial influence and history still shines through to this day with its building styles, urban planning, and historical landmarks. Creating my own potrayal of this beautiful city with such substantial history was an exceptional way to learn about formative urban development.” | “The tracing exercises assigned each class were exceedingly beneficial in several ways as a budding architect. Tracing every morning once the studio period began was an efficient way to get the mind thinking like an architect without needing much critical thinking to begin. Following along each line with my pen awoke pieces of my mind that made me curious. I asked myself questions that a new architect would, such as, „What material am I depicting with this line style?“ or even something as vague as, „What exactly am I drawing?“ Through these exercises, I learned how to read floor plans and sections, draw greenery and staircases, and study cities and buildings before analyzing and producing my own detailed versions of them.”; no separate short prose summary.
- **project-3.html** — Complete original reflection text: “The true framework and method of division yet connection throughout a city, the street, should be deeply explored and understood by every architect. This project fostered my first site visit and allowed me to learn the purpose of them through experience. As I walked along the sidewalk on South Greenway Drive, in Coral Gables, Florida, I made sketches and took in the way the space around me made me feel. Furthermore, I tried to understand which parts or collection of parts stimulated specific feelings. It was additionally usefulable to observe the landscape, climate, and community. Then, replicating a portion of the street in a model and a drawing highlighted the layeredness of a street. Learning how these layers---the street, the sidewalk, landscape, and more---work together to create something that flows together beautifully and seamlessly was incredible. The foundational provided by Street Smarts will prove important to an architect forever, making up some of the first steps in every project to come and prompting meaningful observation when engaging with new environments.”; no separate short prose summary.

### Change

- **login.html** — No change; this is not a project detail page.
- **index.html** — No change; this is not a project detail page.
- **projects.html** — No change; this is not a project detail page.
- **about.html** — No change; this is not a project detail page.
- **between-house.html** — Added the approved opening paragraph directly below the H1: “Between House is a Jutaku home designed for a hypothetical neighborhood, with student-designed homes grouped into blocks by studio, each with 12 students. The brief limited each home to 48 feet in height, 15 feet in width, and 48 feet in depth, while requiring it to respond cohesively to neighboring houses and follow site restrictions. I organized the house around an art studio positioned centrally, both vertically and horizontally—giving Between House its name. The design also prioritizes natural light within the constraints of closely spaced homes.”
- **project-2.html** — Added the approved opening paragraph directly below the H1: “This project combines an urban-form study of St. Augustine, Florida, with architectural tracing exercises. The assignments involved studying urban form and practicing architectural drawing. My study examines the city’s streets, public spaces, buildings, and landscape, while the tracing exercises helped me learn to read plans and sections.”
- **project-3.html** — Added the approved opening paragraph directly below the H1: “Street Smarts studies South Greenway Drive in Coral Gables, Florida, through site observation, field sketches, a physical model, and a final drawing. The project involved observing the street and recreating a portion of it. My work examines how the street, sidewalk, landscape, and buildings form layers that shape the experience of the place.”

All complete original reflection paragraphs remain unchanged below the summaries.

### Why

Each project detail page now opens with a user-approved paragraph describing its scope, site or hypothetical context, assignment and focus. The user supplied the Between House dimensions, studio-block setting and art-studio/daylight decisions and explicitly permitted paraphrasing. The user approved the Project 2 and Street Smarts drafts. No new awards or credits are claimed.

### Commit

`BA6: opening summaries on project pages`


## Credibility and attribution

### Before
- **login.html** — “Log in to view Margo Medeiros Architecture.”; identity only; no course, biography or public project evidence.
- **index.html** — “Margo Medeiros”; “Architectural drawings, physical models, and sketches.”; three actual work previews and project links; no academic affiliation in main page text.
- **projects.html** — “Between House”, “Analysis of Urban Form and Tracing Exercises”, “Street Smarts” with covers and links; no dates, school or authorship text beside cards.
- **about.html** — “I’m Margo Medeiros, a first-year student at the University of Miami pursuing a Bachelor of Architecture. Originally from Boston, I’m developing my design skills through studio projects, drawing, and hands-on exploration. My work so far includes physical model making, hand drafting, field sketching, site observation, and AutoCAD drawings. I enjoy turning observations and ideas into work I can build, study, and refine.”; self-described developing skills; portrait placeholder remains; no awards, licensure, professional experience, contact or outside-profile links claimed.
- **between-house.html** — “Jutaku House · Assignment”; actual physical-model views and AutoCAD drawing sheets; links labeled “Open original PDF ↗”; no course, faculty, year or location invented.
- **project-2.html** — “ARC 101: Design I · Fall 2026”; “University of Miami School of Architecture Faculty: Crystal Torres”; “St. Augustine, Florida, United States | 1770”; “Open full portfolio PDF ↗”; original writing contains “national mnument” and “my own potrayal” (not edited). The 1770 label is source context, not a project completion date.
- **project-3.html** — “ARC 111: Visualization I · Fall 2026”; “University of Miami School of Architecture Faculty: Maria Cannavo”; “Open full portfolio PDF ↗”; original writing contains “additionally usefulable” and “The foundational provided by Street Smarts” (not edited). Site photograph, sketches, model and final drawing provide process evidence.

### Change

- **login.html** — No change; detailed coursework and authorship are listed on About and project pages.
- **index.html** — No change; detailed coursework and authorship are listed on About and project pages.
- **projects.html** — No change; detailed coursework and authorship are listed on About and project pages.
- **about.html** — Added Coursework and credits with Fall 2026, one ARC 101 bullet naming Crystal Torres and Sebastian Eiler, and one ARC 111 bullet naming Maria Cannavo. Added the user-approved individual-work and image-ownership statement.
- **between-house.html** — Added “Drawings, models, and photographs by Margo Medeiros. Individual project.” Added ARC 101, Fall 2026 and faculty Crystal Torres and Sebastian Eiler.
- **project-2.html** — Added “Drawings, models, and photographs by Margo Medeiros. Individual project.” ARC 101 faculty credit now names Crystal Torres and Sebastian Eiler.
- **project-3.html** — Added “Drawings, models, and photographs by Margo Medeiros. Individual project.” Existing ARC 111, Fall 2026 and Maria Cannavo credit retained.

### Why

The user confirmed the course faculty, Fall 2026 semester, individual authorship and ownership of all displayed work and photographs. About now identifies the actual coursework, with both ARC 101 professors under one class, and project pages explicitly credit Margo Medeiros. No awards, internships, exhibitions, publications or partners were invented.

### Commit

`BA6: coursework and authorship credits`


## Internal links

### Before
- **login.html** — “Skip to content” → “#main”; “Margo MedeirosArchitecture” → “login.html”; all local page/file/HTML-fragment targets exist (PDF page anchors not browser-tested).
- **index.html** — “Skip to content” → “#main”; “Margo MedeirosArchitecture” → “index.html”; “Home” → “index.html”; “Projects” → “projects.html”; “About” → “about.html”; “View selected work ↗” → “projects.html”; “Physical model01” → “between-house.html”; “Drawing02” → “project-2.html”; “Photograph03” → “project-3.html”; “Go to log-in” → “login.html”; all local page/file/HTML-fragment targets exist (PDF page anchors not browser-tested).
- **projects.html** — “Skip to content” → “#main”; “Margo MedeirosArchitecture” → “index.html”; “Home” → “index.html”; “Projects” → “projects.html”; “About” → “about.html”; “Physical modelBetween HouseView project ↗” → “between-house.html”; “Urban planAnalysis of Urban Form and Tracing ExercisesView project ↗” → “project-2.html”; “Site photographStreet SmartsView project ↗” → “project-3.html”; “Go to log-in” → “login.html”; all local page/file/HTML-fragment targets exist (PDF page anchors not browser-tested).
- **about.html** — “Skip to content” → “#main”; “Margo MedeirosArchitecture” → “index.html”; “Home” → “index.html”; “Projects” → “projects.html”; “About” → “about.html”; “Go to log-in” → “login.html”; all local page/file/HTML-fragment targets exist (PDF page anchors not browser-tested).
- **between-house.html** — “Skip to content” → “#main”; “Margo MedeirosArchitecture” → “index.html”; “Home” → “index.html”; “Projects” → “projects.html”; “About” → “about.html”; “← Back to Projects” → “projects.html”; “View the drawings ↗” → “#project-drawings”; “Open original PDF ↗— Floor plans (new tab)” → “images/between-house/floor-plans.pdf”; “Open floor plans PDF in a new tab” → “images/between-house/floor-plans.pdf”; “Open original PDF ↗— Elevations (new tab)” → “images/between-house/elevations.pdf”; “Open elevations PDF in a new tab” → “images/between-house/elevations.pdf”; “Open original PDF ↗— Sections (new tab)” → “images/between-house/sections.pdf”; “Open sections PDF in a new tab” → “images/between-house/sections.pdf”; “Go to log-in” → “login.html”; all local page/file/HTML-fragment targets exist (PDF page anchors not browser-tested).
- **project-2.html** — “Skip to content” → “#main”; “Margo MedeirosArchitecture” → “index.html”; “Home” → “index.html”; “Projects” → “projects.html”; “About” → “about.html”; “← Back to Projects” → “projects.html”; “Open full portfolio PDF ↗” → “images/project-2/portfolio.pdf”; “Open urban plan in original portfolio PDF” → “images/project-2/portfolio.pdf#page=3”; “Open original PDF ↗” → “images/project-2/portfolio.pdf#page=3”; “Open urban fabric in original portfolio PDF” → “images/project-2/portfolio.pdf#page=4”; “Open original PDF ↗” → “images/project-2/portfolio.pdf#page=4”; “Open architectural studies in original portfolio PDF” → “images/project-2/portfolio.pdf#page=5”; “Open original PDF ↗” → “images/project-2/portfolio.pdf#page=5”; “Open tracing exercises in original portfolio PDF” → “images/project-2/portfolio.pdf#page=7”; “Go to log-in” → “login.html”; all local page/file/HTML-fragment targets exist (PDF page anchors not browser-tested).
- **project-3.html** — “Skip to content” → “#main”; “Margo MedeirosArchitecture” → “index.html”; “Home” → “index.html”; “Projects” → “projects.html”; “About” → “about.html”; “← Back to Projects” → “projects.html”; “Open full portfolio PDF ↗” → “images/project-3/portfolio.pdf”; “Open original PDF ↗” → “images/project-3/portfolio.pdf#page=2”; “Open site photograph in original PDF” → “images/project-3/portfolio.pdf#page=2”; “Open field sketches in original PDF” → “images/project-3/portfolio.pdf#page=2”; “Open original PDF ↗” → “images/project-3/portfolio.pdf#page=3”; “Open physical model in original PDF” → “images/project-3/portfolio.pdf#page=3”; “Open final drawing in original PDF” → “images/project-3/portfolio.pdf#page=3”; “Go to log-in” → “login.html”; all local page/file/HTML-fragment targets exist (PDF page anchors not browser-tested).

### Change

- **login.html** — No change; existing login navigation retained.
- **index.html** — Home preview captions now name all three project destinations while retaining Physical model, Drawing and Photograph. Removed redundant overriding aria-labels so the visible captions supply destination names.
- **projects.html** — Changed each View project cue to View Between House, View Analysis of Urban Form and Tracing Exercises, or View Street Smarts.
- **about.html** — No change; existing Home and Projects navigation retained.
- **between-house.html** — Named the floor plans, elevations and sections PDF links. Home, About and Back to Projects remain available.
- **project-2.html** — Named the full project portfolio and urban plan, urban fabric and architectural studies PDF links. Home, About and Back to Projects remain available.
- **project-3.html** — Named the full Street Smarts portfolio and site photograph, field sketches, physical model and final drawing PDF links. Home, About and Back to Projects remain available.

### Why

Required page routes already existed. User-approved visible labels now identify their project or PDF destinations instead of generic repeated cues. All URL targets, image alt text, original writing and login behavior remain unchanged. Local file and HTML-fragment targets were checked; live responses remain subject to the previously noted network limitation.

### Commit

`BA6: descriptive internal links across portfolio`


## Schema — Person

### Before
- **login.html** — Person structured data: [absent in source; not a literal HTML quote]. No JSON-LD, microdata or RDFa Person declarations found; existing JavaScript does not add schema.
- **index.html** — Person structured data: [absent in source; not a literal HTML quote]. No JSON-LD, microdata or RDFa Person declarations found; existing JavaScript does not add schema.
- **projects.html** — Person structured data: [absent in source; not a literal HTML quote]. No JSON-LD, microdata or RDFa Person declarations found; existing JavaScript does not add schema.
- **about.html** — Person structured data: [absent in source; not a literal HTML quote]. No JSON-LD, microdata or RDFa Person declarations found; existing JavaScript does not add schema.
- **between-house.html** — Person structured data: [absent in source; not a literal HTML quote]. No JSON-LD, microdata or RDFa Person declarations found; existing JavaScript does not add schema.
- **project-2.html** — Person structured data: [absent in source; not a literal HTML quote]. No JSON-LD, microdata or RDFa Person declarations found; existing JavaScript does not add schema.
- **project-3.html** — Person structured data: [absent in source; not a literal HTML quote]. No JSON-LD, microdata or RDFa Person declarations found; existing JavaScript does not add schema.

### Change

- **login.html** — No change for this schema type.
- **index.html** — No change for this schema type.
- **projects.html** — No change for this schema type.
- **about.html** — Added a Person JSON-LD block with Margo Medeiros, the approved biography introduction, school affiliation, About URL and stable Person @id.
- **between-house.html** — Added a creator reference to the shared Person @id, with the confirmed Margo Medeiros name; full biographical Person block remains on About.
- **project-2.html** — Added a creator reference to the shared Person @id, with the confirmed Margo Medeiros name; full biographical Person block remains on About.
- **project-3.html** — Added a creator reference to the shared Person @id, with the confirmed Margo Medeiros name; full biographical Person block remains on About.

### Why

Identify the portfolio owner consistently using confirmed details and existing user-approved writing. JSON-LD is embedded directly in the static HTML and does not generate visible text or bypass the login gate. Parsed each JSON-LD block successfully; search-engine indexing and rich-result eligibility are not guaranteed.

### Commit

`BA6: Person and CreativeWork schema`


## Schema — CreativeWork

### Before
- **login.html** — CreativeWork structured data: [absent in source; not a literal HTML quote]. No JSON-LD, microdata or RDFa CreativeWork declarations found; existing JavaScript does not add schema.
- **index.html** — CreativeWork structured data: [absent in source; not a literal HTML quote]. No JSON-LD, microdata or RDFa CreativeWork declarations found; existing JavaScript does not add schema.
- **projects.html** — CreativeWork structured data: [absent in source; not a literal HTML quote]. No JSON-LD, microdata or RDFa CreativeWork declarations found; existing JavaScript does not add schema.
- **about.html** — CreativeWork structured data: [absent in source; not a literal HTML quote]. No JSON-LD, microdata or RDFa CreativeWork declarations found; existing JavaScript does not add schema.
- **between-house.html** — CreativeWork structured data: [absent in source; not a literal HTML quote]. No JSON-LD, microdata or RDFa CreativeWork declarations found; existing JavaScript does not add schema.
- **project-2.html** — CreativeWork structured data: [absent in source; not a literal HTML quote]. No JSON-LD, microdata or RDFa CreativeWork declarations found; existing JavaScript does not add schema.
- **project-3.html** — CreativeWork structured data: [absent in source; not a literal HTML quote]. No JSON-LD, microdata or RDFa CreativeWork declarations found; existing JavaScript does not add schema.

### Change

- **login.html** — No change for this schema type.
- **index.html** — No change for this schema type.
- **projects.html** — No change for this schema type.
- **about.html** — No change for this schema type.
- **between-house.html** — Added a CreativeWork JSON-LD block for Between House, linking Margo Medeiros as creator, the project URL and cover, Fall 2026 and the full approved opening summary. Hypothetical site retained in the summary; no real location assigned.
- **project-2.html** — Added a CreativeWork JSON-LD block for Analysis of Urban Form and Tracing Exercises, linking Margo Medeiros as creator, the project URL and cover, Fall 2026 and the full approved opening summary. contentLocation: St. Augustine, Florida.
- **project-3.html** — Added a CreativeWork JSON-LD block for Street Smarts, linking Margo Medeiros as creator, the project URL and cover, Fall 2026 and the full approved opening summary. contentLocation: South Greenway Drive, Coral Gables, Florida.

### Why

Describe each student project and its authorship using confirmed details, existing cover assets and user-approved summaries, without claiming unconfirmed dates, awards or a real Between House site. JSON-LD is embedded directly in the static HTML and does not generate visible text or bypass the login gate. Parsed each JSON-LD block successfully; search-engine indexing and rich-result eligibility are not guaranteed.

### Commit

`BA6: Person and CreativeWork schema`


## robots.txt and page-level crawl controls

### Before
- **login.html** — robots.txt: absent from local production root; live response unverified (timeout). Meta robots: [absent in source; not a literal HTML quote]. X-Robots-Tag HTTP header: unverified. Public login page.
- **index.html** — robots.txt: absent from local production root; live response unverified (timeout). Meta robots: [absent in source; not a literal HTML quote]. X-Robots-Tag HTTP header: unverified. Protected UI starts as “<div id="protected-content" hidden>”.
- **projects.html** — robots.txt: absent from local production root; live response unverified (timeout). Meta robots: [absent in source; not a literal HTML quote]. X-Robots-Tag HTTP header: unverified. Protected UI starts as “<div id="protected-content" hidden>”.
- **about.html** — robots.txt: absent from local production root; live response unverified (timeout). Meta robots: [absent in source; not a literal HTML quote]. X-Robots-Tag HTTP header: unverified. Protected UI starts as “<div id="protected-content" hidden>”.
- **between-house.html** — robots.txt: absent from local production root; live response unverified (timeout). Meta robots: [absent in source; not a literal HTML quote]. X-Robots-Tag HTTP header: unverified. Protected UI starts as “<div id="protected-content" hidden>”.
- **project-2.html** — robots.txt: absent from local production root; live response unverified (timeout). Meta robots: [absent in source; not a literal HTML quote]. X-Robots-Tag HTTP header: unverified. Protected UI starts as “<div id="protected-content" hidden>”.
- **project-3.html** — robots.txt: absent from local production root; live response unverified (timeout). Meta robots: [absent in source; not a literal HTML quote]. X-Robots-Tag HTTP header: unverified. Protected UI starts as “<div id="protected-content" hidden>”.

### Change

Retained the existing root-level robots.txt unchanged:

```text
# Find me, don't train on me (Google-Extended only).
User-agent: Google-Extended
Disallow: /
```

Checked the local rule with a robots parser: Google-Extended is disallowed for the root and all portfolio-page paths; Googlebot is allowed by this file. There is no `User-agent: *` blanket block. No page content, page-level crawl metadata or login behavior changed.

Opened https://margo-medeiros-architecture-alpha.vercel.app/robots.txt in the app browser and attempted HTTP checks on October 29, 2026. Agent HTTP requests timed out, so the live HTTP status and served body remain independently unverified. The user approved retaining the policy; that approval is not treated as proof of the live response.

### Why

The current policy matches the user’s decision to retain search crawling while opting out of Google-Extended’s covered AI uses. The user explicitly retained the login page. This check does not claim guaranteed indexing, universal AI-training protection or verified live delivery.

### Commit

`BA6: verify robots.txt crawler policy`

## Authentication and crawl visibility

### Before
- **login.html** — “data-protected="false"”; public login form; existing sessions redirect to index.html.
- **index.html** — “data-protected="true"” and “<div id="protected-content" hidden>”; auth.js calls getSession(), reveals content only with a session, otherwise location.replace(“login.html”). Full portfolio text and metadata remain in static HTML.
- **projects.html** — “data-protected="true"” and “<div id="protected-content" hidden>”; auth.js calls getSession(), reveals content only with a session, otherwise location.replace(“login.html”). Full portfolio text and metadata remain in static HTML.
- **about.html** — “data-protected="true"” and “<div id="protected-content" hidden>”; auth.js calls getSession(), reveals content only with a session, otherwise location.replace(“login.html”). Full portfolio text and metadata remain in static HTML.
- **between-house.html** — “data-protected="true"” and “<div id="protected-content" hidden>”; auth.js calls getSession(), reveals content only with a session, otherwise location.replace(“login.html”). Full portfolio text and metadata remain in static HTML.
- **project-2.html** — “data-protected="true"” and “<div id="protected-content" hidden>”; auth.js calls getSession(), reveals content only with a session, otherwise location.replace(“login.html”). Full portfolio text and metadata remain in static HTML.
- **project-3.html** — “data-protected="true"” and “<div id="protected-content" hidden>”; auth.js calls getSession(), reveals content only with a session, otherwise location.replace(“login.html”). Full portfolio text and metadata remain in static HTML.

### Change

### Why

### Commit


## Canonical URLs and duplicate home addresses

### Before
- **login.html** — rel="canonical": [absent in source; not a literal HTML quote]. No explicit canonical URL in source.
- **index.html** — rel="canonical": [absent in source; not a literal HTML quote]. Root / and /index.html reference the home document; live redirects and canonicalization are unverified.
- **projects.html** — rel="canonical": [absent in source; not a literal HTML quote]. No explicit canonical URL in source.
- **about.html** — rel="canonical": [absent in source; not a literal HTML quote]. No explicit canonical URL in source.
- **between-house.html** — rel="canonical": [absent in source; not a literal HTML quote]. No explicit canonical URL in source.
- **project-2.html** — rel="canonical": [absent in source; not a literal HTML quote]. No explicit canonical URL in source.
- **project-3.html** — rel="canonical": [absent in source; not a literal HTML quote]. No explicit canonical URL in source.

### Change

### Why

### Commit


## Sitemap

### Before
- **login.html** — sitemap.xml: absent from local production root; no local sitemap entry for “https://margo-medeiros-architecture-alpha.vercel.app/login.html”; live sitemap response unverified (timeout).
- **index.html** — sitemap.xml: absent from local production root; no local sitemap entry for “https://margo-medeiros-architecture-alpha.vercel.app/index.html”; live sitemap response unverified (timeout).
- **projects.html** — sitemap.xml: absent from local production root; no local sitemap entry for “https://margo-medeiros-architecture-alpha.vercel.app/projects.html”; live sitemap response unverified (timeout).
- **about.html** — sitemap.xml: absent from local production root; no local sitemap entry for “https://margo-medeiros-architecture-alpha.vercel.app/about.html”; live sitemap response unverified (timeout).
- **between-house.html** — sitemap.xml: absent from local production root; no local sitemap entry for “https://margo-medeiros-architecture-alpha.vercel.app/between-house.html”; live sitemap response unverified (timeout).
- **project-2.html** — sitemap.xml: absent from local production root; no local sitemap entry for “https://margo-medeiros-architecture-alpha.vercel.app/project-2.html”; live sitemap response unverified (timeout).
- **project-3.html** — sitemap.xml: absent from local production root; no local sitemap entry for “https://margo-medeiros-architecture-alpha.vercel.app/project-3.html”; live sitemap response unverified (timeout).

### Change

### Why

### Commit


## Social/share metadata

### Before
- **login.html** — og:title=“Log in — Margo Medeiros Architecture”; og:description=“Log in or create an account to view the architecture portfolio.”; og:type=“website”; og:image=“https://margo-medeiros-architecture-alpha.vercel.app/images/physical-model.png”; og:image:alt=“White architectural model with exposed staircases and a pitched roof.”; image dimensions 3024×4032; og:url and Twitter card tags absent in source.
- **index.html** — og:title=“Home — Margo Medeiros Architecture”; og:description=“Architectural drawings, physical models, and sketches.”; og:type=“website”; og:image=“https://margo-medeiros-architecture-alpha.vercel.app/images/physical-model.png”; og:image:alt=“White architectural model with exposed staircases and a pitched roof.”; image dimensions 3024×4032; og:url and Twitter card tags absent in source.
- **projects.html** — og:title=“Projects — Margo Medeiros Architecture”; og:description=“Explore architectural projects by Margo Medeiros, including Between House.”; og:type=“website”; og:image=“https://margo-medeiros-architecture-alpha.vercel.app/images/physical-model.png”; og:image:alt=“White architectural model with exposed staircases and a pitched roof.”; image dimensions 3024×4032; og:url and Twitter card tags absent in source.
- **about.html** — og:title=“About — Margo Medeiros Architecture”; og:description=“Margo Medeiros, a first-year Bachelor of Architecture student at the University of Miami, originally from Boston.”; og:type=“website”; og:image=“https://margo-medeiros-architecture-alpha.vercel.app/images/physical-model.png”; og:image:alt=“White architectural model with exposed staircases and a pitched roof.”; image dimensions 3024×4032; og:url and Twitter card tags absent in source.
- **between-house.html** — og:title=“Between House — Margo Medeiros Architecture”; og:description=“Between House, a Jutaku House project presented through physical models and architectural drawings.”; og:type=“website”; og:image=“https://margo-medeiros-architecture-alpha.vercel.app/images/between-house/model-terraces.png”; og:image:alt=“Between House physical model showing terraces and a pitched roof.”; image dimensions 3024×4032; og:url and Twitter card tags absent in source.
- **project-2.html** — og:title=“Analysis of Urban Form and Tracing Exercises — Margo Medeiros Architecture”; og:description=“Analysis of Urban Form and Tracing Exercises · ARC 101 · Margo Medeiros.”; og:type=“website”; og:image=“https://margo-medeiros-architecture-alpha.vercel.app/images/project-2/map-cover.jpg”; og:image:alt=“Hand-drawn urban plan of St. Augustine.”; image dimensions 1060×809; og:url and Twitter card tags absent in source.
- **project-3.html** — og:title=“Street Smarts — Margo Medeiros Architecture”; og:description=“Street Smarts · ARC 111 · Margo Medeiros.”; og:type=“website”; og:image=“https://margo-medeiros-architecture-alpha.vercel.app/images/project-3/site-photograph.jpg”; og:image:alt=“House and landscaping on South Greenway Drive in Coral Gables.”; image dimensions 450×455; og:url and Twitter card tags absent in source.

### Change

### Why

### Commit


## Local-only document handling

SEO.md was first committed as BA6 baseline (8597806). It is tracked for the assignment and not linked from any page. The page-titles change adds /SEO.md to .vercelignore to exclude the audit from Vercel deployment. Live exclusion must be checked when the deployed site is reachable. The file is visible in the GitHub repository according to repository permissions; this is not a claim of secrecy. A robots.txt exclusion alone would not keep the audit off the website.

No files in the 585 checkout were changed for this audit. The approved Page titles, Meta descriptions, Headings, Image alt text, About page, Project summaries, Credibility, Internal links, Person/CreativeWork schema and robots.txt items have been implemented; other checklist items remain unchanged.
