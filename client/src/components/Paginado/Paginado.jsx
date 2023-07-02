import React from "react";
import styles from "../Paginado/Paginado.module.css";
import { useSelector } from "react-redux";

export default function Paginado({
  foodsPerPage,
  foods,
  paginado,
  currentPage,
  filterFoods
}) {
  const active = useSelector((state)=> state.foodsReducer.activeFilteredFoods)
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(active ? filterFoods / foodsPerPage :foods / foodsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    /* Comentario TONO: Yo no haría una lógica para dejar tres puntos. Son muy pocas páginas para que estéticamente tenga sentido. */
    /* Comentario TONO: Estaría bueno sumarle las flechas a la derecha y a la derecha (con la lógica de que no se desactive la izquierda cuando está en 1 y se desactive la derecha cuando está en la cantidad total de páginas). */

    <nav>
      <ul className={styles.foodList}>
        {pageNumbers &&
          pageNumbers.map((number) => {
            if (number === currentPage) {
              return (
                <li className="number" key={number}>
                  <button
                    className={styles.numbersActive}
                    onClick={() => paginado(number)}
                  >
                    {number}
                  </button>
                </li>
              );
            } else if (
              number === 1 ||
              number === pageNumbers.length ||
              number === currentPage - 1 ||
              number === currentPage + 1
            ) {
              {
                return (
                  <li className="number" key={number}>
                    <button
                      className={styles.numbers}
                      onClick={() => paginado(number)}
                    >
                      {number}
                    </button>
                  </li>
                );
              }
            } else if (
              number === currentPage - 2 ||
              number === currentPage + 2
            ) {
              return (
                <li className="number" key={number}>
                  <button className={styles.numbers}>...</button>
                </li>
              );
            }
          })}
      </ul>
    </nav>
  );
}
