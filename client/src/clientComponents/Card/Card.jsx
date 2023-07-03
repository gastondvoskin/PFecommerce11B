import style from "./Card.module.css";
import shopping from '../../assets/carrito de compras/Rectangle 1.png'
import {NavLink} from 'react-router-dom';
import { useEffect, useState } from "react";
import {addItemsActions, deleteItemActions} from '../../redux/foodActions.js'
import { useSelector, useDispatch } from "react-redux";

export default function Card({ id,name, image, final_price,allItems }) {
  const [isItem,setIsItem]=useState(false);
  
  console.log(allItems)
  const dispatch=useDispatch();
  useEffect(()=>{
    allItems.map((item)=>{
      if(item.name==name){
        setIsItem(true)
      }
    });
  },[])
  const handleClick=(e)=>{
    if(isItem){
      setIsItem(false),
      dispatch(deleteItemActions(id));
    }else{
      setIsItem(true);
      dispatch(addItemsActions({id,name,image,final_price}))
    }
  }
  return (
    <div className={style.card}>
      <NavLink to={`/detail/${id}`}>
        <div><img src={image} alt="img not found" className={style.card_img}/></div>
        <div className={style.txt}>
          <h2>{name}</h2>
        </div>
      </NavLink>
      <div className={style.p}>
        <p>${final_price}</p>
      </div>
      <button onClick={handleClick}>{isItem? 'Agregado':'Agregar'}</button>
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
