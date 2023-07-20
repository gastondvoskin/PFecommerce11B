import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetailAction } from "../../redux/userSlice";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import styles from "./MyProfile.module.css";
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";

const MyProfile = () => {
  const dispatch = useDispatch();
  const userDetail = useSelector((state) => state.usersReducer.userDetail);
  const [editableFields, setEditableFields] = useState(false);
  const { user, isAuthenticated } = useAuth0();
  
  useEffect (() =>{
    dispatch (getUserDetailAction (email));
}, [dispatch])

  console.log("verifica 1", userDetail )
  //console.log("verifica id", userDetail[0].id )
  
  const [formData, setFormData] = useState({
    name: "",
    /* address: "" */
  });

  /* we get the email from Auth0 */
  const email = user?.email;

  /* we get the info of the user from the db */
  useEffect(() => {
    if (!userDetail) {
      dispatch(getUserDetailAction(email));
    }
  }, [email, dispatch]);

  /* we handle wether the form is editable or not */
  const handleCheck = (event) => {
    event.preventDefault();
    setEditableFields(!editableFields);
  };

  /* we change the value with each change on the form */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  /* submit does a PUT request */
  const handleSave = async () => {
    try {
      console.log("1");
      console.log("formData ", formData);
      const response = await axios.put(`/user/${email}`, formData);
      console.log("2");
  
      console.log(response);
      Swal.fire({
        title: "¡Éxito!",
        text: "Perfil editado correctamente",
        icon: "success",
        confirmButtonText: "Continuar"
      });
       
    } catch (error) {
      Swal.fire({ 
        title: 'Error',
        text: "Error de Sistema",
        icon: 'error',
        confirmButtonText: 'Cerrar'
      });
    }
  };

  return (
    <main className={styles.mainContainer}>
      <h1>Mi perfil</h1>
      
      <Link to="/userorder"> <button>Mi Orden</button> </Link> 

      <section>
        <h2>Mis datos</h2>
        <button type="button" onClick={handleCheck}>
          HABILITAR EDICIÓN
        </button>
        {/* form */}

        <div className={styles.form}>
          {/* email */}
          <div className={styles.rowContainer}>
            <label htmlFor="name">Email (no puede ser modificado):</label>
            <input
              className={styles.input}
              type="text"
              name="email"
              value={user?.email}
              disabled={true}
              onChange={handleChange}
              placeholder={userDetail.name}
            />
          </div>

          {/* name */}
          <div className={styles.rowContainer}>
            <label htmlFor="name">Nombre:</label>
            <input
              className={styles.input}
              type="text"
              name="name"
              value={formData.name}
              disabled={!editableFields}
              onChange={handleChange}
              placeholder={userDetail.name}
            />
          </div>

          {/* address */}
          {/* <div className={styles.rowContainer}>
            <label htmlFor="address">Domicilio:</label>
            <input
              className={styles.input}
              type="text"
              name="address"
              value={formData.address}
              disabled={!editableFields}
              onChange={handleChange}
              placeholder={userDetail.address}
            />
          </div> */}

          <button type="button" onClick={handleSave}>
            Guardar
          </button>
        </div>
        <hr></hr>
      </section>
      {/* <section>
        <h2>Mis favoritos</h2>
        <p>Próximamente...</p>
        <hr></hr>
      </section> */}
      {/* <section>
        <h2>Historial de compras</h2>
        <p>Próximamente...</p>
        <hr></hr>
      </section> */}
    </main>
  );
};

export default MyProfile;
