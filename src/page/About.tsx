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
            나만의 공간을 만드는 것을 좋아합니다. <br />
            직접만들어낸다는 호기심에 혼자서 관련영상과 서적을 찾아서 시도하기
            시작해보면서 <br />
            자연스럽게 개발에 흥미를 가지게 되었습니다. <br />
            수많은 경험과 도전을 통해서 다양한 기술 스택을 쌓아 <br />
            회사와 같이 성장할 수 있는 인재가 되고싶습니다.
          </div>
        </div>
        <div
          className={`${
            isDarkMode ? "bg-[#7C81AD]" : ""
          } p-8 m-4 border border-gray-300 rounded-lg shadow-md`}
        >
          <span className="text-2xl font-bold text-[#F58634]">2. 도전 :</span>
          <div
            className={`text-base md:text-lg mt-2 p-4 ${
              isDarkMode ? "text-gray-200" : ""
            }`}
          >
            대학교에서 배운 전공인 회계는 배운 지식을 확대하는데에는 한계가
            있다고 느꼈습니다. <br />
            그러던 중 인터넷 강의 영상으로 프로그래밍에 입문에 도전! <br />
            만든 코드에 따라 화면에 바로 적용되고 실시간으로 확인할 수 있다는
            점이 매력적으로 다가왔습니다. <br />
          </div>
        </div>
        <div
          className={`${
            isDarkMode ? "bg-[#7C81AD]" : ""
          } p-8 m-4 border border-gray-300 rounded-lg shadow-md`}
        >
          <span className="text-2xl font-bold  text-[#D2DE32]">
            3. 친숙함 :{" "}
          </span>
          <div
            className={`text-base md:text-lg mt-2 p-4 ${
              isDarkMode ? "text-gray-200" : ""
            }`}
          >
            웹사이트마다 사용자가 필요로 하는 기능을 가지게 합니다. 사용자의
            편리성과 접근성을 높이고, 깔끔한 페이지를 제작하기 위해서 다양한
            코드와 툴을 사용하는걸 좋아합니다. 좀 더 사용자의 입장에서 바라볼 수
            있는 친밀한 개발자입니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
