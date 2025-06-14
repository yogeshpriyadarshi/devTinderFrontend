import React, { useEffect } from "react";
import { io } from "socket.io-client";
import { createSocketConnection } from "../utils/socket";
import { useSelector } from "react-redux";

export default function Model() {
    const user = useSelector(store => store.user)
    const userId = user._id;


useEffect(()=>{
const socket = createSocketConnection();

socket.emit("joint",{ userId, })


},[]);

  return (
    <>
      <div className="fixed inset-0 flex justify-center items-center bg-black/50 z-50">
        <div className="relative bg-back w-150 h-150 rounded-2xl p-3 ">
         
          <div className="flex justify-center items-center">
            <h1 className="text-3xl text-text "> Message!!! </h1>
          </div>

          <div className="flex justify-end my-2  ">
            <div className="bg-gray-500  rounded-lg px-2 py-1 h-8 mx-2 ">
              {" "}
              I am sending message.{" "}
            </div>
          </div>

          <div className="flex ">
            <div className="bg-gray-500  rounded-lg px-2 py-1 h-8 m-2 ">
              {" "}
              I am receiving message{" "}
            </div>
          </div>

          <div className="absolute bottom-0  w-full mb-3 ">
            <input
              type="text"
              className=" px-2 py-1 w-8/12 bg-active  border h-auto rounded-lg"
            />
            <button className="bg-blue-500 px-2 py-1 mx-2 w-3/12 rounded-lg active:bg-blue-900">
              {" "}
              Send Message
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
