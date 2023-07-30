import { NextPage } from "next";
import { useState } from "react";

const Projects: NextPage = () => {
  const [phases] = useState([]);
  return (
    <div>
      {" "}
      <div className="p-4 mt-4">
        <h1 className="text-4xl text-center font-semibold mb-6">Experiencia</h1>
        <div className="container">
          <div className="flex flex-col md:grid grid-cols-12 text-gray-50">
            {phases.map((p) => (
              <div key={p} className="flex md:contents">
                <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-green-500 pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow text-center">
                    <i className="fas fa-check-circle text-white"></i>
                  </div>
                </div>
                <div className="bg-green-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                  <h3 className="font-semibold text-lg mb-1">Package Booked</h3>
                  <p className="leading-tight text-justify w-full">
                    21 July 2021, 04:30 PM
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
