import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeFilteredFoodsAction, filterByDietAction, setCurrentPageAction, setDietAction, setOrderAction } from '../../redux/foodActions';

const FilterDietsOptions = () => {
    const dispatch = useDispatch();
    const category = useSelector((state) => state.foodsReducer.foodsCategory);
    const allFoods  = useSelector((state) => state.foodsReducer.allFoods);
    const filteredFoods  = useSelector((state) => state.foodsReducer.filteredFoods);
    const diet  = useSelector((state) => state.foodsReducer.foodsDiet);

    const handlerDietFilter = (diet) =>{
        let results;
        
        if (category !== ''){
            switch (diet) {
                case 'Vegano':
                    results = allFoods.filter(e => e.diets.includes('Vegano') && e.category === category )
                    break;
                case 'Vegetariano':
                    results = allFoods.filter(e => e.diets.includes('Vegetariano') && e.category === category )
                    break;
                case 'Sin TACC':
                    results = allFoods.filter(e => e.diets.includes('Sin TACC') && e.category === category)
                    break;
                case 'Sin Lactosa':
                    results = allFoods.filter(e => e.diets.includes('Sin Lactosa') && e.category === category)
                    break;
                default:
                    break;
            }
        }else{
            switch (diet) {
                case 'Vegano':
                    results = allFoods.filter(e => e.diets.includes('Vegano'))
                    break;
                case 'Vegetariano':
                    results = allFoods.filter(e => e.diets.includes('Vegetariano') )
                    break;
                case 'Sin TACC':
                    results = allFoods.filter(e => e.diets.includes('Sin TACC'))
                    break;
                case 'Sin Lactosa':
                    results = allFoods.filter(e => e.diets.includes('Sin Lactosa'))
                    break;
                default:
                    break;
            }
        }  

        return results 
     }

    const handlerSelect = (e) =>{
        console.log('hola')
        const {value} = e.target;
        const filters = handlerDietFilter(value);
        dispatch(filterByDietAction(filters))
        dispatch(setDietAction(value));
        dispatch(setCurrentPageAction(1));
        dispatch(setOrderAction(''))
        dispatch(activeFilteredFoodsAction(true))
    }
    // "Sin TACC",
    // "Vegetariano",
    // "Vegano",
    // "Sin Lactosa",
    return (
        <div>
            <select 
            onChange={(e) => handlerSelect(e)}
            value={diet}
            >
                <option value="" disabled hidden>Dieta</option>
                <option value="Vegano">Vegano</option>
                <option value="Vegetariano">Vegetariano</option>
                <option value="Sin TACC">Sin TACC</option>
                <option value="Sin Lactosa">Sin Lactosa</option>
            </select>
        </div>
    )
}

export default FilterDietsOptions