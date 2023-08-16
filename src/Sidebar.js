import React from "react";

export default function Sidebar({
  stock,
  filter,
  PriceFilter,
  stockFilter,
  clearFilter,
  brand,
  sortBy,
}) {
  // console.log("stock", stock);
  return (
    <>
      <aside className="side-bar">
        <div className="side-filters">
          <div className="mobile-filters">
            <legend>Brand</legend>
            <label>
              <input
                type="checkbox"
                name="category"
                value="apple"
                checked={brand === "apple"}
                onChange={(e) => filter(e)}
              />
              Apple
            </label>
            <label>
              <input
                type="checkbox"
                name="category"
                value="huawei"
                checked={brand === "huawei"}
                onChange={(e) => filter(e)}
              />
              Huawei
            </label>
            <label>
              <input
                type="checkbox"
                name="category"
                value="meizu"
                checked={brand === "meizu"}
                onChange={(e) => filter(e)}
              />
              Meizu
            </label>
            <label>
              <input
                type="checkbox"
                name="category"
                value="samsung"
                checked={brand === "samsung"}
                onChange={(e) => filter(e)}
              />
              Samsung
            </label>
            <label>
              <input
                type="checkbox"
                name="category"
                value="vestel"
                checked={brand === "vestel"}
                onChange={(e) => filter(e)}
              />
              Vestel
            </label>
            <label>
              <input
                type="checkbox"
                name="category"
                value="xiaomi"
                checked={brand === "xiaomi"}
                onChange={(e) => filter(e)}
              />
              Xiaomi
            </label>
            <label>
              <input
                type="checkbox"
                name="category"
                value="asus"
                checked={brand === "asus"}
                onChange={(e) => filter(e)}
              />
              Asus
            </label>
          </div>
          <button
            className="filter-btn"
            value="clearCompany"
            onClick={(e) => {
              clearFilter(e.target.value);
            }}
          >
            clear filter
          </button>
          <div className="price-filter">
            <legend>SORT BY</legend>
            <label>
              <input
                type="checkbox"
                name="priceTracker"
                value="lowtohigh"
                checked={sortBy === "lowtohigh"}
                onChange={(e) => {
                  PriceFilter(e);
                }}
              />
              Price - Low To High
            </label>
            <label>
              <input
                type="checkbox"
                name="priceTracker"
                value="hightolow"
                checked={sortBy === "hightolow"}
                onChange={(e) => {
                  PriceFilter(e);
                }}
              />
              Price - High to Low
            </label>
          </div>
          <button
            className="filter-btn"
            value="clearPrice"
            onClick={(e) => {
              clearFilter(e.target.value);
            }}
          >
            clear filter
          </button>
          <div className="stock-filter">
            <legend>Filter</legend>
            <label>
              <input
                type="checkbox"
                name="stock"
                value={"outofstock"}
                checked={stock === "outofstock"}
                onChange={(e) => {
                  stockFilter(e);
                }}
              />
              out of stock
            </label>
            <label>
              <input
                type="checkbox"
                name="stock"
                value={"instock"}
                checked={stock === "instock"}
                onChange={(e) => {
                  stockFilter(e);
                }}
              />
              In stock
            </label>
            <button
              className="filter-btn"
              value="clearStockFilter"
              onClick={(e) => {
                clearFilter(e.target.value);
              }}
            >
              clear filter
            </button>
            <label>
              <input
                type="checkbox"
                name="stock"
                value={"fastdelivery"}
                onChange={(e) => {
                  stockFilter(e);
                }}
              />
              Fast delivery only
            </label>
          </div>
        </div>
      </aside>
    </>
  );
}
