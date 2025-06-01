import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../utils/constant';

export default function Connection() {
    const[connection, setConnection] = useState([]);

    const allConnection = async()=>{
console.log("connection")
const res = await axios.get(BASE_URL+'/connection',{withCredentials:true});
console.log("first, connectinall", res.data);
setConnection(res.data);
    }

useEffect(()=> {allConnection()},[]);

  return (
    <div>
  <div className="mt-20">

        <div className="grid grid-cols-3 gap-2">
          {connection?.map((data, index) => (
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




    </div>
  )
}
