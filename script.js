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

  /* HERO PARALLAX */

  if(hero){
    hero.style.backgroundPosition =
    `center ${window.scrollY * 0.5}px`;
  }

});

/* MOBILE MENU */

const toggle =
document.querySelector(".menu-toggle");

const nav =
document.querySelector(".nav-links");

if(toggle && nav){

  toggle.addEventListener("click", ()=>{

    nav.classList.toggle("active");

  });

}

/* CLOSE MOBILE MENU */

navLinks.forEach((link)=>{

  link.addEventListener("click", ()=>{

    if(nav){

      nav.classList.remove("active");

    }

  });

});/* CLOSE MENU WHEN CLICK OUTSIDE */

document.addEventListener("click",(e)=>{

  if(
    nav &&
    toggle &&
    !nav.contains(e.target) &&
    !toggle.contains(e.target)
  ){

    nav.classList.remove("active");

  }

});