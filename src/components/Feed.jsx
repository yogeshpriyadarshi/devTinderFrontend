import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL, PROFILE_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import UserCard from "./UserCard";
import { useNavigate } from "react-router";
export default function Feed() {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchFeed = async () => {
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res.data));
    } catch (err) {
      console.err(err);
    }
  };

  const connectionHandler = async(status,toRequestId)=>{
try{  
  console.log("done connettion")
const res = await axios.post(BASE_URL+"/request/sent/"+ status +"/" +toRequestId,{},{withCredentials:true});
if(res.data.success){
  console.log("success!");
navigate("/feed");
}
}catch(err){
res.status(400).send("ERROR:" + err.message);
}
  }


  useEffect(() => {
    fetchFeed();
  }, []);

  return (
    <>
      <div className="mt-20">

        <div className="grid grid-cols-3 gap-2">
          {feed?.map((data, index) => (
            <div key={data._id} className="h-auto  bg-blue-100 m-5">
              <img src={data.photoUrl} alt="Profile Pic" />
              <p> {data.firstName + "  " + data.lastName} </p>
              <p> {data.age + "  " + data.gender} </p>
              <div className="flex justify-around">
                <button
                  className="bg-red-400 px-5 py-2 rounded-2xl"
                  onClick={() => {
                    connectionHandler("ignored",data._id);
                  }}
                >
                  {" "}
                  Ignore{" "}
                </button>
                <button
                  className="bg-green-300 px-5 py-2 rounded-2xl"
                  onClick={() => {
                    connectionHandler("interested",data._id);
                  }}
                >
                  {" "}
                  Interest{" "}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
