import React, { useEffect, useState, createContext } from "react";
import { Navbar } from "./Navbar";
import { TransactionPeopleList } from "./Transactions/TransactionPeopleList";
import { TransactionHistory } from "./Transactions/TransactionHistory";
import { SmallNavbar } from "./SmallNavbar";
import { peopleList } from "./ApiRequests/api";
import { AppContext } from "./AppContext";

export const Transactions = () => {
  const [people, setPeople] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState(null);

  const fetchPeopleList = async () => {
    const response = await peopleList();
    if (response[0].status === 200) {
      setPeople(response[1].results);
      if (response[1].results.length > 0) {
        setSelectedPerson(response[1].results[0]);
      }
    }
  };

  useEffect(() => {
    fetchPeopleList();
  }, []);

  const globalState = {
    fetchPeopleList: fetchPeopleList,
  };

  return (
    <div>
      <SmallNavbar />
      <div className="grid grid-cols-10 h-screen overflow-hidden">
        <div className="hidden md2:block col-span-2">
          <Navbar />
        </div>
        <div
          className={`md:block md:col-span-4 md2:col-span-3 ${
            selectedPerson ? "hidden" : "col-span-10"
          } `}
        >
          <TransactionPeopleList
            people={people}
            setSelectedPerson={setSelectedPerson}
          />
        </div>
        <div
          className={`md:block md:col-span-6 md2:col-span-5 ${
            selectedPerson ? "col-span-10" : "hidden"
          }`}
        >
          <AppContext.Provider value={globalState}>
            <TransactionHistory
              selectedPerson={selectedPerson}
              setSelectedPerson={setSelectedPerson}
            />
          </AppContext.Provider>
        </div>
      </div>
    </div>
  );
};
