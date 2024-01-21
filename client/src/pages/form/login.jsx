import React, { useState, useCallback, useEffect } from "react";
import img from "../../assets/img/bg-unkown.jpg";
import { useNavigate } from "react-router-dom";
import { USER_SERVER_URL } from "../../utils";
import swal from 'sweetalert'
import axios from "axios";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [userData, setUserData] = useState({});
  const Navigate = useNavigate()


  const handleChange = useCallback((e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }, [userData])

useEffect(()=>{
  if (localStorage.getItem("userToken") ){
    Navigate("/admin/app/dashboard")                    
}
})
  const signUp = async () => {

    if (userData.u_Name === undefined && userData.u_password === undefined) {
      userData.u_Name = null
      userData.u_password = null

    }
    const { data } = await axios.post(`${USER_SERVER_URL}/signup`, userData)
    const { user, token } = data;
    if (data.error) {
      swal({
        title: "Something went wrong!",
        text: `${data.error}`,
        icon: "error",
        button: "Cancel",
      })
    } else {
      swal({
        title: "Good Job!",
        text: ` ${data.message} login! `,
        icon: "success",
        button: "OK",
      }).then(() => {
        setIsSignUp((on)=>!on)
      })

    }
  }
  const signIn = async () => {

    if (userData.u_Name === undefined && userData.u_password === undefined) {
      userData.u_Name = null
      userData.u_password = null

    }
    const { data } = await axios.post(`${USER_SERVER_URL}/signin`, userData)
    const { user, token } = data;
    if (data.error) {
      swal({
        title: "Something went wrong!",
        text: `${data.error}`,
        icon: "error",
        button: "Cancel",
      })
    } else {
      swal({
        title: "Login successful!",
        text: ` ${user.u_Name} `,
        icon: "success",
        button: "OK",
      }).then(() => {
        localStorage.setItem("userId", JSON.stringify(user.user_id))
        localStorage.setItem("userToken", JSON.stringify(token))
        Navigate('/admin/app/dashboard')
      })

    }
  }
  return (
    <div className=""
      style={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="w-full   flex flex-col justify-center h-screen items-center ">
        <span
          className={` bg-white/30 backdrop-blur-2xl rounded-xl border border-slate-600 transition-all   opacity-25 
            h-[300px]
           w-96 `}
        ></span>
        <form className=" absolute    rounded px-8 pt-6 pb-8 mb-4  ">
          <h1 className="text-center text-white text-lg py-3">  {isSignUp ? 'Sign Up' : 'Sign In '} </h1>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              for="username"
            >
              Username
            </label>
            <input required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="u_Name"
              placeholder="Username"
              defaultValue={null}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-white text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input required
              className="shadow appearance-none   rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              name="u_password"
              type="password"
              defaultValue={null}
              onChange={handleChange}
              placeholder="Enter your Password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => isSignUp ? setIsSignUp(!isSignUp) : signIn()}
            >
              Sign In
            </button> or
            <button
              className=" mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"

              onClick={() => isSignUp ? signUp() : setIsSignUp(!isSignUp)}

            >
              Sign Up
            </button>

          </div>
        </form>
        <p className="text-center text-white text-xs">
          &copy;2023 Kain FC. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;
