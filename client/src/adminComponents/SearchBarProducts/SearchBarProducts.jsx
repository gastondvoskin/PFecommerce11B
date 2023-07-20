import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchedCase, setRenderFoodsCase, setCategoryByCase } from '../../redux/adminSlice';

const SearchBarProducts = () => {
    const allFoods = useSelector((state) => state.foodsReducer.adminFoods);
    const searched = useSelector((state) => state.adminReducer.searched);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { value } = e.target;
        dispatch(setSearchedCase(value));
        const searchedProducts = allFoods.filter(product => product.name.toLowerCase().includes(value.toLowerCase()));
        dispatch(setRenderFoodsCase(searchedProducts));
        dispatch(setCategoryByCase(''))
    };

    return (
        <div>
            <input
                value={searched}
                type="text"
                placeholder=" 🔍 Buscar por nombre..."
                onChange={handleChange}
            />
        </div>
    );
};

export default SearchBarProducts;
