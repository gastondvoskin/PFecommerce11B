const { Food } = require('../../db');

const deleteFoodControllers = async (foodId) => {
    await Food.destroy({
        where: { id: foodId }
    });
};

module.exports = { deleteFoodControllers };