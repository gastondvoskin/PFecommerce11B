import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Nav from "./components/Nav/Nav.jsx";
import Detail from './views/Detail/Detail.jsx';
import Home from "./views/Home/Home.jsx";
import Basket from "./views/Basket/Basket.jsx";
import Login from "./views/Login/Login.jsx";
import NotFound from "./views/NotFound/NotFound.jsx";
import MyProfile from "./views/MyProfile/MyProfile.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ReduxExperiment from './views/ReduxExperiment';
import DashBoard from './views/DashBoard/DashBoard.jsx';
import HomeDB from './views/DashBoard/HomeDB.jsx';
import EditForm from './views/DashBoard/EditForm';



function App() {
  // console.log(Detail)

  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/basket" element={<Basket />} />
        <Route path='/dashboard' element={<HomeDB />} />
        <Route path='/dashboard/create' element={<DashBoard />} />
        <Route path='/dashboard/edit/:id' element={<EditForm />} />
        <Route path='/detail/:id' element={<Detail />} />

        <Route path="/reduxexperiment" element={<ReduxExperiment />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
};

export default App;