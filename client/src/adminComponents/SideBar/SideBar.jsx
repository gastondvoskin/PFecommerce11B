import React from 'react';
import style from '../SideBar/SideBar.module.css';
import { Link } from "react-router-dom";

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
                Tablero
            </div>
            </li>
            <li>
            <div
                className={style.option + (selectedOption === 'products' ? ' ' + style.activeOption : '')}
                onClick={() => handleOptionSelect('products')}
            >
                Viandas
            </div>
            </li>
            <li>
            <div
                className={style.option + (selectedOption === 'reviews' ? ' ' + style.activeOption : '')}
                onClick={() => handleOptionSelect('reviews')}
            >
                Reseñas
            </div>
            </li>
            <li>
            <div
                className={style.option + (selectedOption === 'users' ? ' ' + style.activeOption : '')}
                onClick={() => handleOptionSelect('users')}
            >
                Usuarios
            </div>
            </li>
        </ul>
        <div className={`${style.option}`}>
            <Link className={style.link} to="/home">Client</Link>
        </div>
    </div>
  );
};

export default SideBar;
