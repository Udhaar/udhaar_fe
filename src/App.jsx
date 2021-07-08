import React, { useState } from "react";
import { SignIn } from "./components/Signin";
import { SignUp } from "./components/SignUp";

function App() {
  const [count, setCount] = useState(0);

  // return <SignUp />;
  return <SignIn />;
}

export default App;
