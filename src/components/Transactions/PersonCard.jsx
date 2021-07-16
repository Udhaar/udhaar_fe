import React from "react";

export const PersonCard = ({ name, email, amount, text }) => {
  return (
    <div className="px-3 py-2 bg-[#453C52] text-white hover:bg-[#6A5F7A] cursor-pointer transition">
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
