import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Login from "./components/login";
import Lista from "./components/lista";
import Cadastro from "./components/cadastro";
import './layouts/index.css'
import { BrowserRouter, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter className="md:w-32 lg:w-48">
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/login" component={Login} />
      <Route path="/produtos" component={Lista} />
      <Route path="/cadastro" component={Cadastro} />
    </Switch>
  </BrowserRouter>,

document.getElementById("root")
);
