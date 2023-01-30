import React, { useState, useEffect } from "react";
import Categories from "../Categories/Categories";
import Card from "../Card/Card";
import classes from "./Board.module.scss";
import * as productActions from "../../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { useAuthHeader } from "react-auth-kit";
import { cartActions } from "../../store/cartSlice";

const Borad = () => {
  const [currentCat, setCurrentCat] = useState("All");
  const searchedValue = useSelector((state) => state.search.value);

  const authHeader = useAuthHeader();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  const token = authHeader();

  const categorizedProducts =
    currentCat === "All"
      ? products
      : products.filter(
          (product) =>
            product.categoryId.name.toLowerCase() === currentCat.toLowerCase()
        );

  const searchedProducts = categorizedProducts.filter((product) =>
    product.description.toLowerCase().includes(searchedValue.toLowerCase())
  );

  const handleSelectCat = (val) => {
    setCurrentCat(val);
  };

  const handleClickCard = (item) => {
    dispatch(cartActions.addToCart(item));
  };

  useEffect(() => {
    dispatch(productActions.getAll(token, "populate=categoryId"));
  }, [dispatch, token]);

  return (
    <section className={classes.board}>
      <Categories onSelectCat={handleSelectCat} />
      <div className={classes.board__list}>
        <ul className={classes.board__cards}>
          {searchedProducts.map((product) => (
            <Card key={product._id} item={product} onClick={handleClickCard} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Borad;
