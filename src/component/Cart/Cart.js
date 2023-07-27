import React from "react";
import "./cart.css";
import EmptyCart from "./EmptyCart";
import Wishlist from "./Wishlist";
import CartItems from "./CartItems";
import { useCartContext } from "../../context/Cartcontext";

export default function Cart() {
  const { cartState, cartdispatch } = useCartContext();
  const cartProduct = cartState.cartItem;
  console.log("togel", cartProduct.length);
  const cartTogle = () => {
    return cartProduct.length === 0;
  };
  console.log("cc", cartTogle());
  return (
    <>
      <div className="main-cart-div">
        <div className="parent-cart">
          <div className="cart">
            <div className="up-cart">
              <h1>My Cart</h1>
              <div className="pincode">
                <h2>Enter pincode</h2>
              </div>
            </div>
            {cartTogle() ? (
              <EmptyCart />
            ) : (
              <CartItems cartState={cartState} cartdispatch={cartdispatch} />
            )}
            {cartTogle() ?null:<div className="order-place">
              <button>Place order</button>
            </div>}
          </div>
          <div className="cart-wishlist">
            <Wishlist />
          </div>
        </div>
        <div className="price-detail">
          <h3> PRICE DETAILS</h3>
          <div className="details">
            <div>
              <span>Price(dff)</span>
              <span>amount</span>
            </div>
            <div>
              <span>Discount</span>
              <span>amount</span>
            </div>
            <div>
              <span>Delivery Charges</span>
              <span>amount</span>
            </div>
            <div>
              <span>total amount</span>
              <span>amount</span>
            </div>
            <span>you will save in this order</span>
          </div>
        </div>
      </div>
    </>
  );
}
