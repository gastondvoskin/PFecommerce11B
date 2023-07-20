const { Router } = require("express");
const {
  getOrdersHandler,
  getOrderByUserEmailHandler,
  postOrderHandler,
  putOrderHandler,
  getUserOrdersHandler,
  getOrderDetailHandler,
  getBestSellersHandler,
  getOrderByIdsHandler,
} = require("../handlers/orderHandlers");
const orderRouter = Router();

orderRouter.get("/", getOrdersHandler);
orderRouter.get("/user/:userId", getUserOrdersHandler)
orderRouter.get("/detail/:orderId", getOrderDetailHandler);
orderRouter.post("/", postOrderHandler);
orderRouter.put("/", putOrderHandler);
orderRouter.get("/bestSellers", getBestSellersHandler);
orderRouter.get("/payment-id/:paymentId", getOrderByIdsHandler);
orderRouter.get("/:userEmail", getOrderByUserEmailHandler);

module.exports = { orderRouter }
