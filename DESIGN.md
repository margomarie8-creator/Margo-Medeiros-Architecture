# DESIGN.md
# Margo Medeiros Architecture — Design Direction

## Concept

Margo Medeiros Architecture is an artistic yet refined digital portfolio that presents architectural work as a curated editorial exhibition, balancing experimental compositions with professional clarity. A monochromatic visual system punctuated by electric cyan creates a bold identity while allowing drawings, models, and sketches to remain the focus.

## References and Influences

### Editorial Architecture Magazines
Borrow:
- Generous but purposeful whitespace.
- Large, elegant serif headlines.
- Carefully composed relationships between images and text.
- Strong visual hierarchy.
- Concise project captions.

Do not copy existing publication names, logos, fonts, photographs, layouts, or written content.

### Swiss Editorial Graphic Design
Borrow:
- Precise alignment and typographic hierarchy.
- Strong contrasts in scale.
- Disciplined use of grids.
- Clean, legible navigation.
- Strategic use of a single accent color.

Do not reproduce any existing designer's identity or exact compositions.

### Experimental Architectural Portfolios
Borrow:
- Asymmetrical image placement.
- Unexpected but controlled relationships between visual elements.
- Variation in image scale.
- Expressive typography within a consistent design system.

The underlying compositional principles may inspire the website, but no existing site's identity, assets, or exact layout should be copied.

## Visual Personality

Three defining words:
- Artistic
- Refined
- Bold

Three qualities to avoid:
- Boring
- Cluttered
- Pretentious

The website should feel professional, inspiring, and immersive without relying on unnecessary visual effects.

## Color Palette

### Primary Colors

Background White: #FFFFFF
- Main page backgrounds.
- Image presentation areas.
- Log-in page background.

Architectural Black: #111111
- Main headings.
- Navigation.
- Primary body text.
- High-contrast graphic elements.

Electric Cyan: #00E5FF
- Primary action buttons.
- Selected navigation indicators.
- Interactive accents.
- Small graphic details.
- Select hover states.

Cool Grey: #D9D9D9
- Image placeholders.
- Dividers.
- Secondary surfaces.
- Subtle framing elements.

Secondary Text Grey: #555555
- Captions.
- Supporting descriptions.
- Secondary information.

### Color Rules

White and black dominate the visual experience.

Cyan is an accent, not a general background color. Avoid using it for large decorative areas.

Use black text on cyan buttons for strong contrast.

Never place small white text on cyan.

Project imagery should retain its original colors unless the user requests a specific treatment.

## Typography

Use free Google Fonts exclusively.

### Display Typeface
Cormorant Garamond

Uses:
- Main homepage headline.
- Project feature titles.
- Large editorial statements.
- Log-in welcome heading.

Desktop:
- Main display: fluid 70–120px (7.8vw)
- Section headings: 56px; home gallery label: 13px
- Secondary headings: 38px

Mobile:
- Main display: 52px
- Section headings: 38px
- Secondary headings: 30px

Suggested weights:
- Regular 400
- Medium 500

Use italic selectively for editorial emphasis.

### Supporting Typeface
DM Sans

Uses:
- Navigation.
- Body text.
- Project descriptions.
- Captions.
- Buttons.
- Form labels.

Sizes:
- Body: 16px desktop, 15px mobile
- Navigation: 13px
- Captions: 12px
- Buttons: 14px

Body line height: 1.6.

Navigation and small labels may use subtle letter spacing.

Avoid excessive uppercase typography.

## Layout and Grid

### Overall System

Desktop:
- 12-column grid.
- Maximum content width: 1440px.
- Outer margins: 5vw.
- Standard column gap: 24px.

Tablet:
- 8-column grid.
- Outer margins: 32px.

Mobile:
- 4-column grid.
- Outer margins: 20px.
- Column gap: 12px.

Use a consistent spacing scale:
8px, 16px, 24px, 32px, 48px, 64px, 96px.

