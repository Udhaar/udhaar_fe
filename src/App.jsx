import React from "react";
import { BeforeLoginRouter } from "./components/BeforeLoginRouter";
import { ToastContainer } from "react-toastify";
import { AfterLoginRouter } from "./components/AfterLoginRouter";

function App() {
  const access_token = localStorage.getItem("access_token");
  let router = null;
  if (access_token) router = <AfterLoginRouter />;
  else router = <BeforeLoginRouter />;

  return (
    <div>
      <ToastContainer />
      {router}
    </div>
  );
}

export default App;
