import React from "react";
import CartItem from "../CartItem/CartItem";
import Summary from "../Summary/Summary";
import classes from "./Cart.module.scss";
import { useSelector } from "react-redux";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const subtotal = useSelector((state) => state.cart.subtotal);

  return (
    <div className={classes.cart}>
      <span className={classes.cart__heading}>Order details</span>
      <div className={classes.cart__list}>
        <ul className={classes.cart__items}>
          {items.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}
        </ul>
      </div>
      <Summary total={subtotal} />
    </div>
  );
};

export default Cart;