Spacing should create hierarchy without producing unnecessarily long empty sections.

### Home Page

An asymmetrical editorial composition.

- Oversized serif introduction.
- Prominent architectural imagery.
- Featured work presented at varied scales.
- Select images offset from the central grid.
- Carefully positioned captions.
- A clear route to the Projects page.

The composition should feel artistic but remain readable and responsive.

### Projects Page

A structured gallery.

- Consistent alignment.
- Clear project titles.
- Image-led project cards.
- Predictable browsing.
- Two columns on larger screens.
- One column on phones.

Use visual consistency to balance the more experimental homepage.

### About Page

A restrained editorial layout.

- Prominent name and introduction.
- Space for a portrait.
- Concise biography.
- Architectural interests.
- Contact information, if provided.

Avoid unnecessarily long paragraphs.

## Image Treatment

The portfolio supports:
- Architectural plans.
- Sections and elevations.
- Physical model photography.
- Sketches and design studies.

Home:
- Large images.
- Varied proportions.
- Controlled asymmetry.
- Occasional full-width imagery.

Projects:
- Consistent gallery previews.
- Neutral framing.
- Clear captions.

Maintain original image proportions where appropriate.

Avoid excessive cropping of technical drawings.

Never apply filters that obscure architectural details.

Images should not overlap in ways that make them difficult to interpret.

Where no image is available, display a plain grey placeholder with a specific label such as:

[ADD: photograph of architectural model]

Every image must have meaningful alt text.

## Movement

Movement should be subtle and polished.

Allowed:
- Gentle fade-in reveals.
- Small vertical image transitions.
- Underline animations on navigation.
- Smooth hover transitions.
- Subtle image scaling on project cards.

Suggested timing:
- Hover transitions: 150–250ms.
- Reveal animations: 350–500ms.

Avoid:
- Aggressive parallax.
- Automatic carousels.
- Constantly moving elements.
- Dramatic page transitions.
- Scroll hijacking.

Respect prefers-reduced-motion.

Movement must never delay access to content.

## Log-In Page

File: login.html

Visual concept: Minimal Editorial.

- Clean white background.
- Large serif welcome headline.
- Small architectural portfolio identifier.
- Minimal supporting text.
- Email and password fields.
- Electric cyan primary action button.
- Black button text.
- Clear option to switch between log-in and sign-up.
- Visible form labels.
- Clear error and success messages.

The page should feel like the cover of an architecture publication.

Use generous but controlled whitespace.

On mobile, the form should fit comfortably within the viewport width.

No project content should be revealed before authentication.

## Navigation

Use a minimal header on authenticated pages.

Left:
Margo Medeiros Architecture

Right:
Home
Projects
About
Log Out

On smaller screens, use an accessible menu button that reveals all destinations.

Navigation should remain consistent across pages.

The current page should be identifiable through a subtle cyan accent or underline.

Avoid decorative navigation elements that reduce usability.

## Buttons

Primary:
- Cyan background.
- Black text.
- Minimal rectangular form.
- Subtle hover darkening.
- Clear keyboard focus indicator.

Secondary:
- White or transparent background.
- Black border.
- Black text.
- Subtle hover treatment.

Avoid excessive rounding, gradients, and shadows.

## Tone of Voice

Writing should be:
- Confident.
- Thoughtful.
- Clear.
- Concise.
- Personal without being overly casual.
- Focused on architectural ideas and design decisions.

Use short project descriptions and meaningful captions.

Avoid inflated claims, unnecessary jargon, and pretentious language.

Never describe a project as innovative, groundbreaking, or award-winning without factual support.

## Five Never Rules

1. Never allow decorative elements to compete with architectural work.
2. Never use excessive animation, parallax, or scroll effects.
3. Never create cluttered compositions or unnecessarily long empty sections.
4. Never use long, vague, or pretentious project descriptions.
5. Never sacrifice accessibility, readability, or mobile usability for visual experimentation.

