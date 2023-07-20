const { Review, Food, sequelize,Item } = require("../../db");

const postReviewController = async (foodId, userId, comment, rating,itemId) => {
  const newReview = await Review.create({
    FoodId: foodId,
    UserId: userId,
    comment,
    rating,
    ItemId:itemId
  });

  await Item.update(
    { ReviewId: newReview.id },
    {
      where: {
        id: itemId
      },
    }
  );
  const averageRating = await Review.findOne({
    attributes: [[sequelize.fn('AVG', sequelize.col('rating')), 'averageRating']],
    where: { FoodId: foodId }
  });

  const average = averageRating.get('averageRating');

  await Food.update({ total_score: average }, { where: { id: foodId } });

  return newReview;
};

module.exports = { postReviewController };
