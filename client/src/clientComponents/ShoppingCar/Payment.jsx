import React from "react";
import classnames from "classnames";
import { Wallet } from "@mercadopago/sdk-react";
import { Context } from "./ContextProvider";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const Payment = () => {
  const { user } = useAuth0();
  const { preferenceId, orderData, total } = React.useContext(Context);
  const [isReady, setIsReady] = React.useState(false);
  const paymentClass = classnames("payment-form dark", {
    "payment-form--hidden": !isReady,
  });

  const handleOnReady = () => {
    setIsReady(true);
  };

  const renderCheckoutButton = (preferenceId) => {
    if (!preferenceId) return null;

    return (
      <Wallet
        initialization={{ preferenceId: preferenceId }}
        onReady={handleOnReady}
      />
    );
  };

  return (
    <div className={paymentClass}>
      <div className="container_payment">
        <div className="block-heading">
          <h2>Checkout Payment</h2>
          <p>This is an example of a Mercado Pago integration</p>
        </div>
        <div className="form-payment">
          {orderData.Items?.forEach((item) => {
            // console.log(item);
            //-------------------------
            // const bodyUpdateItem = {
            //   userEmail: user?.email,
            //   FoodId: item.id,
            //   quantity: item.quantity,
            //   final_price: item.final_price,
            // };
            // axios
            //   .put("/item", bodyUpdateItem)
            //   .catch((error) => console.log(error));
            // //-------------------------
            return (
              <div className="products">
                <h2 className="title">Summary</h2>
                <div className="item">
                  <div>
                    <span className="price" id="summary-price">
                      ${item.final_price}
                    </span>
                    <p className="item-name">
                      ${item.name}{" "}
                      <span id="summary-quantity">${item.quantity}</span>
                    </p>
                  </div>
                </div>
                <div className="total">
                  Subtotal
                  <span className="price" id="summary-total">
                    ${item.amount}
                  </span>
                </div>
              </div>
            );
          })}

          <div className="total">
            Total
            <span className="price" id="summary-total">
              ${total}
            </span>
          </div>
          <div className="payment-details">
            <div className="form-group col-sm-12">
              {renderCheckoutButton(preferenceId)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
