import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { cleanOrderDetailAction, getOrderDetailAction } from '../../redux/adminSlice';
import styles from "./OrderDetail.module.css";
const OrderDetail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const orderDetail = useSelector((state)=>state.adminReducer.orderDetail);

    useEffect(()=>{
        dispatch(getOrderDetailAction(id))
        return ()=>dispatch(cleanOrderDetailAction());
    },[dispatch])

    console.log("Id Orden", id);
    console.log("Order Detail", orderDetail);

    return(
        <div className={styles.orderdiv}>
            <h3>{orderDetail?.User.name}</h3>
        <table className={styles.destable}>

            <thead>
                <tr>
                    <th>Id</th>
                    <th>Vianda</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {orderDetail?.Items.map((i)=>(
                    <tr key = {i.id}>
                        <td>{i.id}</td>
                        <td>{i.Food.name}</td>
                        <td>{i.quantity}</td>
                        <td>{i.final_price}</td>
                        <td>{i.amount}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    )
}

export default OrderDetail;