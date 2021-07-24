import React from "react";
import { PendingTransactionCard } from "./PendingTransactionCard";

export const CarouselComp = ({ transactions, external_id }) => {
  const [index, setIndex] = React.useState(0);
  const [totalTrans, setTotalTrans] = React.useState(0);
  const [pendingTransactions, setPendingTransactions] = React.useState([]);

  React.useEffect(() => {
    setPendingTransactions([]);
    let trans = [];
    transactions.map((transaction) => {
      if (transaction.created_by === external_id && transaction.status === 1) {
        const t = (
          <PendingTransactionCard
            amount={transaction.amount}
            description={transaction.message}
            external_id={transaction.external_id}
          />
        );
        trans = [...trans, t];
        setTotalTrans(trans.length);
      }
    });
    setPendingTransactions(trans);
  }, [transactions]);

  const prev = () => {
    setIndex((index) => (index === 0 ? 0 : index - 1));
  };

  const next = () => {
    setIndex((index) =>
      index === totalTrans - 1 ? totalTrans - 1 : index + 1
    );
  };

  return pendingTransactions.length > 0 ? (
    <div className="flex justify-between mx-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill={index === 0 ? "gray" : "black"}
        onClick={() => prev()}
        className="cursor-pointer w-16 block"
      >
        <path
          fillRule="evenodd"
          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
      <div>{pendingTransactions[index] && pendingTransactions[index]}</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill={index === totalTrans - 1 ? "gray" : "black"}
        onClick={() => next()}
        className="cursor-pointer w-16"
      >
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  ) : (
    <div className="text-center my-auto text-xl py-3">
      No pending transactions
    </div>
  );
};
