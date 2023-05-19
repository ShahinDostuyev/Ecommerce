import { Route, Routes } from "react-router-dom";
import React from 'react';

import Basket from "./pages/Basket";
import Products from "./pages/Products";
import ResponsiveAppBar from "./layouts/Header";
import HomePage from "./pages/HomePage";
import Login from "./sign/Login";
import Register from "./sign/Register";
import { createContext, useState } from "react";
import { Home } from "@mui/icons-material";

function App() {
  const [basketProducts, setbasketProducts] = useState("basket yeah");
  const BasketContext = createContext();

  return (
    <>
      <BasketContext.Provider value={basketProducts}>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/basket" element={<Basket />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </BasketContext.Provider>
    </>
  );
}

export default App;
