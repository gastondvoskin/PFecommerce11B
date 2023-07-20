const { Food } = require('../../db');
const cloudinary = require('cloudinary').v2;

const getPublicIdFromImageUrl = (imageUrl) => {
  // Expresión regular para extraer el public ID de la URL
  const regex = /\/([^/]+)\.[^.]+$/;
  const match = imageUrl.match(regex);

  if (match && match[1]) {
    // El public ID se encuentra en el primer grupo capturado por la expresión regular
    const publicId = match[1];
    return publicId;
  }

  return null;
};

const putFoodController = async (id, name, diet, description, image, initial_price, discount, final_price, status, category) => {
  console.log(image)
  let imageUrl = null;
  let foodToUpdate = await Food.findByPk(id);
  if (foodToUpdate) {

    if (image) {

      if (foodToUpdate.image && foodToUpdate.image.includes('cloudinary.com')) {
        const publicId = getPublicIdFromImageUrl(foodToUpdate.image);
        await cloudinary.uploader.destroy(publicId);
      }

      const uploadResult = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
          {
            resource_type: 'auto',
            allowed_formats: ['jpg', 'jpeg']
          },
          (error, result) => {
            if (error) {
              reject(new Error(error.message));
            } else {
              resolve(result);
            }
          }
        ).end(image);
      });

      imageUrl = uploadResult.secure_url;
    }
    const updatedFood = await Food.update(
      {
        name,
        diets: diet,
        description,
        image: imageUrl || foodToUpdate.image,
        initial_price,
        discount,
        final_price,
        status,
        category
      },
      {
        where: { id }
      }
    );
    return updatedFood;
  } else {
    throw new Error('Comida no encontrada');
  }
};



module.exports = { putFoodController, getPublicIdFromImageUrl };