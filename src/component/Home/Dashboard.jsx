import React from "react";
import Product from "../../Product";
import Sidebar from "../../Sidebar";
import data from "../../API/Data";
import { useFilterContext } from "../../context/Filtercontext";
import SortFilter from "../Cart/Utilities/SortFilter";

export default function Dashboard() {
  const products = data;
  const { filterstate, filterdispatch } = useFilterContext();
  const { stock, fastdelivery, sortBy, productCompany, searchquery } = filterstate;
  const finalProduct = SortFilter(stock, fastdelivery, sortBy, productCompany, searchquery, products)
  console.log(filterstate.searchquery)


  const filterItems = (e) => {
    // console.log(e.target.category)
    filterdispatch({ type: "SORT", payload: e.target.value })
  };

  const sortbyPrice = (e) => {
    filterdispatch({ type: "SORT_BY_PRICE", payload: e.target.value })
  };

  const stockFilter = (e) => {
    if (e.target.value === "fastdelivery") {
      filterdispatch({ type: "FAST_DELIVRY", payload: e.target.value })
    } else {
      filterdispatch({ type: "SORT_BY_STOCK", payload: e.target.value })
    }
  }

  const clearFilter = (e) => {
    if (e === "clearCompany") {
      filterdispatch({ type: "CLEAR_BRAND" })
    } else if (e === "clearStockFilter") {
      filterdispatch({ type: "CLEAR_STOCK" })
    } else {
      filterdispatch({ type: "CLEAR_PRICE" })
    }
  }

  const toggledashboard = () => {
    const toggle = products.filter((elem) => {
      return elem.name.toLowerCase().includes(searchquery)
    })
    return toggle
  }

  // console.log("toggle", toggledashboard().length === 0)

  return (
    <>{
      toggledashboard().length === 0 ?
        <div className="container nodatadiv">
          <h1 className="nodata">No Data Found</h1>
        </div>
        :
        <div className="dashboard container">
          <Sidebar stock={stock} sortBy={sortBy} brand={productCompany} filter={filterItems} PriceFilter={sortbyPrice} stockFilter={stockFilter} clearFilter={clearFilter} />
          <Product mobile={finalProduct} />
        </div>
    }
    </>
  );
}
