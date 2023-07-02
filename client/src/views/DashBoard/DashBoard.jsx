import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import validation from "./validation.jsx";
import style from "./DashBoard.module.css";
import { postFood } from "../../redux/foodActions.js";
import axios from "axios";
import logoViandaExpress from "../../assets/logo/logoViandaExpress.jpeg";

export default function DashBoard() {
  const dispatch = useDispatch();
  const diets = ["Sin TACC", "Vegetariano", "Vegano", "Sin Lactosa"];
  const allFoods = useSelector((state) => state.foodsReducer.allFoods);
  const categories = ["Carnes", "Pastas", "Ensaladas"];
  // console.log(allFoods)
  const [input, setInput] = useState({
    name: "",
    description: "",
    diets: [],
    category: "",
    initial_price: 0,
    discount: 0,
    image: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    description: "",
    diets: "",
    category: "",
    initial_price: "",
    discount: "",
    image: "",
  });
  const handleChange = (e) => {
    let { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setInput({
      ...input,
      image: file,
    });
  };
  const handleSubmit = async (e) => {
    // const handleSubmit= async (e)=>{
    e.preventDefault();
    setErrors(validation(input));
    console.log(input);
    if (
      !input.name ||
      !input.description ||
      !input.category ||
      !input.diets.length ||
      !input.image ||
      input.initial_price < 0 ||
      input.discount < 0 ||
      input.discount > 100
    ) {
      alert(`Llena todos los campos para crear la vianda`);
    } else {
      try {
        const formData = new FormData();
        formData.append("name", input.name);
        formData.append("description", input.description);
        formData.append("category", input.category);
        formData.append("diets", input.diets);
        formData.append("initial_price", input.initial_price);
        formData.append("discount", input.discount);
        formData.append("image", input.image);
        console.log(formData);
        // dispatch(postFood(input));
        await axios.post("http://localhost:3001/food", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        alert(`Receta de ${input.name} creada`);
        setInput({
          name: "",
          description: "",
          diets: [],
          category: "",
          initial_price: 0,
          discount: 0,
          image: "",
        });
      } catch (error) {
        alert(error.message);
      }
    }
  };
  const handleCheck = (e) => {
    const { value, checked } = e.target;
    let updatedDiets = [...input.diets];

    if (checked) {
      updatedDiets.push(value); // Agregar al array si está seleccionado
    } else {
      updatedDiets = updatedDiets.filter((diet) => diet !== value); // Eliminar del array si está deseleccionado
    }

    setInput({
      ...input,
      diets: updatedDiets,
    });
  };

  const handleSelect = (e) => {
    setInput({
      ...input,
      category: e.target.value,
    });
  };
  return (
    <div className={style.formContainer}>
      {/* Dejo logica para agregar logo */}

      <h1 className={style.title}>Agregar Vianda</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className={style.SectionDB}>
          <div className={style.h3}>
            <label>
              <h3 className={style["h3-title"]}>Nombre de Vianda:</h3>
            </label>
            <input
              type="text"
              name="name"
              value={input.name}
              onChange={handleChange}
            />
            {errors.name ? (
              <p className={style.errorMessage}>{errors.name}</p>
            ) : null}
          </div>
          <div className={style.h3}>
            <label>
              <h3 className={style["h3-title"]}>Descripción:</h3>
            </label>
            <textarea
              type="text"
              name="description"
              value={input.description}
              onChange={handleChange}
            />
            {errors.description ? (
              <p className={style.errorMessage}>{errors.description}</p>
            ) : null}
          </div>
          <div className={style.h3}>
            <label>
              <h3 className={style["h3-title"]}>Categoría</h3>
            </label>
            <select onChange={handleSelect} value={input.category}>
              <option value="">--Seleccionar--</option>
              {categories.map((ca) => {
                return <option value={ca}>{ca}</option>;
              })}
            </select>
            {errors.category ? (
              <p className={style.errorMessage}>{errors.category}</p>
            ) : null}
          </div>
          <div className={style.h3}>
            <h3 className={style["h3-title"]}>Dietas: </h3>
            {diets.map((diet) => (
              <div key={diet} className={style.diets}>
                <div className={style["diets-container"]}>
                  <span>{diet}</span>
                  <input
                    value={diet}
                    checked={input.diets.includes(diet)}
                    onChange={handleCheck}
                    type="checkbox"
                    name="diet"
                  />
                </div>
              </div>
            ))}
            {errors.diets ? (
              <p className={style.errorMessage}>{errors.diets}</p>
            ) : null}
          </div>

          <div>
            <div>
              <div className={style.h3}>
                <label>
                  <h3 className={style["h3-title"]}>Precio de Vianda:</h3>
                </label>
                <input
                  type="number"
                  name="initial_price"
                  value={input.initial_price}
                  onChange={handleChange}
                  className={style.InputNumberDB}
                />
                {errors.initial_price ? (
                  <p className={style.errorMessage}>{errors.initial_price}</p>
                ) : null}
              </div>
              <div className={style.h3}>
                <label>
                  <h3 className={style["h3-title"]}>Descuento de Vianda:</h3>
                </label>
                <input
                  type="number"
                  name="discount"
                  value={input.discount}
                  onChange={handleChange}
                  className={style.InputNumberDB}
                />
                {errors.discount ? (
                  <p className={style.errorMessage}>{errors.discount}</p>
                ) : null}
              </div>
            </div>
            <div className={style.image}>
              <label>
                <h3 className={style["h3-title"]}>Imagen:</h3>
              </label>
              <input
                type="file"
                accept="image/*"
                name="image"
                onChange={handleImageChange}
              />
              {errors.image ? (
                <p className={style.errorMessage}>{errors.image}</p>
              ) : null}
            </div>
            <div className={style.ButtonDB}>
              <button type="submit">Crear Vianda</button>
            </div>
            {/* <div>
                <Link to="/">
                  <img
                    className={style.logo}
                    src={logoViandaExpress}
                    alt="logo Vianda Express"
                  />
                </Link>
              </div> */}
              <div className={style.ButtonDB}>

                <Link to='/home'><button>Home</button></Link>

              </div>
          </div>
        </div>
      </form>
    </div>
  );
}
