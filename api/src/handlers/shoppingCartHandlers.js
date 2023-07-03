require("dotenv").config();
/* const { ACCESS_TOKEN_MP } = process.env; */
const mercadopago = require("mercadopago");

// REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel
mercadopago.configure({
  /* access_token: ACCESS_TOKEN_MP, */
  access_token: "TEST-6319556541633434-063018-8336b2baf04fa2a889127d4915096375-1412025676"
});


const createPreferenceHandler = async (req, res) => {
  let preference = {
    items: [
      {
        title: "Mazana",
        unit_price: 100,
        quantity: 2,
      },
      {
        title: "Pera",
        unit_price: 200,
        quantity: 4,
      },
      //   {
      //     title: req.body.description,
      //     unit_price: Number(req.body.price),
      //     quantity: Number(req.body.quantity),
      //   },
    ],
    back_urls: {
      success: "http://localhost:3001/shopping-cart/feedback",
      failure: "http://localhost:3001/shopping-cart/feedback",
      pending: "http://localhost:3001/shopping-cart/feedback",
      // success: "http://localhost:8080/feedback",
      // failure: "http://localhost:8080/feedback",
      // pending: "http://localhost:8080/feedback",
    },
    auto_return: "approved",
  };

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      console.log("Preference: ", response.body);
      res.json({
        id: response.body.id,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
};

const getInfo = (req, res) => {
  console.log("GetInfo: ", req.query);
  res.json({
    Payment: req.query.payment_id,
    Status: req.query.status,
    MerchantOrder: req.query.merchant_order_id,
  });
};

module.exports = { createPreferenceHandler, getInfo };
