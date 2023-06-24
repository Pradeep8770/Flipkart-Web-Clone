import React, { useEffect } from "react";
import { useProductContext } from "../../context/Productcontaxt";
import { useParams } from "react-router-dom";
import "./product.css";
import data from "../../API/Data";
import singledata from "./singledata";

export default function SingleProduct() {

  const { product } = useParams();

  const SingleAPI = data.filter((element) => {
    return element.id === product;
  });

  // useEffect(() => {
  //   getSingleProduct(SingleAPI);
  //   console.log("callus");
  // });

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
 
    return (
      <div className="single-product">
        <div className="image-button">
          <div className="single-product-img">
            <div className="small-image">
              {image.map((element) => {
                return (
                  <>
                    <div>
                      <img src={element} alt="product iamge" />
                    </div>
                  </>
                );
              })}
            </div>
            <div className="main-image">
              <img src={image[1]} alt="mobile" />
            </div>
          </div>
          <div className="cartbutton">
            <div
              className="addbtn"
              value={id}
              onClick={(e) => {
                console.log(e.target);
              }}
            >
              <span>ADD TO CART</span>
            </div>
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
      </div>
    );
}
