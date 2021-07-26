import React from "react";

export const TransactionCard = ({
  description,
  amount,
  date,
  gave,
  status,
}) => {
  const color =
    status === 1 ? "border-primary" : gave ? "border-safe" : "border-danger";

  return (
    <div
      className={`flex flex-col md:flex-row mx-2 justify-between items-center px-3 py-1 border-l-8 md:gap-3 ${color} ${
        status === 1 ? "opacity-30" : ""
      }`}
    >
      <div className="flex flex-col w-full md:w-auto">
        <div className="leading-tight">{description}</div>
        <div className="text-xs">{date}</div>
      </div>
      <div className="w-full md:w-auto text-left md:text-right">
        {gave ? "You gave " : "You took "} ₹{amount}
        <br />
        {status === 1 ? "(Pending)" : ""}
      </div>
    </div>
  );
};
