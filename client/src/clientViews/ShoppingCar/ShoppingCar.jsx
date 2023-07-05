import React, { useState, useEffect } from "react";
import { initMercadoPago } from "@mercadopago/sdk-react";
import Payment from "../../clientComponents/ShoppingCar/Payment";
import Checkout from "../../clientComponents/ShoppingCar/Checkout.jsx";
import Footer from "../../clientComponents/ShoppingCar/Footer.jsx";
import InternalProvider from "../../clientComponents/ShoppingCar/ContextProvider.jsx";
import { SpinnerCircular } from "spinners-react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { getUserDetailAction } from "../../redux/userSlice";
import { getPendingOrderAction } from "../../redux/shopingCartSlice";

// REPLACE WITH YOUR PUBLIC KEY AVAILABLE IN: https://developers.mercadopago.com/panel
// initMercadoPago("APP_USR-8e95f5fd-f2e0-4982-8ac8-27b1f1b175bb");
initMercadoPago("TEST-6062b4aa-0752-422b-b693-2282b2ede839");

const ShoppingCar = () => {
  const { user } = useAuth0();
  const allItems = useSelector((state) => state.foodsReducer.orderItems);
  let total = 0;
  const [preferenceId, setPreferenceId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [orderData, setOrderData] = useState(allItems);
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.usersReducer.userDetail);
  useEffect(() => {
    if (!currentUser.id) {
      dispatch(getUserDetailAction(user?.email));
    }
  }, [dispatch]);
  const handleClick = () => {
    setIsLoading(true);
    //CAMBIAR A AXIOS
    fetch("http://localhost:3001/shopping-cart", {
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
      })
      .finally(() => {
        setIsLoading(false);
      });
    dispatch(getPendingOrderAction(currentUser.id));
  };

  const renderSpinner = () => {
    if (isLoading) {
      return (
        <div className="spinner-wrapper">
          <SpinnerCircular сolor="#009EE3" />
        </div>
      );
    }
  };

  return (
    <InternalProvider
      context={{ preferenceId, isLoading, orderData, setOrderData, total }}
    >
      <main>
        {renderSpinner()}
        <Checkout onClick={handleClick} description />
        <Payment />
      </main>
      <Footer />
    </InternalProvider>
  );
};

export default ShoppingCar;
