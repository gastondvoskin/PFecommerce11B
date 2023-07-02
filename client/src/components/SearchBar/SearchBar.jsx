import React, { useState } from "react";

import { useDispatch } from "react-redux"
import styles from "../SearchBar/SearchBar.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { activeFilteredFoodsAction, getFoodsByNameAction, setCurrentPageAction, setOrderAction,setCategoryAction, setDietAction } from "../../redux/foodActions";

const magnifyingGlass = <FontAwesomeIcon icon={faMagnifyingGlass} />;

function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  

  function handleInputChange(event) {
    const updatedName = event.target.value;
    setName(updatedName);
    dispatch(getFoodsByNameAction(updatedName));
    dispatch(setCurrentPageAction(1))
    dispatch(activeFilteredFoodsAction(true))
    dispatch(setOrderAction(''))
    dispatch(setCategoryAction(''))
    dispatch(setDietAction(''))
  }

  return (
    <div>
      <input
        className={styles.searchBar}
        type="text"
        /* placeholder={`${magnifyingGlass} Buscar por nombre...`} */
        placeholder=" 🔍 Buscar por nombre..."
        onChange={(e) => handleInputChange(e)}
      />
      {/* <button className={styles.magnifyingGlass}>{magnifyingGlass}</button> */}
    </div>
  );
}

export default SearchBar;


