const { Item, User, Order } = require("../../db");
const { updateCartTotalPrice } = require("./updateCartTotalPrice");

  const putItemController = async (orderId, itemId, quantity, amount) => {
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

    // const itemToBeModified = await Item.findOne({
    //   where: {
    //     FoodId,
    //     OrderId,
    //   },
    // });

    await Item.update(
      { quantity, amount },
      {
        where: {
          id: itemId,
        },
      }
    );

    await updateCartTotalPrice(orderId);
    return "Item actualizado correctamente";
  };


module.exports = { putItemController };
