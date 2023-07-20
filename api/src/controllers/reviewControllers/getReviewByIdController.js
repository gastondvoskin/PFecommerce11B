const {Review} = require("../../db")
const getReviewByIdController = async (id) => {
    const review = await Review.findOne({
        where:{
            id
        }
    });
  
    return review;
  };

  module.exports = {getReviewByIdController}