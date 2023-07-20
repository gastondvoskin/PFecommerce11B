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
  getUserOrdersController,
} = require("../controllers/orderControllers/getUserOrdersController");
const {
  getOrderDetailController,
} = require("../controllers/orderControllers/getOrderDetailController");
const {
  getBestSellersController,
} = require("../controllers/orderControllers/getBestSellersController");
const {
  getOrderByUserEmailController,
} = require("../controllers/orderControllers/getOrderByUserEmailController");
const {
  getOrderByIdsController
} = require("../controllers/orderControllers/getOrderByIdsController");



//Esta ruta trae todas las ordenes cerradas (sirve para el admin, se deebria modificar proximamente para traer los pedidos ya finalizados )
const getOrdersHandler = async (req, res) => {
  try {
    const allOrders = await getOrdersController();
    res.status(200).send(allOrders);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const getOrderByUserEmailHandler = async (req, res) => {
  try {
    const { userEmail } = req.params;
    const orderByUserId = await getOrderByUserEmailController(userEmail);
    res.status(200).send(orderByUserId);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};
// esta ruta trae el detalle de una order en especifico
const getOrderDetailHandler = async (req, res) => {
  try {
    const { orderId } = req.params;
    const detail = await getOrderDetailController(orderId);
    res.status(200).send(detail);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

//esta ruta trae el historial de orders de un usuario(sirve para el cliente,falta agregar condicion para que solo traiga las orders concretadas)
const getUserOrdersHandler = async (req, res) => {
  try {
    const { userId } = req.params;

    // const { userId } = req.params
    const openOrder = await getUserOrdersController(userId);
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
    const { orderId, order_status } = req.body;

    await putOrderController({ orderId, order_status });
    res.status(200).send("Orden modificada correctamente.");
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const getBestSellersHandler = async (req, res) => {
  try {
    const quantity = parseInt(req.query.quantity, 10);
    const bestSellers = await getBestSellersController(quantity);
    res.status(200).send(bestSellers);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const getOrderByIdsHandler = async (req, res) => {
  try {
    const { paymentId } = req.params;
    const orderToRender = await getOrderByIdsController(paymentId);
    res.status(200).send(orderToRender);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
}

module.exports = {
  getOrdersHandler,
  getOrderByUserEmailHandler,
  postOrderHandler,
  putOrderHandler,
  getBestSellersHandler,
  getUserOrdersHandler,
  getOrderDetailHandler,
  getOrderByIdsHandler,
};
