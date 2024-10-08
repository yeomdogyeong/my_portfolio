import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillCopy } from "react-icons/ai";
import useDarkModeStore from "../zustand/useDarkModeStore";
import yeom from "../assets/yeomsia.jpg";
import { Slide } from "react-awesome-reveal";
import BadgeIcon from "@mui/icons-material/Badge";
import CakeIcon from "@mui/icons-material/Cake";
import EmailIcon from "@mui/icons-material/Email";
interface Dogyeong {
  name: string;
  birth: string;
  stay: string;
  email: string;
  github: string;
  blog: string;
}

interface MyProfile {
  member: Dogyeong[];
}

/* <span className="flex flex-row mb-8"></span> */

const Profile: React.FC<MyProfile> = ({ member }) => {
  const { isDarkMode } = useDarkModeStore();

  return (
    <div
      className={`${isDarkMode ? "br-[#7C81AD]" : "br-[#7fb0c5]"} ${
        isDarkMode ? "text-gray-200" : ""
      } ${isDarkMode ? "br-[#4D3C77]" : ""} ${
        isDarkMode ? "border-gray-500" : ""
      } opacity-85 z-5 flex flex-col p-4 rounded-lg w-full md:flex-row h-1/2`}
    >
      <div className="w-full lg:w-2/5 flex h-full items-center justify-center p-6">
        <img className="rounded-xl w-full " src={yeom} alt="Ebichu" />
      </div>
      <div className="flex justify-center items-center md:items-start text-xl lg:text-xl">
        {member.map((data, index) => (
          <div
            key={index}
            className="flex flex-col p-6 gap-4 h-full w-full justify-center"
          >
            <div className="flex gap-2 items-center">
              {isDarkMode ? (
                <BadgeIcon sx={{ color: "primary.light" }} />
              ) : (
                <BadgeIcon sx={{ color: "primary.dark" }} />
              )}

              <span>:</span>
              <span className="">{data.name}</span>
            </div>
            <div className="flex gap-2 items-center">
              {isDarkMode ? (
                <CakeIcon sx={{ color: "primary.light" }} />
              ) : (
                <CakeIcon sx={{ color: "primary.dark" }} />
              )}
              <span>:</span>
              <span className="">{data.birth}</span>
            </div>
            <div className="flex gap-2 items-center">
              {isDarkMode ? (
                <EmailIcon sx={{ color: "primary.light" }} />
              ) : (
                <EmailIcon sx={{ color: "primary.dark" }} />
              )}
              <span>:</span>
              <span className="">{data.email}</span>
            </div>
            <div className="flex flex-row md:flex-col lg:flex-row">
              <p className="my-2 flex items-center">
                Github :
                <button
                  className="ml-2 mr-10"
                  onClick={() => {
                    window.open(data.github, "_blank");
                  }}
                >
                  <AiFillGithub />
                </button>
              </p>
              <p className="my-2 flex items-center">
                Blog :
                <button
                  className="m-2"
                  onClick={() => {
                    window.open(data.blog, "_blank");
                  }}
                >
                  <AiFillCopy />
                </button>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
