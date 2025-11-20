import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import setorLogo from '../Asset/setor putih.png';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/#contact', label: 'Contact' },  // Updated to scroll to contact section on home page
    { path: '/report-form', label: 'Report' },
  ];

  // Handle scrolling to section when hash changes
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-800 to-green-600 text-white">
      {/* NAVBAR */}
      <header className="bg-[#255F3B] sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">

          <div className="flex items-center space-x-2">
            {location.pathname === '/' ? (
              <img src={setorLogo} alt="SETOR Logo" className="w-8 h-8" />
            ) : (
              <img src={setorLogo} alt="SETOR Logo" className="w-8 h-8" />
            )}
            <h1 className="text-xl font-bold">SETOR</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md transition-colors ${
                  location.pathname === item.path
                    ? 'bg-white text-green-800 font-semibold'
                    : 'hover:bg-green-800'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#255F3B] bg-[#255F3B] shadow-md">
            <div className="flex flex-col space-y-4 px-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-4 py-2 rounded-md ${
                    location.pathname === item.path
                      ? 'bg-white text-[#255F3B] font-semibold'
                      : 'hover:bg-amber-200'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* FOOTER */}
      <footer className="bg-[#255F3B] py-6 px-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <div className="container mx-auto text-center">
          <p className="text-sm opacity-80">
            © 2025 SETOR – Sehat Monitor. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;