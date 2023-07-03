import React, { useState, useEffect} from "react";
import { initMercadoPago } from "@mercadopago/sdk-react";
import Payment from "../../clientComponents/ShoppingCar/Payment";
import Checkout from "../../clientComponents/ShoppingCar/Checkout.jsx";
import Footer from "../../clientComponents/ShoppingCar/Footer.jsx";
import InternalProvider from "../../clientComponents/ShoppingCar/ContextProvider.jsx";
import { SpinnerCircular } from 'spinners-react';
import { useDispatch, useSelector } from "react-redux";

// REPLACE WITH YOUR PUBLIC KEY AVAILABLE IN: https://developers.mercadopago.com/panel
initMercadoPago('APP_USR-8e95f5fd-f2e0-4982-8ac8-27b1f1b175bb');

const ShoppingCar = () => {

  const allItems=useSelector((state)=>state.foodsReducer.orderItems);
  console.log(allItems)
  const [preferenceId, setPreferenceId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [orderData, setOrderData] = useState(allItems);
    
  const handleClick = () => {
    setIsLoading(true);
    fetch("http://localhost:8080/create_preference", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    })
      .then((response) => {
        return response.json();
      })
      .then((preference) => {
        setPreferenceId(preference.id);
      })
      .catch((error) => {
        console.error(error);
      }).finally(() => {
        setIsLoading(false);
      })
      
  };

  const renderSpinner = () => {
     if (isLoading) {
      return (
        <div className="spinner-wrapper">
          <SpinnerCircular сolor='#009EE3' />
        </div>
      )
     }
  }

  return (
    <InternalProvider context={{ preferenceId, isLoading, orderData, setOrderData }}>
      <main>
        {renderSpinner()}
        <Checkout onClick={handleClick} description/>
        <Payment />
      </main>
      <Footer />
    </InternalProvider>
  );
};

export default ShoppingCar;