import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constant";
import { addUser } from "../utils/userSlice";

export default function EditProfile() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
 const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [age, setAge] = useState(user?.age);
  const [gender, setGender] = useState(user?.gender);
  const [photoUrl, setPhotoUrl] = useState(user?.photoUrl);
  const [about, setAbout] = useState(user?.about);
  const [skill, setSkill] = useState(user?.skill);
  const [error, setError] = useState("");

  useEffect( ()=> {
    setError("")
    if(!user){
        return;
    }
setAbout(user?.about);
setAge(user?.age);
setFirstName(user?.firstName);
setLastName(user?.lastName);
setGender(user?.gender)
setPhotoUrl(user?.photoUrl);
setSkill(user?.skill);
  },[user]);

  async function updateProfile() {
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit/" + user._id ,
        {
        firstName,
        lastName,
        age,
        gender,
        photoUrl,
        about,
        skill
        },
        { withCredentials: true }
      );
dispatch(addUser(res.data));
    } catch (err) {
       setError(err?.response?.data);
        console.error(err);
    }
  }

  return (
    <div>
      <div className="bg-blue-100 p-7 m-5">
        <label>First Name:</label>
        <input
          type="text"
          className="h-7 w-full bg-red-100 m-2 rounded-1xl px-3 py-1 "
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label> Last Name:</label>
        <input
          type="text"
          className="h-7 w-full bg-red-100 m-2 rounded-1xl px-3 py-1 "
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <label> Age:</label>
        <input
          type="text"
          className="h-7 w-full bg-red-100 m-2 rounded-1xl px-3 py-1 "
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <label> Gender:</label>
        <input
          type="text"
          className="h-7 w-full bg-red-100 m-2 rounded-1xl px-3 py-1"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />

        <label> Phot_url:</label>
        <input
          type="text"
          className="h-7 w-full bg-red-100 m-2 rounded-1xl px-3 py-1"
          value={photoUrl}
          onChange={(e) => setPhotoUrl(e.target.value)}
        />

        <label> About:</label>
        <input
          type="text"
          className="h-7 w-full bg-red-100 m-2 rounded-1xl px-3 py-1"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        />

        <label> Skill:</label>
        <input
          type="text"
          className="h-7 w-full bg-red-100 m-2 rounded-1xl px-3 py-1 "
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
        />

<p className="text-red-500">{error}</p>

        <div className="flex justify-center">
          <button
            className="bg-blue-500 py-2 px-5 rounded"
            onClick={()=>{ updateProfile() }}
          >
            {" "}
            Update Profile{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
