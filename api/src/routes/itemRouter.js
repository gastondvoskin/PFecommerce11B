const { Router } = require("express");
const { postItemHandler, putItemHandler, deleteItemHandler } = require("../handlers/itemHandlers")
const itemRouter = Router();

itemRouter.post("/:userId", postItemHandler );
itemRouter.put("/:itemId", putItemHandler );
itemRouter.delete("/:itemId", deleteItemHandler );



module.exports = {itemRouter}

