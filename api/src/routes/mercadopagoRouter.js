const { Router } = require("express");
const {
  createPreferenceHandler,
  paymentDataHandler,
} = require("../handlers/shoppingCartHandlers");

const mercadopagoRouter = Router();

mercadopagoRouter.post("/create-preference/:userEmail", createPreferenceHandler);
mercadopagoRouter.post("/payment-data", paymentDataHandler);

module.exports = { mercadopagoRouter };
