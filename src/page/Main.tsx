import { useState, useEffect } from "react";
import "./Main.css";

import yeom from "../assets/yeomsia.jpg";
import dowajoyak from "../assets/dowajoyak.png";
import Header from "../components/Header";
import signup from "../assets/signup2.png";
import Card from "../components/card";
import Typewriter from "typewriter-effect";
import Star from "../components/Star";
import petching1 from "../assets/petchinginquery.png";
import petching2 from "../assets/petching2.png";
import petching3 from "../assets/login.png";
import dowajoyak2 from "../assets/dowajoyakwrite.png";
import dowajoyak3 from "../assets/dowajoyaksearch.png";
import portfolio from "../assets/portfolio.png";
import About from "../components/About";
import useDarkModeStore from "../zustand/darkModeStore";
import Profile from "../components/Profile";
import Graph from "../components/Graph";

function Main() {
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
  const [isFlipped, setIsFlipped] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkModeStore();
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => {
    setIsOn(!isOn);
    toggleDarkMode();
  };
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 100) {
        setBackgroundColor("white");
      } else {
        setBackgroundColor("#e0e0e0");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dogyeong = [
    {
      name: "염도경",
      birth: "1995.10.31",
      stay: "서울시 강서구",
      email: "kangs19951@gmail.com",
      github: "https://github.com/yeomdogyeong",
      blog: "https://velog.io/@ehrud1031/posts",
    },
  ];

  return (
    <>
      <Header />
      <Star isDarkMode={isDarkMode} />
      <div
        id="about"
        className={`flex flex-col justify-center items-center w-full min-h-screen pt-40 ${
          isDarkMode ? "bg-[#635985]" : "bg-white"
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
        <div className="flex flex-row flex-wrap z-5 justify-evenly items-center w-2/3">
          <Card
            isFlipped={isFlipped}
            frontImage={dowajoyak}
            frontDescription="도와조약 메인페이지"
            description={{
              title: "도와조약 메인페이지",
              subtitle: "메인 페이지의 레이아웃과 디자인을 구현했습니다.",
              tech: "# Tech : React, CSS, StyledComponent",
              work: "# Work : 헤더,푸터,메인페이지의 레이아웃, css 스타일링",
            }}
            gitLink="https://github.com/codestates-seb/seb43_main_009"
            demoLink="https://dowajoyak.store/"
          />

          <Card
            isFlipped={isFlipped}
            frontImage={dowajoyak2}
            frontDescription="도와조약 CRUD"
            description={{
              title: "도와조약 CRUD",
              subtitle: "글쓰기, 글 조회 페이지를 구현했습니다. ",
              tech: "# Tech : React, CSS, Redux, Axios, StyledComponent",
              work: "# Work : 페이지 제작 ",
            }}
            gitLink="https://github.com/codestates-seb/seb43_main_009/blob/main/client/src/page/community/Board.js"
            demoLink="https://dowajoyak.store/commu/58"
          />
          <Card
            isFlipped={isFlipped}
            frontImage={dowajoyak3}
            frontDescription="도와조약 의약품 검색"
            description={{
              title: "도와조약 의약품 검색",
              subtitle: "도와조약 검색 페이지를 구현했습니다.",
              tech: "# Tech : React, CSS, StyledComponent",
              work: "# Work : css 스타일링",
            }}
            gitLink="https://github.com/codestates-seb/seb43_main_009/blob/main/client/src/page/search/SearchMain.js"
            demoLink="https://dowajoyak.store/search"
          />
          <Card
            isFlipped={isFlipped}
            frontImage={signup}
            frontDescription="펫칭 회원가입"
            description={{
              title: "펫칭 회원가입",
              subtitle: "회원가입 페이지를 제작했습니다.",
              tech: "# Tech : React, TailwlindCSS, Axios",
              work: "# Work : 아이디와 닉네임 중복검사, 비밀번호 유효성 검사",
            }}
            gitLink="https://github.com/Petching/Petching/blob/main/client/src/Components/signUpComponent.tsx"
            demoLink="https://petching.net/signup"
          />
          <Card
            isFlipped={isFlipped}
            frontImage={petching3}
            frontDescription="펫칭 로그인"
            description={{
              title: "펫칭 로그인",
              subtitle: "회원 로그인 페이지를 제작했습니다.",
              tech: "# Tech : React, TailwlindCSS, Axios",
              work: "# Work : OAuth2.0구현, Axios로 소통",
            }}
            gitLink="https://github.com/Petching/Petching/blob/main/client/src/Components/signInComponent.tsx"
            demoLink="https://petching.net/signin"
          />
          <Card
            isFlipped={isFlipped}
            frontImage={petching2}
            frontDescription="펫칭 F&Q"
            description={{
              title: "펫칭 F&Q",
              subtitle:
                "F&Q로 질문과 답변을 상태관리로 접고 펼 수 있습니다. 버튼을 눌러 4개의 페이지 경로로 이동합니다.",
              tech: "# Tech : React,CSS",
              work: "# Work : react로 구현",
            }}
            gitLink="https://github.com/Petching/Petching/blob/dev-FE/client/src/Page/Inquery.tsx"
            demoLink="https://petching.net/inquery"
          />
          <Card
            isFlipped={isFlipped}
            frontImage={petching1}
            frontDescription="펫칭 문의하기"
            description={{
              title: "펫칭 문의하기",
              subtitle: "회원이 글을 작성할 수 있는 textEditor를 삽입했습니다.",
              tech: "# Tech : React,CSS",
              work: "# Work : css 스타일링",
            }}
            gitLink="https://github.com/Petching/Petching/blob/dev-FE/client/src/Page/InqueryWrite.tsx"
            demoLink="https://petching.net/inquery/write"
          />
          <Card
            isFlipped={isFlipped}
            frontImage={portfolio}
            frontDescription="포트폴리오"
            description={{
              title: "포트폴리오",
              subtitle: "포트폴리오 제작",
              tech: "# Tech : React,CSS, TailwindCSS, Zustand",
              work: "# Work : 야간모드, 카드 뒤집기 등을 구현했습니다.",
            }}
            gitLink="https://my-portfolio-pi-taupe.vercel.app/"
            demoLink="https://github.com/yeomdogyeong/my_portfolio"
          />
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
      </div>
    </>
  );
}

export default Main;
