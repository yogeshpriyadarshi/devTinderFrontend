import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL, PROFILE_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import UserCard from "./UserCard";
export default function Feed() {
  const feed = useSelector(store => store.feed);
  const dispatch = useDispatch();

  const fetchFeed = async () => {
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res.data))
    } catch (err) {
      console.err(err);
    }
  };

  useEffect(() => {
    fetchFeed();
  }, []);

  return (
    <>
    <div className="mt-20">  
<UserCard/>

<div className="grid grid-cols-3 gap-2"  >    
{feed?.map((data,index)=> (
<div className="h-auto  bg-blue-100 m-5">
<img src={PROFILE_URL}/>
<p> {data.firstName + "  " + data.lastName}  </p>
<p> {data.age + "  " + data.gender}  </p>
<div className="flex justify-around"> 
  <button className="bg-red-400 px-5 py-2 rounded-2xl" > Ignore </button>
<button className="bg-green-300 px-5 py-2 rounded-2xl"  > Interested </button>
</div>


</div>
      ))}  
</div>
      
    </div>

    </>
  );
}
