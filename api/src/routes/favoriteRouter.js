const { Router } = require("express");
const { postFavoriteHandler, getFavoritesByEmailHandler, deleteFavoriteHandler } = require("../handlers/favoriteHandlers");

const favoriteRouter = Router();

favoriteRouter.post("/", postFavoriteHandler);
favoriteRouter.get("/:email", getFavoritesByEmailHandler);
favoriteRouter.delete("/:email/:foodId", deleteFavoriteHandler);

module.exports = { favoriteRouter };
