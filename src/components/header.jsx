function header() {

// =============== OPEN MENU ===============
const NAVMENU = document.querySelector('.navmenu'),
NAVTOGGLE = document.querySelector('.navmenu-button'),
NAVCLOSE = document.querySelector('.navmenu-close'),
toggleMenu = () => { NAVMENU.classList.toggle('is-open') }

NAVTOGGLE.onclick = toggleMenu
NAVCLOSE.onclick = toggleMenu
// =============== REMOVE MENU ON LINK CLICK ===============
const NAVLINK = document.querySelectorAll('.navmenu-link').forEach(el => el.onclick = toggleMenu)
// =============== ADD BLUR TO HEADER ===============
const HEADER = document.querySelector('.header')
const blurHeader = () => this.scrollY >= 50 ? HEADER.classList.add('is-scroll') : HEADER.classList.remove('is-scroll')
// =============== SCROLL SECTIONS ACTIVE LINK ===============
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
// =============== COMBINE ALL SCROLL FUNCTIONS ===============
const handleScroll = () => {
  blurHeader()
  activeSections()
}
window.onscroll = handleScroll

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <div className="theme-button">
          <i className="ri-lightbulb-fill" />
        </div>
        <div className="navmenu" id="navmenu">
          <ul className="navmenu-list">
            <li className="navmenu-item">
              <a href="#home" className="navmenu-link is-active">
                Inicio
              </a>
            </li>
            <li className="navmenu-item">
              <a href="#location" className="navmenu-link">
                Ubicación
              </a>
            </li>
            <li className="navmenu-item">
              <a href="#popular" className="navmenu-link">
                Fotos
              </a>
            </li>
            <li className="navmenu-item">
              <a href="#services" className="navmenu-link">
                Servicios
              </a>
            </li>
            <li className="navmenu-item">
              <a href="#explore" className="navmenu-link">
                Iguazú
              </a>
            </li>
            <li className="navmenu-item">
              <a href="#join" className="navmenu-link">
                Login
              </a>
            </li>
          </ul>
          {/* close button */}
          <div className="navmenu-close" id="navmenu-close">
            <i className="ri-close-line" />
          </div>
        </div>
        {/* toggle button */}
        <div className="navmenu-button" id="navmenu-button">
          <i className="ri-menu-fill" />
        </div>
      </nav>
    </header>
  );
}

export default header;
