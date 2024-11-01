import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-purple-950 p-4 fixed w-full z-10 rounded-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl"><span className='font-bold'>Thanoj sriman </span>Portfolio</div>
        <div className="space-x-4 hidden md:flex">
          <a href="#skills" className="text-gray-300 px-5 py-2 bg-transparent rounded-3xl hover:bg-white duration-100 hover:text-black">Skills</a>
          <a href="#about" className="text-gray-300 px-5 py-2 bg-transparent rounded-3xl hover:bg-white duration-100 hover:text-black">About Me</a>
          <a href="#projects" className="text-gray-300 px-5 py-2 bg-transparent rounded-3xl hover:bg-white duration-100 hover:text-black">Projects</a>
          <a href="#contact" className="text-gray-300 px-5 py-2 bg-transparent rounded-3xl hover:bg-white duration-100 hover:text-black">Contact</a>
        </div>
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            {/* Add a menu icon here if desired */}
            Menu
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
