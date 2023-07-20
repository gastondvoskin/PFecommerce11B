import Card from "../Card/Card";
import style from "./CardsContainer.module.css";

export default function CardsContainer({ currentFoods, allItems, orderId }) {
  return (
    <div className={style.cardsContainer}>
      {currentFoods.length === 0 ? (
        <p>No se encontraron resultados.</p>
      ) : (
        currentFoods.map(
          ({
            id,
            name,
            image,
            initial_price,
            final_price,
            category,
            diets,
            discount,
            status,
          }) => (
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
              orderId={orderId}
            />
          )
        )
      )}
    </div>
  );
};