const { Food } = require('../../db');
const { getPublicIdFromImageUrl } = require('./putFoodController');
const cloudinary = require('cloudinary').v2;

const deleteFoodController = async (foodId) => {
    const deletedFood = await Food.findByPk(foodId)
    if (deletedFood.image && deletedFood.image.includes('cloudinary.com')) {
        const publicId = getPublicIdFromImageUrl(deletedFood.image)
        await cloudinary.uploader.destroy(publicId);
    }
    await Food.destroy({
        where: { id: foodId }
    });
};

module.exports = { deleteFoodController };