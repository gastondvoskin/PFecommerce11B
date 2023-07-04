const { User } = require("../../db");
const { Order } = require("../../db");

const postOrderController = async (email) => {
    const userByEmail = await User.findOne({
        where: { email }
    });
    const userId = userByEmail.dataValues.id
    const newOrder = await Order.create({ UserId: userId })



    console.log(userId);
};

module.exports = { postOrderController }