import React from 'react';
import styles from './ListProductsItem.module.css'; // Importa el archivo CSS
import { Link } from 'react-router-dom';
import axios from 'axios';

const ListProductsItem = ({ name, final_price, status,id,localFoods, setLocalFoods }) => {
    const handleDelete = async (e) => {
        e.preventDefault();
        var verificar= window.confirm(`Está a punto de eliminar la vianda`)
        if(verificar){
          try {
            await axios.delete(`/food/${id}`);
            alert(`Vianda: '${name}' eliminada`);
            const updatedFoods = localFoods.filter(e => e.id !== id);
            setLocalFoods(updatedFoods);
          } catch (error) {
            alert(error.message);
          }
        }
      };

    return (
        <div className={styles.listProductsItem}> {/* Aplica la clase CSS utilizando la variable styles */}
            <div className={styles.left}>
                <p>{name}</p>
                <p> $ {final_price} </p>
                <select onChange={console.log('Implementar /putFood ')} value={status ? 'Disponible' : 'Suspendido'}>
                    <option value="Disponible">Disponible</option>
                    <option value="Suspendido">Suspendido</option>
                </select>
            </div>
            <div>
                <Link to={`/admin/edit/${id}`}>
                    <button>Editar</button>
                </Link>
                <button onClick={handleDelete}>ELIMINAR</button>
            </div>
            
        </div>
    );
};

export default ListProductsItem;
