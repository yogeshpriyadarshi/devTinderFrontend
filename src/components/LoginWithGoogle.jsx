import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { addUser } from '../utils/userSlice';


export default function LoginWithGoogle() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

     const googleLogin = useGoogleLogin({
    flow: 'auth-code',
    onSuccess: async (codeResponse) => {
      try {
        const res = await axios.post('http://localhost:2000/google', {
          code: codeResponse.code,
        },
        {
            withCredentials:true
        }
    );
        console.log('Login Success:', res.data);
         dispatch(addUser(res.data));
         navigate("/feed");
        // Save token to localStorage or context
      } catch (err) {
        console.error('Login Failed:', err.response?.data || err.message);
      }
    },
    onError: (error) => {
      console.error('Google Login Error:', error);
    },
  });

  return (<>
    <div className="flex justify-around">
              <button onClick={()=>{googleLogin()}}
              className="border-1 p-2 font-bold  bg-button text-text rounded-lg active:bg-active hover:bg-change  ">
                {" "}
                Login with Google{" "}
              </button>
              <button className="border-1 p-2 font-bold  bg-button text-text rounded-lg active:bg-active hover:bg-change  ">
                {" "}
                Login with GitHub{" "}
              </button>
    </div>
  </>  )
}
