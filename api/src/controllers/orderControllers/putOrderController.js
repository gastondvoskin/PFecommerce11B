const { Order } = require("../../db");

const putOrderController = async ({
  orderId,
  order_status,
  status,
  payment_status_detail,
  payment_id,
  payment_date,
}) => {
  try {
    if (orderId) {
      const orderToBeModified = await Order.findOne({
        where: {
          id: orderId,
        },
      });

      if (
        orderToBeModified &&
        order_status &&
        !status &&
        !payment_status_detail &&
        !payment_id &&
        !payment_date
      ) {
        await Order.update(
          { order_status },
          {
            where: {
              id: orderToBeModified.dataValues.id,
            },
          }
        );
      }

      if (
        orderToBeModified &&
        !order_status &&
        status &&
        payment_status_detail &&
        payment_id &&
        payment_date
      ) {
        await Order.update(
          { status, payment_status_detail, payment_id, payment_date },
          {
            where: {
              id: orderToBeModified.dataValues.id,
            },
          }
        );
      }

      return "Oder aactualizada correctamente";
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { putOrderController };
