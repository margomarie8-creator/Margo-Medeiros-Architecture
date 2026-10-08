(() => {
  const protectedPage = document.body.dataset.protected === 'true';
  const content = document.getElementById('protected-content');
  const status = document.getElementById('auth-status');
  const form = document.getElementById('auth-form');
  const submit = document.getElementById('submit-auth');
  const toggle = document.getElementById('switch-auth');
  const config = window.PORTFOLIO_CONFIG || {};
  const report = (message, kind = 'error') => {
    if (status) { status.textContent = message; status.dataset.kind = kind; }
  };
  const leave = () => { if (content) content.hidden = true; location.replace('login.html'); };
  let signup = false;
  let busy = false;
  toggle?.addEventListener('click', () => {
    if (busy) return;
    signup = !signup;
    submit.textContent = signup ? 'Sign up' : 'Log in';
    toggle.textContent = signup ? 'Already have an account? Log in' : 'Create an account';
    document.getElementById('auth-heading').innerHTML = signup ? 'Create your<br>account.' : 'Welcome<br>to the portfolio.';
    const password = document.getElementById('password');
    password.autocomplete = signup ? 'new-password' : 'current-password';
    if (signup) password.minLength = 6; else password.removeAttribute('minlength');
    document.getElementById('confirmation-note').hidden = !signup;
    report('', 'success');
  });
  let client;
  try {
    if (!config.supabaseUrl || !config.supabasePublishableKey) throw new Error('Log-in is not configured yet. Add the public Supabase project URL and publishable key in config.js.');
    if (!window.supabase) throw new Error('The authentication service could not load. Check your connection and reload.');
    client = window.supabase.createClient(config.supabaseUrl, config.supabasePublishableKey);
  } catch (error) {
    if (protectedPage) { leave(); return; }
    report(error.message); submit.disabled = true;
    return;
  }
  client.auth.onAuthStateChange((_event, session) => {
    if (!session && protectedPage) leave();
    if (session && !protectedPage) location.replace('index.html');
  });
  const checkSession = async () => {
    try {
      const { data, error } = await client.auth.getSession();
      if (error) throw error;
      if (protectedPage) { if (!data.session) { leave(); return; } content.hidden = false; }
      else if (data.session) location.replace('index.html');
    } catch (error) { if (protectedPage) leave(); else report('Could not check your session. Please reload and try again.'); }
  };
  checkSession();
  window.addEventListener('pageshow', (event) => { if (event.persisted) { if (content) content.hidden = true; checkSession(); } });
  document.querySelector('[data-logout]')?.addEventListener('click', async (event) => {
    event.currentTarget.disabled = true;
    try {
      const { error } = await client.auth.signOut();
      if (error) throw error;
      leave();
    } catch (error) {
      document.getElementById('logout-status').textContent = 'Could not log out. Please try again.';
      event.target.disabled = false;
    }
  });
  form?.addEventListener('submit', async (event) => {
    event.preventDefault(); if (busy) return;
    busy = true; submit.disabled = true; toggle.disabled = true;
    report(signup ? 'Creating your account…' : 'Logging in…', 'success');
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value;
    try {
      const { data, error } = signup
        ? await client.auth.signUp({ email, password, options: { emailRedirectTo: new URL('login.html', location.href).href } })
        : await client.auth.signInWithPassword({ email, password });
      if (error) throw error;
      form.elements.password.value = '';
      if (data.session) { location.replace('index.html'); return; }
      report('Check your inbox. If confirmation is required, confirm your email before logging in.', 'success');
    } catch (error) { report(error.message || 'Authentication failed. Please try again.'); }
    finally { busy = false; submit.disabled = false; toggle.disabled = false; }
  });
})();
