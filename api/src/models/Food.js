const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Food', 
    {
      id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
          },
          name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          image: {
            type: DataTypes.STRING,
            allowNull: false,
            isURL: true,
          },
          summary: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          category: {
            type: DataTypes.STRING,
            allowNull: false,
          },
    },
    {timestamps: false}
  );
};



