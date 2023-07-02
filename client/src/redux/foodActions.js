// actions (these are the actions that will be imported in React components)

import axios from "axios";

import { getAllFoods, getFoodsByName,orderFoods,activeFilteredFood,setOrder,setCurrentPage,filterByCategory,setCategory,setDiet,filterByDiet/* , getFoodById */ } from "./foodSlice.js";


export const getFoods = () => async (dispatch) => {
    try {
        const response = await axios.get("http://localhost:3001/food"); 
        const allFoods = response.data;
        dispatch(getAllFoods(allFoods));
    } catch (error) {
        console.log(error);
    }
};

export const getFoodsByNameAction = (name) => async (dispatch) => {
    try {
        const response = await axios.get("http://localhost:3001/food?name=" + name); 
        const foodsByName = response.data;
        dispatch(getFoodsByName(foodsByName));
    } catch (error) {
        console.log(error);
    }
};

export const orderFoodsAction = (payload) => async (dispatch) => {
    try {
        console.log('action')
        dispatch(orderFoods(payload));
    } catch (error) {
        console.log(error);
    }
};
export const setOrderAction = (payload) => async (dispatch) => {
    try {
        dispatch(setOrder(payload));
    } catch (error) {
        console.log(error);
    }
};

export const activeFilteredFoodsAction = (payload) => async (dispatch) => {
    try {
        dispatch(activeFilteredFood(payload));
    } catch (error) {
        console.log(error);
    }
};
export const setCurrentPageAction = (payload) => async (dispatch) => {
    try {
        dispatch(setCurrentPage(payload));
    } catch (error) {
        console.log(error);
    }
};
export const filterByCategoryAction = (payload) => async (dispatch) => {
    try {
        dispatch(filterByCategory(payload));
    } catch (error) {
        console.log(error);
    }
};
export const filterByDietAction = (payload) => async (dispatch) => {
    try {
        dispatch(filterByDiet(payload));
    } catch (error) {
        console.log(error);
    }
};
export const setCategoryAction = (payload) => async (dispatch) => {
    try {
        dispatch(setCategory(payload));
    } catch (error) {
        console.log(error);
    }
};
export const setDietAction = (payload) => async (dispatch) => {
    try {
        dispatch(setDiet(payload));
    } catch (error) {
        console.log(error);
    }
};



export const postFood=(input)=>async (dispatch)=> {
    try {
        const formData = new FormData();
        formData.append("name", input.name);
        formData.append("description", input.description);
        formData.append("category", input.category);
        formData.append("diet", input.diets);
        formData.append("initial_price", input.initial_price);
        formData.append("discount", input.discount);
        formData.append("image", input.image);
        console.log(formData);
        await axios.post("http://localhost:3001/food", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
        });
        dispatch(postFoods());
        } catch (error) {
            alert (error.message)
        }
}

export const putFoods=(input)=>async (dispatch)=>{
    try{
        const formData = new FormData();
        formData.append("name", input.name);
        formData.append("description", input.description);
        formData.append("status", input.status);
        formData.append("initial_price", input.initial_price);
        formData.append("discount", input.discount);
        formData.append("image", input.image);
        console.log(formData);
        await axios.put(`http://localhost:3001/${input.id}`,formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },})
    }catch(error){
        alert (error.message)
    }
}
// Do not delete. Uncomment and test when the endpoint `http://localhost:3001/food/${id}` is created
// export const getFood = (id) => async (dispatch) => {
//     try {
//         const response = await axios.get(`http://localhost:3001/food/${id}`); 
//         const foodById = response.data;
//         dispatch(getFoodById(foodById));
//     } catch (error) {
//         console.log(error);
//     }
// };
