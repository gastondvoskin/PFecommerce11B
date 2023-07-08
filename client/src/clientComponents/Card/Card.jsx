import style from "./Card.module.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { addItemsActions, deleteItemActions } from "../../redux/foodActions.js";
import { useSelector, useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import Swal from 'sweetalert2';
import axios from "axios";


export default function Card({ id, name, image, final_price, allItems }) {
  const [isItem, setIsItem] = useState(false);
  const { isAuthenticated,user } = useAuth0();
  const [quantity,setQuantity]=useState(1)

  console.log(allItems);
  const dispatch = useDispatch();
  useEffect(() => {
    allItems.map((item) => {
      if (item.name == name) {
        setIsItem(true);
        setQuantity(item.quantity)
      }
    });
  }, []);
  const handleClick = (e) => {


      if (isItem) {
        setIsItem(false), dispatch(deleteItemActions(id));
        //-------------------------
        const bodyDeleteItem = {
          userEmail: user?.email,
          FoodId: id,
        };
        axios
          .delete("/item", { data: bodyDeleteItem })
          .catch((error) => console.log(error));
        //-------------------------
      } else {
        setIsItem(true);
        const amount = final_price * parseInt(quantity);
        dispatch(
          addItemsActions({ id, name, image, final_price, quantity, amount })
        );
         //-------------------------
         const bodyAddItem = {
          userEmail: user?.email,
          FoodId: id,
          quantity,
          final_price,
        };
        axios.post("/item", bodyAddItem).catch((error) => console.log(error));
        //-------------------------
      }
    // }
  };
  const updateQuantity=(e)=>{
    const quantity=parseInt(e.target.value);
    const amount = final_price * quantity;
    setQuantity(quantity)
    dispatch(deleteItemActions(id))
    dispatch(addItemsActions({id,name,image,final_price,quantity:quantity,amount:amount}))
    //-------------------------
    const bodyUpdateItem = {
      userEmail: user?.email,
      FoodId: id,
      quantity,
      final_price,
    };
    axios.put("/item", bodyUpdateItem).catch((error) => console.log(error));
    //-------------------------
  }
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
      <div className={style.inputagregar}>
        <button className={style.btncar} onClick={handleClick}>{isItem ? "Agregado" : "Agregar"}</button>
        {isItem?<input className={style.detailinput} type="number" min='1' value={quantity} onChange={updateQuantity}/>:null}
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