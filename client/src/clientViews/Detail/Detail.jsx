import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFoods } from "../../redux/foodActions.js";
import axios from "axios";
import styles from "../Detail/Detail.module.css";
// import { addItemsActions, deleteItemActions } from "../../redux/foodActions.js";
import {
  setItemsActions,
  deleteItemActions,
  putItemActions,
} from "../../redux/shopingCartSlice.js";
import { useAuth0 } from "@auth0/auth0-react";
import Swal from "sweetalert2";
import 'animate.css';
import logo from "../../assets/logo/LogoViandaExpress.jpeg"

export default function Detail() {
  const { id } = useParams();
  const { isAuthenticated, user } = useAuth0();
  const [isItem, setIsItem] = useState(false);
  const orderUser = useSelector(
    (state) => state.shopingCartReducer.pendingOrder
  ); //
  const allItems = useSelector((state) => state.shopingCartReducer.itemsOrder); //
  console.log("Detail All: ", allItems);
  // const allItems = useSelector((state) => state.foodsReducer.orderItems);
  const dispatch = useDispatch();

  const allFoods = useSelector((state) => state.foodsReducer.allFoods);
  const [quantity, setQuantity] = useState(1);

  /* The useEffect implementation will change once we have a deployed DB */
  useEffect(() => {
    // console.log("antes del if");
    if (!allFoods.length) {
      // console.log("if");
      axios.get("/api").then(() => dispatch(getFoods()));
    } else {
      // console.log("else");
      dispatch(getFoods());
    }
  }, [dispatch]);
  /*To identify if it's an item*/
  useEffect(() => {
    allItems.map((item) => {
      if (item.Food.name === foodDetail.name) {
        setIsItem(true);
        setQuantity(item.quantity);
      }
    });
  }, []);

  const foodDetail = allFoods.find((food) => food.id === id);
  /*To add a new item or delete an item */
  const handleClick = (e) => {
    if (!isAuthenticated) {
      //alert('¡Cuidado! Logueate antes de agregar productos a tu carrito de compras. ¡Gracias!')
      Swal.fire({
        title: "¡Cuidado!",
        text: "Loguéate antes de agregar productos a tu carrito de compras.",
        icon: "error",
        footer: 'Vianda Express',
        imageUrl: logo,
        imageAlt: 'vianda express',
        timer: 5000,
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
        dispatch(deleteItemActions({ id: item?.id, OrderId: orderUser?.id }));
        //-------------------------
        // const bodyDelete = {
        //   userEmail: user?.email,
        //   FoodId: id,
        // };
        // console.log("DeleteAction", bodyDelete);
        // axios
        //   .delete("/item", { data: bodyDelete })
        //   .catch((error) => console.log(error));
        //-------------------------
      } else {
        setIsItem(true);
        const amount = foodDetail?.final_price * quantity;
        dispatch(
          setItemsActions({
            Food: foodDetail,
            FoodId: id,
            OrderId: orderUser?.id,
            name: foodDetail?.name,
            image: foodDetail?.image,
            final_price: foodDetail?.final_price,
            quantity: quantity,
            amount: amount,
          })
        );
        // dispatch(
        //   addItemsActions({
        //     id,
        //     name: foodDetail?.name,
        //     image: foodDetail?.image,
        //     final_price: foodDetail?.final_price,
        //     quantity: quantity,
        //     amount: amount,
        //   })
        // );
        //-------------------------
        // const bodyAdd = {
        //   userEmail: user?.email,
        //   FoodId: id,
        //   quantity: 1,
        //   final_price: foodDetail?.final_price,
        // };
        // axios.post("/item", bodyAdd).catch((error) => console.log(error));
        //-------------------------
      }
    }
  };
  const updateQuantity = (e) => {
    const quantity = parseInt(e.target.value);
    const item = allItems.filter((it) => it.FoodId === id)[0];
    const amount = foodDetail?.final_price * quantity;
    setQuantity(quantity);
    dispatch(
      putItemActions({
        orderId: orderUser?.id,
        itemId: item.id,
        quantity,
        amount,
      })
    );
    // dispatch(deleteItemActions(id));
    // dispatch(
    //   addItemsActions({
    //     id,
    //     name: foodDetail?.name,
    //     image: foodDetail?.image,
    //     final_price: foodDetail?.final_price,
    //     quantity: quantity,
    //     amount: amount,
    //   })
    // );
    //-------------------------
    // const bodyUpdateItem = {
    //   userEmail: user?.email,
    //   FoodId: id,
    //   quantity,
    //   final_price: foodDetail?.final_price,
    // };
    // axios.put("/item", bodyUpdateItem).catch((error) => console.log(error));
    //-------------------------
  };

  return (
    <main className={styles.main}>
      {!foodDetail ? (
        <p>"Cargando..."</p>
      ) : (
        <div className={styles.container}>
          <div className={styles.container1}>
            <h1 className={styles.title}>{foodDetail?.name}</h1>
            <img
              className={styles.image}
              src={foodDetail?.image}
              alt="img not found"
            />
            <p className={styles.description}>
              Descripción: {foodDetail?.description}
            </p>
          </div>
          <div className={styles.container2}>
            <h2 className={styles.caract}>Características Principales</h2>
            <p className={styles.price}>Precio: ${foodDetail?.final_price}</p>
            <p className={styles.category}>Categoría: {foodDetail?.category}</p>
            <p className={styles.diets}>
              Dietas:{" "}
              {!foodDetail?.diets.length ? (
                <span>Esta vianda no sigue ninguna dieta específica</span>
              ) : (
                foodDetail?.diets.map((plaftorm, index) => {
                  return foodDetail?.diets.length - 1 === index ? (
                    <span key={index}>{plaftorm}</span>
                  ) : (
                    <span key={index}>{`${plaftorm} | `}</span>
                  );
                })
              )}
            </p>

            {foodDetail?.status ? (
              <p className={styles.status}>Estado: disponible</p>
            ) : (
              <p className={styles.status}>Estado: no disponible</p>
            )}

            {foodDetail?.total_score > 4 && (
              <p className={styles.popular}>
                Ésta es una de nuestras comidas más elegidas por los usuarios!
              </p>
            )}
            {isItem ? (
              <input
                className={styles.detailinput}
                type="number"
                min="1"
                value={quantity}
                onChange={updateQuantity}
              />
            ) : null}
            <button className={styles.butagregar} onClick={handleClick}>
              {isItem ? "Agregado" : "Agregar"}
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
