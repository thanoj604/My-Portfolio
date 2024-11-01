import React from "react";


const ProjectCard = ({
  projectName,
  imgSrc,
  githubLink,
  liveLink,
  description,
}) => {
  return (
    <div className=" max-w-xs mx-auto bg-white border rounded-lg overflow-hidden transition-transform transform hover:scale-105 p-4">
      <h3 className="text-xl font-semibold text-center mb-2">{projectName}</h3>
      <img
        src={imgSrc}
        alt={projectName}
        className="w-full h-48 object-cover rounded-md"
      />
      <div className="p-4">
        <p className="text-gray-700 text-sm mb-4">{description}</p>
        <div className="flex justify-center space-x-4">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            GitHub
          </a>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
