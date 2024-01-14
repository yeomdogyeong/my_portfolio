import { useState, useEffect } from "react";
import "./Main.css";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import yeom from "../assets/yeomsia.jpg";
import dowajoyak from "../assets/dowajoyak.png";
import inquery from "../assets/inquery2.png";
import login from "../assets/login.png";
import Card from "../components/card";
import Typewriter from "typewriter-effect";
import Star from "./Star";
import person from "../assets/person.png";
import home from "../assets/marker2.png";
import birth from "../assets/cake2.png";
import letter from "../assets/mail.png";
import About from "./About";
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

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
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
      <div className="z-10 flex justify-between fixed top-0 w-full h-15 ">
        <div
          className={`w-1/3 text-3xl p-6 ${
            isDarkMode ? "bg-[#635985]" : "bg-[#4682a9]"
          }`}
        >
          <span className={`header ${isDarkMode ? "text-white" : ""}`}>
            YDG's PF
          </span>
        </div>
        <div
          className={`header flex text-2xl justify-evenly w-full ${
            isDarkMode ? "bg-[#635985]" : "bg-[#4682a9]"
          } p-6`}
        >
          <div className="flex justify-between">
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className=" hover:text-yellow-400"
            >
              about
            </ScrollLink>
          </div>
          <div className="flex justify-between">
            <ScrollLink
              to="project"
              smooth={true}
              duration={700}
              className=" hover:text-yellow-400"
            >
              project
            </ScrollLink>
          </div>
          <div className="flex justify-between">
            <ScrollLink
              to="skills"
              smooth={true}
              duration={700}
              className=" hover:text-yellow-400"
            >
              skills
            </ScrollLink>
          </div>
          <div
            className={isDarkMode ? "dark-mode switch" : "switch"}
            data-ison={isOn}
            onClick={toggleSwitch}
          >
            <motion.div className="handle" layout transition={spring} />
          </div>
        </div>
      </div>
      <Star isDarkMode={isDarkMode} />
      <div
        id="about"
        className={`flex flex-col justify-center items-center w-full min-h-screen pt-40 ${
          isDarkMode ? "bg-[#635985]" : "bg-white"
        }`}
      >
        <div className="font-intelon flex flex-col justify-center items-center h-2/3 mb-10">
          <span
            className={`mb-10 text-3xl ${isDarkMode ? "text-[#f6d776]" : ""}`}
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
          className={`border-dotted border w-full ${
            isDarkMode ? "" : "border-gray-400"
          }`}
        ></div>
        <div className={`${isDarkMode ? "text-[#f6d776]" : ""} text-3xl mt-20`}>
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
        <div className="flex flex-row flex-wrap z-5 justify-center items-center w-full">
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
            frontImage={login}
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
            frontImage={inquery}
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
            frontImage={inquery}
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
            frontImage={inquery}
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
            frontImage={inquery}
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
            frontImage={inquery}
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
        </div>
        {/* ---
        <div
          id="skills"
          className="flex m-4 p-4 border-2 border-gray-300 rounded-lg w-2/3 h-full"
        >
          이런것을 좋아합니다
        </div> */}
      </div>
    </>
  );
}

export default Main;
