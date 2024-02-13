import Swiper from 'swiper';
import 'swiper/css';

const swiperAnimation = () => {
  // swiperBundle();
  let swiperFavorite = new Swiper('.home-slider', {
    loop: true,
    effect: "fade",
    slidesPerView: 'auto',
    centeredSlides: 'auto',
    grabCursor: true,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    speed: 1500,
    ease: 'ease-in-out'
  })

  return swiperFavorite;
}

export default swiperAnimation;