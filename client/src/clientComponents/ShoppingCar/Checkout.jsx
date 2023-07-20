import React, { useEffect, useState } from "react";
import classnames from "classnames";
import { Context } from "./ContextProvider";
import {
  deleteItemActions,
  setItemsActions,
  putItemActions,
} from "../../redux/shopingCartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import {
  getPendingOrderAction,
  setUserOrderCase,
} from "../../redux/shopingCartSlice";
import axios from "axios";

const Checkout = ({ onClick }) => {
  const { user } = useAuth0();
  const dispatch = useDispatch();
  // const userOrder = useSelector(
  //   (state) => state.shopingCartReducer.pendingOrder.Items
  // );

  const [quantity, setQuantity] = useState(1);

  const [isVisible, setIsVisible] = React.useState(true);
  let {
    preferenceId,
    isLoading: disabled,
    orderData,
    setOrderData,
    total,
  } = React.useContext(Context);
  console.log("Checkout: ", orderData);

  const shoppingCartClass = classnames("shopping-cart dark", {
    "shopping-cart--hidden": !isVisible,
  });

  const updatePrice = async (event) => {
    event.preventDefault();
    const quantity = parseInt(event.target.value);
    const name = event.target.name;
    let item = orderData.filter((it) => it.Food.name === name)[0];
    // console.log("updatePrice: ", item);
    const variation = quantity - parseInt(item.quantity);
    // console.log(variation);
    const amount = item.final_price * quantity;
    // const toActual={
    //   Food: item.Food,
    //   FoodId: item.FoodId,
    //   OrderId: item.OrderId,
    //   amount: amount,
    //   final_price: item.final_price,
    //   id: item.id,
    //   quantity: quantity,
    dispatch(
      putItemActions({
        orderId: item.OrderId,
        quantity: quantity,
        amount: amount,
        itemId: item.id,
      })
    );
    // item.quantity = quantity;
    // item.amount = amount;
    // setOrderData(
    //   orderData.map((it) => {
    //     if (it.id === item.id) {
    //       return item;
    //     } else {
    //       return it;
    //     }
    //   })
    // );
    const updatedItem = {
      ...item,
      quantity: quantity,
      amount: amount,
    };
    // setOrderData(
    //   orderData.map((it) => {
    //     if (it.id === item.id) {
    //       return {
    //         id: item.id,
    //         Food: item.Food,
    //         FoodId: item.FoodId,
    //         OrderId: item.OrderId,
    //         final_price: item.final_price,
    //         amount: amount,
    //         quantity: quantity,
    //       };
    //     } else {
    //       return it;
    //     }
    //   })
    // );
    setOrderData(
      orderData.map((it) => {
        if (it.id === item.id) {
          return updatedItem;
        } else {
          return it;
        }
      })
    );
    total = total + variation * parseInt(item.final_price);
  };

  useEffect(() => {
    if (preferenceId) setIsVisible(false);
  }, [preferenceId]);

  orderData?.forEach((item) => {
    total = total + item.amount;
  });

  const handleDelete = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const item = orderData.filter((it) => it.Food.name === name)[0];
    setOrderData(orderData.filter(it=>it.id!==item.id))
    // // console.log(item.id);
    // // const toActual = orderData.Items.filter((it) => it.id !== item.id);
    // // const actual = {
    // //   UserId: orderData.UserId,
    // //   Items: toActual,
    // //   createdAt: orderData.createdAt,
    // //   id: orderData.id,
    // //   order_status: orderData.order_status,
    // //   payment_date: orderData.payment_date,
    // //   payment_id: orderData.payment_id,
    // //   payment_status_detail: orderData.payment_status_detail,
    // //   pickup_date: orderData.pickup_date,
    // //   status: orderData.status,
    // //   total_price: orderData.total_price,
    // //   updatedAt: orderData.updatedAt,
    // // };
    // // setOrderData(actual);
    dispatch(
      deleteItemActions({
        OrderId: item.OrderId,
        id: item.id,
      })
    );
  };

  return (
    <section className={shoppingCartClass}>
      <div className="container" id="container">
        <div className="block-heading">
          <h2>Shopping Cart</h2>
          {/* <p>This is an example of Checkout Pro integration of Mercado Pago</p> */}
        </div>
        <div className="content">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="items">
                <div className="product">
                  <div className="info">
                    <div className="product-details">
                      <div className="row justify-content-md-center">
                        <div className="col-md-3">
                          {/* espacio para la imagen*/}
                        </div>
                        <div className="col-md-4 product-detail">
                          <h5>Product</h5>
                          {/* columna de producto*/}
                        </div>
                        <div className="col-md-3 product-detail">
                          <label htmlFor="quantity">
                            <b>Quantity</b>
                          </label>
                          {/*espacio para la cantidad*/}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <div className="summary">
                <h3>Cart</h3>
                <div className="summary-item">
                  <span className="text">Subtotal</span>
                  {/*espacio para el subtotal*/}
                </div>
                {/*espacio del button*/}
              </div>
            </div>
          </div>
          {orderData.length
            ? orderData.map((item) => {
                return item.quantity ? (
                  <div className="row">
                    <div className="col-md-12 col-lg-8">
                      <div className="items">
                        <div className="product">
                          <div className="info">
                            <div className="product-details">
                              <div className="row justify-content-md-center">
                                <div className="col-md-3">
                                  <img
                                    className="img-fluid mx-auto d-block image"
                                    alt="Image of a product"
                                    src={item.Food.image}
                                  />
                                </div>
                                <div className="col-md-4 product-detail">
                                  <div className="product-info">
                                    <b>{item.Food.name}</b>
                                    <br></br>
                                    <b>Price:</b> ${" "}
                                    <span id="unit-price">
                                      {item.final_price}
                                    </span>
                                    <br />
                                  </div>
                                </div>
                                <div className="col-md-3 product-detail">
                                  <input
                                    onChange={updatePrice}
                                    type="number"
                                    id="quantity"
                                    final_price={item.final_price}
                                    foodId={item.FoodId}
                                    name={item.Food.name}
                                    value={item.quantity}
                                    min="0"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-4">
                      <div className="summary">
                        <div className="summary-item">
                          <span className="price" id="cart-total">
                            ${item.amount}
                          </span>
                          <button
                            className="btn btn-primary btn-lg btn-block"
                            onClick={handleDelete}
                            id="checkout-btn"
                            name={item.Food.name}
                          >
                            Eliminar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null;
              })
            : null}
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="items">
                <div className="product">
                  <div className="info">
                    <div className="product-details">
                      <div className="row justify-content-md-center">
                        <div className="col-md-3">
                          {/* espacio para la imagen*/}
                        </div>
                        <div className="col-md-4 product-detail">
                          {/* columna de producto*/}
                        </div>
                        <div className="col-md-3 product-detail">
                          {/*espacio para la cantidad*/}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <div className="summary">
                <div className="summary-item">
                  <span className="text">Total</span>
                  <span className="price" id="cart-total">
                    ${total}
                  </span>
                </div>
                <button
                  className="btn btn-primary btn-lg btn-block"
                  onClick={onClick}
                  id="checkout-btn"
                  disabled={disabled}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
