import React from "react";

export default function Wishlist() {
  return (
    <>
      <div className="cart">
        <div className="up-cart">
          <h1>SAVE FOR LATER</h1>
        </div>
        <div className="wishlist">
          <div className="img-and-btn">
            <div className="img-cart">
              <img src="" />
            </div>
            <div className="quantity-bin">
              <div className="increase-btn btn">+</div>
              <div className="quantity">1</div>
              <div className="increase-btn btn">-</div>
            </div>
          </div>
          <div className="wishlist-text">
            <h1>apple</h1>
            <p>jfdjf</p>
            <p>jfdjf</p>
            <h2>20000
                <span>343434</span>
                <span>12%%</span>
            </h2>
            <h4></h4>
          </div>
          <div className="wishlist-plc"></div>
        </div>
      </div>
    </>
  );
}
