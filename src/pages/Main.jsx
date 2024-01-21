import { useContext, useEffect } from "react";
import Layout from "../layouts/layout.jsx";
import Scrollup from "../components/scrollup.jsx";
import scrollAnimation from "../libs/scroll-reveal.js";
import swiperAnimation from "../libs/swiper.js";
import images from "../data/images.js";

function Main() {
  
  const { homeBgImg1, homeBgImg2, homeBgImg3, locationImg1,
  popularImg1, popularImg2, popularImg3, popularImg4,
  exploreImg1, exploreImg2, joinImg1
 } = images; // importa las imagenes

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
                        <a href="#" className="button">
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
                        <a href="#" className="button">
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
                        <a href="#" className="button">
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
              <a href="https://intagram.com" target="_blank" className="home-social-link">
                <i className="ri-instagram-fill" />
              </a>
              <a href="www.facebook.com" target="_blank" className="home-social-link">
                <i className="ri-facebook-circle-fill" />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=543757458904&text=Hola, me gustaría hacer una consulta"
                target="_blank"
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
                href="https://www.google.com/maps/place/Iguazu+Urban+Hotel/@-25.5976291,-54.5724695,16.25z/data=!4m9!3m8!1s0x94f6923382135a49:0x4c03b72e6c337200!5m2!4m1!1i2!8m2!3d-25.5969127!4d-54.5684158!16s%2Fg%2F11cjhrqpl8?entry=ttu"
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
          <h3 className="section-title">
            <i className="ri-time-line" /> 365 días del año <br /> 24 hs al día
          </h3>
          <div className="popular-container container grid">
            <article className="popular-card">
              <div className="popular-image">
                <img
                  src={popularImg1}
                  className="popular-img"
                  alt="popular-img"
                />
                <div className="shadow" />
                <h2 className="popular-title">Desayuno</h2>
              </div>
            </article>
            <article className="popular-card">
              <div className="popular-image">
                <img
                  src={popularImg2}
                  className="popular-img"
                  alt="piscina"
                />
                <div className="shadow" />
                <h2 className="popular-title">Piscina</h2>
              </div>
            </article>
            <article className="popular-card">
              <div className="popular-image">
                <img
                  src={popularImg3}
                  className="popular-img"
                  alt="luna-miel-img"
                />
                <div className="shadow" />
                <h2 className="popular-title">Luna de Miel</h2>
              </div>
            </article>
            <article className="popular-card">
              <div className="popular-image">
                <img
                  src={popularImg4}
                  className="popular-img"
                  alt="matrimonial-img"
                />
                <div className="shadow" />
                <h2 className="popular-title">Matrimonial</h2>
              </div>
            </article>
          </div>
        </section>
        {/*==================== SERVICES ====================*/}
        <section className="services section" id="services">
          <div className="services-container container">
            <div className="services-content grid" data-content="" id="skills">
              <div className="services-area">
                <h3 className="services-title">Servicios y Comodidades</h3>
                <div className="services-box">
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
                        <span className="skils_level">a 200 mt</span>
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
                        <span className="skils_level">a 300 mt</span>
                      </div>
                    </div>
                    <div className="services-data">
                      <i className="ri-checkbox-circle-line" />
                      <div>
                        <h3 className="services-name">Hito 3 Fronteras</h3>
                        <span className="skils_level">a 1200 mt</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*==================== EXPLORE ====================*/}
        <section className="explore section" id="explore">
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
        </section>
        {/*==================== JOIN ====================*/}
        <section className="join section" id="join">
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
              <img
                src={joinImg1}
                className="join-img"
                alt="join-img"
              />
              <div className="shadow" />
            </div>
          </div>
        </section>
      </main>
      <Scrollup />
    </Layout>
  );
}

export default Main;
