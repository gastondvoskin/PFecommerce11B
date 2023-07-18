import styles from "./Home.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFoods } from "../../redux/foodActions.js";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import CardsContainer from "../../clientComponents/CardsContainer/CardsContainer";
import CarouselContainer from "../../clientComponents/CarouselContainer/CarouselContainer.jsx";
import { Link } from "react-router-dom";
import { getUserFavoritesAction } from "../../redux/userSlice";
import { setUserOrderCase, getItems } from "../../redux/shopingCartSlice";
import food from "../../assets/carousel/original2.jpeg";
import Mission from "../../clientComponents/Mission/Mission";

const Home = () => {
  const dispatch = useDispatch();
  const allFoods = useSelector((state) => state.foodsReducer.allFoods);
  const allItems = useSelector((state) => state.shopingCartReducer.itemsOrder);
  const favorites = useSelector((state) => state.usersReducer.userFavorites);
  const orderUser = useSelector(
    (state) => state.shopingCartReducer.pendingOrder
  );
  const foodsWithDiscounts = allFoods.filter((food) => food.discount > 0);
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
          if (isAuthenticated && !allItems.length) {
            axios
              .post("/order", { email: body.email })
              .then((r) => r.data)
              .then((data) => {
                dispatch(setUserOrderCase(data));
                if (data.Items?.length) dispatch(getItems(data.Items));
                console.log("DB Order");
              });
          }
          console.log("Usuario enviado a DB");
        })
        .catch((error) => console.log(error));
    }
  }, [isAuthenticated, user, allItems, dispatch]);

  useEffect(() => {
    if (!allFoods.length) {
      axios.get("/api").then(() => dispatch(getFoods()));
    } else {
      dispatch(getFoods());
    }
  }, [dispatch]);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getUserFavoritesAction(user.email));
    }
  }, [isAuthenticated, user]);

  /* if (isLoading) return <h1>Iniciando sesión...</h1>; */

  return (
    <div className={styles.mainContainer}>
      <CarouselContainer />

      <section>
        <Link to="viandas">
          <button className={styles.viewAllButton}>
            VER TODAS LAS VIANDAS
          </button>
        </Link>
      </section>

      <Mission />

      <section className={styles.sectionContainer}>
        <h1>Ofertas de la semana</h1>
        <CardsContainer
          currentFoods={foodsWithDiscounts}
          allItems={allItems}
          orderId={orderUser?.id}
        />
      </section>

      <section className={styles.sectionContainer}>
        <h1>Mejor rankeadas</h1>
        <CardsContainer
          currentFoods={foodsWithScoreHigherThan4}
          allItems={allItems}
          orderId={orderUser?.id}
        />
      </section>

      {!favorites.length ? (
        ""
      ) : (
        <section className={styles.sectionContainer}>
          <h1>Mis favoritos</h1>
          <CardsContainer
            currentFoods={favorites}
            allItems={allItems}
            orderId={orderUser?.id}
          />
        </section>
      )}
    </div>
  );
};

export default Home;
