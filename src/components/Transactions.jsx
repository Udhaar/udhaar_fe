import React, { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { TransactionPeopleList } from "./Transactions/TransactionPeopleList";
import { TransactionHistory } from "./Transactions/TransactionHistory";
import { SmallNavbar } from "./SmallNavbar";
import { peopleList } from "./ApiRequests/api";

export const Transactions = () => {
  const [people, setPeople] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState(null);

  useEffect(async () => {
    const response = await peopleList();
    if (response[0].status === 200) {
      setPeople(response[1].results);
    }
  }, []);

  return (
    <div>
      <SmallNavbar />
      <div className="grid grid-cols-10 h-screen overflow-hidden">
        <div className="hidden md2:block col-span-2">
          <Navbar />
        </div>
        <div className="col-span-10 md:col-span-4 md2:col-span-3">
          <TransactionPeopleList
            people={people}
            setSelectedPerson={setSelectedPerson}
          />
        </div>
        <div className="hidden md:block col-span-6 md2:col-span-5">
          <TransactionHistory selectedPerson={selectedPerson} />
        </div>
      </div>
    </div>
  );
};
