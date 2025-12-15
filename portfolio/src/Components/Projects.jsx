import React from "react";
import { project } from "../temp/Data";

const Projects = () => {
  return (
    <div className="bg-[#141414]  md:w-[600px] p-3 rounded-lg flex flex-col gap-8">
      <div className="p-2 border-b-2 border-[#5237f9]">
        <h1 className="text-center font-bold text-white font-myfont text-[30px]">
          Projects
        </h1>
      </div>
      {project.map((project) => (
        <div
          className="
        border border-[#555555] text-white
        rounded-2xl overflow-hidden
        shadow-lg hover:shadow-2xl
        transition-all duration-300
        flex flex-col
      "
        >
          {/* Image */}
          <div className="w-full h-48 sm:h-56 md:h-44 lg:h-48 overflow-hidden rounded-b-xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover
                     hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Content */}
          <div className="p-4 sm:p-5 flex flex-col gap-3 flex-1">
            {/* Title */}
            <h3 className="text-lg sm:text-xl font-semibold">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-300 line-clamp-3">
              {project.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
