const { getOrdersController } = require("../controllers/orderControllers/getOrdersController");
const { postOrderController } = require("../controllers/orderControllers/postOrderController");
const { putOrderController } = require("../controllers/orderControllers/putOrderController");
const { getOrderByUserIdController } = require ("../controllers/orderControllers/getOrderByUserIdController")


//Esta ruta trae todas las ordenes cerradas (sirve para el admin)
const getOrdersHandler = async (req,res) => {
    try {
        const orders = await getOrdersController();
        res.status(200).send(orders)
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
};

//esta ruta trae la orden abierta de un usuario 
const getOrderByUserIdHandler = async (req,res) => {
    try {
        const {userId} = req.params
        const openOrder = await getOrderByUserIdController(userId)
        res.status(200).send(openOrder)
    } catch (error) {
        
    }
}

const postOrderHandler = async (req,res) => {
    const {name} = req.body
    try {
        const newOrder = await postOrderController()
        res.status(200).send(newOrder)
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
};

const putOrderHandler = async (req,res) => {
    try {
        await putOrderController()
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
};


module.exports = {getOrdersHandler,postOrderHandler,putOrderHandler,getOrderByUserIdHandler}