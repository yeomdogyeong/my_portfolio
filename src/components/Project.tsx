import React, { useState } from "react";
import { Bounce } from "react-awesome-reveal";
import useDarkModeStore from "../zustand/useDarkModeStore";
import { cardData } from "../dummyData/dummyData";
import Card from "./Card";
export const Project = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { isDarkMode } = useDarkModeStore();
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      {/* <Bounce
        className={`${isDarkMode ? "text-[#f6d776]" : ""} text-5xl mt-20`}
      >
        {`<PROJECT />`}
      </Bounce> */}
      <div
        className="flex justify-between items-start w-full h-full flex-row lg:w-3/4 p-2 lg:p-0 mb-20 gap-2"
        id="project"
      >
        <div
          className={`${isDarkMode ? "bg-[#635985]" : "bg-[#f6f3f3]"} ${
            isDarkMode ? "text-[#F79F24]" : "text-[#6A9AB0]"
          } max-w-10 lg:w-1/2 flex-row lg:flex-col justify-between text-md font-bold sticky top-[85px] z-10 sm:text-xl mb-10`}
        >
          <div className="">{`P`}</div>
          <div className="">{`R`}</div>
          <div className="">{`O`}</div>
          <div className="">{`J`}</div>
          <div className="">{`E`}</div>
          <div className="">{`C`}</div>
          <div className="">{`T`}</div>
        </div>
        <div className="w-full flex-col items-center justify-center ">
          {/* <div className="justify-center xl:justify-end xl:w-2/3 flex items-center w-full">
            <button
              className={`-2 p-3 rounded-2xl mt-20 ${
                isDarkMode
                  ? "hover:bg-[#7C81AD] text-gray-300"
                  : "hover:bg-[#91c8e4]"
              }`}
              onClick={handleClick}
            >
              카드 전체 뒤집기
            </button>
          </div> */}

          <div className="w-full flex flex-row flex-wrap z-5 justify-center  items-center gap-4">
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
        </div>
      </div>
      {/* <div
        className={`border-dotted border w-full m-20 ${
          isDarkMode ? "" : "border-gray-400"
        }`}
      ></div> */}
    </>
  );
};
