const fadeElements = document.querySelectorAll('.fade-up');

function revealFadeElements() {
  fadeElements.forEach((element) => {
    if (element.getBoundingClientRect().top < window.innerHeight - 100) {
      element.classList.add('show');
    }
  });
}

const navbar = document.querySelector('.navbar');
const hero = document.querySelector('.hero');
const heroBg = document.querySelector('.hero-bg');
const heroContent = document.querySelector('.hero-content');
const parallaxItems = document.querySelectorAll('.parallax-item');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function applyParallax() {
  if (prefersReducedMotion) return;
  const scrollY = window.scrollY;
  if (hero && heroBg && heroContent && scrollY <= hero.offsetHeight) {
    heroBg.style.transform = `translate3d(0, ${scrollY * 0.45}px, 0) scale(1.1)`;
    heroContent.style.transform = `translate3d(0, ${scrollY * 0.18}px, 0)`;
    heroContent.style.opacity = String(Math.max(0, 1 - scrollY / (hero.offsetHeight * 1.2)));
  }
  parallaxItems.forEach((item) => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      const offset = (rect.top - window.innerHeight * 0.5) * 0.08;
      item.style.transform = `translate3d(0, ${offset}px, 0)`;
    }
  });
}

function handleScroll() {
  navbar?.classList.toggle('scrolled', window.scrollY > 50);
  revealFadeElements();
  applyParallax();
}

window.addEventListener('scroll', handleScroll, { passive: true });
handleScroll();

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

function closeMobileMenu() {
  nav?.classList.remove('active');
  toggle?.classList.remove('active');
  toggle?.setAttribute('aria-expanded', 'false');
}

toggle?.addEventListener('click', (event) => {
  event.stopPropagation();
  const isOpen = nav.classList.toggle('active');
  toggle.classList.toggle('active', isOpen);
  toggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.nav-links a').forEach((link) => link.addEventListener('click', closeMobileMenu));
document.addEventListener('click', (event) => {
  if (nav?.classList.contains('active') && !nav.contains(event.target) && !toggle.contains(event.target)) closeMobileMenu();
});

const quoteForm = document.querySelector('#quote-form');
quoteForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(quoteForm);
  const text = [
    'Hello MD Creative Tanzania, I would like a quotation.',
    `Name: ${data.get('name')}`,
    `Phone: ${data.get('phone')}`,
    `Email: ${data.get('email')}`,
    `Service: ${data.get('service')}`,
    `Project details: ${data.get('message')}`
  ].join('\n');
  window.open(`https://wa.me/255743828620?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
});
