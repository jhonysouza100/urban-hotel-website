import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";


export const getAuthProfileData = () => {
  const { user, isAuthenticated } = useAuth0();
  const [userProfile, setUserProfile] = useState(null);
  useEffect(() => {
    // Cuando el usuario esté autenticado, actualiza el estado del perfil del usuario
    if (isAuthenticated) {
      setUserProfile({
        username: user.name,
        email: user.email,
        picture: user.picture,
      });
    }
  }, [isAuthenticated, user]);
  
  return userProfile;
};

export const AuthButton = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  return isAuthenticated 
  ? (<a className="button" onClick={() => logout()}>Log Out</a>) 
  : (<a className="button" onClick={() => loginWithRedirect()}>Login</a>);
};
