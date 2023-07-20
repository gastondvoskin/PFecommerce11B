const { Food } = require("../../db");

const getAdminFoodController = async () => {
  const allFood = await Food.findAll();

  for (let i = allFood.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allFood[i], allFood[j]] = [allFood[j], allFood[i]];
  }

  return allFood;
};

module.exports = { getAdminFoodController };
