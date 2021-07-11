import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SignIn } from "./Signin";
import { SignUp } from "./SignUp";

export const AppRouter = () => {
  // localStorage.removeItem("access_token");
  const access_token = localStorage.getItem("access_token");
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          {access_token ? (
            <div>
              {" "}
              you are logged in
              <button
                onClick={() => {
                  localStorage.removeItem("access_token");
                  window.location.reload();
                }}
              >
                Logout
              </button>
            </div>
          ) : (
            <SignUp />
          )}
        </Route>
        <Route path="/signup">
          {access_token ? (
            <div>
              you are in home page
              <button
                onClick={() => {
                  localStorage.removeItem("access_token");
                  window.location.reload();
                }}
              >
                Logout
              </button>
            </div>
          ) : (
            <SignUp />
          )}
        </Route>
        <Route path="/signin">
          {access_token ? (
            <div>
              you are in home page
              <button
                onClick={() => {
                  localStorage.removeItem("access_token");
                  window.location.reload();
                }}
              >
                Logout
              </button>
            </div>
          ) : (
            <SignIn />
          )}
        </Route>
      </Switch>
    </Router>
  );
};
