import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Sun, User, Menu, X } from "lucide-react"; // Add Menu and X icons
import { useAuth } from "@/contexts/AuthContext";

const TopNav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    logout();
    setIsDropdownOpen(false);
    navigate("/");
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full text-white p-4 z-50"
      style={{ backgroundColor: "rgb(26, 55, 91)" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-white font-bold text-xl">
          <Link
            to="/"
            className="inline-flex items-center text-white hover:text-[rgb(129,136,151)] transition-colors duration-300 ease-out tracking-wide"
          >
            HORIZ
            <span className="inline-flex items-center justify-center w-7 h-7 -ml-1">
              <Sun className="w-5 h-5" />
            </span>
            <span className="inline-flex items-center justify-center w-7 h-7 -ml-2.5">
              N
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-white hover:text-[rgb(129,136,151)] transition-colors duration-300"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-8 items-center">
          <Link
            to="/"
            className="text-white relative text-md w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[rgb(129,136,151)] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white relative text-md w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[rgb(129,136,151)] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-white relative text-md w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[rgb(129,136,151)] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          >
            Contact
          </Link>
          <Link
            to="/resources"
            className="text-white relative text-md w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[rgb(129,136,151)] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          >
            Resources
          </Link>
        </div>

        {/* Desktop User Menu */}
        <div className="hidden lg:flex items-center space-x-5">
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="cursor-pointer transform"
            >
              <User className="w-5 h-5 text-white hover:text-[rgb(129,136,151)] transition-colors duration-300 ease-out transform translate-y-1" />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5">
                {user ? (
                  <>
                    <Link
                      to="/dashboard"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <Link
                      to="/help"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Help
                    </Link>
                    <div className="border-t border-gray-100 my-1"></div>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-amber-600 hover:bg-gray-100"
                    >
                      Log out
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="block w-full text-left px-4 py-2 text-sm text-amber-600 hover:bg-gray-100"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Log in
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>

          {!user && (
            <Link
              to="/signup"
              className="bg-white/30 backdrop-blur-sm text-white px-8 py-2 rounded-lg hover:bg-white/20 transition-all duration-300 text-base font-medium border border-white/30"
            >
              Sign Up
            </Link>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-[rgb(26,55,91)] border-t border-white/10 p-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-white text-lg font-medium hover:text-[rgb(129,136,151)] transition-colors duration-300"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-white text-lg font-medium hover:text-[rgb(129,136,151)] transition-colors duration-300"
                onClick={closeMobileMenu}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-white text-lg font-medium hover:text-[rgb(129,136,151)] transition-colors duration-300"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
              <Link
                to="/resources"
                className="text-white text-lg font-medium hover:text-[rgb(129,136,151)] transition-colors duration-300"
                onClick={closeMobileMenu}
              >
                Resources
              </Link>

              <div className="pt-4 border-t border-white/10">
                {user ? (
                  <>
                    <Link
                      to="/dashboard"
                      className="block text-white text-lg font-medium hover:text-[rgb(129,136,151)] transition-colors duration-300 mb-3"
                      onClick={closeMobileMenu}
                    >
                      Dashboard
                    </Link>
                    <Link
                      to="/help"
                      className="block text-white text-lg font-medium hover:text-[rgb(129,136,151)] transition-colors duration-300 mb-3"
                      onClick={closeMobileMenu}
                    >
                      Help
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout();
                        closeMobileMenu();
                      }}
                      className="text-amber-400 text-lg font-medium hover:text-amber-300 transition-colors duration-300"
                    >
                      Log out
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="block text-white text-lg font-medium hover:text-[rgb(129,136,151)] transition-colors duration-300 mb-3"
                      onClick={closeMobileMenu}
                    >
                      Log in
                    </Link>
                    <Link
                      to="/signup"
                      className="inline-block bg-white/30 backdrop-blur-sm text-white px-6 py-2 rounded-lg hover:bg-white/20 transition-all duration-300 text-lg font-medium border border-white/30"
                      onClick={closeMobileMenu}
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default TopNav;
