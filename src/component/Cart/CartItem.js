import React from "react";
import singledata from "../../API/Singeldata";
export default function CartItem() {
  return (
    <>
      <div className="cart-item">
        <div className="wishlist">
          {singledata.map((element) => {
            return (
              <>
                <div className="img-and-btn">
                  <div className="img-cart">
                    <img src={element.image} />
                  </div>
                  <div className="quantity-bin">
                    <div className="increase-btn btn">+</div>
                    <div className="quantity">1</div>
                    <div className="increase-btn btn">-</div>
                  </div>
                </div>
                <div className="wishlist-text">
                  <h1>{element.title}</h1>
                  <p>{element.memory}</p>
                  <p>seller : superconnect</p>
                  <h2>
                    20000
                    <span>343434</span>
                    <span>12%%</span>
                  </h2>
                  <h4></h4>
                </div>
                <div className="wishlist-plc"></div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
