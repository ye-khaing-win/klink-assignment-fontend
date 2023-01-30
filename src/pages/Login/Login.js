import React from "react";
import AboutUs from "../../components/AboutUs/AboutUs";
import LoginForm from "../../components/LoginForm/LoginForm";
import classes from "./Login.module.scss";

const Login = () => {
  return (
    <section className={classes.login}>
      <AboutUs />
      <LoginForm />
    </section>
  );
};

export default Login;
