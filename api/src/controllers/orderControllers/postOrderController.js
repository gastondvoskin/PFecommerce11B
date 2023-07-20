const { User } = require("../../db");
const { Order } = require("../../db");
const{ Item } = require("../../db");
const {Food} = require("../../db");

const postOrderController = async (email) => {
  try {
    const userByEmail = await User.findOne({
      where: { email },
    });
    const userId = userByEmail.dataValues.id;

    let userOrder = await Order.findOne({
      where: {
        UserId: userId,
        status: "PENDIENTE",
      },
      include: {
        model: Item,
        include: Food,
      },
    });

    if (!userOrder) {
      userOrder = await Order.create({
        UserId: userId,
        status: "PENDIENTE",
      }, {
        include: [
          {
            model: Item,
            include: Food,
          },
        ],
      });
    }
    // console.log(userOrder)
    return userOrder;
    
  } catch (error) {
    console.log(error);
  }
};

module.exports = { postOrderController };

