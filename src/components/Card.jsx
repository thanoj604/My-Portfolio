import React from "react";
// import '../index.css';

const Card = ({ imgSrc, name }) => {
  return (
    <div className="max-w-xs mx-auto flex flex-col justify-center items-center bg-white border rounded-lg overflow-hidden transition-transform transform hover:scale-105 p-4">
      <img src={imgSrc} alt={name} className="w-[9vw] h-[19vh] rounded-t-lg" />
      <h2 className="p-4 text-lg font-bold text-center">{name}</h2>
    </div>
  );
};

export default Card;
