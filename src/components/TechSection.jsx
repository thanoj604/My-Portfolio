import React from "react";
import Card from "./Card";

const Section = () => {
  return (
    <div className="w-full">
       <section id="skills">
        
      <div
        id="Technologies"
        className="bg-purple-950 text-black flex flex-col p-10 items-center justify-center"
      >
        <h3 className="text-gray-500 text-5xl p-10">
        <span className="text-purple-500">My </span><span className="text-white font-bold">Tech Stack</span></h3>
        <div className="techsec flex flex-wrap gap-4 w-4/5">
          <Card
            imgSrc="https://pbs.twimg.com/profile_images/1785867863191932928/EpOqfO6d_400x400.png"
            name="ReactJS"
          />
          <Card
            imgSrc="https://velog.velcdn.com/images/xung99/post/b7598724-ddbe-4e66-bc80-3243a3b5d799/image.png"
            name="NodeJs"
          />
          <Card
            imgSrc="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png"
            name="JavaScript"
          />
          <Card
            imgSrc="https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Emblem.jpg"
            name="Mongo DB"
          />

          <Card
            imgSrc="https://yt3.googleusercontent.com/ikv41jMTr1uHGdILrJhvbfVJcDt4oqhwApKX37TjAleF_cRPbF2W-waj7uMnS5JySvnlvAlTCg=s900-c-k-c0x00ffffff-no-rj"
            name="Tailwind CSS"
          />


          <Card
            imgSrc="https://cdn.iconscout.com/icon/free/png-256/free-python-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-5-pack-logos-icons-2945099.png?f=webp&w=256"
            name="Python"
          />

           <Card
            imgSrc="https://i.pinimg.com/originals/79/5e/bb/795ebb5f4a470cd7242136237f61fc53.png"
            name="Java"
          />

          <Card
            imgSrc="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
            name="Bootstrap"
          />
          <Card
            imgSrc="https://cdn.iconscout.com/icon/free/png-256/free-html-5-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-language-pack-logos-icons-1175208.png?f=webp&w=256"
            name="HTML"
          />
          <Card
            imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png"
            name="CSS"
          />

<Card
            imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1bctuHVp7CoSYIgexL8-iR5EfQq-E354UnA&s"
            name="Git"
          />
          <Card
            imgSrc="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            name="Github"
          />

        </div>
      </div>
      </section>
    </div>
  );
};

export default Section;
