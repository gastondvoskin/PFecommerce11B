import { Link, NavLink } from "react-router-dom";
import styles from "./Nav.module.css";
import logo from "../../assets/logo/logo-transparent.png";
import LoginButton from "../../LoginComponents/LoginButton/LoginButton.jsx";
import LogoutButton from "../../LoginComponents/LogoutButton/LogoutButton.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faUser,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

function Nav() {
  const [displayProfileOptions, setDisplayProfileOptions] = useState(false);
  const { user, isAuthenticated } = useAuth0();
  const isAdmin =
    isAuthenticated &&
    (user?.email === "viandaexpress84@gmail.com" ||
      user?.email === "dvoskingaston@gmail.com" ||
      user?.email === "gabriel.682681@gmail.com" ||
      user?.email === "silviojuarez60@gmail.com");
  // Estado para visualización móvil
  const [isMobil, setIsMovil] = useState(false);

  return (
    <nav className={styles.mainContainer}>
      <Link to="/">
        <img className={styles.logo} src={logo} alt="Home" />
      </Link>

      <div className={styles.rightContainer}>
        <ul
          className={isMobil ? styles.navmenumobil : styles.navul}
          onClick={() => setIsMovil(false)}
        >
          <li className={styles.navli}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.normalLink
              }
            >
              INICIO
            </NavLink>
          </li>
          <li className={styles.navli}>
            <NavLink
              to="/viandas"
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.normalLink
              }
            >
              VIANDAS
            </NavLink>
          </li>
          <li className={styles.navli}>
            <NavLink
              to="/shoppingcart"
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.normalLink
              }
            >
              <FontAwesomeIcon icon={faCartShopping} /> PAGAR
            </NavLink>
          </li>
          {isAdmin && (
            <li className={styles.navli}>
              <NavLink
                to="/admin"
                className={({ isActive }) =>
                  isActive ? styles.activeLink : styles.normalLink
                }
              >
                ADMIN
              </NavLink>
            </li>
          )}
          <li className={styles.navli}>
            <div
              className={styles.userContainer}
              onMouseEnter={() => setDisplayProfileOptions(true)}
              onMouseLeave={() => setDisplayProfileOptions(false)}
            >
              <div className={styles.user}>
                <FontAwesomeIcon icon={faUser} /> USUARIO
              </div>
              {displayProfileOptions && isAuthenticated && (
                <div className={styles.options}>
                  <LogoutButton />
                  <NavLink className={styles.option} to="/micuenta/misdatos">
                    MI CUENTA
                  </NavLink>
                </div>
              )}
              <ul className={styles.userul}>
                <li className={styles.userli}>
                  {displayProfileOptions && !isAuthenticated && (
                    <div>
                      <LoginButton />
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <button
          className={styles.menumobil}
          onClick={() => setIsMovil(!isMobil)}
        >
          {isMobil ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
      </div>
    </nav>
  );
}

export default Nav;
