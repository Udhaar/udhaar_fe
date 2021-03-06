import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";
import { signin } from "./ApiRequests/api";

export const SignIn = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await signin(formData, []);
    if (response[0].status === 200) {
      localStorage.setItem("access_token", `Token ${response[1]["token"]}`);
      history.push("/");
      window.location.reload();
    }
  };

  return (
    <div className="min-h-screen bg-primary text-white">
      {/* Udhaar logo and introduction */}
      <div className="flex items-center flex-col py-16 text-secondary">
        <img
          src="images/Logo_main_secondary.svg"
          alt=""
          className="text-white w-52 text-secondary"
        />
        <p className="text-xl font-light mt-2">Debt management made easy</p>
      </div>

      {/* signin form */}
      <div className="flex justify-center">
        <div className="bg-secondary flex flex-col px-8 pt-8 pb-3 rounded-lg text-gray-800">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              className="block bg-primary mb-3 text-lg px-4 py-3 rounded-lg outline-none"
              placeholder="Email Id"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <input
              type="password"
              className="block bg-primary mb-3 text-lg px-4 py-3 rounded-lg outline-none"
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            <motion.input
              type="submit"
              className="block bg-primary w-full bg-primary py-2 text-lg rounded-lg cursor-pointer font-bold"
              value="Login"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          </form>
          <p className="text-center text-sm mt-1 text-primary">
            Don't have an account?{" "}
            <Link to="/signup" className="text-primary">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
