let swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 1,
      },
      2560: {
        slidesPerView: 3,
        spaceBetween: 1,
      },
    },
  });