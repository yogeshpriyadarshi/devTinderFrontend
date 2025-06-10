import React from "react";

export default function Cards(arrary) {
  return (
    <>
      <div className="mt-20">
        <div className="grid grid-cols-4 gap-5">
          {arrary?.map((data, index) => (
            <div key={data._id} className="h-auto  bg-blue-100 m-5">
              <img src={data.photoUrl} alt="Profile Pic" className="w-full" />
              <p> {data.firstName + "  " + data.lastName} </p>
              <p> {`${data.age}  ${data.gender}`} </p>
              <div className="flex justify-around">
                <button
                  className="bg-red-400 px-5 py-2 rounded-2xl"
                  onClick={() => {
                    connectionHandler("ignored", data._id);
                  }}
                >
                  {" "}
                  Ignore{" "}
                </button>
                <button
                  className="bg-green-300 px-5 py-2 rounded-2xl"
                  onClick={() => {
                    connectionHandler("interested", data._id);
                  }}
                >
                  {" "}
                  Interest{" "}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
