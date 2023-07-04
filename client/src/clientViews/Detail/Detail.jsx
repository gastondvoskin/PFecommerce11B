import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFoods } from "../../redux/foodActions.js";
import axios from "axios";
import styles from "../Detail/Detail.module.css";
import {addItemsActions, deleteItemActions} from '../../redux/foodActions.js';
import { useAuth0 } from "@auth0/auth0-react";


export default function Detail() {
  const { id } = useParams();
  const {isAuthenticated } = useAuth0();
  const [isItem,setIsItem]=useState(false);
  const allItems=useSelector((state)=>state.foodsReducer.orderItems);
  const dispatch = useDispatch();

  const allFoods = useSelector((state) => state.foodsReducer.allFoods);

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
  useEffect(()=>{
    allItems.map((item)=>{
      if(item.name===foodDetail.name){
        setIsItem(true)
      }
    });
  },[])

  const foodDetail = allFoods.find((food) => food.id === id);
  /*To add a new item or delete an item */
  const handleClick=(e)=>{
    if(!isAuthenticated){
      alert('¡Cuidado! Logueate antes de agregar productos a tu carrito de compras. ¡Gracias!')
    }else{
      if(isItem){
        setIsItem(false),
        dispatch(deleteItemActions(id));
      }else{
        setIsItem(true);
        dispatch(addItemsActions({id,name:foodDetail?.name,image:foodDetail?.image,final_price:foodDetail?.final_price}))
      }
    }
  }
  console.log(allItems)
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
          <button className={styles.butagregar} onClick={handleClick}>{isItem? 'Agregado':'Agregar'}</button>
          </div>
        </div>
      )}
      
    </main>
  );
}
