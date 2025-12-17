const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-4-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-4-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__container .section__header", { ...scrollRevealOption });
ScrollReveal().reveal(".header__container .section__description", { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal(".header__btns", { ...scrollRevealOption, delay: 1000 });
ScrollReveal().reveal(".service__card", { ...scrollRevealOption, interval: 200 });

// Configuração SWIPER (Galeria)
const swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  initialSlide: 1, 
  loop: true,
  coverflowEffect: {
    rotate: 30,
    stretch: 0,
    depth: 50,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

const instagram = document.querySelector(".instagram__images");
const instagramContent = Array.from(instagram.children);

instagramContent.forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden", true);
  instagram.appendChild(duplicateNode);
});