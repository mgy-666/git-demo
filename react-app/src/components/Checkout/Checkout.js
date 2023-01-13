import React, { useContext } from "react";
import ReactDOM from "react-dom";
import classes from "./Checkout.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import CarContext from "../store/CarContext";
import Checkoutitem from "./Checkoutitem";
const checkout = document.getElementById("checkout");

const Checkout = (props) => {
  const ctx = useContext(CarContext);
  const back = () => {
    props.comeback();
  };
  return ReactDOM.createPortal(
    <div
      className={classes.outer}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div className={classes.mainbody}>
        <FontAwesomeIcon
          icon={faArrowAltCircleLeft}
          className={classes.icon}
          onClick={back}
        />
      </div>
      <div className={classes.mainpart}>
        <header>餐品详情</header>
        <div className={classes.list}>
          {" "}
          {ctx.items.map((item) => (
            <Checkoutitem key={item.id} meal={item} />
          ))}
        </div>
        <div className={classes.footer}>
          <span>合计￥{ctx.totalPrice}</span>
        </div>
      </div>
      <div className={classes.pay}>
        <div className={classes.num}>￥{ctx.totalPrice}</div>
        <button className={classes.btn}>去支付</button>
      </div>
    </div>,
    checkout
  );
};

export default Checkout;
