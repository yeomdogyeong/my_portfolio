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

function Main() {
  const [isFlipped, setIsFlipped] = useState(false);
  const { isDarkMode } = useDarkModeStore();

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

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
          <span
            className={`mb-10 text-5xl ${isDarkMode ? "text-[#f6d776]" : ""}`}
          >{`<ABOUT/>`}</span>
          <div className="flex items-center">
            <Typewriter
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
            />
            <span>를 공부하고 있는</span>
          </div>
        </div>
        <Profile member={dogyeong} />
        <About />
        <div
          id="project"
          className={`border-dotted border w-full m-20 ${
            isDarkMode ? "" : "border-gray-400"
          }`}
        ></div>
        <div className={`${isDarkMode ? "text-[#f6d776]" : ""} text-5xl mt-20`}>
          {`<PROJECT />`}
        </div>
        <div className="justify-center xl:justify-end xl:w-2/3 flex items-center w-full">
          <button
            className={`border-2 p-3 rounded-2xl mt-20 hover:bg-[#7C81AD] ${
              isDarkMode ? "text-gray-300" : ""
            }`}
            onClick={handleClick}
          >
            카드 전체 뒤집기
          </button>
        </div>
        <div
          data-testid="flipped-card"
          className="flex flex-row flex-wrap z-5 justify-evenly items-center w-2/3"
        >
          {cardData.map((data, idx) => (
            <Card
              key={idx}
              isFlipped={isFlipped}
              frontImage={data.frontImage}
              frontDescription={data.frontDescription}
              description={data.description}
              gitLink={data.gitLink}
              demoLink={data.demoLink}
            />
          ))}
        </div>
        <div
          className={`border-dotted border w-full m-20 ${
            isDarkMode ? "" : "border-gray-400"
          }`}
        ></div>
        <div
          id="skills"
          className={`${isDarkMode ? "text-[#f6d776]" : ""} text-5xl mt-20`}
        >
          {`<Skills />`}
        </div>

        <Graph />
        <Footer />
      </div>
    </>
  );
}

export default Main;
