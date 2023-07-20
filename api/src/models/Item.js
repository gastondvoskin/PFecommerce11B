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
      // food_name: {
      //   type: DataTypes.STRING,
      //   allowNull: true,
      // },
      // food_image: {
      //   type: DataTypes.STRING,
      //   allowNull: true,
      //   isURL: false,
      // },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      final_price: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      amount: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      // amount: {
      //   type: DataTypes.FLOAT,
      //   allowNull: true,
      // }
    },
    { timestamps: false }
  );
};
