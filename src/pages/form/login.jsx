import React, { useState } from "react";
import img from "../../assets/img/bg-unkown.jpg";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  return (
    <div className=""
      style={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div class="w-full   flex flex-col justify-center h-screen items-center ">
        <span
          className={` bg-white/30 backdrop-blur-2xl rounded-xl border border-slate-600 transition-all   opacity-25 ${
            isSignUp ? "h-[600px]" : "h-96"
          }  w-96 `}
        ></span>
        <form class=" absolute    rounded px-8 pt-6 pb-8 mb-4  ">
          <h1 className="text-center text-white text-lg py-3">  {isSignUp ? 'Sign Up' : 'Sign In '} </h1>
          <div class="mb-4">
            <label
              class="block text-white text-sm font-bold mb-2"
              for="username"
            >
              Username
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Username"
            />
          </div>

          {isSignUp && (
            <>
              <div class="mb-6">
                <label
                  class="block text-white text-sm font-bold mb-2"
                  for="phone"
                >
                  Phone
                </label>
                <input
                  class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight bg-white focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Enter your Phone"
                />
              </div>
              <div class="mb-4">
                <label
                  class="block text-white text-sm font-bold mb-2"
                  for="username"
                >
                  Name
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Name"
                />
              </div>
            </>
          )}

          <div class="mb-6">
            <label
              class="block text-white text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="Enter your Password"
            />
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => {
                isSignUp == true
                  ? setIsSignUp(!isSignUp)
                  : window.location.replace("/");
              }}
            >
              Sign In
            </button> or
            <button
              class=" mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => {
            if (isSignUp == true) {
                } else {
                  setIsSignUp(!isSignUp);
                }
              }}
            >
              Sign Up
            </button>
            
          </div>
        </form>
        <p class="text-center text-white text-xs">
          &copy;2023 Kain FC. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;
