// Core
import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";

// Utils
import "./styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, history } from "./navigation";
import { store } from "./init/store";

export const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  );
};
