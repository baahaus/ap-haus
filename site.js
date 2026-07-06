// ap.haus — shared interactions (nav, reveals, before/after slider, quote form)

// mobile nav
const nav = document.querySelector('.nav');
const toggle = document.querySelector('.nav-toggle');
if (toggle) toggle.addEventListener('click', () => nav.classList.toggle('open'));

// scroll reveals
const io = new IntersectionObserver((entries) => {
  for (const e of entries) if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

// before/after slider — driven by an invisible range input (drag + keyboard)
document.querySelectorAll('.ba').forEach((ba) => {
  const range = ba.querySelector('.ba-range');
  const set = (v) => ba.style.setProperty('--ba', v + '%');
  set(range.value);
  range.addEventListener('input', () => set(range.value));
  // make drag feel 1:1 (range default steps on click; map pointer x directly)
  range.addEventListener('pointerdown', (ev) => {
    const move = (e) => {
      const r = ba.getBoundingClientRect();
      const v = Math.min(100, Math.max(0, ((e.clientX - r.left) / r.width) * 100));
      range.value = v; set(v);
    };
    const stop = () => {
      range.removeEventListener('pointermove', move);
      range.removeEventListener('pointerup', stop);
      range.removeEventListener('pointercancel', stop);
    };
    move(ev);
    range.setPointerCapture(ev.pointerId);
    range.addEventListener('pointermove', move);
    range.addEventListener('pointerup', stop);
    range.addEventListener('pointercancel', stop);
  });
});

// quote form → builds a mailto (no backend on GitHub Pages)
const form = document.querySelector('#quote-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const d = new FormData(form);
    const subject = `Website inquiry — ${d.get('business') || d.get('name') || 'new lead'}`;
    const body = [
      `Name: ${d.get('name') || ''}`,
      `Business: ${d.get('business') || ''}`,
      `Phone: ${d.get('phone') || ''}`,
      `Current site: ${d.get('site') || 'none'}`,
      `Interested in: ${d.get('interest') || ''}`,
      '',
      d.get('details') || '',
    ].join('\r\n');
    location.href = `mailto:${form.dataset.to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
