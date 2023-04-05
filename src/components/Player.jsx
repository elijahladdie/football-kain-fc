import React from "react";
import messi from "../assets/img/messi.jpg";
import rooney from "../assets/img/rooney.jpg";
import Madona from "../assets/img/madona.jpg";
import beckham from "../assets/img/beckham.jpg";
import Banner from "./Banner";
const Player = () => {
  return (
    <>
    <div className="flex flex-wrap align-center justify-center">
      <h1 class="text-center  mb-4 w-full text-4xl font-extrabold leading-none tracking-tight text-gray-900  md:text-5xl lg:text-6xl dark:text-slate-800 text-black ">
        We invest in the world’s potential
      </h1>

      <figure class="m-3 md:flex  bg-slate-100 rounded-xl w-[500px] min-h-[254px]   p-8 md:p-0 dark:bg-slate-800">
        <img
          class=" w-24 h-24 md:w-[422px] md:h-auto md:rounded-none rounded-full mx-auto"
          src={beckham}
          alt="beckam"
        />
        <div class="pt-6 md:p-8 text-center md:text-left space-y-2">
          <blockquote>
            <p class="text-lg font-medium text-slate-200 ">
            I don’t have time for hobbies. At the end of the day, I treat my job as a hobby. It’s something I love doing
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">- David Beckham</div>
            <div class="text-slate-700 dark:text-slate-500">
              Football Player
            </div>
            <a
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm my-3 font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                aria-hidden="true"
                class="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </figcaption>
        </div>
      </figure>
      <figure class="m-3 md:flex  bg-slate-100 rounded-xl w-[500px] min-h-[254px]   p-8 md:p-0 dark:bg-slate-800">
        <img
          class=" w-24 h-24 md:w-[432px]  md:h-auto md:rounded-none rounded-full mx-auto"
          src={messi}
          alt=""
        />
        <div class="pt-6 md:p-8 text-center md:text-left space-y-2">
          <blockquote>
            <p class="text-lg font-medium text-slate-200 ">
            “You have to fight to reach your dream. You have to sacrifice and work hard for it.”
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400"> – Lionel Messi</div>
            <div class="text-slate-700 dark:text-slate-500">
              Football Player
            </div>
            <a
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm my-3 font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                aria-hidden="true"
                class="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </figcaption>
        </div>
      </figure>
      <h1 class="text-center  mb-4 w-full text-4xl font-extrabold leading-none tracking-tight text-gray-900  md:text-5xl lg:text-6xl dark:text-slate-800 text-black ">
        Players For All Time
      </h1>

      <figure class="m-3 md:flex  bg-slate-100 rounded-xl w-[500px] min-h-[254px]   p-8 md:p-0 dark:bg-slate-800">
        <img
          class=" w-24 h-24 md:w-[340px]  md:h-auto md:rounded-none rounded-full mx-auto"
          src={Madona}
          alt=""
        />
        <div class="pt-6 md:p-8 text-center md:text-left space-y-2">
          <blockquote>
            <p class="text-lg font-medium text-slate-200 ">
            “When people succeed, it is because of hard work. Luck has nothing to do with success.”
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400"> – Diego Maradona</div>
            <div class="text-slate-700 dark:text-slate-500">
             Retired footballer 
            </div>
            <a
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm my-3 font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                aria-hidden="true"
                class="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </figcaption>
        </div>
      </figure>
      <figure class="m-3 md:flex  bg-slate-100 rounded-xl w-[500px] min-h-[254px]   p-8 md:p-0 dark:bg-slate-800">
        <img
          class=" w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src={rooney}
          alt=""
        />
        <div class="pt-6 md:p-8 text-center md:text-left space-y-2">
          <blockquote>
            <p class="text-lg font-medium text-slate-200 ">
            “I just hate losing and that gives you an extra determination to work harder.”
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400"> – Wayne Rooney</div>
            <div class="text-slate-700 dark:text-slate-500">
              Coach
            </div>
            <a
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm my-3 font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                aria-hidden="true"
                class="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </figcaption>
        </div>
      </figure>
    </div>
      <Banner/></>
  );
};

export default Player;
