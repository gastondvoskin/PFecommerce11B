import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userSlice = createSlice({
    name: "users",
    initialState:{
        allUsers: [],
        userDetail: {},
        userOrders: [],
    },
    reducers: {
        getAllUsersCase: (state, action) => {
            state.allUsers = action.payload
        },
        getUserByNameCase: (state, action) => {
            state.userDetail = action.payload
        },
    }
})

export const { getAllUsersCase, getUserByNameCase  } = userSlice.actions;

export default userSlice.reducer;

export const getAllUsersAction = () => async (dispatch) => {
    try {
        const allUsers =  await axios.get("/user")
        const usersData = allUsers.data
        dispatch(getAllUsersCase(usersData))
    }catch(error){
        console.log(error)
    }
}

export const getUserDetailAction = (email) => async (dispatch) => {
    try {
        const userById = await axios.get("/user?email=" + email)
        const userData = userById.data
        dispatch(getUserByNameCase(userData))
    } catch (error) {
        console.log(error)
    }
}

export const getUserOrdersAction = (userId) => async (dispatch) => {
    try{
        const userOrders = await axios.get(` /user/${userId}/orders`);
        const userOrdersData = userOrders.data;
        dispatch(getUserOrdersCase(userOrdersData));
    } catch (error){
        console.log(error);
    }
}
