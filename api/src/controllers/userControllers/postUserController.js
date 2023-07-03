const { User } = require("../../db");
const sendEmailWelcome = require("../../nodemailer/sendEmail");

const postUserController = async (name, email, type, status, adress) => {
  let newUser = {};
  if (type === "guest") {
    newUser = await User.create({ name, email, type, status, adress });
  } else {
    const userByEmail = await User.findAll({
      where: { email: email },
    });
    if (!userByEmail.length) {
      newUser = await User.create({ name, email, type, status, adress });
      await sendEmailWelcome(email);
    }
  }
  return newUser.dataValues;
};

module.exports = { postUserController };
