import { createContext, useState } from "react";

// se declara un contexto
const AppContext = createContext();
// se crea el proveedor del contexto
const AppProvider = ({children}) => {
  const [hello, setHello] = useState("Hola Mundo!");
  const data = {hello};
  return(<AppContext.Provider value={data}>{children}</AppContext.Provider>)
}

export {AppProvider};
export default AppContext;