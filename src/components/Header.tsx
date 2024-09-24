import { Link as ScrollLink } from "react-scroll";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useDarkModeStore from "../zustand/useDarkModeStore";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
const Header: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useDarkModeStore();
  const [isOn, setIsOn] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isOnTop, setIsOnTop] = useState<boolean>(true);

  const toggleSwitch = () => {
    setIsOn(!isOn);
    toggleDarkMode();
  };

  useEffect(() => {
    // 스크롤 이벤트 핸들러
    const handleScroll = () => {
      setScrollPosition(window.scrollY); // 현재 스크롤 위치를 상태에 저장
    };

    // 이벤트 리스너 등록
    window.addEventListener("scroll", handleScroll);

    if (scrollPosition < 500) {
      setIsOnTop(true);
    } else {
      setIsOnTop(false);
    }
    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition, isOnTop]); // 빈 배열을 사용하여 한 번만 등록

  //감시하면서 스크롤이벤트가 있을때는 헤더에 배경이 생기게, 아니면 모두 transparent
  return (
    <div
      className={` sm:text-sm z-20 flex justify-between fixed top-0 w-full h-15 ${
        !isOnTop && isDarkMode ? "bg-[#635985]" : !isOnTop ? "bg-[#90AACB]" : ""
      }`}
    >
      <div className={`w-1/3 text-3xl p-6 hidden sm:block `}>
        <span className={`header ${isDarkMode ? "text-white" : ""}`}>
          YDG's PF
        </span>
      </div>
      <div
        className={`header flex text-2xl justify-between items-center gap-x-10 w-full p-6 sm:justify-end`}
      >
        <div className="flex justify-between cursor-pointer">
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className=" hover:text-yellow-400"
          >
            about
          </ScrollLink>
        </div>
        <div className="flex justify-between cursor-pointer">
          <ScrollLink
            to="project"
            smooth={true}
            duration={700}
            className=" hover:text-yellow-400"
          >
            project
          </ScrollLink>
        </div>
        <div className="flex justify-between cursor-pointer">
          <ScrollLink
            to="connect"
            smooth={true}
            duration={700}
            className=" hover:text-yellow-400"
          >
            connect
          </ScrollLink>
        </div>

        {isDarkMode ? (
          <LightModeIcon
            sx={{ color: "primary.light" }}
            onClick={toggleSwitch}
            style={{ cursor: "pointer" }}
          />
        ) : (
          <DarkModeIcon
            sx={{ color: "primary.dark" }}
            onClick={toggleSwitch}
            style={{ cursor: "pointer" }}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
