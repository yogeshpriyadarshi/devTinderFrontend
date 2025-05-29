import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../utils/constant";

export default function Sinup() {
  const [singup, setSingup] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    password: "",
  });

  const singupHandler = async() => {
const res = axios.post(BASE_URL+"sinup", singup, {withCredentials:true} );
console.log(res);
if(res.success){
setSingup({
    firstName: "",
    lastName: "",
    emailId: "",
    password: "",
  })
}
  }

  return (
    <>
      <div className="flex justify-center mt-20   h-screen">
        <div className=" h-115 w-100 bg-blue-100 rounded-2xl">
          <div className="flex justify-center font-bold mt-2">
            {" "}
            <h1> Sing Up </h1>{" "}
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
              value={singup.emailId}
              onChange={(e) => {
                setSingup({ ...singup, emailId: e.target.value });
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

          <div className="m-2 flex justify-center">
            <button className="m-2 bg-blue-500 p-2 rounded-2xl"
                    onClick={singupHandler}
            >
              {" "}
              sign up
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
