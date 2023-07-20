import { useDispatch, useSelector } from "react-redux";
import { getUserOrderAction } from "../../redux/userSlice";
import { useEffect } from "react";
import styles from "./UserOrder.module.css";
import { getUserDetailAction } from "../../redux/userSlice";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import SidebarUser from "../../clientComponents/SidebarUser/SidebarUser";

const UserOrder = () => {
  const dispatch = useDispatch();
  const orderUser = useSelector((state) => state.usersReducer.userOrder);
  const userDetail = useSelector((state) => state.usersReducer.userDetail);
  console.log("order", orderUser);
  const { user, isAuthenticated } = useAuth0();
  const email = user?.email;
  const id = userDetail[0]?.id;

  useEffect(() => {
    dispatch(getUserOrderAction(id));
    dispatch(getUserDetailAction(email));
  }, [dispatch]);

  return (
    <div className={styles.divuser}>
      <SidebarUser />
      <section className={styles.content}>
        <h1>Mis órdenes</h1>
        <table className={styles.destable}>
          <thead>
            <tr>
              <th>Número de orden</th>
              <th>Precio Total</th>
              <th>Fecha</th>
              <th>Estado</th>
              <th>Detalle</th>
            </tr>
          </thead>
          <tbody>
            {orderUser.map((o) => (
              <tr key={o.id}>
                <td>{o.id}</td>
                <td>{o.total_price}</td>
                <td>{`${new Date(o.createdAt).getDate()}/${
                  new Date(o.createdAt).getMonth() + 1
                }/${new Date(o.createdAt).getFullYear()}`}</td>
                <td>{o.order_status || "Procesando"}</td>
                <td>
                  <Link to={`/micuenta/misordenes/detalle/${o.id}`}>
                    <button>Ver</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};
export default UserOrder;
