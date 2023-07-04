import style from "./Card.module.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { addItemsActions, deleteItemActions } from "../../redux/foodActions.js";
import { useSelector, useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import Swal from 'sweetalert2';

export default function Card({ id, name, image, final_price, allItems }) {
  const [isItem, setIsItem] = useState(false);
  const { isAuthenticated } = useAuth0();
  const [quantity,setQuantity]=useState(1)

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
      Swal.fire({
        title: "¡Cuidado!",
        text: "Logueate antes de agregar productos a tu carrito de compras. ¡Gracias!",
        icon: "warning",
      });
    } else {
      if (isItem) {
        setIsItem(false), dispatch(deleteItemActions(id));
      } else {
        setIsItem(true);
        const amount = final_price * parseInt(quantity);
        dispatch(
          addItemsActions({ id, name, image, final_price, quantity, amount })
        );
      }
    }
  };

  const updateQuantity=(e)=>{
    const quantity=parseInt(e.target.value);
    const amount = final_price * quantity;
    setQuantity(quantity)
    dispatch(deleteItemActions(id))
    dispatch(addItemsActions({id,name,image,final_price,quantity:quantity,amount:amount}))
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
      <button className={style.btncar} onClick={handleClick}>
        {isItem ? "Agregado" : "Agregar"}
      </button>
      {isItem ? (
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={updateQuantity}
        />
      ) : null}
    </div>
  );
}
