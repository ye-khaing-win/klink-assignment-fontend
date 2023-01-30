import React from "react";
import classes from "./Close.module.scss";
import icons from "../../../images/icons.svg";

const Close = ({ onClose }) => {
  return (
    <div className={classes.close} onClick={onClose}>
      <svg className={classes.close__icon}>
        <use xlinkHref={`${icons}#icon-close`}></use>
      </svg>
    </div>
  );
};

export default Close;
