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

A small ruled masthead leads into a two-column introduction: oversized Cormorant Garamond headline on the left, DM Sans description and cyan Projects action on the right. The headline reads “ideas take shape” in lowercase, with a line break after “ideas”. The description reads “Architectural drawings, physical models, and sketches.”

The home gallery uses twelve columns. The supplied physical model photograph spans columns 1–7; the drawing spans 9–12 with a 96px offset; the sketch spans 2–6 in the next row. Captions are 12px. The introduction uses 64px top and 56px bottom spacing. On mobile the 52px headline, copy and gallery stack in reading order, with 20px margins and 32px gallery spacing.

Projects uses a consistent two-column gallery, stacking on phones. Project names and descriptions remain explicitly labelled placeholders. About uses a portrait placeholder beside labelled biography and architectural-interest placeholders. No credentials or contact details are invented.

Log-in uses the same white, serif editorial language with labelled email/password fields, cyan submit button, sign-up switch and accessible status messages. Protected page content stays hidden until the Supabase session check succeeds. The public project URL and publishable key must be supplied in config.js. Missing configuration produces a clear setup message on login.html. Authentication is not simulated.

The mobile header uses an accessible Menu button. All authenticated pages include Home, Projects, About and Log Out. Keyboard focus is visible. Share metadata uses the portfolio identity; a share image remains pending a supplied or approved asset.
