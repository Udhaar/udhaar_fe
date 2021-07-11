import React from "react";
import { Navbar } from "./Navbar";
import { TransactionPeopleList } from "./Transactions/TransactionPeopleList";
import { TransactionHistory } from "./Transactions/TransactionHistory";

export const Transactions = () => {
  return (
    <div className="grid grid-cols-10 h-screen overflow-hidden">
      <div className="col-span-2">
        <Navbar />
      </div>
      <div className="col-span-3">
        <TransactionPeopleList />
      </div>
      <div className="col-span-5">
        <TransactionHistory />
      </div>
    </div>
  );
};
