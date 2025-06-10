import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constant";
import { useSelector } from "react-redux";
import { Loader } from "./Loader";

export default function Connection() {

  const user = useSelector((store) => store.user);
  console.log("user in connection :",typeof user, !user);
  const [connection, setConnection] = useState([]);
  const [loader, setLoader] = useState(true);

  const allConnection = async () => {
    const res = await axios.get(BASE_URL + "/connection", {
      withCredentials: true,
    });
    const connectionArray = res?.data.reduce((acc, curr) => {
      if (user?._id.toString() === curr?.fromUserId?._id.toString()) {
        acc.push(curr?.toUserId);
      } else {
        acc.push(curr?.fromUserId);
      }
      return acc;
    }, []);
    setLoader(false);
    setConnection(connectionArray);
  };

  useEffect(() => {
    if(!user){
      return;
    }
    allConnection();
  }, [user]);

  if(!connection.length){
    return ( <>     
 <div className="flex justify-center items-center h-screen font-bold text-5xl text-text">
      <h1> No connection is found!!!  </h1>
        </div>
    
    </>  )
  }


  return (
    <div> {loader ? (
    
    <Loader/>
    
    ):(
<div className="mt-20">
        <div className="grid grid-cols-3 gap-2">
          {connection?.map((data, index) => (
            <div key={data._id} className="h-auto  bg-blue-100 m-5">
              <img src={data?.photoUrl} alt="Profile Pic" />
              <p> {data?.firstName + "  " + data?.lastName} </p>
              <p> {data?.age + "  " + data?.gender} </p>
            </div>
          ))}
        </div>
      </div>
    ) }
      
    </div>
  );
}
