import axios from "axios";
import React, { useState, useCallback, useEffect } from "react";
import swal from "sweetalert";
import {
  MATCHES_SERVER_URL,
  REFEREE_SERVER_URL,
  ADVERSARY_SERVER_URL,
} from "../../utils";
const ToggleMatch = () => {
  const [inputValue, setInputValue] = useState("");
  const [toggle, setToggle] = useState(null);
  const [data, setData] = useState([]);
  const [info, setInfo] = useState([]);
  const advData = async () => {
    const { data } = await axios.get(`${REFEREE_SERVER_URL}/all`);
    const { referee } = data;
    setData(referee);
  };
  const refData = async () => {
    const { data } = await axios.get(`${ADVERSARY_SERVER_URL}/all`);
    const { adversary } = data;
    setInfo(adversary);
  };

  const userId = localStorage.getItem("userId")
  useEffect(() => {
    advData();
    refData();

  }, []);
  const matchData = useCallback(
    (e) => {
      setInputValue({ ...inputValue, [e.target.name]: e.target.value,user_id: userId});
    },
    [inputValue]
  );

  const newMatch = async () => {
    const { data } = await axios.post(
      `${MATCHES_SERVER_URL}/create`,
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
      });
      setTimeout(() => {
        window.location.reload();
      }, 1000)
    }
  };

  return (
    <>
      <button
        onClick={() => setToggle(true)}
        className="m-3 text-white bg-blue-700 hover:bg-blue-800 
            focus:ring-4 focus:outline-none  focus:ring-blue-300 font-medium rounded-lg 
            text-sm px-5 py-2.5 z-10
             text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Add Match
      </button>
      <div
        className={` ${
          toggle == true ? "" : "hidden"
        }  flex w-screen top-0  items-center justify-center  h-screen dark:bg-gray-500 absolute z-50`}
      >
        {/* <!-- Modal content --> */}
        <div
          className={`relative md:w-[40%] w-[90%] min-h-[40%] bg-white rounded-lg shadow dark:bg-gray-700`}
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
            <span className="sr-only">Hide</span>
          </button>
          <div className="px-6 py-6 lg:px-8">
            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
             New match
            </h3>
            <div className="space-y-6" action="#">
              <div>
                <label
                  htmlFor="date"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Date
                </label>
                <input
                  type="date"
                  name="Date"
                  onChange={matchData}
                  id="date"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@company.com"
                />
              </div>
              <div>
                <label
                  htmlFor="date"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Referee
                </label>
                <select
                  name="Ref_id"
                  id=""
                  onChange={matchData}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Specify.....</option>
                  {data.map((info) => (
                    <option value={`${info.Ref_id}`}>
                      {info.F_Name} {info.L_Name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="date"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Adversery
                </label>
                <select
                  name="Ad_id"
                  id=""
                  onChange={matchData}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Specify.....</option>

                  {info.map((info) => (
                    <option value={`${info.Ad_id}`}>
                      {" "}
                      {/*info.Ref_id*/} {info.Name}{" "}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="Play_Ground"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Play Ground
                </label>
                <input
                  type="text"
                  name="Play_Ground"
                  onChange={matchData}
                  placeholder="Enter game play ground"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                />
              </div>
              <button
                onClick={() => newMatch()}
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

export default ToggleMatch ;
