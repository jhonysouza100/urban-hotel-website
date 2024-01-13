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
      sectionClass.classList.add('active-link')
    } else {
      sectionClass.classList.remove('active-link')
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
const sr = ScrollReveal({
  origin: 'top',
  distance:'60px',
  duration: 2500,
  delay: 250,
  // reset: true // repetir animacion
})

sr.reveal(`.home-social, .explore-data, .explore-user, .footer-container`)
sr.reveal(`.home-card`, {delay: 350, distance: '100px', interval: 100})
sr.reveal(`.about-data, .join-image`, {origin: 'right'})
sr.reveal(`.about-image, .join-data`, {origin: 'left'})
sr.reveal(`.popular-card`, {interval: 200})

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
  speed: 500,
  ease: 'ease-in-out'
})