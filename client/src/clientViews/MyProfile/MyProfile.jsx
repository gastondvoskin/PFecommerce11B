import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetailAction } from "../../redux/userSlice";
import { useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const MyProfile = () => {
  const userDetail = useSelector((state) => state.usersReducer.userDetail);
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useAuth0();

  const [ enableEdition, setEnableEdition ] = useState(false);
  const email = user.email;
  useEffect(() => {
    dispatch(getUserDetailAction(email));
  }, [email, dispatch]);
  
  
 

  return (
    <main>
      <h1>Mi perfil</h1>
      <section>
        <h2>Mis datos</h2>
        <p>WIP</p>
        <button onClick={() => setEnableEdition(true)}>Editar</button>
        <form>
          <div>
            <label htmlFor="name">Nombre:</label>
            <input type="text" placeholder={userDetail.name} />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input type="text" placeholder={userDetail.name} disabled={true}/>
          </div>

          <div>
            <label htmlFor="surname">Apellido: {userDetail.name}</label>
          </div>
          <div>
            <label htmlFor="adress">Domicilio:</label>
          </div>
          {/* it may be implemented in an extra table in the DB */}
        </form>
        <hr></hr>
      </section>
      <section>
        <h2>Mis favoritos</h2>
        <p>Próximamente...</p>
        <hr></hr>
      </section>
      <section>
        <h2>Historial de compras</h2>
        <p>Próximamente...</p>
        <hr></hr>
      </section>
    </main>
  );
};

export default MyProfile;
