const { Router } = require("express");
const { getReviewsHandler, postReviewHandler, putReviewHandler } = require("../handlers/reviewHandlers");
const reviewRouter = Router();

reviewRouter.get("/" , getReviewsHandler);
reviewRouter.post("/", postReviewHandler);
reviewRouter.put("/", putReviewHandler);

module.exports = {reviewRouter}