import React from "react";

export const TransactionCard = ({ description, amount, date, gave }) => {
  console.log(description, date, amount, gave);
  return (
    <div
      className={`flex justify-between items-center px-3 py-1 ${
        gave ? "bg-[#10B981]" : "bg-[#F87171]"
      }`}
    >
      <div className="flex flex-col">
        <div className="text-2xl">{description}</div>
        <div className="text-xs">{date}</div>
      </div>
      <div className="text-xl">
        {gave ? "You gave " : "You took "} ${amount}
      </div>
    </div>
  );
};
