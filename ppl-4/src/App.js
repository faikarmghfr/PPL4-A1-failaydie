import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import LandingPage from "../src/Containers/LandingPage";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Login } from "./Containers";

function App() {
  return (
    <div className="Route">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/about" element={<Login />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
