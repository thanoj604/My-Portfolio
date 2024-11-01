import React from "react";
import Card from "./Card";

const Section = () => {
  return (
    <div>
      <section id="contact">
        <div
          id="Technologies"
          className=" text-black flex flex-col p-10 items-center justify-center"
        >
          <h3 className="text-gray-500 text-5xl p-10">
            <span className="text-purple-500">Get </span>
            <span className="text-white font-bold"> in </span>
            <span className="text-purple-500">Touch</span>
          </h3>
          <div className="techsec flex gap-5">
            <a href="https://www.linkedin.com/in/d-thanoj-sriman/" target="_blank"><img
              className="w-10 h-10 transition-transform transform hover:scale-110 hover:shadow-lg hover:ring-4 hover:ring-white hover:ring-opacity-100"
              src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000"
              alt=""
            /></a>


            <a href="https://github.com/thanoj604" target="_blank"><img
              className="w-10 h-10 rounded-full transition-transform transform hover:scale-110 hover:shadow-lg hover:ring-4 hover:ring-white hover:ring-opacity-100"
              src="https://cdn.iconscout.com/icon/free/png-256/free-github-logo-icon-download-in-svg-png-gif-file-formats--70-flat-social-icons-color-pack-logos-432516.png?f=webp&w=256"
              alt="GitHub Logo"
            /></a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section;
