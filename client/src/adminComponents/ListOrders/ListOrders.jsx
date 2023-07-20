import React, { useEffect, useState, useRef} from "react";
import { useDispatch } from "react-redux";
import { updateOrderStatusAction} from "../../redux/adminSlice";
import { Link } from "react-router-dom";
import styles from "./ListOrders.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListOl } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

const ListOrders = ({id, User_name, total_price, createdAt, status, order_status}) => {
  
    const [selectedStatus, setSelectedStatus] = useState('');
    const [previousStatus, setPreviousStatus] = useState('');
    const orderId = id;
    const dispatch = useDispatch();

    useEffect(() => {
      // Almacena el estado seleccionado en el almacenamiento local
      localStorage.setItem('selectedStatus', selectedStatus);
    }, [selectedStatus]);

    useEffect(() => {
      // Restaura el estado seleccionado desde el almacenamiento local al cargar el componente
      const storedStatus = localStorage.getItem('selectedStatus');
      if (storedStatus) {
        setSelectedStatus(storedStatus);
        setPreviousStatus(storedStatus);
      }
    }, []);

    const handleChangeSelect = async (e) => {
      const order_status = e.target.value;
      setSelectedStatus(order_status);
  
      if (order_status === 'Procesando' || order_status === 'Enviado' || order_status === 'Entregado') {
        const result = await Swal.fire({
          title: 'Confirmación',
          text: `¿Estás seguro de que deseas establecer el estado como ${order_status}?`,
          icon: 'question',
          showCancelButton: true,
          confirmButtonText: 'Sí',
          cancelButtonText: 'Cancelar',
        });
  
        if (result.isConfirmed) {
          dispatch(updateOrderStatusAction(orderId, order_status));
          Swal.fire('Estado actualizado', `El estado se ha establecido como ${order_status}.`, 'success');
        }else{
          setSelectedStatus(previousStatus);
        }
      } else {
        dispatch(updateOrderStatusAction(orderId, order_status));
      }
    };
      /*
    const handleChangeSelect = async (e) => {
        const newOrderStatus = e.target.value;
        setSelectedStatus(newOrderStatus);
        dispatch(updateOrderStatusAction(id, newOrderStatus));
      };
      */
    return(
        <tr className={styles.tds}>
            <td className={styles.tbodys}>{id.substring(id.length - 4)}</td>
            <td className={styles.tbodys}>{User_name}</td>
            <td className={styles.tbodys}>{total_price}</td>
            <td className={styles.tbodys}>{createdAt}</td>
            <td className={styles.tbodys}>{status}</td>
            <td className={styles.tbodys}>
                <select className={styles.btnorder} value={selectedStatus} onChange={handleChangeSelect}>
                    <option value="">Seleccionar Estado</option>
                    <option value="Procesando">Procesando{order_status==="Procesando"? "->Procesando":null}</option>
                    <option value="Enviado">Enviado{order_status==="Enviado"? "->Enviado":null}</option>
                    <option value="Entregado">Entregado {order_status==="Entregado"? "->Entregado":null}</option>
                </select>
            </td>
            <label>{order_status}</label>
            <td className={styles.tbodys}>
                <Link to={`/order/detail/${id}`}>
                    <button><FontAwesomeIcon icon={faListOl} /></button>
                </Link>
            </td>
        </tr>  
    )
}

export default ListOrders;