import style from "./Card.module.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  setItemsActions,
  deleteItemActions,
  putItemActions,
} from "../../redux/shopingCartSlice";
import { useSelector, useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import Swal from "sweetalert2";
import 'animate.css';
import axios from "axios";
import { setUserOrderCase } from "../../redux/shopingCartSlice";
import LikeButton from "../LikeButton/LikeButton";

import meat from "../../assets/categories/meat.png";
import pastas from "../../assets/categories/pastas.png";
import salad from "../../assets/categories/salad.png";
import vegetarian from "../../assets/diets/vegetarian.png";
import vegan from "../../assets/diets/vegan.png";
import sinLactosa from "../../assets/diets/sinLactosa.png";
import sinTacc from "../../assets/diets/sinTacc.png";
import logo from "../../assets/logo/LogoViandaExpress.jpeg"

export default function Card({
  id,
  name,
  image,
  initial_price,
  final_price,
  category,
  diets,
  discount,
  status,
  allItems,
  orderId,
}) {
  const [isItem, setIsItem] = useState(false);
  const { isAuthenticated, user } = useAuth0();
  const [quantity, setQuantity] = useState(1);
  const Food = {
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
    categoryIcon = <img className={style.categoryIcon} src={meat} />;
  if (category === "Ensaladas")
    categoryIcon = <img className={style.categoryIcon} src={salad} />;
  if (category === "Pastas")
    categoryIcon = <img className={style.categoryIcon} src={pastas} />;

  const dietsIcons = diets?.map((diet, index) => {
    if (diet === "Sin TACC")
      diet = <img key={index} className={style.dietsIcon} src={sinTacc} />;
    if (diet === "Vegetariana")
      diet = <img key={index} className={style.dietsIcon} src={vegetarian} />;
    if (diet === "Vegana")
      diet = <img key={index} className={style.dietsIcon} src={vegan} />;
    if (diet === "Sin Lactosa")
      diet = <img key={index} className={style.dietsIcon} src={sinLactosa} />;
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
  const handleClick = (e) => {
    if (!isAuthenticated) {
      Swal.fire({ 
        title: "¡Cuidado!",
        text: "Loguéate antes de agregar productos a tu carrito de compras.",
        icon: "error",
        footer: 'Vianda Express',
        imageUrl: logo,
        imageAlt: 'vianda express',
        timer: 4000,
        timerProgressBar: true,
        confirmButtonColor: 'var(--accentColor)',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });
    } else {
      if (isItem) {
        setIsItem(false);
        const item = allItems.filter((it) => it.FoodId === id)[0];
        dispatch(deleteItemActions({ id: item.id, OrderId: orderId }));
      } else {
        setIsItem(true);
        const amount = final_price * parseInt(quantity);
        dispatch(
          setItemsActions({
            Food: Food,
            FoodId: id,
            OrderId: orderId,
            name: name,
            image: image,
            final_price: final_price,
            quantity: quantity,
            amount: amount,
          })
        );
        // const bodyAddItem = {
        //   userEmail: user?.email,
        //   FoodId: id,
        //   quantity,
        //   final_price,
        // };
        // axios.post("/item", bodyAddItem).catch((error) => console.log(error));
      }
    }
  };

  const updateQuantity = (e) => {
    const item = allItems.filter((it) => it.FoodId === id)[0];
    const quantity = parseInt(e.target.value);
    const amount = final_price * quantity;
    setQuantity(quantity);
    // dispatch(deleteItemActions(id));
    dispatch(
      putItemActions({
        orderId,
        itemId: item.id,
        quantity,
        amount,
      })
    );
    // addItemsActions({
    //   id,
    //   name,
    //   image,
    //   final_price,
    //   quantity: quantity,
    //   amount: amount,
    // })
    // const bodyUpdateItem = {
    //   userEmail: user?.email,
    //   FoodId: id,
    //   quantity,
    //   final_price,
    // };
    // axios.put("/item", bodyUpdateItem).catch((error) => console.log(error));
  };

  /* RETURN */
  return (
    <div className={style.card}>
      <div className={style.imageAndLikeContainer}>
        <NavLink className={style.NavLink} to={`/detail/${id}`}>
          <img src={image} alt="img not found" className={style.card_img} />
        </NavLink>

        <div>
          <LikeButton foodId={id} />
        </div>
      </div>

      <div className={style.dataContainer}>
        <h2>{name}</h2>
        <div className={style.categoryAndDiets}>
          {categoryIcon}{" "}
          {dietsIcons?.map((dietIcon, index) => (
            <span key={index}>{dietIcon}</span>
          ))}
        </div>

        <div className={style.priceContainer}>
          <p>${final_price}</p>
        </div>
      </div>

      <div className={style.inputagregar}>
        <button className={style.btncar} onClick={handleClick}>
          {isItem ? "Eliminar" : "Agregar"}
        </button>
        {isItem ? (
          <input
            className={style.detailinput}
            type="number"
            min="1"
            value={quantity}
            onChange={updateQuantity}
          />
        ) : null}
      </div>
    </div>
  );
}
