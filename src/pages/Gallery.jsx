import { useContext, useEffect, useState } from 'react';
import AppContext from '../context/context.jsx';
import Lightbox from "yet-another-react-lightbox";
import "../../node_modules/yet-another-react-lightbox/dist/styles.css";
import imagesGallery from "../data/imagesGallery.js";
import Footer from "../components/footer.jsx";
import { Link } from 'react-router-dom';
import {useUnsplash} from '../hooks/useUnsplash.js';

function Gallery() {
  // contexto para el tipo de galeria seleccionado
  const {gallerySelected, handleGallery} = useContext(AppContext);
  // importa un objeto de imagenes por cada tipo de galeria
  const {BREAKFAST, ROOM, POOL, IGUAZU} = imagesGallery; // [] array de imagenes
  // establece las variables para las imagenes de la galeria
  const [images, setImages] = useState(null);

  // obtiene el valor de la galeria seleccionada almacenado en localStorage cuando el usuario recarga la gallery
   useEffect(() => {
    const storedGallerySelected = localStorage.getItem('gallerySelected');
    // solo se ejecuta una vez si gallerySlected esta vacio y hay algo en el localStorage cuando se recarga la galeria
    if (!gallerySelected && storedGallerySelected) {
      handleGallery(storedGallerySelected);
      // console.log("is stored");
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => { // fetch hacia la api de "Unsplash"
      try {
        const res = await useUnsplash(gallerySelected || "HOTEL");
        const imagesResult = [...res.results]; // de la respuesta, almacena su "results";
        const imagesFiltered = imagesResult.map(el => ({ src: el.urls.small, alt: el.alt_description }));
        return imagesFiltered;  // Devuelve un array de objetos apto para ser unsado en "react-lightbox"
      } catch (error) {
        console.log(error);
      }
    };
  
    const fetchImagesAndSetState = async () => {
      try {
        const fetchedImages = await fetchData(); // obtiene imagenes de stock atraves de terceros
        let selectedImages = null; // para guardar una galería de imágenes según el tipo de galería seleccionado
  
        switch (gallerySelected) { // define las imagenes de la galeria segun el tipo de galeria seleccionado
          case BREAKFAST.type:
            selectedImages = BREAKFAST.img;
            break;
          case ROOM.type:
            selectedImages = ROOM.img;
            break;
          case POOL.type:
            selectedImages = POOL.img;
            break;
          case IGUAZU.type:
            selectedImages = IGUAZU.img;
            break;
          default:
            selectedImages = IGUAZU.img;
            // Manejar el caso en que gallerySelected no coincida con ningún tipo conocido
            break;
        }
  
        setImages([...selectedImages, ...fetchedImages]); // se fusionan y se guardan las imagenes de la galeria('assets') junto a las imagenes de stock('terceros')
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchImagesAndSetState();
  
    // Almacena inmediatamente en local el valor de la galeria en el stado desde el contexto, por ej. "BREAKFAST"
    if (gallerySelected) {
      localStorage.setItem('gallerySelected', gallerySelected);
    }

  }, [gallerySelected]);

  // REACT LIGHTBOX GALLERY
  const [index, setIndex] = useState(-1);
	
  return (
    <div>
      {/* VOlVER */}
      <div className="gallery-button section"><Link to={'/'} className='button'><i className="ri-arrow-left-line"></i>Volver</Link></div>

      {/* // COMPONENT REACt LIGHTBOX GALLERY */}
      <Lightbox
      index={index} // index 0, 1, 2...
       open={index >= 0} // true/fasle
       close={() => setIndex(-1)}
       slides={images}
       />

      {/* GALLERY */}
    	<section className='images-gallery container grid'>
        {/* // IMAGES */}
        {images && images.map((el, index) => (<a onClick={() => setIndex(index)} key={crypto.randomUUID()}><img src={el.src} alt={el.alt} /></a>))}
      </section>

			<Footer />
    </div>
  );
}

export default Gallery;