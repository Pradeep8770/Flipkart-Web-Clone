import React, { useState } from "react";
import data from "./API/Data";
import Sidebar from "./Sidebar";
import Parentdiv from "./Parentdiv";

export default function Cantainer() {
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
        <Parentdiv mobile={mobile} />
      </div>
    </>
  );
}
