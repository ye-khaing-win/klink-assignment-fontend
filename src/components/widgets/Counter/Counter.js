import React from "react";
import classes from "./Counter.module.scss";

const Counter = ({ item, onClickIncre, onClickDecre }) => {
  return (
    <div className={classes.counter}>
      <span className={classes.counter__dec} onClick={onClickDecre}>
        -
      </span>
      <span className={classes.counter__count}>{item.count}</span>
      <span className={classes.counter__inc} onClick={onClickIncre}>
        +
      </span>
    </div>
  );
};

export default Counter;
