const { User } = require("../../db");

const putUserController = async (  /* id,  */ name, email, type, status, address) => {
  let userToUpdate = await User.findOne({
    where: { email: email },
  });

  if (userToUpdate) {
    const updatedUser = await User.update(
      { address },
      {
        where: { email: email },
      }
    );
    return updatedUser;
  } else {
    throw new Error(
      `El usuario con email ${email} no existe en la base de datos.`
    );
  }
};

module.exports = { putUserController };
