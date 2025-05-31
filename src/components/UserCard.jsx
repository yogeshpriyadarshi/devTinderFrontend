import React from "react";
import { useSelector } from "react-redux";

export default function UserCard() {
  const user = useSelector((store) => store.user);

  return (
    <div className="flex flex-col border-2 rounded-2xl bg-blue-100 m-5">
      <img className="m-2" alt="profile Pic" src={user?.photoUrl} />
      <div className="flex justify-around">
        {" "}
        <h1> {`${user?.firstName}   ${user?.lastName}`} </h1>
        <h1>{`age ${user?.age} ,  ${user?.gender}` } </h1>
      </div>
      <div className="m-2 p-5"> 
        <p> about: {user?.about}</p>
      </div>
    </div>
  );
}
