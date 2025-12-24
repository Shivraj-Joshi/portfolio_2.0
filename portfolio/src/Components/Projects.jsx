import React from "react";
import { motion, scale } from "framer-motion";
import { project } from "../temp/Data";

//framer animations

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariant = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stifness: 120,
      damping: 15,
    },
  },
};

const Projects = () => {
  return (
    <div className="bg-[#141414]  p-3 rounded-lg flex flex-col gap-8 ">
      <div className="p-2 border-b-2 border-[#5237f9]">
        <h1 className="text-center font-bold text-white font-myfont text-[30px]">
          Projects
        </h1>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col md:grid grid-cols-2 gap-8 p-3"
      >
        {project.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariant}
            whileHover={{
              y: -12,
              rotateX: 6,
              rotateY: -6,
              scale: 1.04,
              boxShadow: "0 20px 40px rgba(82,55,249,0.35)",
            }}
            transition={{ type: "spring", stiffness: 200 }}
            style={{ transformPerspective: 1000 }}
            className="
        border border-[#555555] text-white w-[300px]
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
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="p-4 sm:p-5 flex flex-col gap-3 flex-1"
            >
              {/* Title */}
              <h3 className="text-lg sm:text-xl font-semibold">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-300 line-clamp-3">
                {project.description}
              </p>
              {/* tech-stack */}
              <p className="text-sm sm:text-base text-gray-300 line-clamp-3 ">
                {" "}
                Tech used:
                {project.tech}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
