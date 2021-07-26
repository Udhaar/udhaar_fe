import React, { useEffect, useState } from "react";
import { TransactionCard } from "./TransactionCard";
import moment from "moment";
import { transactionList } from "../ApiRequests/api";
import { CreateTransactionComponent } from "./CreateTransactionComponent";
import { Carousel } from "./Carousel";
import { PendingTransactionCard } from "./PendingTransactionCard";

export const TransactionHistory = ({ selectedPerson, setSelectedPerson }) => {
  const [transactions, setTransactions] = useState([]);
  const [pendingTransactions, setPendingTransactions] = React.useState([]);

  useEffect(async () => {
    if (selectedPerson) {
      const response = await transactionList({
        user_external_id: selectedPerson.user.external_id,
      });
      if (response[0].status === 200) {
        setTransactions(response[1].results);
      }
    }
  }, [selectedPerson]);

  React.useEffect(() => {
    if (selectedPerson) {
      setPendingTransactions([]);
      let trans = [];
      transactions.map((transaction) => {
        if (
          transaction.created_by === selectedPerson.user.external_id &&
          transaction.status === 1
        ) {
          const t = (
            <PendingTransactionCard
              amount={transaction.amount}
              description={transaction.message}
              external_id={transaction.external_id}
              payer_external_id={transaction.payer}
            />
          );
          trans = [...trans, t];
        }
      });
      setPendingTransactions(trans);
    }
  }, [transactions]);

  return selectedPerson ? (
    <div className="text-black bg-white h-screen flex flex-col justify-between">
      <div className="bg-secondary px-2 py-1 text-white flex flex-between">
        <div
          className="my-auto cursor-pointer"
          onClick={() => setSelectedPerson(null)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 10.605 15.555"
            className="w-5"
            fill="white"
          >
            <path d="M10.605 12.727 5.656 7.776l4.949-4.948L7.777 0 0 7.776l7.777 7.779 2.828-2.828z" />
          </svg>
        </div>
        <div className="px-3 py-2 transition flex-grow">
          <div className="flex justify-between text-2xl">
            <h3>
              {selectedPerson.user.first_name +
                " " +
                selectedPerson.user.last_name}
            </h3>
            <p> ₹ {Math.abs(selectedPerson.balance)} </p>
          </div>
          <div className="flex justify-between text-sm">
            <h3>{selectedPerson.user.email}</h3>
            <p>
              {selectedPerson.balance >= 0 ? "You will get" : "You will pay"}
            </p>
          </div>
        </div>
      </div>

      <div className="overflow-auto flex flex-col flex-grow justify-between py-2">
        <Carousel items={pendingTransactions} />

        <div className="flex flex-col space-y-1">
          {transactions.map((transaction) => {
            return (
              <TransactionCard
                key={transaction.external_id}
                description={transaction.message}
                date={moment(transaction.created_date).format("LLL")}
                amount={transaction.amount}
                gave={transaction.receiver === selectedPerson.user.external_id}
                status={transaction.status}
              />
            );
          })}
        </div>
      </div>

      <CreateTransactionComponent
        external_id={selectedPerson.user.external_id}
      />
    </div>
  ) : (
    <div className="h-screen flex items-center justify-center text-2xl">
      No transaction history
    </div>
  );
};
