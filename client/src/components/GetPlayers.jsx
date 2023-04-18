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
            <div className="flex w-full flex-wrap align-center justify-center" >

                {(players !== null) ? (players.map(player => (

                    <div class=" m-3 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <div class="flex justify-end px-4 pt-4">
                            <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                                <span class="sr-only">Open dropdown</span>
                                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                            </button>

                            <div id="dropdown" class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                <ul class="py-2" aria-labelledby="dropdownButton">
                                    <li>
                                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="flex flex-col items-center pb-10">
                            <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={player.image}
                                alt={player.name}
                                title={player.name} />
                            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{player.name}</h5>
                            <span class="text-sm text-gray-500 dark:text-gray-400">Position: {player.position}  Goal: {player.age}</span>
                            <div class="flex mt-4 space-x-3 md:mt-6">
                                <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View Details</a>
                                <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</a>
                            </div>
                        </div>
                    </div>

                ))) : 'Nothing To Show'}






            </div>
          
        </div>

    );
};

export default GetPlayers;
