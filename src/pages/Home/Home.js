import React from "react";
import Cart from "../../components/Cart/Cart";
import Main from "../../components/Main/Main";
import classes from "./Home.module.scss";

const Home = () => {
  return (
    <main className={classes.home}>
      <Main />
      <Cart />
    </main>
  );
};

export default Home;
