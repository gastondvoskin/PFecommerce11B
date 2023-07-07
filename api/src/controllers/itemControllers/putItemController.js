const { Item, User, Order } = require("../../db");
const { updateCartTotalPrice } = require("./updateCartTotalPrice");

// const putItemController = async (itemId, quantity) => {
const putItemController = async (userEmail, FoodId, quantity, final_price) => {
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

  const itemToBeModified = await Item.findOne({
    where: {
      FoodId,
      OrderId: userOrder.dataValues.id,
    },
  });

  await Item.update(
    { quantity, final_price, amount: final_price * quantity },
    {
      where: {
        id: itemToBeModified.dataValues.id,
      },
    }
  );

  await updateCartTotalPrice(userOrder.dataValues.id);
  return "Item actualizado correctamente";
};

module.exports = { putItemController };
