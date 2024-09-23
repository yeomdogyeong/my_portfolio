import useDarkModeStore from "../zustand/useDarkModeStore";
import { Zoom } from "react-awesome-reveal";
import Profile from "./Profile";
import { dogyeong } from "../dummyData/dummyData";

const About: React.FC = () => {
  const { isDarkMode } = useDarkModeStore();
  const experienceData = [
    {
      id: 1,
      period: "22.12 ~ 23.06",
      description: "코드스테이츠 부트캠프",
    },
    {
      id: 2,
      period: "23.05 - 23.06",
      description: "도와조약 프로젝트",
    },
    {
      id: 3,
      period: "23.07 - 23.09",
      description: "펫칭 프로젝트",
    },
    {
      id: 4,
      period: "23.09 - 23.10",
      description: "pre-onboarding과정 9월 반응형 웹사이트",
    },
    {
      id: 5,
      period: "23.09 - 23.10",
      description: "프로그래머스 Vanilla JS를 활용한 프론트엔드 개발 21기 수료",
    },
  ];

  const experienceData2 = [
    {
      id: 0,
      period: "24.02 - 23.05",
      description: "오늘의(衣) 프로젝트",
    },
    {
      id: 1,
      period: "24.04 - 23.06",
      description: "개짱이 프로젝트",
    },
    {
      id: 2,
      period: "24.05 - 24.09",
      description: "(주)세인티 재직",
    },
  ];
  return (
    <div className="flex justify-between items-start w-full h-full flex-row lg:w-3/4 p-2 lg:p-0 mb-20 gap-2">
      {/* whoamI */}
      <div
        className={`${isDarkMode ? "bg-[#635985]" : "bg-[#f6f3f3]"} ${
          isDarkMode ? "text-[#f6d776]" : "text-[#91c8e4]"
        } max-w-10 lg:w-1/2 flex-row lg:flex-col justify-between text-xl font-bold sticky top-[85px] z-10 sm:text-3xl mb-10`}
      >
        <div className="mb-4 lg:mr-4">{`A`}</div>
        <div className="mb-4 lg:mr-4">{`B`}</div>
        <div className="mb-4 lg:mr-4">{`O`}</div>
        <div className="mb-4 lg:mr-4">{`U`}</div>
        <div className="mb-4 lg:mr-4">{`T`}</div>
        {/* <div className="mb-4 lg:mr-4">{`A M`}</div>
        <div className="mb-4 lg:mr-4">{` I `}</div>{" "} 
        <div className="mb-4 lg:mr-4 text-[#FA7070]">{`?`}</div>*/}
      </div>
      <div className="">
        <Profile member={dogyeong} />
        <div className="w-full lg:w-full rounded-2xl mt-10">
          <div className={` h-full w-full  `}>
            <Zoom
              className={`text-3xl font-bold ${
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
              {experienceData.map((item) => (
                <div
                  key={item.id}
                  className={`${
                    isDarkMode ? "text-dark-yellow" : "text-light-theme"
                  }`}
                >
                  {item.period} : {item.description}
                </div>
              ))}
            </div>
          </div>
          <div className={` h-full w-full `}>
            <Zoom
              className={`text-3xl font-bold ${
                isDarkMode ? "text-[#A594F9]" : "text-[#454545]"
              }`}
            >
              2024
            </Zoom>
            <div
              className={`text-xl p-4 flex-col ${
                isDarkMode ? "text-gray-200" : "text-grey-400"
              } leading-loose`}
            >
              {experienceData2.map((item) => (
                <div
                  key={item.id}
                  className={`${
                    isDarkMode ? "text-dark-yellow" : "text-light-theme"
                  }`}
                >
                  {item.period} : {item.description}
                </div>
              ))}
            </div>
          </div>
          <div
            className={` h-full w-full hover:shadow-lg text-center  mt-6 pr-4 pb-4`}
          >
            <div
              className={`text-3xl font-bold ${
                isDarkMode ? "text-[#A594F9]" : "text-[#454545]"
              }`}
            >
              AS IS
            </div>
            <div
              className={` mt-10 ${
                isDarkMode ? "text-dark-yellow" : "text-light-theme"
              }`}
            >
              도전하는
            </div>
            <div
              className={`${
                isDarkMode ? "text-dark-yellow" : "text-light-theme"
              }`}
            >
              노력하는
            </div>
            <div
              className={`${
                isDarkMode ? "text-dark-yellow" : "text-light-theme"
              }`}
            >
              발전하는
            </div>
          </div>
          <div
            className={` h-full w-full hover:shadow-lg text-right mt-6 pr-4 pb-4`}
          >
            <Zoom
              className={`text-3xl font-bold ${
                isDarkMode ? "text-[#A594F9]" : "text-[#454545]"
              }`}
            >
              TO BE
            </Zoom>
            <div
              className={` mt-10 ${
                isDarkMode ? "text-dark-yellow" : "text-light-theme"
              }`}
            >
              이끌어가는
            </div>
            <div
              className={`${
                isDarkMode ? "text-dark-yellow" : "text-light-theme"
              }`}
            >
              노련한
            </div>
            <div
              className={`${
                isDarkMode ? "text-dark-yellow" : "text-light-theme"
              }`}
            >
              두려워하지 않는
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

//readme.test주석
