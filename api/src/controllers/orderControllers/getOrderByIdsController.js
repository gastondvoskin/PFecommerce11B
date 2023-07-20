const { Order } = require("../../db");

const getOrderByIdsController = async (paymentId) => {
    try {
        const order = await Order.findOne({
            where: {
                payment_id: paymentId,
            },
            // attributes: ['total_price', 'createdAt', 'status', 'UserId', 'id', 'payment_status_detail', 'order_status'],
        });

        return order;
    } catch (error) {

        console.log("Error al buscar la orden:", error);
        return null;
    }
};

module.exports = { getOrderByIdsController };
