import { useContext, useEffect, useRef } from "react";
import AppContext from '../context/context';
import { Link } from "react-router-dom";
import Layout from "../layouts/layout.jsx";
import Swiper from '../layouts/swiper.jsx';
import { RiCheckboxCircleLine, RiFacebookCircleFill, RiInstagramFill, RiMapPinLine, RiSendPlaneLine, RiWhatsappFill, RiCloseLine, RiMenuFill } from "@remixicon/react";
import { Stack } from "@mui/material";
import {Dashboard, LangSelect} from "../exports";
import {APP_LINKS, APP_IMAGES} from "../assets";

import '../css/02-home.css';
import '../css/03-location.css';
import '../css/04-popular.css';
import '../css/05-services.css';
import '../css/06-explore.css';
import '../css/07-join.css';

const NavMenuHome = ({userData, links}) => {

  // userData = {username: "Jhony Souza", email: "jonysouza@gmail.com", picture: "img/admin1.webp"}

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
      <img loading="lazy" className="nav-logo" src={logoImg} alt="logo-img" />
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
          <RiCloseLine className="custom-svg" />
        </div>
      </Stack>

        {/* ============= USER AVATAR MENU ============ */}
        <Dashboard userData={userData} />

        {/* ============ toggle menu button ============ */}
        <div className="navmenu-button" id="navmenu-button" onClick={handleMenuClick}>
          <RiMenuFill className="custom-svg" />
        </div>

      </Stack>
    </>
  )
}

