import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetailCase } from "../../redux/userSlice";
import { useParams } from "react-router-dom";


const MyProfile = () => {

    const userDetail = useSelector((state) => state.usersReducer.userDetail)
    const { name } = useParams()
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(getUserDetailCase(name))
    }, [name, dispatch])
    return (
        <div>
            {userDetail.map((user) => (
                <h1>Nombre: {user.name}</h1>
            ))}
        </div>
    )
};
  
export default MyProfile;