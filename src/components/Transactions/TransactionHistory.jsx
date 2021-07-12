import React from "react";
import { PersonHeader } from "./PersonHeader";
import "react-alice-carousel/lib/alice-carousel.css";
import { Carousel } from "./Carousel";
import { TransactionCard } from "./TransactionCard";

export const TransactionHistory = () => {
  return (
    <div className="text-white bg-dark h-screen border-l-2 border-darker flex flex-col justify-between">
      <div className="bg-darker px-2 py-1">
        <PersonHeader
          name="Lorem ipsum"
          amount="100"
          email="lorem@ipsum.com"
          text="You will get"
        />
      </div>

      <div>
        <Carousel />

        <div className="flex flex-col space-y-1">
          <TransactionCard
            description="Samosa"
            date="29/12/2020 3:40 PM"
            amount="100"
            gave={true}
          />
          <TransactionCard
            description="Samosa"
            date="29/12/2020 3:40 PM"
            amount="100"
            gave={false}
          />
          <TransactionCard
            description="Samosa"
            date="29/12/2020 3:40 PM"
            amount="100"
            gave={true}
          />
          <TransactionCard
            description="Samosa"
            date="29/12/2020 3:40 PM"
            amount="100"
            gave={true}
          />
        </div>
      </div>

      <div className="grid grid-cols-3 bg-[#14213D] p-3">
        <div className="flex flex-col col-span-2 space-y-2 px-2">
          <div className="grid grid-cols-7 items-center text-center">
            <label htmlFor="amount" className="px-2 col-span-1 text-left">
              Gave
            </label>
            <input
              type="number"
              placeholder="amount"
              id="amount"
              className="text-black col-span-2 rounded-md"
            />
            <label htmlFor="date" className="px-2 col-span-1">
              on
            </label>
            <input
              type="date"
              placeholder="date"
              id="date"
              className="text-black rounded-md col-span-3"
            />
          </div>

          <div className="flex items-center">
            <label htmlFor="description" className="px-2">
              for
            </label>
            <input
              type="text"
              placeholder="description"
              id="description"
              className="text-black rounded-md flex-grow"
            />
          </div>
        </div>

        <div className="col-span-1 flex px-2">
          <input
            type="submit"
            value="Create transaction"
            className="bg-[#FCA311] w-full px-1 text-2xl h-full whitespace-normal"
          />
        </div>
      </div>
    </div>
  );
};
