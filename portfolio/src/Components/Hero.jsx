import React from "react";
import profile from "../assets/profile.jpg";
import Button from "./Button";
const Hero = () => {
  const codeLines = [
    `<span class="text-pink-400">const</span> <span class="text-white">developer</span> <span class="text-sky-300">=</span> <span class="text-cyan-300">{</span>`,
    `  <span class="text-sky-300">name:</span> <span class="text-yellow-300">'Shivraj Joshi'</span>,`,
    `  <span class="text-sky-300">skills:</span> [ <br/> <span class="text-yellow-300">'JavaScript'</span>, <span class="text-yellow-300">'React'</span>, <span class="text-yellow-300 break-normal">'Redux'</span>,`,
    `  <span class="text-yellow-300">'Tailwind'</span>, <span class="text-yellow-300">'Express'</span>, <span class="text-yellow-300">'NodeJS'</span>,`,
    `  <span class="text-yellow-300">'MongoDB' <br/></span> ],`,
    `  <span class="text-sky-300">smartWorker:</span> <span class="text-cyan-300">true</span>,`,
    `  <span class="text-sky-300">quickLearner:</span> <span class="text-cyan-300">true</span>,`,
    `  <span class="text-sky-300">problemSolver:</span> <span class="text-cyan-300">true</span>,`,

    `}`,
  ];

  return (
    <>
      <div className="main-container bg-[#2092e9] h-auto w-full md:h-full md:w-[50%] p-2">
        <div className="profile-pic border-2 border-amber-300 p-3">
          <div className="img p-1 border-white border-4 content-center">
            <img
              className=" h-[280px] w-[350px] object-cover rounded-[50%]"
              src={profile}
              alt=""
            />
          </div>
        </div>
        <div className="info-container bg-fuchsia-900  p-3">
          <div className="sub-profile-container bg-green-500 p-1">
            <div className="style-div bg-[#0a0e36] flex p-1 gap-2 border-b-[#312c85] rounded-t-lg ">
              <div className="bg-red-400 rounded-[50%] h-3 w-3"></div>
              <div className="bg-orange-400 rounded-[50%] h-3 w-3"></div>
              <div className="bg-green-200 rounded-[50%] h-3 w-3"></div>
            </div>
            <div className="bg-[#061028] rounded-b-lg p-4 border-t-2 border-[#2b0e5b] ">
              <pre className="text-sm leading-7 font-mono text-white whitespace-pre-wrap break-normal ">
                {codeLines.map((line, index) => (
                  <div key={index} className="flex flex-wrap">
                    {/* Line Number */}

                    {/* Code Line */}
                    <code
                      className="block whitespace-pre-wrap break-all"
                      dangerouslySetInnerHTML={{ __html: line }}
                    />
                  </div>
                ))}
              </pre>
            </div>
          </div>
          <Button />
        </div>
      </div>
    </>
  );
};

export default Hero;
