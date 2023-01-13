import React, { useContext, useEffect, useState } from "react";
import classes from "./Cart.module.css";
import iconimg from "../asset/bag.png";
import CarContext from "../store/CarContext";
import CartDetails from "./CartDetails/CartDetails";
import Checkout from "../Checkout/Checkout";

const Cart = () => {
  const ctx = useContext(CarContext);
  const [judge, setjudge] = useState(false);
  const [judgetwo, setjudgetwo] = useState("false");
  useEffect(() => {
    if (ctx.titalMount === 0) {
      setjudge(false);
      console.log("执行了");
    }
  }, [ctx.titalMount]);
  const CKvision = (e) => {
    e.stopPropagation();
    setjudgetwo("true");
  };
  const CKunvision = () => {
    setjudgetwo("false");
  };
  const visble = () => {
    if (ctx.titalMount === 0) {
      setjudge(false);
      return;
    }
    setjudge((item) => !item);
  };
  const prebug = () => {
    setjudge(false);
  };
  useEffect(() => {
    if (ctx.titalMount === 0) {
      setjudgetwo("false");
    }
  });
  return (
    <>
      <div className={classes.outer} onClick={() => visble()}>
        {judge && ctx.titalMount !== 0 && (
          <CartDetails prebug={prebug} visble={visble} />
        )}
        <div className={classes.paperbox}>
          <img src={iconimg} alt="" />

          {ctx.titalMount === 0 ? null : (
            <div className={classes.redbot}>
              {" "}
              <span>{ctx.titalMount}</span>{" "}
            </div>
          )}
        </div>
        {ctx.totalPrice === 0 ? (
          <span className={classes.null}>未选购商品</span>
        ) : (
          <span className={classes.allprice}> {ctx.totalPrice}</span>
        )}

        <button
          className={`${classes.btn} ${
            ctx.titalMount === 0 ? classes.disable : null
          }`}
          onClick={(e) => {
            CKvision(e);
          }}
        >
          去结算
        </button>
        {judgetwo == "true" && <Checkout comeback={CKunvision} />}
      </div>
    </>
  );
};

export default Cart;
