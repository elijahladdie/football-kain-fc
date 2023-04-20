import React, { useState, useCallback } from "react";
import { REFEREE_SERVER_URL } from "../../utils";
import swal from "sweetalert";
import axios from "axios";

const ToggleReferee = () => {
  const [inputValue, setInputValue] = useState("");
  const [toggle, setToggle] = useState(null);

  const refereeData = useCallback(
    (e) => {
      setInputValue({ ...inputValue, [e.target.name]: e.target.value });
    },
    [inputValue]
  );

  const addReferee = async () => {
    const { data } = await axios.post(
      `${REFEREE_SERVER_URL}/create`,
      inputValue
    );
    if (data.error) {
      swal({
        title: "Something went wrong!",
        text: ` ${data.error} `,
        icon: "error",
        button: "OK",
      });
    } else {
      swal({
        title: "Good job!",
        text: ` ${data.message} `,
        icon: "success",
      })
      setTimeout(() => {
        window.location.reload();
      }, 3000)
    }
  };

  return (
    <>
      <button
        onClick={() => setToggle(true)}
        className="m-3 text-white bg-blue-700 hover:bg-blue-800 
            focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg 
            text-sm px-5 py-2.5 z-10
             text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Add Referee
      </button>
      <div
        className={` ${
          toggle == true ? "" : "hidden"
        }  flex w-screen top-0  items-center justify-center  h-screen dark:bg-gray-500 absolute z-50`}
      >
        {/* <!-- Modal content --> */}
        <div
          className={`w-[90%] md:w-[50%] relative bg-white rounded-lg shadow dark:bg-gray-700`}
        >
          <button
            onClick={() => setToggle(false)}
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-hide="authentication-modal"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="px-6 py-6 lg:px-8">
            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
              Register New Referee
            </h3>
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="fName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  First Name
                </label>
                <input
                  type="text"
                  onChange={refereeData}
                  name="F_Name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
                                 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Enter firstname"
                />
              </div>
              <div>
                <label
                  htmlFor="lName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  onChange={refereeData}
                  name="L_Name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
                                 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Enter lastname"
                />
              </div>
              <div>
                <label
                  htmlFor="age"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Age
                </label>
                <input
                  type="date"
                  onChange={refereeData}
                  name="Age"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
                                 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="bordered-radio-1"
                  className="w-full text-lg font-medium text-gray-900 dark:text-gray-300"
                >
                  Gender
                </label>
                <span className="flex border border-gray-200">
                  <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                    <input
                      id="bordered-radio-1"
                      onChange={refereeData}
                      type="radio"
                      value="female"
                      name="Sex"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="Gender-1"
                      className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Female
                    </label>
                  </div>
                  <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                    <input
                      id="Gender-1"
                      type="radio"
                      onChange={refereeData}
                      value="male"
                      name="Sex"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="Gender-1"
                      className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Male
                    </label>
                  </div>
                </span>
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  name="Telephone"
                  onChange={refereeData}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
                                 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Enter phone number"
                />
              </div>

              <button
                onClick={() => addReferee()}
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
                            focus:outline-none  focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToggleReferee;
