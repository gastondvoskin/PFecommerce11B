import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import style from "./DashBoard.module.css";
import axios from "axios";
import { getFoods, putFoods } from "../../redux/foodActions.js";

export default function EditForm() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const allFoods = useSelector((state) => state.foodsReducer.allFoods);

  const [editableFields, setEditableFields] = useState({
    name: false,
    initial_price: false,
    discount: false,
    status: false,
    description: false,
    image: false,
  });

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
    const { name, checked } = e.target;
    setEditableFields({
      ...editableFields,
      [name]: checked,
    });
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
      } catch (error) {
        alert(`Receta de ${formData.name} modificada`);
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
    <div>
      <input
        className={style.diets}
        type="checkbox"
        name="name"
        onChange={handleCheck}
        value="name"
      />
      <input
        type="text"
        name="name"
        value={formData.name}
        disabled={!editableFields.name}
        onChange={handleChange}
        className={style.inputTitle}
      />
      <input
        className={style.diets}
        type="checkbox"
        name="image"
        onChange={handleCheck}
        value="image"
      />
      <img src={formData.image} alt="img not found" className={style.card} />
      <input
        type="file"
        accept="image/*"
        name="image"
        onChange={handleImageChange}
        disabled={!editableFields.image}
      />
      <input
        className={style.diets}
        type="checkbox"
        name="description"
        onChange={handleCheck}
        value="description"
      />
      <label>
        <h3 className={style["h3-title"]}>Descripción: </h3>
      </label>
      <textarea
        type="text"
        name="description"
        value={formData.description}
        disabled={!editableFields.description}
        onChange={handleChange}
      />
      <input
        className={style.diets}
        type="checkbox"
        name="initial_price"
        onChange={handleCheck}
        value="initial_price"
      />
      <label>
        <h3 className={style["h3-title"]}>Precio Inicial: </h3>
      </label>
      <input
        type="number"
        name="initial_price"
        value={formData.initial_price}
        disabled={!editableFields.initial_price}
        onChange={handleChange}
      />
      <input
        className={style.diets}
        type="checkbox"
        name="discount"
        onChange={handleCheck}
        value="discount"
      />
      <label>
        <h3 className={style["h3-title"]}>Descuento: </h3>
      </label>
      <input
        type="number"
        name="discount"
        value={formData.discount}
        disabled={!editableFields.discount}
        onChange={handleChange}
      />
      <input
        className={style.diets}
        type="checkbox"
        name="status"
        onChange={handleCheck}
        value="status"
      />
      <label>
        <h3 className={style["h3-title"]}>Estado: </h3>
      </label>
      <select
        type="text"
        name="status"
        value={formData.status}
        disabled={!editableFields.status}
        onChange={handleSelect}
      >
        <option value={true}>Habilitado</option>
        <option value={false}>Deshabilitado</option>
      </select>
      <br />
      <button onClick={handleEdit}>Guardar</button>
      <button onClick={handleDelete}>Eliminar</button>
      <Link to="/dashboard">
        <button>Cancelar</button>
      </Link>
    </div>
  );
}
