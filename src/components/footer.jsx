import { useContext } from "react";
import AppContext from "../context/context";
import { RiFacebookLine, RiInstagramLine, RiMailLine, RiMapPinLine, RiPhoneLine } from "@remixicon/react";
import {APP_LINKS} from "../assets/index";
import '../css/08-footer.css';

export default function Footer() {
  const {appTexts} = useContext(AppContext);
  const {instagramLink, facebookLink, googleMapsLink, hotelEmail, hotelWhatsapp, cataratasArg, cataratasBr, cataratasLuna, aeropuertoIg, documentacionBr, copyrightLink} = APP_LINKS;
  const {hometitle1, hometitle2, hometitle3, sociallinktitle1, footertext1, footertitle1, footertitle2, footertitle3, footerdesc1, footerdesc2, footerdesc3, footerdesc4, footerdesc5, footerdesc6, footerdesc7, footerdesc8} = appTexts;
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
            <a href={facebookLink} target="_blank" className="footer-social-link" aria-label="Contact"><RiFacebookLine className="custom-svg" /></a>
            <a href={instagramLink} target="_blank" className="footer-social-link" aria-label="Contact"><RiInstagramLine className="custom-svg" /></a>
          </div>
        </div>
        <div className="footer-data">
          <h3 className="footer-title">{footertitle1}</h3>
          <ul className="footer-list">
            <li className="footer-info"><RiMapPinLine className="custom-svg" /><a target="_blank" href={googleMapsLink}>{footerdesc1}</a></li>
          </ul>
        </div>
        <div className="footer-data">
          <h3 className="footer-title">{footertitle2}</h3>
          <ul className="footer-list">
            <li className="footer-info"><RiPhoneLine className="custom-svg"/><a target="_blank" href={hotelWhatsapp}> {footerdesc2}</a></li>
            <li className="footer-info"><RiMailLine className="custom-svg"/><a target="_blank" href={hotelEmail}> {footerdesc3}</a></li>
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

    </footer>
  );
}
