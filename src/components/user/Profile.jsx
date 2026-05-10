import { useState } from "react";
import { useSelector } from "react-redux";
import EditProfile from "./EditProfile";
import ProfilePic from "./ProfilePic";

export default function Profile() {
  const user = useSelector((state) => state.user);

  const [edit, setEdit] = useState(false);
  const [editProfilePic, setEditProfilePic] = useState(false);
  const [image, setImage] = useState(user?.photoUrl || "https://via.placeholder.com/100");

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      
      {/* Profile Card */}
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6 relative">
        
        {/* Edit Button */}
        <button
          onClick={() => setEdit(true)}
          className="absolute top-4 right-4 text-sm px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Edit
        </button>

        {/* Profile Image */}
        <div className="flex flex-col items-center">
          <img
            src={user?.photoUrl || "https://via.placeholder.com/100"}
            alt="Profile"
            onClick={() => setEditProfilePic(true)}
            className="w-24 h-24 rounded-full object-cover border-4 border-blue-100 shadow"
          />

          <h2 className="mt-3 text-xl font-semibold text-gray-800">
            {user?.firstName} {user?.lastName}
          </h2>

          <p className="text-gray-500 text-sm">
            {user?.gender}, {user?.age} yrs
          </p>
        </div>

        {/* Divider */}
        <div className="border-t my-4"></div>

        {/* Info Section */}
        <div className="space-y-3 text-gray-700">
          
          <div>
            <h3 className="text-sm font-semibold text-gray-500">About</h3>
            <p className="text-sm">{user?.about || "No description provided"}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-500">Skills</h3>
            <div className="flex flex-wrap gap-2 mt-1">
              {user?.skill
                ? user.skill.split(",").map((s, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full"
                    >
                      {s.trim()}
                    </span>
                  ))
                : <p className="text-sm">No skills added</p>}
            </div>
          </div>

        </div>
      </div>

      {/* Edit Modal */}
      {edit && <EditProfile setEdit={setEdit} />}
      {editProfilePic && <ProfilePic  setOpen={setEditProfilePic} />}
    </div>
  );
}