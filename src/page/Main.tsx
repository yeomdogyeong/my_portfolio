import "./Main.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

import Star from "../components/Star";
import About from "../components/About";
import useDarkModeStore from "../zustand/useDarkModeStore";

import { Project } from "../components/Project";
import { Connect } from "../components/Connect";
function Main() {
  const { isDarkMode } = useDarkModeStore();

  return (
    <>
      <Header />

      <Star isDarkMode={isDarkMode} />
      <div
        id="about"
        className={`flex flex-col justify-center items-center w-full min-h-screen pt-40 ${
          isDarkMode ? "bg-[#635985]" : "bg-[#f6f3f3]"
        }`}
      >
        <div className="font-intelon flex flex-col justify-center items-center h-2/3 mb-10">
          <div className="flex items-center"></div>
        </div>

        <About />
        <Project />
        <Connect />
        <Footer />
      </div>
    </>
  );
}

export default Main;
