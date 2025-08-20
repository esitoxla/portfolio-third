import React from 'react'
import mine4 from "../assets/images/mine4.jpeg"
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {

   const [state, handleSubmit] = useForm("mzzvqvwj");
   if (state.succeeded) {
     return <p>Thanks for your message!</p>;
   }

  return (
    <div className="py-[3rem] sm:py-[5rem] px-4 sm:px-10 lg:px-14 grid grid-cols-1 md:grid-cols-2 items-center gap-10 bg-indigo-100">
      {/* Left (Image blob) */}
      <div className="mx-auto md:ml-[3rem] lg:ml-[5rem] w-[250px] h-[250px] sm:w-[320px] sm:h-[320px] lg:w-[450px] lg:h-[450px] bg-indigo-200 rounded-[50%_60%_30%_60%_/_50%_60%_40%_60%] flex items-center justify-center">
        <img
          src={mine4}
          alt="Profile"
          className="w-[80%] h-[80%] object-cover rounded-[50%_60%_30%_60%_/_50%_60%_40%_60%]"
        />
      </div>

      {/* Right (Form) */}
      <div className="flex flex-col gap-1 md:gap-2 md:ml-[2rem] lg:ml-[5rem]">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl text-[#4831D4] font-medium text-center md:text-left">
          Send me a message!
        </h3>

        <form
          onSubmit={handleSubmit}
          action="POST"
          className="flex flex-col gap-6 p-4 sm:p-6 lg:p-8 w-full sm:w-[90%] lg:w-[80%]"
        >
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label>Your Name</label>
            <input
              type="text"
              className="px-4 py-2 bg-white border-0 rounded outline-0"
              id="name"
              name="name"
            />
            <ValidationError prefix="name" field="name" errors={state.errors} />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label>Your Email</label>
            <input
              type="email"
              className="px-4 py-2 bg-white border-0 rounded outline-0"
              id="email"
              name="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label>Your Message</label>
            <textarea
              className="px-4 py-3 bg-white border-0 rounded outline-0"
              rows="4"
              id="message"
              name="message"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          {/* Button */}
          <button
            className="rounded bg-gradient-to-r from-[#6C63FF] to-[#3FE7E8] text-white px-4 py-2 w-[70%] sm:w-[50%] lg:w-[40%] cursor-pointer mx-auto md:mx-0 transform transition-transform duration-300 hover:scale-109"
            type="submit"
            disabled={state.submitting}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
