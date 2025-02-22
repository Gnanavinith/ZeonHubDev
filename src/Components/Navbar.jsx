import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdOutlineScheduleSend } from "react-icons/md";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // Detect Scroll and Update Navbar Background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
          scrolling ? "bg-gray-800 shadow-lg" : "bg-transparent"
        }`}
      >
        <nav className="w-full flex justify-between items-center px-6 py-5 ">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-extrabold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-transparent bg-clip-text"
          >
            ZeonHub
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex space-x-6 items-center text-white">
            {["Home", "About", "Solutions", "Products", "Services", "Blog", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  onClick={item === "Home" ? closeMenu : undefined}
                  className="hover:text-blue-500 cursor-pointer"
                >
                  {item}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/schedule-meeting"
                onClick={toggleModal}
                className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-500 transition flex items-center gap-2"
              >
                Schedule A Meeting <MdOutlineScheduleSend className="text-xl" />
              </Link>
            </li>
          </ul>

          {/* Mobile & Tablet Menu Button */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-3xl text-white">
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`absolute top-0 left-0 w-full h-screen bg-black shadow-lg transition-transform duration-700 ease-in-out ${
            menuOpen ? "translate-y-0" : "-translate-y-full"
          } lg:hidden`}
        >
          <div className="flex justify-end p-5">
            <button onClick={toggleMenu} className="text-3xl text-gray-300">
              <FaTimes />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <ul className="flex flex-col items-center space-y-6 p-10 text-gray-200 mt-5">
            {["Home", "About", "Solutions", "Products", "Services", "Blog", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  onClick={closeMenu}
                  className="hover:text-blue-500 cursor-pointer"
                >
                  {item}
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={toggleModal}
                className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-500 transition flex items-center gap-2"
              >
                Schedule A Meeting
              </button>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
