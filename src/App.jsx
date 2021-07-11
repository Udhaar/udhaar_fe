import React from "react";
import { AppRouter as BeforeLoginRouter } from "./components/BeforeLoginRouter";
import { ToastContainer } from "react-toastify";
import { AfterLoginRouter } from "./components/AfterLoginRouter";

function App() {
  let router = <BeforeLoginRouter />;
  const access_token = localStorage.getItem("access_token");
  if (access_token) router = <AfterLoginRouter />;

  return (
    <div>
      <ToastContainer />
      {router}
    </div>
  );
}

export default App;
