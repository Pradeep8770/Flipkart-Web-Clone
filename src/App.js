import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Cart from "./component/Cart/Cart";
import Dashboard from "./component/Home/Dashboard";
import SingleProduct from "./component/Product/SingleProduct";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/singleproduct/:productid" element={<SingleProduct/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route exact path="/" element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
