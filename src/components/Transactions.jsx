import React from "react";
import { Navbar } from "./Navbar";
import { TransactionPeopleList } from "./Transactions/TransactionPeopleList";
import { TransactionHistory } from "./Transactions/TransactionHistory";
import { SmallNavbar } from "./SmallNavbar";

export const Transactions = () => {
  return (
    <div>
      <SmallNavbar />
      <div className="grid grid-cols-10 h-screen overflow-hidden">
        <div className="hidden md2:block col-span-2">
          <Navbar />
        </div>
        <div className="col-span-10 md:col-span-4 md2:col-span-3">
          <TransactionPeopleList />
        </div>
        <div className="hidden md:block col-span-6 md2:col-span-5">
          <TransactionHistory />
        </div>
      </div>
    </div>
  );
};
