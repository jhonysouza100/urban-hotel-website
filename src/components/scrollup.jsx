import { useState } from "react";
import links from "../data/links";
import images from "../data/images.js";
import '../assets/css/scrollup.css';

function scrollup() {
  const {hotelWhatsapp} = links;
  const { whatsappIcon } = images;
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
        <img
          className="whatsapp"
          src={whatsappIcon}
          alt="whatsapp-img"
        />
      </a>
      <a href="#" className="scrollup-btn" aria-label="Contact">
        <i className="ri-arrow-up-s-line" />
      </a>
    </div>
  );
}

export default scrollup;
