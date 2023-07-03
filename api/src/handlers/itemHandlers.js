const { postItemController } = require("../controllers/itemControllers/postItemController")
const { putItemController } = require("../controllers/itemControllers/putItemController")
const { deleteItemController } = require("../controllers/itemControllers/deleteItemController")


const postItemHandler = async (req,res) => {
    try {
        const {userId} = req.params
        const { foodId, quantity, price } = req.body;
        const addItem = await postItemController(userId,foodId,quantity,price);
        res.status(200).send(addItem)
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}

const deleteItemHandler = async (req,res) => {
    try {
        const {itemId} = req.params
        const {orderId} = req.body
        await deleteItemController(itemId,orderId)
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}

const putItemHandler = async (req,res) => {
    try {
        const {itemId} = req.params
        const { quantity } = req.body;
        const response = await putItemController(itemId,quantity);
        res.status(200).send(response)
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}

module.exports = { postItemHandler, deleteItemHandler, putItemHandler }
