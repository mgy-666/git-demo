import React, { useContext, useState } from "react";
import classes from "./CartDetails.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faL, faTrash } from "@fortawesome/free-solid-svg-icons";
import Backdrop from "../../ui/Backdrop/Backdrop";
import CarContext from "../../store/CarContext";
import Meal from "../../Meals/Meal/Meal";
import Comfirm from "../../Comfirm/Comfirm";
const CartDetails = (props) => {
  const [judge, setjudge] = useState(false);

  const Cfvision = (e) => {
    e.stopPropagation();
    setjudge(true);
  };
  const close = () => {
    props.visble();
  };
  const cancel = () => {
    setjudge(false);
  };

  const ctx = useContext(CarContext);
  const ok = (e) => {
    e.stopPropagation();
    ctx.cartdispatch({ type: "clear" });
    setjudge(false);
    props.prebug();
  };
  const prebug = (e) => {
    e.stopPropagation();
    console.log("执行");
  };
  return (
    <>
      <Backdrop>
        {judge && <Comfirm oncancel={cancel} onok={ok}></Comfirm>}
        <div className={classes.outer} onClick={prebug}>
          <div className={classes.header}>
            <header>餐品详情</header>

            <span onClick={(e) => Cfvision(e)}>
              {" "}
              <FontAwesomeIcon icon={faTrash} className={classes.icon} />
              清空购物车
            </span>
          </div>
          <div className={classes.meallist}>
            {ctx.items.map((item) => (
              <Meal key={item.id} meal={item} nodes={"mm"} />
            ))}
          </div>
        </div>
      </Backdrop>
    </>
  );
};

export default CartDetails;
