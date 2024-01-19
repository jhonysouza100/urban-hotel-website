import { createContext, useState } from "react";

// se declara un contexto
const AppContext = createContext();
// se crea el proveedor del contexto
const AppProvider = ({ children }) => {
  // === THEME ===
  const [theme, setTheme] = useState("light-theme"); // state del tema claro/oscuro
  const [icon, setIcon] = useState("ri-lightbulb-line"); // state del icon del tema claro/oscuro
  const handleTheme = () => {
    // maneja el state del tema claro/oscuro
    const selectedTheme = localStorage.getItem("selected-theme");
    const selectedIcon = localStorage.getItem("selected-icon");

    // SI hay un theme guardado en el localStorage, entonces se mantiene la configuracion por defecto
    if (selectedIcon && selectedTheme) {
      // De lo contrario, se guardan en el state los datos del theme seleccionado
      setTheme(selectedTheme);
      setIcon(selectedIcon);
    }
  };
  const toggleTheme = () => {
    // maneja el cambio de tema on "click"
    const newTheme = theme === "light-theme" ? "dark-theme" : "light-theme";
    const newIcon = icon === "ri-lightbulb-fill" ? "ri-lightbulb-line" : "ri-lightbulb-fill";
    setTheme(newTheme);
    setIcon(newIcon);
    localStorage.setItem("selected-theme", newTheme);
    localStorage.setItem("selected-icon", newIcon);
  };

  const data = { theme, icon, handleTheme, toggleTheme };

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};

export { AppProvider };
export default AppContext;
