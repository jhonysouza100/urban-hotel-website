import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

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
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  return isAuthenticated 
  ? (<h4 className={props.className} onClick={() => logout()}>Cerrar sesión</h4>) 
  : (<h4 className={props.className} onClick={() => loginWithRedirect()}>Iniciar sesión</h4>);
};