import React from "react";
import ReactDOM from "react-dom";
import classes from "./Backdrop.module.css";
const backdrop = document.getElementById("backdrop");
const Backdrop = (props) => {
  return ReactDOM.createPortal(
    <div className={`${classes.drop} ${props.className}`}>
      {props.children}
    </div>,
    backdrop
  );
};

export default Backdrop;