## Selected direction — Scheme A: Editorial spread

Scheme A is the selected design for the website. The home page lives at the top level as index.html; comparison pages and scheme folders are removed.

A small ruled masthead leads into a two-column introduction: oversized Cormorant Garamond headline on the left, DM Sans description and cyan Projects action on the right. The headline reads “Ideas take shape.” with a capital I, a final period, and a line break after “Ideas”. The description reads “Architectural drawings, physical models, and sketches.”

The home gallery uses three equal columns on desktop, with 24px gaps and aligned tops and captions. Each preview uses a 3:4 frame capped at 420px tall; the complete physical model photograph remains visible without cropping. Drawing and sketch placeholders use the same frame proportions. On phones the previews stack and remain centered, capped at 315px wide. Captions are 12px. The introduction uses 64px top and 56px bottom spacing. On mobile the 52px headline, copy and gallery stack in reading order, with 20px margins and 32px gallery spacing.

Projects uses a consistent two-column gallery, stacking on phones. Project names and descriptions remain explicitly labelled placeholders. About uses a portrait placeholder beside a short first-person biography and a note about discovering architectural interests. No credentials or contact details are invented.

Log-in uses the same white, serif editorial language with labelled email/password fields, cyan submit button, sign-up switch and accessible status messages. Protected page content stays hidden until the Supabase session check succeeds. The public project URL and publishable key must be supplied in config.js. Missing configuration produces a clear setup message on login.html. Authentication is not simulated.

The mobile header uses an accessible Menu button. All authenticated pages include Home, Projects, About and Log Out. Keyboard focus is visible. Share metadata uses the portfolio identity; share images use the approved model photo and project covers.

## Approved portfolio introduction

Display this introduction beside Margo Medeiros in the home page introduction section:

My work explores how ideas take shape through architectural drawings, physical models, and sketches. This portfolio brings together studies of space and form, showing both the process of developing an idea and the work that emerges from it.

## Between House project presentation

projects.html shows a clickable Between House card with a full model photograph, house name, assignment label and View project cue. Clicking anywhere on the card opens between-house.html. The full presentation lives on that protected detail page with a Back to Projects link. A serif Between House heading is paired with the supporting label “Jutaku House · Assignment”. A two-column opening presents a full model photograph and concise project introduction; a three-column row presents the other model views. Below, floor plans, elevations and sections each receive a large uncropped sheet preview and an original PDF link. The layout becomes a single column on mobile. Use the existing white background, black typography, subtle rules and cyan action accent. The three-column photo row is specific to views within this project. The project index uses the two-column gallery described above, stacking on phones. Cards have visible keyboard focus and a subtle cyan underline on hover.

## Home preview destinations

Each home figure is a keyboard-accessible link including its caption: Physical model opens Between House; Drawing opens Project 2; Photograph opens Project 3. Use a cyan caption underline on hover and visible keyboard focus. Project 3 presents Street Smarts from the supplied ARC 111 portfolio. Project 2 uses the supplied ARC 101 documentation, titled Analysis of Urban Form and Tracing Exercises, with a drawing preview and full-sheet gallery. Both projects have matching cards on Projects and protected detail pages with Back to Projects links. Preserve the balanced home gallery sizing.

## Project 2 presentation

Use the supplied ARC 101 Assignments 01 and 02 portfolio. Present the original title, course, semester and faculty as documented; use both complete original written reflections verbatim. Display urban-form sheets and the tracing sheet with their bottom student, faculty and assignment footer cropped from every web image. Keep the drawings proportional and provide links to the original PDF. The home Drawing preview and Projects card use the urban-form drawing on portfolio page 3, rendered as a drawing-only crop that excludes all PDF margins, page numbers and documentation footer, then proportionally fitted to its preview frame. Never stretch the drawing; crop the footer from detail images as well. Preserve the balanced home sizing.

