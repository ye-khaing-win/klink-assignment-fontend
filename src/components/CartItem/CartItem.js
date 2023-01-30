import React from "react";
import Close from "../widgets/Close/Close";
import Counter from "../widgets/Counter/Counter";
import classes from "./CartItem.module.scss";
import defaultImage from "../../images/default-image.png";
import { cartActions } from "../../store/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleClickIncre = () => {
    dispatch(cartActions.increaseCount(item));
  };

  const handleClickDecre = () => {
    dispatch(cartActions.decreaseCount(item));
  };

  const handleClose = () => {
    dispatch(cartActions.removeFromCart(item));
  };

  return (
    <li className={classes.cart_item}>
      <span className={classes.cart_item__close}>
        <Close onClose={handleClose} />
      </span>
      <figure className={classes.cart_item__figure}>
        {item.imageUrl ? (
          <img
            className={classes.cart_item__image}
            src={item.imageUrl}
            alt={item.name}
          />
        ) : (
          <div className={classes.cart_item__default_image}>
            <img className={classes.card_} src={defaultImage} alt="default" />
          </div>
        )}
      </figure>
      <div className={classes.cart_item__content}>
        <div className={classes.cart_item__description}>{item.description}</div>
        <div className={classes.cart_item__price}>
          <Counter
            item={item}
            onClickIncre={handleClickIncre}
            onClickDecre={handleClickDecre}
          />
          <span>Ks {item.totalPrice}</span>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
