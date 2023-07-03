const {Item,Order} = require("../../db")
const updateCartTotalPrice = async (orderId) => {
    const cart = await Order.findByPk(orderId, {
      include: {
        model: Item,
        attributes: ['amount'],
      },
    });
  

    const total_price = cart.Items.reduce((total, item) => {
      return total + item.amount;
    }, 0);
  

    await Order.update(
      { total_price },
      {
        where: {
          id: orderId,
        },
      }
    );
  }

  module.exports = {updateCartTotalPrice}