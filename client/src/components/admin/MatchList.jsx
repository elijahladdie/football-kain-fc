import React, { useEffect, useState } from "react";
import {
  ADVERSARY_SERVER_URL,
  MATCHES_SERVER_URL,
  REFEREE_SERVER_URL,
} from "../../utils";
import PreviewMatch from "./PreviewMatch";
import axios from "axios";

const MatchList = () => {
  const [allData, setData] = useState([]);
  const [adName, setAdName] = useState([]);
  const [refName, setRefName] = useState([]);
  const getData = async () => {
    const { data } = await axios.get(`${MATCHES_SERVER_URL}/all`);
    const { match } = data;
    setData(match);
  };

  const getRef = async () => {
    const { data } = await axios.get(`${REFEREE_SERVER_URL}/all/`);
    const { referee } = data;
    setRefName(referee);
  };

  const getAd = async () => {
    const { data } = await axios.get(`${ADVERSARY_SERVER_URL}/all`);
    const { adversary } = data;
    setAdName(adversary);
  };

  useEffect(() => {
    getData();
    getRef();
    getAd();
  }, []);

  return (
    <div>
      <div className="relative flex justify-center  shadow-md ">
        <table className="w-[100%] md:w-[70%] text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Matchcode(#)
              </th>
              <th scope="col" className="px-6 py-3">
                PlayGround
              </th>
              <th scope="col" className="px-6 py-3">
                Adversary
              </th>
              <th scope="col" className="px-6 py-3">
                Referee
              </th>

              <th scope="col" className="px-6 py-3">
                Date
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
                key={item.Mt_id}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  #M{item.Mt_id}
                  {}
                </th>
                <td className="px-6 py-4"> {item.Play_Ground}</td>

              
                
                <td  className="px-6 py-4 text-center">
                {adName.map((adv) => {
                  if (adv.Ad_id === item.Ad_id) {
                    return <>{`${adv.Name}`}</>;
                  }
                })}
                </td>
                <td className="px-6 py-4 text-center">
                  {refName.map((refer) => {
                    if (refer.Ref_id === item.Ref_id) {
                      return <> {`${refer.F_Name} ${refer.L_Name}`}</>;
                    }
                  })}
                </td>

                <td className="px-6 py-4">{item.Date.slice(0, 10)}</td>
                <td className="px-6 py-4 ">
                  <span>
                    <PreviewMatch id={item.Mt_id} />
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

export default MatchList;
