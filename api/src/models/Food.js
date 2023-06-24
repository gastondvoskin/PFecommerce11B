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
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      initial_price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      discount: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      final_price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      total_score: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      diets: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
        
      }

    },
    { timestamps: false }
  );
};



