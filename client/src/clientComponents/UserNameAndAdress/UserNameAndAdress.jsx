import React from "react"
const UserNameAndAdress = ({isAuthenticated, user}) => {

    return (
        <div>
            {isAuthenticated && !user.name && !user.adress && (
                <div>
                    <h3>Cargar datos faltantes</h3>
                    <label for="userName">Nombre: </label>
                    <input type="text" value="userName" />

                    <label for="userAdress">Direccion: </label>
                    <input type="text" value="userAdress" />

                    <button type="submit">Cargar</button>
                </div>
            )}
            {isAuthenticated && !user.adress && (
                <div>
                    <label for="userAdress">Direccion: </label>
                    <input type="text" value="userAdress" />

                    <button type="submit">Cargar</button>
                </div>
            )}
            <div>
                
            </div>
        </div>
    )
    
}

export default UserNameAndAdress