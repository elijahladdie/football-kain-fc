import React, { useEffect, useState } from "react";
import Nav from "../../components/admin/Nav";
import Loading from "../../components/Loading";
import RefereesList from "../../components/admin/RefereesList";
import ToggleReferee from "../../components/admin/ToggleReferee";
import Auth from "../../components/admin/Auth";


const Referees = () => {
  const [loading, setLoading] = useState(true);
 

  useEffect(() => {
     setTimeout(() => setLoading(false), 300);
  }, []);
  if (loading) {
    return <Loading />;
  }

 
  return (
    <div className="min-h-screen dark:bg-gray-900">
      <Nav />
      <Auth/>
      <ToggleReferee  />
      <RefereesList />
    </div>
  );
};

export default Referees;
