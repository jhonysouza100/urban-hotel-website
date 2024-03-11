import { Children, cloneElement, useEffect, useRef } from "react";
import { AuthToaster } from "../hooks/useAuth.jsx";
import '../css/01-header.css';


export default function Header({children,userData}) {

  // Pasar 'userData' como prop a los elementos hijos
  const childrenWithProps = Children.map(children, child => cloneElement(child, { userData }));
  
  const isScroll = useRef(false);
  
  // =============== ON SCROLL ===============
  const scrollHeader = () => { window.scrollY >= 50 ? isScroll.current = true : isScroll.current = false; updateHeaderBackground(); updateActiveSections(); };

 // =============== Update Header Class ===============
  const updateHeaderBackground = () => {
    const HEADER = document.getElementById("header");
    if (HEADER) {
      // Si isScroll.current no está vacío
      HEADER.classList.toggle("is-scroll", Boolean(isScroll.current));
    }
  };

  // =============== SCROLL SECTIONS ACTIVE LINK ===============
  const updateActiveSections = () => {
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
    window.addEventListener("scroll", scrollHeader);
    return () => {
      // limpia el evento de desplazamiento cuando el componente se desmonta para evitar posibles problemas de memoria.
      window.removeEventListener("scroll", scrollHeader);
    };
  });

  return (
    <header className={`header`} id="header">
      
      {/* <NavMenu userData={userData} /> */}
      <nav className="nav container">
        {/* NAVMENU con contenido dinamico */}
        <>{childrenWithProps}</>
      </nav>

      {/* ============ TOASTER ============ */}
      {userData && <AuthToaster username={userData.username} />}
      
    </header>
  );
}
