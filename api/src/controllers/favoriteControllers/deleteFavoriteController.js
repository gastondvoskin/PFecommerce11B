const { User } = require("../../db");

const deleteFavoriteController = async (email, foodId) => {
    const userByEmail = await User.findOne({where: {email: email}});
    await userByEmail.removeFood(foodId);
    return 'Favorito eliminado';
}

module.exports = { deleteFavoriteController };