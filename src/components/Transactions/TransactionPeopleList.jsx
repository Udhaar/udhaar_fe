import React, { useEffect } from "react";
import { PersonCard } from "./PersonCard";

export const TransactionPeopleList = ({ people, setSelectedPerson }) => {
  return (
    <div className="bg-white flex flex-col h-screen text-black border-r-2 border-[#3C64B9]">
      <div className="py-3 px-6">
        <input
          type="text"
          placeholder="Find people"
          className="w-full rounded-lg text-lg px-4 py-2 top-0 inline-block outline-none border-none bg-[#EAF1FF]"
        />
        <div className="flex text-sm justify-between my-2">
          <div className="bg-[#EAF1FF] rounded-md px-2 py-1">
            <label>Sort by :</label>
            <select
              name="sort_by"
              id="sort_by"
              className="bg-[#EAF1FF] outline-none cursor-pointer"
            >
              <option value="Name">Name</option>
              <option value="Amount">Amount</option>
            </select>
          </div>
          <div className="bg-[#EAF1FF] rounded-md px-2 py-1">
            <label>Filter by :</label>
            <select
              name="filter_by"
              id="filter_by"
              className="bg-[#EAF1FF] outline-none w-20 cursor-pointer"
            >
              <option value="Name">Money owed</option>
              <option value="Amount">Money to be paid</option>
            </select>
          </div>
        </div>
      </div>

      <div className="h-full overflow-x-hidden">
        {people.map((person) => (
          <PersonCard
            key={person.user.external_id}
            name={person.user.first_name + " " + person.user.last_name}
            amount={person.balance}
            email={person.user.email}
            text={person.balance >= 0 ? "You will get" : "You will pay"}
            person={person}
            setSelectedPerson={setSelectedPerson}
          />
        ))}
      </div>
    </div>
  );
};
