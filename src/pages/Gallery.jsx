import { useContext, useEffect } from 'react';
import AppContext from '../context/context.jsx';
import types from '../data/types.js';
import imagesGallery from "../data/imagesGallery.js";
import Footer from "../components/footer.jsx";
import { Link } from 'react-router-dom';

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
    <div>

    	<section className='images-gallery container grid'>
        {selectedImages && selectedImages.map((el, i) => (
          <a href={`#img${i}`} key={crypto.randomUUID()}><img src={el.src} alt={el.alt} /></a>
        ))}
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
        <Link to={'/'} className='button'><i class="ri-arrow-left-line"></i>Volver</Link>
      </div>

			<Footer />
    </div>
  );
}

export default Gallery;