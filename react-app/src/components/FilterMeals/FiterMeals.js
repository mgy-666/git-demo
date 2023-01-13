import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import classes from "./FiterMeals.module.css";
const FiterMeals = (props) => {
  const [keyword, setkeyword] = useState("");
  const filter = (e) => {
    setkeyword(e.target.value.trim());
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      props.Filterfunction(keyword);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [keyword]);
  return (
    <div>
      <div className={classes.Outputer}>
        <FontAwesomeIcon icon={faSearch} className={classes.icon} />
        <input
          value={keyword}
          typeof="text"
          placeholder="请输入食物"
          className={classes.inp}
          onChange={filter}
        />
      </div>
    </div>
  );
};

export default FiterMeals;
