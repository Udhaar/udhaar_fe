import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { toast } from "react-toastify";

export const PendingTransactionCard = ({
  amount,
  description,
  external_id,
  setReRender,
}) => {
  const [openDeclineForm, setOpenDeclineForm] = React.useState(false);
  const [declineMessage, setDeclineMessage] = React.useState("");

  const handleDecline = () => {
    fetch(
      `https://udhaar-staging.herokuapp.com/api/transaction/${external_id}/`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("access_token"),
        },
        body: JSON.stringify({
          status: 3,
          decline_comment: declineMessage,
        }),
      }
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 200) {
          toast.success(`Transaction declined successfully`);
          setOpenDeclineForm(false);
          setReRender((render) => !render);
        }
      });
  };

  const handleAccept = () => {
    fetch(
      `https://udhaar-staging.herokuapp.com/api/transaction/${external_id}/`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("access_token"),
        },
        body: JSON.stringify({
          status: 2,
        }),
      }
    ).then((res) => {
      console.log(res);
      if (res.status === 200) {
        toast.success(`Transaction accepted successfully`);
        setReRender((render) => !render);
      }
    });
  };

  return (
    <div className="bg-[#EAF1FF] w-[17rem] h-[9.91rem] flex flex-col justify-between px-5 py-2 my-2 mx-auto rounded-2xl">
      <h3 className="text-center text-4xl font-bold">${amount}</h3>
      <p className="text-center text-xs">{description}</p>
      <div className="my-2 flex justify-between">
        <button
          className="bg-[#10B981] text-white px-3 py-1 rounded-md"
          onClick={() => handleAccept()}
        >
          Accept
        </button>
        <button
          className="bg-[#F87171] text-white px-3 py-1 rounded-md"
          onClick={() => setOpenDeclineForm(true)}
        >
          Decline
        </button>
        <Modal open={openDeclineForm} onClose={() => setOpenDeclineForm(false)}>
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
              onClick={() => handleDecline()}
            >
              Decline Transaction
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
};
