import React from "react";
import ball from "../assets/img/football-svgrepo-com.svg";

const  Empty = ({page}) => {
  return (
    <div className="h-[614.5px] w-full">
      <div className=" h-full flex flex-col items-center justify-center bg-sky-800">
        <img src={ball} className="h-[200px] animate-bounce" alt="" />
        <p className="text-xl text-white text-center">
          Ooops! <span className="text-[30px]">|</span> No {page} availabe.
        </p>
      </div>
    </div>
  );
}

export default Empty;
