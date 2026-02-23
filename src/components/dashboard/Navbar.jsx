import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  // Styles moved to constants to keep the JSX clean
  const navItemBase = "px-6 py-2 rounded-full text-sm font-medium transition-all";
  const activeStyle = "bg-[#0d59f2] text-white font-semibold";
  const inactiveStyle = "text-slate-400 hover:text-white";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/70 backdrop-blur-xl border-b border-white/10 h-20 flex items-center">
      <div className="max-w-7xl mx-auto w-full px-6 flex justify-between items-center">
        
        {/* Logo - Use Link for standard navigation */}
        <Link to="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-[#0d59f2] rounded-lg flex items-center justify-center text-white">
            <span className="material-symbols-outlined font-bold">terminal</span>
          </div>
          <span className="text-xl font-black tracking-tighter text-white">MICHAEL.DEV</span>
        </Link>

        {/* Navigation Menu */}
        <div className="hidden md:flex items-center gap-1 bg-[#1a1a1a]/50 p-1 rounded-full border border-white/5">
          <NavLink 
            to="/" 
            className={({ isActive }) => `${navItemBase} ${isActive ? activeStyle : inactiveStyle}`}
          >
            Home
          </NavLink>
          
          <NavLink 
            to="/about" 
            className={({ isActive }) => `${navItemBase} ${isActive ? activeStyle : inactiveStyle}`}
          >
            About Me
          </NavLink>

          <NavLink 
            to="/portfolio" 
            className={({ isActive }) => `${navItemBase} ${isActive ? activeStyle : inactiveStyle}`}
          >
            Portfolio
          </NavLink>
        </div>

        <Link to="/contact" className="bg-[#0d59f2] hover:bg-[#0d59f2]/90 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all">
          Get in Touch
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;