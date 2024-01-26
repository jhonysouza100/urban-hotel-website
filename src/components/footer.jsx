import links from "../data/links";

function footer() {
  const {instagramLink, facebookLink, googleMapsLink, hotelEmail, hotelWhatsapp, cataratasArg, cataratasBr, cataratasLuna, aeropuertoIg, documentacionBr, copyrightLink} = links;
  return (
    <footer className="footer">
      <div className="footer-container container grid">
        <div>
          <p href="#" className="footer-logo">Iguazú Urban Hotel{" "}<span>Express<span /></span></p>
          <p className="footer-description">Hace tu reserva hoy!</p>
        </div>
        <div className="footer-content grid">
          <div className="footer-data">
            <h3 className="footer-title">Contacto</h3>
            <ul className="footer-list">
              <li className="footer-info"><a target="_blank" href={hotelWhatsapp}>Tel: +54 3757 - 458904</a></li>
              <li className="footer-info"><a target="_blank" href={hotelEmail}>Iguazuurbanhotel@gmail.com</a></li>
            </ul>
          </div>
          <div className="footer-data">
            <h3 className="footer-title">Dirección</h3>
            <ul className="footer-list">
              <li className="footer-info"><a target="_blank" href={googleMapsLink}>Fray Luiz Beltran 290 <br /> Iguazú - Misiones</a></li>
              <li className="footer-description"><span>Abierto las 24hs <br /> 365 días del año</span></li>
            </ul>
          </div>
          <div className="footer-data">
            <h3 className="footer-title">Informacíon</h3>
            <ul className="footer-list">
              <li className="footer-info"><a target="_blank" href={cataratasArg}>Parque Nacional Iguazu</a></li>
              <li className="footer-info"><a target="_blank" href={cataratasBr}>Parque Nacional do Iguazú (Brasil)</a></li>
              <li className="footer-info"><a target="_blank" href={documentacionBr}>Documentacion para ingresar a Brasil (DNM)</a></li>
            <li className="footer-info"><a target="_blank" href={aeropuertoIg}>Aeropuerto Iguazu</a></li>
              <li className="footer-info"><a target="_blank" href={cataratasLuna}>Paseo de Luna llena en Cataratas del Iguazu</a></li>
            </ul>
          </div>
          <div className="footer-data">
            <h3 className="footer-title">Siguenos</h3>
            <div className="footer-social">
              <a href={facebookLink} target="_blank" className="footer-social-link"><i className="ri-facebook-line" /></a>
              <a href={instagramLink} target="_blank" className="footer-social-link"><i className="ri-instagram-line" /></a>
            </div>
          </div>
        </div>
      </div>
      <a href={copyrightLink} target="_blank" className="footer-copyright">
        © Copyright Jhony Souza 2024. All rights reserved.
      </a>
    </footer>
  );
}

export default footer;
