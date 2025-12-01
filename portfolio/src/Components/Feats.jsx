import React from "react";
import About from "./About";
import Skills from "./Skills";

const Feats = () => {
  return (
    <>
      <div className="main-container bg-[#6c7d36] h-auto md:h-full md:w-[50%] p-3 md:place-items-center flex flex-col gap-3">
        <h1>Hero's feats</h1>
        <About />
        <Skills />
      </div>
    </>
  );
};

export default Feats;
