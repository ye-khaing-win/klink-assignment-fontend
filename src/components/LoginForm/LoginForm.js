import React from "react";
import Input from "../widgets/Input/Input";
import classes from "./LoginForm.module.scss";
import Button from "../widgets/Button/Button";
import * as api from "../../utils/api";
import { useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import useInput from "../../hooks/useInput";
import {
  validatePasswordLength,
  validateIsEmail,
} from "../../utils/validators";
import { useDispatch } from "react-redux";
import { toastActions } from "../../store/toastSlice";
import catchError from "../../utils/catchError";
import { v4 as uuidv4 } from "uuid";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signin = useSignIn();

  const email = useInput("Email", "", validateIsEmail);
  const password = useInput("Password", "", validatePasswordLength(8));

  const isValid = email.isValid && password.isValid;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValid) return;

    try {
      const response = await api.postOne(`/auth/login`, {
        email: email.value,
        password: password.value,
      });

      signin({
        token: response.data.token,
        expiresIn: 3600,
        tokenType: "Bearer",
        authState: { email: "yekhaingwin.dev@gmail.com" },
      });

      navigate("/");

      dispatch(
        toastActions.add({
          id: uuidv4(),
          status: "success",
          message: "Welcome",
        })
      );
    } catch (error) {
      const err = catchError(error);
      dispatch(toastActions.add(err));
    }
  };

  return (
    <section className={classes.login}>
      <div className={classes.login__content}>
        <div className={classes.login__heading}>
          <div className={classes.login__title}>Log in</div>
          <p className={classes.login__description}>
            Welcome back! Please enter your details.
          </p>
        </div>
        <form className={classes.login__form} onSubmit={handleSubmit}>
          <div className={classes.login__inputs}>
            <Input
              label={email.label}
              placeholder="Enter your email"
              type="text"
              onChange={email.onChange}
              hasError={email.hasError}
            />
            <Input
              label={password.label}
              placeholder="Enter your password"
              type="password"
              onChange={password.onChange}
              hasError={password.hasError}
            />
          </div>
          <Button title="Sign in" />
        </form>
      </div>
    </section>
  );
};

export default LoginForm;
