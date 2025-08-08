import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Common classes for nav links with hover underline & background
  const navLinkClasses =
    "relative hover:bg-[#FA7533] hover:text-white px-3 py-2 rounded transition";

  const linkTextClasses =
    "block hover:underline hover:decoration-yellow-300 hover:underline-offset-4";

  return (
    <header className="bg-[#09090B] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Brand */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/images/logo.avif"
                alt="ClaimCore Logo"
                className="h-8 w-auto"
              />
              <span className="font-bold text-xl text-white">ClaimCore</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <nav className="hidden md:flex space-x-2 items-center">
            <Link to="/" className={navLinkClasses}>
              <span className={linkTextClasses}>Home</span>
            </Link>
            <Link to="/features" className={navLinkClasses}>
              <span className={linkTextClasses}>Features</span>
            </Link>
            <Link to="/solutions" className={navLinkClasses}>
              <span className={linkTextClasses}>Solutions</span>
            </Link>
            <Link to="/contact" className={navLinkClasses}>
              <span className={linkTextClasses}>Contact</span>
            </Link>
            <Link
              to="/get-started"
              className="bg-[#FA7533] text-white px-4 py-2 rounded border border-white hover:bg-white hover:text-[#09090B] transition"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="md:hidden bg-[#09090B] px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="block px-3 py-2 rounded text-white hover:bg-[#FA7533] hover:underline hover:decoration-yellow-300 hover:underline-offset-4"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/features"
            className="block px-3 py-2 rounded text-white hover:bg-[#FA7533] hover:underline hover:decoration-yellow-300 hover:underline-offset-4"
            onClick={() => setIsOpen(false)}
          >
            Features
          </Link>
          <Link
            to="/solutions"
            className="block px-3 py-2 rounded text-white hover:bg-[#FA7533] hover:underline hover:decoration-yellow-300 hover:underline-offset-4"
            onClick={() => setIsOpen(false)}
          >
            Solutions
          </Link>
          <Link
            to="/contact"
            className="block px-3 py-2 rounded text-white hover:bg-[#FA7533] hover:underline hover:decoration-yellow-300 hover:underline-offset-4"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/get-started"
            className="block px-3 py-2 rounded bg-[#09090B] border border-white text-white text-center hover:bg-white hover:text-[#09090B] transition"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
