 // reducer (foodsSlice.reducer is by now the only reducer)
import { createSlice } from "@reduxjs/toolkit";
import { hardcodedFoodsArray } from "../../hardcodedFoods";
/*const items = [
  {id:1,name:'producto1',image:'img1',finaly_price:10,quantity:1,amount:10},
    {id:2,name:'producto2',image:'img2',finaly_price:10,quantity:1,amount:10},
    {id:3,name:'producto3',image:'img3',finaly_price:10,quantity:1,amount:10},
]*/

const initialState = {
  allFoods: [],
  foodDetail: [],
  filteredFoods:[],
  orderItems:[
    {
      final_price : 3200,
      id : "85017bae-4e74-4e1b-9092-1d39a7d33d34",
      image : "https://assets.kraftfoods.com/recipe_images/opendeploy/94128_640x428.jpg",
      name : "Bistec a la parrilla",
      quantity: 1,
      amount: 3200,
    },
    {
      final_price : 2800,
      id : "9cdc2214-7fc4-44b4-8bcb-c46c9ac15acd",
      image : "https://danzadefogones.com/wp-content/uploads/2018/03/Pasta-primavera-2.jpg",
      name : "Pasta Primavera",
      quantity: 1,
      amount: 2800,
    },
  ],
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
  ] /* TONO: why is there a diets property in redux? Cause don´t a diets' table*/,
  categories: [
    "Pastas",
    "Ensaladas",
    "Carnes",
  ] /* TONO: why is there a categories property in redux? Cause don't a categories' table*/,
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
    },
    // WIP
    // ORDER ITEMS
    addItems: (state, action) => {
      const newItem = action.payload;
      state.orderItems = [...state.orderItems, newItem];
    },
    deleteItems: (state, action)=>{
      const deleteId = action.payload;
      state.orderItems = state.orderItems.filter((it)=>it.id!==deleteId);
    }
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
  deleteFoods,
  addItems,
  deleteItems
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
