import React from "react";
import ball from "../assets/img/football-svgrepo-com.svg";

function NotFound() {
  return (
    <div>
      <div className="h-screen w-full flex flex-col items-center justify-center bg-sky-800">
        <img src={ball} className="h-[200px] animate-bounce" alt="" />
        <p className="text-xl text-white text-center">
          404 <span className="text-[30px]">|</span> This page could not be found.
        </p>
        <a
          href="/"
          className="inline-flex items-center px-3 py-2 text-sm my-3 font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Back home
        </a>
      </div>
    </div>
  );
}

export default NotFound;
