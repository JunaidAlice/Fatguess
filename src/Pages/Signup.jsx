import React from "react";

const Signup = ({ visible }) => {
  if (!visible) return null;
  return (
    <div className=" h-screen fixed top-0 backdrop-blur-3xl w-full flex items-center justify-center p-2">
      <div className="bg-black rounded-xl p-8 sm:p-10 md:p-16 lg:p-20 max-w-md w-full">
        <h1 className="text-center text-white text-2xl font-bold mb-6">
          Sign Up
        </h1>

        <div className="flex flex-col items-center justify-center mb-6">
          <label htmlFor="username" className="block mb-2 text-white text-sm">
            Enter your username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            className="w-full p-2  bg-transparent focus:outline-none text-white"
          />
        </div>

        <div className="flex items-center justify-center mb-4">
          <button className="bg-[#00A67E] hover:bg-violet-500 duration-200 text-white rounded-md p-2 w-full">
            Sign Up
          </button>
        </div>

        <p className="text-white text-center text-sm">
          By pledging, I agree to Terms of Use
        </p>
      </div>
    </div>
  );
};

export default Signup;
