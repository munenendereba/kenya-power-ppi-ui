import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from "./App";
import InterruptionsTable from "./InterruptionsTable";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

const tableContents = ReactDOM.createRoot(
  document.getElementById("tableContent")
);

tableContents.render(
  <React.StrictMode>
    <InterruptionsTable />
  </React.StrictMode>
);

reportWebVitals();
