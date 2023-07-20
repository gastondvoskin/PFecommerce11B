// VIEW CREATE PRODUCT
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import validation from "./validation.jsx";
import styles from "./CreateFood.module.css";
import axios from "axios";
import Swal from "sweetalert2";
import 'animate.css';
import logo from "../../assets/logo/LogoViandaExpress.jpeg"
import SideBar from "../../adminComponents/SideBar/SideBar";
import { getAdminFoodsAction } from "../../redux/foodActions.js";
import { setCategoryByCase, setSearchedCase } from "../../redux/adminSlice.js";

export default function CreateFood() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const diets = ["Sin TACC", "Vegetariana", "Vegana", "Sin Lactosa"];
  const categories = ["Carnes", "Pastas", "Ensaladas"];
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");
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
    e.preventDefault();
    setErrors(validation(input));
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
      Swal.fire({
        title: "Por favor llena todos los campos",
        icon: "warning",
        imageUrl: logo,
        footer: 'Vianda Express',
        timer: 4000,
        timerProgressBar: true,
        confirmButtonColor: 'var(--accentColor)',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });
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
        await axios.post("/food", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        
        dispatch(setSearchedCase(""))
        dispatch(setCategoryByCase(""))
        dispatch(getAdminFoodsAction());
        
        Swal.fire({
          title: "la Receta!",
          text: `${input.name}`,
          icon: "success",
          footer: 'Vianda Express',
	        imageUrl: logo,
          timer: 4000,
          timerProgressBar: true,
          confirmButtonColor: 'var(--accentColor)',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
       });
        setInput({
          name: "",
          description: "",
          diets: [],
          category: "",
          initial_price: 0,
          discount: 0,
          image: "",
        });
        navigate("/admin")
      } catch (error) {
        Swal.fire({
          icon: 'info',
          title: 'Error de sistema',
          text: 'Por favor intente mas tarde nuevamente',
          footer: 'Vianda Express',
          imageUrl: logo,
          timer: 5000,
          timerProgressBar: true,
          confirmButtonColor: 'var(--accentColor)',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }

        });
      }
    }
  };
  const handleCheck = (e) => {
    const { value, checked } = e.target;
    let updatedDiets = [...input.diets];

    if (checked) {
      updatedDiets.push(value); 
    } else {
      updatedDiets = updatedDiets.filter((diet) => diet !== value);
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
    <main className={styles.mainContainer}>
      <SideBar />
      <div className={styles.formContainer}>
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
                    <p className={styles.errorMessage}>
                      {errors.initial_price}
                    </p>
                  </div>
                ) : null}
              </div>

              <div className={styles.pricesContainers}>
                <label>
                  <h3 className={styles.attributesName}>
                    Descuento de Vianda:
                  </h3>
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

            <div className={styles.ButtonDB}>
              <Link to="/admin">
                <button>Cancelar</button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
