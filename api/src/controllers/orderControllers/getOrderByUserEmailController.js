const { User, Order, Item, Food } = require("../../db");

const getOrderByUserEmailController = async (userEmail) => {
  const userByEmail = await User.findOne({
    where: { email: userEmail },
  });
  const userId = userByEmail.dataValues.id;

  const orderByUserEmail = await Order.findAll({
    where: {
      UserId: userId,
      status: "PENDIENTE",
    },
    include: {
      model: Item,
      include: Food,
    },
  });

  return orderByUserEmail;
};

module.exports = { getOrderByUserEmailController };
