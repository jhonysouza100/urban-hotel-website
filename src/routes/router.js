import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home.jsx';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home /> } />
        {/* <Route path='/signup' element={ <Signup /> } /> */}
        {/* <Route path='/login' element={ <Login /> } /> */}
        {/* si la ruta no es ninguna de las anteriores, entra a 404 por defecto */}
        {/* <Route path='*' element={ <Error404 /> } /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;