## Project 3 — Street Smarts

Use the ARC 111 portfolio for its title and reflection. Present site photography, field sketches, model photographs and the final drawing in an editorial gallery. Crop document margins and student/faculty/assignment footers from rendered images without stretching. Use the site photograph as the home preview, Projects card cover, and Street Smarts opening image, proportionally fitted with centered cover cropping. Keep the full final drawing in the project gallery. Link to the unchanged original PDF.

## Overall display scale

Apply a uniform 80% display scale across all pages, including log-in, so typography, images and spacing appear 20% smaller. Preserve responsive layouts and image proportions.

The home page Project 3 caption reads “Photograph” to match the Street Smarts site photo.

## Project writing policy

Projects 2 and 3 use all original description text exactly as written, including spelling and punctuation. Remove PDF line-wrap hyphenation only when reflowing paragraphs. Between House is explicitly permitted to remain paraphrased. Opening summaries may be added only after explicit user approval; keep the full original reflections unchanged. The BA6 summaries below were explicitly approved.

## About page draft for review

Keep the restrained editorial layout and portrait placeholder. The biography includes the user-supplied Boston background, first-year University of Miami status and Bachelor of Architecture studies. Skills are grounded in supplied portfolio work, presented as developing skills rather than expert credentials. Architectural interests remain open and exploratory.

## Projects card assignment labels

Describe the cover images in the small labels on Projects cards: “Physical model”, “Urban plan”, and “Site photograph”. Keep project titles below the labels. Image alt text describes the corresponding cover subject: the Between House model, St. Augustine urban plan, or South Greenway Drive site photograph.

## Approved share images

Home, Projects, About and Login use images/physical-model.png. Between House uses images/between-house/model-terraces.png. Project 2 uses images/project-2/map-cover.jpg. Street Smarts uses images/project-3/site-photograph.jpg. Every page supplies an absolute HTTPS og:image URL, descriptive og:image:alt and image dimensions. These metadata images do not alter visible page layouts.

## Production identity and domain

The website identity is Margo Medeiros Architecture. Production URL: https://margo-medeiros-architecture-alpha.vercel.app/ . All share-image URLs use this hostname. Supabase Site URL and allowed authentication redirect URLs must use the new production domain; administrative settings must be confirmed separately.

## Crawler preference — find me, do not train on me

Add robots.txt at the website root with a Google-Extended group and Disallow: /. This opts out of the uses governed by Google-Extended while leaving Googlebot search crawling unrestricted by this rule. It does not guarantee indexing, bypass the login gate, or opt out of every AI provider. Preserve the baseline Before entries in SEO.md and keep the audit excluded from Vercel. The user has approved publishing this crawler rule.

## Approved page titles — BA6

Use these user-approved browser-tab titles. Keep visible headings, descriptions, project text and other metadata unchanged in this checklist step.

- login.html: Log In to the Portfolio | Margo Medeiros
- index.html: Architecture Portfolio | Margo Medeiros
- projects.html: Architecture Projects | Margo Medeiros
- about.html: About Margo Medeiros | Architecture Student
- between-house.html: Between House | Margo Medeiros
- project-2.html: Analysis of Urban Form and Tracing Exercises | Margo Medeiros
- project-3.html: Street Smarts | Margo Medeiros

SEO.md is a tracked audit document, excluded from Vercel deployment using /SEO.md in .vercelignore. This exclusion is necessary when publishing this checklist change.

## Login decision — BA6

The user has decided to keep the login page and the existing session gate for portfolio pages. Crawler rules do not remove or bypass authentication.

## Approved meta descriptions — BA6

The user approved the following descriptions. Apply them only to the HTML meta name="description" tags. Keep visible writing, titles, headings, social metadata and login behavior unchanged.

