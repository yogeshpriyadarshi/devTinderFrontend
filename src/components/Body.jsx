import React, { useEffect } from "react";
import NavBar from "./NavBar";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import axiosInstance from "../utils/axiosInstance";

export default function Body() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const fetchUser = async () => {
    try {
      // whenever hard f Find the user from database
      const user = await axiosInstance.get("/profile/view");
      dispatch(addUser(user.data));
    } catch (err) {
      if (err.status === 401) {
        navigate("/login");
      }
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);



  return (
    <>
      <div className="min-h-screen flex flex-col bg-back">
        <div>
          {" "}
          <NavBar />
        </div>
        <div className="flex-1">
          {" "}
          <Outlet />
        </div>
        <div>
          {" "}
          <Footer />
        </div>
      </div>
    </>
  );
}
