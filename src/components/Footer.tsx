import useDarkModeStore from "../zustand/useDarkModeStore";

const Footer = () => {
  const { isDarkMode } = useDarkModeStore();

  return (
    <div
      className={`z-10 flex sm:justify-center lg:justify-end items-center w-full h-24  ${
        isDarkMode ? "bg-[#443c68]" : "bg-[#91c8e4]"
      }  text-white`}
    >
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
  );
};

export default Footer;
