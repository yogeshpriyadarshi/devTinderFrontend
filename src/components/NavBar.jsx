import React, { useState } from "react";
import {  useSelector } from "react-redux";
import Header from "./Header";

export default function NavBar() {
  const user = useSelector((store) => store.user);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className=" w-full h-auto bg-back shadow-sm fixed top-0 left-0  ">
        <div className=" flex justify-between">
          <div className="text-3xl text-text font-bold ">Dev-Tinder</div>
          {user && (
            <>
              <div className="hidden md:flex">
                <Header />
              </div>
              <button
                className="  md:hidden"
                onClick={() => setMenuOpen((prev) => !prev)}
              >
                <svg
                  className="w-6 h-6 "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      menuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </>
          )}
        </div>
        {menuOpen && (
          <div>
            <Header />
          </div>
        )}
      </div>
    </>
  );
}
