import { useContext, useEffect } from 'react';
import AppContext from '../context/context.jsx';
import types from '../data/types.js';
import imagesGallery from "../data/imagesGallery.js";

function Gallery() {
  const {gallerySelected, handleGallery} = useContext(AppContext);
  // importa un objeto de imagenes por cada tipo de galeria
  const {DESAYUNO, MATRIMONIAL, PISCINA, LUNAMIEL} = imagesGallery; // [] array de imagenes

  // obtiene el valor de gallerySelected almacenado en localStorage
  useEffect(() => {
    const storedGallerySelected = localStorage.getItem('gallerySelected');
    // solo se ejecuta una vez si gallerySlected esta vacio y hay algo en el localStorage cuando se recarga la galeria
    if (!gallerySelected && storedGallerySelected) {
      handleGallery(storedGallerySelected);
      // console.log("is stored");
    }
  }, []);

  // Almacenar el valor de gallerySelected en localStorage
  useEffect(() => {
    if (gallerySelected) {
      localStorage.setItem('gallerySelected', gallerySelected);
    }
  }, [gallerySelected]);

  // Guarda una galería de imágenes según el tipo de galería seleccionado
  let selectedImages = null;

  switch (gallerySelected) {
    case types.DESAYUNO:
      selectedImages = DESAYUNO;
      break;
    case types.MATRIMONIAL:
      selectedImages = MATRIMONIAL;
      break;
    case types.PISCINA:
      selectedImages = PISCINA;
      break;
    case types.LUNAMIEL:
      selectedImages = LUNAMIEL;
      break;
    default:
      selectedImages = MATRIMONIAL;
      // Manejar el caso en que gallerySelected no coincida con ningún tipo conocido
      break;
  }
  
  // Verificar si selectedImages es null antes de intentar realizar el mapeo
  return (
    <div className='images-gallery container grid'>
      {selectedImages && selectedImages.map(el => (
        <img src={el.src} alt={el.alt} key={crypto.randomUUID()} />
      ))}
    </div>
  );
}

export default Gallery;