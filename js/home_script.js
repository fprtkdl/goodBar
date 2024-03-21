const swiperBox = new Swiper('.swiperBox > .swiper', {
  loop: false,
  slidesPerView: 6,
  spaceBetween: 30,
  resistande: false,
  touchRatio: 3,
  freeMode: true,
  slidesOffsetBefore: 150
})

new Swiper('.bestBarSlide > .swiper', {
  autoplay: {
    delay: 5000
  },
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next'
  }
});