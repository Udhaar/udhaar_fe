import React from "react";
import { PersonCard } from "./PersonCard";

export const TransactionPeopleList = () => {
  return (
    <div className="bg-dark h-screen text-white">
      <div className="py-3 px-6">
        <input
          type="text"
          placeholder="Find people"
          className="w-full rounded-lg text-lg px-4 py-2 outline-none"
        />
        <div className="flex text-sm justify-between my-2">
          <div className="bg-primary rounded-md px-2 py-1">
            <label>Sort by :</label>
            <select
              name="sort_by"
              id="sort_by"
              className="bg-primary outline-none"
            >
              <option value="Name">Name</option>
              <option value="Amount">Amount</option>
            </select>
          </div>
          <div className="bg-primary rounded-md px-2 py-1">
            <label>Filter by :</label>
            <select
              name="filter_by"
              id="filter_by"
              className="bg-primary outline-none w-20"
            >
              <option value="Name">Money owed</option>
              <option value="Amount">Money to be paid</option>
            </select>
          </div>
        </div>
      </div>

      <div className="h-full overflow-scroll overflow-x-hidden">
        <PersonCard
          name="Lorem ipsum"
          amount="100"
          email="lorem@ipsum.com"
          text="You will get"
        />
        <PersonCard
          name="Lorem ipsum"
          amount="100"
          email="lorem@ipsum.com"
          text="You will get"
        />
        <PersonCard
          name="Lorem ipsum"
          amount="100"
          email="lorem@ipsum.com"
          text="You will get"
        />
        <PersonCard
          name="Lorem ipsum"
          amount="100"
          email="lorem@ipsum.com"
          text="You will get"
        />
        <PersonCard
          name="Lorem ipsum"
          amount="100"
          email="lorem@ipsum.com"
          text="You will get"
        />
        <PersonCard
          name="Lorem ipsum"
          amount="100"
          email="lorem@ipsum.com"
          text="You will get"
        />
        <PersonCard
          name="Lorem ipsum"
          amount="100"
          email="lorem@ipsum.com"
          text="You will get"
        />
        <PersonCard
          name="Lorem ipsum"
          amount="100"
          email="lorem@ipsum.com"
          text="You will get"
        />
      </div>
    </div>
  );
};
