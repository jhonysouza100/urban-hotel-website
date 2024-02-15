import links from "../data/links";
import Scrollup from "./scrollup.jsx";
import { useContext } from "react";
import AppContext from "../context/context";
import '../css/08-footer.css';

function footer() {
  const {languageTexts} = useContext(AppContext)
  const {instagramLink, facebookLink, googleMapsLink, hotelEmail, hotelWhatsapp, cataratasArg, cataratasBr, cataratasLuna, aeropuertoIg, documentacionBr, copyrightLink} = links;
  const {hometitle1, hometitle2, hometitle3, sociallinktitle1, footertext1, footertitle1, footertitle2, footertitle3, footerdesc1, footerdesc2, footerdesc3, footerdesc4, footerdesc5, footerdesc6, footerdesc7, footerdesc8} = languageTexts;
  return (
    <footer className="footer">
      <div className="footer-container container grid">
        <div>
        <p href="#" className="footer-logo">{hometitle1} {hometitle2} <span>{hometitle3}<span /></span></p>
          <p className="footer-description">{footertext1}</p>
        </div>
        <div className="footer-content grid">
        <div className="footer-data">
          <h3 className="footer-title">{sociallinktitle1}</h3>
          <div className="footer-social">
            <a href={facebookLink} target="_blank" className="footer-social-link" aria-label="Contact"><i className="ri-facebook-line" /></a>
            <a href={instagramLink} target="_blank" className="footer-social-link" aria-label="Contact"><i className="ri-instagram-line" /></a>
          </div>
        </div>
        <div className="footer-data">
          <h3 className="footer-title">{footertitle1}</h3>
          <ul className="footer-list">
            <li className="footer-info"><a target="_blank" href={googleMapsLink}><i className="ri-map-pin-line"></i> {footerdesc1}</a></li>
            {/* <li className="footer-description"><span>Abierto las 24hs <br /> 365 días del año</span></li> */}
          </ul>
        </div>
        <div className="footer-data">
          <h3 className="footer-title">{footertitle2}</h3>
          <ul className="footer-list">
            <li className="footer-info"><a target="_blank" href={hotelWhatsapp}><i className="ri-phone-line"></i> {footerdesc2}</a></li>
            <li className="footer-info"><a target="_blank" href={hotelEmail}><i className="ri-mail-line"></i> {footerdesc3}</a></li>
          </ul>
        </div>
        <div className="footer-data">
          <h3 className="footer-title">{footertitle3}</h3>
          <ul className="footer-list">
            <li className="footer-info"><a target="_blank" href={cataratasArg}>{footerdesc4}</a></li>
            <li className="footer-info"><a target="_blank" href={cataratasBr}>{footerdesc5}</a></li>
            <li className="footer-info"><a target="_blank" href={documentacionBr}>{footerdesc6}</a></li>
            <li className="footer-info"><a target="_blank" href={aeropuertoIg}>{footerdesc7}</a></li>
            <li className="footer-info"><a target="_blank" href={cataratasLuna}>{footerdesc8}</a></li>
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
