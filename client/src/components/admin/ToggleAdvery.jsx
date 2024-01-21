import React, { useState, useCallback } from 'react'
import swal from 'sweetalert';
import axios from "axios"
import { ADVERSARY_SERVER_URL } from '../../utils';




const ToggleAdversery = () => {
    const [inputValue, setInputValue] = useState({})
    const [toggle, setToggle] = useState(null)
  
    const adverseryData = useCallback(
        (e) => {
            setInputValue({ ...inputValue, [e.target.name]: e.target.value });
        },
        [inputValue]
    );

    const addAdvesery = async (e) => {
    const {data} = await axios.post(`${ADVERSARY_SERVER_URL}/create`,inputValue)

    if(data.error){

        swal({
            title: "Something went wrong!",
            text: ` ${data.error} `,
            icon: "error",
            button: "OK",
        })
        setTimeout(() => {
            window.location.reload();
          }, 1000)

    }else{
        swal({
            title: "Good job!",
            text: ` ${data.message} `,
            icon: "success",
           
        })
        setTimeout(() => {
            window.location.reload();
          }, 1000)
    }
    }

    return (<>
        



        <button onClick={() => setToggle(true)} className="m-3 text-white bg-blue-700 hover:bg-blue-800 
            focus:ring-4 focus:outline-none  focus:ring-blue-300 font-medium rounded-lg 
            text-sm px-5 py-2.5 z-10
             text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                Add Adversary
            </button>
            <div className={` ${toggle == true ? "" : "hidden"}  flex w-screen top-0  items-center justify-center  h-screen dark:bg-gray-500 absolute z-50`}>
                {/* <!-- Modal content --> */}
                <div className={`relative min-h-[25%] bg-white rounded-lg shadow dark:bg-gray-700`}>
                    <button onClick={() => setToggle(false)} className={`absolute top-3 right-2.5 text-gray-400 bg-transparent 
                    hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center 
                    dark:hover:bg-gray-800 dark:hover:text-white`} data-modal-hide="authentication-modal">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Hide adversary</span>
                    </button>
                    <div className="px-6 py-6 lg:px-8">
                        <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Adversary</h3>
                        <div className="space-y-6">
                            <div>
                                <label htmlFor="adversary" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New adversary </label>
                                <input type="adversary" onChange={adverseryData} name="Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                                dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter new adversary" />
                            </div>
                                <button onClick={()=>addAdvesery()} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
                            focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
                               
                        </div>
                    </div>
                </div>
            </div>
    </>
    )
}


export default  ToggleAdversery 