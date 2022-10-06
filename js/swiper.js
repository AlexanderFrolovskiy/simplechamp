document.addEventListener('DOMContentLoaded', function() {

  var swiperHero = new Swiper(".swiper-hero", {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 1,
    speed: 800,
    pagination: {
      el: ".swiper-pagination-hero",
      horizontalClass: 'swiper-pagination-horizontal-hero',
      bulletActiveClass: 'swiper-pagination-hero--active',
      bulletClass: 'swiper-pagination-bullet-hero',
      clickable: true,
    },
  });

  var swiperVideo = new Swiper(".swiper-video", {
    spaceBetween: 30,
    slidesPerView: 1,
    speed: 400,
    pagination: {
      el: ".swiper-pagination-video",
      type: 'bullets',
      horizontalClass: 'swiper-pagination-horizontal-video',
      bulletActiveClass: 'swiper-pagination-video--active',
      bulletClass: 'swiper-pagination-bullet-video',
      clickable: true,
    },
  });

  var swiperEvent = new Swiper(".swiper-event", {
    loop: true,
    speed: 800,
    pagination: {
      el: ".swiper-pagination-event",
      type: 'bullets',
      horizontalClass: 'swiper-pagination-horizontal-event',
      bulletActiveClass: 'swiper-pagination-event--active',
      bulletClass: 'swiper-pagination-bullet-event',
      clickable: true,
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 40
      },
      769: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      }
    }
  });


  var swiperSmallHockey = new Swiper(".mySwiperSmallHockey", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiperLadgeHockey = new Swiper(".mySwiperLadgeHockey", {
    spaceBetween: 10,
    effect: 'fade',
    navigation: {
      nextEl: ".swiper-button-next--hockey",
      prevEl: ".swiper-button-prev--hockey"
    },
    thumbs: {
      swiper: swiperSmallHockey,
    },
  });

  var swiperSmallFootball = new Swiper(".mySwiperSmallFootball", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiperLadgeFootball = new Swiper(".mySwiperLadgeFootball", {
    spaceBetween: 10,
    effect: 'fade',
    navigation: {
      nextEl: ".swiper-button-next--football",
      prevEl: ".swiper-button-prev--football"
    },
    thumbs: {
      swiper: swiperSmallFootball,
    },
  });

  var swiperSmallKnife = new Swiper(".mySwiperSmallKnife", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiperLadgeKnife = new Swiper(".mySwiperLadgeKnife", {
    spaceBetween: 10,
    effect: 'fade',
    navigation: {
      nextEl: ".swiper-button-next--knife",
      prevEl: ".swiper-button-prev--knife"
    },
    thumbs: {
      swiper: swiperSmallKnife,
    },
  });

  var swiperSmallRugby = new Swiper(".mySwiperSmallRugby", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiperLadgeRugby = new Swiper(".mySwiperLadgeRugby", {
    spaceBetween: 10,
    effect: 'fade',
    navigation: {
      nextEl: ".swiper-button-next--rugby",
      prevEl: ".swiper-button-prev--rugby"
    },
    thumbs: {
      swiper: swiperSmallRugby,
    },
  });

  var swiperSmallBoxing = new Swiper(".mySwiperSmallBoxing", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiperLadgeBoxing = new Swiper(".mySwiperLadgeBoxing", {
    spaceBetween: 10,
    effect: 'fade',
    navigation: {
      nextEl: ".swiper-button-next--boxing",
      prevEl: ".swiper-button-prev--boxing"
    },
    thumbs: {
      swiper: swiperSmallBoxing,
    },
  });

  var swiperSmallPresentation = new Swiper(".mySwiperSmallPresentation", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiperLadgePresentation = new Swiper(".mySwiperLadgePresentation", {
    spaceBetween: 10,
    effect: 'fade',
    navigation: {
      nextEl: ".swiper-button-next--presentation",
      prevEl: ".swiper-button-prev--presentation"
    },
    thumbs: {
      swiper: swiperSmallPresentation,
    },
  });

  const swiperReviews = new Swiper(".swiper-reviews", {
    loop: true,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination--reviews',
      type: 'bullets',
      horizontalClass: 'swiper-pagination-horizontal-reviews',
      bulletActiveClass: 'swiper-pagination-reviews--active',
      bulletClass: 'swiper-pagination-bullet-reviews',
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next--reviews",
      prevEl: ".swiper-button-prev--reviews",
    },
  });

});