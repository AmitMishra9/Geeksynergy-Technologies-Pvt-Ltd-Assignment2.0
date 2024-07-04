import React, { useState } from 'react';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-neutral-950 border-b border-gray-500 px-6 py-8 flex items-center justify-between">
    
    <button
    className="text-white  bg-black  ml-12  hover:text-gray-600 focus:outline-none text-lg 
               rounded-lg py-2 px-4 bg-black-100 hover:bg-black-200 

               transition-colors duration-300 shadow-md
               border-2 border-pink-300 hover:border-pink-400
               font-bold tracking-wide
               transform hover:scale-105"
    onClick={toggleDropdown}
  >
     Company Info 
  </button>
     

      <h2 className="text-2xl sm:text-lg md:text-4xl font-bold text-rose-50 w-full md:w-2/4 text-center my-2 md:my-0">
        All Kannada Movies
      </h2>
      <div className="relative">
      
      {isDropdownOpen && (
        <div className="fixed  inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="w-96 rounded-lg shadow-lg bg-pink-50 ring-2 ring-pink-300 overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-105 relative">
            <button 
              onClick={() => setIsDropdownOpen(false)} 
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div
              className="py-3"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <div className="block px-4 py-2 text-2xl text-gray-700 hover:bg-pink-100 transition-colors duration-200">
                <h1 className="font-bold text-pink-600">🏢 Geeksynergy Technologies Pvt Ltd</h1>
              </div>
              <div className="block px-4 py-2 text-2xl text-gray-700 hover:bg-pink-100 transition-colors duration-200">
                <h2 className="font-semibold text-purple-600">📍 Sanjayanagar, Bengaluru-56</h2>
              </div>
              <div className="block px-4 py-2 text-2xl text-gray-700 hover:bg-pink-100 transition-colors duration-200">
                <h3 className="font-semibold text-blue-600">📞 XXXXXXXXX09</h3>
              </div>
              <div className="block px-4 py-2 text-2xl text-gray-700 hover:bg-pink-100 transition-colors duration-200">
                <h4 className="font-semibold text-green-600">✉️ XXXXXX@gmail.com</h4>
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
    </nav>
  );
};

export default Navbar;