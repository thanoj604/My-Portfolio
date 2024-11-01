import React from "react";
import Card from "./Card";

const Section = () => {
  return (
    <div>
      <section id="about">
        
      <div
        id="Technologies"
        className="techsec bg-purple-950 text-black flex flex-col flex-wrap p-10 items-center justify-center"
      >
        <h3 className="text-gray-500 text-5xl p-10">
        <span className="text-white font-bold">About </span><span className="text-purple-500">Me</span></h3>
        <div className="techsec flex flex-wrap items-center justify-center gap-4 w-4/5 text-white">

          <img className="rounded-full w-52 h-52" src="./profile.jpg" alt="" />
          
          <p>I am a passionate MERN Stack developer with a keen interest in Java, JavaScript, MongoDB, Python, and web technologies such as ReactJS and Node.js. I strive to build meaningful projects that improve user experiences and streamline processes, ensuring that my solutions are both effective and impactful.</p>

        </div>
      </div>
      </section>
    </div>
  );
};

export default Section;
