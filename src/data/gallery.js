import caf1 from "../assets/img/bg1.jpeg";
import caf2 from "../assets/img/bg2.jpeg";
import caf3 from "../assets/img/b3.jpeg";
import caf4 from "../assets/img/bg5.jpeg";
import caf5 from "../assets/img/bg6.jpeg";
import caf6 from "../assets/img/bg7.jpeg";

const gallery = {
  BREAKFAST: {
    type: "BREAKFAST",
    img: [
      {src: caf1, alt: "breackfast-img"},
      {src: caf2, alt: "breackfast-img"},
      {src: caf3, alt: "breackfast-img"},
      {src: caf4, alt: "breackfast-img"},
      {src: caf5, alt: "breackfast-img"},
      {src: caf6, alt: "breackfast-img"},
    ]
  },
  ROOM: {
    type: "ROOM",
    img: [
      {src: caf1, alt: "room-img"},
      {src: caf2, alt: "room-img"},
      {src: caf3, alt: "room-img"},
      {src: caf4, alt: "room-img"},
      {src: caf5, alt: "room-img"},
    ]
  },
  POOL: {
    type: "POOL",
    img:[
      {src: caf4, alt: "pool-img"},
      {src: caf4, alt: "pool-img"},
      {src: caf4, alt: "pool-img"},
    ]
  },
  IGUAZU: {
    type: "IGUAZU",
    img: [
      {src: caf1, alt: "iguazu-img"},
    ]
  }
}

export default gallery;