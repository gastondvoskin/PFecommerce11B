const { Router } = require("express");
const {
  createPreferenceHandler,
  getInfo,
} = require("../handlers/shoppingCartHandlers");

const shoppingCartRouter = Router();

shoppingCartRouter.post("/", createPreferenceHandler);
shoppingCartRouter.get("/feedback", getInfo);

module.exports = { shoppingCartRouter };
