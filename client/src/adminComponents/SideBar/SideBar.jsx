import React from "react";
import style from "../SideBar/SideBar.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { setSidebarOption } from "../../redux/adminSlice";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sidebarOption = useSelector(
    (state) => state.adminReducer.sidebarOption
  );
  const handleOptionSelect = (option) => {
    
    navigate("/admin");
    dispatch(setSidebarOption(option));
  };

  return (
    <div className={style.sidebar}>
      <ul>
        <li>
          <div
            className={
              style.option +
              (sidebarOption === "dashboard" ? " " + style.activeOption : "")
            }
            onClick={() => handleOptionSelect("dashboard")}
          >
            <FontAwesomeIcon icon={faHouse} className={style.sep} />
            {' '}Tablero
          </div>
        </li>

        <li>
          <div
            className={
              style.option +
              (sidebarOption === "orders" ? " " + style.activeOption : "")
            }
            onClick={() => handleOptionSelect("orders")}
          >
            <FontAwesomeIcon icon={faList} className={style.sep} />
            {' '}Órdenes
          </div>
        </li>

        <li>
          <div
            className={
              style.option +
              (sidebarOption === "products" ? " " + style.activeOption : "")
            }
            onClick={() => handleOptionSelect("products")}
          >
            <FontAwesomeIcon icon={faStore} className={style.sep} />
            {' '}Viandas
          </div>
        </li>

        <li>
          <div
            className={
              style.option +
              (sidebarOption === "reviews" ? " " + style.activeOption : "")
            }
            onClick={() => handleOptionSelect("reviews")}
          >
            <FontAwesomeIcon icon={faBook} className={style.sep} />
            {' '}Reseñas
          </div>
        </li>
        <li>
          <div
            className={
              style.option +
              (sidebarOption === "users" ? " " + style.activeOption : "")
            }
            onClick={() => handleOptionSelect("users")}
          >
            <FontAwesomeIcon icon={faUser} className={style.sep} />
            {' '}Usuarios
          </div>
        </li>

        <Link className={style.link} to="/">
          <div className={`${style.option} ${style.clientOption}`}>
            <FontAwesomeIcon icon={faUsers} className={style.sep} />
            {' '}Cambiar a vista Cliente
          </div>
        </Link>
      </ul>
    </div>
  );
};

export default SideBar;
