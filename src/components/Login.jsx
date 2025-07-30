import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constant";
import LoginWithGoogle from "./LoginWithGoogle";

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
        <div className="card card-border bg-back w-96   ">
          <div className="card-body">
            <h2 className="card-title justify-center text-text font-bold text-2xl">
              {" "}
              Login{" "}
            </h2>
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
              <button
                className="bg-button font-bold rounded-2xl text-2xl w-1/2 p-2 mx-5 text-text active:bg-active hover:bg-change "
                onClick={loginHandle}
              >
                {" "}
                Login{" "}
              </button>
            </div>
            <LoginWithGoogle />
            <div className="flex mt-2">
              <p className=" font-bold text-2xl p-1 text-text">
                {" "}
                New to Dev-Tinder!{" "}
              </p>
              <button className="border-1 p-2 font-bold text-2xl bg-button text-text rounded-lg active:bg-active hover:bg-change  ">
                {" "}
                <Link to="/sinup"> Sin Up </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
