import style from "./Card.module.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { addItemsActions, deleteItemActions } from "../../redux/foodActions.js";
import { useSelector, useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

export default function Card({ id, name, image, final_price, allItems }) {
  const [isItem, setIsItem] = useState(false);
  const { isAuthenticated } = useAuth0();

  console.log(allItems);
  const dispatch = useDispatch();
  useEffect(() => {
    allItems.map((item) => {
      if (item.name == name) {
        setIsItem(true);
      }
    });
  }, []);
  const handleClick = (e) => {
    if (!isAuthenticated) {
      alert(
        "¡Cuidado! Logueate antes de agregar productos a tu carrito de compras. ¡Gracias!"
      );
    } else {
      if (isItem) {
        setIsItem(false), dispatch(deleteItemActions(id));
      } else {
        setIsItem(true);
        const quantity = 1;
        const amount = final_price * quantity;
        dispatch(
          addItemsActions({ id, name, image, final_price, quantity, amount })
        );
      }
    }
  };
  return (
    <div className={style.card}>
      <NavLink to={`/detail/${id}`}>
        <div>
          <img src={image} alt="img not found" className={style.card_img} />
        </div>
        <div className={style.txt}>
          <h2>{name}</h2>
        </div>
      </NavLink>
      <div className={style.p}>
        <p>${final_price}</p>
      </div>
      <button onClick={handleClick}>{isItem ? "Agregado" : "Agregar"}</button>
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
