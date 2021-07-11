import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Transactions } from "./Transactions";

export const AfterLoginRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Transactions />
        </Route>
        <Route path="/transactions" exact>
          <Transactions />
        </Route>
      </Switch>
    </Router>
  );
};
