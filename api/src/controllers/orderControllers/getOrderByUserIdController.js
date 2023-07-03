const {Order,Item,Food} = require("../../db");

const getOrderByUserIdController = async (userId) =>{
    const cart = await Order.findOne({
        where: {
          UserId: userId,
          status: 'PENDIENTE',
        },
        include: {
          model: Item,
          include: Food,
        },
      });
      return cart
}

module.exports = {getOrderByUserIdController}