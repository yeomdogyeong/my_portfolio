import useDarkModeStore from "../zustand/useDarkModeStore";

const Footer = () => {
  const { isDarkMode } = useDarkModeStore();

  return (
    <div
      className={`z-10 flex-col items-center w-full h-20  ${
        isDarkMode ? "bg-[#6C567B]" : "bg-[#90AACB]"
      }  text-white`}
    >
      <div className="flex items-center justify-center sm:justify-end sm:pr-4 h-full w-full">
        <span className="text-white font-thin mr-6">Mady by yeomdogyeong</span>
        <a
          href="https://github.com/yeomdogyeong"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="rounded-full w-16 h-16 sm:mr-0 lg:mr-10"
            src="https://github.com/yeomdogyeong.png"
            alt="Profile icon"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
