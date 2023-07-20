const {Review} = require("../../db")
const {User} = require("../../db")
const {Food} = require("../../db")
const getAllReviewsController = async () => {
    const allReviews = await Review.findAll({
        include: [
            {
                model: User,
            },
            {
                model: Food,
            }
        ]
    });
    return allReviews;
  };

  module.exports = {getAllReviewsController}