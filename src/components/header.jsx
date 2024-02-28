import { useContext, useEffect, useRef } from "react";
import AppContext from "../context/context.jsx";
import AccountMenu from "./accountMenu.jsx";
import DrawerMenu from "./drawerMenu.jsx";
import {APP_IMAGES} from "../data/index";
import { Stack } from "@mui/material";
import { AuthToaster } from "../hooks/useAuth.jsx";
import '../css/01-navbar.css';

function header() {
  let { userData, appTexts, handleTheme, toggleTheme, icon} = useContext(AppContext);
  userData = {username: "Jhony Souza", email: "jonysouza@gmail.com", picture: "img/admin1.webp"}
  
  // data proveniente de la autenticacion de usuario
  const {navtext1, navtext2, navtext3, navtext4} = appTexts;
  const {logoImg} = APP_IMAGES;

  // =============== CHANGE HEADER BACKGROUND ===============
  const isScroll = useRef(false);
  const scrollHeader = () => { window.scrollY >= 50 ? isScroll.current = true : isScroll.current = false; updateHeaderClass(); activeSections(); };
 // =============== Update Header Class ===============
  const updateHeaderClass = () => {
    const HEADER = document.getElementById("header");
    if (HEADER) {
      // Si isScroll.current no está vacío
      HEADER.classList.toggle("is-scroll", Boolean(isScroll.current));
    }
  };
  // =============== SCROLL SECTIONS ACTIVE LINK ===============
  const activeSections = () => {
    const SECTIONS = document.querySelectorAll("section[id]");
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
  };
  
  useEffect(() => {
    handleTheme();
    
    window.addEventListener("scroll", scrollHeader);
  
    return () => {
      // limpia el evento de desplazamiento cuando el componente se desmonta para evitar posibles problemas de memoria.
      window.removeEventListener("scroll", scrollHeader);
    };
  });
  

  // =============== OPEN MENU ===============
  const isShow = useRef(false);
  const handleShow = () => { 
    isShow.current = !isShow.current;
    const NAVMENU = document.querySelector("#navmenu");
    if (NAVMENU) {
      // Si isShow.current no está vacío
      NAVMENU.classList.toggle("is-open", Boolean(isShow.current));
    }
    
   };
  // =============== REMOVE MENU ON LINK CLICK ===============
  const handleClick = (e) => { if (e.target.classList.contains("navmenu-link")) handleShow(); };

  return (
    <header className={`header`} id="header">
      <nav className="nav container">
        {/* ============ theme ? logo button ============ */}
        <div className="theme-button" onClick={toggleTheme}>
        <img className="nav-logo" src={logoImg} alt="logo img" />
        </div>

        {/* NAV LIST & ACCOUNT MENU */}
        <Stack direction="row" spacing={{ xs: 2, sm: 3, md: 4, lg: "4rem" }}>
          
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}className={`navmenu`} id="navmenu" onClick={handleClick}>
          <ul className="navmenu-list">
            <li className="navmenu-item"><a href="#home" className="navmenu-link is-active">{navtext1}</a></li>
            <li className="navmenu-item"><a href="#location" className="navmenu-link">{navtext2}</a></li>
            <li className="navmenu-item"><a href="#popular" className="navmenu-link">{navtext3}</a></li>
            <li className="navmenu-item"><a href="#services" className="navmenu-link">{navtext4}</a></li>
          </ul>
          {/* ============ close menu button ============ */}
          <div className="navmenu-close" id="navmenu-close" onClick={handleShow}>
            <i className="ri-close-line" />
          </div>
        </Stack>

          {/* ============= USER AVATAR MENU ============ */}
          <AccountMenu userData={userData} />

          {/* ============ toggle menu button ============ */}
          <div className="navmenu-button" id="navmenu-button" onClick={handleShow}>
            <i className="ri-menu-fill" />
          </div>

        </Stack>
      </nav>

      <DrawerMenu userData={userData} />

      {/* ============ TOASTER ============ */}
      {userData && <AuthToaster username={userData.username} />}
      
    </header>
  );
}

export default header;
