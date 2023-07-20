const { User, Food } = require("../../db");

const getFavoritesByEmailController = async (email) => {
    const favoritesByEmailRaw = await User.findOne({
        where: { 
            email: email
        },
        attributes: [],
        include: [{
            model: Food,
            through: {
                attributes: []
            }
        }]
    });
    
    const favoritesByEmailClean = favoritesByEmailRaw.Food;  
    return favoritesByEmailClean; 

};

module.exports = { getFavoritesByEmailController }