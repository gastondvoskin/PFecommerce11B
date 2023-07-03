const { User } = require("../../db");

const getAllUsersController = async () => {
  const allUsers = await User.findAll();
  return allUsers;
};

module.exports = { getAllUsersController };
