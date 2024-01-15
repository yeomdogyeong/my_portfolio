import useDarkModeStore from "../zustand/darkModeStore";

const About = () => {
  const { isDarkMode, toggleDarkMode } = useDarkModeStore();

  return (
    <div className="flex flex-col justify-between items-start w-full h-full md:flex-row md:w-2/3 mt-20 mb-20">
      <div
        className={`${isDarkMode ? "bg-[#635985]" : ""} ${
          isDarkMode ? "text-[#f6d776]" : ""
        } w-full md:w-1/2 p-4 flex justify-start md:text-3xl font-bold sticky top-24 `}
      >
        {`이런걸 좋아합니다 :>`}
      </div>
      <div className="w-full md:w-3/4 ">
        <div
          className={`${
            isDarkMode ? "bg-[#7C81AD]" : ""
          } p-8 m-4 border border-gray-300 rounded-lg shadow-md`}
        >
          <span className="text-2xl font-bold text-[#FFB996]">
            1. 나만의 공간 :
          </span>
          <div
            className={`text-base md:text-lg mt-2 p-4 ${
              isDarkMode ? "text-gray-200" : ""
            }`}
          >
            가장 좋아하는 것은 바로 나만의 공간을 만드는 것입니다. 이 공간 역시
            제 호기심과 창의력이 만나 탄생한 곳이죠:) 관련 영상과 서적을 통해
            배운 지식을 활용해 직접 만들어보면서, 개발에 대한 흥미를 자연스레
            느끼는중입니다. 이러한 경험과 도전을 통해 다양한 기술 스택을
            쌓아왔고, 이를 바탕으로 회사와 함께 성장하는 인재가 되고자 합니다.
          </div>
        </div>
        <div
          className={`${
            isDarkMode ? "bg-[#7C81AD]" : ""
          } p-8 m-4 border border-gray-300 rounded-lg shadow-md`}
        >
          <span className="text-2xl font-bold text-[#F58634]">
            2. 가치있는 도전 :
          </span>
          <div
            className={`text-base md:text-lg mt-2 p-4 ${
              isDarkMode ? "text-gray-200" : ""
            }`}
          >
            {`대학교에서 배운 전공인 회계는 배운 지식을 확대하는데에는 한계가
            있다고 느꼈습니다.
            
            그래서 저는 새로운 도전을 결심하게 되었죠 :>

            인터넷 강의를 통해 프로그래밍에 입문하게 되었고, 제가 작성한 코드가
            화면에 바로 적용되는 것을 실시간으로 확인하는걸 즐깁니다.`}
          </div>
        </div>
        <div
          className={`${
            isDarkMode ? "bg-[#7C81AD]" : ""
          } p-8 m-4 border border-gray-300 rounded-lg shadow-md`}
        >
          <span className="text-2xl font-bold  text-[#D2DE32]">
            3. 친숙함을 느끼게 하는 개발자 :{" "}
          </span>
          <div
            className={`text-base md:text-lg mt-2 p-4 ${
              isDarkMode ? "text-gray-200" : ""
            }`}
          >
            개발자로서 저는 다양한 코드와 도구를 사용하여 사용자 편의성과
            접근성을 향상하고 시각적으로 매력적인 페이지를 만드는 데 주력하고
            있습니다. 사용자의 편리성과 접근성을 높이고, 깔끔한 페이지를
            제작하기 위해서 다양한 코드와 툴을 사용하는걸 좋아합니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
