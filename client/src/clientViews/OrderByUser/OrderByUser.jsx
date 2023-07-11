import { useDispatch, useSelector } from "react-redux";
import { getOrderByUserAction } from "../../redux/userOrderSlice";
import { useEffect } from "react";

const OrderByUser = () =>{
    const dispatch = useDispatch();
    const OrderUserId = useSelector((state) => state.userOrderReducer.orderByUser);
    
    useEffect (() =>{
        dispatch (getOrderByUserAction());
    }, [dispatch])
    return (
        <div>
            <h1>Hola  {OrderUserId.id}</h1>
           
        </div>
    )
}
export default OrderByUser;