import Wrapper from "../components/wrapper.jsx";
import Main from "../components/main.jsx";
import { useContext, useEffect } from "react";
import AppContext from "../context/context.jsx";
import scrollAnimation from "../libs/scroll-reveal.js";

function Home() {
  const { hello } = useContext(AppContext);
  
   // carga las animaciones
   useEffect(() => { // se ejecuta al primer montado del DOM
    // SCROLL animation
    scrollAnimation();

  }, []);
  return (
    <Wrapper>
      <Main />
    </Wrapper>
  );
}

export default Home;