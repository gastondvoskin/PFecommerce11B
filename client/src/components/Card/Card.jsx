import style from "./Card.module.css";

export default function Card({ name, image, final_price, category, diets }) {
  return (
    <div className={style.card}>
      <img src={image} alt="img not found" />
      <div className={style.txt}>
        <h2>{name}</h2>
      </div>
      <div className={style.p}>
        <p>${final_price}</p>
      </div>

      {/* <p>
        Dietas:{" "}
        {diets.map((diet) => (
          <span>{diet}</span>
        ))}
      </p>
      <p>Categoría: {category}</p> */}
    </div>
  );
}
