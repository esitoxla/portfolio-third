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
        <About />
      </div>
    </>
  );
}
