const { Food } = require('../../db');

const getAllFoodController = async() =>{
    const allFood = await Food.findAll();
    return allFood;
};

module.exports = {getAllFoodController};