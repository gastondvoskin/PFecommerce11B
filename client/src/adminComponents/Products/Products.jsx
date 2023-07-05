import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ListProductsItem from '../ListProductsItam/ListProductsItem.jsx';
import styles from './Products.module.css'; // Importa el archivo CSS
import { Link } from 'react-router-dom';

const Products = () => {
  const allFoods = useSelector((state) => state.foodsReducer.adminFoods);
  const [localFoods, setLocalFoods] = useState(allFoods);
  const [category, setCategory] = useState('todas');

  const handlerCategoryFilter = (category) => {
    let filterfoods = [];
    switch (category) {
      case 'todas':
        filterfoods = allFoods;
        break;
      case 'carnes':
        filterfoods = allFoods.filter(e => e.category === 'Carnes');
        break;
      case 'pastas':
        filterfoods = allFoods.filter(e => e.category === 'Pastas');
        break;
      case 'ensaladas':
        filterfoods = allFoods.filter(e => e.category === 'Ensaladas');
        break;
      default:
        break;
    }

    setLocalFoods(filterfoods);
  };

  const handlerChange = (event) => {
    const { value } = event.target;
    setCategory(value);
    handlerCategoryFilter(value);
  };

  return (
    <div className={styles.productos}> {/* Aplica la clase CSS utilizando la variable styles */}
      <div>
        <h2>Nuestras Viandas</h2>
        
      </div>
      <div className={styles.addFood}>
        <Link to={'/admin/create'}>
          <button className={styles.viewAllButton}>Agregar Vianda</button>
        </Link>
        <select className={styles.viewAllButton} value={category} onChange={handlerChange}>
          <option value="todas">Todas</option>
          <option value="carnes">Carnes</option>
          <option value="pastas">Pastas</option>
          <option value="ensaladas">Ensaladas</option>
        </select>
      </div>
      <table className={styles.destable}>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio Final</th>
            <th>Estado</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
          <tbody>
          {localFoods.length > 0 &&
            localFoods.map(e => (
              <ListProductsItem
                key={e.id}
                id={e.id}
                name={e.name}
                final_price={e.final_price}
                status={e.status}
                localFoods={localFoods} // Agrega esta línea
                setLocalFoods={setLocalFoods}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
