const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Item",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      food_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      food_image: {
        type: DataTypes.STRING,
        allowNull: false,
        isURL: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      final_price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      amount:{
        type: DataTypes.FLOAT,
        allowNull: false,
      }
    },
    { timestamps: false }
  );
};
