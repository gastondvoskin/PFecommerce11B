// VIEW EDIT
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import style from "../CreateFood/DashBoard.module.css";
import axios from "axios";
import { getFoods, putFoods } from "../../redux/foodActions.js";
import { useNavigate } from 'react-router-dom';
import styles from "../EditFood/EditFood.module.css"

export default function EditFood() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const allFoods = useSelector((state) => state.foodsReducer.allFoods);

  const [editableFields, setEditableFields] = useState(false);

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    initial_price: "",
    discount: "",
    status: "",
    description: "",
    image: null,
  });

  useEffect(() => {
    if (!allFoods.length) {
      axios.get("http://localhost:3001/api").then(() => dispatch(getFoods()));
    } else {
      dispatch(getFoods());
    }
  }, [dispatch]);

  useEffect(() => {
    const foodToEdit = allFoods.find((food) => food.id === id);
    if (foodToEdit) {
      setFormData(foodToEdit);
    }
  }, [allFoods, id]);

  const handleCheck = (e) => {
    const checked = e.target.checked;
    setEditableFields(checked);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelect = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    var verificar= window.confirm(`Está a punto de modificar la vianda`)
    if(verificar){
      const form = new FormData();
      for (let key in formData) {
        form.append(key, formData[key]);
      }
      try {
          await axios.put(`http://localhost:3001/food/${id}`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          alert(`Receta de ${formData.name} modificada`); 
          navigate('/admin');
      } catch (error) {
          alert(error.message)
      }
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    var verificar= window.confirm(`Está a punto de eliminar la vianda`)
    if(verificar){
      try {
        await axios.delete(`http://localhost:3001/food/${id}`);
        alert(`Vianda: '${formData.name}' eliminada`);
        navigate('/admin');
      } catch (error) {
        alert(error.message);
      }
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      image: file,
    });
  };

  return (
    <div className={styles.mainContainer}>
      <input
        className={style.diets}
        type="checkbox"
        name="editableFields"
        onChange={handleCheck}
        checked={editableFields} // Added checked attribute
      />
      <input
        type="text"
        name="name"
        value={formData.name}
        disabled={!editableFields}
        onChange={handleChange}
        className={style.inputTitle}
      />
      
      <img
        src={formData.image}
        alt="img not found"
        className={style.card}
        style={{ pointerEvents: editableFields ? "auto" : "none" }} // Added style to disable pointer events
      />
      <input
        type="file"
        accept="image/*"
        name="image"
        onChange={handleImageChange}
        disabled={!editableFields}
      />

      <label>
        <h3 className={style["h3-title"]}>Descripción: </h3>
      </label>
      <textarea
        type="text"
        name="description"
        value={formData.description}
        disabled={!editableFields}
        onChange={handleChange}
      />
      
      <label>
        <h3 className={style["h3-title"]}>Precio Inicial: </h3>
      </label>
      <input
        type="number"
        name="initial_price"
        value={formData.initial_price}
        disabled={!editableFields}
        onChange={handleChange}
      />
      
      <label>
        <h3 className={style["h3-title"]}>Descuento: </h3>
      </label>
      <input
        type="number"
        name="discount"
        value={formData.discount}
        disabled={!editableFields}
        onChange={handleChange}
      />
      
      <label>
        <h3 className={style["h3-title"]}>Estado: </h3>
      </label>
      <select
        type="text"
        name="status"
        value={formData.status}
        disabled={!editableFields}
        onChange={handleSelect}
      >
        <option value={true}>Habilitado</option>
        <option value={false}>Deshabilitado</option>
      </select>
      <br />
      <button onClick={handleEdit} disabled={!editableFields}>Guardar</button>
      <button onClick={handleDelete} disabled={!editableFields}>Eliminar</button>
      <Link to="/admin">
        <button>Cancelar</button>
      </Link>
    </div>
  );
}
