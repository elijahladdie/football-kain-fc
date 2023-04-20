import React, { useState } from 'react';
import img from "../../assets/img/football-svgrepo-com.svg"
const Nav = () => {
   const [show, setShow] = useState(false)
   const [view, setView] = useState(false)
 

   return (
      <>
         <div >
            <aside id="default-sidebar" className={`fixed  top-0 left-0 z-0 w-64 h-screen transition-transform 
         -translate-x-full ${show ? 'translate-x-0 ' : ' '}  z-50  `} aria-label="Sidebar">
               <div className="h-full px-3 py-11 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                  <ul className="space-y-2 font-medium">
                     <li className="mx-3 flex justify-center">
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white ">
                           <img src={img} alt="" className="w-8 h-8 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                           <span className="ml-3 text-2xl">KAIN FC</span>
                        </a>
                     </li>
                     <li>
                        <a href="/admin/app/dashboard" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                           <svg aria-hidden="true" className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                           <span className="ml-3">Dashboard</span>
                        </a>
                     </li>
                     <li>
                        <button type="button"  className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                        <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
              
                           <span className="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Manage</span>
                           <svg sidebar-toggle-item className="w-6 h-6" onClick={() => setView((open) => !open)} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                        <ul id="dropdown-example" className={` ${view ? 'hidden' : ''} py-2 space-y-2`}>
                           <li>
                              <a href="/admin/app/dashboard/adversaries" className="flex items-center w-full p-2 text-gray-900 transition duration-75 
                              rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Adversaries</a>
                           </li>
                           <li>
                              <a href="/admin/app/dashboard/matches" className="flex items-center w-full p-2 text-gray-900 transition duration-75 
                              rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Matches</a>
                           </li>
                           <li>
                              <a href="/admin/app/dashboard/referees" className="flex items-center w-full p-2 text-gray-900 transition duration-75 
                              rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Referees</a>
                           </li>
                            
                        </ul>
                     </li>
                     <li>
                        <a href="https://www.fifa.com/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">


                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="27" width="27" transform="rotate(45)"><rect width="256" height="256" fill="none"></rect><path d="M231.8,134.8a4.8,4.8,0,0,0,0-1.2c.1-1.9.2-3.7.2-5.6a103.2,103.2,0,0,0-23-65.1,5.5,5.5,0,0,0-1.4-1.7,103.9,103.9,0,0,0-41.1-29.8l-1.1-.4a103.4,103.4,0,0,0-74.8,0l-1.1.4A103.9,103.9,0,0,0,48.4,61.2,5.5,5.5,0,0,0,47,62.9,103.2,103.2,0,0,0,24,128c0,1.9.1,3.7.2,5.6a4.8,4.8,0,0,0,0,1.2,104.2,104.2,0,0,0,15.7,48.4,9.9,9.9,0,0,0,1.1,1.7,104.3,104.3,0,0,0,60.3,43.6h.3a104.2,104.2,0,0,0,52.8,0h.3A104.3,104.3,0,0,0,215,184.9a9.9,9.9,0,0,0,1.1-1.7A104.2,104.2,0,0,0,231.8,134.8ZM68.5,117.1l13.2,4.3,12.7,39.2-8.1,11.2H51.7a86.2,86.2,0,0,1-11.2-34.3Zm119,0,28,20.4a86.2,86.2,0,0,1-11.2,34.3H169.7l-8.1-11.2,12.7-39.2ZM193.2,69l-10.7,32.9-13.2,4.3L136,81.9V68.1l28-20.4A87,87,0,0,1,193.2,69ZM92,47.7l28,20.4V81.9L86.7,106.2l-13.2-4.3L62.8,69A87,87,0,0,1,92,47.7Zm18,166.4L99.3,181.2l8.1-11.2h41.2l8.1,11.2L146,214.1a86.2,86.2,0,0,1-36,0Z" id="mainIconPathAttribute" strokeWidth="0" stroke="#ff0000" filter="url(#shadow)" fill="#737373"></path><filter id="shadow"><feDropShadow id="shadowValue" stdDeviation=".5" dx="0" dy="0" floodColor="black"></feDropShadow></filter></svg>


                           <span className="flex-1 ml-3 whitespace-nowrap">FIFA</span>
                        </a>
                     </li>
                     <li>
                        <a href="http://www.ferwafa.rw/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="27" width="27" transform="rotate(45)"><rect width="256" height="256" fill="none"></rect><path d="M231.8,134.8a4.8,4.8,0,0,0,0-1.2c.1-1.9.2-3.7.2-5.6a103.2,103.2,0,0,0-23-65.1,5.5,5.5,0,0,0-1.4-1.7,103.9,103.9,0,0,0-41.1-29.8l-1.1-.4a103.4,103.4,0,0,0-74.8,0l-1.1.4A103.9,103.9,0,0,0,48.4,61.2,5.5,5.5,0,0,0,47,62.9,103.2,103.2,0,0,0,24,128c0,1.9.1,3.7.2,5.6a4.8,4.8,0,0,0,0,1.2,104.2,104.2,0,0,0,15.7,48.4,9.9,9.9,0,0,0,1.1,1.7,104.3,104.3,0,0,0,60.3,43.6h.3a104.2,104.2,0,0,0,52.8,0h.3A104.3,104.3,0,0,0,215,184.9a9.9,9.9,0,0,0,1.1-1.7A104.2,104.2,0,0,0,231.8,134.8ZM68.5,117.1l13.2,4.3,12.7,39.2-8.1,11.2H51.7a86.2,86.2,0,0,1-11.2-34.3Zm119,0,28,20.4a86.2,86.2,0,0,1-11.2,34.3H169.7l-8.1-11.2,12.7-39.2ZM193.2,69l-10.7,32.9-13.2,4.3L136,81.9V68.1l28-20.4A87,87,0,0,1,193.2,69ZM92,47.7l28,20.4V81.9L86.7,106.2l-13.2-4.3L62.8,69A87,87,0,0,1,92,47.7Zm18,166.4L99.3,181.2l8.1-11.2h41.2l8.1,11.2L146,214.1a86.2,86.2,0,0,1-36,0Z" id="mainIconPathAttribute" strokeWidth="0" stroke="#ff0000" filter="url(#shadow)" fill="#737373"></path><filter id="shadow"><feDropShadow id="shadowValue" stdDeviation=".5" dx="0" dy="0" floodColor="black"></feDropShadow></filter></svg>
                           <span className="flex-1 ml-3 whitespace-nowrap">FERWAFA</span>
                        </a>
                     </li>
                     <li>
                        <a href="https://www.moh.gov.rw/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="27" width="27" transform="rotate(45)"><rect width="256" height="256" fill="none"></rect><path d="M231.8,134.8a4.8,4.8,0,0,0,0-1.2c.1-1.9.2-3.7.2-5.6a103.2,103.2,0,0,0-23-65.1,5.5,5.5,0,0,0-1.4-1.7,103.9,103.9,0,0,0-41.1-29.8l-1.1-.4a103.4,103.4,0,0,0-74.8,0l-1.1.4A103.9,103.9,0,0,0,48.4,61.2,5.5,5.5,0,0,0,47,62.9,103.2,103.2,0,0,0,24,128c0,1.9.1,3.7.2,5.6a4.8,4.8,0,0,0,0,1.2,104.2,104.2,0,0,0,15.7,48.4,9.9,9.9,0,0,0,1.1,1.7,104.3,104.3,0,0,0,60.3,43.6h.3a104.2,104.2,0,0,0,52.8,0h.3A104.3,104.3,0,0,0,215,184.9a9.9,9.9,0,0,0,1.1-1.7A104.2,104.2,0,0,0,231.8,134.8ZM68.5,117.1l13.2,4.3,12.7,39.2-8.1,11.2H51.7a86.2,86.2,0,0,1-11.2-34.3Zm119,0,28,20.4a86.2,86.2,0,0,1-11.2,34.3H169.7l-8.1-11.2,12.7-39.2ZM193.2,69l-10.7,32.9-13.2,4.3L136,81.9V68.1l28-20.4A87,87,0,0,1,193.2,69ZM92,47.7l28,20.4V81.9L86.7,106.2l-13.2-4.3L62.8,69A87,87,0,0,1,92,47.7Zm18,166.4L99.3,181.2l8.1-11.2h41.2l8.1,11.2L146,214.1a86.2,86.2,0,0,1-36,0Z" id="mainIconPathAttribute" strokeWidth="0" stroke="#ff0000" filter="url(#shadow)" fill="#737373"></path><filter id="shadow"><feDropShadow id="shadowValue" stdDeviation=".5" dx="0" dy="0" floodColor="black"></feDropShadow></filter></svg>
                           <span className="flex-1 ml-3 whitespace-nowrap">MINISANTE</span>
                        </a>
                     </li>

                     <li>
                        <a href="/admin/app/dashboard/logout" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                           <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clipRule="evenodd"></path></svg>
                           <span className="flex-1 ml-3 whitespace-nowrap">Sign out</span>
                        </a>
                     </li>
                  </ul>
               </div>
            </aside>
            <button data-drawer-target="default-sidebar" onClick={() => setShow((open) => !open)} data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button"
               className="inline-flex items-center absolute z-50 p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2
           focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
               <span className="sr-only">Open sidebar</span>
               <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
               </svg>
            </button>
         </div>

         <nav className="flex justify-center bg-white border-gray-200 dark:bg-gray-900">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
               <p className="flex items-center">
                  <img src={img} className="  h-8 mr-3" alt="Kain Logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">KAIN FC</span>
               </p>

            </div>
         </nav>
 
      </>
   )
}

export default Nav