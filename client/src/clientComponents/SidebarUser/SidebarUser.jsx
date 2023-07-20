import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListOl, faUser, faHeart } from "@fortawesome/free-solid-svg-icons";
import styles from "./SidebarUser.module.css";
import { Link } from "react-router-dom";
import GoBackHome from "../GoBackHome/GoBackHome.jsx";

const SidebarUser = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.container}>
        <ul className={styles.sidebar}>
          <li className={styles.row}>
            <Link to="/micuenta/misdatos" className={styles.links}>
              <i>
                <FontAwesomeIcon icon={faUser} />
              </i>{" "}
              Mis datos
            </Link>
          </li>
          <li className={styles.row}>
            <Link to="/micuenta/misordenes" className={styles.links}>
              <i>
                <FontAwesomeIcon icon={faListOl} />
              </i>{" "}
              Mis órdenes
            </Link>
          </li>
          <li className={styles.row}>
            <Link to="/micuenta/misfavoritos" className={styles.links}>
              <i>
                <FontAwesomeIcon icon={faHeart} />
              </i>{" "}
              Mis favoritos
            </Link>
          </li>
          <li className={styles.row}>
            <GoBackHome />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarUser;
