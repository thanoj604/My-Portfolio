import React from "react";

const TiltText = (props) => {
  return (
    <div id="tiltDiv" ref={props.val} className="h-screen w-full p-52">
      <h1 className="uppercase leading-[2vw]">
        <span className="font-bold text-[15vh] text-purple-950">Thanoj <span className="text-white">Sriman</span></span>
        <span className="block leading-[4vw] text-2xl">
          Student | Web Developer
        </span>
      </h1>
    </div>
  );
};

export default TiltText;
