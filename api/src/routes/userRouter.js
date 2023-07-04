const { Router } = require("express");
const {
  getUserHandler,
  postUserHandler,
  putUserHandler,
} = require("../handlers/userHandlers");

const userRouter = Router();

userRouter.get("/", getUserHandler);
userRouter.post("/", postUserHandler);
userRouter.put("/:email", putUserHandler);

module.exports = { userRouter };
