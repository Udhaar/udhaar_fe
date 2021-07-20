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
      className="px-3 py-2 hover:bg-[#EAF1FF] cursor-pointer transition"
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
    </div>
  );
};
