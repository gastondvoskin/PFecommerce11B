const { Order, User, Food, Item,Review } = require("../../db");

const getOrderDetailController = async (orderId) => {
  const order = await Order.findOne({
    where: {
      id: orderId,
    },
    attributes: ['id', 'total_price', 'order_status', 'status', 'payment_status_detail'],
    include: [
      {
        model: User,
        attributes: ['name'],
      },
      {
        model: Item,
        include: [
          {
            model: Food,
            attributes: ['name', 'image', 'final_price'],
          },
          {
            model:Review,
            attributes:["comment","rating"]
          }
        ],
      },
    ],
  });
  
  return order;
  
};

module.exports = { getOrderDetailController };
