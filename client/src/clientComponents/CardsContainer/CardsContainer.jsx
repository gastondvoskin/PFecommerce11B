import Card from "../Card/Card";
import style from "./CardsContainer.module.css";

export default function CardsContainer({ currentFoods, allItems}) {
  return (
    <div className={style.cardsContainer}>
      {currentFoods.length === 0 ? (
        <p>No se encontraron resultados.</p>
      ) : (
        currentFoods.map(({id, name, image, final_price, category, diets}) => {
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
        })
      )}
    </div>
  );
};