const { Order, User } = require("../../db");
// Este controller es innecesaria por el momento se podria eliminar, ya que postOrderController es la que se esta usando  para hacer lo mismo practicamente
const getPendingOrderByUserEmailController = async (userEmail) => {
  const user = await User.findOne({
    where: {
      email: userEmail,
    },
  });

  const userOrder = await Order.findOne({
    where: {
      UserId: user.dataValues.id,
      status: "PENDIENTE",
    },
  });

  return userOrder.dataValues.id;
};

module.exports = { getPendingOrderByUserEmailController };
