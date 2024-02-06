import ScrollReveal from 'scrollreveal';

// Función para las animaciones de ScrollReveal
const scrollAnimation = () => {
  const sr = ScrollReveal({
    origin: 'bottom', // Cambiado a 'bottom' para que las animaciones se activen cuando se desplaza hacia abajo
    distance: '60px', // Reducido para que la animación comience antes de que el elemento esté completamente visible
    duration: 1000, // Reducido el tiempo de animación para hacerlo más rápido
    delay: 200, // Añadido un pequeño retraso para un mejor efecto
    easing: 'cubic-bezier(0.5, 0, 0, 1)', // Cambiado a una curva de aceleración para hacer la animación más natural
    reset: false // Reiniciar la animación en cada desplazamiento
  });

  // Aplicar animaciones a los elementos específicos
  sr.reveal(`.home-social, .photos-title, .services-title, .explore-data, .explore-user, .footer-container`);
  sr.reveal(`.home-card`, { delay: 350, distance: '50px', interval: 100 }); // Reducido el desplazamiento y cambiado el intervalo
  sr.reveal(`.location-data, .join-image, .right`, { origin: 'right' });
  sr.reveal(`.location-image, .join-data, .left`, { origin: 'left' });
  sr.reveal(`.popular-card`, { interval: 200 }); // Reducido el intervalo
};

export default scrollAnimation;




