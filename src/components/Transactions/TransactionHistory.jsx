import React, { useEffect, useState } from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import { Carousel } from "./Carousel";
import { TransactionCard } from "./TransactionCard";
import moment from "moment";
import { createTransaction } from "../ApiRequests/api";
import { toast } from "react-toastify";
import { transactionList } from "../ApiRequests/api";

export const TransactionHistory = ({ selectedPerson }) => {
  const [transactions, setTransactions] = useState([]);
  const [formData, setFormData] = useState({
    amount: null,
    gaveOrTook: "gave",
  });

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

  const handleSubmit = async () => {
    const data = {
      amount: formData.amount,
      message: formData.description,
    };
    if (formData.gaveOrTook === "gave")
      data["receiver"] = selectedPerson.user.external_id;
    else data["payer"] = selectedPerson.user.external_id;

    const response = await createTransaction(data, {});
    if (response[0].status === 201) {
      toast.success("Transaction successfully created");
    }
  };

  return selectedPerson ? (
    <div className="text-black bg-white h-screen flex flex-col justify-between">
      <div className="bg-secondary px-2 py-1 text-white">
        <div className="px-3 py-2 transition">
          <div className="flex justify-between text-2xl">
            <h3>
              {selectedPerson.user.first_name +
                " " +
                selectedPerson.user.last_name}
            </h3>
            <p> {Math.abs(selectedPerson.balance)} </p>
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
        <Carousel
          transactions={transactions}
          external_id={selectedPerson.user.external_id}
        />

        <div className="flex flex-col space-y-1">
          {transactions.map((transaction) => {
            if (transaction.status > 1)
              return (
                <TransactionCard
                  key={transaction.external_id}
                  description={transaction.message}
                  date={moment(transaction.created_date).format("LLL")}
                  amount={transaction.amount}
                  gave={
                    transaction.receiver === selectedPerson.user.external_id
                  }
                />
              );
          })}
        </div>
      </div>

      <div className="grid grid-cols-3 bg-primary py-3">
        <div className="flex flex-col col-span-2 space-y-2 px-2">
          <div className="grid grid-cols-12 items-center text-center">
            <div htmlFor="amount" className="px-2 col-span-3 text-left">
              <select
                value={formData.gaveOrTook}
                onChange={(e) =>
                  setFormData({ ...formData, gaveOrTook: e.target.value })
                }
              >
                <option value="gave">Gave</option>
                <option value="took">Took</option>
              </select>
            </div>

            <input
              type="number"
              placeholder="amount"
              id="amount"
              className="text-black col-span-3 rounded-md"
              value={formData.amount}
              onChange={(e) =>
                setFormData({ ...formData, amount: e.target.value })
              }
            />
            <label htmlFor="date" className="px-2 col-span-1">
              on
            </label>
            <input
              type="date"
              placeholder="date"
              id="date"
              className="text-black rounded-md col-span-5"
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
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </div>
        </div>

        <div className="col-span-1 flex px-2">
          <input
            type="submit"
            value="Create transaction"
            onClick={handleSubmit}
            className="bg-secondary text-white cursor-pointer w-full px-1 text-2xl h-full whitespace-normal"
          />
        </div>
      </div>
    </div>
  ) : (
    <div className="h-screen flex items-center justify-center text-2xl">
      No transaction history
    </div>
  );
};
