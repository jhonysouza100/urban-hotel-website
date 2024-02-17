import { useContext, useRef, useState } from "react";
import AppContext from "../context/context";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import '../css/dropdown.css';

function Dropdown() {
  const {handleLang} = useContext(AppContext);
  const [dropmenuIcon, setDropmenuIcon] = useState("ri-arrow-down-s-fill"); // state del dropIcon del tema claro/oscuro
  const optSelected = useRef("ar");

  const DROPDOWN_OPTION = document.querySelector('.dropdown-option');
  const handleDropmenu = () => {
    // intercala el icono del dropmenu
    const newDropmenuIcon = dropmenuIcon === "ri-arrow-down-s-fill" ? "ri-arrow-up-s-fill" : "ri-arrow-down-s-fill";
    setDropmenuIcon(newDropmenuIcon);
    // muestra o oculta las opciones del dropmenu
    DROPDOWN_OPTION.classList.toggle('is-show');
  }

  const handleOption = (arg) => {
    const {lang, flag} = arg;
    handleDropmenu();
    optSelected.current = flag;
    handleLang(lang);
  }

  return (
    <div className="dropdown-container">
      <div className="dropdown">
        <div className="dropdown-menu">
          <div className="dropmenu-icon" onClick={handleDropmenu}><i className={dropmenuIcon}></i></div>
          <div className="dropmenu-img"><i className={`fi fi-${optSelected.current}`}></i></div>
        </div>
        <div className="dropdown-option">
          <div onClick={() => handleOption({lang: "spanish", flag: "ar"})}><i className="fi fi-ar"></i></div>
          <div onClick={() => handleOption({lang: "portuguese", flag: "br"})}><i className="fi fi-br"></i></div>
          <div onClick={() => handleOption({lang:"english", flag: "us"})}><i className="fi fi-us"></i></div>
        </div>
      </div>
    </div>
  );
}

  export default Dropdown;