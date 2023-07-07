import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

const PaymentStatus = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const { user } = useAuth0();
  const userEmail = user?.email;
  let status = queryParams.get("status");
  const merchant_order_id = queryParams.get("merchant_order_id");
  const payment_id = queryParams.get("payment_id");

  const date = new Date();
  const formattedDate = date.toISOString();
  let payment_date = null;
  console.log(formattedDate);

  if (status === "approved") status = "APROBADO";
  if (status === "rejected") status = "RECHAZADO";
  if (status === "in_process") status = "EN PROCESO";
  if (status === "approved") payment_date = formattedDate;

  useEffect(() => {
    const bodyPutOrder = {
      userEmail,
      status,
      merchant_order_id,
      payment_id,
      payment_date,
    };
    axios.put("/order", bodyPutOrder).catch((error) => console.log(error));
  });
  return (
    <>
      <div>Payment</div>
      <div>Status: {status}</div>
    </>
  );
};

export default PaymentStatus;
