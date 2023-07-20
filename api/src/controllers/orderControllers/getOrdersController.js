const { Order } = require("../../db");
const { User } = require("../../db");

const getOrdersController = async () => {
  const allOrders = await Order.findAll({
    attributes: ['total_price', 'createdAt', 'status', 'UserId', 'id','payment_status_detail', 'order_status'],
    include: [
      {
        model: User,
        attributes: ['name']
      }
    ]
  });

  return allOrders;
};

module.exports = { getOrdersController };
