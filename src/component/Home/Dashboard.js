import React, { useState } from "react";
import Product from "../../Product";
import Sidebar from "../../Sidebar";
import data from "../../API/Data";

export default function Dashboard() {
  const [mobile, setmobile] = useState(data);
  // console.log(mobile);

  const filterItems = (e) => {
    console.log(e.target.checked);
    
    if(e.target.checked==="false"){
      return e.target.checked = "false"
    }
    else{
      return e.target.checked = "false"
    }
    // const updatedItem = data.filter((Element) => {
    //   if (e.target.checked) {
    //     return Element.name === e.target.value;
    //   } else {
    //     return data;
    //   }
    // });
    // setmobile([...updatedItem]);
  };
console.log(filterItems);

  const sortbyPrice = (e) => {
    const price = e.target.value;
    console.log(price);
    const sortPrice = data.sort((a, b) => {
      if (price === "lowtohigh") {
        return a["price"] - b["price"];
      } else {
        return b["price"] - a["price"];
      }
    });
    setmobile([...sortPrice]);
  };

  return (
    <>
      <div className="dashboard container">
        <Sidebar filter={filterItems} PriceFilter={sortbyPrice} />
        <Product mobile={mobile} />
      </div>
    </>
  );
}
