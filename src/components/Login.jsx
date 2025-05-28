import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginHandle = async () => {
    try {
      console.log(email, password);
      const res = await axios.post("http://localhost:2000/login", {
        email,
        password,
      },
      {withCredentials:true});
      
       dispatch(addUser(res.data));
        navigate("/");

    } catch (err) {
      console.log("error");
    }
  };

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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              <button className="btn btn-primary" onClick={loginHandle}>
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
