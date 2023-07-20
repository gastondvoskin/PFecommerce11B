import { useState, useEffect } from "react";

export default function Item({ name, orderData }) {
  const [item, setItem] = useState(
    orderData.filter((od) => od.name === name)[0]
  );
  const updatePrice = (event) => {
    const quantity = event.target.value;
    const amount = parseInt(item.final_price) * parseInt(quantity);
    setItem({ ...item, quantity, amount });
    orderData.map((it) => {
      if (it.name === name) {
        it.quantity = parseInt(quantity);
        it.amount = parseInt(amount);
      }
    });
    setItem({ ...item, quantity, amount });
  };
  return (
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
                      src={item.image}
                    />
                  </div>
                  <div className="col-md-4 product-detail">
                    <div className="product-info">
                      <b>{name}</b>
                      <br></br>
                      <b>Price:</b> ${" "}
                      <span id="unit-price">{item.final_price}</span>
                      <br />
                    </div>
                  </div>
                  <div className="col-md-3 product-detail">
                    <input
                      onChange={updatePrice}
                      type="number"
                      id="quantity"
                      value={item.quantity}
                      min="1"
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
          </div>
        </div>
      </div>
    </div>
  );
}
