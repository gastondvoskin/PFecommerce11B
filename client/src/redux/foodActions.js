// actions (these are the actions that will be imported in React components)

import axios from "axios";

import {
  getAllFoods,
  getFoodsByName,
  orderFoods,
  activeFilteredFood,
  setOrder,
  setCurrentPage,
  filterByCategory,
  setCategory,
  setDiet,
  filterByDiet,
  addItems,
  deleteItems, /* , getFoodById */
  getAdminFoods,
} from "./foodSlice.js";
import { Alert } from "bootstrap";

export const getFoods = () => async (dispatch) => {
  try {
    const response = await axios.get("/food");
    const allFoods = response.data;
    dispatch(getAllFoods(allFoods));
  } catch (error) {
    console.log(error);
  }
};

export const getAdminFoodsAction = () => async (dispatch) => {
  try {
    const response = await axios.get("/food/admin")
      .then(r => r.data)
    dispatch(getAdminFoods(response));
  } catch (error) {
    console.log(error);
  }
};

export const getFoodsByNameAction = (name) => async (dispatch) => {
  try {
    const response = await axios.get("/food?name=" + name);
    const foodsByName = response.data;
    dispatch(getFoodsByName(foodsByName));
  } catch (error) {
    console.log(error);
  }
};

export const orderFoodsAction = (payload) => async (dispatch) => {
  try {
    console.log("action");
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

export const postFood = (input) => async (dispatch) => {
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
    await axios.post("/food", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    dispatch(postFoods());
  } catch (error) {
    alert(error.message);
  }
};

export const putFoods = (input) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("name", input.name);
    formData.append("description", input.description);
    formData.append("status", input.status);
    formData.append("initial_price", input.initial_price);
    formData.append("discount", input.discount);
    formData.append("image", input.image);
    console.log(formData);
    await axios.put(`/${input.id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  } catch (error) {
    alert(error.message);
  }
};
// ORDER ITEMS
export const addItemsActions = (id, name, image,  final_price, quantity,amount) => (dispatch) => {
    try {
        amount=quantity*final_price
        dispatch(addItems(id, name, image, final_price, quantity,amount));
    } catch (error) {
      console.log(error);
    }
  };

export const deleteItemActions = (id) => (dispatch) => {
  try {
    console.log("deleteItems", id);
    dispatch(deleteItems(id));
  } catch (error) {
    console.log(error);
  }
};

// Do not delete. Uncomment and test when the endpoint `/food/${id}` is created
// export const getFood = (id) => async (dispatch) => {
//     try {
//         const response = await axios.get(`/food/${id}`);
//         const foodById = response.data;
//         dispatch(getFoodById(foodById));
//     } catch (error) {
//         console.log(error);
//     }
// };
