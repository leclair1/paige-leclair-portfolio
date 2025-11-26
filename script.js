// script.js — Interactive portfolio logic

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;
const defaultTheme = html.getAttribute('data-theme') || 'dark';
const savedTheme = localStorage.getItem('theme') || defaultTheme;
html.setAttribute('data-theme', savedTheme);
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
}

// Preloader
document.body.classList.add('preloading');
function hidePreloader() {
  const pre = document.getElementById('preloader');
  if (!pre || pre.classList.contains('hidden')) return;
  pre.classList.add('hidden');
  document.body.classList.remove('preloading');
}
window.addEventListener('load', () => setTimeout(hidePreloader, 250));
setTimeout(hidePreloader, 4000);

// Mobile Navigation (none: menu remains visible for all widths)

// Navbar scroll effects
const navbar = document.getElementById('navbar');
if (navbar) {
  navbar.style.transform = 'translateY(0)';
  window.addEventListener('scroll', () => {
    const y = window.pageYOffset;
    if (y > 100) navbar.classList.add('scrolled'); else navbar.classList.remove('scrolled');
    navbar.style.transform = 'translateY(0)';
  });
}

// Tabs: switch content instead of scrolling (disabled: using scroll navigation)
(function initTabs() {
  const USE_SECTION_TABS = false; // set true to re-enable tabbed sections
  if (!USE_SECTION_TABS) return;
  const panels = Array.from(document.querySelectorAll('.tab-panel'));
  if (!panels.length) return; // no tabs configured

  const links = Array.from(document.querySelectorAll('.nav-link'));
  const byId = id => document.getElementById(id);

  function setActiveLink(hrefId) {
    links.forEach(l => {
      const match = l.getAttribute('href') === `#${hrefId}`;
      l.classList.toggle('active', match);
      if (l.hasAttribute('aria-selected')) l.setAttribute('aria-selected', match ? 'true' : 'false');
    });
  }

  function setActivePanel(id) {
    panels.forEach(p => {
      const isActive = p.id === id;
      p.classList.toggle('is-hidden', !isActive);
      p.setAttribute('aria-hidden', isActive ? 'false' : 'true');
    });
  }

  function activate(id) {
    if (!id) id = 'home';
    const target = document.getElementById(id);
    if (!target || !target.classList.contains('tab-panel')) return;
    setActivePanel(id);
    setActiveLink(id);
  }

  // Initialize: hide all but selected (hash or default home)
  const initial = (location.hash || '#home').replace('#','');
  panels.forEach(p => p.classList.add('is-hidden'));
  activate(initial);

  // Intercept in-page links that target a tab-panel
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const raw = a.getAttribute('href');
      if (!raw || raw === '#') return;
      const id = raw.slice(1);
      const panel = document.getElementById(id);
      if (panel && panel.classList.contains('tab-panel')) {
        e.preventDefault();
        activate(id);
      }
    });
  });
})();

// Scroll-based active highlighting for navbar links
(() => {
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-link');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      const top = s.offsetTop - 120;
      const height = s.offsetHeight;
      if (window.pageYOffset >= top && window.pageYOffset < top + height) current = s.id;
    });
    navItems.forEach(i => {
      i.classList.remove('active');
      if (i.getAttribute('href') === `#${current}`) i.classList.add('active');
    });
  });
})();

