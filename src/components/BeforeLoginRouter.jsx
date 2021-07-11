import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SignIn } from "./Signin";
import { SignUp } from "./SignUp";

export const AppRouter = () => {
  const access_token = localStorage.getItem("access_token");
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <SignIn />
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
