import React from "react";

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
        <div className="bg-[#0164A2] flex flex-col px-10 pt-10 pb-3 rounded-lg">
          <form>
            <input
              type="email"
              className="block bg-[#14213D] mb-3 text-lg px-4 py-3 rounded-lg border-[3px] border-[#FCA311]"
              placeholder="Email Id"
            />
            <input
              type="password"
              className="block bg-[#14213D] mb-3 text-lg px-4 py-3 rounded-lg border-[3px] border-[#FCA311]"
              placeholder="Password"
            />
            <input
              type="submit"
              className="block bg-[#14213D] w-full bg-[#FCA311] py-1 text-lg rounded-lg cursor-pointer"
              value="Login"
            />
          </form>
          <p className="text-center text-sm mt-1">
            Don't have an account?{" "}
            <a href="/" className="text-[#FCA311]">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
