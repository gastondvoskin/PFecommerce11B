import React from "react";
import styles from "../Paginado/Paginado.module.css";
import { useSelector } from "react-redux";

export default function Paginado({
  foodsPerPage,
  foods,
  paginado,
  currentPage,
  filterFoods,
}) {
  const active = useSelector((state) => state.foodsReducer.activeFilteredFoods);
  const pageNumbers = [];

  for (
    let i = 1;
    i <= Math.ceil(active ? filterFoods / foodsPerPage : foods / foodsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className={styles.foodList}>
        <li>
          <button className={styles.previousAndNext}
            onClick={() => paginado(currentPage - 1)}
            disabled={currentPage===1}
          >
            {'<'}
          </button>
        </li>
        {pageNumbers &&
          pageNumbers.map((number) => {
            if (number === currentPage) {
              return (
                <li key={number}>
                  <button
                    className={styles.numbersActive}
                    onClick={() => paginado(number)}
                  >
                    {number}
                  </button>
                </li>
              );
            } else {
              return (
                <li key={number}>
                  <button
                    className={styles.numbersInactive}
                    onClick={() => paginado(number)}
                  >
                    {number}
                  </button>
                </li>
              );
            }
          })}
          <button className={styles.previousAndNext}
            onClick={() => paginado(currentPage + 1)}
            disabled={currentPage===pageNumbers.length}
          >
            {'>'}
          </button>
      </ul>
    </nav>
  );
}





{/* <ul className={styles.foodList}>
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
    } else if (number === 1 || number === pageNumbers.length) {
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
    } else if (number > currentPage - 4 && number < currentPage + 4) {
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
    } else if (
      number === currentPage - 4 ||
      number === currentPage + 4
    ) {
      return (
        <li className="number" key={number}>
          <button className={styles.numbers}>...</button>
        </li>
      );
    }
  })}
</ul> */}
