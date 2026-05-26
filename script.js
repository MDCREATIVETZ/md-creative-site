const fadeElements = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
});

fadeElements.forEach((el) => {
  observer.observe(el);
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");
const hero = document.querySelector(".hero");
const navbar = document.querySelector(".navbar");

// Tumeunganisha matukio yote ya scroll hapa kwa ufanisi zaidi
window.addEventListener("scroll", () => {
  
  // 1. ACTIVE NAVIGATION LINKS ON SCROLL
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });

  // 2. HERO PARALLAX EFFECT
  if (hero) {
    hero.style.backgroundPositionY = window.scrollY * 0.5 + "px";
  }

  // 3. NAVBAR SHADOW ON SCROLL
  if (navbar) {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  }

});hero.style.backgroundPositionY = window.scrollY * 0.5 + "px";