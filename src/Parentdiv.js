import React from "react";
export default function Parentdiv({ mobile }) {
  return (
    <>
      <section className="parent-product-item">
        {mobile.map((Element, index) => {
          const {
            title,
            catagory,
            image,
            name,
            price,
            cpu,
            camera,
            size,
            weight,
            display,
            battery,
            memory,
            id,
            delivery,
            instock,
            discription,
          } = Element;
          return (
            <a href="3" key={id}>
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
            </a>
          );
        })}
      </section>
    </>
  );
}
