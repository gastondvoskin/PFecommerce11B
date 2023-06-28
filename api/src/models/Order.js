const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Order',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    { timestamps: false }
  );
};