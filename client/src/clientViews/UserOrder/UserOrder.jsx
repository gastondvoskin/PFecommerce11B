import { useDispatch, useSelector } from "react-redux";
import { getUserOrderAction } from "../../redux/userSlice";
import { useEffect } from "react";
import styles from "./UserOrder.module.css";
import { getUserDetailAction } from "../../redux/userSlice";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const UserOrder = () =>{
    const dispatch = useDispatch();
    const orderUser = useSelector((state) => state.usersReducer.userOrder);
    const userDetail = useSelector((state) => state.usersReducer.userDetail);
    console.log("order", orderUser)
    const { user, isAuthenticated } = useAuth0();
    const email = user?.email;
    const id = userDetail[0]?.id;

    useEffect (() =>{
        dispatch (getUserOrderAction(id));
        dispatch (getUserDetailAction(email));
    }, [dispatch])
    console.log("prueba", userDetail )
    console.log("prueba2", id )
    return (
        <div className={styles.divuser}>
          
            <table className={styles.destable}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Cliente</th>
                        <th>Precio Total</th>
                        <th>Fecha</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {orderUser.map((o) => ( 
                    <tr key={o.id}>
                        <td>{o.id}</td>
                        <td>{o.UserId}</td>
                        <td>{o.total_price}</td>
                        <td>{o.createdAt}</td>
                        <td>{o.order_status}</td>
                        <td>
                            <Link to={`/userorder/detail/${o.id}`}><button>Detalle</button></Link>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
           

        </div>
    )
}
export default UserOrder;