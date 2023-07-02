import Card from "../Card/Card";
import style from "./CardsContainer.module.css";
import { Link } from "react-router-dom";

export default function CardsContainer({ currentFoods }) {
  return (
    <div className={style.cardsContainer}>
      {currentFoods.length === 0 ? (
        <p>No se encontraron resultados.</p>
      ) : (
        currentFoods.map(({id, name, image, final_price, category, diets}) => {
          return (
            <Link key={id} to={`/detail/${id}`} className={style.link}>
              <Card
                name={name}
                image={image}
                final_price={final_price}
                category={category}
                diets={diets}
              />
            </Link>
          );
        })
      )}
    </div>
  );
};