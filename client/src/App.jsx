import { useEffect, useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import axios from "axios";
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
import OrderDetail from "./adminViews/OrderDetail/OrderDetail";
import UserOrder from "./clientViews/UserOrder/UserOrder";
import UserOrderDetail from "./clientViews/UserOrderDetail/UserOrderDetail";

function App() {
  const location = useLocation();

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const searchUserType = async () => {
      try {
        const response = await axios.get("/user", {
          params: {
            type: "Admin",
          },
        });
        const userAdmin = response.data;
        setIsAdmin(userAdmin.length > 0);
      } catch (error) {
        console.log("Error en la petición:", error);
      }
    };
    searchUserType();
  }, []);

  return (
    <div className="app">
      {!location.pathname.includes("/admin") && <Nav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/viandas" element={<Viandas />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/userorder/detail/:id" element={<UserOrderDetail />} />
        <Route path="/userorder" element={<UserOrder />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route
          path="/admin/*"
          element={isAdmin ? <AdminPanel /> : <Navigate to="/" />}
        />
        <Route
          path="/admin/create"
          element={isAdmin ? <CreateFood /> : <Navigate to="/" />}
        />
        <Route
          path="/order/detail/:id"
          element={isAdmin ? <OrderDetail /> : <Navigate to="/" />}
        />
        <Route
          path="/admin/edit/:id"
          element={isAdmin ? <EditForm /> : <Navigate to="/" />}
        />
        <Route path="/shoppingcart" element={<ShoppingCar />} />
        <Route path="/payment" element={<PaymentStatus />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!location.pathname.includes("/admin") && <Footer />}
    </div>
  );
}

export default App;
