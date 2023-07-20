import style from "../Card/Card.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "animate.css";
import logo from "../../assets/logo/LogoViandaExpress.jpeg";
import { useDispatch, useSelector } from "react-redux";
import {
  setItemsActions,
  deleteItemActions,
  putItemActions,
  setUserOrderCase,
  getItems,
} from "../../redux/shopingCartSlice";

export default function AddButton({
  id,
  allItems,
  isItem,
  setIsItem,
  Food,
  quantity,
  setQuantity,
}) {
  const { isAuthenticated, user } = useAuth0();
  const dispatch = useDispatch();
  const orderUser = useSelector(
    (state) => state.shopingCartReducer.pendingOrder
  );
  useEffect(() => {
    if (isAuthenticated && !allItems.length) {
      const body = {
        email: user?.email,
      };
      axios
        .post("/order", body)
        .then((r) => r.data)
        .then((data) => {
          dispatch(setUserOrderCase(data));
          if (data.Items?.length) dispatch(getItems(data.Items));
        })
        .catch((error) => console.log(error));
      /* console.log("userOrder:", userOrder); */
      // dispatch(setUserOrderCase(userOrder));
      // if (userOrder.Items?.length) dispatch(getItems(userOrder.Items));
    }
  }, [isAuthenticated, user, allItems, dispatch]);
  const handleClick = (e) => {
    if (!isAuthenticated) {
      Swal.fire({
        title: "¡Cuidado!",
        text: "Loguéate antes de agregar productos a tu carrito de compras.",
        icon: "error",
        footer: "Vianda Express",
        imageUrl: logo,
        timer: 5000,
        timerProgressBar: true,
        confirmButtonColor: "var(--accentColor)",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    } else {
      if (isItem) {
        setIsItem(false);
        const item = allItems.filter((it) => it.FoodId === id)[0];
        dispatch(deleteItemActions({ id: item.id, OrderId: orderUser.id }));
        setQuantity(1);
      } else {
        setIsItem(true);
        const amount = Food.final_price * parseInt(quantity);
        dispatch(
          setItemsActions({
            Food: Food,
            FoodId: id,
            OrderId: orderUser.id,
            name: Food.name,
            image: Food.image,
            final_price: Food.final_price,
            quantity: quantity,
            amount: amount,
          })
        );
      }
    }
  };
  /* console.log(orderUser.id) */

  const updateQuantity = (e) => {
    /* console.log("Card: ", allItems); */
    const item = allItems.filter((it) => it.FoodId === id)[0];
    const quantity = parseInt(e.target.value);
    const amount = Food.final_price * quantity;
    /* console.log("Card II: ", item); */
    setQuantity(quantity);
    dispatch(
      putItemActions({
        orderId: orderUser.id,
        itemId: item.id,
        quantity,
        amount,
      })
    );
  };
  return (
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
  );
}
