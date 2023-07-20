const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('User',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          isEmail: {
            msg: "Debe proporcionar una dirección de correo electrónico válida",
          },
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      type: {
        type: DataTypes.STRING,
        defaultValue: "Client",
        validate: {
          isIn: {
            args: [["Client", "Admin"]],
            msg: "El tipo de usuario debe ser 'Client' o 'Admin'",
          },
        },
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      address: {
        /* type: DataTypes.ARRAY(DataTypes.STRING), */
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    { timestamps: false }
  );
};