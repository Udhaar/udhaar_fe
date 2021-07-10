import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const AfterLoginRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <div>This is the home page</div>
        </Route>
        <Route path="/home" exact>
          <div>This is the home page</div>
        </Route>
      </Switch>
    </Router>
  );
};
