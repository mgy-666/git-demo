import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
document.documentElement.style.fontSize = 100 / 1000 + "vw";
//width为1000rem
const root = ReactDOM.createRoot(document.getElementById("root"));
const Appone = <App />;
root.render(Appone);
