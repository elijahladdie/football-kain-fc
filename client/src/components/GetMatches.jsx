import React, { useState } from "react";
import video from "../assets/video/football.mp4";

const GetMatches = ({ time }) => {
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
        {
            date: "08/04/2023",
            adversary: "Kellen FC",
            clip: video,
        },
        {
            date: "08/04/2023",
            adversary: "Bingo Fc",
            clip: video,
        },
    ];
    return (
        <div className=" bg-sky-900 flex  flex-col items-center">
            <h1 class="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400  inline-block text-transparent bg-clip-text text-center  mb-4 w-full text-4xl font-extrabold leading-none tracking-tight   md:text-5xl lg:text-6xl py-4 ">
                {time} Matches
            </h1>
            <div className="flex flex-wrap align-center justify-center" >
                {(matches !== null) ? (matches.map(match => (
                    <figure key={""} class="m-3   flex-col justify-center  md:flex  bg-slate-100 rounded-xl w-[350px] min-h-[254px]   p-8 md:p-0 dark:bg-slate-800">
                        <video autoPlay loop muted class="  hover:scale-125 hover:z-30 z-10  transsition-all w-auto min-w-full min-h-auto max-w-auto"  >
                            <source src={match.clip} type="video/mp4" />
                        </video>
                        <div class="pt-6 md:p-8 text-center md:text-left space-y-2">
                            <h1 class="text-sky-500 dark:text-sky-400">KainFC V {match.adversary}</h1>
                            <div class="text-sky-500 dark:text-sky-400">On  {match.date}</div>

                        </div>
                    </figure>
                ))) : 'Nothing To Show'}

            </div>
            <a href="#" class="inline-flex items- items-center px-3 py-2 text-sm my-3 font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >
                Load more
                <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" >
                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd" >

                    </path>
                </svg>
            </a>
        </div>

    );
};


 

export default GetMatches;
