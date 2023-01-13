import React from "react";
import Counter from "../../ui/counter/Counter";
import classes from "./Meal.module.css";
const Meal = (props) => {
  return (
    <div>
      <div className={classes.outer}>
        <img src={props.meal.img} alt="" />
        <div className={classes.descrip}>
          <div className={classes.textteam}>
            <p>{props.meal.title}</p>
            {props.nodes ? null : <span>{props.meal.desc}</span>}
          </div>
          <div className={classes.btnteam}>
            <span className={classes.mm}>{props.meal.price}</span>
            <Counter meal={props.meal} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meal;
