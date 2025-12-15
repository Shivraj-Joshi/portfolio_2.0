import React from "react";
import profile from "../assets/profile.jpg";
import Button from "./Button";
import CodeCard from "./codeCard";
const Hero = () => {
  return (
    <>
      <div className="main-container bg-[#060606] h-auto w-full md:h-full md:w-[50%] p-2">
        <div className="profile-pic  p-3">
          <div className="img p-2 flex justify-center">
            <img
              className=" h-[220px] w-[220px] object-cover rounded-full"
              src={profile}
              alt=""
            />
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
