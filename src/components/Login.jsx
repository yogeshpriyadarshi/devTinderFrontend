import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constant";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const checkUser = async () => {
    if (user) {
      navigate("/feed");
    }
  };
  checkUser();

  const loginHandle = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );

      dispatch(addUser(res.data));
      navigate("/feed");
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <>
      <div className="flex justify-center mt-25">
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
            <p className="text-red-500"> {error} </p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary" onClick={loginHandle}>
                {" "}
                Login{" "}
              </button>
              
            </div>
            <div className="flex">
                <p> Haven't account! </p>
                <button className="border-1 p-2 bg-blue-600 text-white rounded-2xl  "> <Link to="/sinup"> Sin Up </Link>
 </button>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}