export default function Main() {
  // trae del contexto: la funcion para manejar la galeria
  const {handleGallery, handleLang, appTexts} = useContext(AppContext);
  
  const {locationImg1, popularImg1, popularImg2, popularImg3, popularImg4 } = APP_IMAGES; // importa las imagenes
  
  // importo las direcciones para los enlaces
  const {facebookLink, hotelWhatsapp, instagramLink, googleMapsLink} = APP_LINKS;
  // importo los textos
  const {navtext1, navtext2, navtext3, navtext4, sociallinktitle1, locationtitle1, locationtitle2, locationbuttontitle1, locationdescription1, cardimgtext1, cardimgtext2, cardimgtext3, cardimgtext4, sectiontitle1, sectiontitle2,
    servicetext1, servicetext2} = appTexts;
    
    // crea un arreglo de imagenes para renderizar es las fotos con sus tipos
    const pholaroidImgs = [
    { src: popularImg1, title: cardimgtext1, type: "BREAKFAST" },
    { src: popularImg2, title: cardimgtext2, type: "ROOM" },
    { src: popularImg3, title: cardimgtext3, type: "POOL" },
    { src: popularImg4, title: cardimgtext4, type: "IGUAZU" },
  ];

  const links = [ {href: "#home", text: navtext1},
                  {href: "#location", text: navtext2},
                  {href: "#popular", text: navtext3},
                  {href: "#services", text: navtext4},
                ]
  

  return (
    <Layout navcontent={<NavMenuHome links={links} />}>
      <main className="main">
        {/*==================== HOME ====================*/}
        <section className="home" id="home">

          <Swiper />

          {/* LANG MENU */}
          <LangSelect />

          {/* social component */}
          <div className="home-social">
            <span className="home-social-text">{sociallinktitle1}</span>
            <div className="home-social-links">
              <a href={instagramLink} target="_blank" className="home-social-link" aria-label="Contact"><RiInstagramFill className="custom-svg" /></a>
              <a href={facebookLink} target="_blank" className="home-social-link" aria-label="Contact"><RiFacebookCircleFill className="custom-svg" /></a>
              <a href={hotelWhatsapp} target="_blank" aria-label="Contact" className="home-social-link"><RiWhatsappFill className="custom-svg" /></a>
            </div>
          </div>

        </section>
        {/*==================== LOCATION ====================*/}
        <section className="location section" id="location">
          <div className="location-container container grid">
            <div className="location-data">
              <h2 className="section-title">
                <RiMapPinLine className="custom-svg" /> {locationtitle1} <br />{" "}
                {locationtitle2}
              </h2>
              <p className="location-description">
                {locationdescription1}
              </p>
              <a
                target="_blank"
                href={googleMapsLink}
                className="button"
              >
                {locationbuttontitle1} <RiSendPlaneLine className="custom-svg"/>
              </a>
            </div>
            <div className="location-image">
              <img loading="lazy"
                src={locationImg1}
                className="location-img"
                alt="location-img"
              />
              <div className="shadow" />
            </div>
          </div>
        </section>
        {/*==================== POPULAR ====================*/}
        <section className="popular section" id="popular">
          <h3 className="photos-title section-title">{sectiontitle1}</h3>
          <div className="popular-container container grid">
            {pholaroidImgs.map(el => (
              <article className="popular-card" key={crypto.randomUUID()}>
                <div className="popular-image">
                  <img loading="lazy" src={el.src} className="popular-img" alt="popular-img"/>
                  <Link to={"/galeria"} rel='prefetch' onClick={() => handleGallery(el.type)} className="popular-button"><h2 className="popular-title">{el.title}</h2></Link>
                  {/* <div className="shadow" /> */}
                </div>
              </article>
            ))}
          </div>
        </section>
        {/*==================== SERVICES ====================*/}
        <section className="services section" id="services">
          <h3 className="services-title section-title">{sectiontitle2}</h3>
          <div className="services-container container grid">
            <div className="services-group left">
              {servicetext1 && servicetext1.map( el => (
              <div className="services-data" key={crypto.randomUUID()}>
                <RiCheckboxCircleLine className="custom-svg-checkbox"/>
                <div>
                  <h3 className="services-name">{el.t}</h3>
                  <span className="skils_level">{el.d}</span>
                </div>
              </div>))}
              
            </div>
            <div className="services-group right">
            {servicetext2 && servicetext2.map( el => (
              <div className="services-data" key={crypto.randomUUID()}>
                <RiCheckboxCircleLine className="custom-svg-checkbox"/>
                <div>
                  <h3 className="services-name">{el.t}</h3>
                  <span className="skils_level">{el.d}</span>
                </div>
              </div>))}
            </div>
          </div>
        </section>
        {/*==================== EXPLORE ====================*/}
        {/* <section className="explore section" id="explore">
          <div className="explore-container">
            <div className="explore-image">
              <img loading="lazy"
                src={exploreImg1}
                className="explore-img"
                alt="explore-img"
              />
              <div className="explore-shadow" />
            </div>
            <div className="explore-content container grid">
              <div className="explore-data">
                <h2 className="section-title">
                  Visita <br /> Iguazú
                </h2>
                <p className="explore-description">
                  Trabajamos para ofrecerte un servicio que cumpla con tus
                  expectativas y puedas disfrutar tu estadía en la selva
                  misionera.
                </p>
              </div>
              <div className="explore-user">
                <img loading="lazy"
                  src={exploreImg2}
                  className="explore-profile"
                  alt="profile-img"
                />
                <span className="explore-name">Romina - Recepcionista</span>
              </div>
            </div>
          </div>
        </section> */}
        {/*==================== JOIN ====================*/}
        {/* <section className="join section" id="join">
          <div className="join-container container grid">
            <div className="join-data">
              <h2 className="section-title">
                Explore las Cataratas <br /> del Iguazú
              </h2>
              <p className="join-description">
                Una de las maravillas naturales del mundo y declarada Patrimonio
                de la Humanidad por la UNESCO. Caminata por la selva tropical
                que une las fronteras de Argentina y Brasil.
              </p>
              <form action="" className="join-form">
                <input
                  type="email"
                  placeholder="Dejanos tu email"
                  id=""
                  className="join-input"
                />
                <button className="join-submit button">
                  Suscríbete a novedades <i className="ri-arrow-right-line" />
                </button>
              </form>
            </div>
            <div className="join-image">
              <img loading="lazy" src={joinImg1} className="join-img" alt="join-img" />
              <div className="shadow" />
            </div>
          </div>
        </section> */}
        {/*==================== FACEBOOK COMMENTS PLUGIN ====================*/}
        {/* <section className="fb-comments section">
          <div className="fb-comments-container container">
            <FacebookComments />
          </div>
        </section> */}

      </main>
    </Layout>
  );
}
