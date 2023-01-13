import React, { useContext } from "react";
import Backdrop from "../ui/Backdrop/Backdrop";
import classes from "./Comfirm.module.css";
import CarContext from "../store/CarContext";
const Comfirm = (props) => {
  const ctx = useContext(CarContext);
  return (
    <Backdrop className={classes.drop}>
      <div className={classes.outer}>
        <span className={classes.text}> 确认是否清空购物车</span>
        <div className={classes.btnteam}>
          <button
            className={classes.cancel}
            onClick={() => {
              props.oncancel();
            }}
          >
            取消
          </button>
          <button
            className={classes.ok}
            onClick={(e) => {
              props.onok(e);
            }}
          >
            确认
          </button>
        </div>
      </div>
    </Backdrop>
  );
};

export default Comfirm;
