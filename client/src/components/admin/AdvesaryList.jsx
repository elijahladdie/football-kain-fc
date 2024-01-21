import React, { useEffect, useState } from "react";
import axios from "axios";
import { ADVERSARY_SERVER_URL } from "../../utils";
import PreviewAdversary from "./PreviewAdversary";
const AdvesaryList = () => {
  const [allData, setData] = useState([]);
 
  const getData = async () => {
    const { data } = await axios.get(`${ADVERSARY_SERVER_URL}/all`);
    const { adversary } = data;
    setData(adversary);
  };
  
  useEffect(() => {
    getData();
  }, []);

 
  return (
      <div className="">
        
      <div className="  relative flex justify-center  shadow-md ">
        <table className="w-[100%] md:w-[50%] text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Names
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
                key={"item.Ref_id"}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  #AD{item.Ad_id}
                </th>
                <td className="px-6 py-4">
                  {" "}
                  {item.Name} 
                </td>
                  <span>
                    <PreviewAdversary id={item.Ad_id}/>
                  </span>
                
                  
                 
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdvesaryList;
