import { Children, cloneElement } from "react";

export default function NavMenu ({children, userData}) {

    // Pasar 'userData' como prop a los elementos hijos
    const childrenWithProps = Children.map(children, child =>
      cloneElement(child, { userData })
    );
    

  return (
    <nav className="nav container">
      {/* NAVMENU con contenido dinamico */}
      <>{childrenWithProps}</>
    </nav>
  )
}