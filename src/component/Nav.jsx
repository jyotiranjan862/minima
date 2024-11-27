import React, { useState } from 'react';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu
  };

  return (
    <nav className="bg-black text-white px-4 py-2">
      <div className="container px-8 mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <div className="bg-white text-black w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
            M
          </div>
          <span className="text-xl font-semibold">Minima</span>
        </div>

        {/* Links Section for Desktop */}
        <ul className="hidden lg:flex space-x-2 xl:space-x-8">
          {["Home", "About us", "Services", "Success story", "Testimonial", "Our Team", "Contact"].map((item) => (
            <li
              key={item}
              className="hover:bg-white hover:text-black px-3 py-1 rounded transition "
            >
            <a href={`#${item}`}>{item}</a>

            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? (
              // Cross Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu with Smooth Transition */}
      <div
        className={`lg:hidden mt-2 transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <ul className="space-y-2">
          {["Home", "About us", "Services", "Success story", "Testimonial", "Our Team", "Contact"].map((item) => (
            <li
              key={item}
              className="block text-center hover:bg-white hover:text-black px-3 py-2 rounded transition"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
