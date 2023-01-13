import React, { useContext } from "react";
import classes from "./Checkoutitem.module.css";
import Counter from "../ui/counter/Counter";
import CarContext from "../store/CarContext";
const Checkoutitem = (props) => {
  const ctx = useContext(CarContext);

  return (
    <div className={classes.outer}>
      <img src={props.meal.img} alt="" />
      <div className={classes.inside}>
        <header>{props.meal.title}</header>
        <div className={classes.number}>
          <div>
            <Counter meal={props.meal} />
          </div>
          <span>￥{`${props.meal.amount}` * `${props.meal.price}`}</span>
        </div>
      </div>
    </div>
  );
};

export default Checkoutitem;
