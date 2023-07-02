require('dotenv').config();
const { Sequelize } = require('sequelize');
const UserFunction = require("./models/User.js"); 
const ReviewFunction = require("./models/Review.js");
const FoodFunction = require("./models/Food.js"); 
const BasketFunction = require("./models/Basket.js");
const DetailFunction = require("./models/Detail.js");


const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env;

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, 
    {logging: false}
);

UserFunction(sequelize);
ReviewFunction(sequelize);
FoodFunction(sequelize);
BasketFunction(sequelize);
DetailFunction(sequelize);

// ASSOCIATIONS
const { User, Review, Food, Basket, Detail } = sequelize.models; 
User.hasMany(Review);
Review.belongsTo(User);

Food.hasMany(Review);
Review.belongsTo(Food);


User.belongsToMany(Food, {through: "Favorite"});
Food.belongsToMany(User, {through: "Favorite"});


User.hasMany(Basket);
Basket.belongsTo(User);

Basket.hasMany(Detail);
Detail.belongsTo(Basket);

Food.hasMany(Detail);
Detail.belongsTo(Food);

// EXPORTS
module.exports = {
  sequelize, 
  ...sequelize.models
};

