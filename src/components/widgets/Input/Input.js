import React from "react";
import classes from "./Input.module.scss";

const Input = ({ label, placeholder, type, onChange, hasError }) => {
  return (
    <div className={classes.input}>
      <label
        className={classes.input__label}
        style={{ color: hasError && "red" }}
      >
        {label}
      </label>
      <input
        className={classes.input__input}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        style={{ borderColor: hasError ? "red" : "#1018280d" }}
      ></input>
    </div>
  );
};

export default Input;
