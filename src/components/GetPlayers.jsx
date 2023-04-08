import React, { useState } from "react";
import messi from "../assets/img/messi.jpg";
import rooney from "../assets/img/rooney.jpg";
import Madona from "../assets/img/madona.jpg";
import beckham from "../assets/img/beckham.jpg";
import Mbappe from "../assets/img/mappe.jpg";
const GetPlayers = () => {
    const players = [
        {
            name: "Messi",
            age: "12",
            position: "12",
            image: messi,
        },
        {
            name: " Ronney",
            age: "12",
            position: "12",
            image: rooney,
        },
        {
            name: "Maradona",
            age: "12",
            position: "12",
            image: Madona,
        },
        {
            name: "Beckham",
            age: "12",
            position: "12",
            image: beckham,
        },
        {
            name: "Mpappe",
            age: "12",
            position: "12",
            image: Mbappe,
        },
    ];
    return (
        <div className=" bg-sky-900 flex  flex-col items-center">
        <h1 class="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400  inline-block text-transparent bg-clip-text text-center  mb-4 w-full text-4xl font-extrabold leading-none tracking-tight   md:text-5xl lg:text-6xl py-4 ">
          Our Team
        </h1>
            <div className="flex flex-wrap align-center justify-center" >
            {(players !== null) ? (players.map(player => (
                    <figure key={""} class="m-3   flex-col justify-center  md:flex  bg-slate-100 rounded-xl w-[350px] min-h-[254px]   p-8 md:p-0 dark:bg-slate-800">
                        <img
                            class="  w-full md:h-full    mx-auto"
                            src={player.image}
                            alt={player.name}    
                            title={player.name}                    />
                        <div class="pt-6 md:p-8 text-center md:text-left space-y-2">
                            <h1 class="text-sky-500 dark:text-sky-400">Names: {player.name}</h1>
                            <div class="text-sky-500 dark:text-sky-400">Ages: {player.age}</div>
                            <div class="text-slate-700 dark:text-slate-500">
                                Position: {player.position}
                            </div>
                        </div>
                    </figure>
            ))):'Nothing To Show'}
            
</div>
    <a href="#" class="inline-flex items- items-center px-3 py-2 text-sm my-3 font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >
            Read more players
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor"  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" >
                <path fill-rule="evenodd"  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd" >

                </path>
            </svg>
    </a>
</div>
 
    );
};

export default GetPlayers;
