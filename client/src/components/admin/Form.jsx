import React, { useState, useCallback } from 'react'
import swal from 'sweetalert';

const Form = () => {
    const [selectValue, setSelectValue] = useState("")
    const [inputValue, setInputValue] = useState("")
    const [toggle, setToggle] = useState(null)
    const handleChange = (e) => {
        setSelectValue({ [e.target.name]: e.target.value })
        console.log(selectValue.name)
    }
    // const handleFormData = (e) => {
    //     ({ [e.target.name]: e.target.value })
    //    
    // }
    const handleFormData = useCallback(
        (e) => {
            setInputValue({ ...inputValue, [e.target.name]: e.target.value });
            console.log(inputValue)
        },
        [inputValue]
    );
    const handleAlert = ({ action }) => {
        swal({
            title: "Good job!",
            text: ` ${action} `,
            icon: "success",
            button: "OK",
        })
    }

    return (
        <div className='flex screen items-center justify-center h-screen dark:bg-gray-900'>

            {/* <!-- Modal toggle --> */}
            <div className="flex flex-col items-center">

                <select name='name' onChange={handleChange} class="text-center  bg-sky-800 dark:bg-gray-900 block px-5 py-2.5
                        text-sm text-gray-500 w-full h-14 border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700
                        focus:outline-none focus:ring-0 focus:border-gray-200 my-3">
                    <option value="">Nothing</option>
                    <option value="adversary">Adversaries</option>
                    <option value="match">Matches</option>
                    <option value="referee">Referees</option>
                </select>

                {selectValue.name == "adversary" ? <button onClick={() => setToggle(true)} class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                    Toggle Adveseries
                </button> : ''}

                {selectValue.name == "match" ? <button onClick={() => setToggle(true)} class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                    Toggle Match
                </button> : ''}

                {selectValue.name == "referee" ? <button onClick={() => setToggle(true)} class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                    Toggle Referee
                </button> : ''}
            </div>


            {/* <!-- Main modal --> */}
            <div id="authentication-modal" tabindex="-1" class={`absolute flex items-center justify-center left-0 right-0 z-50 ${toggle ? "" : 'hidden'} w-full p-4
             overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
                <div class="relative w-full max-w-md max-h-full">
                    {/* <!-- Modal content --> */}
                    <div class={`${selectValue.name == "adversary" ? "" : "hidden"} relative bg-white rounded-lg shadow dark:bg-gray-700`}>
                        <button onClick={() => setToggle(false)} class={`absolute top-3 right-2.5 text-gray-400 bg-transparent 
                        hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center 
                        dark:hover:bg-gray-800 dark:hover:text-white`} data-modal-hide="authentication-modal">
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">Hide adversary</span>
                        </button>
                        <div class="px-6 py-6 lg:px-8">
                            <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Adversary</h3>
                            <form class="space-y-6" action="#">
                                <div>
                                    <label htmlFor="adversary" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New adversary </label>
                                    <input type="adversary" name="adversary" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                    dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter new adversary" />
                                </div>
                                <div className='flex '>
                                    <button onClick={()=>handleAlert({ action: "New  Adversary added" })} class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
                                focus:outline-none mx-3 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
                                    <button type="reset" class="w-full text-white bg-red-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 
                                text-center mx-3 dark:bg-red-600 dark:hover:bg-red-500 dark:focus:ring-blue-800">Reset</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* <!-- Modal content --> */}
                    <div class={`${selectValue.name == "match" ? "" : "hidden"} relative bg-white rounded-lg shadow dark:bg-gray-700`}>
                        <button onClick={() => setToggle(false)} class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="authentication-modal">
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">Hide</span>
                        </button>
                        <div class="px-6 py-6 lg:px-8">
                            <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Register New Match</h3>
                            <form class="space-y-6" action="#">
                                <div>
                                    <label htmlFor="date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                                    <input type="date" name="Date" onChange={handleFormData} id="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" />
                                </div>
                                <div>
                                    <label htmlFor="Play_Ground" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Play Ground</label>
                                    <input type="text" name="Play_Ground" onChange={handleFormData} placeholder="Enter game play ground" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                                </div>
                                <div className='flex '>
                                    <button onClick={() => handleAlert({ action: "New Match Registered" })} class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
                                focus:outline-none mx-3 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
                                    <button type="Reset" class="w-full text-white bg-red-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 
                                text-center mx-3 dark:bg-red-600 dark:hover:bg-red-500 dark:focus:ring-blue-800">Reset</button>
                                </div>

                            </form>
                        </div>
                    </div>
                    {/* <!-- Modal content --> */}
                    <div class={`${selectValue.name == "referee" ? "" : "hidden"} relative bg-white rounded-lg shadow dark:bg-gray-700`}>
                        <button onClick={() => setToggle(false)} class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="authentication-modal">
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                        <div class="px-6 py-6 lg:px-8">
                            <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Register New Referee</h3>
                            <form class="space-y-6" action="#">
                                <div>
                                    <label htmlFor="fName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                                    <input type="text" name="f_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
                                     p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter firstname" />
                                </div>
                                <div>
                                    <label htmlFor="lName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                                    <input type="text" name="l_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
                                     p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter lastname" />
                                </div>
                                <div>
                                    <label htmlFor="age" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
                                    <input type="date" name="age" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
                                     p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"/>
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor="bordered-radio-1" class="w-full text-lg font-medium text-gray-900 dark:text-gray-300">Gender</label>
                                    <span className='flex border border-gray-200'>

                                        <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                                            <input id="bordered-radio-1" type="radio" value="female" name="Gender" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="Gender-1" class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Female</label>
                                        </div>
                                        <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                                            <input id="Gender-1" type="radio" value="male" name="Gender" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="Gender-1" class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male</label>
                                        </div>
                                    </span>


                                </div>
                                <div>
                                    <label htmlFor="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                                    <input type="text" name="telephone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
                                     p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter phone number" />
                                </div>

                                <div className='flex '>
                                    <button onClick={() => handleAlert({ action: "New Match Referee added" })} class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
                                focus:outline-none mx-3 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
                                    <button type="Reset" class="w-full text-white bg-red-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 
                                text-center mx-3 dark:bg-red-600 dark:hover:bg-red-500 dark:focus:ring-blue-800">Reset</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>



        </div>

    )
}

export default Form