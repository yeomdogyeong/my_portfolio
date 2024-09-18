import useDarkModeStore from "../zustand/useDarkModeStore";
import { Zoom } from "react-awesome-reveal";
import Profile from "./Profile";
import { dogyeong } from "../dummyData/dummyData";

const About: React.FC = () => {
  const { isDarkMode } = useDarkModeStore();

  return (
    <div className="flex justify-between items-start w-full h-full flex-row lg:w-3/4 p-2 lg:p-0 mb-20 gap-2">
      <div
        className={`${isDarkMode ? "bg-[#635985]" : "bg-[#f6f3f3]"} ${
          isDarkMode ? "text-[#f6d776]" : "text-[#91c8e4]"
        } max-w-10 lg:w-1/2 flex-row lg:flex-col justify-between text-3xl font-bold sticky top-[80px] z-10 sm:text-5xl mb-10`}
      >
        <div className="mb-4 lg:mr-4">{`W H O `}</div>
        <div className="mb-4 lg:mr-4">{`A M`}</div>
        <div className="mb-4 lg:mr-4">{` I `}</div>{" "}
        <div className="mb-4 lg:mr-4 text-[#FA7070]">{`?`}</div>
      </div>
      <div className="">
        <Profile member={dogyeong} />
        <div className="w-full lg:w-full shadow-lg rounded-2xl mt-10">
          <div className={`p-8 h-full w-full `}>
            <Zoom
              className={`text-3xl font-bold  ${
                isDarkMode ? "text-[#A594F9]" : "text-[#454545]"
              }`}
            >
              2023
            </Zoom>
            <div
              className={`text-xl p-4 flex-col ${
                isDarkMode ? "text-gray-200" : "text-grey-400"
              } leading-loose`}
            >
              <div
                className={`${
                  isDarkMode ? "text-dark-yellow" : "text-light-theme"
                }`}
              >
                2022.12 ~ 2023.06 : 코드스테이츠 부트캠프
              </div>
              <div
                className={`${
                  isDarkMode ? "text-dark-yellow" : "text-light-theme"
                }`}
              >
                2023. 05 - 2023.06 : 도와조약
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

//readme.test주석
