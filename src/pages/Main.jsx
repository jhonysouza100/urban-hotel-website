import { useContext } from "react";
import AppContext from '../context/context';
import { Link } from "react-router-dom";
import Layout from "../layouts/layout.jsx";
import Swiper from '../layouts/swiper.jsx';
import Dropdown from "../components/dropdown";
import NavMenuMain from "../components/navMenuMain";

import {APP_LINKS, APP_IMAGES} from "../data/index";

import '../css/02-home.css';
import '../css/03-location.css';
import '../css/04-popular.css';
import '../css/05-services.css';
import '../css/06-explore.css';
import '../css/07-join.css';


function Main() {
  console.log("render main")
  // trae del contexto: la funcion para manejar la galeria
  const {handleGallery, handleLang, appTexts} = useContext(AppContext);
  
  const {homeBgImg1, popularImg1, popularImg2, popularImg3, popularImg4 } = APP_IMAGES; // importa las imagenes
  
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
    <Layout navcontent={<NavMenuMain links={links} />}>
      <main className="main">
        {/*==================== HOME ====================*/}
        <section className="home" id="home">

          <Swiper />

          {/* LANG MENU */}
          <Dropdown />

          {/* social component */}
          <div className="home-social">
            <span className="home-social-text">{sociallinktitle1}</span>
            <div className="home-social-links">
              <a href={instagramLink} target="_blank" className="home-social-link" aria-label="Contact"><i className="ri-instagram-fill" /></a>
              <a href={facebookLink} target="_blank" className="home-social-link" aria-label="Contact"><i className="ri-facebook-circle-fill" /></a>
              <a href={hotelWhatsapp} target="_blank" aria-label="Contact" className="home-social-link"><i className="ri-whatsapp-fill" /></a>
            </div>
          </div>

        </section>
        {/*==================== LOCATION ====================*/}
        <section className="location section" id="location">
          <div className="location-container container grid">
            <div className="location-data">
              <h2 className="section-title">
                <i className="ri-map-pin-line" /> {locationtitle1} <br />{" "}
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
                {locationbuttontitle1} <i className="ri-send-plane-line" />
              </a>
            </div>
            <div className="location-image">
              <img
                src={homeBgImg1}
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
                  <img src={el.src} className="popular-img" alt="popular-img"/>
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
                <i className="ri-checkbox-circle-line" />
                <div>
                  <h3 className="services-name">{el.t}</h3>
                  <span className="skils_level">{el.d}</span>
                </div>
              </div>))}
              
            </div>
            <div className="services-group right">
            {servicetext2 && servicetext2.map( el => (
              <div className="services-data" key={crypto.randomUUID()}>
                <i className="ri-checkbox-circle-line" />
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
              <img
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
                <img
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
              <img src={joinImg1} className="join-img" alt="join-img" />
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

export default Main;
