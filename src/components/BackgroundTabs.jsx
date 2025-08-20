import React from 'react'

const tabItems = [
    {key: "experience", label: "My Experience"},
    {key: "education", label: "My Education"},
];

export default function BackgroundTabs({ activeTab, changeTab }) {
  return (
    <div className="w-[80rem] mx-auto flex items-center justify-center gap-3 my-8 py-8 ">
      {tabItems.map((tab) => (
        <button
          key={tab.key}
          onClick={() => changeTab(tab.key)}
          className={`px-6 py-4 rounded transition duration-200 cursor-pointer ${
            activeTab === tab.key
              ? "bg-white text-black"
              : "border-gray-300 border text-white "
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
