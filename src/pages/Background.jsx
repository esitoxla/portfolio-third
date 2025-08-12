import React, { useState } from "react";
import BackgroundTabs from "../components/BackgroundTabs";
import Experience from "../components/Experience";
import Education from "../components/Education";
import About from "../components/About";
import heroImg from "../assets/images/hero.png";


export default function Background() {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <>
      <div className="container">
        <div>
          <About />
        </div>
        <div
          className=" bg-cover bg-center w-full absolute my-8"
          style={{ backgroundImage: `url(${heroImg})` }}
        >
          <div className="flex flex-col justify-center">
            <div>
              <BackgroundTabs activeTab={activeTab} changeTab={setActiveTab} />
            </div>

            <div>
              {activeTab === "experience" ? <Experience /> : <Education />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
