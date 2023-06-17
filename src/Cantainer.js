import React, { useState } from "react";
import data from "./API/Data";
import Sidebar from "./Sidebar";
import Parentdiv from "./Parentdiv";

export default function Cantainer() {
  const [mobile, setmobile] = useState(data);

  const filterItems = (e) => {
    const updatedItem = data.filter((Element) => {
      return Element.name === e;
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
