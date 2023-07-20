const axios = require("axios");
const {
  putOrderController,
} = require("../orderControllers/putOrderController");

const paymentDataController = async (paymentId) => {
  const accessToken =
    "TEST-5452904587884616-070811-5c5f10c51ac99fe1580a358884ccd136-1412025676";
  // const accessToken = "TEST-1886874462186522-070719-46a98fd793c6106a90381621123abc1d-1417316603";

  try {
    const url = `https://api.mercadopago.com/v1/payments/${paymentId}?access_token=${accessToken}`;

    const { data } = await axios.get(url);
    const relatedOrderId = data.metadata.related_order_id;
    const paymentStatus = data.status;
    const paymentStatusDetail = data.status_detail;
    const paymentDate = data.date_approved;

    let paymentStatusToDb = "";

    if (paymentStatus === "approved") {
      paymentStatusToDb = "APROBADO"
    };

    if (paymentStatus === "rejected") {
      paymentStatusToDb = "RECHAZADO"
    };

    if (paymentStatus === "in_process") {
      paymentStatusToDb = "EN PROCESO"
    };



    await putOrderController({
      orderId: relatedOrderId,
      status: paymentStatusToDb,
      payment_status_detail: paymentStatusDetail || null,
      payment_id: paymentId || null,
      payment_date: paymentDate || null,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { paymentDataController };
