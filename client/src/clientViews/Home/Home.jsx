import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";
import styles from "./Home.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../../clientComponents/SearchBar/SearchBar";
import { getFoods, setCurrentPageAction } from "../../redux/foodActions.js";
import CardsContainer from "../../clientComponents/CardsContainer/CardsContainer";
import Paginado from "../../clientComponents/Paginado/Paginado";
import OrderOptions from "../../clientComponents/orderOptions/orderOptions.jsx"
import CategoryButtons from "../../clientComponents/CategoryButtons/CategoryButtons";
import axios from "axios";
import FilterDietsOptions from "../../clientComponents/FilterDietsOptions/FilterDietsOptions";
import { useAuth0 } from "@auth0/auth0-react";
// comment. 
// comment 2. 
// comment 3. 
// comment 4. 
// coment 5
// comment 6

const Home = () => {
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();
  const allFoods = useSelector((state) => state.foodsReducer.allFoods);
  const filteredFoods = useSelector(
    (state) => state.foodsReducer.filteredFoods
  );
  const currentPage = useSelector((state) => state.foodsReducer.currentPage);
  const active = useSelector((state) => state.foodsReducer.activeFilteredFoods);
  const { isLoading, user, isAuthenticated } = useAuth0();
  const allItems=useSelector((state)=>state.foodsReducer.orderItems)


  useEffect(() => {
    let body = {};
    if (isAuthenticated) {
      body = {
        name: user?.name,
        email: user?.email,
      };
    } else {
      body = {
        type: "guest"
      };
    };
    axios.post("/user", body).catch((error) => console.log(error))
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
  const currentFoods = active
    ? filteredFoods.slice(indexOfFirstFood, indexOfLastFood)
    : allFoods.slice(indexOfFirstFood, indexOfLastFood);

  const paginado = (pageNumber) => {
    dispatch(setCurrentPageAction(pageNumber));
  };

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  if (isLoading) return <h1>Iniciando sesión...</h1>;

  return (
    <div className={styles.mainContainer}>
      {/* Comentario TONO: A futuro modularizar el carousel */}
      <div className={styles.Carousel}>
        <Carousel activeIndex={index} onSelect={handleSelect} interval="9000">
          <Carousel.Item>
            <img src="../src/assets/carousel/variety.jpg" alt="Variadadas" />
            <Carousel.Caption>
              <div className={styles.CarouselText}>
                Viandas para toda la familia
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="../src/assets/carousel/healthy.jpeg" alt="Saludables" />

            <Carousel.Caption>
              <div className={styles.CarouselText}>Saludables y nutritivas</div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="../src/assets/carousel/withLove.jpeg" alt="Caseras" />

            <Carousel.Caption>
              <div className={styles.CarouselText}>Caseras y con amor</div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

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
          <CardsContainer currentFoods={currentFoods} allItems={allItems} />
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
