import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4000/api";

export default function Signup() {
  const [signup, setSignup] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const signupHandler = async() => {
try{
const res = await axios.post(BASE_URL+"/auth/signup", signup, {withCredentials:true});
console.log("respones :: ",res.data);
if(res?.data?.success){
setSignup({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  toast.success("You have successfully signed up. Now login!");
  navigate("/login");
}
}catch(err){
  console.log("error :: ",err);
  setError(err?.response?.data?.err|| "Something went wrong");
}
  }

  return (
    <>
      <div className="flex justify-center mt-20   h-screen">
        <div className=" h-135 w-100 bg-back rounded-2xl border">
          <div className="flex justify-center font-bold mt-2">
            {" "}
            <h1 className="font-bold text-text text-3xl" > Sing Up </h1>{" "}
          </div>

          <div className="m-2 flex flex-col">
            <label className="m-2"> First Name: </label>
            <input
              type="text"
              placeholder="First Name"
              className="bg-white h-7 w-full p-5 rounded-2xl"
              value={signup.firstName}
              onChange={(e) => {
                setSignup({ ...signup , firstName: e.target.value });
              }}
            />
          </div>

          <div className="m-2 flex flex-col">
            <label className="m-2"> Last Name: </label>
            <input
              type="text"
              placeholder="Last Name"
              className="bg-white h-7 w-full p-5 rounded-2xl"
              value={signup.lastName}
              onChange={(e) => {
                setSignup({ ...signup, lastName: e.target.value });
              }}
            />
          </div>

          <div className="m-2 flex flex-col">
            <label className="m-2 "> Email Id: </label>
            <input
              type="text"
              placeholder="Email Id:"
              className="bg-white h-7 w-full p-5 rounded-2xl"
              value={signup.email}
              onChange={(e) => {
                setSignup({ ...signup, email: e.target.value });
              }}
            />
          </div>

          <div className="m-2 flex flex-col">
            <label className="m-2 "> Create Password: </label>
            <input
              type="text"
              placeholder="Password"
              className="bg-white h-7 w-full p-5 rounded-2xl"
              value={signup.password}
              onChange={(e) => {
                setSignup({ ...signup, password: e.target.value });
              }}
            />
          </div>
          <p className="text-red-500 mx-5"  > {error}</p>
          <div className=" flex justify-center">
            <button className="mb-2 bg-button w-1/2 text-text font-bold text-2xl active:bg-active hover:bg-change p-2 rounded-2xl"
                    onClick={signupHandler}
            >
              {" "}
              Sign Up
            </button>
          </div>
          <div className="flex justify-between ">
            <p className=" mx-3 text-text font-bold py-2" > Already Account!!! </p>
             <button className="mx-3 border px-5 py-1 rounded-2xl text-text text-2xl bg-button active:bg-active hover:bg-change"
             onClick={()=>{navigate("/login") }} > Log In </button></div>
        </div>
      </div>
    </>
  );
}
