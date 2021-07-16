import React from "react";

export const PendingTransactionCard = ({ amount, description }) => {
  return (
    <div className="bg-[#EAF1FF] w-[17rem] h-[9.91rem] flex flex-col justify-between px-5 py-2 my-2 mx-auto rounded-2xl">
      <h3 className="text-center text-4xl font-bold">${amount}</h3>
      <p className="text-center text-xs">{description}</p>
      <div className="my-2 flex justify-between">
        <button className="bg-[#10B981] text-white px-3 py-1 rounded-md">
          Accept
        </button>
        <button className="bg-[#F87171] text-white px-3 py-1 rounded-md">
          Decline
        </button>
      </div>
    </div>
  );
};
