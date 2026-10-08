# SPEC.md
# Margo Medeiros Architecture — Website Specification

## Website Overview

Name: Margo Medeiros Architecture

Type: Personal architecture portfolio.

Purpose:
Present architectural drawings, physical models, digital renderings, and sketches in a professional yet artistic online portfolio.

Primary audience:
People interested in viewing Margo Medeiros's architectural work, including potential academic and professional reviewers.

The website should communicate creativity, professionalism, and an understanding of architectural presentation.

## Site Structure

Required pages:

1. login.html
2. index.html
3. projects.html
4. about.html

index.html must be located at the top level of the website folder.

All internal navigation links must use relative paths.

Every page except login.html requires authentication.

## Page 1: Log-In and Sign-Up

File: login.html

Purpose:
Provide the public entrance to the website and allow visitors to create an account or log in.

Content:
- Portfolio name.
- Editorial welcome headline.
- Email field.
- Password field.
- Log-in button.
- Sign-up option.
- Authentication error messages.
- Authentication success messages.

Visual treatment:
Follow the minimal editorial log-in design in DESIGN.md.

Authentication:
Use Supabase Authentication.

Visitors must be able to:
- Sign up with email and password.
- Log in with an existing account.
- Receive clear feedback when authentication fails.
- Switch between sign-up and log-in.

If email confirmation is enabled in Supabase, explain that visitors must confirm their email before logging in.

After successful authentication, redirect to index.html.

login.html must never require authentication.

If a visitor is already signed in, login.html may redirect them to index.html.

## Page 2: Home

File: index.html

Purpose:
Introduce the portfolio and create a memorable first impression.

Content:
- Margo Medeiros Architecture identity.
- Large editorial introduction.
- Featured architectural imagery.
- Selected project previews.
- Links to the Projects page.
- Short introductory text.
- Navigation to other pages.
- Log Out control.

Layout:
Asymmetrical editorial composition.

Use varied image sizes and purposeful whitespace.

Do not invent project titles or descriptions.

Until actual content is supplied, use clearly labelled placeholders.

## Page 3: Projects

File: projects.html

Purpose:
Present architectural work in an organized, browsable gallery.

Content:
- Projects heading.
- Structured image gallery.
- Project title for each supplied project.
- Short project description, if supplied.
- Architectural drawings.
- Physical model photography.
- Digital renderings.
- Sketches.

Layout:
Two-column gallery on desktop where space permits.

Single-column gallery on mobile.

Project cards should use consistent spacing and image presentation.

Do not invent projects, project dates, locations, dimensions, materials, or descriptions.

Use placeholders until actual content is available.

Individual project pages are not required in the initial version.

## Page 4: About

File: about.html

Purpose:
Introduce Margo Medeiros and provide context for the architectural work.

Content:
- Margo Medeiros name.
- Short biography, once supplied.
- Architectural interests, once supplied.
- Optional portrait.
- Optional contact information.
- Navigation.
- Log Out control.

Do not invent academic credentials, professional experience, awards, personal background, or contact details.

If a biography is not supplied, display a clearly labelled text placeholder.

## Authentication Requirements

Provider:
Supabase Authentication.

Method:
Email and password.

Supabase must be loaded through its CDN script tag.

Use the public Supabase project URL and publishable key in the client configuration.

Never include a Supabase secret key or service_role key in frontend files.

### Required Behavior

login.html:
- Publicly accessible.
- Supports sign-up.
- Supports log-in.
- Redirects authenticated visitors to index.html.

index.html:
- Requires authentication.

projects.html:
- Requires authentication.

about.html:
- Requires authentication.

When a signed-out visitor requests any protected page, redirect them to login.html.

This includes direct navigation to an address ending in .html.

Check authentication before displaying protected page content.

Every protected page must provide a working Log Out control.

After logging out, redirect to login.html.

Use Supabase's session management and authentication state methods.

### Security Scope

This is a client-side authentication gate for a static portfolio.

It redirects signed-out visitors away from protected HTML pages, but it does not make static HTML or image files private.

Files deployed publicly to Vercel may remain directly accessible through their URLs.

Do not claim that client-side redirects provide server-side access control.

