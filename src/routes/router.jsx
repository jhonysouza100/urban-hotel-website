import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home.jsx';
import Gallery from '../pages/Gallery.jsx';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/galeria' element={ <Gallery /> } />
        {/* si la ruta no es ninguna de las anteriores, entra a 404 por defecto */}
        {/* <Route path='*' element={ <Error404 /> } /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;