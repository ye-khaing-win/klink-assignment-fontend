import React from "react";
import classes from "./Button.module.scss";

const Button = ({ title, width, onClick }) => {
  return (
    <button className={classes.button} style={{ width }} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
