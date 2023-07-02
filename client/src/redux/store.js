// store 
import { configureStore } from '@reduxjs/toolkit';
import foodsReducer from "./foodSlice";

const store = configureStore({
  reducer: {
    foodsReducer
  },
});

export default store;