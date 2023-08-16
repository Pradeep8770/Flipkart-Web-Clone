import React from "react";
import CartItems from "./CartItems";

export default function Wishlist({wishlistItem,WishlisbtnToggle,cartdispatch,quantity}) {
  // const wishlistItem = cartState.wishlistItem
  return (
    <>
      <div className="cart">
        <div className="up-cart">
          <h1>SAVE FOR LATER</h1>
        </div>
        <CartItems cartProduct={wishlistItem} wishlistToggle={WishlisbtnToggle} cartdispatch={cartdispatch} quantity={quantity}/>
      </div>
    </>
  );
}
