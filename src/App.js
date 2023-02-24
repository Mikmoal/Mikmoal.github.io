import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import Inventory from "./components/Inventory.jsx";
import NewLaptop from "./components/NewLaptop.jsx";
import NewPhone from "./components/NewPhone.jsx";
import index from "./components/index.html";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage/>} />
      <Route exact path="/equipo/nuevo" element={<Inventory/>} />
      <Route exact path="/equipo/nuevo/laptop" element={<NewLaptop/>} />
      <Route exact path="/equipo/nuevo/telefono" element={<NewPhone/>} />
    </Routes>
  );
}

export default App;
