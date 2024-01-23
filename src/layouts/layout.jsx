import { useContext } from "react";
import AppContext from "../context/context.jsx";
import Footer from "../components/footer.jsx";
import Header from "../components/header.jsx";

function Layout({children}) {
  const {theme} = useContext(AppContext); // hook para destructurar del contexto
  return (
    <div className={`layout ${theme && theme}`}>
      <Header />
      <>{children}</>
      <Footer />
    </div>
  );
}

export default Layout;