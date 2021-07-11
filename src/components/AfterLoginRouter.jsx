import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const AfterLoginRouter = () => {
  console.log(history);
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <div>This is the home page</div>
        </Route>
        <Route path="/home">
          <div>
            This is the home page
            <button
              onClick={() => {
                localStorage.removeItem("access_token");
              }}
            >
              Logout
            </button>
          </div>
        </Route>
      </Switch>
    </Router>
  );
};
