import React from 'react'
import mine4 from "../assets/images/mine4.jpeg"

export default function Contact() {
  return (
    <div className="py-[5rem] px-14 grid md:grid-cols-2 bg-indigo-100 ">
      <div class="ml-[5rem] h-[450px] bg-indigo-200 rounded-[50%_60%_30%_60%_/_50%_60%_40%_60%] flex items-center justify-center ">
        <img
          src={mine4}
          alt="Profile"
          class="w-[80%] h-[80%] rounded-[50%_60%_30%_60%_/_50%_60%_40%_60%]"
        />
      </div>

      <div className=" rounded ml-[5rem] flex flex-col gap-2">
        <h3 className="px-8 text-4xl text-[#4831D4] font-medium">Send me a message!</h3>
        <form action="POST" className="flex flex-col gap-6 p-8 w-[80%]">
          <div className="flex flex-col gap-2">
            <label htmlFor="">Your Name</label>
            <input
              type="text"
              className="px-6 py-2 bg-white border-0 rounded outline-0"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="">Your Email</label>
            <input
              type="email"
              className="px-4 py-2 bg-white border-0 rounded outline-0"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="">Your Message</label>
            <textarea
              name=""
              id=""
              className="px-6 py-3 bg-white border-0 rounded outline-0"
            ></textarea>
          </div>

          <button className="rounded bg-gradient-to-r from-[#6C63FF] to-[#3FE7E8] text-white px-4 py-2 w-[50%] cursor-pointer">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
