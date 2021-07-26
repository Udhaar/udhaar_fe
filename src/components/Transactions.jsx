import React, { useEffect, useState } from "react";
import { TransactionPeopleList } from "./Transactions/TransactionPeopleList";
import { TransactionHistory } from "./Transactions/TransactionHistory";
import { peopleList, getBalance } from "./ApiRequests/api";
import { AppContext } from "./AppContext";
import { useParams } from "react-router-dom";

export const Transactions = () => {
  const external_id = useParams().external_id;
  const [people, setPeople] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState(null);

  const fetchPeopleList = async () => {
    const response = await peopleList();
    if (response[0].status === 200) {
      setPeople(response[1].results);
    }
  };

  useEffect(() => {
    fetchPeopleList();
  }, []);

  useEffect(async () => {
    if (external_id) {
      const response = await getBalance({ external_id: external_id });
      if (response[0].status === 200) setSelectedPerson(response[1]);
    }
  }, [external_id, people]);

  const globalState = {
    fetchPeopleList: fetchPeopleList,
  };

  return (
    <>
      <div
        className={` md:flex flex-col md:col-span-4 md2:col-span-3 row-span-1 ${
          selectedPerson ? "hidden" : "col-span-10 flex flex-col"
        } `}
      >
        <TransactionPeopleList
          people={people}
          setSelectedPerson={setSelectedPerson}
        />
      </div>
      <div
        className={`md:flex flex-col md:col-span-6 md2:col-span-5 row-span-1 ${
          selectedPerson ? "col-span-10 flex flex-col" : "hidden"
        }`}
      >
        <AppContext.Provider value={globalState}>
          <TransactionHistory
            selectedPerson={selectedPerson}
            setSelectedPerson={setSelectedPerson}
          />
        </AppContext.Provider>
      </div>
    </>
  );
};
