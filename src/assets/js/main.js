/*=============== OPEN MENU ===============*/
const NAVMENU = document.querySelector('.navmenu'),
NAVTOGGLE = document.querySelector('.navmenu-button'),
NAVCLOSE = document.querySelector('.navmenu-close'),
toggleMenu = () => { NAVMENU.classList.toggle('is-open') }

NAVTOGGLE.onclick = toggleMenu
NAVCLOSE.onclick = toggleMenu

/*=============== REMOVE MENU ON LINK CLICK ===============*/
const NAVLINK = document.querySelectorAll('.navmenu-link').forEach(el => el.onclick = toggleMenu)

/*=============== ADD BLUR TO HEADER ===============*/
const HEADER = document.querySelector('.header')
const blurHeader = () => this.scrollY >= 50 ? HEADER.classList.add('is-scroll') : HEADER.classList.remove('is-scroll')

/*=============== SHOW SCROLL UP ===============*/ 
const SCROLLUP = document.querySelector('.scrollup')
const scrollUp = () => this.scrollY >= 350 ? SCROLLUP.classList.add('is-show') : SCROLLUP.classList.remove('is-show')

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const SECTIONS = document.querySelectorAll('section[id]')
const activeSections = () => {
  SECTIONS.forEach(el => {
    const sectionHght = el.offsetHeight,
    sectionTop = el.offsetTop -58,
    sectionId = el.getAttribute('id'),
    sectionClass = document.querySelector('.navmenu a[href*=' + sectionId + ']')
    if(scrollY > sectionTop && scrollY < sectionTop + sectionHght) {
      sectionClass.classList.add('is-active')
    } else {
      sectionClass.classList.remove('is-active')
    }
  })
}


/*=============== LIGHT THEME ===============*/
const THEMEBTN = document.querySelector('.theme-button i')
const lightTheme = 'light-theme',
      iconFillTheme = 'ri-lightbulb-fill',
      iconLineTheme = 'ri-lightbulb-line';

// Activar/Desactivar el tema manualmente con el botón
THEMEBTN.onclick = () => {
  // Agregar o eliminar el tema oscuro/icono
  document.body.classList.toggle(lightTheme);
  THEMEBTN.classList.toggle(iconFillTheme);
  THEMEBTN.classList.toggle(iconLineTheme);
};

/*=============== COMBINE ALL SCROLL FUNCTIONS ===============*/
const handleScroll = () => {
  blurHeader()
  scrollUp()
  activeSections()
};

/*=============== ASSIGN TO WINDOW ONSCROLL ===============*/
window.onscroll = handleScroll

/*=============== SCROLL REVEAL ANIMATION ===============*/


/*=============== SWIPER OPTIONS ===============*/
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