import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";
import { motion } from "framer-motion";
import useDarkModeStore from "../zustand/darkModeStore";

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
        <div
          className={isDarkMode ? "dark-mode switch" : "switch"}
          data-ison={isOn}
          onClick={toggleSwitch}
        >
          <motion.div className="handle" layout transition={spring} />
        </div>
      </div>
    </div>
  );
};

export default Header;
