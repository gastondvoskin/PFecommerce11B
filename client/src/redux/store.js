// store 
import { configureStore } from '@reduxjs/toolkit';
import foodsReducer from "./foodSlice";
import usersReducer from "./userSlice"

const store = configureStore({
  reducer: {
    foodsReducer,
    usersReducer
  },
});

export default store;