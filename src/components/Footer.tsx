import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#27272A] text-gray-300 py-6 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand & Description */}
        <div>
          <h2 className="flex items-center text-white text-2xl font-bold mb-3 space-x-3">
            <img
              src="/images/logo.avif"
              alt="ClaimCore Logo"
              className="h-8 w-auto"
            />
            <span>ClaimCore</span>
          </h2>
          <p className="text-gray-400 max-w-xs">
            The all-in-one claims solution for modern insurance professionals.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6">
            <a
              href="https://www.facebook.com/yourfacebookpage"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
              aria-label="Facebook"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/yourlinkedinprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://twitter.com/yourtwitterhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
              aria-label="Twitter"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://www.instagram.com/yourinstagramhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Product Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Product</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/features" className="hover:text-white">
                Features
              </Link>
            </li>
            <li>
              <Link to="/solutions" className="hover:text-white">
                Solutions
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="hover:text-white">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:text-white">
                Pricing
              </Link>
            </li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link to="/careers" className="hover:text-white">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-white">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Support</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/help-center" className="hover:text-white">
                Help Center
              </Link>
            </li>
            <li>
              <Link to="/documentation" className="hover:text-white">
                Documentation
              </Link>
            </li>
            <li>
              <Link to="/api-reference" className="hover:text-white">
                API Reference
              </Link>
            </li>
            <li>
              <Link to="/status" className="hover:text-white">
                Status
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-700 my-6" />

      {/* Bottom Row */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
        <p>© 2024 ClaimCore. All rights reserved.</p>

        <div className="flex space-x-6 mt-4 sm:mt-0">
          <Link to="/privacy-policy" className="hover:text-white">
            Privacy Policy
          </Link>
          <Link to="/terms-of-service" className="hover:text-white">
            Terms of Service
          </Link>
          <Link to="/cookie-policy" className="hover:text-white">
            Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