If truly private portfolio assets are needed later, that requires a separate access-control design outside this initial scope.

## Technical Requirements

Use:
- HTML.
- CSS.
- Vanilla JavaScript.

Do not use:
- React.
- Vue.
- Angular.
- Next.js.
- npm.
- Build tools.
- Frameworks.

The website must run as a static site.

Use a Supabase CDN script tag.

Use Google Fonts for typography.

Use relative links for internal navigation and local assets.

Suggested structure:

/
  login.html
  index.html
  projects.html
  about.html
  styles.css
  auth.js
  script.js
  images/
  DESIGN.md
  SPEC.md
  AGENTS.md

Additional plain JavaScript or CSS files may be added if necessary.

Keep the structure simple.

## Responsive Design

The website must work on:
- Desktop computers.
- Tablets.
- Mobile phones.

Requirements:
- No horizontal overflow.
- Readable text.
- Responsive images.
- Accessible mobile navigation.
- Touch-friendly buttons.
- Usable authentication forms.
- Consistent page spacing.

The mobile version must preserve the design identity while simplifying complex editorial layouts.

## Image Management

All user-supplied images belong in:

images/

Use descriptive filenames.

Every image requires alt text.

Do not invent image contents or architectural details.

Where an image is missing, use a plain grey placeholder.

Placeholder format:

[ADD: image of ...]

Examples:

[ADD: photograph of architectural model]

[ADD: architectural floor plan]

[ADD: digital rendering of project]

[ADD: architectural sketch]

Placeholders must remain visibly identifiable until replaced.

If an image file exceeds 500 KB, inform the user.

Optimize large images where possible without losing important architectural detail.

## Content Rules

Never invent:
- Project names.
- Building dimensions.
- Project dates.
- Project locations.
- Materials.
- Design intentions.
- Academic achievements.
- Professional credentials.
- Personal information.
- Contact information.

Ask the user when information is missing.

Do not present placeholder content as factual information.

The user's supplied drawings, photographs, and descriptions are the source of truth.

## Navigation

All authenticated pages must include:
- Home.
- Projects.
- About.
- Log Out.

Every destination must be reachable through the menu.

Use relative links:

index.html
projects.html
about.html
login.html

The current page should have a visible active state.

Navigation must work with a keyboard and on touchscreens.

## Accessibility

Requirements:
- Semantic HTML.
- Descriptive page titles.
- One-line meta descriptions.
- Meaningful alt text.
- Visible keyboard focus states.
- Sufficient text contrast.
- Accessible form labels.
- Clear authentication feedback.
- Reduced-motion support.

Add Open Graph metadata, including a share image, so shared links display appropriately.

The share image must be an original user-provided or approved asset, not an invented project image.

## Deployment

Source control:
GitHub.

Hosting:
Vercel.

Deployment:
Publish the static website from its GitHub repository to Vercel.

No build step is required.

Configure Vercel to serve the static files.

Add the deployed site URL to Supabase's allowed authentication redirect URLs where needed.

Use HTTPS for the published website.

The live site must work on mobile devices.

When presenting the live website link, make it open in a new browser tab or window.

## Out of Scope

Do not implement:
- Payments.
- E-commerce.
- Visitor profiles.
- Analytics databases.
- Project database tables.
- Comment systems.
- Messaging systems.
- Storage of visitor information beyond authentication.
- Additional database tables.
- Complex content management systems.

Supabase is used for authentication only.

## Completion Checklist

The website is done when:

- [ ] The website works on a phone.
- [ ] The menu reaches every page.
- [ ] Sign-up works using Supabase.
- [ ] Log-in works using Supabase.
- [ ] Log Out works on every protected page.
- [ ] Typing a protected page address ending in .html while signed out redirects to login.html.
- [ ] login.html is accessible without authentication.
- [ ] Successful log-in redirects to index.html.
- [ ] Every image has alt text.
- [ ] Missing images use labelled grey placeholders.
- [ ] All internal links are relative.
- [ ] Every page has a title and one-line description.
- [ ] A share image is configured.
- [ ] The site is published from GitHub to Vercel.
- [ ] The live link opens in a new tab or window.
