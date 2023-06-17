import React from "react";

export default function Dashboard() {
  return (
    <>
      <div className="container dashboard">
          <aside className="side-bar">
            <div className="side-filters">
              <div className="mobile-filters">
                <legend>Filters</legend>
                <label >
                  <input type="checkbox" name="mobile"/>
                  Apple
                </label>
                <label >
                  <input type="checkbox" />
                  Apple
                </label>
                <label >
                  <input type="checkbox" />
                  Apple
                </label>
              </div>
              <button className="filter-btn">clear filter</button>
              <div className="price-filter">
                <legend>SORT BY</legend>
                <label>
                    <input type="checkbox" name="priceTracker"/>
                    Price - High To Low
                </label>
                <label>
                    <input type="checkbox" name="priceTracker"/>
                    Price - High to Low
                </label>
              </div>
              <button className="filter-btn">clear filter</button>
              <div className="stock-filter">
                <legend>Filter</legend>
                <label>
                    <input type="checkbox" name="stock"/>
                    out of stock
                </label>
                <label>
                    <input type="checkbox" name="stock"/>
                    Fast delivery only
                </label>
              </div>
            </div>
          </aside>
          <section className="parent-product-item">
            <a href="3" >
            <div className="product-item">
              <div className="phone-image">
                <img src="https://productimages.hepsiburada.net/s/18/280-413/9801258663986.jpg?v1"></img>
              </div>
              <div className="phone-about">
                <h2>mobiel name</h2>
                <li>dicription</li>
                <li>dicription</li>
                <li>dicription</li>
                <li>dicription</li>
                <li>dicription</li>
                <li>dicription</li>
              </div>
              <div className="phone-price">
                <p>
                  &
                  77,
                  0999
                  <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png" alt="flipkart"></img>
                </p>
                <li> 
                  $
                  99999
                </li>
                <span>10%off</span>
              </div>
            </div>

            </a>
          </section>
      </div>
    </>
  );
}
