import React from "react";

export default function Sidebar({ filter }) {
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
                onChange={(e) => filter(e.target.value)}
              />
              Apple
            </label>
            <label>
              <input
                type="checkbox"
                name="category"
                value="huawei"
                onChange={(e) => filter(e.target.value)}
              />
              Huawei
            </label>
            <label>
              <input
                type="checkbox"
                name="category"
                value="meizu"
                onChange={(e) => filter(e.target.value)}
              />
              Meizu
            </label>
            <label>
              <input
                type="checkbox"
                name="category"
                value="samsung"
                onChange={(e) => filter(e.target.value)}
              />
              Samsung
            </label>
            <label>
              <input
                type="checkbox"
                name="category"
                value="vestel"
                onChange={(e) => filter(e.target.value)}
              />
              Vestel
            </label>
            <label>
              <input
                type="checkbox"
                name="category"
                value="xiaomi"
                onChange={(e) => filter(e.target.value)}
              />
              Xiaomi
            </label>
            <label>
              <input
                type="checkbox"
                name="category"
                value="asus"
                onChange={(e) => filter(e.target.value)}
              />
              Asus
            </label>
          </div>
          <button className="filter-btn">clear filter</button>
          <div className="price-filter">
            <legend>SORT BY</legend>
            <label>
              <input type="checkbox" name="priceTracker" />
              Price - High To Low
            </label>
            <label>
              <input type="checkbox" name="priceTracker" />
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
