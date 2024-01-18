import useDarkModeStore from "../zustand/darkModeStore";

const About: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useDarkModeStore();

  return (
    <div className="flex flex-col justify-between items-start w-full h-full lg:flex-row lg:w-3/4 mt-60 mb-20">
      <div
        className={`${isDarkMode ? "bg-[#635985]" : "bg-white"} ${
          isDarkMode ? "text-[#f6d776]" : "text-[#91c8e4]"
        } w-full lg:w-1/2 p-4 flex justify-start text-5xl font-bold sticky top-20`}
      >
        {`이런걸 좋아합니다 :>`}
      </div>
      <div className="w-full lg:w-3/4">
        <div className={`p-8 m-4 h-full w-full `}>
          <span className="text-4xl font-bold  text-[#D2DE32]">
            1. 나만의 공간 :
          </span>
          <div
            className={`text-3xl mt-16 p-4 ${
              isDarkMode ? "text-gray-200" : "text-gray-700"
            } leading-loose`}
          >
            제가 가장 즐기는것은 바로{" "}
            <span className=" text-orange-500">나만의 창조적인 공간</span>
            을 구축하는 것입니다. 이 공간도 제 호기심과 창의력이 만나 탄생한
            곳이죠. 관련 영상과 서적을 통해 배운 지식을 활용하여 직접
            만들어보면서, 개발에 대한 흥미를 깨우쳤습니다. :) <br />
            이러한 경험과 도전을 통해
            <span className=" text-orange-500"> 다양한 기술 스택을</span>
            쌓아왔고, 이를 바탕으로 회사와 함께 성장하는 인재가 되고자 합니다.
          </div>
        </div>
        <div className={`p-8 m-4 h-full w-full`}>
          <span className="text-4xl font-bold  text-[#D2DE32]">
            2. 가치있는 도전 :
          </span>
          <div
            className={`text-3xl mt-16 p-4 ${
              isDarkMode ? "text-gray-200" : "text-gray-700"
            } leading-loose`}
          >
            대학교에서 배운 전공인 회계는 배운 지식을 확대하는데에는 한계가
            있다고 느꼈습니다. 그래서 저는 새로운 도전을 결심하였고, 인터넷
            강의를 통해 프로그래밍을 시작하고, 코드스테이츠 부트캠프에 지원해서
            좋은 분들과 여러 프로젝트를 만들게 되었습니다.
            <span className=" text-orange-500"> 이런 연속적인 새로운 도전</span>
            은 제가 새로운 기술을 배우고 적용하는 데 있어 두려움을 희석하게 되는
            좋은 경험이었습니다.
          </div>
        </div>
        <div className={`p-8 m-4 h-full w-full `}>
          <span className="text-4xl font-bold  text-[#D2DE32]">
            3. 친숙함을 느끼게 하는 개발자 :{" "}
          </span>
          <div
            className={`text-3xl mt-16 p-4 ${
              isDarkMode ? "text-gray-200" : "text-gray-700"
            } leading-loose`}
          >
            개발자로서 저는 다양한 코드와 도구를 사용하여 사용자{" "}
            <span className=" text-orange-500">편의성</span>과{" "}
            <span className=" text-orange-500">접근성</span>을 향상하고
            <span className=" text-orange-500">시각적으로 매력적인 페이지</span>
            를 만드는 데 주력하고 있습니다. 최근에는 반응형에 대해 깊은 흥미를
            느껴서 필요한 부분마다 충돌이 나지 않는 한에서 여러 툴을 사용해보며
            적극적으로 사용중입니다. 이처럼 사용자의 편리성과 접근성을 높이고,
            깔끔한 페이지를 제작하기 위해서 다양한 코드와 툴을 사용하는걸
            좋아합니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
