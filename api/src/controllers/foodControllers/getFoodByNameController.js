const { Op } = require("sequelize");
const { Food } = require("../../db");

const getFoodByNameController = async (name) => {
  const foodByname = await Food.findAll({
    where: { name: { [Op.iLike]: `%${name}%` } },
  });

  return foodByname;
};

module.exports = { getFoodByNameController };
