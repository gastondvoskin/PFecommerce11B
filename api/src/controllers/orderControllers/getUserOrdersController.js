const {Order,Item,Food} = require("../../db");

const getUserOrdersController = async (userId) =>{
    const cart = await Order.findAll({
        where: {
          UserId: userId,
        },
        include: {
          model: Item,
          include: Food,
        },
      });
  
      return cart
}

module.exports = {getUserOrdersController}