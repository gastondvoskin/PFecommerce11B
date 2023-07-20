const { Food } = require("../../db");

const getAllFoodController = async () => {
  const allFood = await Food.findAll();
  const enabledFood = allFood.filter(e => e.status === true)

  
  for (let i = enabledFood.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [enabledFood[i], enabledFood[j]] = [enabledFood[j], enabledFood[i]];
  }

  return enabledFood;
};

module.exports = { getAllFoodController };
