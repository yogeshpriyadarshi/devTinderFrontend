import { useSelector } from "react-redux";
import { useState } from "react";
import axiosInstance from "../../utils/axiosInstance";

function EditProfile(props) {
  const { setEdit } = props;
  const user = useSelector((state) => state.user);

  const [formData, setFormData] = useState({
    firstName: user.firstName || "",
    lastName: user.lastName || "",
    age: user.age || "",
    gender: user.gender || "",
    about: user.about || "",
    skill: user.skill || ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = async() => {
    try{
        const response = await axiosInstance.patch("/profile/update", formData);
        if(response.status === 200){
            // Update successful, you can also update the Redux store here if needed
            setEdit(false);
        } else {
            console.error("Failed to update profile:", response.data);
        }

    }catch(err){
      console.error("Error saving profile:", err);
    }
    console.log(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      
      {/* Modal */}
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-6 relative animate-fadeIn">
        
        {/* Close Button */}
        <button
          onClick={() => setEdit(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-lg"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Edit Profile
        </h2>

        {/* Form */}
        <div className="space-y-3">
          
          <div className="flex gap-2">
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="w-1/2 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="w-1/2 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <input
            name="age"
            type="number"
            value={formData.age}
            onChange={handleChange}
            placeholder="Age"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            placeholder="Gender"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            name="about"
            value={formData.about}
            onChange={handleChange}
            placeholder="About you..."
            rows="3"
            className="w-full border rounded-lg px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            name="skill"
            value={formData.skill}
            onChange={handleChange}
            placeholder="Skills (comma separated)"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-5">
          <button
            onClick={() => setEdit(false)}
            className="px-4 py-2 rounded-lg border hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;