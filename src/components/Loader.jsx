import React from "react";
import { Bars } from "react-loader-spinner";

export const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <Bars
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};
