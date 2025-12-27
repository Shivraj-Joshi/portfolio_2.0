import image1 from '../assets/project/image1.png'
import image2 from '../assets/project/image2.png'
import image3 from '../assets/project/image3.png'
import javascript from "../assets/skills/javascript.png";
import react from "../assets/skills/react.png";
import redux from "../assets/skills/redux.png";
import node from "../assets/skills/nodejs.png";
import tailwind from "../assets/skills/tailwind-css.png";
import express from "../assets/skills/express.png";
import mongodb from "../assets/skills/mongodb.png";
import github from "../assets/socials/github.png";
import git from "../assets/skills/git.png";
import vscode from "../assets/skills/vscode.png";
import material from "../assets/skills/material.png";
import framer from "../assets/skills/framer.png";
import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import postman from "../assets/skills/postman.png";
import mongoose from "../assets/skills/mongoose.png";

const skills = [

    {

        category: "Frontend",
        skills: [
            {
                id: 1,
                name: "HTML",
                img: html
            },
            {
                id: 2,
                name: "CSS",
                img: css
            },
            {
                id: 3,
                name: "JavaScript",
                img: javascript,
            },
            {
                id: 4,
                name: "React",
                img: react,
            },
            {
                id: 5,
                name: "Tailwind",
                img: tailwind,
            },
            {
                id: 6,
                name: "Redux",
                img: redux,
            },
            {
                id: 7,
                name: "Framer Motion",
                img: framer
            },
            {
                id: 8,
                name: "Material UI",
                img: material
            },
        ]
    },
    {
        category: "Backend",
        skills: [
            {
                id: 9,
                name: "NodeJs",
                img: node
            },
            {
                id: 10,
                name: "Express",
                img: express
            },
            {
                id: 11,
                name: "MongoDB",
                img: mongodb,
            },
            {
                id: 12,
                name: "Mongoose",
                img: mongoose,
            },
        ]
    },
    {
        category: "devTools",
        skills: [
            {
                id: 12,
                name: "VsCode",
                img: vscode,
            },
            {
                id: 13,
                name: "Git",
                img: git,
            },
            {
                id: 14,
                name: "Github",
                img: github,
            },
            {
                id: 15,
                name: "Postman",
                img: postman,
            },
        ]

    }


]

const project = [

    {
        id: 1,
        image: image2,
        title: "AI chatBot",
        description: "this is an AI chat bot. Google gemini API is used to build it",
        tech: ["React", "Tailwind Css", "Google Gemini API"],
        live: "URL",
        gitHub: "URL"

    },
    {
        id: 2,
        image: image3,
        title: "StyleClub",
        description: "this is an e-commerce store",
        tech: ["React", "Tailwind Css", "Firebase", "Redux"],
        live: "URL",
        gitHub: "URL"

    },
    {
        id: 3,
        image: image1,
        title: "Portfolio",
        description: "this is my 1st portfolio",
        tech: ["React", "Tailwind Css"],
        live: "URL",
        gitHub: "URL"

    },

]

export { skills, project };




//    <div className="sub-profile-container bg-green-500 p-1">
//             <div className="style-div bg-[#0a0e36] flex p-1 gap-2 border-b-[#312c85] rounded-t-lg ">
//               <div className="bg-red-400 rounded-[50%] h-3 w-3"></div>
//               <div className="bg-orange-400 rounded-[50%] h-3 w-3"></div>
//               <div className="bg-green-200 rounded-[50%] h-3 w-3"></div>
//             </div>
//             <div className="bg-[#061028] rounded-b-lg p-4 border-t-2 border-[#2b0e5b] ">
//               <pre className="text-sm leading-7 font-mono text-white whitespace-pre-wrap break-normal ">
//                 {codeLines.map((line, index) => (
//                   <div key={index} className="flex flex-wrap">
//                     {/* Line Number */}

//                     {/* Code Line */}
//                     <code
//                       className="block whitespace-pre-wrap break-all"
//                       dangerouslySetInnerHTML={{ __html: line }}
//                     />
//                   </div>
//                 ))}
//               </pre>
//             </div>
//           </div>