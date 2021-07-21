import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";
import { signup } from "./ApiRequests/api";

export const SignUp = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await signup(formData, []);
    if (response[0].status === 201) {
      toast.success("Registration successful!");
      history.push("/signin");
    }
  }

  return (
    <div className="min-h-screen bg-primary text-gray-800">
      {/* Udhaar logo and introduction */}
      <div className="flex items-center flex-col py-16">
        <img
          src="images/Logo_main_secondary.svg"
          alt=""
          className="text-white w-52 text-secondary"
        />

        <p className="text-xl font-light mt-2 text-secondary">
          Debt management made easy
        </p>
      </div>

      {/* signup form */}
      <div className="flex justify-center max-w-screen">
        <div className="bg-secondary flex flex-col px-8 pt-8 pb-3 rounded-lg">
          <form onSubmit={handleSubmit}>
            <div className="md:flex">
              <input
                type="text"
                className="block bg-primary mb-3 text-lg px-4 py-3 rounded-lg w-full md:w-56 mr-2 outline-none"
                placeholder="First Name"
                value={formData.first_name}
                onChange={(e) =>
                  setFormData({ ...formData, first_name: e.target.value })
                }
              />
              <input
                type="text"
                className="block bg-primary mb-3 text-lg px-4 py-3 rounded-lg w-full md:w-56 outline-none"
                placeholder="Last Name"
                value={formData.last_name}
                onChange={(e) =>
                  setFormData({ ...formData, last_name: e.target.value })
                }
              />
            </div>
            <input
              type="email"
              className="block bg-primary mb-3 text-lg px-4 py-3 rounded-lg w-full outline-none"
              placeholder="Email Id"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <input
              type="password"
              className="block bg-primary mb-3 text-lg px-4 py-3 rounded-lg w-full outline-none"
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            <motion.input
              type="submit"
              className="block bg-primary w-full bg-primary py-2 text-lg rounded-lg cursor-pointer font-bold"
              value="Sign up"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          </form>
          <p className="text-center text-sm mt-1 text-primary">
            Already have an account?{" "}
            <Link to="/signin" className="text-primary">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
