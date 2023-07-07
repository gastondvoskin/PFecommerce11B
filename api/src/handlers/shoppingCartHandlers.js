require("dotenv").config();
/* const { ACCESS_TOKEN_MP } = process.env; */
const mercadopago = require("mercadopago");

// REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel
mercadopago.configure({
  /* access_token: ACCESS_TOKEN_MP, */
  access_token:
    "TEST-6319556541633434-063018-8336b2baf04fa2a889127d4915096375-1412025676",
});

const createPreferenceHandler = async (req, res) => {
  console.log("Create Pref: ", req.body);
  // const prueba = {
  //   nada: "nada",
  //   title: req.body[0].name,
  //   unit_price: req.body[0].final_price / req.body[0].quantity,
  //   quantity: req.body[0].quantity,
  // };
  // console.log("Prueba: ", prueba.nada, prueba.title, prueba.unit_price, prueba.quantity);
  const itemsBody = req.body.map((item) => {
    return {
      title: item.name,
      unit_price: item.final_price,
      quantity: item.quantity,
    };
  });
  console.log("ItemsBody: ", itemsBody);
  let preference = {
    // items: [
    //   {
    //     title: req.body[0].name,
    //     unit_price: req.body[0].final_price / req.body[0].quantity,
    //     quantity: req.body[0].quantity,
    //   },
    //   {
    //     title: req.body[1].name,
    //     unit_price: req.body[1].final_price / req.body[1].quantity,
    //     quantity: req.body[1].quantity,
    //   },
    //   // {
    //   //   title: req.body.description,
    //   //   unit_price: Number(req.body.price),
    //   //   quantity: Number(req.body.quantity),
    //   // },
    // ],

    items: itemsBody,

    back_urls: {
      success: "http://localhost:5173/payment",
      failure: "http://localhost:5173/payment",
      pending: "http://localhost:5173/payment",
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
  // res.json({
  //   payment_id: req.query.payment_id,
  //   status: req.query.status,
  //   merchant_order_id: req.query.merchant_order_id,
  // });
  res.json({
    data: req.query,
  });
};

module.exports = { createPreferenceHandler, getInfo };
