import React from 'react'

export default function Experience() {
  return (
    <div className="flex gap-6 justify-center py-4 h-screen text-white">
      <div className="flex flex-col gap-4 py-[2rem]">
        <div className="h-1/3 py-5">March to present</div>
        <div className="h-1/3 py-4">february to march</div>
        <div className="h-1/3 py-4">january to february</div>
      </div>

      <div className="border-2 text-[#99BEFF] rounded relative">
        <div className="absolute left-[-8px] top-[10%] w-4 h-4 bg-white border-4 border-[#ADCCFF] rounded-full"></div>
        <div className="absolute left-[-8px] top-[40%] w-4 h-4 bg-white border-4 border-[#ADCCFF] rounded-full"></div>
        <div className="absolute left-[-8px] top-[71%] w-4 h-4 bg-white border-4 border-[#ADCCFF] rounded-full"></div>
      </div>

      <div className="flex flex-col gap-4 py-[2rem]">
        <div className="h-1/3 flex flex-col gap-1">
          <p className="font-medium text-3xl">internship</p>
          <p>jogjlmfvojnlm gjnlm.</p>
          <p>dfijpnklmpknl nkp ml nk lm</p>
        </div>

        <div className="h-1/3 flex flex-col gap-1">
          <p className="font-medium text-3xl">internship</p>
          <p>jogjlmfvojnlm gjnlm.</p>
          <p>dfijpnklmpknl nkp ml nk lm</p>
        </div>

        <div className="h-1/3 flex flex-col gap-1">
          <p className="font-medium text-3xl">internship</p>
          <p>jogjlmfvojnlm gjnlm.</p>
          <p>dfijpnklmpknl nkp ml nk lm</p>
        </div>
      </div>
    </div>
  );
}
