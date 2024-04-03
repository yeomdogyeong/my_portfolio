import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillCopy } from "react-icons/ai";
import useDarkModeStore from "../zustand/useDarkModeStore";
import yeom from "../assets/yeomsia.jpg";
import { Slide } from "react-awesome-reveal";
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
      className={`${isDarkMode ? "bg-[#7C81AD]" : ""} ${
        isDarkMode ? "text-gray-200" : ""
      } ${isDarkMode ? "bg-[#4D3C77]" : ""} ${
        isDarkMode ? "border-gray-500" : ""
      } z-5 flex flex-col m-4 p-4 border-2 shadow-md rounded-lg w-full md:flex-row lg:w-2/3 h-full`}
    >
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <img className="rounded-3xl w-full p-6" src={yeom} alt="Ebichu" />
      </div>
      <div className="flex flex-col justify-center items-center md:items-start w-full lg:w-1/2 p-6 text-2xl lg:text-2xl">
        {member.map((data, index) => (
          <div key={index}>
            <span className="flex flex-row mb-8">Name : {data.name}</span>
            <span className="flex flex-row mb-8">Birth : {data.birth}</span>
            <span className="flex flex-row mb-8">Stay : {data.stay}</span>
            <span className="flex flex-row mb-8">Email : {data.email}</span>
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
