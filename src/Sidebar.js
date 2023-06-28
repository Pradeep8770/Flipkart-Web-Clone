import React from "react";

export default function Sidebar({ filter, PriceFilter}) {
  return (
    <>
      <aside className="side-bar">
        <div className="side-filters">
          <div className="mobile-filters">
            <legend>Filters</legend>
            <label>
              <input
                type="checkbox"
                name="category"
                value="apple"
                onChange={(e) => filter(e)}
              />
              Apple
            </label>
            <label>
              <input
                type="checkbox"
                name="category"
                value="huawei"
                onChange={(e) => filter(e)}
              />
              Huawei
            </label>
            <label>
              <input
                type="checkbox"
                name="category"
                value="meizu"
                onChange={(e) => filter(e)}
              />
              Meizu
            </label>
            <label>
              <input
                type="checkbox"
                name="category"
                value="samsung"
                onChange={(e) => filter(e)}
              />
              Samsung
            </label>
            <label>
              <input
                type="checkbox"
                name="category"
                value="vestel"
                onChange={(e) => filter(e)}
              />
              Vestel
            </label>
            <label>
              <input
                type="checkbox"
                name="category"
                value="xiaomi"
                onChange={(e) => filter(e)}
              />
              Xiaomi
            </label>
            <label>
              <input
                type="checkbox"
                name="category"
                value="asus"
                onChange={(e) => filter(e)}
              />
              Asus
            </label>
          </div>
          <button className="filter-btn">clear filter</button>
          <div className="price-filter">
            <legend>SORT BY</legend>
            <label>
              <input type="checkbox" name="priceTracker" value="lowtohigh" onChange={(e)=>{PriceFilter(e)}}/>
              Price - Low To High
            </label>
            <label>
              <input type="checkbox" name="priceTracker" value="hightolow" onChange={(e)=>{PriceFilter(e)}} />
              Price - High to Low
            </label>
          </div>
          <button className="filter-btn">clear filter</button>
          <div className="stock-filter">
            <legend>Filter</legend>
            <label>
              <input type="checkbox" name="stock" />
              out of stock
            </label>
            <label>
              <input type="checkbox" name="stock" />
              Fast delivery only
            </label>
          </div>
        </div>
      </aside>
    </>
  );
}
