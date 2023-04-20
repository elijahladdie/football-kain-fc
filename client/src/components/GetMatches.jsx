import React, { useState } from "react";
import video from "../assets/video/football.mp4";

const GetMatches = () => {
    const matches = [
        {
            date: "08/04/2023",
            adversary: "Dash FC",
            clip: video,
        },
        {
            date: "08/04/2023",
            adversary: "King FC",
            clip: video,
        },
        {
            date: "08/04/2023",
            adversary: "Kalim FC",
            clip: video,
        },
        
    ];
    return (
        <div className=" bg-sky-900 flex  flex-col items-center">
            <h1 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400  inline-block text-transparent bg-clip-text text-center  mb-4 w-full text-xl font-extrabold leading-none tracking-tight   md:text-3xl lg:text-4xl py-4 ">
                Upcoming events 
            </h1>
            <div className="flex flex-wrap align-center justify-center" >
                {matches.map(match => (
                    <figure key={""} className="m-3   flex-col justify-center  md:flex  bg-slate-100 rounded-xl w-[350px] min-h-[254px]   p-8 md:p-0 dark:bg-slate-800">
                        <video autoPlay loop muted className="  hover:scale-125 hover:z-30 z-10  transsition-all w-auto min-w-full min-h-auto max-w-auto"  >
                            <source src={match.clip} type="video/mp4" />
                        </video>
                        <div className="pt-6 md:p-8 text-center md:text-left space-y-2">
                            <h1 className="text-sky-500 dark:text-sky-400">KainFC V {match.adversary}</h1>
                            <div className="text-sky-500 dark:text-sky-400">On  {match.date}</div>

                        </div>
                    </figure>
                ))}

            </div>

        </div>

    );
};


 

export default GetMatches;
