import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "./Loader";
import Model from "./Model";
import { addChat } from "../utils/chatSlice";

export default function Connection() {

  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [connection, setConnection] = useState([]);
  const [loader, setLoader] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const isModel = ()=>{
    setIsOpen(p=>!p)
  }

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
  {isOpen && <Model text = {isModel}  />}
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 ">
          {connection?.map((data, index) => (
            <div key={data._id} className="h-75 bg-active m-5">
              <img src={data?.photoUrl} alt="Profile Pic" className="h-8/12 w-ful" />
              <p> {data?.firstName + "  " + data?.lastName} </p>
              <p> {data?.age + "  " + data?.gender} </p>
              <div className="flex justify-between"> 
                   <button className="bg-red-300 border px-2 rounded-lg mx-5 cursor-pointer hover:bg-red-700 active:bg-red-900"> Unfriends </button>
              <button className="bg-green-300 border mx-5 px-2  rounded-lg hover:bg-green-600 active:bg-green-800"
              onClick={()=>{dispatch(addChat(data?._id));  setIsOpen(p=>!p)}}
              > Message </button>
              
                </div>
            
            </div>
          ))}
        </div>
      </div>
    ) }
      
    </div>
  );
}
