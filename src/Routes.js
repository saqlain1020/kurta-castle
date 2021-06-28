import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "src/Pages/Home/Home";
import Gallery from "./Pages/Gallery/Gallery";
import OrderForm from "./Pages/OrderForm/OrderForm";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/gallery" component={Gallery} exact />
      <Route path="/form" component={OrderForm} exact />
    </Switch>
  );
};

export default Routes;
