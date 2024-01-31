import { useContext, useEffect, useState } from 'react';
import AppContext from '../context/context.jsx';
import imagesGallery from "../data/imagesGallery.js";
import Footer from "../components/footer.jsx";
import { Link } from 'react-router-dom';
import {useUnsplash} from '../hooks/useUnsplash.js';

function Gallery() {
  const {gallerySelected, handleGallery} = useContext(AppContext);
  // importa un objeto de imagenes por cada tipo de galeria
  const {BREAKFAST, ROOM, POOL, IGUAZU} = imagesGallery; // [] array de imagenes

  // UNSPLASH IMAGES
  const [images, setImages] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedImages = await useUnsplash(gallerySelected || "HOTEL");

        // Hacer una copia del array antes de ordenar
        const imagesCopy = [...fetchedImages.results];

        // Ordenar de forma aleatoria
        const imagesSorted = imagesCopy.sort(() => Math.random() - 0.5);

        console.log(imagesSorted);
        setImages(imagesSorted);

      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  // obtiene el valor de gallerySelected almacenado en localStorage
  useEffect(() => {
    const storedGallerySelected = localStorage.getItem('gallerySelected');
    // solo se ejecuta una vez si gallerySlected esta vacio y hay algo en el localStorage cuando se recarga la galeria
    if (!gallerySelected && storedGallerySelected) {
      handleGallery(storedGallerySelected);
      // console.log("is stored");
    }
  }, []);

  // Almacenar en local el valor de gallerySelected en el stado desde el contexto
  useEffect(() => {
    if (gallerySelected) {
      localStorage.setItem('gallerySelected', gallerySelected);
    }
  }, [gallerySelected]);

  // Guarda una galería de imágenes según el tipo de galería seleccionado
  let selectedImages = null;

  switch (gallerySelected) {
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
	
  // Verificar si selectedImages es null antes de intentar realizar el mapeo
  return (
    <div>

    	<section className='images-gallery container grid'>
        {selectedImages && selectedImages.map((el, i) => (
          <a href={`#img${i}`} key={crypto.randomUUID()}><img src={el.src} alt={el.alt} /></a>
        ))}
        {/* // UNSPLASH IMAGES */}
        {images && images.map(el => (<a key={crypto.randomUUID()}><img src={el.urls.small} alt={el.alt_description} /></a>))}
      </section>
			
			{selectedImages && selectedImages.map((el, i) => (
				<article className='light-box' id={`img${i}`} key={crypto.randomUUID()}>
  				<a href={`#img${i === 0 ? selectedImages.length-1 : i - 1}`} className="prev"><i className="ri-arrow-left-wide-line" /></a>
  				<img src={el.src} alt={el.alt} />
  				<a href={`#img${i >= selectedImages.length-1 ? 0 : i + 1 }`} className="next"><i className="ri-arrow-right-wide-line" /></a>
  				<a href="#" className="close">
  				  <i className="ri-close-line" />
  				</a>
				</article>
			))}

      <div className="gallery-button container">
        <Link to={'/'} className='button'><i className="ri-arrow-left-line"></i>Volver</Link>
      </div>

			<Footer />
    </div>
  );
}

export default Gallery;