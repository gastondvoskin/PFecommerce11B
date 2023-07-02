const {Router} = require('express');
const multer = require('multer');
const { getFoodHandler,postFoodHandler,putFoodHandler,deleteFoodHandler } = require('../handlers/foodHandlers');


const foodRouter = Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

foodRouter.get('/', getFoodHandler );
foodRouter.post('/', upload.single('image'), postFoodHandler);
foodRouter.put('/:id', upload.single('image'), putFoodHandler);
foodRouter.delete('/:id', deleteFoodHandler);




module.exports = {foodRouter}