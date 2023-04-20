import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
const Logout = () => {
  const Navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  localStorage.removeItem("userId");
  localStorage.removeItem("userToken");
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  });
  if (loading) {
    return <Loading />;
  } else {
    Navigate("/");
  }
  return <div>Logout</div>;
};

export default Logout;
