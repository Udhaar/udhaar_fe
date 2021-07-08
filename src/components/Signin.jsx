import React from "react";
import { Link } from "react-router-dom";

export const SignIn = () => {
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
          <form>
            <input
              type="email"
              className="block bg-[#14213D] mb-3 text-lg px-4 py-3 rounded-lg border-[3px] border-[#FCA311] outline-none"
              placeholder="Email Id"
            />
            <input
              type="password"
              className="block bg-[#14213D] mb-3 text-lg px-4 py-3 rounded-lg border-[3px] border-[#FCA311] outline-none"
              placeholder="Password"
            />
            <input
              type="submit"
              className="block bg-[#14213D] w-full bg-[#FCA311] py-1 text-lg rounded-lg cursor-pointer font-bold"
              value="Login"
            />
          </form>
          <p className="text-center text-sm mt-1">
            Don't have an account?{" "}
            <Link to="/signup" className="text-[#FCA311]">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
