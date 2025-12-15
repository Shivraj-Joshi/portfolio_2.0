import image1 from '../assets/project/image1.png'

const skills = [

    {
        items: ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Redux", "Framer Motion", "Material UI"],
        category: "Frontend"
    },
    {
        items: ["NodeJs", "Express", "Mongoose", "MongoDB"],
        category: "Backend"
    },
    {
        items: ["VsCode", "Git", "Github"],
        category: "devTools"
    }

]

const project = [

    {
        image: image1,
        title: "AI chatBot",
        description: "this is an AI chat bot. Google gemini API is used to build it",
        tech: ["React", "Tailwind Css", "Google Gemini API"],
        live: "URL",
        gitHub: "URL"

    },
    {
        image: image1,
        title: "StyleClub",
        description: "this is an e-commerce store",
        tech: ["React", "Tailwind Css", "Firebase", "Redux"],
        live: "URL",
        gitHub: "URL"

    },
    {
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