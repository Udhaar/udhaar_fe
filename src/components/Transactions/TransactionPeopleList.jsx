import React from "react";
import { PersonCard } from "./PersonCard";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { searchUser, getBalance } from "../ApiRequests/api";
import { useHistory } from "react-router";

export const TransactionPeopleList = ({ people, setSelectedPerson }) => {
  const [openSearchForm, setOpenSearchForm] = React.useState(false);
  const history = useHistory();
  const [searchEmail, setSearchEmail] = React.useState("");

  const handleSearchUser = async (e) => {
    e.preventDefault();
    const response = await searchUser({ email: searchEmail });
    if (response[0].status === 200) {
      setOpenSearchForm(false);
      history.push(`/transactions/${response[1].external_id}`);
    }
  };

  return (
    <div className="bg-white flex flex-col h-screen text-'black border-r-2 border-secondary relative">
      <div className="py-2 px-3">
        <input
          type="text"
          placeholder="Find people"
          className="w-full rounded-lg text-lg px-4 py-2 top-0 inline-block outline-none border-none bg-primary"
        />
        <div className="flex text-sm justify-between my-2 gap-2">
          <div className="bg-primary rounded-md px-2 py-1 flex-1">
            <label>Sort by :</label>
            <select
              name="sort_by"
              id="sort_by"
              className="bg-primary outline-none cursor-pointer w-full"
            >
              <option value="Name">Name</option>
              <option value="Amount">Amount</option>
            </select>
          </div>
          <div className="bg-primary rounded-md px-2 py-1 flex-1">
            <label>Filter by :</label>
            <select
              name="filter_by"
              id="filter_by"
              className="bg-primary outline-none cursor-pointer w-full"
            >
              <option value="Name">Money you owe</option>
              <option value="Amount">Money to pay</option>
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
          />
        ))}
      </div>

      <div
        className="bg-white inline-block absolute rounded-full bottom-12 right-12 cursor-pointer"
        onClick={() => setOpenSearchForm(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#3C64B9"
          viewBox="0 0 20 20"
          className="w-14"
        >
          <path d="M0 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2zm4 7h5V4h2v5h5v2h-5v5H9v-5H4z" />
        </svg>
      </div>
      {openSearchForm && (
        <Modal open={openSearchForm} onClose={() => setOpenSearchForm(false)}>
          <div>
            <form className="flex flex-col gap-2">
              <label for="decline_message">Create transaction with</label>
              <input
                type="email"
                value={searchEmail}
                id="decline_message"
                placeholder="email"
                onChange={(e) => setSearchEmail(e.target.value)}
                className="rounded-lg"
              />
              <input
                type="submit"
                className="bg-danger text-white px-3 py-2 rounded-md cursor-pointer"
                onClick={(e) => handleSearchUser(e)}
                value="Search person"
              />
            </form>
          </div>
        </Modal>
      )}
    </div>
  );
};
