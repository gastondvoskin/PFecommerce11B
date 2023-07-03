import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import './App.css';
import Nav from "./clientComponents/Nav/Nav.jsx";
import Detail from './clientViews/Detail/Detail.jsx';
import Home from "./clientViews/Home/Home.jsx";
import NotFound from "./clientViews/NotFound/NotFound.jsx";
import MyProfile from "./clientViews/MyProfile/MyProfile.jsx";
import Footer from "./clientComponents/Footer/Footer.jsx";
import EditForm from './adminViews/EditFood/EditFood';
import AdminPanel from './adminViews/AdminPanel/AdminPanel';
import CreateFood from './adminViews/CreateFood/CreateFood';
import ShoppingCar from './clientViews/ShoppingCar/ShoppingCar';
import axios from "axios";

axios.defaults.baseURL = "https://pfecommerce11b-production-177a.up.railway.app";
// axios.defaults.baseURL = "http://localhost:3001";
// axios.defaults.baseURL = process.env.VITE_APP_API || "http://localhost:3001";


function App() {
  const location = useLocation()

  return (
    <div className="app">
      {/* {!location.pathname.includes('/admin') && <Nav /> } */} 
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path="/admin/*" element={<AdminPanel />} />
        <Route path='/admin/create' element={<CreateFood/>} /> 
        <Route path='/admin/edit/:id' element={<EditForm />} />
        <Route path='/shoppingcart' element={<ShoppingCar />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!location.pathname.includes('/admin') && <Footer/> }
    </div>
  )
};

export default App;