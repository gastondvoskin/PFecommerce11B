// VIEW CREATE PRODUCT
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import validation from "./validation.jsx";
import styles from "./DashBoard.module.css";
import axios from "axios";
import Swal from "sweetalert2";

export default function CreateFood() {
  const dispatch = useDispatch();
  const diets = ["Sin TACC", "Vegetariano", "Vegano", "Sin Lactosa"];
  const allFoods = useSelector((state) => state.foodsReducer.allFoods);
  const categories = ["Carnes", "Pastas", "Ensaladas"];
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");
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
    setSelectedImage(file);
    setImagePreviewUrl(URL.createObjectURL(file));
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
      //alert(`Llena todos los campos para crear la vianda`);
      Swal.fire(
        'Imposible de crear Viandas!',
        'Por favor llenar todos los campos',
        'warning'
      )
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
        await axios.post("/food", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        //alert(`Receta de ${input.name} creada`);
        Swal.fire(
          'la Receta!',
          `${input.name}`,
          'success'
        )
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
    <div className={styles.formContainer}>
      {/* Dejo logica para agregar logo */}

      <h1 className={styles.title}>Agregar Vianda</h1>
      <form onSubmit={(e) => handleSubmit(e)} className={styles.SectionDB}>
        <div className={styles.inputsContainer}>
          <div className={styles.attributesContainers}>
            <label>
              <h3 className={styles.attributesName}>Nombre de Vianda:</h3>
            </label>
            <input
              type="text"
              name="name"
              value={input.name}
              onChange={handleChange}
              className={styles.inputText}
            />
            {errors.name ? (
              <div className={styles.errorsContainer}>
                <p className={styles.errorMessage}>{errors.name}</p>
              </div>
              
            ) : null}
          </div>
          <div className={styles.attributesContainers}>
            <label>
              <h3 className={styles.attributesName}>Descripción:</h3>
            </label>
            <textarea
              type="text"
              name="description"
              value={input.description}
              onChange={handleChange}
              className={styles.inputTextArea}
            />
            {errors.description ? (
              <div className={styles.errorsContainer}>
                <p className={styles.errorMessage}>{errors.description}</p>
              </div>
            ) : null}
          </div>
          <div className={styles.attributesContainers}>
            <label>
              <h3 className={styles.attributesName}>Categoría</h3>
            </label>
            <select onChange={handleSelect} value={input.category}>
              <option value="">--Seleccionar--</option>
              {categories.map((ca) => {
                return <option value={ca}>{ca}</option>;
              })}
            </select>
            
            {errors.category ? (
              <div className={styles.errorsContainer}>
              <p className={styles.errorMessage}>{errors.category}</p>
              </div>
            ) : null}
          </div>
          <div className={styles.attributesContainers}>
            <h3 className={styles.attributesName}>Dietas: </h3>
            <div className={styles.dietsContainer}>
              {diets.map((diet) => (
                
                  <div key={diet} className={styles.diets}>
                    <div className={styles.dietsValues}>
                      <span className={styles.checkBox}>{diet}</span>
                      <input
                        value={diet}
                        checked={input.diets.includes(diet)}
                        onChange={handleCheck}
                        type="checkbox"
                        name="diet"
                        className={styles.inputCheckBox}
                      />
                    </div>
                  </div>
                
              ))}
            </div>
            {errors.diets ? (
              <div className={styles.errorsContainer}>
              <p className={styles.errorMessage}>{errors.diets}</p>
              </div>
            ) : null}
          </div>
          
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.image}>
            <label>
              <h3 className={styles.attributesName}>Imagen:</h3>
            </label>
            <input
              type="file"
              accept="image/*"
              name="image"
              onChange={handleImageChange}
            />
            {selectedImage && (
              <div className={styles.imageSelected}>
                <img src={imagePreviewUrl} alt="Preview" />
              </div>
            )}
            {!selectedImage && (
              <div className={styles.imageNotSelected}>
                <p>IMAGEN</p>
              </div>
            )}
            {errors.image ? (
              <div className={styles.errorsContainer}>
                <p className={styles.errorMessage}>{errors.image}</p>
              </div>
            ) : null}
          </div>

          <div className={styles.pricesRow}>
            <div className={styles.pricesContainers}>
              <label>
                <h3 className={styles.attributesName}>Precio de Vianda:</h3>
              </label>
              <input
                type="number"
                name="initial_price"
                value={input.initial_price}
                onChange={handleChange}
                className={styles.InputNumberDB}
              />
              {errors.initial_price ? (
                <div>
                  <p className={styles.errorMessage}>{errors.initial_price}</p>
                </div>
              ) : null}
            </div>
            
            <div className={styles.pricesContainers}>
              <label>
                <h3 className={styles.attributesName}>Descuento de Vianda:</h3>
              </label>
              <input
                type="number"
                name="discount"
                value={input.discount}
                onChange={handleChange}
                className={styles.InputNumberDB}
              />
              {errors.discount ? (
                <div className={styles.errorsContainer}>
                  <p className={styles.errorMessage}>{errors.discount}</p>
                </div>
              ) : null}
            </div>
          </div>
          
          <div className={styles.ButtonCreate}>
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
          <div className={styles.ButtonDB}>
            <Link to='/admin'><button>Home</button></Link>
          </div>
        </div>
        
      </form>
    </div>
  );
}
