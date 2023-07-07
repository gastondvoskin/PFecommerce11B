import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import "./App.css";
import Nav from "./clientComponents/Nav/Nav.jsx";
import Detail from "./clientViews/Detail/Detail.jsx";
import Home from "./clientViews/Home/Home.jsx";
import NotFound from "./clientViews/NotFound/NotFound.jsx";
import MyProfile from "./clientViews/MyProfile/MyProfile.jsx";
import Footer from "./clientComponents/Footer/Footer.jsx";
import EditForm from "./adminViews/EditFood/EditFood";
import AdminPanel from "./adminViews/AdminPanel/AdminPanel";
import CreateFood from "./adminViews/CreateFood/CreateFood";
import ShoppingCar from "./clientViews/ShoppingCar/ShoppingCar";
import Viandas from "./clientViews/Viandas/Viandas";
import PaymentStatus from "./clientViews/PaymentStatus/PaymentStatus";

function App() {
  const location = useLocation();

  return (
    <div className="app">
      {/* {!location.pathname.includes('/admin') && <Nav /> } */}
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/viandas" element={<Viandas />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/admin/*" element={<AdminPanel />} />
        <Route path="/admin/create" element={<CreateFood />} />
        <Route path="/admin/edit/:id" element={<EditForm />} />
        <Route path="/shoppingcart" element={<ShoppingCar />} />
        <Route path="/payment" element={<PaymentStatus />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!location.pathname.includes("/admin") && <Footer />}
    </div>
  );
}

export default App;
