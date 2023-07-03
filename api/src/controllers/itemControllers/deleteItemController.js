const { Item } = require("../../db");
const { updateCartTotalPrice } = require("./updateCartTotalPrice");

const deleteItemController = async (itemId, orderId) => {

  const item = await Item.findByPk(itemId, {
    attributes: ['price'],
  });
  await Item.destroy({
    where: {
      id: itemId,
    },
  });

  await updateCartTotalPrice(orderId);
};

module.exports = { deleteItemController };
