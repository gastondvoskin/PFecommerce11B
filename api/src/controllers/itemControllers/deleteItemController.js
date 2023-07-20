const { Item, User, Order } = require("../../db");
const { updateCartTotalPrice } = require("./updateCartTotalPrice");

const deleteItemController = async (id, OrderId) => {
  try {
    // const user = await User.findOne({
    //   where: {
    //     email: userEmail,
    //   },
    // });

    // const userOrder = await Order.findOne({
    //   where: {
    //     UserId: user.dataValues.id,
    //     status: "PENDIENTE",
    //   },
    // });

    await Item.destroy({
      where: {
        id,
      },
    });

    await updateCartTotalPrice(OrderId);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { deleteItemController };
