import React from 'react';
import style from '../SideBar/SideBar.module.css';
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";


const SideBar = ({ onSelectOption,selectedOption }) => {
  const handleOptionSelect = (option) => {
    onSelectOption(option);
  };

  return (
    <div className={style.sidebar}>
        <ul>
            <li>
            <div
                className={style.option + (selectedOption === 'dashboard' ? ' ' + style.activeOption : '')}
                onClick={() => handleOptionSelect('dashboard')}
            >
                <FontAwesomeIcon icon={faHouse} className={style.sep}/>Tablero
            </div>
            </li>
            <li>
            <div
                className={style.option + (selectedOption === 'products' ? ' ' + style.activeOption : '')}
                onClick={() => handleOptionSelect('products')}
            >
                <FontAwesomeIcon icon={faList} className={style.sep} />Viandas
            </div>
            </li>
            <li>
            <div
                className={style.option + (selectedOption === 'reviews' ? ' ' + style.activeOption : '')}
                onClick={() => handleOptionSelect('reviews')}
            >
                <FontAwesomeIcon icon={faBook} className={style.sep} />Reseñas
            </div>
            </li>
            <li>
            <div
                className={style.option + (selectedOption === 'users' ? ' ' + style.activeOption : '')}
                onClick={() => handleOptionSelect('users')}
            >
                <FontAwesomeIcon icon={faUser} className={style.sep} />Usuarios
            </div>
            </li>
        
        <div className={`${style.option}`}>
            <Link className={style.link} to="/">
            <FontAwesomeIcon icon={faUsers} className={style.sep}/>Client</Link>
        </div>
        </ul>
    </div>
  );
};

export default SideBar;
