import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";

export default function Header() {
    const user = useSelector(store=> store.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logoutHandler = async () => {
    await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });
    dispatch(removeUser());
    navigate("/login");
  };
  return (
    <>
        <div className="flex-1">
          <Link to="/feed" className="btn btn-ghost text-xl">
            Explore Developer
          </Link>
        </div>
        <div className="flex-1">
          <Link to="/sentconnection" className="btn btn-ghost text-xl">
            Sent Connection
          </Link>
        </div>
        <div className="flex-1">
          <Link to="/receivedconnection" className="btn btn-ghost text-xl">
            Received Connection
          </Link>
        </div>
        <div className="flex-1">
          <Link to="/connection" className="btn btn-ghost text-xl">
            Connection
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
                <img alt="Tailwind CSS Navbar component" src={user.photoUrl} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to={`profile/${user.firstName}`}>Profile</Link>
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
  );
}
