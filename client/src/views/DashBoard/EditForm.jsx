import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import style from './DashBoard.module.css';
import axios from 'axios';
import { getFoods,putFoods  } from "../../redux/foodActions.js";


export default function EditForm(setEdited){
    const dispatch=useDispatch();
    const { id } = useParams();
    let allFoods=[]
    useEffect(() => {
        if (!allFoods.length) {
          axios.get("http://localhost:3001/api").then(() => dispatch(getFoods()));
        } else {
          dispatch(getFoods());
        }
      }, [dispatch]);
    allFoods=useSelector((state) => state.foodsReducer.allFoods)
    const toEdit=allFoods.filter(fo=>fo.id===id)
    const {name,initial_price,discount,status, description,image}=toEdit[0]
    const [select,setSelect]=useState({
        id: id,
        name: name,
        initial_price: initial_price,
        discount: discount,
        status: status,
        image: image,
        description: description,
    })
    const [editable,setEditable]=useState({
        name: true,
        initial_price: true,
        discount: true,
        status: true,
        description: true,
        image: true,
    })
    const handleCheck=(e)=>{
        const {name,checked,value}=e.target
        console.log(value)
        setEditable({
            ...editable,
            [name]: !checked,
        })
        if(!checked){
        setSelect({
            ...select,
            [name]: toEdit[name],
        })
        }
    }
    const handleChange=(e)=>{
        const {name,value}=e.target
        setSelect({
            ...select,
            [name]: value,
        })
    }
    const handleSelect = (e) => {
        const {name,value}=e.target
        setSelect({
            ...select,
            status:value,
        })
      };
      const handleEdit=(e)=>{
        e.preventDefault();
        dispatch(putFoods(select));
        alert(` Vianda: '${select.name}' modificada exitosamente`)
      }
      const handleDelete= async (e) =>{
        e.preventDefault();
        try {
            await axios.delete(`http://localhost:3001/food/${id}`)  
            alert(`Vianda: '${select.name}' eliminada correctamente `)
        } catch (error) {
            alert({error:error.message})
        }
        
      }
      const handleImageChange = (e) => {
        const file = e.target.files[0];
        setInput({
          ...input,
          image: file,
        });
      };
    
    return (
        <div>
            <input className={style.diets} type='checkbox' name='name' onChange={handleCheck} value="name"/>
                <input type='text' name='name' value={select.name} disabled={editable.name} onChange={handleChange} className={style.inputTitle}/>
            <input className={style.diets} type='checkbox' name='image' onChange={handleCheck} value="image"/>
                <img src={image}alt="img not found" className={style.card}/>
                <input type="file" accept="image/*" name="image" onChange={handleImageChange} disabled={editable.image}/>
            <input className={style.diets} type='checkbox' name='description' onChange={handleCheck} value="description"/>
                <label><h3 className={style["h3-title"]}>Descripción: </h3></label>
                <textarea type="text" name="description" value={select.description} disabled={editable.description} />
            <input className={style.diets} type='checkbox' name='initial_price' onChange={handleCheck} value="initial_price"/>
                <label><h3 className={style["h3-title"]}>Precio Inicial: </h3></label>
                <input type='number' name='initial_price' value={select.initial_price} disabled={editable.initial_price} onChange={handleChange}/>
            <input className={style.diets} type='checkbox' name='discount' onChange={handleCheck} value="discount"/>
                <label><h3 className={style["h3-title"]}>Descuento: </h3></label>
                <input type='number' name='discount' value={select.discount} disabled={editable.discount} onChange={handleChange}/>
            <input className={style.diets} type='checkbox' name='status' onChange={handleCheck} value="status"/><label>
                <h3 className={style["h3-title"]}>Estado: </h3></label>
                <select type='text' name='status' value={select.status} disabled={editable.status} onChange={handleSelect}>
                    <option value={true}>Habilitado</option>
                    <option value={false}>Deshabilitado</option>
                </select>
                <br/>
            <button onClick={handleEdit}>Guardar</button>
            <button onClick={handleDelete}>Eliminar</button>
            <Link to='/dashboard'><button>Cancelar</button></Link>
        </div>
    )
}