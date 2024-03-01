import { useContext } from "react";
import AppContext from "../context/context.jsx";
import Header from "../components/header.jsx";
import NavMenu from "../components/navMenu.jsx";
import Footer from "../components/footer.jsx";

function Layout({children, navcontent}) {
  const {theme, userData} = useContext(AppContext); // hook para destructurar del contexto
  return (
    <div className={`layout ${theme && theme}`}>
      <Header userData={userData}><NavMenu>{navcontent}</NavMenu></Header>
      <>{children}</>
      <Footer />
    </div>
  );
}

export default Layout;