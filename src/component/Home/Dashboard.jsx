import React, { useState } from "react";
import Product from "../../Product";
import Sidebar from "../../Sidebar";
import data from "../../API/Data";
import { useFilterContext } from "../../context/Filtercontext";
import SortFilter from "../Cart/Utilities/SortFilter";

export default function Dashboard() {
  const [mobile, setmobile] = useState(data);
  const {state,setState}=useFilterContext();
  const {fastdelivery,sortBy,productCompany}=state;
  console.log(fastdelivery)
  const finalMobile =SortFilter(fastdelivery,sortBy,productCompany,mobile)
  console.log(finalMobile)

  ///////////demo  demo demo ///////;////
  ///////////demo  demo demo ///////;////

  const filterItems = (e) => {
    setState({type:"SORT", payload:e.target.value})
  };

  const sortbyPrice = (e) => {
    setState({type:"SORT_BY_PRICE", payload:e.target.value})
  };

  const stockFilter =(e)=>{
    setState({type:"SORT_BY_STOCK", payload:e.target.value})
  }


  ///////////demo  demo demo ///////;////
  ///////////demo  demo demo ///////;////

  // const filterItems = (e) => {
  //   console.log(e.target.checked);
  //   setmobile([...data]);

  //   const updatedItem = data.filter((Element) => {
  //     if (e.target.checked) {
  //       return Element.name === e.target.value;
  //     } else {
  //       return data;
  //     }
  //   });
  //   setmobile([...updatedItem]);
  // };

  // const sortbyPrice = (e) => {
  //   const price = e.target.value;
  //   console.log(price);
  //   const sortPrice = mobile.sort((a, b) => {
  //     if (price === "lowtohigh") {
  //       return a["price"] - b["price"];
  //     } else {
  //       return b["price"] - a["price"];
  //     }
  //   });
  //   setmobile([...sortPrice]);
  // };

  // const stockFilter =(e)=>{
  //   const stock = mobile.filter((stock)=>{
  //     if(e.target.value === "outofstock"){
  //       return stock.instock ===! "true"
  //     }else{
  //       return stock.delivery === "1 day"
  //     }
  //   })
  //   setmobile(stock)

  // }

  return (
    <>
      <div className="dashboard container">
        <Sidebar filter={filterItems} PriceFilter={sortbyPrice} stockFilter={stockFilter} />
        <Product mobile={finalMobile} />
      </div>
    </>
  );
}
