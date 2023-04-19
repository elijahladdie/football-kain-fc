import React, { useState } from 'react'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import AnimatedProgressProvider from '../AnimatedProgressProvider';
import {   easeSinIn } from "d3-ease";
import Example from '../Example';
import "react-circular-progressbar/dist/styles.css";



const Dashboard = () => {

  const [view, setView] = useState(false)

  return (
    <div>
      <div class=" bg-gray-50 dark:bg-gray-700 min-screen-xl py-3 " >
        <button type="button"  class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
          <svg aria-hidden="true"  class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>

          <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>STAFF</span>
          <svg sidebar-toggle-item class="w-6 h-6" onClick={() => setView((open) => !open)} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
        <div id="dropdown-example " class={` ${view ? 'hidden' : ''} py-2 items-center justify-evenly flex-col sm:flex-row space-y-2 flex `}>
          {[
            
            ['President',"Jeff MUHINYUZA"],
            ['Manager',"Dreck GATO"],
            ['Secretary',"Jeanne KAYITERA"],
            ['Captain',"Rico Pie"],
            ['Accountant',"Monday Chrito"],
          ].map(([title,name]) => (
            <pre className="flex flex-col border  border-white px-4  items-center w-94 p-2 text-gray-900 transition duration-75 
            rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
              <h1 className=' text-center '>{title}</h1>
              <hr className='bg-white border-white h-2' />
            <span className=' text-center ' >{name}</span>
            </pre>
          ))}
        </div>
        


      </div>
      <div className="flex w-full justify-center py-3">
      <Example label="">
        <AnimatedProgressProvider
          valueStart={0}
          valueEnd={30}
          duration={1}
          className="w-full"
          easingFunction={easeSinIn}
          repeat
        >
          {value => {
            const roundedValue = Math.round(value);
            return (
              <CircularProgressbar
                value={value}
                text={`${roundedValue}% `}
                /* This is important to include, because if you're fully managing the
          animation yourself, you'll want to disable the CSS animation. */
                styles={buildStyles({ pathTransition: "none" })}
              />
            );
          }}
        </AnimatedProgressProvider>
        <h1 className='text-center px-3 text-2xl text-white'>Matches</h1>
      </Example>
      <Example label="">
        <AnimatedProgressProvider
          valueStart={0}
          valueEnd={70}
          duration={1}
          easingFunction={easeSinIn}
          repeat
        >
          {value => {
            const roundedValue = Math.round(value);
            return (
              <CircularProgressbar
                value={value}
                text={`${roundedValue}% `}
                /* This is important to include, because if you're fully managing the
          animation yourself, you'll want to disable the CSS animation. */
                styles={buildStyles({ pathTransition: "none" })}
              />
            );
          }}
        </AnimatedProgressProvider>
        <h1 className='text-center px-3 text-2xl text-white'>Coach</h1>
      </Example>
      <Example label="">
        <AnimatedProgressProvider
          valueStart={0}
          valueEnd={50}
          duration={1}
          easingFunction={easeSinIn}
          repeat
        >
          {value => {
            const roundedValue = Math.round(value);
            return (
              <CircularProgressbar
                value={value}
                text={`${roundedValue}% `}
                /* This is important to include, because if you're fully managing the
          animation yourself, you'll want to disable the CSS animation. */
                styles={buildStyles({ pathTransition: "none" })}
              />
            );
          }}
        </AnimatedProgressProvider>
        <h1 className='text-center px-3 text-2xl text-white'>Referees</h1>
      </Example>
    </div>


    </div>

  )
}

export default Dashboard