import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Transactions } from "./Transactions";
import { Navbar } from "./Navbar";
import { SmallNavbar } from "./SmallNavbar";
import { GlobalContext } from "./GlobalContext";
import { getCurrentUser } from "./ApiRequests/api";

export const AfterLoginRouter = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(async () => {
    const response = await getCurrentUser();
    if (response[0].status === 200) setCurrentUser(response[1]);
  }, []);

  return (
    <GlobalContext.Provider value={{ currentUser: currentUser }}>
      <div className="h-screen flex flex-col justify-between items-between">
        <SmallNavbar />
        <div className="grid grid-cols-10 grid-row-1 overflow-auto">
          <div className="hidden md2:block col-span-2 row-span-1">
            <Navbar />
          </div>

          <Router>
            <Switch>
              <Route path="/" exact>
                <Transactions />
              </Route>
              <Route path="/transactions" exact>
                <Transactions />
              </Route>
              <Route path="/transactions/:external_id" exact>
                <Transactions />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </GlobalContext.Provider>
  );
};
