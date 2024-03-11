import { useState } from "react";
import { RiArrowUpSLine } from "@remixicon/react";
import {APP_LINKS, APP_IMAGES} from "../assets";
import '../css/scrollup.css';

export default function ScrollUp() {
  const {hotelWhatsapp} = APP_LINKS;
  const { whatsappIcon } = APP_IMAGES;
  const [up, setUp] = useState("");
  const scrollUp = () => {
    // when the scroll is higher than 350 viewport innerHeight, add the show-scroll class to the a tag with the scrollup
    window.scrollY >= 350 ? setUp(" is-show") : setUp("");
  };
  
  window.addEventListener("scroll", scrollUp);

  return (
    <div className={`scrollup${up}`}>
      <a
        target="_blank"
        href={hotelWhatsapp}
        className="scrollup-btn"
      >
        <img loading="lazy"
          className="whatsapp"
          src={whatsappIcon}
          alt="whatsapp-img"
        />
      </a>
      <a href="#" className="scrollup-btn" aria-label="Contact">
        <RiArrowUpSLine className="custom-svg" />
      </a>
    </div>
  );
}
