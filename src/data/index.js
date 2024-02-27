import APP_IMAGES from "./images";
import APP_LINKS from "./links";
import APP_TEXTS from "./texts";

const APP_GALLERY = {
  BREAKFAST: {
    type: "BREAKFAST",
    img: [
      {src: APP_IMAGES.popularImg1, alt: "breackfast-img"},
    ]
  },
  ROOM: {
    type: "ROOM",
    img: [
      {src: APP_IMAGES.popularImg2, alt: "room-img"},
    ]
  },
  POOL: {
    type: "POOL",
    img:[
      {src: APP_IMAGES.popularImg3, alt: "pool-img"},
    ]
  },
  IGUAZU: {
    type: "IGUAZU",
    img: [
      {src: APP_IMAGES.exploreImg1, alt: "iguazu-img"},
    ]
  }
}

export {APP_TEXTS, APP_LINKS, APP_IMAGES, APP_GALLERY};