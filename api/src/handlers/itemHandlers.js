const {
  postItemController,
} = require("../controllers/itemControllers/postItemController");
const {
  putItemController,
} = require("../controllers/itemControllers/putItemController");
const {
  deleteItemController,
} = require("../controllers/itemControllers/deleteItemController");

const postItemHandler = async (req, res) => {
  try {
    const { FoodId, OrderId, final_price, quantity, amount } = req.body;
    const setItem = await postItemController(
      FoodId,
      OrderId,
      final_price,
      quantity,
      amount
    );
    // const { userEmail, FoodId, quantity, final_price } = req.body;

    // const addItem = await postItemController(
    //   userEmail,
    //   FoodId,
    //   quantity,
    //   final_price
    // );
    res.status(200).send(setItem);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const deleteItemHandler = async (req, res) => {
  try {
    const {id}=req.params;
    const { OrderId } = req.body;
    await deleteItemController(id,OrderId);
    res.status(200).send("Se eliminó con éxito");
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const putItemHandler = async (req, res) => {
  try {
    // const { itemId } = req.params;
    const { orderId, itemId, quantity, amount } = req.body;
    const response = await putItemController(orderId, itemId, quantity, amount);
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = { postItemHandler, deleteItemHandler, putItemHandler };
