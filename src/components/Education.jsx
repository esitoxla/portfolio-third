import React from 'react'

export default function Education() {
  return (
    <div className="flex gap-6 justify-center py-4 h-screen text-white w-full">
      <div className="flex flex-col gap-4 py-[2rem] font-medium">
        <div className="h-1/3 py-5">September to November (2024)</div>
        <div className="h-1/3 py-4">September 2018 to August 2022</div>
        <div className="h-1/3 py-4"> September 2016 to July 2018</div>
      </div>

      <div className="border-2 text-[#99BEFF] rounded relative">
        <div className="absolute left-[-8px] top-[10%] w-4 h-4 bg-white border-4 border-[#ADCCFF] rounded-full"></div>
        <div className="absolute left-[-8px] top-[40%] w-4 h-4 bg-white border-4 border-[#ADCCFF] rounded-full"></div>
        <div className="absolute left-[-8px] top-[71%] w-4 h-4 bg-white border-4 border-[#ADCCFF] rounded-full"></div>
      </div>

      <div className="flex flex-col gap-4 py-[2rem] w-[20rem]">
        <div className="h-1/3 flex flex-col gap-2">
          <p className="font-medium">Web Development Program</p>
          <p>MEST Training Pragram</p>
        </div>

        <div className="h-1/3 flex flex-col gap-2">
          <p className="font-medium">University Of Ghana</p>
          <p>Bsc.Biology</p>
        </div>

        <div className="h-1/3 flex flex-col gap-2">
          <p className="font-medium">St Rose's Senior High School</p>
          <p>General Science</p>
        </div>
      </div>
    </div>
  );
}
