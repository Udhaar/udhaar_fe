import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SignIn = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:8000/api/user/token/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        console.log(response);
        const statusCode = response.status;
        const data = response.json();
        return Promise.all([statusCode, data]);
      })
      .then((res) => {
        if (res[0] === 200) {
          localStorage.setItem("access_token", `Token ${res[1]["token"]}`);
          history.push("/home");
          window.location.reload();
        } else {
          for (var k in res[1]) {
            toast.error(res[1][k][0]);
          }
        }
      })
      .catch((error) => {
        toast.error("Something went wrong");
      });
  };

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
            <input
              type="email"
              className="block bg-[#14213D] mb-3 text-lg px-4 py-3 rounded-lg border-[3px] border-[#FCA311] outline-none"
              placeholder="Email Id"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <input
              type="password"
              className="block bg-[#14213D] mb-3 text-lg px-4 py-3 rounded-lg border-[3px] border-[#FCA311] outline-none"
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
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
