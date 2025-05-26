import axios from "axios";
import React, { useState } from "react";

export default function Login() {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");

  const loginHandle = async()=>{
try{
    const res = await axios.post("",{ emailId,password});
}catch(err){
console.error(err)}
  }

  return (
    <>
      <div className="flex justify-center mt-5">
        <div className="card card-border bg-blue-100 w-96   ">
          <div className="card-body">
            <h2 className="card-title justify-center"> Login </h2>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email Id</legend>
              <input
                type="text"
                className="input"
                placeholder="Email"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend"> Password</legend>
              <input
                type="text"
                className="input"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </fieldset>
            <div className="card-actions justify-center">
              <button
                className="btn btn-primary"
               onClick={loginHandle}
              >
                {" "}
                Login{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
