import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SignIn } from "./Signin";
import { SignUp } from "./SignUp";

export const BeforeLoginRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <SignUp />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
      </Switch>
    </Router>
  );
};
