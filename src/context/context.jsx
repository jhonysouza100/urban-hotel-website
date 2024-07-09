import { createContext, useEffect, useRef, useState } from "react";
import { getAuthProfileData } from "../hooks/useAuth";
import {APP_TEXTS} from "../assets/index";
import { usePost } from "../hooks/useFetch";

// se declara un contexto
const AppContext = createContext();
// se crea el proveedor del contexto
const AppProvider = ({ children }) => {
  // === THEME ===
  const [theme, setTheme] = useState("light-theme"); // state del tema claro/oscuro
  const [themeIcon, setthemeIcon] = useState("ri-lightbulb-line"); // state del icon del tema claro/oscuro
  const handleTheme = () => {
    // maneja el state del tema claro/oscuro
    const selectedTheme = localStorage.getItem("selected-theme");
    const selectedIcon = localStorage.getItem("selected-icon");

    // SI hay un theme guardado en el localStorage, entonces se mantiene la configuracion por defecto
    if (selectedIcon && selectedTheme) {
      // De lo contrario, se guardan en el state los datos del theme seleccionado
      setTheme(selectedTheme);
      setthemeIcon(selectedIcon);
    }
  };

  const toggleTheme = () => {
    // maneja el cambio de tema on "click"
    const newTheme = theme === "light-theme" ? "dark-theme" : "light-theme";
    const newIcon = themeIcon === "ri-lightbulb-fill" ? "ri-lightbulb-line" : "ri-lightbulb-fill";
    setTheme(newTheme);
    setthemeIcon(newIcon);
    localStorage.setItem("selected-theme", newTheme);
    localStorage.setItem("selected-icon", newIcon);
  };

  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpenDrawer(newOpen);
  };

  // obtiene datos de la autenticacion de usuario
  const {userData, isAuthenticated} = getAuthProfileData(); // ./hooks/useAuth.js
  // Este efecto se ejecutará después de que getAuthProfileData haya actualizado el estado, enviando la data del usuario al backend
  useEffect(() => {
    // console.log(userData);
    if(userData) {
      // Error: No se puede llamar a React Hook "usePost" dentro de una devolución de llamada. Los React Hooks deben llamarse en un componente de función React o en una función React Hook personalizada.
      // usePost(userData);
    }
  }, [userData]);

  const [gallerySelected, setGallery] = useState("");
  const handleGallery = (arg) => {
    setGallery(arg); // ej: gallerySelected = "DESAYUNO"
    // console.log(arg)
  }
  
  // LANG
  const lang = useRef("ES");
  const [appTexts, setAppTexts] = useState(APP_TEXTS[lang.current]); // useState(APP_TEXTS["ES"])

  const handleLang = (arg) => {
    if (APP_TEXTS[arg]) { // si existe el idioma
      lang.current = arg;
      setAppTexts(APP_TEXTS[arg]); // appTexts = "ES"
    } else {
      console.error(`Language '${arg}' not supported. Switching to default language.`);
      lang.current = "ES";
      setAppTexts(APP_TEXTS["ES"]); // Cambia al idioma predeterminado si el idioma no es compatible.
    }
  };

  const data = { theme, themeIcon, handleTheme, toggleTheme, toggleDrawer, openDrawer, gallerySelected, handleGallery, userData, isAuthenticated, handleLang, appTexts };

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};

export { AppProvider };
export default AppContext;
