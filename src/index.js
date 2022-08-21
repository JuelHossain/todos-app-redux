import axios from "axios";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
axios.defaults.baseURL = "https://reduxtodojuelhossain.herokuapp.com/";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
