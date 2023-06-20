import React, { useState } from "react";
import Product from "../../Product";
import Sidebar from "../../Sidebar";
import data from "../../API/Data";

export default function Dashboard() {
  const [mobile, setmobile] = useState(data);

  const filterItems = (e) => {
    console.log(e.target.value);
    
    const updatedItem = data.filter((Element) => {
      if (e.target.checked){
        return Element.name === e.target.value;
      }else{
        return(data)
      }
    });
    setmobile(updatedItem);
  };

  return (
    <>
      <div className="dashboard container">
        <Sidebar filter={filterItems} />
        <Product mobile={mobile} />
      </div>
    </>
  );
}
