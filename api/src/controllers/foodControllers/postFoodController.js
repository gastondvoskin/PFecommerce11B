const { Food } = require('../../db');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
});

const postFoodController = async (name, image, description, category, initial_price, discount, final_price, total_score, diet) => {
  console.log(diet);
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

  const imageUrl = uploadResult.secure_url;
  // Paso diets, con el valor de diet(que es el array que hacemos en handler)
  const product = await Food.create({ name, image: imageUrl, description, category, initial_price, discount, final_price, total_score, diets:diet  });
  return product.dataValues;
};


module.exports = { postFoodController };
