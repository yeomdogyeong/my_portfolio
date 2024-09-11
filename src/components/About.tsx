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
            <Zoom className="text-4xl font-bold  text-[#FA7070]">
              1. special space made by me :
            </Zoom>
            <div
              className={`text-2xl mt-16 p-4 ${
                isDarkMode ? "text-gray-200" : "text-gray-700"
              } leading-loose`}
            >
              바로
              <span
                className={`${
                  isDarkMode ? "text-[#f6d776]" : "text-[#7AA2E3]"
                }`}
              >
                저만의 공간을 구축
              </span>
              {/* 하는 것입니다. 코딩을 처음 시작할때 JS로 만든 계산기가 저의 첫
            결과물이어서 기억에 남습니다. 이후 프로젝트들에서 리액트를
            처음적용해보았고, 지금 생각해보면 화면을 만들기에 급급해 유지보수에
            좋지 않은 코드를 작성했다고 생각합니다. 그러나 이후 리액트 훅과
            생명주기에 대해 공부해보고 기초를 만들수있던 좋은 경험이었습니다. :){" "}
            <br /> */}
            </div>
          </div>
          <div className={`p-8 h-full w-full`}>
            <Zoom className="text-4xl font-bold  text-[#FA7070]">
              2. Practicing challenging mind:
            </Zoom>
            <div
              className={`text-2xl mt-16 p-4 ${
                isDarkMode ? "text-gray-200" : "text-gray-700"
              } leading-loose`}
            >
              대학교에서 배운 전공지식은 기술을 확대하는데 한계가 있다고
              느꼈습니다. 그래서 저는 코딩으로 새로운 세계를 만들어보고
              싶었습니다. 하던 전공을 포기하고 전향하는 것은 쉽지 않은
              선택이었지만,
              <span
                className={`${
                  isDarkMode ? "text-[#f6d776]" : "text-[#7AA2E3]"
                }`}
              >
                {" "}
                이런 새로운 도전
              </span>
              이야 말로 나 자신을 발전시키고 삶의 원동력이 될 수 있다고
              느낍니다.
            </div>
          </div>
          <div className={`p-8 h-full w-full `}>
            <Zoom className="text-4xl font-bold  text-[#FA7070]">
              3. UI/UX tailored to the user :
            </Zoom>
            <div
              className={`text-2xl mt-16 p-4 ${
                isDarkMode ? "text-gray-200" : "text-gray-700"
              } leading-loose`}
            >
              다양한 코드와 도구를 사용하여 사용자{" "}
              <span
                className={`${
                  isDarkMode ? "text-[#f6d776]" : "text-[#7AA2E3]"
                }`}
              >
                편의성
              </span>
              과{" "}
              <span
                className={`${
                  isDarkMode ? "text-[#f6d776]" : "text-[#7AA2E3]"
                }`}
              >
                접근성
              </span>
              을 향상하고 시각적으로 매력적인 페이지 를 만드는 데 주력하고
              있습니다. 반응형으로 웹사이트를 완성하는것을 좋아합니다.{" "}
              <span
                className={`${
                  isDarkMode ? "text-[#f6d776]" : "text-[#7AA2E3]"
                }`}
              >
                지금 보시는 웹사이트를 크기를 줄여보세요!
              </span>{" "}
              이처럼 사용자의 편리성과 접근성을 높이고, 깔끔한 페이지를 제작하기
              위해서 다양한 코드와 툴을 사용하는걸 좋아합니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

//readme.test주석
