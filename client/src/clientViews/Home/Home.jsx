import React from "react";
import styles from "./Home.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFoods } from "../../redux/foodActions.js";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import Card from "../../clientComponents/Card/Card";
// import { hardcodedFoodsWithDiscounts } from "../../../hardcodedFoodsWithDiscounts";
import CarouselContainer from "../../clientComponents/CarouselContainer/CarouselContainer.jsx";
import { Link } from "react-router-dom";
import { setUserOrderCase } from "../../redux/shopingCartSlice";


const Home = () => {
  const dispatch = useDispatch();
  const allFoods = useSelector((state) => state.foodsReducer.allFoods);
  const allItems = useSelector((state) => state.foodsReducer.orderItems);
  const foodsWithDiscounts = allFoods.filter(
    (food) => food.discount > 0
  ); /* .slice(0, 4) */ /* uncomment slice(0,4) to render only the first 4 */
  const foodsWithScoreHigherThan4 = allFoods.filter(
    (food) => food.total_score > 4
  );

  const { isLoading, user, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      const body = {
        name: user?.name,
        email: user?.email,
      };
      axios
        .post("/user", body)
        .then(() => {
          const userOrder = axios.post("/order", body);
          dispatch(setUserOrderCase(userOrder))
        })
        .then(() => {
          console.log("Usuario y Order enviados a DB");
        })
        .catch((error) => console.log(error));
    }
  }, [isAuthenticated, user]);

  useEffect(() => {
    if (!allFoods.length) {
      axios.get("/api").then(() => dispatch(getFoods()));
    } else {
      dispatch(getFoods());
    }
  }, [dispatch]);

  if (isLoading) return <h1>Iniciando sesión...</h1>;

  return (
    <div className={styles.mainContainer}>
      <CarouselContainer />

      <section>

        <Link to="viandas">
          <button className={styles.viewAllButton}>VER TODAS LAS VIANDAS</button>
        </Link>
      </section>

      <section className={styles.sectionContainer}>
        <h1>Ofertas de la semana</h1>
        <div className={styles.cardsContainer}>
          {foodsWithDiscounts &&
            foodsWithDiscounts.map(
              ({ id, name, image, final_price, category, diets }) => {
                return (
                  <Card
                    id={id}
                    name={name}
                    image={image}
                    final_price={final_price}
                    category={category}
                    diets={diets}
                    allItems={allItems}
                  />
                );
              }
            )}
        </div>
        <br />
        <br />
      </section>

      <section className={styles.sectionContainer}>
        <h1>Mejor rankeados</h1>
        <div className={styles.cardsContainer}>
          {foodsWithScoreHigherThan4 &&
            foodsWithScoreHigherThan4.map(
              ({ id, name, image, final_price, category, diets }) => {
                return (
                  <Card
                    id={id}
                    name={name}
                    image={image}
                    final_price={final_price}
                    category={category}
                    diets={diets}
                    allItems={allItems}
                  />
                );
              }
            )}
        </div>
        <br />
      </section>
    </div>
  );
};

export default Home;
