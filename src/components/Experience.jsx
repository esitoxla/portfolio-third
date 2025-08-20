import React from 'react'

export default function Experience() {
  return (
    <div className="flex gap-3 mx-auto justify-center py-4 h-screen text-white w-[80rem]">
      <div className="flex items-end flex-col gap-4 py-[2rem] font-medium">
        <div className="h-1/3 py-5">February 2025 to Date</div>
        <div className="h-1/3 py-4">November 2023 to October 2024</div>
        <div className="h-1/3 py-4">October 2022</div>
      </div>

      <div className="border-2 text-[#99BEFF] rounded relative">
        <div className="absolute left-[-8px] top-[10%] w-4 h-4 bg-white border-4 border-[#ADCCFF] rounded-full"></div>
        <div className="absolute left-[-8px] top-[40%] w-4 h-4 bg-white border-4 border-[#ADCCFF] rounded-full"></div>
        <div className="absolute left-[-8px] top-[71%] w-4 h-4 bg-white border-4 border-[#ADCCFF] rounded-full"></div>
      </div>

      <div className="flex flex-col gap-4 py-[2rem] text-[25px]">
        <div className="h-1/3 flex flex-col gap-2">
          <p className="font-medium">Developers in Vogue Accelerator Program</p>
          <p>Software Development Intern</p>
        </div>

        <div className="h-1/3 flex flex-col gap-2">
          <p className="font-medium">CSIR Water Research Institute</p>
          <p>National Service</p>3
        </div>

        <div className="h-1/3 flex flex-col gap-2">
          <p className="font-medium">
            Solidage Africa Foundation, Health Screening
          </p>
          <p>Volunteer Work</p>
        </div>
      </div>
    </div>
  );
}
