// Init Lucide icons
lucide.createIcons();

// =============================================
// HAMBURGER MENU
// =============================================
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', String(isOpen));
});

// Close menu when a nav link is clicked
nav.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// =============================================
// REVEAL ON SCROLL (IntersectionObserver)
// =============================================
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger siblings within the same parent
        const siblings = entry.target.parentElement.querySelectorAll('.reveal');
        siblings.forEach((el, index) => {
          if (el === entry.target) {
            setTimeout(() => el.classList.add('visible'), index * 100);
          }
        });
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// =============================================
// HEADER TRANSPARENCY ON HERO
// =============================================
const header = document.getElementById('header');
const scrollContainer = document.getElementById('scroll-container');

scrollContainer.addEventListener('scroll', () => {
  const scrolled = scrollContainer.scrollTop;
  if (scrolled > 60) {
    header.style.background = 'rgba(24, 24, 24, 0.95)';
  } else {
    header.style.background = 'rgba(24, 24, 24, 0.85)';
  }
});

// =============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// =============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const targetId = anchor.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
