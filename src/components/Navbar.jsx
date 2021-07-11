import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const Navbar = () => {
  const history = useHistory();
  const [selectedTab, setSelectedTab] = useState("transactions");

  return (
    <div className="bg-darker h-full align-baseline max-h-screen text-center text-white flex flex-col justify-between">
      <div className="pt-3">
        <img
          src="/images/Logoo.svg"
          alt="Udhaar logo"
          className="w-44 block m-auto"
        />
      </div>

      <div className="flex flex-col">
        <button
          className={`text-2xl py-2 ${
            selectedTab === "transactions" ? "bg-primary" : ""
          }`}
          onClick={() => setSelectedTab("transactions")}
        >
          Transactions
        </button>
        <button
          className={`text-2xl py-2 ${
            selectedTab === "personal" ? "bg-primary" : ""
          }`}
          onClick={() => setSelectedTab("personal")}
        >
          Personal
        </button>
        <button
          className={`text-2xl py-2 ${
            selectedTab === "preferences" ? "bg-primary" : ""
          }`}
          onClick={() => setSelectedTab("preferences")}
        >
          Preferences
        </button>
        <button
          className={`text-2xl py-2 ${
            selectedTab === "profile" ? "bg-primary" : ""
          }`}
          onClick={() => setSelectedTab("profile")}
        >
          Profile
        </button>
        <button
          className={`text-2xl py-2 ${
            selectedTab === "notifications" ? "bg-primary" : ""
          }`}
          onClick={() => setSelectedTab("notifications")}
        >
          Notifications
        </button>
      </div>
      <div className="">
        <button
          className="bg-primary rounded-lg text-2xl mb-5 w-5/6 py-2"
          onClick={() => {
            localStorage.removeItem("access_token");
            history.push("/");
            window.location.reload();
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};
