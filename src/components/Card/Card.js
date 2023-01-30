import React from "react";
import classes from "./Card.module.scss";
import defaultImage from "../../images/default-image.png";

const Card = ({ item, onClick }) => {
  return (
    <li
      className={classes.card}
      onClick={() => {
        onClick(item);
      }}
    >
      <figure className={classes.card__figure}>
        {item.imageUrl ? (
          <img
            className={classes.card__image}
            src={item.imageUrl}
            alt={item.name}
          />
        ) : (
          <div className={classes.card__default_image}>
            <img className={classes.card_} src={defaultImage} alt="default" />
          </div>
        )}
      </figure>

      <div className={classes.card__description}>{item.description}</div>
      <div className={classes.card__price}>Ks {item.price}</div>
    </li>
  );
};

export default Card;
