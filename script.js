let menu = document.querySelector("#menu-btn");
let header = document.querySelector(".header");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  header.classList.toggle("active");
  document.body.classList.toggle("active");
};

let swiper = new Swiper(".products-slider", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  breakpoints: {
    0: {
      slidePerView: 1,
    },
    768: {
      slidePerView: 2,
    },
    991: {
      slidePerView: 3,
    },
  },
});
