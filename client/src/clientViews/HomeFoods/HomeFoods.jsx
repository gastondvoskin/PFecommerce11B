import React from "react";
import styles from "./HomeFoods.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../../clientComponents/SearchBar/SearchBar";
import { getFoods, setCurrentPageAction } from "../../redux/foodActions.js";
import CardsContainer from "../../clientComponents/CardsContainer/CardsContainer";
import Paginado from "../../clientComponents/Paginado/Paginado";
import OrderOptions from "../../clientComponents/orderOptions/orderOptions";
import CategoryButtons from "../../clientComponents/categoryButtons/categoryButtons";
import axios from "axios";
import FilterDietsOptions from "../../clientComponents/filtersDietsOptions/filterDietsOptions";

const Home = () => {
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();
  const allFoods = useSelector((state) => state.foodsReducer.allFoods);
  const filteredFoods = useSelector(
    (state) => state.foodsReducer.filteredFoods
  );
  const currentPage = useSelector((state) => state.foodsReducer.currentPage);
  const active = useSelector((state) => state.foodsReducer.activeFilteredFoods);

  useEffect(() => {
    if (!allFoods.length) {
      axios.get("http://localhost:3001/api").then(() => dispatch(getFoods()));
    } else {
      dispatch(getFoods());
    }
  }, [dispatch]);

  const foodsPerPage = 8;
  const indexOfLastFood = currentPage * foodsPerPage;
  const indexOfFirstFood = indexOfLastFood - foodsPerPage;
  const currentFoods = active
    ? filteredFoods.slice(indexOfFirstFood, indexOfLastFood)
    : allFoods.slice(indexOfFirstFood, indexOfLastFood);

  const paginado = (pageNumber) => {
    dispatch(setCurrentPageAction(pageNumber));
  };

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.buttonsContainer}>
        {/* Comentario TONO: No se puede implementar el reset hasta que se corrija la implementación de los filtros en redux */}
        {/* <button className={styles.all} onClick={(e) => handleFilterByCategory(e)} value="Todas">
          Todas
        </button> */}
        {/* Comentatario TONO: los botones se deberían refactorizar: deberían mapear un array de diets para no repetir código. */}
        <CategoryButtons />
      </div>

      <div className={styles.filtros}>
        {/* Comentario TONO: El filtro de dieta no está implementado. */}
        <div className={styles.filtros2}>
          <FilterDietsOptions />
          <OrderOptions />
        </div>
      </div>
      {/* A futuro implementar Eliminar filtros */}
      {/* <button>Eliminar Filtros</button> */}
      <div className={styles.asereje}>
        <SearchBar />

        <Paginado
          foodsPerPage={foodsPerPage}
          foods={allFoods.length}
          filterFoods={filteredFoods.length}
          paginado={paginado}
          currentPage={currentPage}
        />

        {!currentFoods.length ? (
          <h1 className={styles.notFoundMessage}>
            No se encontraron resultados
          </h1>
        ) : (
          <CardsContainer currentFoods={currentFoods} />
        )}
      </div>
    </div>
  );
};

export default Home;

/**
 *option y valores para ordernar por Popularidad 
 *<option value="asc">Más Popular</option>
  <option value="desc">Menos Popular</option>
 */
