import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constant";

export default function ReceivedConnection() {
  const [request, setRequest] = useState([]);

  const receiveRequest = async () => {
    try {
      const res = await axios.get(
        BASE_URL + "/request/view/",
        {withCredentials:true}
      );
      console.log(res.data)
      setRequest(res.data);
    } catch (err) {
      console.error(err);
    }
  };
const connectionHandler = async(status,id)=>{
    try{
        const res = await axios.patch(BASE_URL + "/request/review/" + status + "/" + id,{status} ,{withCredentials:true});    
    }catch(err){
console.error(err);
    }
}
  useEffect(() => {
    receiveRequest();
  }, []);

  if(!request.length){
    return (
    <>  
    <div className="flex justify-center items-center h-screen text-5xl font-bold text-text">
      <h1> No Request is found!!!  </h1>
        </div>
    
    </>

    )
  }


  return (  
       <div className="mt-20">
        <div className="grid grid-cols-3 gap-2 ">
          {request?.map((data, index) => (
            <div key={data._id} className="  bg-blue-100 m-5">
              <img src={data?.fromUserId?.photoUrl} alt="Profile Pic" className="w-full" />
              <p> {data?.fromUserId?.firstName + "  " + data?.fromUserId?.lastName} </p>
              <p> {data?.fromUserId?.age + "  " + data?.fromUserId?.gender} </p>
              <p> about: {data?.fromUserId?.about}</p>
              <div className="flex justify-around">
                <button
                  className="bg-red-400 px-5 py-2 rounded-2xl"
                  onClick={() => {
                    connectionHandler("declined",data?.fromUserId?._id);
                  }}
                >
                  {" "}
                  Dcline{" "}
                </button>
                <button
                  className="bg-green-300 px-5 py-2 rounded-2xl"
                  onClick={() => {
                    connectionHandler("accepted",data?.fromUserId?._id);
                  }}
                >
                  {" "}
                  Accept{" "}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

  )
  
  
}
