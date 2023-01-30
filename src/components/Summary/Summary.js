import React from "react";
import classes from "./Summary.module.scss";
import Button from "../widgets/Button/Button";
import { useDispatch } from "react-redux";
import { toastActions } from "../../store/toastSlice";
import { cartActions } from "../../store/cartSlice";
import { v4 as uuidv4 } from "uuid";

const Summary = ({ total }) => {
  const dispatch = useDispatch();

  const tax = 0.05 * total;
  const grandTotal = total + tax;

  const handlePay = () => {
    if (total !== 0) {
      dispatch(cartActions.clear());
      dispatch(
        toastActions.add({
          id: uuidv4(),
          status: "success",
          message: "Your order has been sent!",
        })
      );
    } else {
      dispatch(
        toastActions.add({
          id: uuidv4(),
          status: "error",
          message: "Please add items to cart",
        })
      );
    }
  };

  return (
    <div className={classes.summary}>
      <div className={classes.summary__box}>
        <div className={classes.summary__subtotal}>
          <span>Subtotal</span>
          <span>Ks {total}</span>
        </div>
        <div className={classes.summary__tax}>
          <span>Tax (5%)</span>
          <span>Ks {tax}</span>
        </div>
      </div>
      <div className={classes.summary__total}>
        <span>Total</span>
        <span>Ks {grandTotal}</span>
      </div>

      <Button title="Pay Now" onClick={handlePay} />
    </div>
  );
};

export default Summary;
