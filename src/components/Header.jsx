import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import {BASE_URL} from "../utils/constant";
import { removeUser } from "../utils/userSlice";


export default function Header() {
    const [open, setOpen] = useState(false);
    const user = useSelector(store=> store.user);
    console.log(user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = async () => {
        console.log("logout")
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

<div> 
<button className="text-text text-2xl mt-3"> {user?.firstName} </button>

</div>
        <div className="relative">
            <img alt="Profile pic"  src={user?.photoUrl} className="h-15 w-15 mx-3 rounded-full object-cover"
            onClick={()=>{setOpen(pre=>!pre)}} /> 
         {
           open && (
            <div className="absolute bg-back " > 
              <Link to="/profile">  <button className="bg-button w-full px-5 my-2 rounded-lg" > Profile  </button>   </Link> 
             <button className="bg-button w-full px-5 my-2 rounded-lg active:bg-active"  onClick={()=>{logoutHandler()}} >  logout  </button>
            </div>
              )
         }
        </div>
      
    </>
  );
}
