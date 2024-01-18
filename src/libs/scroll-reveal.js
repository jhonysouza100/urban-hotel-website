import ScrollReveal from 'scrollreveal'
// =============== SCROLL REVEAL ANIMATION ===============
const scrollAnimation = () => {
  const sr = ScrollReveal({
    origin: 'top',
    distance:'60px',
    duration: 2500,
    delay: 250,
    // reset: true // repetir animacion
  })

  sr.reveal(`.home-social, .services-title, .explore-data, .explore-user, .footer-container`)
  sr.reveal(`.home-card`, {delay: 350, distance: '100px', interval: 100})
  sr.reveal(`.location-data, .join-image, .right`, {origin: 'right'})
  sr.reveal(`.location-image, .join-data, .left`, {origin: 'left'})
  sr.reveal(`.popular-card`, {interval: 200})
}

export default scrollAnimation;



