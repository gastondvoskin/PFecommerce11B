import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetailAction, putUserDetailAction } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";


const MyProfile = () => {
  
  const navigate = useNavigate();
  const userArray = [
    {
      "id": "5376b108-7e39-4304-9c20-1f261b064aec",
      "email": "franciscoaleman1993@gmail.com",
      "name": "Francisco Aleman",
      "type": "client",
      "status": null,
      "adress": ["arrasdasddas2334", "asdadwwdwd223", "rgfrfikrfifrijri12"]
    }
  ]

  console.log(userArray[0].adress.map(e => e))
  const dispatch = useDispatch();
  const { user, isAuthenticated, isLoading } = useAuth0();

  const [ enableEdition, setEnableEdition ] = useState(false);

  const toggleChecked = () => {
    setEnableEdition(enableEdition => !enableEdition);
  } 
  
  
  useEffect(() => {
      dispatch(getUserDetailAction(user.email))
    
  }, [dispatch]);

  
  const userDetail = useSelector((state) => state.usersReducer.userDetail);

  const info = Object.assign({}, ...userDetail)


  const [userData, setUserData] = useState({
    name: "",
    adress: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      const form = new FormData();
      for (let key in userData) {
        form.append(key, userData[key]);
    
      try {
          await axios.put(`http://localhost:3001/user/${info.id}`, userData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          alert(`Modificacion completa`); 
          navigate('/');
      } catch (error) {
          alert(error.message)
      }
    }
  }
  
  return (
    <main>
      {isLoading && (
      <div>
        <p>Loading...</p>
      </div>)}
      <h1>Mi perfil</h1>


      {userDetail.length > 0 &&  (
          <div>
          <section>
                  <h2>Mis datos</h2>

                  {!enableEdition ? (
                    <div>
                      <button onClick={(e) => toggleChecked(e)}>Editar</button>
                  
                      <form>
                        <div>
                          <p>Nombre: {info.name}</p>
                        </div>

                        <div>
                          <p>Email: {info.email}</p>
                        </div>

                        <div>
                        {!info.adress ? (
                          <p>Direccion: Ninguna </p>
                        ):(
                          <div>
                          <p>Domicilio: </p>
                          <select>
                            {info && info.adress.map((adr, i) => (
                              <option key={i} value={adr}>{adr}</option>
                            ))}
                            
                          </select>
                          </div>
                        )}
                          
                          
                        </div>
                      {/* it may be implemented in an extra table in the DB */}
                    </form>
                  </div>

                  ) : (
                    <div>
                      <button onClick={(e) => toggleChecked(e)}>Cancelar</button>
                      <form onSubmit={handleSubmit}>
                          <div>
                            <label>Nombre:</label>
                            <input 
                            type="text"
                            placeholder="Nuevo nombre..."
                            name="name"
                            onChange={handleChange}/>
                            
                          </div>

                          <div>
                            
                                <label>Direccion:</label>
                                <input 
                                type="text" 
                                placeholder="Calle 123 Dpto A..."
                                name="adress"
                                onChange={handleChange} 
                                />
                              
                            
                          
                          <div>
                            <label>Email:</label>
                            <input 
                            type="text" 
                            placeholder={info.email}
                            name="adress" 
                            disabled={true}/>

                          </div>
                          

                      </div>

                      <button type="submit">Modificar</button>
                        {/* it may be implemented in an extra table in the DB */}
                      </form>
                    </div>
                  )}
                  <hr></hr>
                </section>
          </div>

        )}
      


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
