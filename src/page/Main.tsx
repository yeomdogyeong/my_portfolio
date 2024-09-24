import { useState } from "react";
import "./Main.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Typewriter from "typewriter-effect";
import Star from "../components/Star";
import About from "../components/About";
import useDarkModeStore from "../zustand/useDarkModeStore";
import Profile from "../components/Profile";
import Graph from "../components/Graph";
import { cardData, dogyeong } from "../dummyData/dummyData";
import { Bounce } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";
import { VerticalAni } from "../components/VerticalAni";
import { Project } from "../components/Project";
import { Connect } from "../components/Connect";
function Main() {
  const { isDarkMode } = useDarkModeStore();

  return (
    <>
      <Header />

      <Star isDarkMode={isDarkMode} />
      <div
        id="about"
        className={`flex flex-col justify-center items-center w-full min-h-screen pt-40 ${
          isDarkMode ? "bg-[#635985]" : "bg-[#f6f3f3]"
        }`}
      >
        <div className="font-intelon flex flex-col justify-center items-center h-2/3 mb-10">
          {/* <VerticalAni /> */}
          {/* <Bounce
            className={`mb-10 text-5xl ${
              isDarkMode ? "text-[#f6d776]" : "text-[#91c8e4]"
            }`}
          >{`<ABOUT/>`}</Bounce> */}
          <div className="flex items-center">
            {/* <Typewriter
              options={{
                strings: [
                  "React",
                  "TypeScript",
                  "JavaScript",
                  "zustand",
                  "Dart",
                ],
                autoStart: true,
                loop: true,
                wrapperClassName: "Typewriter__wrapper",
              }}
            /> */}
            {/* <span>를 공부하고 있는</span> */}
          </div>
        </div>

        {/* <Slide className="flex justify-center items-center">
          <Profile member={dogyeong} />
        </Slide> */}

        <About />
        {/* <div
          id="project"
          className={`border-dotted border w-full m-20 p-4 ${
            isDarkMode ? "" : "border-gray-400"
          }`}
        ></div> */}
        <Project />
        {/* <div id="skills">
          <Bounce
            className={`${isDarkMode ? "text-[#f6d776]" : ""} text-5xl mt-20`}
          >
            {`Connect`}
          </Bounce>
        </div> */}

        {/* <Graph /> */}
        <Connect />
        <Footer />
      </div>
    </>
  );
}

export default Main;
