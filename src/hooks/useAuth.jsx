import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const getAuthProfileData = () => {
  const { user, isAuthenticated } = useAuth0();
  const [userData, setUserData] = useState(null);
  const [loged, setLoged] = useState(false);
  useEffect(() => {
    // Cuando el usuario esté autenticado, actualiza el estado del perfil del usuario
    if (isAuthenticated) {
      setUserData({
        username: user.name,
        email: user.email,
        picture: user.picture,
      });
      setLoged(isAuthenticated);
    }
  }, [isAuthenticated, user]);
  
  return {userData, loged};
};

export const AuthButton = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  return isAuthenticated 
  ? (<h4 className="navmenu-link" onClick={() => logout()}>Cerrar sesión</h4>) 
  : (<h4 className="navmenu-link" onClick={() => loginWithRedirect()}>Iniciar sesión</h4>);
};