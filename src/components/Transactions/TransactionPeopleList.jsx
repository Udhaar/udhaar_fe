import React from "react";
import { PersonCard } from "./PersonCard";

export const TransactionPeopleList = () => {
  return (
    <div className="bg-darker h-screen text-white border-l-2 border-white">
      <div className="py-3 px-6">
        <input
          type="text"
          placeholder="Find people"
          className="w-full rounded-lg text-lg px-4 py-2 outline-none bg-[#453C52]"
        />
        <div className="flex text-sm justify-between my-2">
          <div className="rounded-md px-2 py-1">
            <label>Sort by :</label>
            <select
              name="sort_by"
              id="sort_by"
              className="outline-none bg-[#453C52]"
            >
              <option value="Name">Name</option>
              <option value="Amount">Amount</option>
            </select>
          </div>
          <div className="rounded-md px-2 py-1">
            <label>Filter by :</label>
            <select
              name="filter_by"
              id="filter_by"
              className="outline-none w-20 bg-[#453C52]"
            >
              <option value="Name">Money owed</option>
              <option value="Amount">Money to be paid</option>
            </select>
          </div>
        </div>
      </div>

      <div className="h-full overflow-auto overflow-x-hidden">
        <PersonCard
          name="Marty Blanton"
          amount="100"
          email="Marty@Blanton.com"
          text="You will get"
        />
        <PersonCard
          name="Danielle Wright"
          amount="156"
          email="Danielle@Wright.com"
          text="You will pay"
        />
        <PersonCard
          name="Shirley Gordon"
          amount="130"
          email="Shirley@Gordon.com"
          text="You will get"
        />
        <PersonCard
          name="Harriet Patton"
          amount="70"
          email="Harriet@Patton.com"
          text="You will get"
        />
        <PersonCard
          name="Kit Greer"
          amount="3"
          email="Kit@Greer.com"
          text="You will pay"
        />
        <PersonCard
          name="Basil Abbott"
          amount="110"
          email="Basil@Abbott.com"
          text="You will pay"
        />
        <PersonCard
          name="Lori Langley"
          amount="500"
          email="Lori@Langley.com"
          text="You will get"
        />
        <PersonCard
          name="Godfrey Hawkins"
          amount="100"
          email="Godfrey@Hawkins.com"
          text="You will get"
        />
      </div>
    </div>
  );
};
