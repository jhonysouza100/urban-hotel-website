import { useContext, useEffect } from 'react';
import AppContext from '../context/context.jsx';
import types from '../data/types.js';
import imagesGallery from "../data/imagesGallery.js";

function Gallery() {
  const {gallerySelected, handleGallery} = useContext(AppContext);
  // importa un objeto de imagenes por cada tipo de galeria
  const {DESAYUNO, MATRIMONIAL, PISCINA, LUNAMIEL} = imagesGallery; // [] array de imagenes

  // Obtener el valor de gallerySelected almacenado en localStorage
  useEffect(() => {
    const storedGallerySelected = localStorage.getItem('gallerySelected');
    if (storedGallerySelected) {
      handleGallery(storedGallerySelected);
    }
  }, []);

  // selecciona un tipo de imagen segun la galeria seleciconada
  const selectedImages =
    gallerySelected === types.DESAYUNO
      ? DESAYUNO
      : gallerySelected === types.MATRIMONIAL
      ? MATRIMONIAL
      : gallerySelected === types.PISCINA
      ? PISCINA
      : gallerySelected === types.LUNAMIEL
      ? LUNAMIEL
      : null;

  // Almacenar el valor de gallerySelected en localStorage
  useEffect(() => {
    if (gallerySelected) {
      localStorage.setItem('gallerySelected', gallerySelected);
    }
  }, [gallerySelected]);

  // Verificar si selectedImages es null antes de intentar realizar el mapeo
  return (
    <>
      {selectedImages && selectedImages.map(el => (
        <img src={el.src} alt={el.alt} key={crypto.randomUUID()} />
      ))}
    </>
  );
}

export default Gallery;