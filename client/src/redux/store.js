// store 
import { configureStore } from '@reduxjs/toolkit';
import foodsReducer from "./foodSlice";
import usersReducer from "./userSlice";
import shopingCartReducer from './shopingCartSlice';

const store = configureStore({
  reducer: {
    foodsReducer,
    usersReducer,
    shopingCartReducer
    
  },
});

export default store;