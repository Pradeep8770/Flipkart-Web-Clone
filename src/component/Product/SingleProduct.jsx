import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCartContext } from "../../context/Cartcontext";
import "./product.css";
import data from "../../API/Data";

export default function SingleProduct() {
  const [imageindex,setimageindex]=useState(0)
  const { cartState, cartdispatch } = useCartContext()
  // console.log("st", { cartState })

  const { productid } = useParams();

  const SingleAPI = data.filter((element) => {
    return element.id === productid;
  });

  const {
    title,
    image,
    price,
    cpu,
    camera,
    size,
    weight,
    display,
    memory,
    id,
    instock,
  } = SingleAPI[0];

  const addTogle = () => {
    const cartItemid = cartState.cartItem.map((element) => {
      return element.id
    })
    // console.log(cartItemid)
    return cartItemid.includes(id)
  }

  return (
    <div className="single-product">
      <div className="image-button">
        <div className="single-product-img">
          <div className="small-image">
            {image.map((element,index) => {
              return (
                <>
                  <div>
                    <img src={element} alt="product iamge" onMouseOver={()=>setimageindex(index)}/>
                  </div>
                </>
              );
            })}
          </div>
          <div className="main-image">
            <img src={image[imageindex]} alt="mobile" />
          </div>
        </div>
        <div className="cartbutton">
          {addTogle()
            ?
            <Link to="/cart">
              <div
                className="addbtn"
                value={id}
              >
                <span>GO TO CART</span>
              </div>
            </Link>
            : <div
              className="addbtn"
              value={id}
              onClick={() => {
                cartdispatch({ type: "ADD_TO_CART", payload: id })
              }}
            >
              <span>ADD TO CART</span>
            </div>
          }

          <div className="buybtn">
            <span>BUY NOW</span>
          </div>
        </div>
      </div>
      <div className="cart-about">
        <div className="about">
          <h1>{title}</h1>
          <li>{memory}</li>
          <li>{display}</li>
          <li>{size}</li>
          <li>{camera}</li>
          <li>{cpu}</li>
          <li>{weight}</li>
          <li className="lg-price">₹{price.replace(".", ",")}</li>
          <li>{instock ? "instock" : "out of stock"}</li>
        </div>
        <div className="phone-price cart-mobiel-price">
          <p>
            ₹{price.replace(".", ",")}
            <img
              src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
              alt="flipkart"
            ></img>
          </p>
          <li>₹{(parseFloat(price) + parseFloat(price / 10)).toFixed(3)}</li>
          <span>10%off</span>
        </div>
        <div className="about-div">
          <p>
            Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit
            CardTC
            <br></br>
            Bank Offer20% off on 1st txn with Amex Network Cards issued by
            ICICI Bank,IndusInd Bank,SBI Cards and MobikwikTC
            <br></br>
            Bank Offer10% Off on First time ICICI Mastercard Credit Card
            transaction, Terms and Condition applyTC Special PriceExtra ₹1000
            off(price inclusive of discount)
          </p>
        </div>
      </div>
    </div >
  );
}
