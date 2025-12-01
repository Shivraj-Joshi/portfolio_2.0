import React from "react";

const About = () => {
  return (
    <>
      <div className="main-container bg-[#141414] p-2 h-auto  md:w-[600px] rounded-lg text-white flex flex-col gap-4 font-myfont">
        <div className=" p-2 border-b-2 border-[#5237f9]">
          <h1 className=" text-center  text-[30px] font-bold ">About Me</h1>
        </div>
        <div className="p-2 text-center md:h-[220px]">
          <p className="text-center  text-xl ">
            I'm a passionate Full-stack developer with a keen interest in React,
            JavaScript, and modern web technologies. My journey in web
            development started with curiosity and has grown into a deep
            commitment to crafting efficient, scalable, and user-friendly
            applications.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
