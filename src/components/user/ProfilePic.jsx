import { useState } from "react";
import axios from "axios";
import axiosInstance from "../../utils/axiosInstance";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/userSlice";

function ProfilePic({ setOpen }) {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const selected = e.target.files[0];
    if (!selected) return;

    setFile(selected);
    setPreview(URL.createObjectURL(selected));
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      setLoading(true);
      const res = await axiosInstance.post("/profile/upload/image", formData);
      dispatch(addUser(res.data));
      console.log(res.data);
      setOpen(false);
      toast.success("Profile photo updated successfully!");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      
      <div className="bg-white w-full max-w-sm rounded-2xl shadow-2xl p-6 animate-fadeIn">
        
        {/* Header */}
        <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
          Update Profile Photo
        </h2>

        {/* Upload Area */}
        <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl h-40 cursor-pointer hover:border-blue-500 transition">
          
          {preview ? (
            <img
              src={preview}
              alt="preview"
              className="h-full w-full object-cover rounded-xl"
            />
          ) : (
            <div className="text-center text-gray-500">
              <p className="text-sm">Click to upload</p>
              <p className="text-xs">PNG, JPG up to 5MB</p>
            </div>
          )}

          <input
            type="file"
            accept="image/*"
            onChange={handleChange}
            className="hidden"
          />
        </label>

        {/* Actions */}
        <div className="flex justify-end gap-3 mt-5">
          <button
            onClick={() => setOpen(false)}
            className="px-4 py-2 rounded-lg border hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={handleUpload}
            disabled={!file || loading}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Uploading..." : "Upload"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePic;