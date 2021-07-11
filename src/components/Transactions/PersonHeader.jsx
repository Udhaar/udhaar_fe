import React from "react";

export const PersonHeader = ({ name, email, amount, text }) => {
  return (
    <div className="px-3 py-2 bg-darker">
      <div className="flex justify-between text-2xl">
        <h3>{name}</h3>
        <p>${amount}</p>
      </div>
      <div className="flex justify-between text-sm">
        <h3>{email}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};
