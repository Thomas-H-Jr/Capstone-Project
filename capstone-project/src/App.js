import React from "react";
import "./styles.css";
import Header from "./Header";
import Nav from "./Nav";
import Homepage from "./Homepage";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="navbar">
        <Header />
        <Nav />
      </div>
      <Homepage />
      <Footer />
    </>
  );
}

export default App;
