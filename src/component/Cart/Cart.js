import React from "react";
import "./cart.css";
import EmptyCart from "./EmptyCart";
import Wishlist from "./Wishlist";
import CartItems from "./CartItems";
import Pricedetail from "./Pricedetail";
import { useCartContext } from "../../context/Cartcontext";

export default function Cart() {
  const { cartState, cartdispatch } = useCartContext();
  const cartProduct = cartState.cartItem;
  console.log({ cartState });

  const cartTogle = () => {
    return cartProduct.length === 0;
  };

  const wishlistToggle = () => {
    return cartState.wishlistItem.length !== 0;
  };

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
                totalamount={cartState.totalamount}
              />
            )}
            {cartTogle() ? null : (
              <div className="order-place">
                <button>Place order</button>
              </div>
            )}
          </div>
          {cartTogle() ?
            null
            :
            <div className="price-section price-section-1000">
              <Pricedetail totalamount={cartState.totalamount} cartProduct={cartProduct} />
            </div>}
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
          <Pricedetail totalamount={cartState.totalamount} cartProduct={cartProduct} />
        </div>
      </div>
    </>
  );
}
