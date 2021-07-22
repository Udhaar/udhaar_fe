import React from "react";

export const PersonCard = ({
  name,
  email,
  amount,
  text,
  person,
  setSelectedPerson,
}) => {
  return (
    <div
      className="px-3 pt-1 hover:bg-primary cursor-pointer transition"
      onClick={() => setSelectedPerson(person)}
    >
      <div className="flex justify-between text-2xl">
        <h3>{name}</h3>
        <p>${Math.abs(amount)}</p>
      </div>
      <div className="flex justify-between text-sm">
        <h3>{email}</h3>
        <p>{text}</p>
      </div>
      <div className="border-2 border-[#f0f5ff] mx-4 mt-2"></div>
    </div>
  );
};
