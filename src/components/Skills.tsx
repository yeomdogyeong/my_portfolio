import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import useDarkModeStore from "../zustand/useDarkModeStore";
export const Skills = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const { isDarkMode } = useDarkModeStore();
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("click!!!!");
    if (form.current) {
      emailjs
        .sendForm("gmail", "template_cz2ozp6", form.current, {
          publicKey: "4rd_oHZGWVDlN5RYg",
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };
  return (
    <div className="flex items-start w-full h-full flex-row lg:w-3/4 p-2 lg:p-0 mb-20 gap-2">
      <div
        className={`${isDarkMode ? "bg-[#635985]" : "bg-[#f6f3f3]"} ${
          isDarkMode ? "text-[#f6d776]" : "text-[#91c8e4]"
        } max-w-10 lg:w-1/2 flex-row lg:flex-col justify-between text-lg font-bold sticky top-[85px] z-10 sm:text-xl mb-10`}
      >
        <div className="">{`C`}</div>
        <div className="">{`O`}</div>
        <div className="">{`N`}</div>
        <div className="">{`N`}</div>
        <div className="">{`E`}</div>
        <div className="">{`C`}</div>
        <div className="">{`T`}</div>
      </div>
      <div></div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="h-[300px] px-2 w-full grow mb-20 justify-center flex"
      >
        <div className="h-full w-full flex flex-col items-center justify-between border-slate-50 rounded-lg max-w-[530px] ">
          <div className="w-full text-left mb-4 px-4">
            <h1 className="text-xl font-black">
              {`궁금한 사항이 있으면 연락주세요 :>`}
            </h1>
          </div>
          <div className="flex items-center w-full px-4">
            <label className="w-1/4">Your Name:</label>
            <input
              type="text"
              name="user_name"
              className="rounded-md w-3/4 p-1 outline-none"
            />
          </div>

          <div className="flex items-center w-full px-4">
            <label className="w-1/4">Email:</label>
            <input
              type="email"
              name="user_email"
              className="rounded-md w-3/4 p-1 outline-none"
            />
          </div>

          <div className="flex items-center w-full px-4">
            <label className="w-1/4">Message:</label>
            <textarea
              name="message"
              className="rounded-md w-3/4 p-1 outline-none"
            />
          </div>

          <div className="w-full flex items-end justify-end px-4">
            <input
              type="submit"
              value="Send"
              className="rounded-lg p-1 cursor-pointer"
            />
          </div>
        </div>
      </form>
    </div>
  );
};
