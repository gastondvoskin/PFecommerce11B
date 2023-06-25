const { Food } = require('../../db');


/* TONO comment: putFoodController doesn't work because ut updates the attribute diet which doesn't exist in Food model. I suggest to delete the Diet model, and to add a diets attribute in Food with dataTypes array, and a constraint to allow only "vegetariano" and the other values. Whit will allow to delete diets router, handler and controller and avoid extra requests from the front-end. */
const putFoodController = async (id, name, diet, description, image, initial_price, discount, final_price, status, category) => {
    console.log(id);
    const food = await Food.update({
        name, diets:diet, description, image, initial_price, discount, final_price, status, category
    }, {
        where: { id }
    });
    return food;
};

module.exports = { putFoodController };