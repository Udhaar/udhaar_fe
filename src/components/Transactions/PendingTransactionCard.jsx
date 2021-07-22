import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { toast } from "react-toastify";
import { declineOrAcceptTransaction } from "../ApiRequests/api";
import { AppContext } from "../AppContext";

export const PendingTransactionCard = ({
  amount,
  description,
  external_id,
}) => {
  const [openDeclineForm, setOpenDeclineForm] = React.useState(false);
  const [declineMessage, setDeclineMessage] = React.useState("");
  const { fetchPeopleList } = React.useContext(AppContext);

  const handleSubmit = async (accept) => {
    let data = {};
    if (accept) {
      data = {
        status: 2,
      };
    } else {
      data = {
        status: 3,
        decline_comment: declineMessage,
      };
    }

    const response = await declineOrAcceptTransaction(data, {
      external_id: external_id,
    });
    if (response[0].status === 200) {
      setOpenDeclineForm(false);
      if (accept) {
        toast.success(`Transaction accepted successfully`);
      } else toast.success(`Transaction declined successfully`);
      fetchPeopleList();
    }
  };

  return (
    <div className="bg-primary w-[17rem] h-[9.91rem] flex flex-col justify-between px-5 py-2 my-2 mx-auto rounded-2xl">
      <h3 className="text-center text-4xl font-bold">${amount}</h3>
      <p className="text-center text-xs">{description}</p>
      <div className="my-2 flex justify-between">
        <button
          className="bg-[#10B981] text-white px-3 py-1 rounded-md"
          onClick={() => handleSubmit(true)}
        >
          Accept
        </button>
        <button
          className="bg-[#F87171] text-white px-3 py-1 rounded-md"
          onClick={() => setOpenDeclineForm(true)}
        >
          Decline
        </button>
        {openDeclineForm && (
          <Modal
            open={openDeclineForm}
            onClose={() => setOpenDeclineForm(false)}
          >
            <div className="flex flex-col gap-2">
              <label for="decline_message">Decline Message</label>

              <input
                type="text"
                value={declineMessage}
                id="decline_message"
                onChange={(e) => setDeclineMessage(e.target.value)}
                className="rounded-lg"
              />

              <button
                className="bg-[#F87171] text-white px-3 py-2 rounded-md"
                onClick={() => handleSubmit(false)}
              >
                Decline Transaction
              </button>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
};
