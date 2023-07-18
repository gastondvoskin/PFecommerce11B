// VIEW EDIT
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { getFoods, putFoods } from "../../redux/foodActions.js";
import { useNavigate } from "react-router-dom";
import styles from "./EditFood.module.css";
import Swal from "sweetalert2";
import validation from "../CreateFood/validation";
import SideBar from "../../adminComponents/SideBar/SideBar";

export default function EditFood() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const allFoods = useSelector((state) => state.foodsReducer.allFoods);

  const [errors, setErrors] = useState({
    id: "",
    name: "",
    initial_price: "",
    discount: "",
    status: "",
    description: "",
    image: null,
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
      axios.get("/api").then(() => dispatch(getFoods()));
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
    setErrors(validation(formData));
    if (
      !formData.name ||
      !formData.description ||
      !formData.category ||
      !formData.diets.length ||
      formData.initial_price < 0 ||
      formData.discount < 0 ||
      formData.discount > 100
    ) {
      //alert(`Llena todos los campos para crear la vianda`);
      Swal.fire("Por favor llenar todos los campos", "warning");
    } else {
      e.preventDefault();
      //var verificar= window.confirm(`Está a punto de modificar la vianda`)
      Swal.fire({
        title: "Estas Seguro?",
        text: "¡Puedes modificar en cualquier momento!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, ¡Modificar!",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          const form = new FormData();
          for (let key in formData) {
            form.append(key, formData[key]);
          }
          try {
            axios.put(`/food/${id}`, formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            });
            //alert(`Receta de ${formData.name} modificada`);
            Swal.fire(
              "Modificada!",
              `Receta de ${formData.name} modificada.`,
              "success"
            );
            navigate("/admin");
          } catch (error) {
            //alert(error.message)
            Swal.fire("Error del sistema", `${error.message}`, "warning");
          }
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire("Cancelado", "Los cambios no se guardaron", "success");
        }
      });
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
    <main className={styles.mainContainer}>
      <SideBar />
      <div className={styles.contentContainer}>
        <div className={styles.container}>
          <div className={styles.cabecera}>
            <h4>Editar Vianda</h4>
            <div className={styles.containergen}>
              <div className={styles.container1}>
                <h3>Nombre: </h3>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name ? (
                  <div className={styles.errorsContainer}>
                    <p className={styles.errorMessage}>{errors.name}</p>
                  </div>
                ) : null}
                <img
                  src={formData.image}
                  alt="img not found"
                  className={styles.image}
                />
                <input
                  type="file"
                  accept="image/*"
                  name="image"
                  onChange={handleImageChange}
                />
              </div>
              <div className={styles.container2}>
                <div className={styles.cont}>
                  <label>
                    <h3>Descripción: </h3>
                  </label>
                  <textarea
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                  />
                  {errors.description ? (
                    <div className={styles.errorsContainer}>
                      <p className={styles.errorMessage}>
                        {errors.description}
                      </p>
                    </div>
                  ) : null}
                  <label>
                    <h3>Precio Inicial: </h3>
                  </label>
                  <input
                    type="number"
                    name="initial_price"
                    value={formData.initial_price}
                    onChange={handleChange}
                  />
                  {errors.initial_price ? (
                    <div>
                      <p className={styles.errorMessage}>
                        {errors.initial_price}
                      </p>
                    </div>
                  ) : null}
                  <label>
                    <h3>Descuento: </h3>
                  </label>
                  <input
                    type="number"
                    name="discount"
                    value={formData.discount}
                    onChange={handleChange}
                  />
                  <label>
                    {errors.discount ? (
                      <div className={styles.errorsContainer}>
                        <p className={styles.errorMessage}>{errors.discount}</p>
                      </div>
                    ) : null}
                    <h3>Estado: </h3>
                  </label>
                  <select
                    type="text"
                    name="status"
                    value={formData.status}
                    onChange={handleSelect}
                  >
                    <option value={true}>Habilitado</option>
                    <option value={false}>Deshabilitado</option>
                  </select>
                </div>
              </div>
            </div>
            <div className={styles.divbtn}>
              <button className={styles.butedit} onClick={handleEdit}>
                Guardar
              </button>
              <Link to="/admin">
                <button className={styles.butedit}>Cancelar</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// OLD
// const handleDelete = async (e) => {
//   e.preventDefault();
//   //var verificar= window.confirm(`Está a punto de eliminar la vianda`)
//   Swal.fire({
//     title: 'Estas Seguro?',
//     text: "¡No podrás revertir esto!",
//     icon: 'warning',
//     showCancelButton: true,
//     confirmButtonColor: '#3085d6',
//     cancelButtonColor: '#d33',
//     confirmButtonText: 'Si, ¡Eliminar!',
//     cancelButtonText: 'Cancelar'
//   }).then((result) => {
//     if(result.isConfirmed){
//       try {
//         axios.delete(`/food/${id}`);
//           //alert(`Receta de ${formData.name} modificada`);
//           Swal.fire(
//             'Eliminada!',
//             `Vianda ${formData.name} Eliminada.`,
//             'success'
//           )
//           navigate('/admin');
//       } catch (error) {
//           //alert(error.message)
//           Swal.fire(
//             'Error del sistema',
//             `${error.message}`,
//             'warning',
//             )
//       }
//     }else if(result.dismiss === Swal.DismissReason.cancel){
//       Swal.fire(
//       'Cancelado',
//       'Los cambios no se guardaron',
//       'success'
//       )
//     }
//   })
// };
