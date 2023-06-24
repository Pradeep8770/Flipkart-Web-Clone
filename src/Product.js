import React from "react";
import { NavLink } from "react-router-dom";
export default function Product({ mobile }) {
  return (
    <>
      <section className="parent-product-item">
        {mobile.map((Element, index) => {
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
          } = Element;

          return (
            <NavLink to={`/singleproduct/${id}`} key={id}>
              <div className="product-item">
                <div className="phone-image">
                  <img src={image} alt="product"></img>
                </div>
                <div className="phone-about">
                  <h2>{title}</h2>
                  <li>{memory}</li>
                  <li>{display}</li>
                  <li>{size}</li>
                  <li>{camera}</li>
                  <li>{cpu}</li>
                  <li>{weight}</li>
                  <li>product : {instock ? "instock" : "out of stock"}</li>
                </div>
                <div className="phone-price">
                  <p>
                    ₹{price.replace(".", ",")}
                    <img
                      src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
                      alt="flipkart"
                    ></img>
                  </p>
                  <li>
                    ₹{(parseFloat(price) + parseFloat(price / 10)).toFixed(3)}
                  </li>
                  <span>10%off</span>
                </div>
              </div>
            </NavLink>
          );
        })}
      </section>
    </>
  );
}
