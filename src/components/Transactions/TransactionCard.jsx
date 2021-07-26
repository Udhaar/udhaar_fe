import React from "react";

export const TransactionCard = ({ description, amount, date, gave }) => {
  return (
    <div
      className={`flex flex-col md:flex-row mx-2 bg-primary justify-between items-center px-3 py-1 border-l-8 md:gap-3 ${
        gave ? "border-safe" : "border-danger"
      }`}
    >
      <div className="flex flex-col w-full md:w-auto">
        <div className="leading-tight">{description}</div>
        <div className="text-xs">{date}</div>
      </div>
      <div className="w-full md:w-auto text-left md:text-right">
        {gave ? "You gave " : "You took "} ${amount}
      </div>
    </div>
  );
};
