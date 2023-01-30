import React from "react";
import icons from "../../../images/icons.svg";
import classes from "./Ratings.module.scss";

const Ratings = () => {
  return (
    <div className={classes.ratings}>
      {[...Array(5)].map(() => (
        <svg className={classes.ratings__icon}>
          <use xlinkHref={`${icons}#icon-star`}></use>
        </svg>
      ))}
    </div>
  );
};

export default Ratings;
