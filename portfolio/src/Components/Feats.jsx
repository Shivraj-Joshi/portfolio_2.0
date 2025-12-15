import React from "react";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";

const Feats = () => {
  return (
    <>
      <div className="main-container bg-[#060606] h-auto md:h-screen md:w-[50%] p-3 md:place-items-center flex flex-col gap-3 md:overflow-y-scroll">
        <h1>Hero's feats</h1>
        <About />
        <Skills />
        <Projects />
      </div>
    </>
  );
};

export default Feats;
