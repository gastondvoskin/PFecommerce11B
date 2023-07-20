import Card from "../Card/Card";
import styles from "./CardsContainer.module.css";

export default function CardsContainer({ currentFoods, allItems, orderUser }) {
  return (
    <div className={styles.cardsContainer}>
      {currentFoods.length === 0 ? (
        <p>No se encontraron resultados.</p>
      ) : (
        currentFoods.map(
          ({id, name, image, initial_price, final_price, category, diets, discount, status, total_score}) => (
            <Card
              key={id}
              id={id}
              name={name}
              image={image}
              initial_price={initial_price}
              final_price={final_price}
              discount={discount}
              status={status}
              category={category}
              diets={diets}
              allItems={allItems}
              orderUser={orderUser}
              total_score={total_score}
            />
          )
        )
      )}
    </div>
  );
}
