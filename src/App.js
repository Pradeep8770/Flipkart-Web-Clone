import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Cart from "./component/Cart/Cart";
import Dashboard from "./component/Home/Dashboard";
import SingleProduct from "./component/Product/SingleProduct";
import Login from "./component/Login/Login";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Login/>
        <Routes>
          <Route path="/singleproduct/:productid" element={<SingleProduct/>} />
          <Route exact path="/" element={<Dashboard/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
