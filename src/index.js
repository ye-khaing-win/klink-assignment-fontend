import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.scss";
import App from "./App";
import store from "./store/index";
import { AuthProvider } from "react-auth-kit";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <AuthProvider
    authType={"cookie"}
    authName={"_auth"}
    cookieDomain={window.location.hostname}
    cookieSecure={false}
  >
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </AuthProvider>
);
