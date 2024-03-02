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
  const {appTexts} = useContext(AppContext);
  const {authtext1, authtext2} = appTexts;
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  return isAuthenticated 
  ? (<div className={props.className} onClick={() => {logout(); localStorage.setItem("toaster!", true);}}>{authtext1}</div>) 
  : (<div className={props.className} onClick={() => {loginWithRedirect(); localStorage.setItem("toaster!", true);}}>{authtext2}</div>);
};

export const AuthToaster = (props) => {
  const {isAuthenticated} = useAuth0();
  const {appTexts} = useContext(AppContext);
  const {authtoasttext1} = appTexts;
  useEffect(() => {
    const isToaster = localStorage.getItem("toaster!");
    if (isToaster && isAuthenticated) {
      localStorage.setItem("toaster!", false);
      toast(`${authtoasttext1} ${props.username}!`);
    }
  }, [isAuthenticated]);
  return (<Toaster />);
}