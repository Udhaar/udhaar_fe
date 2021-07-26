import React, { useState, useContext } from "react";
import { createTransaction } from "../ApiRequests/api";
import { toast } from "react-toastify";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { AppContext } from "../AppContext";

export const CreateTransactionComponent = ({ external_id }) => {
  const [formData, setFormData] = useState({
    amount: null,
    gaveOrTook: "gave",
  });
  const [showCreateTransactionModal, setShowCreateTransactionModal] =
    React.useState(false);
  const { fetchPeopleList } = useContext(AppContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      amount: formData.amount,
      message: formData.description,
    };
    if (formData.gaveOrTook === "gave") data["receiver"] = external_id;
    else data["payer"] = external_id;

    const response = await createTransaction(data, {});
    if (response[0].status === 201) {
      toast.success("Transaction successfully created");
    }
    fetchPeopleList();
  };

  return (
    <div>
      <div className="hidden md2:grid grid-cols-3 bg-primary py-3">
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
            onClick={(e) => handleSubmit(e)}
            className="bg-secondary text-white cursor-pointer px-1 text-2xl h-full whitespace-normal"
          />
        </div>
      </div>

      <div className="md2:hidden">
        <button
          className="bg-secondary text-white w-full py-3 px-4 text-center text-lg"
          onClick={() => setShowCreateTransactionModal(true)}
        >
          Create Transaction
        </button>
        {showCreateTransactionModal && (
          <Modal
            open={showCreateTransactionModal}
            onClose={() => setShowCreateTransactionModal(false)}
          >
            <div>
              <form className="flex flex-col gap-2 mt-7">
                <select
                  value={formData.gaveOrTook}
                  onChange={(e) =>
                    setFormData({ ...formData, gaveOrTook: e.target.value })
                  }
                >
                  <option value="gave">Gave</option>
                  <option value="took">Took</option>
                </select>

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

                <input
                  type="submit"
                  value="Create Transaction"
                  onClick={(e) => handleSubmit(e)}
                  className="bg-secondary text-white py-3 rounded-lg mt-1"
                />
              </form>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
};
