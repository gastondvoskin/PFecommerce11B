const axios = require("axios");
const {
  putOrderController,
} = require("../orderControllers/putOrderController");

const paymentDataController = async (paymentId) => {
  const accessToken =
    "TEST-5452904587884616-070811-5c5f10c51ac99fe1580a358884ccd136-1412025676";

  try {
    const url = `https://api.mercadopago.com/v1/payments/${paymentId}?access_token=${accessToken}`;

    const { data } = await axios.get(url);

    const relatedOrderId = data.metadata.related_order_id;
    const paymentStatus = data.status;
    const payment_status_detail = data.status_detail;
    const payment_date = data.date_approved;

    await putOrderController({
      orderId: relatedOrderId,
      status: paymentStatus,
      payment_status_detail,
      payment_id: paymentId,
      payment_date,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { paymentDataController };
