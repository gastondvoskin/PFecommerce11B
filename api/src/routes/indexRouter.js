const { Router } = require("express");
const { foodRouter } = require("./foodRouter");
const { userRouter } = require("./userRouter");
const { orderRouter } = require("./orderRouter");
const { itemRouter } = require("./itemRouter")
const { shoppingCartRouter } = require("../routes/shoppingCartRouter");

const { foods } = require("../../api");
const { Food } = require("../db");

const router = Router();

router.use("/food", foodRouter);
router.use("/user", userRouter);
router.use("/order", orderRouter);
router.use("/item",itemRouter);
router.use("/shopping-cart", shoppingCartRouter);


// Tono comment: this route may be modularized
router.use("/api", async (req, res) => {
  const allFoods = await Food.findAll();
  if (!allFoods.length) {
    await Food.bulkCreate(foods);
    res.status(200).json("Comidas cargadas");
  } else {
    res.status(200).json("Comidas ya están cargadas");
  }
});

module.exports = router;
