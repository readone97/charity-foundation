import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white-400 p-4 text-teal-900 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold">Yarbaiwa Charity Foundation</a>
        
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
             <a href="#aims" className="hover:border-b-2 border-solid border-teal-900">Our Impact</a>
            <a href="#gallery" className="hover:border-b-2 border-solid border-teal-900">Gallery</a>
            <a href="#activities" className="hover:border-b-2 border-solid border-teal-900">What We Do</a>
             <a href="#about" className="hover:border-b-2 border-solid border-teal-900">About Us</a>
   
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? <XIcon className="  h-12 w-6" /> : <MenuIcon className="  h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white flex flex-col  ">
                 <a href="#aims" className="cursor-pointer">Our Impact</a>
                <a href="#gallery" className=" cursor-pointer ">Gallery</a>
                <a href="#activities" className="cursor-pointer">What We Do</a>
                <a href="#about" className="cursor-pointer">About Us</a>
         </div>
         
      )}
    </nav>
   
    
  );
};

export default Navbar;
