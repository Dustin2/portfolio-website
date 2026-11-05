// Page behavior: reveal on scroll, mobile menu, language choice, mouse light, typed role,
// timeline progress, marquee and copy email. Every effect respects prefers-reduced-motion.

const $ = <T extends Element>(selector: string) => document.querySelector<T>(selector);
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

// Fade sections in as they enter the screen.
const io = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('in')), { threshold: 0.15 });
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

// Mouse light: the hero glow follows the cursor and cards get a spotlight. Mouse only, not touch.
const follow = (el: HTMLElement, x: string, y: string) =>
  el.addEventListener('pointermove', (e) => {
    const r = el.getBoundingClientRect();
    el.style.setProperty(x, `${e.clientX - r.left}px`);
    el.style.setProperty(y, `${e.clientY - r.top}px`);
  });
if (matchMedia('(pointer: fine)').matches && !reduced) {
  const hero = $<HTMLElement>('.hero');
  if (hero) follow(hero, '--mx', '--my');
  document.querySelectorAll<HTMLElement>('.box').forEach((box) => follow(box, '--x', '--y'));
}

// Typed role under the name; with reduced motion it just shows the first phrase.
const typed = $<HTMLElement>('#typed');
if (typed) {
  const phrases: string[] = JSON.parse(typed.dataset.phrases ?? '[]');
  if (reduced || phrases.length === 0) {
    typed.textContent = phrases[0] ?? '';
  } else {
    let i = 0, n = 0, deleting = false;
    const tick = () => {
      const word = phrases[i % phrases.length] ?? '';
      n += deleting ? -1 : 1;
      typed.textContent = word.slice(0, n);
      let wait = deleting ? 40 : 90;
      if (!deleting && n >= word.length) { deleting = true; wait = 1600; }
      else if (deleting && n <= 0) { deleting = false; i++; wait = 300; }
      setTimeout(tick, wait);
    };
    tick();
  }
}

// Timeline: the line fills as the middle of the screen passes it, and each dot lights up.
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

// Marquee needs the list twice to loop without a gap; the copy is hidden from screen readers.
const stack = $<HTMLElement>('.marquee .stack');
if (stack && !reduced) {
  [...stack.children].forEach((s) => {
    const copy = s.cloneNode(true) as HTMLElement;
    copy.setAttribute('aria-hidden', 'true');
    stack.append(copy);
  });
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
