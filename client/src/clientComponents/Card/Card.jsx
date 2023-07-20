import styles from "./Card.module.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import Swal from "sweetalert2";
import { setUserOrderCase } from "../../redux/shopingCartSlice";
import LikeButton from "../LikeButton/LikeButton";
import AddButton from "../AddButton/AddButton";
import meat from "../../assets/categories/meat.png";
import pastas from "../../assets/categories/pastas.png";
import salad from "../../assets/categories/salad.png";
import vegetarian from "../../assets/diets/vegetarian.png";
import vegan from "../../assets/diets/vegan.png";
import sinLactosa from "../../assets/diets/sinLactosa.png";
import sinTacc from "../../assets/diets/sinTacc.png";

export default function Card({
  id ,
  name,
  image,
  initial_price,
  final_price,
  category,
  diets,
  discount,
  status,
  allItems,
  orderUser,
  total_score,
}) {
  const [isItem, setIsItem] = useState(false);
  const { isAuthenticated, user } = useAuth0();
  const [quantity, setQuantity] = useState(1);
  const foodDetail = {
    id,
    name,
    image,
    initial_price,
    final_price,
    category,
    diets,
    discount,
    status,
  };

  let categoryIcon;
  if (category === "Carnes")
    categoryIcon = <img className={styles.categoryIcon} src={meat} />;
  if (category === "Ensaladas")
    categoryIcon = <img className={styles.categoryIcon} src={salad} />;
  if (category === "Pastas")
    categoryIcon = <img className={styles.categoryIcon} src={pastas} />;

  const dietsIcons = diets?.map((diet, index) => {
    if (diet === "Sin TACC")
      diet = <img key={index} className={styles.dietsIcon} src={sinTacc} />;
    if (diet === "Vegetariana")
      diet = <img key={index} className={styles.dietsIcon} src={vegetarian} />;
    if (diet === "Vegana")
      diet = <img key={index} className={styles.dietsIcon} src={vegan} />;
    if (diet === "Sin Lactosa")
      diet = <img key={index} className={styles.dietsIcon} src={sinLactosa} />;
    return diet;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    allItems?.map((item) => {
      if (item.FoodId === id) {
        setIsItem(true);
        setQuantity(item.quantity);
      }
    });
  }, []);
  
  /* RETURN */
  return (
    <div className={styles.card}>
      <div className={styles.imageAndLikeContainer}>
        <NavLink className={styles.NavLink} to={`/detail/${id}`}>
          <img src={image} alt="img not found" className={styles.card_img} />
        </NavLink>

        {total_score > 4 && <div className={styles.star}>⭐️</div>}

        <div>
          <LikeButton foodId={id} />
        </div>
      </div>

      <div className={styles.dataContainer}>
        <h2>{name}</h2>
        <div className={styles.categoryAndDiets}>
          {categoryIcon}{" "}
          {dietsIcons?.map((dietIcon, index) => (
            <span key={index}>{dietIcon}</span>
          ))}
        </div>

        {discount === 0 ? (
          <div className={styles.priceContainer}>
            <span className={styles.normalPrice}>${final_price}</span>
          </div>
        ) : (
          <div className={styles.priceContainer}>
            <span className={styles.discount}>🎁 {discount}%</span>
            <span className={styles.previousPrice}>${initial_price}</span>
            <span className={styles.currentPrice}>${final_price}</span>
          </div>
        )}
      </div>

      <AddButton 
        id={foodDetail.id}
        allItems={allItems}
        isItem={isItem}
        setIsItem={setIsItem}
        Food={foodDetail}
        quantity={quantity}
        setQuantity={setQuantity}
      />
    </div>
  );
}
