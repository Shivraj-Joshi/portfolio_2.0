import React from "react";

/**
 * CodeCardResponsive
 * - Tailwind required
 * - Responsive behavior:
 *   - text-xs on smallest screens, text-sm on small, text-base on md+
 *   - container padding and max-width adjust with breakpoints
 *   - horizontal scrolling on very small screens to preserve formatting
 */
export default function CodeCardResponsive() {
  return (
    <div className="w-full flex justify-center px-4 sm:px-6 py-6">
      <div
        className="bg-[#141414] text-white rounded-2xl shadow-2xl font-mono
                   w-full max-w-3xl
                   border border-transparent
                   overflow-hidden"
        role="region"
        aria-label="code-card"
      >
        {/* Top bar + divider */}
        <div className="px-5 pt-5 pb-4">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
        </div>

        <div className="border-t border-[#5237f9]/100" />

        {/* Code area */}
        <div
          className="px-5 pb-6 pt-4 overflow-x-auto"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {/* responsive text sizes:
              xs: text-xs, sm: text-sm, md+: text-base */}
          <pre
            className="whitespace-pre-wrap font-mono leading-6
                          text-xs sm:text-sm md:text-base"
          >
            <code>
              <span className="text-pink-400">const</span> coder = {"{"}
              {"\n"}
              &nbsp;&nbsp;<span className="text-white">name</span>:{" "}
              <span className="text-yellow-300">'Shivraj Joshi'</span>,{"\n"}
              &nbsp;&nbsp;<span className="text-white">skills</span>:[
              <span className="text-yellow-300">'JavaScript'</span>,{" "}
              <span className="text-yellow-300">'React'</span>,{" "}
              <span className="text-yellow-300">'Redux'</span>,{" "}
              <span className="text-yellow-300">'Tailwind'</span>,{" "}
              <span className="text-yellow-300">'NodeJS'</span>,
              <span className="text-yellow-300">'Express'</span>,{" "}
              <span className="text-yellow-300">'MongoDB'</span>,{" "}
              <span className="text-yellow-300">'git'</span>,{" "}
              <span className="text-yellow-300">'GitHub'</span>],{"\n"}
              &nbsp;&nbsp;<span className="text-white">email</span>:{" "}
              <span className="text-teal-300">
                'iamshivrajjoshi07@gmail.com'
              </span>
              ,{"\n"}
              &nbsp;&nbsp;<span className="text-white">contact</span>:{" "}
              <span className="text-teal-300">+91 7011797223</span>,{"\n"}
              &nbsp;&nbsp;<span className="text-white">smartWorker</span>:{" "}
              <span className="text-teal-300">true</span>,{"\n"}
              &nbsp;&nbsp;<span className="text-white">quickLearner</span>:{" "}
              <span className="text-teal-300">true</span>,{"\n"}
              {"}"};
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}

// export default function CodeCardExact() {
//   return (
//     <div className="bg-[#0a0f2d] text-white p-6 rounded-xl w-full max-w-2xl mx-auto shadow-xl font-mono">
//       {/* Top Window Bar */}
//       <div className="flex gap-2 mb-4 border-b-2 border-[#312c85] p-2">
//         <span className="w-3 h-3 rounded-full bg-[#ff5f56]"></span>
//         <span className="w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
//         <span className="w-3 h-3 rounded-full bg-[#27c93f]"></span>
//       </div>

//       {/* Code */}
//       <pre className="text-sm leading-6">
//         <code>
//           <span className="text-pink-400">const</span> coder = {"{"}
//           {"\n"}
//           &nbsp;&nbsp;<span className="text-white">name</span>:{" "}
//           <span className="text-yellow-300">'Shivraj Joshi'</span>,{"\n"}
//           &nbsp;&nbsp;<span className="text-white">skills</span>:[
//           <span className="text-yellow-300">'JavaScript'</span>,{" "}
//           <span className="text-yellow-300">'React'</span>,{" "}
//           <span className="text-yellow-300">'Redux'</span>,{" "}
//           <span className="text-yellow-300">'Tailwind'</span>,{" "}
//           <span className="text-yellow-300">'NodeJS'</span>, {"\n"}
//           &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
//           <span className="text-yellow-300">'Express'</span>,{" "}
//           <span className="text-yellow-300">'MongoDB'</span>],{"\n"}
//           {/* <span className="text-yellow-300">'MongoDB'</span>,{" "} */}
//           {/* <span className="text-yellow-300">'Docker'</span>,{" "} */}
//           &nbsp;&nbsp;<span className="text-white">smartWorker</span>:{" "}
//           <span className="text-teal-300">true</span>,{"\n"}
//           &nbsp;&nbsp;<span className="text-white">quickLearner</span>:{" "}
//           <span className="text-teal-300">true</span>,{"\n"}
//           {"}"};
//         </code>
//       </pre>
//     </div>
//   );
// }
