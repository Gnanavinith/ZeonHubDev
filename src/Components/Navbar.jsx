import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdOutlineScheduleSend } from "react-icons/md";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Close menu when clicking a link
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="w-full fixed top-0 left-0 border-none shadow-2xl bg-white z-50">
        <nav className="w-full flex justify-between items-center px-6 py-5">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-gray-900">
            ZeonHub
          </Link>

          {/* Desktop Menu (Hidden on Mobile & Tablet) */}
          <ul className="hidden lg:flex space-x-6 items-center text-gray-900">
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
            <button onClick={toggleMenu} className="text-3xl text-gray-900">
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>

        {/* Mobile & Tablet Menu (Slide Down Effect) */}
        <div
          className={`absolute top-0 left-0 w-full h-screen bg-white shadow-lg transition-transform duration-700 ease-in-out ${
            menuOpen ? "translate-y-0" : "-translate-y-full"
          } lg:hidden`}
        >
          {/* Menu Items */}
          <ul className="flex flex-col items-center space-y-6 p-10 text-gray-900 mt-10">
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
