import React from "react";
import ball from "../assets/img/football-svgrepo-com.svg";
import { HalfMalf, DoubleBubble, SlidingPebbles }
  from 'react-spinner-animated';
import 'react-spinner-animated/dist/index.css'
const Loading = () => {
  return (
    <div className="h-[614.5px] w-full">
      <div className=" h-full flex flex-col items-center justify-center b">
        <DoubleBubble text={"Loading..."}
          center={false} width={"150px"} height={"150px"}  id="don " className="animate-bounce" />
      </div>
    </div>
  );
}

export default Loading;
