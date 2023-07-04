import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./Viandas.module.css";
import SearchBar from "../../clientComponents/SearchBar/SearchBar";
import { getFoods, setCurrentPageAction } from "../../redux/foodActions.js";
import CardsContainer from "../../clientComponents/CardsContainer/CardsContainer";
import Paginado from "../../clientComponents/Paginado/Paginado";
import OrderOptions from "../../clientComponents/orderOptions/orderOptions.jsx";
import CategoryButtons from "../../clientComponents/CategoryButtons/CategoryButtons";
import FilterDietsOptions from "../../clientComponents/FilterDietsOptions/FilterDietsOptions";

const Viandas = () => {
  const dispatch = useDispatch();
  const allFoods = useSelector((state) => state.foodsReducer.allFoods);
  const filteredFoods = useSelector(
    (state) => state.foodsReducer.filteredFoods
  );
  const currentPage = useSelector((state) => state.foodsReducer.currentPage);
  const activeFilteredFoods = useSelector(
    (state) => state.foodsReducer.activeFilteredFoods
  );
  const { isLoading, user, isAuthenticated } = useAuth0();
  const allItems = useSelector((state) => state.foodsReducer.orderItems);

  useEffect(() => {
    let body = {};
    if (isAuthenticated) {
      body = {
        name: user?.name,
        email: user?.email,
      };
    } else {
      body = {
        type: "guest",
      };
    }
    axios.post("/user", body).catch((error) => console.log(error));
  }, [isAuthenticated, user]);

  useEffect(() => {
    if (!allFoods.length) {
      axios.get("/api").then(() => dispatch(getFoods()));
    } else {
      dispatch(getFoods());
    }
  }, [dispatch]);

  const foodsPerPage = 8;
  const indexOfLastFood = currentPage * foodsPerPage;
  const indexOfFirstFood = indexOfLastFood - foodsPerPage;
  const currentFoods = activeFilteredFoods
    ? filteredFoods.slice(indexOfFirstFood, indexOfLastFood)
    : allFoods.slice(indexOfFirstFood, indexOfLastFood);

  const paginado = (pageNumber) => {
    dispatch(setCurrentPageAction(pageNumber));
  };

  if (isLoading) return <h1>Iniciando sesión...</h1>;

  return (
    <div className={styles.mainContainer}>
      <div className={styles.buttonsContainer}>
        <CategoryButtons />
      </div>

      <div className={styles.filtros}>
        <div className={styles.filtros2}>
          <FilterDietsOptions />
          <OrderOptions />
        </div>
      </div>

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
          <CardsContainer currentFoods={currentFoods} allItems={allItems} />
        )}
      </div>
    </div>
  );
};
export default Viandas;
