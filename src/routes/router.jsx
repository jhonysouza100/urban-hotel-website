import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from '../pages/Main.jsx';
import Gallery from '../pages/Gallery.jsx';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Main /> } />
        <Route path='/galeria' element={ <Gallery /> } />
        {/* si la ruta no es ninguna de las anteriores, entra a 404 por defecto */}
        {/* <Route path='*' element={ <Error404 /> } /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;