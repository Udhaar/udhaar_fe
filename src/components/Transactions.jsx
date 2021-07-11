import React from "react";
import { Navbar } from "./Navbar";

export const Transactions = () => {
  return (
    <div className="grid grid-cols-10 min-h-screen">
      <div className="col-span-2">
        <Navbar />
      </div>
      <div className="col-span-3">hello</div>
      <div className="col-span-5">hello</div>
    </div>
  );
};
