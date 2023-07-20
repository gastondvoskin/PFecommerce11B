// store 
import { configureStore } from '@reduxjs/toolkit';
import foodsReducer from "./foodSlice";
import usersReducer from "./userSlice";
import shopingCartReducer from './shopingCartSlice';
import adminReducer from './adminSlice';

const store = configureStore({
  reducer: {
    foodsReducer,
    usersReducer,
    shopingCartReducer,
    adminReducer    
  },
});

export default store;