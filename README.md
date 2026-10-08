# Margo Medeiros Architecture

Static HTML, CSS and JavaScript. Serve this folder with a local HTTP server, then open login.html. No build step.

## Setup remaining

Add the Supabase public project URL and publishable key to config.js. Never use secret or service_role keys. Enable email/password authentication. Configure the site URL and allowed login.html redirect URLs in Supabase for local and deployed origins. Email confirmation is supported.

Supply project images, project names/descriptions, biography, interests and an approved share image. Add og:image metadata when the asset is available.

Publish the repository to GitHub and import it into Vercel as a static site with no build command and the repository root as output. No deployment has been performed yet.

The authentication gate redirects signed-out visitors and hides page content until session checks succeed. Public static HTML and images are still directly accessible; this is not server-side access control.

Authentication logic follows the Supabase JavaScript documentation: https://supabase.com/docs/reference/javascript/auth-getsession and https://supabase.com/docs/reference/javascript/auth-onauthstatechange . Live sign-up, log-in and log-out verification requires project configuration.
