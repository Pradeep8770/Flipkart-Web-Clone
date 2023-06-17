import React from 'react'

export default function Sidebar() {
  return (
   <>
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
                  Huawei
                </label>
                <label >
                  <input type="checkbox" />
                  Meizu
                </label>
                <label >
                  <input type="checkbox" />
                  Samsung
                </label>
                <label >
                  <input type="checkbox" />
                  Vestel
                </label>
                <label >
                  <input type="checkbox" />
                  Xiaomi
                </label>
                <label >
                  <input type="checkbox" />
                  Asus
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
   </>
  )
}