- login.html: Log in or create an account to view Margo Medeiros’s architecture portfolio.
- index.html: Explore Margo Medeiros’s architecture portfolio through drawings, physical models, sketches, and photography.
- projects.html: View Between House, Analysis of Urban Form and Tracing Exercises, and Street Smarts by Margo Medeiros.
- about.html: Meet Margo Medeiros, a first-year Bachelor of Architecture student at the University of Miami from Boston. Read about her developing skills and architectural interests.
- between-house.html: Explore Between House, Margo Medeiros’s Jutaku House assignment, through physical model photographs and AutoCAD floor plans, elevations, and sections.
- project-2.html: View Margo Medeiros’s analysis of St. Augustine’s urban form and architectural tracing exercises, with drawings and her written reflections.
- project-3.html: Explore Margo Medeiros’s study of South Greenway Drive in Coral Gables through site photography, field sketches, model photographs, and a final drawing.

## Approved heading hierarchy — BA6

Every page keeps exactly one H1. Login, Projects and About headings stay unchanged. Home keeps H1 Ideas take shape. and H2 Selected work; rename its second H2 to Portfolio introduction. Between House uses H2 Model studies and Architectural drawings with H3 Floor plans, Elevations and Sections. Project 2 uses H2 Analysis of Urban Form and Tracing Exercises. Street Smarts uses H2 Project reflection and H2 Project documentation, with H3 Site photograph, Field sketches, Physical model and Final drawing under documentation. The user approved these labels. Preserve existing typography and all original description paragraphs.

## Approved image alt text — BA6

Use the following user-approved short descriptions for displayed images. Repeated assets use the same description. Keep visible captions, source images, project writing, headings and metadata unchanged. Login has no displayed images; About retains its explicitly labeled portrait placeholder.

- images/physical-model.png: Between House model showing exposed stairs and a pitched roof.
- images/between-house/model-terraces.png: Between House model showing projecting terraces and a pitched roof.
- images/between-house/model-opposite-view.png: Opposite view of the Between House model showing terraces and the stair opening.
- images/between-house/model-stair-volume.png: Between House model showing stair flights across multiple levels.
- images/between-house/model-side-view.png: Side view of the Between House model showing stairs, terraces, and the roof.
- images/between-house/floor-plans.png: Three Between House floor plans showing room layouts and stairs.
- images/between-house/elevations.png: Four Between House elevations showing openings, terraces, and roof profiles.
- images/between-house/sections.png: Two Between House sections showing floor levels, stairs, and the pitched roof.
- images/project-2/map-cover.jpg: Hand-drawn plan of St. Augustine showing streets, trees, and the fort.
- images/project-2/sheet-3.jpg: Hand-drawn plan of St. Augustine showing streets, trees, and the fort.
- images/project-2/sheet-4.jpg: Hand-drawn urban plan showing building footprints, streets, and trees.
- images/project-2/sheet-5.jpg: Architectural drawings showing elevations, floor plans, sections, and facade details.
- images/project-2/sheet-7.jpg: Tracing exercises showing plans, architectural views, trees, and urban studies.
- images/project-3/site-photograph.jpg: House and landscaping on South Greenway Drive, Coral Gables.
- images/project-3/field-sketches.jpg: Field sketches of a lantern-topped pillar, decorative gate, and landmark plaque.
- images/project-3/model-studies.jpg: Four views of a streetscape model showing a house, trees, and the ground plane.
- images/project-3/final-drawing.jpg: Street elevation and plan showing trees, a house, sidewalk, and street.

## Approved About introduction — BA6

Use Margo Medeiros consistently as the user-approved site identity. The user approved these first two biography sentences:

I’m Margo Medeiros, a first-year Bachelor of Architecture student at the University of Miami School of Architecture. Originally from Boston, I create physical models, architectural drawings, and sketches through my studio coursework in Miami.

Keep the rest of the biography and architectural-interests text unchanged. The website name is approved; no independent LinkedIn profile verification has been performed.

## Approved opening project summaries — BA6

