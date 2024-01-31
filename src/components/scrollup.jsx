import { useState } from "react";
import images from "../data/images.js";

function scrollup() {
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
        href="https://api.whatsapp.com/send?phone=543757458904&text=Hola, me gustaría hacer una consulta"
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
