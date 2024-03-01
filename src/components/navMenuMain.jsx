import { useContext, useEffect, useRef } from "react";
import AppContext from "../context/context";
import { APP_IMAGES } from "../data";
import { Stack } from "@mui/material";
import AccountMenu from "./accountMenu";

export default function NavMenuMain({userData, links})  {

  userData = {username: "Jhony Souza", email: "jonysouza@gmail.com", picture: "img/admin1.webp"}

  const {handleTheme, toggleTheme, themeIcon} = useContext(AppContext);

  // importo las imagenes
  const {logoImg} = APP_IMAGES;

  useEffect(() => {
    handleTheme();
  });

  const isShow = useRef(false);
  // =============== OPEN/CLOSE MENU ===============
  const handleMenuClick = () => { 
    isShow.current = !isShow.current;
    const NAVMENU = document.querySelector("#navmenu");
    if (NAVMENU) {
      // Si isShow.current no está vacío
      NAVMENU.classList.toggle("is-open", Boolean(isShow.current));
    }};
    
  // =============== CLOSE MENU ON LINK CLICK ===============
  const handleLinkClick = (e) => { if (e.target.classList.contains("navmenu-link")) handleMenuClick(); };

  
  return (
    <>
      {/* ============ theme ? logo button ============ */}
      <div className="theme-button" onClick={toggleTheme}>
      <img className="nav-logo" src={logoImg} alt="logo img" />
      </div>

      {/* NAV LIST & ACCOUNT MENU */}
      <Stack direction="row" spacing={{ xs: 2, sm: 3, md: 4, lg: "4rem" }}>
        
      <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} className={`navmenu`} id="navmenu" onClick={handleLinkClick}>
        
        <ul className="navmenu-list">
          {links && links.map((el, i) => (
            <li className="navmenu-item" key={crypto.randomUUID()}><a href={el.href} className={`navmenu-link ${i === 0 ? 'is-active' : ''}`}>{el.text}</a></li>
          ))}
        </ul>
        {/* ============ close menu button ============ */}
        <div className="navmenu-close" id="navmenu-close" onClick={handleMenuClick}>
          <i className="ri-close-line" />
        </div>
      </Stack>

        {/* ============= USER AVATAR MENU ============ */}
        <AccountMenu userData={userData} />

        {/* ============ toggle menu button ============ */}
        <div className="navmenu-button" id="navmenu-button" onClick={handleMenuClick}>
          <i className="ri-menu-fill" />
        </div>

      </Stack>
    </>
  )
}