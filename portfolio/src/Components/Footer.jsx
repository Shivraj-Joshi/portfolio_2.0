import React from "react";
import insta from "../assets/socials/instagram.png";
import linkedin from "../assets/socials/linkedin.png";
import github from "../assets/socials/github.png";
const Footer = () => {
  return (
    <>
      <div className="bg-black flex flex-col justify-center border-t border-[#5237f4] gap-2 ">
        <div className="p-4 flex flex-col gap-6">
          <h1 className="text-white text-xl font-semibold font-myfont">
            Let's Connect!
          </h1>
          <p className="text-white text-xl font-myfont">
            I'm always open to collaborations, freelancing opportunities, or
            just tech discussions. If you'd like to work together or chat about
            web development, feel free to reach out!
          </p>
          <div className="socials text-white flex gap-8 text-3xl justify-center mt-5">
            <a
              href="https://www.instagram.com/iamshivrajjoshi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={insta}
                alt="follow me on instagram"
                className="h-[50px]"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/shivrajjoshi/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0A66C2] transition-all duration-300"
            >
              <img
                src={linkedin}
                alt="connect with me on linkedin"
                className="h-[50px]"
              />{" "}
            </a>
            <a
              href="https://github.com/Shivraj-Joshi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={github}
                alt="connect with me on github"
                className="h-[50px]"
              />
            </a>
          </div>
        </div>
        <div className="text-white p-4  flex items-center justify-center ">
          {" "}
          © 2025 all right reserved by {""}
          <span className="font-myfont text-[#5237f9] ml-2 font-semibold">
            {" "}
            Shivraj Joshi
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