Place one user-approved paragraph directly below the H1 on each project detail page. The Between House brief and hypothetical studio-block site were supplied by the user, who allowed paraphrasing. The user approved the Project 2 and Street Smarts drafts. Keep all original reflection paragraphs unchanged below these new summaries.

### between-house.html

Between House is a Jutaku home designed for a hypothetical neighborhood, with student-designed homes grouped into blocks by studio, each with 12 students. The brief limited each home to 48 feet in height, 15 feet in width, and 48 feet in depth, while requiring it to respond cohesively to neighboring houses and follow site restrictions. I organized the house around an art studio positioned centrally, both vertically and horizontally—giving Between House its name. The design also prioritizes natural light within the constraints of closely spaced homes.

### project-2.html

This project combines an urban-form study of St. Augustine, Florida, with architectural tracing exercises. The assignments involved studying urban form and practicing architectural drawing. My study examines the city’s streets, public spaces, buildings, and landscape, while the tracing exercises helped me learn to read plans and sections.

### project-3.html

Street Smarts studies South Greenway Drive in Coral Gables, Florida, through site observation, field sketches, a physical model, and a final drawing. The project involved observing the street and recreating a portion of it. My work examines how the street, sidewalk, landscape, and buildings form layers that shape the experience of the place.

## Approved coursework and authorship credits — BA6

About includes H2 Coursework and credits, University of Miami School of Architecture — Fall 2026, and two course bullets. ARC 101: Design I is one class with faculty Crystal Torres and Sebastian Eiler; its listed work is Analysis of Urban Form and Tracing Exercises and Between House, Jutaku House assignment. ARC 111: Visualization I lists faculty Maria Cannavo and Street Smarts. The user confirmed every project is Fall 2026, all work and photographs are their own, and all projects are individual with no partners.

Approved About statement: All projects shown are individual work. All drawings, models, and photographs are my own.

Approved project-page credit: Drawings, models, and photographs by Margo Medeiros. Individual project.

No internships, awards, exhibitions, publications or firm work are added.

## Approved internal-link labels — BA6

Home retains its media labels and adds each project destination: Physical model — Between House; Drawing — Analysis of Urban Form and Tracing Exercises; Photograph — Street Smarts. Projects card cues name their destination. Keep Home, About and Back to Projects links on every project. PDF link text names its sheet or project portfolio. Update accessible names to match visible destination labels. Preserve all URLs, images, alt text and original project writing.

## Approved Person and CreativeWork schema — BA6

Embed static JSON-LD in the HTML head. About contains one Person with a stable @id at https://margo-medeiros-architecture-alpha.vercel.app/about.html#person, the approved Margo Medeiros name, About URL, University of Miami School of Architecture affiliation and the approved first two biography sentences. Each project detail page contains one CreativeWork with its existing title, the same Person creator identity, page URL, cover image, Fall 2026 temporal coverage and verbatim approved opening summary. Project 2 uses St. Augustine, Florida as contentLocation; Street Smarts uses South Greenway Drive, Coral Gables, Florida. Between House describes the hypothetical site in its summary and has no real geographic location claim. No birth date, awards, qualifications, LinkedIn URL or exact creation date is added. Preserve visible content, login behavior and all other metadata.

## Google Search Console ownership verification

Serve the user-supplied google5592fedfbe394a61.html unchanged at the website root, publicly accessible without the portfolio login gate. It is a Search Console ownership verification resource, not a portfolio content page. Keep SEO.md excluded from deployment.

## Public-page sitemap

Serve sitemap.xml at the website root. Include only login.html, the public content page under the retained login-gate decision. Exclude protected portfolio pages, the Google verification resource and the internal SEO audit. Add the absolute sitemap URL to robots.txt without changing the Google-Extended rule. Submit the sitemap to the matching verified Search Console property when access is available. Do not claim that submission removes login barriers or guarantees indexing.
