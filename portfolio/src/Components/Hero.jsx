import React from "react";
import { TypeAnimation } from "react-type-animation";

import profile from "../assets/profile.jpg";
import Button from "./Button";
import CodeCard from "./codeCard";
const Hero = () => {
  return (
    <>
      <div className="main-container bg-[#060606] h-auto w-full md:h-full md:w-[50%] p-2">
        <div className="profile-pic md:flex p-3 gap-1 items-center ">
          {/* image containing div */}
          <div className="img p-2 flex justify-center ">
            <img
              className=" h-[250px] w-[250px] object-cover rounded-full"
              src={profile}
              alt=""
            />
          </div>

          {/* type animation containing animation*/}
          <div className=" p-1 flex justify-center items-center h-[150px]   ">
            <div className=" md:h-[150px] flex flex-col gap-3 p-3 justify-center  w-[400px]">
              <h1 className="text-white  text-center p-1 font-myfont text-4xl font-bold">
                Hi, I'm Shivraj
              </h1>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "A Developer.",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "A Coder.",
                  1000,
                  "A Thinker.",
                  1000,
                ]}
                wrapper="span"
                speed={30}
                style={{
                  marginLeft: "60px",
                  fontSize: "35px",
                }}
                repeat={Infinity}
                className="text-[#5237f9] font-bold "
              />
            </div>
          </div>
        </div>
        <div className="info-container">
          <CodeCard />
          <Button />
        </div>
      </div>
    </>
  );
};

export default Hero;
