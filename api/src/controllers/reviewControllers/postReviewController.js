const {Review} = require("../../db")

const postReviewController = async (foodId,userId,comment,rating) =>{
    const newReview = await Review.create({
        FoodId:foodId,UserId:userId,comment,rating
    });

    return newReview;
};
module.exports = {postReviewController}