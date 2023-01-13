import React, { useContext } from "react";
import classes from "./Counter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import CarContext from "../../store/CarContext";
const Counter = (props) => {
  //添加购物车的函数
  const ctx = useContext(CarContext);
  const AddBtnHandler = (e) => {
    e.stopPropagation();
    ctx.cartdispatch({ type: "add", meal: props.meal });
  };
  const SubBtnHandler = (e) => {
    e.stopPropagation();
    ctx.cartdispatch({ type: "reduce", meal: props.meal });
  };
  return (
    <div className={classes.Counter}>
      {props.meal.amount && props.meal.amount >= 0 ? (
        <>
          <button
            className={classes.sub}
            onClick={(e) => {
              SubBtnHandler(e);
            }}
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <span>{props.meal.amount}</span>
        </>
      ) : null}
      <button
        className={classes.add}
        onClick={(e) => {
          AddBtnHandler(e);
        }}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default Counter;
