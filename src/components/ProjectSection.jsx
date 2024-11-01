import React from "react";
import Card from "./Card";
import ProjectCard from "./ProjectCard";

const Section = () => {
  return (
    <div>
      <section id="projects">
      
      <div
        id="Technologies"
        className="bg-purple-950 text-black flex flex-col p-10 items-center justify-cente"
      >
        <h3 className="text-gray-500 text-5xl p-10"><span className="text-purple-500">My </span><span className="text-white font-bold">Projects</span></h3>
        <div className="techsec flex flex-wrap justify-center p-4 gap-5">
        <ProjectCard
        projectName="WordCraft"
        imgSrc="./wordcraft.png"
        githubLink="https://github.com/thanoj604/WordCraft---Online-Text-Manipulation-tool"
        liveLink="https://wordcraft4.netlify.app/"
        description="WordCraft is an online text manipulation tool that lets you easily format, transform, and customize text. Built with Bootstrap, React, and JSX, it offers a fast, user-friendly experience for all your text editing needs."
      />

<ProjectCard
        projectName="Melowave"
        imgSrc="./melowave.png"
        githubLink="https://github.com/thanoj604/MeloVibe---Online-Music-Player"
        liveLink="https://melovibe4.netlify.app/"
        description="MeloVibe is an online music player created as part of learning full stack web development. It aims to provide users with a seamless music listening experience, offering high-quality songs, ad-free streaming, loop, and autoplay features."
      />

<ProjectCard
        projectName="Bubble Game"
        imgSrc="./bubble.png"
        githubLink="https://github.com/thanoj604/Bubble-Game"
        liveLink="https://bubbles4.netlify.app/"
        description="Bubbles is a fun and engaging game that challenges your reflexes and strategy. Created with the passion for classic gaming, it offers endless entertainment for players of all ages."
      />

        </div>
      </div>
      </section>
    </div>
  );
};

export default Section;
