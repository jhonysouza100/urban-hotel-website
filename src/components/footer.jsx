import links from "../data/links";
import Scrollup from "./scrollup.jsx";
import '../css/08-footer.css';

function footer() {
  const {instagramLink, facebookLink, googleMapsLink, hotelEmail, hotelWhatsapp, cataratasArg, cataratasBr, cataratasLuna, aeropuertoIg, documentacionBr, copyrightLink} = links;
  return (
    <footer className="footer">
      <div className="footer-container container grid">
        <div>
          <p href="#" className="footer-logo">Iguazú Urban Hotel{" "}<span>Express<span /></span></p>
          <p className="footer-description">¡Hace tu reserva hoy!</p>
        </div>
        <div className="footer-content grid">
        <div className="footer-data">
          <h3 className="footer-title">Siguenos</h3>
          <div className="footer-social">
            <a href={facebookLink} target="_blank" className="footer-social-link" aria-label="Contact"><i className="ri-facebook-line" /></a>
            <a href={instagramLink} target="_blank" className="footer-social-link" aria-label="Contact"><i className="ri-instagram-line" /></a>
          </div>
        </div>
        <div className="footer-data">
          <h3 className="footer-title">Dirección</h3>
          <ul className="footer-list">
            <li className="footer-info"><a target="_blank" href={googleMapsLink}><i className="ri-map-pin-line"></i> Fray Luiz Beltran 290, Iguazú - Misiones</a></li>
            {/* <li className="footer-description"><span>Abierto las 24hs <br /> 365 días del año</span></li> */}
          </ul>
        </div>
        <div className="footer-data">
          <h3 className="footer-title">Contacto</h3>
          <ul className="footer-list">
            <li className="footer-info"><a target="_blank" href={hotelWhatsapp}><i className="ri-phone-line"></i> +54 3757 - 458904</a></li>
            <li className="footer-info"><a target="_blank" href={hotelEmail}><i className="ri-mail-line"></i> Iguazuurbanhotel@gmail.com</a></li>
          </ul>
        </div>
        <div className="footer-data">
          <h3 className="footer-title">Más Informacíon</h3>
          <ul className="footer-list">
            <li className="footer-info"><a target="_blank" href={cataratasArg}>Parque Nacional Iguazú</a></li>
            <li className="footer-info"><a target="_blank" href={cataratasBr}>Parque Nacional do Iguazú (Brasil)</a></li>
            <li className="footer-info"><a target="_blank" href={documentacionBr}>Documentación para ingresar a Brasil (DNM)</a></li>
          <li className="footer-info"><a target="_blank" href={aeropuertoIg}>Aeropuerto Iguazú</a></li>
            <li className="footer-info"><a target="_blank" href={cataratasLuna}>Paseo de Luna llena en Cataratas del Iguazú</a></li>
          </ul>
        </div>
        </div>
      </div>
      <a href={copyrightLink} target="_blank" className="footer-copyright">
        © Copyright Jhony Souza 2024. All rights reserved.
      </a>

      <Scrollup />
    </footer>
  );
}

export default footer;
