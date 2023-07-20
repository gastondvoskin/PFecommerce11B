import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetailAction } from "../../redux/userSlice";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import styles from "./MyProfile.module.css";
import Swal from "sweetalert2";
import "animate.css";
import logo from "../../assets/logo/LogoViandaExpress.jpeg";
import SidebarUser from "../../clientComponents/SidebarUser/SidebarUser";

const MyProfile = () => {
  const dispatch = useDispatch();
  const userDetailArray = useSelector((state) => state.usersReducer.userDetail);
  const [editableField, setEditableField] = useState(false);
  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (!userDetailArray.length) { /* userDetailArray is an array because the back does a findAll instead of a findOne */
      dispatch(getUserDetailAction(user?.email));
    }
  }, [user, dispatch]);

  const [address, setAddress] = useState(userDetailArray[0]?.address);


  const handleEdit = () => {
    setEditableField(!editableField);
  };

  const handleChange = (e) => {
    setAddress(e.target.value)
  };

  const handleSave = async () => {
    try {
      const response = await axios.put(`/user/${user.email}`, {address: address});
      console.log('response: ', response);
      dispatch(getUserDetailAction(user.email));
      handleEdit();

      Swal.fire({
        title: "¡Éxito!",
        text: "Perfil editado correctamente",
        icon: "success",
        confirmButtonText: "Continuar",
        footer: "Vianda Express",
        imageUrl: logo,
        timer: 4000,
        timerProgressBar: true,
        confirmButtonColor: "var(--accentColor)",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    } catch (error) {
      window.alert({error: error.message})
      Swal.fire({
        title: "Error",
        text: "Error de Sistema",
        icon: "error",
        confirmButtonText: "Cerrar",
        footer: "Vianda Express",
        imageUrl: logo,
        timer: 4000,
        timerProgressBar: true,
        confirmButtonColor: "var(--accentColor)",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    }
  };

  /* RETURN */
  return (
    <main className={styles.mainContainer}>
      <SidebarUser />
      <div className={styles.contentContainer}>
        <h1>Mis datos</h1>
        <section>
          <div className={styles.form}>
            <div className={styles.rowContainer}>
              <label htmlFor="name">Nombre:</label>
              <p name="email">{user?.name}</p>
            </div>
            {/* email */}
            <div className={styles.rowContainer}>
              <label htmlFor="name">Email de contacto:</label>
              <p name="email">{user?.email}</p>
            </div>

            <div className={styles.rowContainer}>
              <img src={user?.picture} alt="Foto de perfil" />
            </div>

            {/* address */}
            <div className={styles.rowContainer}>
              <label htmlFor="address">Domicilio de entrega:</label>
              <br />
              <input
                className={styles.input}
                type="text"
                name="address"
                value={address}
                disabled={!editableField}
                onChange={handleChange}
                placeholder={userDetailArray[0]?.address}
              />
            </div>

            <button className={styles.editButton} type="button" onClick={handleEdit}>
              EDITAR DOMICILIO
            </button>

            <button
              className={styles.saveButton}
              type="button"
              onClick={handleSave}
            >
              GUARDAR
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default MyProfile;
