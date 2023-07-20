const { Item, Food, sequelize } = require("../../db");

const getBestSellersController = async (quantity) => {
  const productosVendidos = await Item.findAll({
    attributes: [
      'FoodId',
      [sequelize.fn('SUM', sequelize.col('quantity')), 'total_vendidos'],
    ],
    include: [],
    group: ['FoodId'],
    order: [[sequelize.literal('total_vendidos'), 'DESC']],
    limit: quantity,
    raw: true,
  });

  if (productosVendidos.length === 0) {
    return { message: 'No hay registros en la base de datos' };
  }

  const productosVendidosConNombre = await Promise.all(
    productosVendidos.map(async (producto) => {
      const { FoodId, total_vendidos } = producto;
      const food = await Food.findOne({ where: { id: FoodId }, attributes: ['name'] });
      return {
        label :FoodId,
        value: total_vendidos,
        id: food ? food.name : 'No disponible', 
      };
    })
  );

  return productosVendidosConNombre;
};

module.exports = { getBestSellersController };
