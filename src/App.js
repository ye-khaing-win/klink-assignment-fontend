import React from "react";
import classes from "./App.module.scss";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import { Route, Routes } from "react-router-dom";
import Toasts from "./components/toasts/Toasts/Toasts";
import { RequireAuth } from "react-auth-kit";

const App = () => {
  return (
    <div className={classes.app}>
      <div className={classes.app__content}>
        <Routes>
          <Route
            path="/*"
            element={
              <RequireAuth loginPath={"/login"}>
                <Home />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Toasts />
    </div>
  );
};

export default App;
