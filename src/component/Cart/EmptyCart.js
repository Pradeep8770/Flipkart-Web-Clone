import React from "react";

export default function EmptyCart() {
  return (
    <>
      <div className="empty-cart">
        <img
          src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
          alt="empty cart"
        />
        <h1>Missing Cart items ?</h1>
        <p>Add items to it now</p>
        <a href="#ej">
          <button className="empty-cart-btn">Shop Now</button>
        </a>
      </div>
    </>
  );
}
