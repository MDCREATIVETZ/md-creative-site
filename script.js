/* FADE UP ANIMATION */

const fadeElements =
document.querySelectorAll(".fade-up");

function revealFadeElements(){

  fadeElements.forEach((element)=>{

    const windowHeight =
    window.innerHeight;

    const elementTop =
    element.getBoundingClientRect().top;

    if(elementTop < windowHeight - 100){

      element.classList.add("show");

    }

  });

}

window.addEventListener(
  "scroll",
  revealFadeElements
);

revealFadeElements();

/* ACTIVE NAVIGATION */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-links a");

const navbar =
document.querySelector(".navbar");

const hero =
document.querySelector(".hero");

const heroBg =
document.querySelector(".hero-bg");

const heroContent =
document.querySelector(".hero-content");

const parallaxItems =
document.querySelectorAll(".parallax-item");

const prefersReducedMotion =
window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function applyParallax(){

  if(prefersReducedMotion){
    return;
  }

  const scrollY =
  window.scrollY;

  if(hero && heroBg && heroContent){

    const heroHeight =
    hero.offsetHeight;

    if(scrollY <= heroHeight){

      heroBg.style.transform =
      `translate3d(0, ${scrollY * 0.45}px, 0) scale(1.1)`;

      heroContent.style.transform =
      `translate3d(0, ${scrollY * 0.18}px, 0)`;

      heroContent.style.opacity =
      String(Math.max(0, 1 - scrollY / (heroHeight * 1.2)));

    }else{

      heroBg.style.transform = "";
      heroContent.style.transform = "";
      heroContent.style.opacity = "";

    }

  }

  parallaxItems.forEach((item)=>{

    const rect =
    item.getBoundingClientRect();

    const windowHeight =
    window.innerHeight;

    if(rect.top < windowHeight && rect.bottom > 0){

      const speed =
      parseFloat(item.dataset.parallaxSpeed) || 0.12;

      const offset =
      (rect.top - windowHeight * 0.5) * speed;

      item.style.transform =
      `translate3d(0, ${offset}px, 0)`;

    }

  });

}

window.addEventListener("scroll", ()=>{

  let current = "";

  sections.forEach((section)=>{

    const sectionTop =
    section.offsetTop;

    if(window.scrollY >= sectionTop - 200){

      current =
      section.getAttribute("id");

    }

  });

  navLinks.forEach((link)=>{

    link.classList.remove("active");

    if(
      link.getAttribute("href")
      === "#" + current
    ){

      link.classList.add("active");

    }

  });

  /* NAVBAR EFFECT */

  if(navbar){

    if(window.scrollY > 50){

      navbar.classList.add("scrolled");

    }else{

      navbar.classList.remove("scrolled");

    }

  }

  applyParallax();

});

applyParallax();

/* MOBILE MENU */

const toggle =
document.querySelector(".menu-toggle");

const nav =
document.querySelector(".nav-links");

function closeMobileMenu(){

  if(nav){
    nav.classList.remove("active");
  }

  if(toggle){
    toggle.classList.remove("active");
    toggle.setAttribute("aria-expanded", "false");
  }

}

if(toggle && nav){

  toggle.addEventListener("click", (e)=>{

    e.stopPropagation();

    const isOpen =
    nav.classList.toggle("active");

    toggle.classList.toggle("active", isOpen);
    toggle.setAttribute(
      "aria-expanded",
      isOpen ? "true" : "false"
    );

  });

}

/* CLOSE MOBILE MENU */

navLinks.forEach((link)=>{

  link.addEventListener("click", closeMobileMenu);

});

/* CLOSE MENU WHEN CLICK OUTSIDE */

document.addEventListener("click",(e)=>{

  if(
    nav &&
    toggle &&
    nav.classList.contains("active") &&
    !nav.contains(e.target) &&
    !toggle.contains(e.target)
  ){

    closeMobileMenu();

  }

});