import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import styles from "./PaymentStatus.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import GoBackHome from "../../clientComponents/GoBackHome/GoBackHome";

const PaymentStatus = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const paymentId = queryParams.get("payment_id");
  const [order, setOrder] = useState(null);
  const { user } = useAuth0();
  const name = user?.name;

  useEffect(() => {
    // const body = { payment_id: parseInt(paymentId) };
    axios
      .get(`/order/payment-id/${paymentId}`)
      .then((r) => r.data)
      .then((data) => {
        setOrder(data);
      })
      .catch((error) => console.log(error));
  }, [paymentId]);
  console.log(order?.status);
  return (
    <div className={styles.container}>
      {order?.status === "APROBADO" ? (
        <div className={styles.dataContainer}>
          <h3 className={styles.title}>
            Hemos registrado correctamente su pago.
          </h3>
          <h5 className={styles.description}>N° de pedido: {order?.id}</h5>
          <h5 className={styles.description}>
            Identificación de Mercadopago: {order?.payment_id}
          </h5>
          <h5 className={styles.description}>
            Estado del pago: {order?.status}
          </h5>
          <h5 className={styles.description}>
            Fecha de pago: {order?.payment_date}
          </h5>
          <h5 className={styles?.description}>
            Importe total: $ {order?.total_price}
          </h5>
          <br />
          <h5 className={styles.description}>
            Podés consultar el estado de tu pedido desde MI CUENTA - MIS ÓRDENES
          </h5>
          <br />
          <h4 className={styles.saludo}>Gracias {name} por su compra!</h4>
          <h4 className={styles.saludo}>
            Esperamos contar nuevamente con su visita.
          </h4>
          <GoBackHome />
        </div>
      ) : null}
      {order?.status === "RECHAZADO" ? (
        <div className={styles.dataContainer}>
          <h3 className={styles.title}>El pago ha sido rechazado. </h3>
          <h5 className={styles.description}>
            El pedido N° {order?.id}, no podrá ser procesado.{" "}
          </h5>
          <h5 className={styles.description}>
            Por cualquier consulta en Mercadopago, el número de referencia es:{" "}
            {order?.payment_id}
          </h5>

          <GoBackHome />
        </div>
      ) : null}
      {order?.status === "EN PROCESO" ? (
        <div className={styles.dataContainer}>
          <h3 className={styles.title}>Su pago se esta procesando.</h3>
          <h5 className={styles.description}>N° de pedido: {order?.id}</h5>
          <h5 className={styles.description}>
            Identificación de Mercadopago: {order?.payment_id}
          </h5>
          <h5 className={styles?.description}>
            Importe total: $ {order?.total_price}
          </h5>
          <br />
          <h5 className={styles.description}>
            Podrá consultar el estado de su pedido una vez que el pago haya sido
            acreditado.
          </h5>
          <br />
          <h4 className={styles.saludo}>Gracias {name} por su compra!</h4>
          <h4 className={styles.saludo}>
            Esperamos contar nuevamente con su visita.
          </h4>
          <GoBackHome />
        </div>
      ) : null}
    </div>
  );
};

export default PaymentStatus;