// Typing animation (hero title)
const typingText = document.querySelector('.typing-text');
if (typingText) {
  const text = typingText.textContent;
  typingText.textContent = '';
  let i = 0;
  const speed = 85;
  const typeWriter = () => {
    if (i < text.length) {
      typingText.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  };
  setTimeout(typeWriter, 400);
}

// Rotate role badge text (Developer/Designer/Researcher)
(function rotateRoleBadge(){
  const roleEl = document.querySelector('.badge-role');
  if (!roleEl) return;
  const roles = ['Developer', 'Designer', 'Researcher'];
  let idx = 0;
  // Ensure initial text matches first role (optional)
  roleEl.textContent = roles[idx];
  const switchRole = () => {
    idx = (idx + 1) % roles.length;
    roleEl.classList.add('swap');
    // Wait for fade-out before swapping text
    setTimeout(() => {
      roleEl.textContent = roles[idx];
      roleEl.classList.remove('swap');
    }, 220);
  };
  // Start cycling
  setInterval(switchRole, 2400);
})();

// Intersection Observer reveal
const io = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.fade-in, .section').forEach(el => io.observe(el));

// Project filters
const chips = document.querySelectorAll('.chip');
const cards = document.querySelectorAll('.project-card');
chips.forEach(chip => {
  chip.addEventListener('click', () => {
    chips.forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    const filter = chip.dataset.filter;
    cards.forEach(card => {
      const tags = (card.dataset.tags || '').split(' ');
      const show = filter === 'all' || tags.includes(filter);
      card.style.display = show ? 'flex' : 'none';
    });
  });
});

// Modals
function openModal(sel) {
  const modal = document.querySelector(sel);
  if (!modal) return;
  modal.setAttribute('aria-hidden', 'false');
  const closeBtn = modal.querySelector('[data-close]');
  function cleanup() {
    modal.setAttribute('aria-hidden', 'true');
    modal.removeEventListener('click', outside);
    document.removeEventListener('keydown', esc);
  }
  function outside(e) { if (e.target === modal || e.target === closeBtn) cleanup(); }
  function esc(e) { if (e.key === 'Escape') cleanup(); }
  modal.addEventListener('click', outside);
  document.addEventListener('keydown', esc);
}
document.querySelectorAll('[data-modal-target]').forEach(btn => {
  btn.addEventListener('click', () => openModal(btn.getAttribute('data-modal-target')));
});

// Year
document.getElementById('year').textContent = String(new Date().getFullYear());

// About internal tabs
(function initAboutInternalTabs(){
  const about = document.getElementById('about');
  if (!about) return;
  const tabs = Array.from(about.querySelectorAll('.about-tab'));
  const panels = Array.from(about.querySelectorAll('.about-panel'));
  if (!tabs.length || !panels.length) return;
  function show(id){
    panels.forEach(p=>p.classList.add('is-hidden'));
    const panel = about.querySelector(`#${id}`);
    if (panel) panel.classList.remove('is-hidden');
    tabs.forEach(t=>{
      const active = t.dataset.target === id;
      t.classList.toggle('active', active);
      t.setAttribute('aria-selected', active ? 'true' : 'false');
    });
  }
  tabs.forEach(t=>{
    t.addEventListener('click', ()=> show(t.dataset.target));
  });
})();

// Projects internal tabs
(function initProjectsInternalTabs(){
  const projects = document.getElementById('projects');
  if (!projects) return;
  const tabs = Array.from(projects.querySelectorAll('.proj-tab'));
  const panels = Array.from(projects.querySelectorAll('.proj-panel'));
  if (!tabs.length || !panels.length) return;
  function show(id){
    panels.forEach(p=>p.classList.add('is-hidden'));
    const panel = projects.querySelector(`#${id}`);
    if (panel) panel.classList.remove('is-hidden');
    tabs.forEach(t=>{
      const active = t.dataset.target === id;
      t.classList.toggle('active', active);
      t.setAttribute('aria-selected', active ? 'true' : 'false');
    });
  }
  tabs.forEach(t=> t.addEventListener('click', ()=> show(t.dataset.target)));
})();

// Experience internal tabs
(function initExperienceInternalTabs(){
  const exp = document.getElementById('experience');
  if (!exp) return;
  const tabs = Array.from(exp.querySelectorAll('.exp-tab'));
  const panels = Array.from(exp.querySelectorAll('.exp-panel'));
  if (!tabs.length || !panels.length) return;

  function show(id){
    panels.forEach(p=>p.classList.add('is-hidden'));
    const panel = exp.querySelector(`#${id}`);
    if (panel) panel.classList.remove('is-hidden');
    tabs.forEach(t=>{
      const active = t.dataset.target === id;
      t.setAttribute('aria-selected', active ? 'true' : 'false');
    });
  }
  tabs.forEach(t=> t.addEventListener('click', ()=> show(t.dataset.target)));
})();

// Particles (lightweight canvas animation)
(function particles() {
  const c = document.getElementById('particles');
  if (!c) return;
  const ctx = c.getContext('2d');
  let w, h, dpr;
  const rand = (a,b) => Math.random()*(b-a)+a;
  let dots = [];
  // Use CSS palette colors
  const cssVar = (name) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  const hexToRgb = (hex) => {
    const m = hex.replace('#','').match(/^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
    if (!m) return { r: 204, g: 136, b: 153 }; // fallback dusty rose
    return { r: parseInt(m[1],16), g: parseInt(m[2],16), b: parseInt(m[3],16) };
  };
  let primary = hexToRgb(cssVar('--primary') || '#cc8899');
  let secondary = hexToRgb(cssVar('--secondary') || '#e8c3cf');

  function resize() {
    dpr = window.devicePixelRatio || 1;
    w = c.clientWidth;
    h = c.clientHeight;
    c.width = w * dpr;
    c.height = h * dpr;
    ctx.scale(dpr, dpr);
  }
  function init() {
    dots = [];
    const count = Math.max(90, Math.min(180, Math.floor(w*h/9500)));
    for (let i=0;i<count;i++) {
      dots.push({
        x: rand(0,w), y: rand(0,h),
        vx: rand(-0.4,0.4), vy: rand(-0.4,0.4),
        r: rand(0.6,1.8), a: rand(0.1,0.5)
      });
    }
  }
  function step() {
    ctx.clearRect(0,0,w,h);
    // lines
    for (let i=0;i<dots.length;i++) {
      const a = dots[i];
      for (let j=i+1;j<dots.length;j++) {
        const b = dots[j];
        const dx = a.x-b.x, dy = a.y-b.y;
        const dist = Math.sqrt(dx*dx+dy*dy);
        if (dist < 130) {
          ctx.strokeStyle = `rgba(${primary.r},${primary.g},${primary.b},${(1 - dist/130) * .22})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }
    // dots
    dots.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x<0||p.x>w) p.vx*=-1;
      if (p.y<0||p.y>h) p.vy*=-1;
      ctx.fillStyle = `rgba(${secondary.r},${secondary.g},${secondary.b},${p.a})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
      ctx.fill();
    });
    requestAnimationFrame(step);
  }
  window.addEventListener('resize', () => { resize(); init(); });
  resize(); init(); step();
})();
