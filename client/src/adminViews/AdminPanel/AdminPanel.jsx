import React, { useState,useEffect } from 'react';
import Sidebar from '../../adminComponents/SideBar/SideBar';
import { getAdminFoodsAction } from "../../redux/foodActions.js";
import style from './AdminPanel.module.css';
import Users from '../../adminComponents/Users/Users';
import Reviews from '../../adminComponents/Reviews/Reviews';
import Products from '../../adminComponents/Products/Products';
import Dashboard from '../../adminComponents/DashBoard/DashBoard';
import { useDispatch,useSelector } from 'react-redux';
import axios from 'axios';




const AdminPanel = () => {

  const [selectedOption, setSelectedOption] = useState('dashboard');
  const allFoods = useSelector((state) => state.foodsReducer.adminFoods);
  const dispatch = useDispatch()
  useEffect(() => {
    if (!allFoods.length) {
      axios.get("/api").then(() => dispatch(getAdminFoodsAction()));
    } else {
      dispatch(getAdminFoodsAction());
    }
  }, [dispatch]);

  const renderSelectedOption = () => {
    switch (selectedOption) {
        case 'dashboard':
            return <Dashboard />;
        case 'products':
            // return <Products />;
          return <Products/>
        case 'users':
            return <Users/>
        case 'reviews':
            return <Reviews/>
      // Agrega aquí los casos para los otros componentes del panel de administración
      default:
        return null;
    }
  };

  return (
    <div className={style.adminPanel}>
      <Sidebar selectedOption ={selectedOption} onSelectOption={setSelectedOption} />
      <div className={style.adminContent}>
        {renderSelectedOption()}
      </div>
    </div>
  );
};

export default AdminPanel;
