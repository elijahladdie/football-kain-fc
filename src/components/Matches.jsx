import React, { useState } from "react";
import GetMatches from "./GetMatches";
import Empty from "./Empty";

const Matches = () => {
  const [selectValue, setSelectValue] = useState("null")
  const handleChange = (e) => {
  setSelectValue({ [e.target.name]: e.target.value })
  console.log(selectValue)

  }
  return (
    <>

      <select name='time' onChange={handleChange} id="underline_select" class=" bg-sky-800  block py-2.5 px-0 w-full text-sm text-gray-500  border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
        <option value="null">Today</option>
        <option value="Yesterday">Yesterday</option>
        <option value="Last Week">Last Week</option>
        <option value="Last Month">Last Month</option>

      </select>

      {(selectValue.time != "null") ? <GetMatches time={selectValue.time} /> : <Empty page={"Match"} />}

    </>
  );
};

export default Matches;
