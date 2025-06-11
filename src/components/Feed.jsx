import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import { useNavigate } from "react-router";

export default function Feed() {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchFeed = async () => {
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res.data));
    } catch (err) {
      console.error(err);
    }
  };

  const connectionHandler = async (status, toRequestId) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/sent/" + status + "/" + toRequestId,
        {},
        { withCredentials: true }
      );
      if (res.data.success) {
        fetchFeed();
      }
    } catch (err) {
      alert("ERROR: " + err.message);
    }
  };

  useEffect(() => {
    fetchFeed();
  }, []);

  return (
    <div className="mt-24 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {feed?.map((data) => (
          <div
            key={data._id}
            className="bg-active rounded-2xl overflow-hidden shadow-md"
          >
            <img
              src={data.photoUrl}
              alt="Profile Pic"
              className="w-full h-[200px] md:h-[250px] object-cover"
            />
            <div className="p-4">
              <p className="text-lg font-semibold">
                {data.firstName} {data.lastName}
              </p>
              <p className="text-sm text-gray-700">{`${data.age} • ${data.gender}`}</p>
              <div className="flex justify-between mt-4 gap-2">
                <button
                  className="bg-red-300 px-4 py-2 rounded-xl text-sm hover:bg-red-500 transition"
                  onClick={() => {
                    const confirm = window.confirm(
                      `This profile will not be shown again!\nDo you want to ignore ${data?.firstName}?`
                    );
                    if (confirm) {
                      connectionHandler("ignored", data._id);
                    } else {
                      alert("Your request has been cancelled.");
                    }
                  }}
                >
                  Ignore
                </button>
                <button
                  className="bg-green-300 px-4 py-2 rounded-xl text-sm hover:bg-green-500 transition"
                  onClick={() => {
                    connectionHandler("interested", data._id);
                  }}
                >
                  Interest
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
