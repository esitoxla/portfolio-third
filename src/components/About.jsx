import React from "react";
import mine2 from "../assets/images/mine2.jpeg";
import mine3 from "../assets/images/mine3.jpeg";

export default function About() {
  return (
    <div className="px-8 flex gap-6">
      <div className="w-1/2 flex flex-col gap-8">
        <div className="text-5xl font-medium">ABOUT MYSELF</div>

        <p className="text-gray-500">
          inappropriate behavior is often laughed off as “boys will be boys,”
          women face higher conduct standards especially in the workplace.
          That’s why it’s crucial that, as women, our behavior on the job is
          beyond reproach. inappropriate behavior is often laughed.
        </p>

        <p className="text-gray-500">
          That’s why it’s crucial that, as women, our behavior on the job is
          beyond reproach. inappropriate behavior is often laughed.
          inappropriate behavior is often laughed off as “boys will be boys,”
          women face higher conduct standards especially in the workplace.
        </p>

        <p className="border rounded bg-gradient-to-r from-[#6C63FF] to-[#3FE7E8] text-white w-[25%] px-4 py-2">
          DOWNLOAD CV
        </p>
      </div>

      <div class="w-[500px] h-[450px] bg-indigo-100 rounded-[50%_60%_30%_60%_/_50%_60%_40%_60%] flex items-center justify-center">
        <img
          src={mine2}
          alt="Profile"
          class="w-[80%] h-[70%] rounded-[50%_60%_30%_60%_/_50%_60%_40%_60%]"
        />
      </div>
    </div>
  );
}
