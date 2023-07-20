import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  activeFilteredFoodsAction,
  orderFoodsAction,
  setOrderAction,
} from "../../redux/foodActions";
import styles from "../FilterDietsOptions/FilterDietsOptions.module.css";

export default function OrderOptions() {
  const allFoods = useSelector((state) => state.foodsReducer.allFoods);
  const filteredFoods = useSelector(
    (state) => state.foodsReducer.filteredFoods
  );
  const active = useSelector((state) => state.foodsReducer.activeFilteredFoods);
  const orderBy = useSelector((state) => state.foodsReducer.orderBy);
  const dispatch = useDispatch();

  const handlerOrder = (value) => {
    let orderFoods = [];
    if (active) {
      orderFoods = [...filteredFoods];
    } else {
      orderFoods = [...allFoods];
    }

    switch (value) {
      case "expensive":
        orderFoods.sort(function (a, b) {
          if (a.final_price > b.final_price) {
            return -1;
          }
          if (b.final_price > a.final_price) {
            return 1;
          }
          return 0;
        });
        break;
      case "cheap":
        orderFoods.sort(function (a, b) {
          if (a.final_price > b.final_price) {
            return 1;
          }
          if (b.final_price > a.final_price) {
            return -1;
          }
          return 0;
        });
        break;
      case "atoz":
        orderFoods.sort(function (a, b) {
          if (a.name > b.name) {
            return 1;
          }
          if (b.name > a.name) {
            return -1;
          }
          return 0;
        });
        break;
      case "ztoa":
        orderFoods.sort(function (a, b) {
          if (a.name > b.name) {
            return -1;
          }
          if (b.name > a.name) {
            return 1;
          }
          return 0;
        });
        break;
      default:
        break;
    }

    dispatch(orderFoodsAction(orderFoods));
  };
  const handlerSelect = (e) => {
    const value = e.target.value;
    handlerOrder(value);
    dispatch(setOrderAction(value));
    dispatch(activeFilteredFoodsAction(true));
  };

  return (
    <div>
      <select
        onChange={(e) => handlerSelect(e)}
        value={orderBy}
        className={styles.cat}
      >
        <option value="" disabled hidden>
          Ordenar
        </option>
        <option value="expensive">Mayor precio</option>
        <option value="cheap">Menor precio</option>
        <option value="atoz"> A a la Z</option>
        <option value="ztoa">Z a la A</option>
      </select>
    </div>
  );
}
