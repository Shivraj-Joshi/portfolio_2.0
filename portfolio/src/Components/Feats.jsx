import React from "react";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import ContactForm from "./contactForm";

const Feats = () => {
  return (
    <>
      <div className="main-container bg-[#5555] h-auto md:h-screen md:w-[50%] p-3 md:place-items-center flex flex-col gap-3 md:overflow-y-scroll">
        <About />
        <Skills />
        <Projects />
        <ContactForm />
      </div>
    </>
  );
};

export default Feats;
