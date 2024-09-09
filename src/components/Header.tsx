import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";
import { motion } from "framer-motion";
import useDarkModeStore from "../zustand/useDarkModeStore";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
const Header: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useDarkModeStore();
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => {
    setIsOn(!isOn);
    toggleDarkMode();
  };

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <div className="z-20 flex justify-between fixed top-0 w-full h-15 ">
      <div className={`w-1/3 text-3xl p-6 `}>
        <span className={`header ${isDarkMode ? "text-white" : ""}`}>
          YDG's PF
        </span>
      </div>
      <div
        className={`header flex text-2xl justify-end items-center gap-x-10 w-full p-6`}
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
            to="skills"
            smooth={true}
            duration={700}
            className=" hover:text-yellow-400"
          >
            skills
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
