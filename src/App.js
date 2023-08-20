import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Cart from "./component/Cart/Cart";
import Dashboard from "./component/Home/Dashboard";
import SingleProduct from "./component/Product/SingleProduct";
import Login from "./component/Login/Login";
import PrivateRoute from "./Auothentication/PrivateRoute";

export default function App() {
  const [loginState, setloginState] = useState(false)
  console.log({ loginState })
  // useEffect(() => { }, [loginState])
  return (
    <>
      <BrowserRouter>
        <Navbar setloginState={setloginState} />
        <Login loginState={loginState} setloginState={setloginState} />
        <Routes>
          <Route path="/singleproduct/:productid" element={<SingleProduct />} />
          <Route
            path="/cart"
            element={
              <PrivateRoute>
                <Cart />
              </PrivateRoute>
            }
          />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
