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
  ? (<div className={props.className} onClick={() => {logout(); localStorage.setItem("toaster-ready", true);}}>{authtext1}</div>) 
  : (<div className={props.className} onClick={() => {loginWithRedirect(); localStorage.setItem("toaster-ready", true);}}>{authtext2}</div>);
};

export const AuthToaster = (user) => {
  const {isAuthenticated} = useAuth0();
  const toasterReady = JSON.parse(localStorage.getItem("toaster-ready")); // "toaster-ready": "true"
  const {appTexts} = useContext(AppContext);
  const {authtoasttext1} = appTexts;
  useEffect(() => {
    if (toasterReady && isAuthenticated) {
      localStorage.setItem("toaster-ready", false);
      toast(`${authtoasttext1} ${user.username}!`);
    }
  }, [isAuthenticated]);
  return (<Toaster />);
}