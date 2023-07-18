import styles from "./GoBackHome.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const handleClick = () => {
  console.log("volver");
};

export default function GoBackHome() {
  return (
    <NavLink className={styles.NavLink} to="/">
      <button className={styles.button} onClick={handleClick}>
        <FontAwesomeIcon icon={faHome} />
        Ir al inicio
      </button>
    </NavLink>
  );
}
