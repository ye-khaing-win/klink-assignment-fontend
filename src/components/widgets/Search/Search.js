import React from "react";
import icons from "../../../images/icons.svg";
import classes from "./Search.module.scss";

const Search = ({ onSearch }) => {
  return (
    <div className={classes.search}>
      <input
        type="text"
        className={classes.search__input}
        onChange={onSearch}
      />

      <button className={classes.search__button}>
        <svg className={classes.search__icon}>
          <use xlinkHref={`${icons}#icon-search`}></use>
        </svg>
      </button>
    </div>
  );
};

export default Search;
