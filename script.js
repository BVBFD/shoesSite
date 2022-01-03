let menu = document.querySelector("#menu-btn");
let header = document.querySelector(".header");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  header.classList.toggle("active");
  document.body.classList.toggle("active");
};

window.onscroll = () => {
  if (window.innerWidth < 1200) {
    menu.classList.remove("fa-times");
    header.classList.remove("active");
    document.body.classList.remove("active");
  }
};

let productPreviewContainer = document.querySelector(
  ".products-preview-container"
);
let productPreview =
  productPreviewContainer.querySelectorAll(".product-preview");

document.querySelectorAll(".products .slide .btn").forEach((detailBtn) => {
  detailBtn.onclick = () => {
    productPreviewContainer.style.display = "block";
    let name = detailBtn.dataset.product;
    productPreview.forEach((preview) => {
      let target = preview.dataset.target;
      console.log(target);
      if (name == target) {
        preview.style.display = "flex";
      }
    });
  };
});

document
  .querySelectorAll(".products-preview-container .product-preview .fa-times")
  .forEach((close) => {
    close.onclick = () => {
      productPreviewContainer.style.display = "none";
      productPreview.forEach((closePreview) => {
        closePreview.style.display = "none";
      });
    };
  });

let swiperProducts = new Swiper(".products-slider", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

let swiperReview = new Swiper(".review-slider", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});
