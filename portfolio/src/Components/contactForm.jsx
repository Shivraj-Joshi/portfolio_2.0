import React from "react";

export default function ContactForm() {
  return (
    <section className=" md:w-[685px] ">
      <div className="max-w-3xl mx-auto bg-[#141414] rounded-2xl shadow-xl p-6 sm:p-8">
        {/* Heading */}
        <div className="mb-8 text-center p-2 border-b-2 border-[#5237f9]">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Contact Me
          </h2>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-5">
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-300">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="
                bg-[#181818] text-white
                rounded-lg px-4 py-3
                outline-none border border-transparent
                focus:border-[#5237f9] focus:ring-1 focus:ring-[#5237f9]
                transition
              "
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-300">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="
                bg-[#181818] text-white
                rounded-lg px-4 py-3
                outline-none border border-transparent
                focus:border-[#5237f9] focus:ring-1 focus:ring-[#5237f9]
                transition
              "
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-300">Message</label>
            <textarea
              rows="5"
              placeholder="Your message..."
              className="
                bg-[#181818] text-white
                rounded-lg px-4 py-3
                resize-none
                outline-none border border-transparent
                focus:border-[#5237f9] focus:ring-1 focus:ring-[#5237f9]
                transition
              "
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="
            hover:cursor-pointer
              mt-4
              bg-[#5237f9] hover:bg-blue-700
              text-white font-semibold
              py-3 rounded-lg
              transition-all
              hover:shadow-lg
              active:scale-95
            "
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
