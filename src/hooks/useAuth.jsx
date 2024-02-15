import { useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import AppContext from "../context/context.jsx";
import { Toaster, toast } from "sonner";

export const getAuthProfileData = () => {
  const { user, isAuthenticated } = useAuth0();
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    // Cuando el usuario esté autenticado, actualiza el estado del perfil del usuario
    if (isAuthenticated) {
      setUserData({
        username: user.name,
        email: user.email,
        picture: user.picture,
      });
    }
  }, [isAuthenticated, user]);
  
  return {userData, isAuthenticated};
};

export const AuthButton = (props) => {
  const {languageTexts} = useContext(AppContext);
  const {authtext1, authtext2} = languageTexts;
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  return isAuthenticated 
  ? (<h4 className={props.className} onClick={() => logout()}>{authtext1}</h4>) 
  : (<h4 className={props.className} onClick={() => loginWithRedirect()}>{authtext2}</h4>);
};

export const AuthToaster = (props) => {
  const {isAuthenticated} = useAuth0();
  useEffect(() => {
     // Muestra el mensaje de bienvenida solo si showWelcomeMessage es true
     if (isAuthenticated) {
      toast(`¡Bienvenido/a ${props.username}!`);
    }
  }, [isAuthenticated]);
  return (<Toaster />);
}