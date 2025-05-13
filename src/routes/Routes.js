import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ContactAdder from "../components/ContactAdder";
import Main from "../pages/Main";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/add" component={ContactAdder} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
