import React from "react";

import styles from "./Home.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../../components/SearchBar/SearchBar";
import { getFoods,setCurrentPageAction } from "../../redux/foodActions.js";
import CardsContainer from "../../components/DashBoard/CardsContainer";
import Paginado from "../../components/DashBoard/Paginado";
// import EditForm from "./EditForm";
import axios from "axios";
import { Link } from "react-router-dom";

const HomeDB = () => {
  const [index, setIndex] = useState(false);
  const dispatch = useDispatch();
  const allFoods = useSelector((state) => state.foodsReducer.allFoods);
  const filteredFoods = useSelector(
    (state) => state.foodsReducer.filteredFoods
  );
  const currentPage = useSelector((state) => state.foodsReducer.currentPage);
  const active = useSelector((state) => state.foodsReducer.activeFilteredFoods);

  /* This implementation will change once we have a deployed DB */
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

  const handleSelect = (selected) => {
    setIndex(selected);
  };

  return (
    <div className={styles.mainContainer}>
      <Link to="/home">
        <button className={styles.backHome}>Home</button>
      </Link>
      <SearchBar />

      <div className={styles.asereje}>
        <Link to="/dashboard/create">
          <button>Crear Vianda</button>
        </Link>
        {/* Tono: Comentado. Después de la primera demo, el estilo del HomeDashboard va a cambiar a un listado.  */}
        {/* <Paginado
          foodsPerPage={foodsPerPage}
          foods={allFoods.length}
          filterFoods={filteredFoods.length}
          paginado={paginado}
          currentPage={currentPage}
        /> */}
        {!currentFoods.length ? (
          <p>No se enconraron resultados</p>
        ) : (
          <CardsContainer currentFoods={currentFoods} />
        )}
      </div>
    </div>
  );
};

export default HomeDB;
