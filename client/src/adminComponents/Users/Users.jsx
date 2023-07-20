import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsersAction } from '../../redux/adminSlice';
import ListUsers from '../ListUsers/ListUsers';
import styles from './Users.module.css'

const Users = () => {
  const allUsers = useSelector((state) => state.adminReducer.users)
  const dispatch = useDispatch();
  console.log(allUsers);

  useEffect(()=>{
    dispatch(getAllUsersAction())
  },[])
  return (
    <div className={styles.container}>
      <h1>
        Usuarios
      </h1>
      <div>
        <table className={styles.ordertable}>
        <thead>
          <tr>
            <th>Usuario</th>
            <th>Email</th>
            <th>Tipo</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {allUsers?.map((user) => 
            <ListUsers
              key={user.id}
              name={user.name}
              email={user.email}
              type={user.type}
            />
          )}
        </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users