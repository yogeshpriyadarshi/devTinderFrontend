import { useSelector } from "react-redux";
import axiosInstance from "../../utils/axiosInstance";
import { useState } from "react";

function ProfilePic() {
  const user = useSelector((store) => store.user);

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(user?.photoUrl);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    // ✅ Validate type
    if (!file.type.startsWith("image/")) {
      alert("Only image files are allowed");
      return;
    }

    // ✅ Validate size (2MB)
    if (file.size > 2 * 1024 * 1024) {
      alert("Image must be less than 2MB");
      return;
    }

    setImage(file);

    // ✅ Preview image
    const previewUrl = URL.createObjectURL(file);
    setPreview(previewUrl);
  };

  const handleUpload = async () => {
    if (!image) {
      alert("Please select an image first");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("image", image);

      const response = await axiosInstance.post(
        "/profile/upload/image",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Uploaded:", response.data);

      // ✅ Update preview with Cloudinary URL
      setPreview(response.data.url);

    } catch (err) {
      console.error("Upload error:", err);
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <img
        className="rounded-full w-32 h-32 object-cover border"
        src={preview}
        alt={user?.firstName}
      />

      <input type="file" accept="image/*" onChange={handleFileChange} />

      <button
        className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        onClick={handleUpload}
        disabled={loading}
      >
        {loading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
}

export default ProfilePic;