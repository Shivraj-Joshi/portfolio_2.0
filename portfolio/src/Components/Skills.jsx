import React from "react";
import { skills } from "../temp/Data";
const Skills = () => {
  return (
    <>
      <div className="bg-[#141414] h-auto md:h-auto md:w-[600px] p-3 rounded-lg">
        <div className="p-2 border-b-2 border-[#5237f9]">
          <h1 className="text-center font-bold text-white font-myfont text-[30px]">
            Skills
          </h1>
        </div>
        <div className="  mt-1 p-2 flex flex-col gap-2">
          {/* frontend skills div  */}
          <div className="frontend-div  p-6 rounded">
            <h2 className="font-myfont text-center text-white mb-4">
              Frontend Skills
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {skills
                .find((item) => item.category === "Frontend")
                ?.items?.map((skill) => (
                  <div
                    key={skill}
                    className="bg-green-700 text-white text-center py-2 px-3 rounded"
                  >
                    {skill}
                  </div>
                ))}
            </div>
          </div>

          {/* backend skills div */}
          <div className="backend-div  p-6 rounded">
            <h2 className="font-myfont text-center text-white mb-4">
              Backend Skills
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {skills
                .find((item) => item.category === "Backend")
                ?.items?.map((skill) => (
                  <div
                    key={skill}
                    className="bg-green-700 text-white text-center py-2 px-3 rounded"
                  >
                    {skill}
                  </div>
                ))}
            </div>
          </div>

          {/* dev-tools div */}
          <div className="frontend-div  p-6 rounded">
            <h2 className="font-myfont text-center text-white mb-4">
              Developer Tools
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {skills
                .find((item) => item.category === "devTools")
                ?.items?.map((skill) => (
                  <div
                    key={skill}
                    className="bg-green-700 text-white text-center py-2 px-3 rounded"
                  >
                    {skill}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
