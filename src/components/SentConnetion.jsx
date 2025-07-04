import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constant";

export default function SentConnetion() {
  const [sent, setSent] = useState([]);

  const cancelHandler = async(id) => {
     try{
      const res = await axios.patch( BASE_URL +"/request/cancel/"+ id,{}, {withCredentials:true});
      console.log(res.data.success);
      if(res?.data?.success){
        requestsent()
      }
     }catch(err){
      console.log(err);
     }
  }

  const requestsent = async () => {
    try {
      const res = await axios.get(BASE_URL + "/request/sent", {
        withCredentials: true,
      });
      console.log(res?.data);
      setSent(res?.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    requestsent();
  }, []);

if(!sent.length){
  return(<>
   <div className="flex justify-center items-center h-screen text-5xl font-bold text-text">
      <h1> No send request is found!!!  </h1>
        </div>
  </>)
}

  return (
    <>
      <div className="mt-20">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {sent.map((data, index) => (
            <>
              <div key={data?.toUserId?._id} className="bg-active h-75 m-5 rounded-2xl ">
                <img src={data?.toUserId?.photoUrl} className="w-full h-8/12" />
                <div className="h-1/12 p-2 ">
                  {" "}
                  {data?.toUserId?.firstName +
                    " " +
                    data?.toUserId?.lastName}{" "}
                </div>
                <div className="h-1/12 p-2 ">
                  {" "}
                  {data?.toUserId?.age + " " + data?.toUserId?.gender}{" "}
                </div>
                <div className="h-2/12 flex justify-center">
                  {" "}
                  <button className="bg-red-300 w-1/2 text-2xl my-2 rounded-lg active:bg-red-800 hover:bg-red-600"
                  onClick={()=>{cancelHandler(data?.toUserId?._id)}}>
                    {" "}
                    Cancel{" "}
                  </button>{" "}
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
