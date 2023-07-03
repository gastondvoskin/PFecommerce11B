const { User } = require("../../db");

const getUserByEmailController = async (email) => {
  const userByEmail = await User.findAll({
    where: {
      email: email
    }
  });
  return userByEmail;
};

module.exports = { getUserByEmailController };
