import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./context/Productcontaxt";
import { FilterContextProvider } from "./context/Filtercontext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
    <FilterContextProvider>
      <App />
    </FilterContextProvider>
    </AppProvider>
  </React.StrictMode>
);
reportWebVitals();
