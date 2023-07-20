import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./LoginButton.module.css";
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <div className={styles.divlogin}> <button className={styles.btnuser} onClick={() => loginWithRedirect()}>Iniciar sesión</button> </div>;

};

export default LoginButton;
