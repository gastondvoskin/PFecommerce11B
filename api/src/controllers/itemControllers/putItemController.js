const {Item} = require("../../db")
const { updateCartTotalPrice } = require("./updateCartTotalPrice")

const putItemController = async (itemId, quantity) => {

    const item = await Item.findOne({
      where: {
        id: itemId,
      },
    });

    await Item.update(
        { quantity , amount: item.price * quantity},
        {
          where: {
            id: itemId,
          },
        }
      );
  
      await updateCartTotalPrice(item.OrderId);
      return 'Actualizado correctamente'

}

module.exports = {putItemController}