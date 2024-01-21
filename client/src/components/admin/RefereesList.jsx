import React, { useEffect, useState } from "react";
import axios from "axios";
import { REFEREE_SERVER_URL } from "../../utils";
import PreviewReferee from "./PreviewReferee";

const RefereesList = () => {
  const [allData, setData] = useState([]);
  const getData = async () => {
    const { data } = await axios.get(`${REFEREE_SERVER_URL}/all`);
    const { referee } = data;
    setData(referee);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="">
          <div className="  relative flex justify-center   shadow-md ">
            <table className=" w-[90%] md:w-[50%] text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Names
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Sex
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Phone
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {allData.map((item) => (
                  <tr
                    className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                    key={item.Ref_id}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      #REF{item.Ref_id}
                    </th>
                    <td className="px-6 py-4">
                      {" "}
                      {item.F_Name} {item.L_Name}
                    </td>
                    <td className="px-6 py-4">{item.Sex}</td>
                    <td className="px-6 py-4">0{item.Telephone}</td>
                    <td className="px-6 py-4">
                      <span >
                        <PreviewReferee id={item.Ref_id} />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
       
    </div>
  );
};

export default RefereesList;
