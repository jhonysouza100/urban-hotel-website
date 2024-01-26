import { useContext, useEffect, useState } from "react";
import AppContext from "../context/context.jsx";
import {AuthButton} from "../hooks/useAuth.js";


function header() {
  const {userData} = useContext(AppContext);
  console.log(userData);
  const {handleTheme, toggleTheme, icon } = useContext(AppContext);
  useEffect(() => {
    handleTheme();
  }, []);

  const [bgHead, setBgHead] = useState("");
  useEffect(() => {
    // =============== CHANGE HEADER BACKGROUND ===============
    const scrollHeader = () => { window.scrollY >= 50 ? setBgHead(" is-scroll") : setBgHead("") };

    // =============== SCROLL SECTIONS ACTIVE LINK ===============
    const SECTIONS = document.querySelectorAll("section[id]");
    const activeSections = () => {
      const scrollY = window.pageYOffset;
      if(SECTIONS) {
        SECTIONS.forEach(el => {
          const sectionHght = el.offsetHeight,
          sectionTop = el.offsetTop -58,
          sectionId = el.getAttribute('id'),
          sectionClass = document.querySelector('.navmenu a[href*=' + sectionId + ']')
          if(sectionClass) {
            if(scrollY > sectionTop && scrollY < sectionTop + sectionHght) {
              sectionClass.classList.add('is-active')
            } else {
              sectionClass.classList.remove('is-active')
            }
          }
        })
      }
    }
    
    window.addEventListener("scroll", scrollHeader);
    window.addEventListener("scroll", activeSections);
    return () => { // limpia el evento de desplazamiento cuando el componente se desmonta para evitar posibles problemas de memoria.
      window.removeEventListener("scroll", activeSections);
      window.removeEventListener("scroll", scrollHeader);
    };
  }, []);

  // =============== OPEN MENU ===============
  const [isShow, setIsShow] = useState(false);
  const handleShow = () => { setIsShow(!isShow); };
  // =============== REMOVE MENU ON LINK CLICK ===============
  const handleClick = (e) => { if (e.target.classList.contains("navmenu-link")) handleShow(); };

  return (
    <header className={`header${bgHead}`} id="header">
      <nav className="nav container">
        {/* theme button */}
        <div className="theme-button" onClick={toggleTheme}>
          <i className={`${icon}`} />
        </div>
        <div className={`navmenu ${isShow ? "is-open" : "" }`} id="navmenu" onClick={handleClick}>
          <ul className="navmenu-list">
            <li className="navmenu-item"><a href="#home" className="navmenu-link is-active">Inicio</a></li>
            <li className="navmenu-item"><a href="#location" className="navmenu-link">Ubicación</a></li>
            <li className="navmenu-item"><a href="#popular" className="navmenu-link">Fotos</a></li>
            <li className="navmenu-item"><a href="#services" className="navmenu-link">Servicios</a>            </li>
            <li className="navmenu-item"><a href="#explore" className="navmenu-link">Explora</a></li>
            <li className="navmenu-item"><AuthButton /></li>
          </ul>
          {/* close button */}
          <div className="navmenu-close" id="navmenu-close" onClick={handleShow}>
            <i className="ri-close-line" />
          </div>
        </div>
        {/* toggle button */}
        <div className="navmenu-button" id="navmenu-button" onClick={handleShow}>
          <i className="ri-menu-fill" />
        </div>
      </nav>
    </header>
  );
}

export default header;
