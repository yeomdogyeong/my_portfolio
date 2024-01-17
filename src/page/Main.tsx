import { useState, useEffect } from "react";
import "./Main.css";

import yeom from "../assets/yeomsia.jpg";
import dowajoyak from "../assets/dowajoyak.png";
import Header from "../components/Header";
import signup from "../assets/signup.png";
import Card from "../components/card";
import Typewriter from "typewriter-effect";
import Star from "../components/Star";
import person from "../assets/person.png";
import home from "../assets/marker2.png";
import birth from "../assets/cake2.png";
import letter from "../assets/mail.png";
import petching1 from "../assets/petchinginquery.png";
import petching2 from "../assets/petching2.png";
import petching3 from "../assets/login.png";
import dowajoyak2 from "../assets/dowajoyakwrite.png";
import dowajoyak3 from "../assets/dowajoyaksearch.png";
import About from "../components/About";
import useDarkModeStore from "../zustand/darkModeStore";

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
                strings: ["React", "TypeScript", "JavaScript", "zustand"],
                autoStart: true,
                loop: true,
                wrapperClassName: "Typewriter__wrapper",
              }}
            />
            <span>를 공부하고 있는</span>
          </div>
        </div>
        <div
          className={`${isDarkMode ? "bg-[#7C81AD]" : ""} ${
            isDarkMode ? "text-gray-200" : ""
          } ${isDarkMode ? "bg-[#4D3C77]" : ""} ${
            isDarkMode ? "border-gray-500" : ""
          } flex flex-col m-4 p-4 border-2 shadow-md rounded-lg w-full  md:flex-row md:w-2/3 h-full`}
        >
          <div className="w-full md:w-1/2">
            <img className="rounded-3xl w-full p-6" src={yeom} alt="Ebichu" />
          </div>
          <div className="flex flex-col justify-center items-center md:items-start w-full md:w-1/2 p-6 text-2xl md:text-lg lg:text-2xl">
            <span className="flex flex-row mb-8">
              <img
                src={person}
                style={{ width: 30, height: 30 }}
                alt="person"
                className="mr-2"
              />
              염도경
            </span>
            <span className="flex flex-row mb-8">
              <img
                src={birth}
                style={{ width: 30, height: 30 }}
                alt="birth"
                className="mr-2"
              />
              1995.10.31
            </span>
            <span className="flex flex-row mb-8">
              <img
                src={home}
                style={{ width: 30, height: 25 }}
                alt="person"
                className="mr-2"
              />
              서울시 강서구
            </span>
            <span className="flex flex-row mb-8 ">
              <img
                src={letter}
                style={{ width: 30, height: 25 }}
                alt="letter"
                className="mr-2"
              />
              kangs19951@gmail.com
            </span>
          </div>
        </div>
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
              title: "Dowajoyak Mainpage",
              subtitle: "메인 페이지의 레이아웃과 디자인을 구현했습니다.",
              tech: "# Tech : React,CSS",
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
              title: "제목",
              subtitle: "부제목",
              tech: "# Tech : React,CSS",
              work: "# Work : css 스타일링",
            }}
            gitLink="git repository 링크"
            demoLink="Demo 링크"
          />
          <Card
            isFlipped={isFlipped}
            frontImage={dowajoyak3}
            frontDescription="도와조약 의약품 검색"
            description={{
              title: "제목",
              subtitle: "부제목",
              tech: "# Tech : React,CSS",
              work: "# Work : css 스타일링",
            }}
            gitLink="git repository 링크"
            demoLink="Demo 링크"
          />
          <Card
            isFlipped={isFlipped}
            frontImage={petching2}
            frontDescription="펫칭 F&Q"
            description={{
              title: "제목",
              subtitle: "부제목",
              tech: "# Tech : React,CSS",
              work: "# Work : css 스타일링",
            }}
            gitLink="git repository 링크"
            demoLink="Demo 링크"
          />
          <Card
            isFlipped={isFlipped}
            frontImage={signup}
            frontDescription="펫칭 로그인"
            description={{
              title: "제목",
              subtitle: "부제목",
              tech: "# Tech : React,CSS",
              work: "# Work : css 스타일링",
            }}
            gitLink="git repository 링크"
            demoLink="Demo 링크"
          />
          <Card
            isFlipped={isFlipped}
            frontImage={petching1}
            frontDescription="펫칭 문의하기"
            description={{
              title: "제목",
              subtitle: "부제목",
              tech: "# Tech : React,CSS",
              work: "# Work : css 스타일링",
            }}
            gitLink="git repository 링크"
            demoLink="Demo 링크"
          />
          <Card
            isFlipped={isFlipped}
            frontImage={petching3}
            frontDescription="펫칭 회원가입"
            description={{
              title: "제목",
              subtitle: "부제목",
              tech: "# Tech : React,CSS",
              work: "# Work : css 스타일링",
            }}
            gitLink="git repository 링크"
            demoLink="Demo 링크"
          />
        </div>
        <div
          className={`border-dotted border w-full m-20 ${
            isDarkMode ? "" : "border-gray-400"
          }`}
        ></div>

        <h1 id="skills">skills 준비중</h1>
      </div>
    </>
  );
}

export default Main;
