const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Order", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    total_price: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    payment_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    payment_status_detail: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    payment_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    pickup_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    order_status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
};
