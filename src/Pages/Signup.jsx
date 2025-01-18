import React from "react";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

const Signup = ({ cross }) => {
  return (
    <div className=" h-screen fixed top-0 bg-[#1f1f1f] w-full flex items-center justify-center p-2  z-50">
      <div className="bg-[#040404] relative rounded-xl p-8 sm:p-8 max-w-md w-full">
        <h1 className="text-center text-white tracking-tighter text-3xl font-extrabold mb-6">
          Sign Up
        </h1>

        <div className="flex flex-col items-center justify-center mb-6">
         <label
            htmlFor="username"
            className="block mb-2 tracking-tighter text-gray-200 w-full text-start text-sm"
          >
            Enter your username
          </label>
          
          <input
            type="text"
            id="username"
            placeholder="Username"
            className="w-full p-2  bg-transparent focus:outline-none text-white border-b"
          />
        </div>

        <div className=" mb-4">
          <Link to="/dashboard">
            <button className="bg-[#00A67E] hover:bg-violet-500 duration-200  text-white rounded-md p-2 w-full">
              Sign Up
            </button>
          </Link>
        </div>

        <p className="text-white text-center text-sm tracking-tighter">
          By pledging, I agree to{" "}
          <span className="underline hover:cursor-pointer tracking-tighter">
            Terms of Use
          </span>
        </p>
        <div
        className="text-white absolute hover:cursor-pointer top-8 left-8"
        onClick={cross}
      >
        <RxCross2 />
      </div>
      </div>
      
    </div>
  );
};

export default Signup;
