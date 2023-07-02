 // reducer (foodsSlice.reducer is by now the only reducer)
import { createSlice } from "@reduxjs/toolkit";
import { hardcodedFoodsArray } from "../../hardcodedFoods";

const initialState = {
  allFoods: [],
  foodDetail: [],
  filteredFoods:[],
  activeFilteredFoods:false,
  orderBy:'',
  foodsCategory:'',
  foodsDiet:'',
  currentPage:1,
  diets: [
    "Sin TACC",
    "Vegetariano",
    "Vegano",
    "Sin Lactosa",
  ] /* TONO: why is there a diets property in redux? */,
  categories: [
    "Pastas",
    "Ensaladas",
    "Carnes",
  ] /* TONO: why is there a categories property in redux? */,
  // filteredByDiet: [],
};

export const foodsSlice = createSlice({
  name: "foods",
  initialState,
  reducers: {
    getAllFoods: (state, action) => {
      /* we can access getAllFoods through foodsSlice.actions.getAllFoods */
      // console.log(action.type);
      // console.log(action.payload);
      const allFoods = action.payload;
      state.allFoods = allFoods;
      state.filteredByCategory = allFoods;
      state.filteredByOrder = allFoods;
    },

    getFoodsByName: (state, action) => {
      if (action.payload !== "") {
        state.filteredFoods = action.payload
      } else {
        state.allFoods;
      }
    },

    orderFoods:(state,action) =>{
      const orderedFoods = action.payload;
      state.filteredFoods = orderedFoods
    },

    activeFilteredFood:(state,action) =>{
      const bolean = action.payload;
      state.activeFilteredFoods = bolean
    },
    setOrder:(state,action) =>{
      const order = action.payload;
      state.orderBy = order
    },
    setCurrentPage:(state,action) => {
      const page = action.payload
      state.currentPage = page
    },
    filterByCategory:(state,action) => {
      const filteredByCategory = action.payload
      state.filteredFoods = filteredByCategory
    },
    filterByDiet:(state,action) => {
      const filteredByDiet = action.payload;
      state.filteredFoods = filteredByDiet
    },
    setCategory:(state,action) => {
      const category = action.payload;
      state.foodsCategory = category
    },
    setDiet:(state,action) => {
      const diet = action.payload;
      state.foodsDiet = diet
    },

    postFoods: (state) => {
      state.allFoods;
    },

    editFoods: (state)=>{
      state.allFoods
    },

    deletFoods: (state)=>{
      state.allFoods
    }
    // WIP
  },
});

export const {
  getAllFoods,
  getFoodsByName,
  activeFilteredFood,
  orderFoods,
  setOrder,
  setCurrentPage,
  filterByCategory,
  filterByDiet,
  setCategory,
  setDiet,
  editFoods,
  deleteFoods
} = foodsSlice.actions;


export default foodsSlice.reducer; /* it will be imported in the store */

/**
 * Logica del filtrado por Popularidad
      case "asc": 
          state.allFoods.sort(function(a, b) {
            if(a.total_score > b.total_score){
                return -1
            }
            if(b.total_score > a.total_score){
                return 1
            }
            return 0
          })
          state.allFoods
          
          break;

        case "desc":
          state.allFoods.sort(function(a, b) {
            if(a.total_score > b.total_score){
                return 1
            }
            if(b.total_score > a.total_score){
                return -1
            }
            return 0
          })
          state.allFoods
          
          break;
 */
