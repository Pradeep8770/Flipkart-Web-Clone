import React from "react";
import "./cart.css";
import EmptyCart from "./EmptyCart";
import Wishlist from "./Wishlist";

export default function Cart() {
  return (
    <>
      <div className="parent-cart">
        <div className="cart">
          <div className="up-cart">
            <h1>My Cart</h1>
            <div className="pincode">
              <h2>Enter pincode</h2>
            </div>
          </div>
          <div className="middle-cart">
            <EmptyCart/>
          </div>
        </div>
        <div className="cart-wishlist">
          <Wishlist/>
        </div>
      </div>
    </>
  );
}
