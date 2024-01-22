function footer() {
  return (
    <footer className="footer">
      <div className="footer-container container grid">
        <div>
          <a href="#" className="footer-logo">
            Iguazú Urban Hotel{" "}
            <span>
              Express
              <span />
            </span>
          </a>
          <p className="footer-description">Hace tu reserva hoy!</p>
        </div>
        <div className="footer-content grid">
          <div className="footer-data">
            <h3 className="footer-title">Dirección</h3>
            <ul className="footer-list">
              <li>
                <address className="footer-info">
                  Fray Luiz Beltran 290 <br /> Iguazú - Misiones
                </address>
              </li>
              <li>
                <address className="footer-info">Abierto las 24hs</address>
              </li>
            </ul>
          </div>
          <div className="footer-data">
            <h3 className="footer-title">Contacto</h3>
            <ul className="footer-list">
              <li>
                <address className="footer-info is-clickable">
                  Iguazuurbanhotel@gmail.com <i className="ri-file-copy-line" />
                </address>
              </li>
              <li>
                <address className="footer-info is-clickable">
                  3757 - 458904 <i className="ri-file-copy-line" />
                </address>
              </li>
            </ul>
          </div>
          <div className="footer-data">
            <h3 className="footer-title">Siguenos</h3>
            <div className="footer-social">
              <a href="#" target="_blank" className="footer-social-link" aria-label="Read more about Seminole tax hike">
                <i className="ri-facebook-line" />
              </a>
              <a href="#" target="_blank" className="footer-social-link" aria-label="Read more about Seminole tax hike">
                <i className="ri-instagram-line" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <span className="footer-copyright">
        © Copyright Jhony Souza 2024. All rights reserved.
      </span>
    </footer>
  );
}

export default footer;
