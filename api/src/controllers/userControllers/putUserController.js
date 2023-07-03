const { User } = require('../../db');

const putUserController = async (id, name, email, type, status, adress) => {
  let userToUpdate = await User.findByPk(id);
  if (userToUpdate) {
    const updatedUser = await User.update(
      { name, email, type, status, adress },
      {
        where: { id }
      }
    );
    return updatedUser;
  } else {
    throw new Error(`El usuario con id ${id} no existe en la base de datos.`);
  }
};



module.exports = { putUserController };