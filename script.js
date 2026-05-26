const fadeElements = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver((entries)=>{

  entries.forEach((entry)=>{

    if(entry.isIntersecting){

      entry.target.classList.add('show');

    }

  });

});

fadeElements.forEach((el)=>{
  observer.observe(el);
});const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", ()=>{

  let current = "";

  sections.forEach((section)=>{

    const sectionTop = section.offsetTop;

    if(pageYOffset >= sectionTop - 200){
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach((link)=>{

    link.classList.remove("active");

    if(link.getAttribute("href") === "#" + current){
      link.classList.add("active");
    }

  });

});window.addEventListener("scroll", ()=>{

  const hero = document.querySelector(".hero");

  hero.style.backgroundPositionY =
  window.pageYOffset * 0.5 + "px";

});/* NAVBAR SHADOW ON SCROLL */

window.addEventListener("scroll", ()=>{

  const navbar =
  document.querySelector(".navbar");

  navbar.classList.toggle(
    "scrolled",
    window.scrollY > 50
  );

});