import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    userDetail: {},
    userOrder: [],
    userOrderDetail: null,
    userFavorites: [],
  },
  reducers: {
    getUserByNameCase: (state, action) => {
      state.userDetail = action.payload;
    },
    getUserOrderCase: (state, action) => {
      state.userOrder = action.payload;
    },
    getUserOrderDetailCase: (state, action) => {
      state.userOrderDetail = action.payload;
    },
    getUserFavoritesCase: (state, action) => {
      state.userFavorites = action.payload;
    },
    postUserReviewCase: (state, action) => {
      state
    },
  },
});

export const {
  getAllUsersCase,
  getUserByNameCase,
  getUserOrderCase,
  getUserOrderDetailCase,
  getUserFavoritesCase,
  postUserReviewCase,
} = userSlice.actions;

export default userSlice.reducer;

export const getUserDetailAction = (email) => async (dispatch) => {
  try {
    console.log('aquí')
    const userById = await axios.get("/user?email=" + email);
    console.log('userById: ', userById)
    const userData = userById.data;
    dispatch(getUserByNameCase(userData));
  } catch (error) {
    console.log(error);
  }
};

export const getUserOrderAction = (id) => async (dispatch) => {
  try {
    const userOrder = await axios
      .get(`/order/user/${id}`)
      .then((res) => res.data);
    dispatch(getUserOrderCase(userOrder));
  } catch (error) {
    console.log(error);
  }
};

export const getUserOrderDetailAction = (id) => async (dispatch) => {
  try {
    const userdetail = await axios
      .get(`/order/detail/${id}`)
      .then((r) => r.data);
    dispatch(getUserOrderDetailCase(userdetail));
  } catch (error) {
    console.log(error);
  }
};

export const getUserFavoritesAction = (email) => async (dispatch) => {
  try {
    const userFavorites = await axios
      .get(`/favorite/${email}`)
      .then((res) => res.data);
    dispatch(getUserFavoritesCase(userFavorites));
  } catch (error) {
    console.log(error);
  }
};

export const postUserReviewAction = (foodId, userId, comment, rating, itemId) => async (dispatch) => {
  try {
    const newReview = {
      foodId,
      userId,
      comment,
      rating,
      itemId
    };

    const response = await axios.post("/review", newReview);
    const createdReview = response.data;
    dispatch(postUserReviewCase(createdReview));
  } catch (error) {
    console.log(error);
  }
};