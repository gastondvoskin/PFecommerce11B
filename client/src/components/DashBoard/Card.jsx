import { Link } from "react-router-dom"
import style from "./Dashboard.module.css"

export default function Card({id,name, initial_price, final_price, discount, status}){  
   
    return (
        <div 
            className={style.card}>
            <h2>{name}</h2>
            <h3>${initial_price}</h3>
            <h3>${discount}</h3>
            <h3>${final_price}</h3>
            <h3>{status}</h3>
            <Link to={`/dashboard/edit/${id}`}><button>Editar</button></Link>
        </div>
    )
}