import React from 'react'

export default function Pricedetail({cartProduct}) {
    const price = cartProduct.map((item)=>item.price)
    let total = 0;
    price.forEach((num)=>{total+=parseFloat(num)})


  return (
    <div className="price-detail">
            <h3> PRICE DETAILS</h3>
            <div className="details">
              <div>
                <span>Price ({cartProduct.length} Item)</span>
                <span>₹{parseInt(total.toFixed(3).toString().replace(".",""))}</span>
              </div>
              <div>
                <span>Discount</span>
                <span>₹{parseInt((total).toFixed(3).toString().replace(".","")*12/100)}</span>
              </div>
              <div>
                <span>Delivery Charges</span>
                <span>{total===0 ? "₹0" : "₹40"}</span>
              </div>
              <div className="total-amount">
                <span>total amount</span>
                <span>₹{total===0? 0:(total - total*12/100).toFixed(3).toString().replace(".",",")}</span>
              </div>
              <div>
                <span>
                  you will save ₹{parseInt((total).toFixed(3).toString().replace(".","")*12/100)} in this order
                </span>
              </div>
            </div>
          </div>
  )
}
