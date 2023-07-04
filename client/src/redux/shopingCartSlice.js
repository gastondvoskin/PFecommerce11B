import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import userSlice from "./userSlice";

export const shopingCartSlice = createSlice({
    name: "shopingCart",
    initialState:{
        pendingOrder:{}
    },
    reducers: {
        getPendingOrderCase:(state,action)=>{
            state.pendingOrder = action.payload
        },
        getIteminOrderCase:()=>{
            
        }
    }
})
export const {getPendingOrderCase} = shopingCartSlice.actions
export default shopingCartSlice.reducer;

export const getPendingOrderAction = (userId) => async (dispatch) => {
    try {
        const pendingOrder = await axios.get(`/order/${userId}`)
            .then(r => r.data[0])
        dispatch(getPendingOrderCase(pendingOrder)) 
    } catch (error) {
        console.log(error)
    }
}