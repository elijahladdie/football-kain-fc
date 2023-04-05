import React from "react";
import Nav from "./Nav";
import video from "../assets/video/football.mp4";
import ball from "../assets/img/football-svgrepo-com.svg"


const Header = () => {
  return (
    <div>
      <header class="relative">
      <Nav />     
      <video autoPlay loop muted  class="   z-10 w-auto min-w-full min-h-auto max-w-auto"  >
          <source src={video}  type="video/mp4"/>
        </video>
      
        <div class=" fixed  rounded-r-3xl pl-4 p-1 justify-center  top-[5em] bg-black z-10  text-2xl text-white ">
            
            <img src={ball} className="w-8 animate-spin "/>
        </div>
       </header>
    </div>
  );
};

export default Header;
