import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userOrderSlice = createSlice ({
    name: "orderbyuser",
    initialState: {
        orderByUser: []
    },
    reducers:{
        getOrderByUserCase: ( state, action ) => {
            state.orderByUser = action.payload
        }
    }
});

export const { getOrderByUserCase } = userOrderSlice.actions;
export default userOrderSlice.reducer;

export const getOrderByUserAction = () => async (dispatch) => {
    try {
        const orderByUser = await axios.get('/order')
        .then(res => res.data)
        dispatch(getOrderByUserCase(orderByUser)) 
    } catch (error) {
        console.log(error)
    }
} 