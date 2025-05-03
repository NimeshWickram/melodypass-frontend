// src/components/Navbar.jsx
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaUser, FaTicketAlt, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  // Check if a path is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Mock authenticated state (will connect to real auth later)
  const isAuthenticated = false;

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <FaTicketAlt className="text-indigo-600 text-2xl mr-2" />
          <span className="text-xl font-bold text-indigo-600">MelodyPass</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`${isActive('/') ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'}`}
          >
            Home
          </Link>
          <Link 
            to="/events" 
            className={`${isActive('/events') ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'}`}
          >
            Events
          </Link>
          <Link 
            to="/venues" 
            className={`${isActive('/venues') ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'}`}
          >
            Venues
          </Link>
          <Link 
            to="/about" 
            className={`${isActive('/about') ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'}`}
          >
            About
          </Link>
        </div>
        
        {/* Auth Buttons - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          {isAuthenticated ? (
            <Link 
              to="/profile" 
              className="flex items-center bg-indigo-100 text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-200"
            >
              <FaUser className="mr-2" />
              My Account
            </Link>
          ) : (
            <>
              <Link 
                to="/login" 
                className="text-gray-600 hover:text-indigo-600"
              >
                Log In
              </Link>
              <Link 
                to="/signup" 
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-500 hover:text-indigo-600"
          >
            {isMenuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className={`${isActive('/') ? 'text-indigo-600' : 'text-gray-600'} py-2`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/events"
              className={`${isActive('/events') ? 'text-indigo-600' : 'text-gray-600'} py-2`} 
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </Link>
            <Link 
              to="/venues" 
              className={`${isActive('/venues') ? 'text-indigo-600' : 'text-gray-600'} py-2`}
              onClick={() => setIsMenuOpen(false)}
            >
              Venues
            </Link>
            <Link 
              to="/about" 
              className={`${isActive('/about') ? 'text-indigo-600' : 'text-gray-600'} py-2`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            
            <div className="pt-4 border-t border-gray-200">
              {isAuthenticated ? (
                <Link 
                  to="/profile" 
                  className="flex items-center bg-indigo-100 text-indigo-600 px-4 py-2 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FaUser className="mr-2" />
                  My Account
                </Link>
              ) : (
                <div className="flex flex-col space-y-3">
                  <Link 
                    to="/login" 
                    className="text-gray-600 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Log In
                  </Link>
                  <Link 
                    to="/signup" 
                    className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;