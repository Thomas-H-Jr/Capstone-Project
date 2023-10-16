import React from "react";
import "./styles.css";
import Header from "./Header";
import Nav from "./Nav";
import HomePage from "./Homepage";
import Footer from "./Footer";
import AboutPage from "./Aboutpage"
import MenuPage from "./Menupage"
import ReservationsPage from "./Reservationspage"
import OrderPage from './OrderPage'
import LoginPage from './Loginpage'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="navbar">
        <Header />
        <Nav />
      </div>
      <Routes>
      <Route path="home" element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="menu" element={<MenuPage />} />
      <Route path="reservations" element={<ReservationsPage />} />
      <Route path="order-online" element={<OrderPage />} />
      <Route path="login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
