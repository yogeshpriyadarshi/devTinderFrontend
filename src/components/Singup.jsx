import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../utils/constant";
import { useNavigate } from "react-router";

export default function Sinup() {
  const [singup, setSingup] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const singupHandler = async() => {
try{

const res = await axios.post(BASE_URL+"/singup", singup );
console.log("respones :: ",res.data);

if(res?.data?.success){
setSingup({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  alert("you have successfully sinup. Now login!")
navigate("/login");
}

}catch(err){
  setError(err?.response?.data?.message);
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
              value={singup.firstName}
              onChange={(e) => {
                setSingup({ ...singup, firstName: e.target.value });
              }}
            />
          </div>

          <div className="m-2 flex flex-col">
            <label className="m-2"> Last Name: </label>
            <input
              type="text"
              placeholder="Last Name"
              className="bg-white h-7 w-full p-5 rounded-2xl"
              value={singup.lastName}
              onChange={(e) => {
                setSingup({ ...singup, lastName: e.target.value });
              }}
            />
          </div>

          <div className="m-2 flex flex-col">
            <label className="m-2 "> Email Id: </label>
            <input
              type="text"
              placeholder="Email Id:"
              className="bg-white h-7 w-full p-5 rounded-2xl"
              value={singup.email}
              onChange={(e) => {
                setSingup({ ...singup, email: e.target.value });
              }}
            />
          </div>

          <div className="m-2 flex flex-col">
            <label className="m-2 "> Create Password: </label>
            <input
              type="text"
              placeholder="Password"
              className="bg-white h-7 w-full p-5 rounded-2xl"
              value={singup.password}
              onChange={(e) => {
                setSingup({ ...singup, password: e.target.value });
              }}
            />
          </div>
<p className="text-red-500 mx-5"  > {error}</p>
          <div className=" flex justify-center">
            <button className="mb-2 bg-button w-1/2 text-text font-bold text-2xl active:bg-active hover:bg-change p-2 rounded-2xl"
                    onClick={singupHandler}
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
