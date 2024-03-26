import useDarkModeStore from "../zustand/useDarkModeStore";

const About: React.FC = () => {
  const { isDarkMode } = useDarkModeStore();

  return (
    <div className="flex flex-col justify-between items-start w-full h-full lg:flex-row lg:w-3/4 mt-60 mb-20">
      <div
        className={`${isDarkMode ? "bg-[#635985]" : "bg-[#f6f3f3]"} ${
          isDarkMode ? "text-[#f6d776]" : "text-[#91c8e4]"
        } w-full lg:w-1/2 p-4 flex justify-start text-5xl font-bold sticky top-20`}
      >
        {`what i Like :>`}
      </div>
      <div className="w-full lg:w-3/4">
        <div className={`p-8 m-4 h-full w-full `}>
          <span className="text-4xl font-bold  text-[#D2DE32]">
            1. special space made by me :
          </span>
          <div
            className={`text-3xl mt-16 p-4 ${
              isDarkMode ? "text-gray-200" : "text-gray-700"
            } leading-loose`}
          >
            바로 <span className=" text-orange-500">저만의 공간</span>을
            구축하는 것입니다. 코딩을 처음 시작할때 JS로 만든 계산기가 저의 첫
            결과물이어서 기억에 남습니다. 이후 프로젝트들에서 리액트를
            처음적용해보았고, 지금 생각해보면 화면을 만들기에 급급해 유지보수에
            좋지 않은 코드를 작성했다고 생각합니다. 그러나 이후 리액트 훅과
            생명주기에 대해 공부해보고 기초를 만들수있던 좋은 경험이었습니다. :){" "}
            <br />
          </div>
        </div>
        <div className={`p-8 m-4 h-full w-full`}>
          <span className="text-4xl font-bold  text-[#D2DE32]">
            2. Practicing a challenging mind :
          </span>
          <div
            className={`text-3xl mt-16 p-4 ${
              isDarkMode ? "text-gray-200" : "text-gray-700"
            } leading-loose`}
          >
            대학교에서 배운 전공인 회계는 배운 지식을 확대하는데에는 한계가
            있다고 느꼈습니다. 그래서 저는 새로운 도전을 결심하였고,
            코드스테이츠 부트캠프에 지원해서 여러 프로젝트를 만들게 되었습니다.
            <span className=" text-orange-500"> 이런 연속적인 새로운 도전</span>
            은 제가 새로운 기술을 배우고 적용하는 데 있어 두려움을 희석하게 되는
            좋은 경험이었습니다.
          </div>
        </div>
        <div className={`p-8 m-4 h-full w-full `}>
          <span className="text-4xl font-bold  text-[#D2DE32]">
            3. UI/UX tailored to the user :{" "}
          </span>
          <div
            className={`text-3xl mt-16 p-4 ${
              isDarkMode ? "text-gray-200" : "text-gray-700"
            } leading-loose`}
          >
            다양한 코드와 도구를 사용하여 사용자{" "}
            <span className=" text-orange-500">편의성</span>과{" "}
            <span className=" text-orange-500">접근성</span>을 향상하고
            시각적으로 매력적인 페이지 를 만드는 데 주력하고 있습니다.
            반응형으로 웹사이트를 완성하는것을 좋아합니다.{" "}
            <span className=" text-orange-500">
              지금 보시는 웹사이트를 크기를 줄여보세요!
            </span>{" "}
            이처럼 사용자의 편리성과 접근성을 높이고, 깔끔한 페이지를 제작하기
            위해서 다양한 코드와 툴을 사용하는걸 좋아합니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

//readme.test주석
