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
    <div className="min-h-screen bg-[#14213D] text-white">
      {/* Udhaar logo and introduction */}
      <div className="flex items-center flex-col py-16">
        <img src="images/Logoo.svg" alt="" className="text-white w-52" />
        <p className="text-xl font-light mt-2">Debt management made easy</p>
      </div>

      {/* signin form */}
      <div className="flex justify-center">
        <div className="bg-[#0164A2] flex flex-col px-8 pt-8 pb-3 rounded-lg">
          <form onSubmit={handleSubmit}>
            <div className="md:flex">
              <input
                type="text"
                className="block bg-[#14213D] mb-3 text-lg px-4 py-3 rounded-lg border-[3px] border-[#FCA311] w-full md:w-56 mr-2 outline-none"
                placeholder="First Name"
                value={formData.first_name}
                onChange={(e) =>
                  setFormData({ ...formData, first_name: e.target.value })
                }
              />
              <input
                type="text"
                className="block bg-[#14213D] mb-3 text-lg px-4 py-3 rounded-lg border-[3px] border-[#FCA311] w-full md:w-56 outline-none"
                placeholder="Last Name"
                value={formData.last_name}
                onChange={(e) =>
                  setFormData({ ...formData, last_name: e.target.value })
                }
              />
            </div>
            <input
              type="email"
              className="block bg-[#14213D] mb-3 text-lg px-4 py-3 rounded-lg border-[3px] border-[#FCA311] w-full outline-none"
              placeholder="Email Id"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <input
              type="password"
              className="block bg-[#14213D] mb-3 text-lg px-4 py-3 rounded-lg border-[3px] border-[#FCA311] w-full outline-none"
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            <motion.input
              type="submit"
              className="block bg-[#14213D] w-full bg-[#FCA311] py-1 text-lg rounded-lg cursor-pointer font-bold"
              value="Sign up"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          </form>
          <p className="text-center text-sm mt-1">
            Already have an account?{" "}
            <Link to="/signin" className="text-[#FCA311]">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
