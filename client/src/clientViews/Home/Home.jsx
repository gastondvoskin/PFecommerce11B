import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";
import styles from "./Home.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFoods, setCurrentPageAction } from "../../redux/foodActions.js";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import Card from "../../clientComponents/Card/Card";

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
  const allItems = useSelector((state) => state.foodsReducer.orderItems);

  useEffect(() => {
    let body = {};
    if (isAuthenticated) {
      body = {
        name: user?.name,
        email: user?.email
      };
    } else {
      body = {
        type: "guest"
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
  const currentFoods = active
    ? filteredFoods.slice(indexOfFirstFood, indexOfLastFood)
    : allFoods.slice(indexOfFirstFood, indexOfLastFood);


  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  if (isLoading) return <h1>Iniciando sesión...</h1>;

  // Definición del array foodsWithDiscounts fuera del componente JSX
  const foodsWithDiscounts = [
    /* hardcoded. In the future, implement logic */
    {
      name: "Pasta rellena",
      diets: ["Vegetariano"],
      image:
        "https://img-global.cpcdn.com/recipes/7041b21955686cf2/1360x964cq70/pasta-rellenas-sin-tacc-sin-gluten-vegan-foto-principal.webp",
      description:
        "Este plato, está cocinado con una base de Pastas y pertenece a los platos de la cocina Tradicional. Por regla general se consume, principalmente, durante Todo el año, y se suele servir a los comensales como Primer plato.",
      category: "Pastas",
      initial_price: 2600,
      discount: 0,
      final_price: 2600,
      status: true,
      total_score: 0
    },
    {
      name: "Ensalada mixta",
      diets: ["Sin TACC", "Vegetariano", "Vegano", "Sin Lactosa"],
      description:
        "Una ensalada mixta clásica con lechuga, tomate, zanahoria, pepino y aderezo de vinagreta casera.",
      image: "https://imag.bonviveur.com/imagen-de-la-ensalada-mixta.jpg",
      initial_price: 1370,
      discount: 0,
      final_price: 1370,
      status: true,
      total_score: 0,
      category: "Ensaladas"
    },
    {
      name: "Carne guisada con patatas",
      diets: ["Sin TACC", "Sin Lactosa"],
      description:
        "Carne tierna y jugosa guisada a fuego lento con patatas, cebolla, zanahorias y especias, un plato reconfortante.",
      image:
        "https://www.cocinatis.com/archivos/202207/CTIS0210-Receta-carne-guisada-con-patatas_large_16x9.jpg",
      initial_price: 3000,
      discount: 0,
      final_price: 3000,
      status: true,
      total_score: 0,
      category: "Carnes"
    }
  ];

  <div className={styles.container}>
    {foodsWithDiscounts.map((food, index) => (
      <div key={index} className={styles.card}>
        {/* Contenido de la card */}
      </div>
    ))}
  </div>;

  return (
    <div className={styles.mainContainer}>
      {/* Comentario TONO: A futuro modularizar el carousel */}
      <div className={styles.Carousel}>
        <Carousel activeIndex={index} onSelect={handleSelect} interval="9000">
          <Carousel.Item>
            <img src="../../src/assets/carousel/variety.jpg" alt="Variadadas" />
            <Carousel.Caption>
              <div className={styles.CarouselText}>
                Viandas para toda la familia
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="../../src/assets/carousel/healthy.jpeg" alt="Saludables" />

            <Carousel.Caption>
              <div className={styles.CarouselText}>Saludables y nutritivas</div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="../../src/assets/carousel/withLove.jpeg" alt="Caseras" />

            <Carousel.Caption>
              <div className={styles.CarouselText}>Caseras y con amor</div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className={styles.cardsContiner}>
        {foodsWithDiscounts.map((food) => {
          return (
            <div className={styles.card}>
              <div>
                <img
                  src={food.image}
                  alt="img not found"
                  className={styles.card_img}
                />
              </div>
              <h2>{food.name}</h2>
              <div className={styles.p}>
                <p>${food.final_price}</p>
              </div>
            </div>
          );
        })}
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
