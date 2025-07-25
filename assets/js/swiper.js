new Swiper(".top__swiper", {
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

new Swiper(".promotion-swiper", {
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".promotion-swiper .swiper-button-next",
    prevEl: ".promotion-swiper .swiper-button-prev",
  },
});
