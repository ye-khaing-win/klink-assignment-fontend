import React from "react";
import Borad from "../Board/Board";
import Brand from "../widgets/Brand/Brand";
import classes from "./Main.module.scss";
import brand from "../../images/brand.png";
import Search from "../widgets/Search/Search";
import Header from "../Header/Header";
import { searchActions } from "../../store/searchSlice";
import { useDispatch } from "react-redux";
import Button from "../widgets/Button/Button";
import { useSignOut } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const dispatch = useDispatch();
  const logOut = useSignOut();
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut();
    navigate("/login");
  };

  const handleSearch = (e) => {
    dispatch(searchActions.search(e.target.value));
  };

  return (
    <section className={classes.main}>
      <Header>
        <Brand src={brand} />
        <Search onSearch={handleSearch} />
        <Button title="Logout" width="120px" onClick={handleLogout} />
      </Header>
      <Borad />
    </section>
  );
};

export default Main;
