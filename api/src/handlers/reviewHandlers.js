const { getAllReviewsController } = require("../controllers/reviewControllers/getAllReviewsController");
const { getReviewByIdController } = require("../controllers/reviewControllers/getReviewByIdController");
const { postReviewController } = require("../controllers/reviewControllers/postReviewController");
const { putReviewController } = require("../controllers/reviewControllers/putReviewController");

const getReviewsHandler = async (req, res) => { 
    try {
        const {id} = req.body
        if (id) {
            const review = await getReviewByIdController(id);
            res.status(200).send(review);
        } else {
            const allReviews = await getAllReviewsController();
            res.status(200).send(allReviews);
        }
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
  };

  const putReviewHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedReview = await putReviewController(id);
        res.status(200).send(updatedReview);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
  };

  const postReviewHandler = async (req, res) => {
    try {
        const {foodId, userId, comment , rating,itemId} = req.body;
        const newReview = await postReviewController(foodId,userId,comment,rating,itemId);
        res.status(200).send(newReview)
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
  };


module.exports = {getReviewsHandler,putReviewHandler,postReviewHandler}