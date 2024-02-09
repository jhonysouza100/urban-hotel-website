import { useEffect, useContext } from "react";
import AppContext from '../context/context';
import Layout from "../layouts/layout.jsx";
// import FacebookComments from "../plugins/fb-comments.jsx";
import scrollAnimation from "../libs/scrollreveal.js";
import swiperAnimation from "../libs/swiper.js";
import images from "../data/images.js";
import links from "../data/links.js";
import { Link } from "react-router-dom";
import '../assets/css/02-home.css';
import '../assets/css/03-location.css';
import '../assets/css/04-popular.css';
import '../assets/css/05-services.css';
import '../assets/css/06-explore.css';
import '../assets/css/07-join.css';

function Main() {
  const {
    homeBgImg1,
    homeBgImg2,
    homeBgImg3,
    locationImg1,
    popularImg1,
    popularImg2,
    popularImg3,
    popularImg4,
    exploreImg1,
    exploreImg2,
    joinImg1,
  } = images; // importa las imagenes

  // crea un arreglo de imagenes para renderizar es las fotos con sus tipos
  const pholaroidImgs = [{src: popularImg1, title: "Desayuno", type: "BREAKFAST"}, {src: popularImg2, title: "Pileta", type: "POOL"}, {src: popularImg3, title: "Habitaciones", type: "ROOM"}, {src: popularImg4, title: "Iguazú", type: "IGUAZU"}];

  // importo las direcciones para los enlaces
  const {bookingLink, facebookLink, hotelWhatsapp, instagramLink, googleMapsLink} = links;

  // trae del contexto: la funcion para manejar la galeria
  const {handleGallery} = useContext(AppContext);

  // carga las animaciones
  useEffect(() => {
    // se ejecuta al primer montado del DOM
    // SCROLL animation
    scrollAnimation();

    // SWIPER animation
    swiperAnimation();
  }, []);

  return (
    <Layout>
      <main className="main">
        {/*==================== HOME ====================*/}
        <section className="home" id="home">
          <div className="swiper home-slider">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div
                  className="box"
                  style={{ background: `url(${homeBgImg1}) no-repeat` }}
                >
                  <div className="home-shadow" />
                  <video
                    src=""
                    className="home-video"
                    autoPlay=""
                    muted=""
                    loop=""
                  />
                  <div className="home-media"></div>
                  <div className="home-content">
                    <div className="home-data container grid">
                      <h1 className="home-title">
                        Iguazú Urban
                        <br /> Hotel <span>Express</span>
                      </h1>
                      <p className="home-description">
                        Somos un hotel moderno con todos los servicios para que
                        puedas disfrutar unos días únicos en Puerto Iguazú,
                        Misiones.
                      </p>
                      <div className="home-button">
                        <a href={bookingLink} className="button" target="_blank">
                          Saber mas <i className="ri-information-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div
                  className="box"
                  style={{
                    background: `url(${homeBgImg2}) no-repeat`,
                  }}
                >
                  <div className="home-shadow" />
                  <video
                    src=""
                    className="home-video"
                    autoPlay=""
                    muted=""
                    loop=""
                  />
                  <div className="home-media"></div>
                  <div className="home-content">
                    <div className="home-data container grid">
                      <h1 className="home-title">
                        Iguazú Urban
                        <br /> Hotel <span>Express</span>
                      </h1>
                      <p className="home-description">
                        Somos un hotel moderno con todos los servicios para que
                        puedas disfrutar unos días únicos en Puerto Iguazú,
                        Misiones.
                      </p>
                      <div className="home-button">
                        <a href={bookingLink} className="button" target="_blank">
                          Saber mas <i className="ri-information-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div
                  className="box"
                  style={{ background: `url(${homeBgImg3}) no-repeat` }}
                >
                  <div className="home-shadow" />
                  <video
                    src=""
                    className="home-video"
                    autoPlay=""
                    muted=""
                    loop=""
                  />
                  <div className="home-media"></div>
                  <div className="home-content">
                    <div className="home-data container grid">
                      <h1 className="home-title">
                        Iguazú Urban
                        <br /> Hotel <span>Express</span>
                      </h1>
                      <p className="home-description">
                        Somos un hotel moderno con todos los servicios para que
                        puedas disfrutar unos días únicos en Puerto Iguazú,
                        Misiones.
                      </p>
                      <div className="home-button">
                        <a href={bookingLink} className="button" target="_blank">
                          Saber mas <i className="ri-information-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination" />
          </div>
          {/* social component */}
          <div className="home-social">
            <span className="home-social-text">Siguenos</span>
            <div className="home-social-links">
              <a
                href={instagramLink}
                target="_blank"
                className="home-social-link"
                aria-label="Contact"
              >
                <i className="ri-instagram-fill" />
              </a>
              <a
                href={facebookLink}
                target="_blank"
                className="home-social-link"
                aria-label="Contact"
              >
                <i className="ri-facebook-circle-fill" />
              </a>
              <a
                href={hotelWhatsapp}
                target="_blank"
                aria-label="Contact"
                className="home-social-link"
              >
                <i className="ri-whatsapp-fill" />
              </a>
            </div>
          </div>
        </section>
        {/*==================== LOCATION ====================*/}
        <section className="location section" id="location">
          <div className="location-container container grid">
            <div className="location-data">
              <h2 className="section-title">
                <i className="ri-map-pin-line" /> Fray Luis Beltrán 290 <br />{" "}
                Puerto Iguazú - Misiones
              </h2>
              <p className="location-description">
                Ubicado en una zona céntrica, cerca de restaurantes, comercios,
                mercados y la terminal de autobuses.
              </p>
              <a
                target="_blank"
                href={googleMapsLink}
                className="button"
              >
                Como llegar <i className="ri-send-plane-line" />
              </a>
            </div>
            <div className="location-image">
              <img
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
          <h3 className="photos-title section-title">GALERIA DE FOTOS</h3>
          <div className="popular-container container grid">
            {pholaroidImgs.map(el => (
              <article className="popular-card" key={crypto.randomUUID()}>
                <div className="popular-image">
                  <img src={el.src} className="popular-img" alt="popular-img"/>
                  <Link to={"/galeria"} onClick={() => handleGallery(el.type)} className="popular-button"><h2 className="popular-title">{el.title}</h2></Link>
                  {/* <div className="shadow" /> */}
                </div>
              </article>
            ))}
          </div>
        </section>
        {/*==================== SERVICES ====================*/}
        <section className="services section" id="services">
          <h3 className="services-title section-title">SERVICIOS DEL HOTEL</h3>
          <div className="services-container container grid">
            <div className="services-group left">
              <div className="services-data">
                <i className="ri-checkbox-circle-line" />
                <div>
                  <h3 className="services-name">Habitaciones</h3>
                  <span className="skils_level">Dobles y Triples</span>
                </div>
              </div>
              <div className="services-data">
                <i className="ri-checkbox-circle-line" />
                <div>
                  <h3 className="services-name">Desayuno</h3>
                  <span className="skils_level">Incluído</span>
                </div>
              </div>
              <div className="services-data">
                <i className="ri-checkbox-circle-line" />
                <div>
                  <h3 className="services-name">Piscina</h3>
                  <span className="skils_level">y Solarium</span>
                </div>
              </div>
              <div className="services-data">
                <i className="ri-checkbox-circle-line" />
                <div>
                  <h3 className="services-name">Avenida principal</h3>
                  <span className="skils_level">a 200 mts</span>
                </div>
              </div>
            </div>
            <div className="services-group right">
              <div className="services-data">
                <i className="ri-checkbox-circle-line" />
                <div>
                  <h3 className="services-name">WIFI</h3>
                  <span className="skils_level">Gratuito</span>
                </div>
              </div>
              <div className="services-data">
                <i className="ri-checkbox-circle-line" />
                <div>
                  <h3 className="services-name">Recepción</h3>
                  <span className="skils_level">24 hs</span>
                </div>
              </div>
              <div className="services-data">
                <i className="ri-checkbox-circle-line" />
                <div>
                  <h3 className="services-name">Terminal de Obnibus</h3>
                  <span className="skils_level">a 300 mts</span>
                </div>
              </div>
              <div className="services-data">
                <i className="ri-checkbox-circle-line" />
                <div>
                  <h3 className="services-name">Hito 3 Fronteras</h3>
                  <span className="skils_level">a 1200 mts</span>
                </div>
              </div>
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
