import images from "./images";

const {
  popularImg1,
  popularImg2,
  popularImg3,
  popularImg4,
  exploreImg1
} = images; // importa las imagenes

const gallery = {
  BREAKFAST: {
    type: "BREAKFAST",
    img: [
      {src: popularImg1, alt: "breackfast-img"},
    ]
  },
  ROOM: {
    type: "ROOM",
    img: [
      {src: popularImg2, alt: "room-img"},
    ]
  },
  POOL: {
    type: "POOL",
    img:[
      {src: popularImg3, alt: "pool-img"},
    ]
  },
  IGUAZU: {
    type: "IGUAZU",
    img: [
      {src: exploreImg1, alt: "iguazu-img"},
    ]
  }
}

export default gallery;