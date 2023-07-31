import React from "react";
import "./cart.css";
import EmptyCart from "./EmptyCart";
import Wishlist from "./Wishlist";
import CartItems from "./CartItems";
import Pricedetail from "./Pricedetail";
import { useCartContext } from "../../context/Cartcontext";
import { useState } from "react";

export default function Cart() {
  const [quantity,setquantity]=useState(1)

  const { cartState, cartdispatch } = useCartContext();
  const cartProduct = cartState.cartItem;

  const cartTogle = () => {
    return cartProduct.length === 0;
  };
  
  const wishlistToggle = () => {
    return cartState.wishlistItem.length !== 0;
  };

  const setIncrease=()=>{setquantity(quantity+1)}
  const setDecrease=()=>{quantity>1? setquantity(quantity-1):setquantity(1)}

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
              <CartItems
                cartProduct={cartProduct}
                cartdispatch={cartdispatch}
                setIncrease={setIncrease}
                setDecrease={setDecrease}
                quantity={quantity}
              />
            )}
            {cartTogle() ? null : (
              <div className="order-place">
                <button>Place order</button>
              </div>
            )}
          </div>
          <div className="cart-wishlist">
            {wishlistToggle() ? (
              <Wishlist
                wishlistItem={cartState.wishlistItem}
                cartdispatch={cartdispatch}
                WishlisbtnToggle={wishlistToggle()}
              />
            ) : null}
          </div>
        </div>
        <div className="price-section">
          <Pricedetail cartProduct={cartProduct}/>
        </div>
      </div>
    </>
  );
}
