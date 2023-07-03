import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { activeFilteredFoodsAction, filterByCategoryAction, setCategoryAction, setCurrentPageAction, setDietAction, setOrderAction } from '../../redux/foodActions';
import styles from "./CategoryButtons.module.css";


const CategoryButtons = () => {
    const allFoods  = useSelector((state) => state.foodsReducer.allFoods);
    const dispatch = useDispatch()

    const handleClick = (e) =>{
        const value = e.target.value
        const filteredFoods = handlerFilterCategory(value)
        dispatch(filterByCategoryAction(filteredFoods))
        dispatch(setOrderAction(''))
        dispatch(activeFilteredFoodsAction(true))
        dispatch(setCurrentPageAction(1))
        dispatch(setCategoryAction(value))
        dispatch(setDietAction(''))
    }
    
    const handlerFilterCategory = (value) => {
        let filteredCategoryFoods;
        switch (value) {
            case 'Pastas':
                filteredCategoryFoods = allFoods.filter(e => e.category === 'Pastas')
                break;
            case 'Carnes':
                filteredCategoryFoods = allFoods.filter(e => e.category === 'Carnes')
                break;
            case 'Ensaladas':
                filteredCategoryFoods = allFoods.filter(e => e.category === 'Ensaladas')
                break;
            default:
                break;
        }
        return filteredCategoryFoods;
    }


  return (
    <div className={styles.buttonsContainer}>
        <button
            className={styles.pastas}
            onClick={(e) => handleClick(e)}
            value="Pastas"
        >
            {/* Pastas */}
        </button>

        <button
            className={styles.meat}
            onClick={(e) => handleClick(e)}
            value="Carnes"
        >
            {/* Carnes */}
        </button>

        <button
            className={styles.salads}
            onClick={(e) => handleClick(e)}
            value="Ensaladas"
        >
            {/* Ensaladas */}
        </button>
  </div>
  )
}

export default CategoryButtons