import React, { useRef, useState } from "react";
// import TiltText from "../components/TiltText";
import MainPageBottom from "../components/MainPageBottom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TiltText from "../components/TiltText";
import Navbar from "../components/Navbar";
import AboutMeSection from '../components/AboutMeSection';


const MainPage = () => {
  const tiltRef = useRef(null);
  const [xVal, setXVal] = useState(0);
  const [yVal, setYVal] = useState(0);

  const MouseMoving = (e) => {
    setXVal(
      (e.clientX -
        tiltRef.current.getBoundingClientRect().x -
        tiltRef.current.getBoundingClientRect().width / 2) /
        70
    );
    setYVal(
      -(
        e.clientY -
        tiltRef.current.getBoundingClientRect().y -
        tiltRef.current.getBoundingClientRect().height / 2
      ) / 20
    );
    // console.log(tiltRef.current.getBoundingClientRect());
    // console.log(e.clientX, e.clientY);
    // setXVal(e.clientX/50);
    // setYVal(e.clientY/50);
    tiltRef.current.style.transform = `rotateX(${yVal}deg) rotateY(${xVal}deg)`;
  };

  useGSAP(
    function () {
      gsap.to(tiltRef.current, {
        transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
        duration: 2,
        ease: "power4.out",
      });
    },
    [xVal, yVal]
  );

  return (
    <div
      className="h-screen bg-purple-500 px-7 py-6"
      onMouseMove={(e) => {
        MouseMoving(e);
      }}
    >
      <div
        id="RotateItem"
        className="rounded-3xl z-10 bg-[url(https://4kwallpapers.com/images/wallpapers/abstract-background-1920x1080-10732.jpg)] bg-cover shadow-lg shadow-gray-600"
      >
        <Navbar />
        <TiltText val = {tiltRef}/>
      </div>
    </div>
  );
};

export default MainPage;
