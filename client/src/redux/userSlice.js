import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userSlice = createSlice({
    name: "users",
    initialState:{
        allUsers: [],
        userDetail: [],
    },
    reducers: {
        getAllUsersCase: (state, action) => {
            state.allUsers = action.payload
        },
        getUserByNameCase: (state, action) => {
            state.userDetail = action.payload
        },
        putUserInfoChange: (state, action) => {
            state
        }
    }
})

export const { getAllUsersCase, getUserByNameCase, putUserInfoChange  } = userSlice.actions;

export default userSlice.reducer;

export const getAllUsersAction = () => async (dispatch) => {
    try {
        const allUsers =  await axios.get("http://localhost:3001/user")
        const usersData = allUsers.data
        dispatch(getAllUsersCase(usersData))
    }catch(error){
        console.log(error)
    }
}

export const getUserDetailAction = (email) => async (dispatch) => {
    try {
        const userById = await axios.get("http://localhost:3001/user?email=" + email)
        const userData = userById.data
        dispatch(getUserByNameCase(userData))
    } catch (error) {
        console.log(error)
    }
}

export const putUserDetailAction = (email, data) => async (dispatch) => {
    try {
        const userInfo = await axios.put("http://localhost:3001/user?email=" + email, data)
        const userToChange = userInfo.data
        dispatch(putUserInfoChange(userToChange))
    } catch (error) {
        console.log(error)
    }
}
