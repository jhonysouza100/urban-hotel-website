import { useContext } from "react";
import AppContext from "../context/context.jsx";
import { Header, Footer, ScrollUp } from "../exports";

function Layout({children, navcontent}) {
  const {theme, userData} = useContext(AppContext); // hook para destructurar del contexto
  return (
    <div className={`layout ${theme && theme}`}>
      <Header userData={userData}>{navcontent}</Header>
      <>{children}</>
      <ScrollUp />
      <Footer />
    </div>
  );
}

export default Layout;