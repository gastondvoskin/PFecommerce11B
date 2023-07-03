import { Link, NavLink } from "react-router-dom";
import styles from "./Nav.module.css";
import logo from "../../assets/logo/logo-transparent.png";
import LoginButton from "../../LoginComponents/LoginButton/LoginButton.jsx";
import LogoutButton from "../../LoginComponents/LogoutButton/LogoutButton.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  const [displayProfileOptions, setDisplayProfileOptions] = useState(false);
  const { user, isAuthenticated } = useAuth0();
  console.log("displayProfileOptions: ", displayProfileOptions);
  console.log("isAuthenticated: ", isAuthenticated);

  return (
    <nav className={styles.mainContainer}>
      <Link to="/">
        <img className={styles.logo} src={logo} alt="Home" />
      </Link>

      <div className={styles.rightContainer}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.normalLink
          }
        >
          HOME
        </NavLink>

        <NavLink
          to="/viandas"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.normalLink
          }
        >
          VIANDAS
        </NavLink>

        <NavLink
          to="/admin"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.normalLink
          }
        >
          ADMIN
        </NavLink>

        <NavLink
          to="/shoppingcart"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.normalLink
          }
        >
          <FontAwesomeIcon icon={faCartShopping} /> PAGAR 
        </NavLink>

      <div
          className={styles.userContainer}
          onMouseEnter={() => setDisplayProfileOptions(true)}
          onMouseLeave={() => setDisplayProfileOptions(false)}
        >
          <div className={styles.user}><FontAwesomeIcon icon={faUser} /> USUARIO</div>
          {displayProfileOptions && isAuthenticated && <div className={styles.options}>
            <LogoutButton />
            <NavLink className={styles.option} to="/myprofile">MI CUENTA</NavLink>
          </div> }
          {displayProfileOptions && !isAuthenticated && <div><LoginButton /></div>}
        </div>
      </div>

    </nav>
  );
}

export default Nav;
