const {Item,Order} = require("../../db")
const {updateCartTotalPrice} = require("./updateCartTotalPrice")

const postItemController = async (userId,foodId,quantity,price) => {
    // Buscar el carrito del usuario con estado "PENDIENTE"

    let cart = await Order.findOne({
        where: {
          UserId: userId,
          status: 'PENDIENTE',
        },
      });
  
      // Si no existe un carrito, se crea uno nuevo
      if (!cart) {
        cart = await Order.create({
          UserId: userId,
          total_price: 0,
          status: 'PENDIENTE',
        });
      }
  
      // Crear el nuevo artículo y asociarlo al carrito
      const item = await Item.create({
        OrderId: cart.id,
        FoodId: foodId,
        quantity,
        price,
        amount: price * quantity,
      });

      await updateCartTotalPrice(cart.id);

      return item;
}


module.exports = {postItemController}

