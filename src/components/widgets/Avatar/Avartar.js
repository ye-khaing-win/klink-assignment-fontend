import React from "react";

import classes from "./Avatar.module.scss";

const Avatar = ({
  name = "Ye Khaing Win",
  imageUrl,
  height = "42px",
  width = "42px",
}) => {
  return (
    <div className={classes.avatar}>
      <img
        className={classes.avatar__image}
        src={imageUrl}
        alt={name}
        style={{ height, width }}
      />
    </div>
  );
};

export default Avatar;
