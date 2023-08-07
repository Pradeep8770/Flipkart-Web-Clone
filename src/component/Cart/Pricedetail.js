import React from "react";

export default function Pricedetail({ totalamount, cartProduct }) {
  return (
    <div className="price-detail">
      <h3> PRICE DETAILS</h3>
      <div className="details">
        <div>
          <span>Price ({cartProduct.length} Item)</span>
          <span>₹{parseInt(totalamount.toFixed(3).toString().replace(".", ""))}</span>
        </div>
        <div>
          <span>Discount</span>
          <span>
            ₹
            {parseInt(
              (totalamount.toFixed(3).toString().replace(".", "") * 12) / 100
            )}
          </span>
        </div>
        <div>
          <span>Delivery Charges</span>
          <span>{totalamount === 0 ? "₹0" : "₹40"}</span>
        </div>
        <div className="total-amount">
          <span>total amount</span>
          <span>
            ₹
            {totalamount === 0
              ? 0
              : (totalamount - (totalamount * 12) / 100)
                  .toFixed(3)
                  .toString()
                  .replace(".", ",")}
          </span>
        </div>
        <div>
          <span>
            you will save ₹
            {parseInt(
              (totalamount.toFixed(3).toString().replace(".", "") * 12) / 100
            )}{" "}
            in this order
          </span>
        </div>
      </div>
    </div>
  );
}
