import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Skills = () => {
  const form = useRef<HTMLFormElement | null>(null);

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
    <form
      ref={form}
      onSubmit={sendEmail}
      className="h-[300px] px-2 w-full sm:w-auto sm:min-w-[530px] mb-20"
    >
      <div className="h-full w-full flex flex-col items-center justify-between border-2 border-bubble-gum rounded-lg p-6">
        <div className="flex items-center w-full px-4">
          <label className="w-1/4">Your Name:</label>
          <input
            type="text"
            name="user_name"
            className="rounded-lg w-3/4 p-1 "
          />
        </div>

        <div className="flex items-center w-full px-4">
          <label className="w-1/4">Email:</label>
          <input
            type="email"
            name="user_email"
            className="rounded-lg w-3/4 p-1 "
          />
        </div>

        <div className="flex items-center w-full px-4">
          <label className="w-1/4">Message:</label>
          <textarea name="message" className="rounded-lg w-3/4 p-1 " />
        </div>

        <div>
          <input
            type="submit"
            value="Send"
            className="border-2 rounded-lg p-1 cursor-pointer"
          />
        </div>
      </div>
    </form>
  );
};
