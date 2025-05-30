import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { removeUser } from "../utils/userSlice";
import axios from "axios";
import { BASE_URL } from "../utils/constant";

export default function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const logoutHandler = async () => {
    await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });
    dispatch(removeUser());
    navigate("/login");
  };

  return (
    <>
      <div className="navbar bg-blue-500 shadow-sm fixed top-0">
        {user && (
          <>
            <div className="flex-1">
              <Link to="/" className="btn btn-ghost text-xl">
                daisyUI
              </Link>
            </div>
    <div className="flex-1">
              <Link to="/feed" className="btn btn-ghost text-xl">
                Explore Developer
              </Link>
            </div>


            <div className="flex gap-2">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={user.photoUrl}
     
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <Link to={ `profile/${user.firstName}`} >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link to="/setting"> Settings </Link>
                  </li>
                  <li>
                    <a onClick={logoutHandler}>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
