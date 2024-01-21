import React from "react";
import messi from "../assets/img/messi.jpg";
import rooney from "../assets/img/rooney.jpg";
import Madona from "../assets/img/madona.jpg";
import beckham from "../assets/img/beckham.jpg";
import Mbappe from "../assets/img/mappe.jpg";
import ball from "../assets/img/football-svgrepo-com.svg";
import Banner from "./Banner";
const Player = () => {
  return (
    <>
      <div className=" bg-sky-900 flex  flex-col items-center">
        <h1 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400  inline-block text-transparent bg-clip-text text-center  mb-4 w-full text-4xl font-extrabold leading-none tracking-tight   md:text-5xl lg:text-6xl py-4 ">
          We invest in the world’s best talents.
        </h1>
        <span className="flex flex-wrap align-center justify-center">
          <figure className="m-3   flex-col justify-center  md:flex  bg-slate-100 rounded-xl w-[350px] min-h-[254px]   p-8 md:p-0 dark:bg-slate-800">
            <img
              className=" w-24 h-24 md:w-[222px] md:h-[222px]   mt-5   rounded-full mx-auto"
              src={beckham}
              alt="beckam"
            />
            <div className="pt-6 md:p-8 text-center md:text-left space-y-2">
              <blockquote>
                <p className="text-lg font-medium text-slate-200 ">
                  “I don’t have time for hobbies. At the end of the day, I treat
                  my job as a hobby. It’s something I love doing.”
                </p>
              </blockquote>
              <figcaption className="font-medium">
                <div className="text-sky-500 dark:text-sky-400">
                  - David Beckham
                </div>
                <div className="text-slate-700 dark:text-slate-500">
                  Football Player
                </div>
              
              </figcaption>
            </div>
          </figure>
    

          <figure className="m-3   flex-col justify-center  md:flex  bg-slate-100 rounded-xl w-[350px] min-h-[254px]   p-8 md:p-0 dark:bg-slate-800">
            <img
              className=" w-24 h-24 md:w-[222px] md:h-[222px] md:h-auto  mt-5   rounded-full mx-auto"
              src={Mbappe}
              alt="madon"
            />
            <div className="pt-6 md:p-8 text-center md:text-left space-y-2">
              <blockquote>
                <p className="text-lg font-medium text-slate-200 ">
                  “Follow your dreams you will reach to success. in life expect
                  give if you want to receive.”
                </p>
              </blockquote>
              <figcaption className="font-medium">
                <div className="text-sky-500 dark:text-sky-400"> – Mpappe</div>
                <div className="text-slate-700 dark:text-slate-500">
                  Football Player.
                </div>
           
              </figcaption>
            </div>
          </figure>
          <figure className="m-3   flex-col justify-center  md:flex  bg-slate-100 rounded-xl w-[350px] min-h-[254px]   p-8 md:p-0 dark:bg-slate-800">
            <img
              className=" w-24 h-24 md:w-[222px] md:h-[222px] md:h-auto  mt-5   rounded-full mx-auto"
              src={rooney}
              alt="rooney"
            />
            <div className="pt-6 md:p-8 text-center md:text-left space-y-2">
              <blockquote>
                <p className="text-lg font-medium text-slate-200 ">
                  “I just hate losing and that gives you an extra determination
                  to work harder.”
                </p>
              </blockquote>
              <figcaption className="font-medium">
                <div className="text-sky-500 dark:text-sky-400">
                  {" "}
                  – Wayne Rooney
                </div>
                <div className="text-slate-700 dark:text-slate-500">Coach</div>
             
              </figcaption>
            </div>
          </figure>
        </span>
        
      </div>

      <div className=" bg-sky-900 flex  flex-col items-center">
        <h1 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400  inline-block text-transparent bg-clip-text text-center  mb-4 w-full text-4xl font-extrabold leading-none tracking-tight   md:text-5xl lg:text-6xl py-4 ">
          Football inspiration qoutes
        </h1>
        <span className="flex flex-wrap align-center justify-center">
          
        

          <figure className="m-3   flex-col justify-center  md:flex  bg-slate-100 rounded-xl w-[350px] min-h-[254px]   p-8 md:p-0 dark:bg-slate-800">
            <img
              className=" animate-pulse w-24 h-24 md:w-[192px] md:h-[192px] md:h-auto  mt-5   rounded-full mx-auto"
              src={ball}
              alt="madon"
            />
            <div className="pt-6 md:p-8 text-center md:text-left space-y-2">
              <blockquote>
                <p className="text-lg font-medium text-slate-200 ">
                  “When people succeed, it is because of hard work. Luck has
                  nothing to do with success.”
                </p>
              </blockquote>
              <figcaption className="font-medium">
                <div className="text-sky-500 dark:text-sky-400"> – Football </div>
              </figcaption>
            </div>
          </figure>

          <figure className="m-3   flex-col justify-center  md:flex  bg-slate-100 rounded-xl w-[350px] min-h-[254px]   p-8 md:p-0 dark:bg-slate-800">
            <img
              className=" animate-pulse w-24 h-24 md:w-[192px] md:h-[192px] md:h-auto  mt-5   rounded-full mx-auto"
              src={ball}
              alt="madon"
            />
            <div className="pt-6 md:p-8 text-center md:text-left space-y-2">
              <blockquote>
                <p className="text-lg font-medium text-slate-200 ">
                  “The dictionary is the only place that success comes before
                  work.”
                </p>
              </blockquote>
              <figcaption className="font-medium">
                <div className="text-sky-500 dark:text-sky-400"> – Football</div>
              </figcaption>
            </div>
          </figure>
          <figure className="m-3   flex-col justify-center  md:flex  bg-slate-100 rounded-xl w-[350px] min-h-[254px]   p-8 md:p-0 dark:bg-slate-800">
            <img
              className=" animate-pulse w-24 h-24 md:w-[192px] md:h-[192px] md:h-auto  mt-5   rounded-full mx-auto"
              src={ball}
              alt="rooney"
            />
            <div className="pt-6 md:p-8 text-center md:text-left space-y-2">
              <blockquote>
                <p className="text-lg font-medium text-slate-200 ">
                  “There is no defense against a perfect pass.”
                </p>
              </blockquote>
              <figcaption className="font-medium">
                <div className="text-sky-500 dark:text-sky-400"> – Football</div>
              </figcaption>
            </div>
          </figure>
        </span>
        
      </div>
      <Banner />
    </>
  );
};

export default Player;
