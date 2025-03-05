import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Left Side - Logo */}
        <h1 className="text-xl font-bold">MyApp</h1>

        {/* Navigation Links for Large Screens */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link to="/todos" className="hover:text-gray-300">
            Todo
          </Link>
        </nav>

        {/* Logout Button for Large Screens */}
        <button className="hidden md:block bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600">
          Logout
        </button>

        {/* Mobile Menu Button */}
        <button className="md:hidden">☰</button>
      </div>

      {/* Mobile Navigation (Hidden by default) */}
      <div className="md:hidden bg-gray-700 py-3">
        <nav className="flex flex-col items-center space-y-4">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link to="/todo" className="hover:text-gray-300">
            Todo
          </Link>
          <button className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600">
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
