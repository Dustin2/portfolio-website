// Page behavior: reveal on scroll, mobile menu, language choice, cursor light on the grid,
// timeline progress and copy email. Every effect respects prefers-reduced-motion.

const $ = <T extends Element>(selector: string) => document.querySelector<T>(selector);
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

// Fade sections in, and light up a project's stages, as they enter the screen.
const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add('in'), io.unobserve(e.target))),
  { threshold: 0.15 },
);
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

// Remember the language the visitor picks, so the first-visit redirect never overrides it.
document.querySelectorAll<HTMLAnchorElement>('.lang a').forEach((a) =>
  a.addEventListener('click', () => {
    try { localStorage.setItem('lang', a.dataset.lang ?? 'en'); } catch {}
  }),
);

// Mobile menu: toggle, and close after picking a section.
const nav = $<HTMLElement>('nav');
const menuBtn = $<HTMLButtonElement>('.menu-btn');
if (nav && menuBtn) {
  const setMenu = (open: boolean) => {
    nav.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
  };
  menuBtn.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
  document.querySelectorAll('#nav-links a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
}

// Cursor light: the grid brightens around the mouse. Mouse only, one update per frame.
if (matchMedia('(pointer: fine)').matches && !reduced) {
  const root = document.documentElement;
  let x = 0, y = 0, queued = false;
  addEventListener('pointermove', (e) => {
    x = e.clientX; y = e.clientY;
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => {
      root.style.setProperty('--gx', `${x}px`);
      root.style.setProperty('--gy', `${y}px`);
      queued = false;
    });
  }, { passive: true });
}

// Timeline: the line fills as the middle of the screen passes it, and each marker lights up.
const timeline = $<HTMLElement>('.timeline');
if (timeline) {
  const jobs = timeline.querySelectorAll('.job');
  const fill = () => {
    const mid = innerHeight / 2, r = timeline.getBoundingClientRect();
    timeline.style.setProperty('--p', String(Math.min(1, Math.max(0, (mid - r.top) / r.height))));
    jobs.forEach((j) => j.classList.toggle('lit', j.getBoundingClientRect().top + 12 < mid));
  };
  addEventListener('scroll', fill, { passive: true });
  addEventListener('resize', fill);
  fill();
}

// Copy email; if the clipboard is blocked, open the mail app instead.
const mail = $<HTMLButtonElement>('.contact .mail');
const toast = $<HTMLElement>('.toast');
if (mail && toast) {
  const email = mail.dataset.email ?? '';
  mail.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(email);
      toast.textContent = toast.dataset.copied ?? '';
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 2000);
    } catch {
      location.href = `mailto:${email}`;
    }
  });
}
