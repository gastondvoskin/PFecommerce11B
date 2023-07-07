const {
  getOrdersController,
} = require("../controllers/orderControllers/getOrdersController");
const {
  postOrderController,
} = require("../controllers/orderControllers/postOrderController");
const {
  putOrderController,
} = require("../controllers/orderControllers/putOrderController");
const {
  getOrderByUserIdController,
} = require("../controllers/orderControllers/getOrderByUserIdController");

//Esta ruta trae todas las ordenes cerradas (sirve para el admin)
const getOrdersHandler = async (req, res) => {
  try {
    const { id } = req.body;
    const orders = await getOrdersController(id);
    res.status(200).send(orders);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

//esta ruta trae la orden abierta de un usuario
const getOrderByUserIdHandler = async (req, res) => {
  try {
    // const { userId } = req.params
    const { userId } = req.body;
    const openOrder = await getOrderByUserIdController(userId);
    res.status(200).send(openOrder);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const postOrderHandler = async (req, res) => {
  try {
    const { email } = req.body;
    const newOrder = await postOrderController(email);
    res.status(200).send(newOrder);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const putOrderHandler = async (req, res) => {
  try {
    const { userEmail, payment_id, status, merchant_order_id, payment_date, } = req.body;
    const parsedDate = new Date(payment_date);
    await putOrderController(
      userEmail,
      payment_id,
      status,
      merchant_order_id,
      parsedDate
    );
    res.status(200).send("Orden modificada correctamente.");
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = {
  getOrdersHandler,
  postOrderHandler,
  putOrderHandler,
  getOrderByUserIdHandler,
};
